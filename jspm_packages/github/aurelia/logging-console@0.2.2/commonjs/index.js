/* */ 
"format register";
"use strict";

var _toArray = function (arr) {
  return Array.isArray(arr) ? arr : Array.from(arr);
};

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var ConsoleAppender = (function () {
  function ConsoleAppender() {}

  _prototypeProperties(ConsoleAppender, null, {
    debug: {
      value: function debug(logger, message) {
        for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }

        console.debug.apply(console, ["DEBUG [" + logger.id + "] " + message].concat(_toArray(rest)));
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    info: {
      value: function info(logger, message) {
        for (var _len2 = arguments.length, rest = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          rest[_key2 - 2] = arguments[_key2];
        }

        console.info.apply(console, ["INFO [" + logger.id + "] " + message].concat(_toArray(rest)));
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    warn: {
      value: function warn(logger, message) {
        for (var _len3 = arguments.length, rest = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
          rest[_key3 - 2] = arguments[_key3];
        }

        console.warn.apply(console, ["WARN [" + logger.id + "] " + message].concat(_toArray(rest)));
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    error: {
      value: function error(logger, message) {
        for (var _len4 = arguments.length, rest = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
          rest[_key4 - 2] = arguments[_key4];
        }

        console.error.apply(console, ["ERROR [" + logger.id + "] " + message].concat(_toArray(rest)));
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return ConsoleAppender;
})();

exports.ConsoleAppender = ConsoleAppender;