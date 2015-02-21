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

          this.events = eventAggregator;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsZUFBZSx5Q0FFVixPQUFPOzs7QUFGWixxQkFBZSwyQkFBZixlQUFlOzs7Ozs7O0FBRVYsYUFBTztBQVFMLGlCQVJGLE9BQU8sQ0FRSixlQUFlO2dDQVJsQixPQUFPOztBQVNaLGNBQUksQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFBO0FBQzdCLGNBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQW9CLENBQUM7U0FDdkM7OzZCQVhRLE9BQU87QUFFVCxnQkFBTTttQkFBQSxrQkFBRTtBQUVYLHFCQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7YUFFNUI7Ozs7O0FBT0Qsa0JBQVE7bUJBQUEsa0JBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUM7QUFFdEMsa0JBQUcsV0FBVyxFQUFDO0FBQ1gsb0JBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQTtBQUNsQyxvQkFBSSxDQUFDLE9BQU8sQ0FDUCxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQVEsSUFBSTtBQUNoQix1QkFBSyxFQUFPLElBQUk7QUFDaEIseUJBQU8sRUFBSyxXQUFXO0FBQ3ZCLDJCQUFTLEVBQUcsWUFBWTtpQkFDekIsQ0FBQyxDQUFBO0FBQ2pCLG9CQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2VBQ3JEO2FBRUo7Ozs7OztlQTFCUSxPQUFPIiwiZmlsZSI6IndlbGNvbWUuanMiLCJzb3VyY2VSb290IjoiL3NyYy9wbHVnaW5zLyJ9