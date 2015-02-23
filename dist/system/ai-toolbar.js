System.register(["aurelia-templating", "./ai-element", "./interface-element", "./toolbar", "./notify", "./aside-toggle"], function (_export) {
  "use strict";

  var Behavior, AiElement, InterfaceElement, Toolbar, Notify, AsideToggle, _prototypeProperties, _inherits, _classCallCheck, defaults, AiToolbar, ToolbarContainer;
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
    }, function (_asideToggle) {
      AsideToggle = _asideToggle.AsideToggle;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      defaults = ["size", "fixed", "bgColor", "textColor", "brand"];
      AiToolbar = _export("AiToolbar", (function (AiElement) {
        function AiToolbar(element, notify, asideToggle) {
          _classCallCheck(this, AiToolbar);

          var _this = this;
          this.asideToggle = asideToggle;
          this.events = notify;
          this.element = element;
          this.current = new Toolbar();
          this.person = "joel";

          _.assign(this, this.current);



          this.addClass("ai-toolbar");
          this.events.subscribe("$stateChanged", function (payload) {});
        }

        _inherits(AiToolbar, AiElement);

        _prototypeProperties(AiToolbar, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-toolbar").withProperty("router").withProperty("fixed").withProperty("brand", "brandChanged").withProperty("bgColor", "bgChanged").withProperty("textColor", "textChanged").withProperty("size", "sizeChanged").withProperty("toolbar", "toolbarChanged").withProperty("multi-menu");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element, Notify, AsideToggle];
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
            value: function toolbarChanged(tools) {},
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLXRvb2xiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSxFQUNSLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsT0FBTyxFQUNQLE1BQU0sRUFDTixXQUFXLG9EQUdmLFFBQVEsRUFFQyxTQUFTLEVBb0VoQixnQkFBZ0I7OztBQTlFZCxjQUFRLHNCQUFSLFFBQVE7O0FBQ1IsZUFBUyxjQUFULFNBQVM7O0FBQ1Qsc0JBQWdCLHFCQUFoQixnQkFBZ0I7O0FBQ2hCLGFBQU8sWUFBUCxPQUFPOztBQUNQLFlBQU0sV0FBTixNQUFNOztBQUNOLGlCQUFXLGdCQUFYLFdBQVc7Ozs7Ozs7OztBQUdmLGNBQVEsR0FBSSxDQUFFLE1BQU0sRUFBRyxPQUFPLEVBQUcsU0FBUyxFQUFHLFdBQVcsRUFBRyxPQUFPLENBQUU7QUFFM0QsZUFBUyxtQ0FBUyxTQUFTO0FBbUJ6QixpQkFuQkYsU0FBUyxDQW1CTixPQUFPLEVBQUUsTUFBTSxFQUFFLFdBQVc7Z0NBbkIvQixTQUFTOztBQW9CZCxjQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDakIsY0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDL0IsY0FBSSxDQUFDLE1BQU0sR0FBSyxNQUFNLENBQUM7QUFDdkIsY0FBSSxDQUFDLE9BQU8sR0FBSSxPQUFPLENBQUE7QUFDdkIsY0FBSSxDQUFDLE9BQU8sR0FBSSxJQUFJLE9BQU8sRUFBRSxDQUFBO0FBQzdCLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBOztBQUVwQixXQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7QUFJN0IsY0FBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUMzQixjQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsVUFBQyxPQUFPLEVBQUcsRUFFakQsQ0FBQyxDQUFBO1NBQ0w7O2tCQW5DUSxTQUFTLEVBQVMsU0FBUzs7NkJBQTNCLFNBQVM7QUFFWCxrQkFBUTttQkFBQSxvQkFBRTtBQUNiLHFCQUFPLFFBQVEsQ0FDVixhQUFhLENBQUMsWUFBWSxDQUFDLENBQzNCLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FDdEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUNyQixZQUFZLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUNyQyxZQUFZLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUNwQyxZQUFZLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUN4QyxZQUFZLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUNuQyxZQUFZLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLENBQ3pDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQTthQUNsQzs7OztBQUVNLGdCQUFNO21CQUFBLGtCQUFFO0FBQ1gscUJBQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFBO2FBQ3hDOzs7OztBQW9CRCxjQUFJO21CQUFBLGdCQUFFO0FBQ0Ysa0JBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUE7YUFDeEU7Ozs7QUFFRCx3QkFBYzttQkFBQSx3QkFBQyxLQUFLLEVBQUMsRUFDcEI7Ozs7QUFHRCxtQkFBUzttQkFBQSxtQkFBQyxLQUFLLEVBQUM7QUFDWixxQkFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBO2FBQzdEOzs7O0FBR0QscUJBQVc7bUJBQUEscUJBQUMsS0FBSyxFQUFDO0FBQ2QscUJBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQTthQUUvRDs7OztBQUVELHNCQUFZO21CQUFBLHdCQUFFLEVBRWI7Ozs7QUFFRCxxQkFBVzttQkFBQSxxQkFBQyxLQUFLLEVBQUM7QUFFZCxxQkFBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQTthQUVsRDs7Ozs7O2VBL0RRLFNBQVM7U0FBUyxTQUFTO0FBb0VsQyxzQkFBZ0IsY0FBUyxTQUFTO0FBRXpCLGlCQUZULGdCQUFnQjs0Q0FFSCxJQUFJO0FBQUosZ0JBQUk7OztnQ0FGakIsZ0JBQWdCOztBQUdkLGNBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQ3pCOztrQkFKQyxnQkFBZ0IsRUFBUyxTQUFTOztlQUFsQyxnQkFBZ0I7U0FBUyxTQUFTIiwiZmlsZSI6ImFpLXRvb2xiYXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy9wbHVnaW5zLyJ9