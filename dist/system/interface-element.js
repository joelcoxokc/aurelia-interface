System.register(["./ai-element", "aurelia-event-aggregator"], function (_export) {
  "use strict";

  var AiElement, EventAggregator, _prototypeProperties, _inherits, _classCallCheck, InterfaceElement;
  return {
    setters: [function (_aiElement) {
      AiElement = _aiElement.AiElement;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      InterfaceElement = _export("InterfaceElement", (function (AiElement) {
        function InterfaceElement(eventAggregator) {
          _classCallCheck(this, InterfaceElement);

          this.eventAggregator = eventAggregator;
        }

        _inherits(InterfaceElement, AiElement);

        _prototypeProperties(InterfaceElement, {
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
              this.eventAggregator.subscribe(SomeMessage, callback);
            },
            writable: true,
            configurable: true
          },
          publish: {
            value: function publish(message, callback) {
              this.eventAggregator.subscribe(SomeMessage, callback);
            },
            writable: true,
            configurable: true
          }
        });

        return InterfaceElement;
      })(AiElement));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyZmFjZS1lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFNBQVMsRUFDVCxlQUFlLG9EQUdWLGdCQUFnQjs7O0FBSnJCLGVBQVMsY0FBVCxTQUFTOztBQUNULHFCQUFlLDJCQUFmLGVBQWU7Ozs7Ozs7OztBQUdWLHNCQUFnQiwwQ0FBUyxTQUFTO0FBT2hDLGlCQVBGLGdCQUFnQixDQU9iLGVBQWU7Z0NBUGxCLGdCQUFnQjs7QUFTckIsY0FBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7U0FDMUM7O2tCQVZRLGdCQUFnQixFQUFTLFNBQVM7OzZCQUFsQyxnQkFBZ0I7QUFDbEIsZ0JBQU07bUJBQUEsa0JBQUU7QUFFWCxxQkFBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBRTVCOzs7OztBQU9ELG1CQUFTO21CQUFBLG1CQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUM7QUFDeEIsa0JBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUN6RDs7OztBQUVELGlCQUFPO21CQUFBLGlCQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUM7QUFDdEIsa0JBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUN6RDs7Ozs7O2VBbEJRLGdCQUFnQjtTQUFTLFNBQVMiLCJmaWxlIjoiaW50ZXJmYWNlLWVsZW1lbnQuanMiLCJzb3VyY2VSb290IjoiL3NyYy9wbHVnaW5zLyJ9