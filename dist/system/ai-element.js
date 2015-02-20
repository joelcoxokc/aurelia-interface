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
          _parseArgs: {
            value: function _parseArgs(args) {
              return _(args).flatten(true).map(function (item) {
                return item.split(" ");
              }).flatten().value();
            },
            writable: true,
            configurable: true
          },
          addClass: {
            value: function addClass() {
              var args = this._parseArgs(arguments);



              this.element.classList.add.apply(this.element.classList, args);
            },
            writable: true,
            configurable: true
          },
          removeClass: {
            value: function removeClass() {
              var args = this._parseArgs(arguments);
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
            value: function toggleClassList(property, prefix, context, prev, next) {
              prefix = prefix || "";
              context = context || this;
              prev = prev || context.current[property];
              next = next || context[property];


              if (context[property] === context.current[property]) {
                return;
              }

              prefix && (prev = prefix + prev, next = prefix + next);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSx5Q0FHSCxTQUFTOzs7QUFIZCxjQUFRLHNCQUFSLFFBQVE7Ozs7Ozs7QUFHSCxlQUFTO0FBUVAsaUJBUkYsU0FBUyxDQVFOLE9BQU87Z0NBUlYsU0FBUzs7QUFVZCxjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtTQUV6Qjs7NkJBWlEsU0FBUztBQUVYLGdCQUFNO21CQUFBLGtCQUFFO0FBRVgscUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUVuQjs7Ozs7QUFRRCxvQkFBVTttQkFBQSxvQkFBQyxJQUFJLEVBQUM7QUFDWixxQkFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUNiLEdBQUcsQ0FBQyxVQUFTLElBQUksRUFBQztBQUNmLHVCQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7ZUFDekIsQ0FBQyxDQUNELE9BQU8sRUFBRSxDQUNULEtBQUssRUFBRSxDQUFBO2FBQ2Y7Ozs7QUFFRCxrQkFBUTttQkFBQSxvQkFBRTtBQUNOLGtCQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBOzs7O0FBSXJDLGtCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBO2FBRWpFOzs7O0FBRUQscUJBQVc7bUJBQUEsdUJBQUU7QUFDVCxrQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUNyQyxrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQTthQUNwRTs7OztBQUVELGtCQUFRO21CQUFBLGtCQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUM7QUFDbkIsa0JBQUksS0FBSyxHQUFHLElBQUksQ0FBQzs7QUFFakIsa0JBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFBOztBQUVqRCx1QkFBUyxhQUFhLEdBQUU7QUFDcEIsd0JBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFBO2VBQ25DO2FBQ0o7Ozs7QUFHRCxxQkFBVzttQkFBQSxxQkFBQyxHQUFHLEVBQUUsUUFBUSxFQUFDO0FBQ3RCLGtCQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7O0FBRWpCLGtCQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUE7O0FBRTNELHVCQUFTLGFBQWEsR0FBRTtBQUNwQix3QkFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUE7ZUFDbkM7YUFDSjs7OztBQVVELHlCQUFlO21CQUFBLHlCQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUM7QUFFbEQsb0JBQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO0FBQ3RCLHFCQUFPLEdBQUcsT0FBTyxJQUFJLElBQUksQ0FBQztBQUMxQixrQkFBSSxHQUFHLElBQUksSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQ3hDLGtCQUFJLEdBQUcsSUFBSSxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTs7O0FBR2hDLGtCQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFDO0FBQUUsdUJBQU07ZUFBRTs7QUFFN0Qsb0JBQU0sS0FBSyxBQUFDLElBQUksR0FBRyxNQUFNLEdBQUcsSUFBSSxFQUNwQixJQUFJLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FDdkIsQUFBQyxDQUFBO0FBRVYscUJBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDakIsa0JBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDdEIsa0JBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDbkIscUJBQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzlDLHFCQUFNO2FBQ1Q7Ozs7OztlQXRGUSxTQUFTIiwiZmlsZSI6ImFpLWVsZW1lbnQuanMiLCJzb3VyY2VSb290IjoiL3NyYy9wbHVnaW5zLyJ9