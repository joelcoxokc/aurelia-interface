/* */ 
System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, levels, loggers, logLevel, appenders, slice, loggerConstructionKey, Logger;
  _export("getLogger", getLogger);

  _export("addAppender", addAppender);

  _export("setLevel", setLevel);

  function log(logger, level, args) {
    var i = appenders.length,
        current;

    args = slice.call(args);
    args.unshift(logger);

    while (i--) {
      current = appenders[i];
      current[level].apply(current, args);
    }
  }

  function debug() {
    if (logLevel < 4) {
      return;
    }

    log(this, "debug", arguments);
  }

  function info() {
    if (logLevel < 3) {
      return;
    }

    log(this, "info", arguments);
  }

  function warn() {
    if (logLevel < 2) {
      return;
    }

    log(this, "warn", arguments);
  }

  function error() {
    if (logLevel < 1) {
      return;
    }

    log(this, "error", arguments);
  }

  function connectLogger(logger) {
    logger.debug = debug;
    logger.info = info;
    logger.warn = warn;
    logger.error = error;
  }

  function createLogger(id) {
    var logger = new Logger(id, loggerConstructionKey);

    if (appenders.length) {
      connectLogger(logger);
    }

    return logger;
  }

  function getLogger(id) {
    return loggers[id] || (loggers[id] = createLogger(id));
  }

  function addAppender(appender) {
    appenders.push(appender);

    if (appenders.length === 1) {
      for (var key in loggers) {
        connectLogger(loggers[key]);
      }
    }
  }

  function setLevel(level) {
    logLevel = level;
  }

  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      levels = _export("levels", {
        none: 0,
        error: 1,
        warn: 2,
        info: 3,
        debug: 4
      });
      loggers = {};
      logLevel = levels.none;
      appenders = [];
      slice = Array.prototype.slice;
      loggerConstructionKey = {};
      Logger = (function () {
        function Logger(id, key) {
          if (key !== loggerConstructionKey) {
            throw new Error("You cannot instantiate \"Logger\". Use the \"getLogger\" API instead.");
          }

          this.id = id;
        }

        _prototypeProperties(Logger, null, {
          debug: {
            value: function debug() {},
            writable: true,
            enumerable: true,
            configurable: true
          },
          info: {
            value: function info() {},
            writable: true,
            enumerable: true,
            configurable: true
          },
          warn: {
            value: function warn() {},
            writable: true,
            enumerable: true,
            configurable: true
          },
          error: {
            value: function error() {},
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return Logger;
      })();
      _export("Logger", Logger);
    }
  };
});