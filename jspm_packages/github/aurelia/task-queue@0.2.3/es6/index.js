/* */ 
"format register";
var BrowserMutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var hasSetImmediate = typeof setImmediate === 'function';

function makeRequestFlushFromMutationObserver(flush) {
  var toggle = 1;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, {characterData: true});
  return function requestFlush() {
    toggle = -toggle;
    node.data = toggle;
  };
}

function makeRequestFlushFromTimer(flush) {
  return function requestFlush() {
    // We dispatch a timeout with a specified delay of 0 for engines that
    // can reliably accommodate that request. This will usually be snapped
    // to a 4 milisecond delay, but once we're flushing, there's no delay
    // between events.
    var timeoutHandle = setTimeout(handleFlushTimer, 0);
    // However, since this timer gets frequently dropped in Firefox
    // workers, we enlist an interval handle that will try to fire
    // an event 20 times per second until it succeeds.
    var intervalHandle = setInterval(handleFlushTimer, 50);
    function handleFlushTimer() {
      // Whichever timer succeeds will cancel both timers and request the
      // flush.
      clearTimeout(timeoutHandle);
      clearInterval(intervalHandle);
      flush();
    }
  };
}

export class TaskQueue {
  constructor(){
    this.microTaskQueue = [];
    this.microTaskQueueCapacity = 1024;
    this.taskQueue = [];

    if (typeof BrowserMutationObserver === 'function') {
      this.requestFlushMicroTaskQueue = makeRequestFlushFromMutationObserver(() => this.flushMicroTaskQueue());
    }else {
      this.requestFlushMicroTaskQueue = makeRequestFlushFromTimer(() => this.flushMicroTaskQueue());
    }

    this.requestFlushTaskQueue = makeRequestFlushFromTimer(() => this.flushTaskQueue());
  }

  queueMicroTask(task){
    if (this.microTaskQueue.length < 1) {
      this.requestFlushMicroTaskQueue();
    }

    this.microTaskQueue.push(task);
  }

  queueTask(task){
    if (this.taskQueue.length < 1) {
      this.requestFlushTaskQueue();
    }

    this.taskQueue.push(task);
  }

  flushTaskQueue(){
    var queue = this.taskQueue,
        index = 0,
        task;

    this.taskQueue = []; //recursive calls to queueTask should be scheduled after the next cycle

    while (index < queue.length) {
      task = queue[index];

      try{
        task.call();
      } catch(error){
        this.onError(error, task);
      }

      index++;
    }
  }

  flushMicroTaskQueue(){
    var queue = this.microTaskQueue,
        capacity = this.microTaskQueueCapacity,
        index = 0,
        task;

    while (index < queue.length) {
      task = queue[index];

      try{
        task.call();
      } catch(error){
        this.onError(error, task);
      }

      index++;

      // Prevent leaking memory for long chains of recursive calls to `queueMicroTask`.
      // If we call `queueMicroTask` within a MicroTask scheduled by `queueMicroTask`, the queue will
      // grow, but to avoid an O(n) walk for every MicroTask we execute, we don't
      // shift MicroTasks off the queue after they have been executed.
      // Instead, we periodically shift 1024 MicroTasks off the queue.
      if (index > capacity) {
          // Manually shift all values starting at the index back to the
          // beginning of the queue.
          for (var scan = 0; scan < index; scan++) {
              queue[scan] = queue[scan + index];
          }

          queue.length -= index;
          index = 0;
      }
    }

    queue.length = 0;
  }

  onError(error, task){
    if('onError' in task){
      task.onError(error);
    } else if (hasSetImmediate) {
      setImmediate(() => { throw error; });
    } else {
      setTimeout(() => { throw error; }, 0);
    }
  }
}
