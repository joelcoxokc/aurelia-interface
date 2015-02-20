System.register(["aurelia-templating", "./ai-element", "./interface-element", "./toolbar", "./notify"], function (_export) {
  "use strict";

  var Behavior, AiElement, InterfaceElement, Toolbar, Notify, _prototypeProperties, _inherits, _classCallCheck, defaults, AiToolbar, ToolbarContainer;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_aiElement) {
      AiElement = _aiElement.AiElement;
    }, function (_interfaceElement) {
      InterfaceElement = _interfaceElement.InterfaceElement;
    }, function (_toolbar) {
      Toolbar = _toolbar.Toolbar;
    }, function (_notify) {
      Notify = _notify.Notify;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      defaults = ["size", "fixed", "bgColor", "textColor", "brand"];
      AiToolbar = _export("AiToolbar", (function (AiElement) {
        function AiToolbar(element, notify) {
          _classCallCheck(this, AiToolbar);

          var _this = this;

          this.events = notify;
          this.element = element;
          this.current = new Toolbar();

          _.assign(this, this.current);


          this.addClass("ai-toolbar");
          this.events.subscribe("$stateChanged", function (payload) {
            console.log("Recieved from ai-toolbar", payload);
          });
        }

        _inherits(AiToolbar, AiElement);

        _prototypeProperties(AiToolbar, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-toolbar").withProperty("router").withProperty("fixed").withProperty("brand", "brandChanged").withProperty("bgColor", "bgChanged").withProperty("textColor", "textChanged").withProperty("size", "sizeChanged").withProperty("toolbar", "toolbarChanged");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element, Notify];
            },
            writable: true,
            configurable: true
          }
        }, {
          bind: {
            value: function bind() {
              this.container = new ToolbarContainer(this.element.firstElementChild);
            },
            writable: true,
            configurable: true
          },
          toolbarChanged: {
            value: function toolbarChanged(tools) {
              console.log("tools", tools);
            },
            writable: true,
            configurable: true
          },
          bgChanged: {
            value: function bgChanged(value) {
              return this.container.toggleClassList("bgColor", "bg-", this, null, null, "hello");
            },
            writable: true,
            configurable: true
          },
          textChanged: {
            value: function textChanged(value) {
              return this.container.toggleClassList("textColor", "text-", this);
            },
            writable: true,
            configurable: true
          },
          brandChanged: {
            value: function brandChanged() {},
            writable: true,
            configurable: true
          },
          sizeChanged: {
            value: function sizeChanged(value) {
              return this.toggleClassList("size", "toolbar-");
            },
            writable: true,
            configurable: true
          }
        });

        return AiToolbar;
      })(AiElement));
      ToolbarContainer = (function (AiElement) {
        function ToolbarContainer() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _classCallCheck(this, ToolbarContainer);

          this.element = args[0];
        }

        _inherits(ToolbarContainer, AiElement);

        return ToolbarContainer;
      })(AiElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLXRvb2xiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSxFQUNSLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsT0FBTyxFQUNQLE1BQU0sb0RBRVYsUUFBUSxFQUVDLFNBQVMsRUFvRWhCLGdCQUFnQjs7O0FBNUVkLGNBQVEsc0JBQVIsUUFBUTs7QUFDUixlQUFTLGNBQVQsU0FBUzs7QUFDVCxzQkFBZ0IscUJBQWhCLGdCQUFnQjs7QUFDaEIsYUFBTyxZQUFQLE9BQU87O0FBQ1AsWUFBTSxXQUFOLE1BQU07Ozs7Ozs7OztBQUVWLGNBQVEsR0FBSSxDQUFFLE1BQU0sRUFBRyxPQUFPLEVBQUcsU0FBUyxFQUFHLFdBQVcsRUFBRyxPQUFPLENBQUU7QUFFM0QsZUFBUyxtQ0FBUyxTQUFTO0FBa0J6QixpQkFsQkYsU0FBUyxDQWtCTixPQUFPLEVBQUUsTUFBTTtnQ0FsQmxCLFNBQVM7O0FBbUJkLGNBQUksS0FBSyxHQUFHLElBQUksQ0FBQzs7QUFFakIsY0FBSSxDQUFDLE1BQU0sR0FBSyxNQUFNLENBQUM7QUFDdkIsY0FBSSxDQUFDLE9BQU8sR0FBSSxPQUFPLENBQUE7QUFDdkIsY0FBSSxDQUFDLE9BQU8sR0FBSSxJQUFJLE9BQU8sRUFBRSxDQUFBOztBQUk3QixXQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7OztBQUc3QixjQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFBO0FBQzNCLGNBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxVQUFDLE9BQU8sRUFBRztBQUM5QyxtQkFBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxPQUFPLENBQUMsQ0FBQTtXQUNuRCxDQUFDLENBQUE7U0FDTDs7a0JBbENRLFNBQVMsRUFBUyxTQUFTOzs2QkFBM0IsU0FBUztBQUVYLGtCQUFRO21CQUFBLG9CQUFFO0FBQ2IscUJBQU8sUUFBUSxDQUNWLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FDM0IsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUN0QixZQUFZLENBQUMsT0FBTyxDQUFDLENBQ3JCLFlBQVksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQ3JDLFlBQVksQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQ3BDLFlBQVksQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQ3hDLFlBQVksQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQ25DLFlBQVksQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTthQUNqRDs7OztBQUVNLGdCQUFNO21CQUFBLGtCQUFFO0FBQ1gscUJBQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUE7YUFDM0I7Ozs7O0FBb0JELGNBQUk7bUJBQUEsZ0JBQUU7QUFDRixrQkFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQTthQUN4RTs7OztBQUVELHdCQUFjO21CQUFBLHdCQUFDLEtBQUssRUFBQztBQUNqQixxQkFBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7YUFDOUI7Ozs7QUFHRCxtQkFBUzttQkFBQSxtQkFBQyxLQUFLLEVBQUM7QUFDWixxQkFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFBO2FBQ3JGOzs7O0FBR0QscUJBQVc7bUJBQUEscUJBQUMsS0FBSyxFQUFDO0FBQ2QscUJBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQTthQUVwRTs7OztBQUVELHNCQUFZO21CQUFBLHdCQUFFLEVBRWI7Ozs7QUFFRCxxQkFBVzttQkFBQSxxQkFBQyxLQUFLLEVBQUM7QUFFZCxxQkFBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQTthQUVsRDs7Ozs7O2VBL0RRLFNBQVM7U0FBUyxTQUFTO0FBb0VsQyxzQkFBZ0IsY0FBUyxTQUFTO0FBRXpCLGlCQUZULGdCQUFnQjs0Q0FFSCxJQUFJO0FBQUosZ0JBQUk7OztnQ0FGakIsZ0JBQWdCOztBQUdkLGNBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQ3pCOztrQkFKQyxnQkFBZ0IsRUFBUyxTQUFTOztlQUFsQyxnQkFBZ0I7U0FBUyxTQUFTIiwiZmlsZSI6ImFpLXRvb2xiYXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy9wbHVnaW5zLyJ9