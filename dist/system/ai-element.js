System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, AiElement;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AiElement = _export("AiElement", (function () {
        function AiElement(element) {
          _classCallCheck(this, AiElement);

          this.element = element;
        }

        _prototypeProperties(AiElement, {
          inject: {
            value: function inject() {
              return [Element];
            },
            writable: true,
            configurable: true
          }
        }, {
          addClass: {
            value: function addClass() {
              var args = _(arguments).flatten(true).value();


              this.element.classList.add.apply(this.element.classList, args);
            },
            writable: true,
            configurable: true
          },
          removeClass: {
            value: function removeClass() {
              var args = _(arguments).flatten(true).value();
              this.element.classList.remove.apply(this.element.classList, args);
            },
            writable: true,
            configurable: true
          },
          addEvent: {
            value: function addEvent(evt, callback) {
              var _this = this;

              this.element.addEventListener(evt, callInContext);

              function callInContext() {
                callback.apply(_this, arguments);
              }
            },
            writable: true,
            configurable: true
          },
          removeEvent: {
            value: function removeEvent(evt, callback) {
              var _this = this;

              this.element.removeEventListener(evt, callInContext, false);

              function callInContext() {
                callback.apply(_this, arguments);
              }
            },
            writable: true,
            configurable: true
          },
          toggleClassList: {
            value: function toggleClassList(property, prefix, context, prev, next, init) {
              prefix = prefix || "";
              context = context || this;
              prev = prev || context.current[property];
              next = next || context[property];

              if (context[property] === context.current[property]) {
                return;
              }

              prefix && (prev = prefix + prev, next = prefix + next);
              if (next.split(",").length) {
                next = next.split(",");
              }
              console.log(next);
              this.removeClass(prev);
              this.addClass(next);
              context.current[property] = context[property];
              return;
            },
            writable: true,
            configurable: true
          }
        });

        return AiElement;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSx5Q0FHSCxTQUFTOzs7QUFIZCxjQUFRLHNCQUFSLFFBQVE7Ozs7Ozs7QUFHSCxlQUFTO0FBUVAsaUJBUkYsU0FBUyxDQVFOLE9BQU87Z0NBUlYsU0FBUzs7QUFVZCxjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtTQUV6Qjs7NkJBWlEsU0FBUztBQUVYLGdCQUFNO21CQUFBLGtCQUFFO0FBRVgscUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUVuQjs7Ozs7QUFTRCxrQkFBUTttQkFBQSxvQkFBRTtBQUNOLGtCQUFJLElBQUksR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBOzs7QUFHN0Msa0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUE7YUFFakU7Ozs7QUFFRCxxQkFBVzttQkFBQSx1QkFBRTtBQUNULGtCQUFJLElBQUksR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0FBQzdDLGtCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBO2FBQ3BFOzs7O0FBRUQsa0JBQVE7bUJBQUEsa0JBQUMsR0FBRyxFQUFFLFFBQVEsRUFBQztBQUNuQixrQkFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDOztBQUVqQixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUE7O0FBRWpELHVCQUFTLGFBQWEsR0FBRTtBQUNwQix3QkFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUE7ZUFDbkM7YUFDSjs7OztBQUdELHFCQUFXO21CQUFBLHFCQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUM7QUFDdEIsa0JBQUksS0FBSyxHQUFHLElBQUksQ0FBQzs7QUFFakIsa0JBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsR0FBRyxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQTs7QUFFM0QsdUJBQVMsYUFBYSxHQUFFO0FBQ3BCLHdCQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQTtlQUNuQzthQUNKOzs7O0FBVUQseUJBQWU7bUJBQUEseUJBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUM7QUFFeEQsb0JBQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO0FBQ3RCLHFCQUFPLEdBQUcsT0FBTyxJQUFJLElBQUksQ0FBQztBQUMxQixrQkFBSSxHQUFHLElBQUksSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQ3hDLGtCQUFJLEdBQUcsSUFBSSxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTs7QUFFaEMsa0JBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUM7QUFBRSx1QkFBTTtlQUFFOztBQUU3RCxvQkFBTSxLQUFLLEFBQUMsSUFBSSxHQUFHLE1BQU0sR0FBRyxJQUFJLEVBQ3BCLElBQUksR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUN2QixBQUFDLENBQUE7QUFDVixrQkFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBQztBQUFFLG9CQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtlQUFFO0FBQ3BELHFCQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ2pCLGtCQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3RCLGtCQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ25CLHFCQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM5QyxxQkFBTTthQUNUOzs7Ozs7ZUEzRVEsU0FBUyIsImZpbGUiOiJhaS1lbGVtZW50LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==