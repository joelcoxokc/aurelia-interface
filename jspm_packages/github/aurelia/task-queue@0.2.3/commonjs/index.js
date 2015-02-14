/* */ 
"format register";
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var BrowserMutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var hasSetImmediate = typeof setImmediate === "function";

function makeRequestFlushFromMutationObserver(flush) {
  var toggle = 1;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode("");
  observer.observe(node, { characterData: true });
  return function requestFlush() {
    toggle = -toggle;
    node.data = toggle;
  };
}

function makeRequestFlushFromTimer(flush) {
  return function requestFlush() {
    var timeoutHandle = setTimeout(handleFlushTimer, 0);
    var intervalHandle = setInterval(handleFlushTimer, 50);
    function handleFlushTimer() {
      clearTimeout(timeoutHandle);
      clearInterval(intervalHandle);
      flush();
    }
  };
}

var TaskQueue = exports.TaskQueue = (function () {
  function TaskQueue() {
    var _this = this;
    this.microTaskQueue = [];
    this.microTaskQueueCapacity = 1024;
    this.taskQueue = [];

    if (typeof BrowserMutationObserver === "function") {
      this.requestFlushMicroTaskQueue = makeRequestFlushFromMutationObserver(function () {
        return _this.flushMicroTaskQueue();
      });
    } else {
      this.requestFlushMicroTaskQueue = makeRequestFlushFromTimer(function () {
        return _this.flushMicroTaskQueue();
      });
    }

    this.requestFlushTaskQueue = makeRequestFlushFromTimer(function () {
      return _this.flushTaskQueue();
    });
  }

  _prototypeProperties(TaskQueue, null, {
    queueMicroTask: {
      value: function queueMicroTask(task) {
        if (this.microTaskQueue.length < 1) {
          this.requestFlushMicroTaskQueue();
        }

        this.microTaskQueue.push(task);
      },
      writable: true,
      configurable: true
    },
    queueTask: {
      value: function queueTask(task) {
        if (this.taskQueue.length < 1) {
          this.requestFlushTaskQueue();
        }

        this.taskQueue.push(task);
      },
      writable: true,
      configurable: true
    },
    flushTaskQueue: {
      value: function flushTaskQueue() {
        var queue = this.taskQueue,
            index = 0,
            task;

        this.taskQueue = [];

        while (index < queue.length) {
          task = queue[index];

          try {
            task.call();
          } catch (error) {
            this.onError(error, task);
          }

          index++;
        }
      },
      writable: true,
      configurable: true
    },
    flushMicroTaskQueue: {
      value: function flushMicroTaskQueue() {
        var queue = this.microTaskQueue,
            capacity = this.microTaskQueueCapacity,
            index = 0,
            task;

        while (index < queue.length) {
          task = queue[index];

          try {
            task.call();
          } catch (error) {
            this.onError(error, task);
          }

          index++;

          if (index > capacity) {
            for (var scan = 0; scan < index; scan++) {
              queue[scan] = queue[scan + index];
            }

            queue.length -= index;
            index = 0;
          }
        }

        queue.length = 0;
      },
      writable: true,
      configurable: true
    },
    onError: {
      value: function onError(error, task) {
        if ("onError" in task) {
          task.onError(error);
        } else if (hasSetImmediate) {
          setImmediate(function () {
            throw error;
          });
        } else {
          setTimeout(function () {
            throw error;
          }, 0);
        }
      },
      writable: true,
      configurable: true
    }
  });

  return TaskQueue;
})();
exports.__esModule = true;