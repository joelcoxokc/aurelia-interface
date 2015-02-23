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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLXRvb2xiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSxFQUNSLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsT0FBTyxFQUNQLE1BQU0sb0RBRVYsUUFBUSxFQUVDLFNBQVMsRUFvRWhCLGdCQUFnQjs7O0FBNUVkLGNBQVEsc0JBQVIsUUFBUTs7QUFDUixlQUFTLGNBQVQsU0FBUzs7QUFDVCxzQkFBZ0IscUJBQWhCLGdCQUFnQjs7QUFDaEIsYUFBTyxZQUFQLE9BQU87O0FBQ1AsWUFBTSxXQUFOLE1BQU07Ozs7Ozs7OztBQUVWLGNBQVEsR0FBSSxDQUFFLE1BQU0sRUFBRyxPQUFPLEVBQUcsU0FBUyxFQUFHLFdBQVcsRUFBRyxPQUFPLENBQUU7QUFFM0QsZUFBUyxtQ0FBUyxTQUFTO0FBbUJ6QixpQkFuQkYsU0FBUyxDQW1CTixPQUFPLEVBQUUsTUFBTTtnQ0FuQmxCLFNBQVM7O0FBb0JkLGNBQUksS0FBSyxHQUFHLElBQUksQ0FBQzs7QUFFakIsY0FBSSxDQUFDLE1BQU0sR0FBSyxNQUFNLENBQUM7QUFDdkIsY0FBSSxDQUFDLE9BQU8sR0FBSSxPQUFPLENBQUE7QUFDdkIsY0FBSSxDQUFDLE9BQU8sR0FBSSxJQUFJLE9BQU8sRUFBRSxDQUFBO0FBQzdCLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBOztBQUVwQixXQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7QUFJN0IsY0FBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUMzQixjQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsVUFBQyxPQUFPLEVBQUcsRUFFakQsQ0FBQyxDQUFBO1NBQ0w7O2tCQW5DUSxTQUFTLEVBQVMsU0FBUzs7NkJBQTNCLFNBQVM7QUFFWCxrQkFBUTttQkFBQSxvQkFBRTtBQUNiLHFCQUFPLFFBQVEsQ0FDVixhQUFhLENBQUMsWUFBWSxDQUFDLENBQzNCLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FDdEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUNyQixZQUFZLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUNyQyxZQUFZLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUNwQyxZQUFZLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUN4QyxZQUFZLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUNuQyxZQUFZLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLENBQ3pDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQTthQUNsQzs7OztBQUVNLGdCQUFNO21CQUFBLGtCQUFFO0FBQ1gscUJBQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUE7YUFDM0I7Ozs7O0FBb0JELGNBQUk7bUJBQUEsZ0JBQUU7QUFDRixrQkFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQTthQUN4RTs7OztBQUVELHdCQUFjO21CQUFBLHdCQUFDLEtBQUssRUFBQyxFQUNwQjs7OztBQUdELG1CQUFTO21CQUFBLG1CQUFDLEtBQUssRUFBQztBQUNaLHFCQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUE7YUFDN0Q7Ozs7QUFHRCxxQkFBVzttQkFBQSxxQkFBQyxLQUFLLEVBQUM7QUFDZCxxQkFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBO2FBRS9EOzs7O0FBRUQsc0JBQVk7bUJBQUEsd0JBQUUsRUFFYjs7OztBQUVELHFCQUFXO21CQUFBLHFCQUFDLEtBQUssRUFBQztBQUVkLHFCQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFBO2FBRWxEOzs7Ozs7ZUEvRFEsU0FBUztTQUFTLFNBQVM7QUFvRWxDLHNCQUFnQixjQUFTLFNBQVM7QUFFekIsaUJBRlQsZ0JBQWdCOzRDQUVILElBQUk7QUFBSixnQkFBSTs7O2dDQUZqQixnQkFBZ0I7O0FBR2QsY0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDekI7O2tCQUpDLGdCQUFnQixFQUFTLFNBQVM7O2VBQWxDLGdCQUFnQjtTQUFTLFNBQVMiLCJmaWxlIjoiYWktdG9vbGJhci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL3BsdWdpbnMvIn0=