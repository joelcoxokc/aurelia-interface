System.register(["aurelia-templating", "./ai-element", "./interface-element", "./toolbar", "./notify", "./aside-toggle", "./toggler"], function (_export) {
  "use strict";

  var Behavior, AiElement, InterfaceElement, Toolbar, Notify, AsideToggle, Toggler, _prototypeProperties, _inherits, _classCallCheck, defaults, AiToolbar, ToolbarContainer;
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
    }, function (_toggler) {
      Toggler = _toggler.Toggler;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      defaults = ["size", "fixed", "bgColor", "textColor", "brand"];
      AiToolbar = _export("AiToolbar", (function (AiElement) {
        function AiToolbar(element, notify, toggler) {
          _classCallCheck(this, AiToolbar);

          var _this = this;
          this.toggler = toggler;
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
              return [Element, Notify, Toggler];
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
          sizeChanged: {
            value: function sizeChanged(value) {
              console.log(value);

              this.removeClass("toolbar-" + (value ? "xl" : "sm"));
              this.addClass("toolbar-" + (value ? "sm" : "xl"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLXRvb2xiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSxFQUNSLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsT0FBTyxFQUNQLE1BQU0sRUFDTixXQUFXLEVBQ1gsT0FBTyxvREFFWCxRQUFRLEVBRUMsU0FBUyxFQTBEaEIsZ0JBQWdCOzs7QUFwRWQsY0FBUSxzQkFBUixRQUFROztBQUNSLGVBQVMsY0FBVCxTQUFTOztBQUNULHNCQUFnQixxQkFBaEIsZ0JBQWdCOztBQUNoQixhQUFPLFlBQVAsT0FBTzs7QUFDUCxZQUFNLFdBQU4sTUFBTTs7QUFDTixpQkFBVyxnQkFBWCxXQUFXOztBQUNYLGFBQU8sWUFBUCxPQUFPOzs7Ozs7Ozs7QUFFWCxjQUFRLEdBQUksQ0FBRSxNQUFNLEVBQUcsT0FBTyxFQUFHLFNBQVMsRUFBRyxXQUFXLEVBQUcsT0FBTyxDQUFFO0FBRTNELGVBQVMsbUNBQVMsU0FBUztBQW1CekIsaUJBbkJGLFNBQVMsQ0FtQk4sT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPO2dDQW5CM0IsU0FBUzs7QUFvQmQsY0FBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO0FBQ3RCLGNBQUksQ0FBQyxNQUFNLEdBQUssTUFBTSxDQUFDO0FBQ3ZCLGNBQUksQ0FBQyxPQUFPLEdBQUksT0FBTyxDQUFBO0FBQ3ZCLGNBQUksQ0FBQyxPQUFPLEdBQUksSUFBSSxPQUFPLEVBQUUsQ0FBQTtBQUM3QixjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTs7QUFFcEIsV0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7O0FBSTdCLGNBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUE7QUFDM0IsY0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLFVBQUMsT0FBTyxFQUFHLEVBQ2pELENBQUMsQ0FBQTtTQUNMOztrQkFsQ1EsU0FBUyxFQUFTLFNBQVM7OzZCQUEzQixTQUFTO0FBRVgsa0JBQVE7bUJBQUEsb0JBQUU7QUFDYixxQkFBTyxRQUFRLENBQ1YsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUMzQixZQUFZLENBQUMsUUFBUSxDQUFDLENBQ3RCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FDckIsWUFBWSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FDckMsWUFBWSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FDcEMsWUFBWSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FDeEMsWUFBWSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FDbkMsWUFBWSxDQUFDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUN6QyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUE7YUFDbEM7Ozs7QUFFTSxnQkFBTTttQkFBQSxrQkFBRTtBQUNYLHFCQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQTthQUNwQzs7Ozs7QUFtQkQsY0FBSTttQkFBQSxnQkFBRTtBQUNGLGtCQUFJLENBQUMsU0FBUyxHQUFHLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO2FBQ3hFOzs7O0FBQ0QsbUJBQVM7bUJBQUEsbUJBQUMsS0FBSyxFQUFDO0FBQ1oscUJBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQTthQUM3RDs7OztBQUdELHFCQUFXO21CQUFBLHFCQUFDLEtBQUssRUFBQztBQUNkLHFCQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUE7YUFFL0Q7Ozs7QUFDRCxxQkFBVzttQkFBQSxxQkFBQyxLQUFLLEVBQUM7QUFDZCxxQkFBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTs7QUFFbEIsa0JBQUksQ0FBQyxXQUFXLGVBQVksS0FBSyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUEsQ0FBRyxDQUFBO0FBQ2xELGtCQUFJLENBQUMsUUFBUSxlQUFZLEtBQUssR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFBLENBQUcsQ0FBQTthQUNsRDs7Ozs7O2VBckRRLFNBQVM7U0FBUyxTQUFTO0FBMERsQyxzQkFBZ0IsY0FBUyxTQUFTO0FBRXpCLGlCQUZULGdCQUFnQjs0Q0FFSCxJQUFJO0FBQUosZ0JBQUk7OztnQ0FGakIsZ0JBQWdCOztBQUdkLGNBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQ3pCOztrQkFKQyxnQkFBZ0IsRUFBUyxTQUFTOztlQUFsQyxnQkFBZ0I7U0FBUyxTQUFTIiwiZmlsZSI6ImFpLXRvb2xiYXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy9wbHVnaW5zLyJ9