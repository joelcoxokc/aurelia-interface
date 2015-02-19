/* */ 
"format register";
define(["exports"], function (exports) {
  "use strict";

  var _prototypeProperties = function (child, staticProps, instanceProps) {
    if (staticProps) Object.defineProperties(child, staticProps);
    if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
  };

  exports.includeEventsIn = includeEventsIn;
  exports.install = install;
  var Handler = (function () {
    function Handler(messageType, callback) {
      this.messageType = messageType;
      this.callback = callback;
    }

    _prototypeProperties(Handler, null, {
      handle: {
        value: function handle(message) {
          if (message instanceof this.messageType) {
            this.callback.call(null, message);
          }
        },
        writable: true,
        enumerable: true,
        configurable: true
      }
    });

    return Handler;
  })();

  var EventAggregator = (function () {
    function EventAggregator() {
      this.eventLookup = {};
      this.messageHandlers = [];
    }

    _prototypeProperties(EventAggregator, null, {
      publish: {
        value: function publish(event, data) {
          var subscribers, i, handler;

          if (typeof event === "string") {
            subscribers = this.eventLookup[event];
            if (subscribers) {
              subscribers = subscribers.slice();
              i = subscribers.length;

              while (i--) {
                subscribers[i](data, event);
              }
            }
          } else {
            subscribers = this.messageHandlers.slice();
            i = subscribers.length;

            while (i--) {
              subscribers[i].handle(event);
            }
          }
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      subscribe: {
        value: function subscribe(event, callback) {
          var subscribers, handler;

          if (typeof event === "string") {
            subscribers = this.eventLookup[event] || (this.eventLookup[event] = []);

            subscribers.push(callback);

            return function () {
              subscribers.splice(subscribers.indexOf(callback), 1);
            };
          } else {
            handler = new Handler(event, callback);
            subscribers = this.messageHandlers;

            subscribers.push(handler);

            return function () {
              subscribers.splice(subscribers.indexOf(handler), 1);
            };
          }
        },
        writable: true,
        enumerable: true,
        configurable: true
      }
    });

    return EventAggregator;
  })();

  exports.EventAggregator = EventAggregator;
  function includeEventsIn(obj) {
    var ea = new EventAggregator();

    obj.subscribe = function (event, callback) {
      return ea.subscribe(event, callback);
    };

    obj.publish = function (event, data) {
      ea.publish(event, data);
    };

    return ea;
  }

  function install(aurelia) {
    aurelia.withInstance(EventAggregator, includeEventsIn(aurelia));
  }
});