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
              return this.container.toggleClassList("bgColor", "", this);
            },
            writable: true,
            configurable: true
          },
          textChanged: {
            value: function textChanged(value) {
              return this.container.toggleClassList("textColor", "", this);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLXRvb2xiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSxFQUNSLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsT0FBTyxFQUNQLE1BQU0sb0RBRVYsUUFBUSxFQUVDLFNBQVMsRUFtRWhCLGdCQUFnQjs7O0FBM0VkLGNBQVEsc0JBQVIsUUFBUTs7QUFDUixlQUFTLGNBQVQsU0FBUzs7QUFDVCxzQkFBZ0IscUJBQWhCLGdCQUFnQjs7QUFDaEIsYUFBTyxZQUFQLE9BQU87O0FBQ1AsWUFBTSxXQUFOLE1BQU07Ozs7Ozs7OztBQUVWLGNBQVEsR0FBSSxDQUFFLE1BQU0sRUFBRyxPQUFPLEVBQUcsU0FBUyxFQUFHLFdBQVcsRUFBRyxPQUFPLENBQUU7QUFFM0QsZUFBUyxtQ0FBUyxTQUFTO0FBa0J6QixpQkFsQkYsU0FBUyxDQWtCTixPQUFPLEVBQUUsTUFBTTtnQ0FsQmxCLFNBQVM7O0FBbUJkLGNBQUksS0FBSyxHQUFHLElBQUksQ0FBQzs7QUFFakIsY0FBSSxDQUFDLE1BQU0sR0FBSyxNQUFNLENBQUM7QUFDdkIsY0FBSSxDQUFDLE9BQU8sR0FBSSxPQUFPLENBQUE7QUFDdkIsY0FBSSxDQUFDLE9BQU8sR0FBSSxJQUFJLE9BQU8sRUFBRSxDQUFBOzs7QUFHN0IsV0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7QUFHN0IsY0FBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUMzQixjQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsVUFBQyxPQUFPLEVBQUc7QUFDOUMsbUJBQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsT0FBTyxDQUFDLENBQUE7V0FDbkQsQ0FBQyxDQUFBO1NBQ0w7O2tCQWpDUSxTQUFTLEVBQVMsU0FBUzs7NkJBQTNCLFNBQVM7QUFFWCxrQkFBUTttQkFBQSxvQkFBRTtBQUNiLHFCQUFPLFFBQVEsQ0FDVixhQUFhLENBQUMsWUFBWSxDQUFDLENBQzNCLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FDdEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUNyQixZQUFZLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUNyQyxZQUFZLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUNwQyxZQUFZLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUN4QyxZQUFZLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUNuQyxZQUFZLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLENBQUE7YUFDakQ7Ozs7QUFFTSxnQkFBTTttQkFBQSxrQkFBRTtBQUNYLHFCQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFBO2FBQzNCOzs7OztBQW1CRCxjQUFJO21CQUFBLGdCQUFFO0FBQ0Ysa0JBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUE7YUFDeEU7Ozs7QUFFRCx3QkFBYzttQkFBQSx3QkFBQyxLQUFLLEVBQUM7QUFDakIscUJBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO2FBQzlCOzs7O0FBR0QsbUJBQVM7bUJBQUEsbUJBQUMsS0FBSyxFQUFDO0FBQ1oscUJBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQTthQUM3RDs7OztBQUdELHFCQUFXO21CQUFBLHFCQUFDLEtBQUssRUFBQztBQUNkLHFCQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUE7YUFFL0Q7Ozs7QUFFRCxzQkFBWTttQkFBQSx3QkFBRSxFQUViOzs7O0FBRUQscUJBQVc7bUJBQUEscUJBQUMsS0FBSyxFQUFDO0FBRWQscUJBQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUE7YUFFbEQ7Ozs7OztlQTlEUSxTQUFTO1NBQVMsU0FBUztBQW1FbEMsc0JBQWdCLGNBQVMsU0FBUztBQUV6QixpQkFGVCxnQkFBZ0I7NENBRUgsSUFBSTtBQUFKLGdCQUFJOzs7Z0NBRmpCLGdCQUFnQjs7QUFHZCxjQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUN6Qjs7a0JBSkMsZ0JBQWdCLEVBQVMsU0FBUzs7ZUFBbEMsZ0JBQWdCO1NBQVMsU0FBUyIsImZpbGUiOiJhaS10b29sYmFyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==