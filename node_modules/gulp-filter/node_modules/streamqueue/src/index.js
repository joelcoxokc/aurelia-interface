var Stream = require('readable-stream')
  , isStream = require('isstream')
  , util = require('util')
;

// Inherit of PassThrough stream
util.inherits(StreamQueue, Stream.PassThrough);

// Constructor
function StreamQueue(options) {

  options = options || {};

  // Ensure new were used
  if (!(this instanceof StreamQueue)) {
    return new (StreamQueue.bind.apply(StreamQueue,
      [StreamQueue].concat([].slice.call(arguments,0))));
  }

  // Options
  this._pauseFlowingStream = true;
  this._resumeFlowingStream = true;
  if(!(isStream(options) || 'function' === typeof options)) {
    if('boolean' == typeof options.pauseFlowingStream) {
      this._pauseFlowingStream = options.pauseFlowingStream;
      delete options.pauseFlowingStream;
    }
    if('boolean' == typeof options.resumeFlowingStream) {
      this._resumeFlowingStream = options.resumeFlowingStream;
      delete options.resumeFlowingStream;
    }
  }

  // Parent constructor
  Stream.PassThrough.call(this,
    isStream(options)  || 'function' === typeof options
      ? undefined
      : options
  );

  // Prepare streams queue
  this._streams = [];
  this._running = false;
  this._ending = false;
  this._objectMode = options.objectMode || false;

  // Queue given streams and ends
  if(arguments.length > 1 || isStream(options)
    || 'function' === typeof options) {
    this.done.apply(this,
      [].slice.call(arguments,
        isStream(options) || 'function' === typeof options ? 0 : 1));
  }

}

// Queue each stream given in argument
StreamQueue.prototype.queue = function() {
  var streams = [].slice.call(arguments, 0)
    , _self = this;

  if(this._ending) {
    throw new Error('Cannot add more streams to the queue.');
  }

  streams = streams.map(function(stream) {
    function wrapper(stream) {
      stream.on('error', function(err) {
        _self.emit('error', err);
      });
      if('undefined' == typeof stream._readableState) {
        stream = (new Stream.Readable({objectMode: _self._objectMode}))
          .wrap(stream);
      }
      if(this._pauseFlowingStream&&stream._readableState.flowing) {
        stream.pause();
      }
      if(this._resumeFlowingStream&&stream._readableState.flowing) {
        stream.resume();
      }
      return stream;
    }
    if('function' === typeof stream) {
      return function() {
        return wrapper(stream());
      };
    }
    return wrapper(stream);
  });

  this._streams = this._streams.length ? this._streams.concat(streams) : streams;

  if(!this._running) {
    this._pipeNextStream();
  }

  return this;

};

// Pipe the next available stream
StreamQueue.prototype._pipeNextStream = function() {
  var stream;
  if(!this._streams.length) {
    if(this._ending) {
      process.nextTick(function() {
        this.end();
      }.bind(this));
    } else {
      this._running = false;
    }
    return;
  }
  this._running = true;
  stream = this._streams.shift();
  if('function' === typeof stream) {
    stream = stream();
  }
  stream.once('end', function() {
    this.unpipe(stream);
    this._pipeNextStream();
  }.bind(this));
  stream.pipe(this, {end: false});
};

// Queue each stream given in argument
StreamQueue.prototype.done = function() {
  var _self = this;
  if(this._ending) {
    throw new Error('The queue is already ending.');
  }
  if(arguments.length) {
    this.queue.apply(this, arguments);
  }
  this._ending = true;
  if(!this._running) {
    process.nextTick(function() {
      this.end();
    }.bind(this));
  }
  return this;
};

// Length
Object.defineProperty(StreamQueue.prototype, 'length', {
  get: function() {
    return this._streams.length + (this._running ? 1 : 0);
  }
});

module.exports = StreamQueue;

