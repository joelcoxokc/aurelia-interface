System.register(["aurelia-event-aggregator"], function (_export) {
  "use strict";

  var EventAggregator, _prototypeProperties, _classCallCheck, Welcome;
  return {
    setters: [function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Welcome = _export("Welcome", (function () {
        function Welcome(eventAggregator) {
          _classCallCheck(this, Welcome);

          this.events = eventAggregator1;
          this.heading = "Aurelia Interface ";
        }

        _prototypeProperties(Welcome, {
          inject: {
            value: function inject() {
              return [EventAggregator];
            },
            writable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate(params, queryString, routeConfig) {
              if (routeConfig) {
                this.toolbar = routeConfig.toolbar;
                this.toolbar.configure({ size: "xl",
                  fixed: true,
                  bgColor: "bg-purple",
                  textColor: "text-white"
                });
                this.events.publish("$stateChanged", this.toolbar);
              }
            },
            writable: true,
            configurable: true
          }
        });

        return Welcome;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsZUFBZSx5Q0FFVixPQUFPOzs7QUFGWixxQkFBZSwyQkFBZixlQUFlOzs7Ozs7O0FBRVYsYUFBTztBQVFMLGlCQVJGLE9BQU8sQ0FRSixlQUFlO2dDQVJsQixPQUFPOztBQVNaLGNBQUksQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUE7QUFDOUIsY0FBSSxDQUFDLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQztTQUN2Qzs7NkJBWFEsT0FBTztBQUVULGdCQUFNO21CQUFBLGtCQUFFO0FBRVgscUJBQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUU1Qjs7Ozs7QUFPRCxrQkFBUTttQkFBQSxrQkFBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBQztBQUV0QyxrQkFBRyxXQUFXLEVBQUM7QUFDWCxvQkFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFBO0FBQ2xDLG9CQUFJLENBQUMsT0FBTyxDQUNQLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBUSxJQUFJO0FBQ2hCLHVCQUFLLEVBQU8sSUFBSTtBQUNoQix5QkFBTyxFQUFLLFdBQVc7QUFDdkIsMkJBQVMsRUFBRyxZQUFZO2lCQUN6QixDQUFDLENBQUE7QUFDakIsb0JBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7ZUFDckQ7YUFFSjs7Ozs7O2VBMUJRLE9BQU8iLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL3BsdWdpbnMvIn0=