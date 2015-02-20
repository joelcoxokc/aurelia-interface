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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxlQUFlLHlDQUdWLE1BQU07OztBQUhYLHFCQUFlLDJCQUFmLGVBQWU7Ozs7Ozs7QUFHVixZQUFNO0FBUUosaUJBUkYsTUFBTSxDQVFILGVBQWU7Z0NBUmxCLE1BQU07O0FBVVgsY0FBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7U0FFMUM7OzZCQVpRLE1BQU07QUFFUixnQkFBTTttQkFBQSxrQkFBRTtBQUVYLHFCQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7YUFFNUI7Ozs7O0FBUUQsbUJBQVM7bUJBQUEsbUJBQUMsT0FBTyxFQUFFLFFBQVEsRUFBQztBQUN4QixrQkFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFBO2FBQ3BEOzs7O0FBQ0QsaUJBQU87bUJBQUEsaUJBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQztBQUNyQixrQkFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFBO2FBRWpEOzs7Ozs7ZUFwQlEsTUFBTSIsImZpbGUiOiJub3RpZnkuanMiLCJzb3VyY2VSb290IjoiL3NyYy9wbHVnaW5zLyJ9