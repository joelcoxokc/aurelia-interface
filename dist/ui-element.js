System.register(["./ui-class-list"], function (_export) {
  "use strict";

  var ClassList, _prototypeProperties, _classCallCheck, UiElement;
  return {
    setters: [function (_uiClassList) {
      ClassList = _uiClassList.ClassList;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      UiElement = _export("UiElement", (function () {
        function UiElement(element) {
          _classCallCheck(this, UiElement);

          this.element = element;
        }

        _prototypeProperties(UiElement, {
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
              var args = Array.isArray(arguments[0]) ? arguments[0] : arguments;
              this.element.classList.add.apply(this.element.classList, args);
            },
            writable: true,
            configurable: true
          },
          removeClass: {
            value: function removeClass() {
              var args = Array.isArray(arguments[0]) ? arguments[0] : arguments;
              this.element.classList.remove.apply(this.element.classList, args);
            },
            writable: true,
            configurable: true
          }
        });

        return UiElement;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpLWVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsU0FBUyx5Q0FFSixTQUFTOzs7QUFGZCxlQUFTLGdCQUFULFNBQVM7Ozs7Ozs7QUFFSixlQUFTO0FBVVAsaUJBVkYsU0FBUyxDQVVOLE9BQU87Z0NBVlYsU0FBUzs7QUFZZCxjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtTQUV6Qjs7NkJBZFEsU0FBUztBQUdYLGdCQUFNO21CQUFBLGtCQUFFO0FBRVgscUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUVuQjs7Ozs7QUFTRCxrQkFBUTttQkFBQSxvQkFBRTtBQUVOLGtCQUFJLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUE7QUFDakUsa0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUE7YUFFakU7Ozs7QUFHRCxxQkFBVzttQkFBQSx1QkFBRTtBQUVYLGtCQUFJLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUE7QUFDakUsa0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUE7YUFFbEU7Ozs7OztlQTdCUSxTQUFTIiwiZmlsZSI6InVpLWVsZW1lbnQuanMiLCJzb3VyY2VSb290IjoiL2Rpc3QvIn0=