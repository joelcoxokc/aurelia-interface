System.register(["aurelia-event-aggregator"], function (_export) {
  "use strict";

  var EventAggregator, _prototypeProperties, _classCallCheck, Notify;
  return {
    setters: [function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Notify = _export("Notify", (function () {
        function Notify(eventAggregator) {
          _classCallCheck(this, Notify);

          this.eventAggregator = eventAggregator;
        }

        _prototypeProperties(Notify, {
          inject: {
            value: function inject() {
              return [EventAggregator];
            },
            writable: true,
            configurable: true
          }
        }, {
          subscribe: {
            value: function subscribe(message, callback) {
              this.eventAggregator.subscribe(message, callback);
            },
            writable: true,
            configurable: true
          },
          publish: {
            value: function publish(message, payload) {
              this.eventAggregator.publish(message, payload);
            },
            writable: true,
            configurable: true
          }
        });

        return Notify;
      })());
    }
  };
});