System.register(["aurelia-event-aggregator"], function (_export) {
  "use strict";

  var EventAggregator, _prototypeProperties, _classCallCheck, MsgPublisher, MsgSubscriber;
  return {
    setters: [function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      MsgPublisher = _export("MsgPublisher", (function () {
        function MsgPublisher(eventAggregator) {
          _classCallCheck(this, MsgPublisher);

          this.eventAggregator = EventAggregator;
        }

        _prototypeProperties(MsgPublisher, {
          inject: {
            value: function inject() {
              return [EventAggregator];
            },
            writable: true,
            configurable: true
          }
        }, {
          publish: {
            value: function publish(channel, payload) {
              this.eventAggregator.publish(channel, payload);
            },
            writable: true,
            configurable: true
          }
        });

        return MsgPublisher;
      })());
      MsgSubscriber = _export("MsgSubscriber", (function () {
        function MsgSubscriber(eventAggregator) {
          _classCallCheck(this, MsgSubscriber);

          this.eventAggregator = eventAggregator;
        }

        _prototypeProperties(MsgSubscriber, {
          inject: {
            value: function inject() {
              return [EventAggregator];
            },
            writable: true,
            configurable: true
          }
        }, {
          subscribe: {
            value: function subscribe(channel) {
              this.eventAggregator.subscribe(channel, function (payload) {
                console.log("Subscribe Payload", payload);
              });
            },
            writable: true,
            configurable: true
          }
        });

        return MsgSubscriber;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsZUFBZSx5Q0FHVixZQUFZLEVBMEJaLGFBQWE7OztBQTdCbEIscUJBQWUsMkJBQWYsZUFBZTs7Ozs7OztBQUdWLGtCQUFZO0FBVVYsaUJBVkYsWUFBWSxDQVVULGVBQWU7Z0NBVmxCLFlBQVk7O0FBWWpCLGNBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFBO1NBRXpDOzs2QkFkUSxZQUFZO0FBR2QsZ0JBQU07bUJBQUEsa0JBQUc7QUFFWixxQkFBTyxDQUFDLGVBQWUsQ0FBQyxDQUFBO2FBRTNCOzs7OztBQVVELGlCQUFPO21CQUFBLGlCQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUM7QUFFckIsa0JBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQTthQUVqRDs7Ozs7O2VBckJRLFlBQVk7O0FBMEJaLG1CQUFhO0FBU1gsaUJBVEYsYUFBYSxDQVNWLGVBQWU7Z0NBVGxCLGFBQWE7O0FBV2xCLGNBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFBO1NBRXpDOzs2QkFiUSxhQUFhO0FBRWYsZ0JBQU07bUJBQUEsa0JBQUc7QUFFWixxQkFBTyxDQUFDLGVBQWUsQ0FBQyxDQUFBO2FBRTNCOzs7OztBQVVELG1CQUFTO21CQUFBLG1CQUFDLE9BQU8sRUFBQztBQUNkLGtCQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBQSxPQUFPLEVBQUc7QUFDOUMsdUJBQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUE7ZUFDNUMsQ0FBQyxDQUFBO2FBQ0w7Ozs7OztlQXBCUSxhQUFhIiwiZmlsZSI6Im1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiL2Rpc3QvIn0=