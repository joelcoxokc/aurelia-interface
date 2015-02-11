System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, Bar;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Bar = _export("Bar", (function () {
        function Bar(options) {
          _classCallCheck(this, Bar);

          this.showing = false;

          this.barId = "bar1";
          this.open = false;
          this.fixed = true;
          this.size = "sm";
        }

        _prototypeProperties(Bar, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("showing");
            },
            writable: true,
            configurable: true
          }
        }, {
          open: {
            value: function open() {
              this.showing = !this.showing;
            },
            writable: true,
            configurable: true
          }
        });

        return Bar;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLHlDQUVILEdBQUc7OztBQUZSLGNBQVEscUJBQVIsUUFBUTs7Ozs7OztBQUVILFNBQUc7QUFTRCxpQkFURixHQUFHLENBU0EsT0FBTztnQ0FUVixHQUFHOztBQVdSLGNBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBOztBQUVwQixjQUFJLENBQUMsS0FBSyxHQUFLLE1BQU0sQ0FBQTtBQUNyQixjQUFJLENBQUMsSUFBSSxHQUFNLEtBQUssQ0FBQTtBQUNwQixjQUFJLENBQUMsS0FBSyxHQUFLLElBQUksQ0FBQTtBQUNuQixjQUFJLENBQUMsSUFBSSxHQUFNLElBQUksQ0FBQTtTQUN0Qjs7NkJBakJRLEdBQUc7QUFFTCxrQkFBUTttQkFBQSxvQkFBRTtBQUViLHFCQUFPLFFBQVEsQ0FDVixZQUFZLENBQUMsU0FBUyxDQUFDLENBQUE7YUFFL0I7Ozs7O0FBWUQsY0FBSTttQkFBQSxnQkFBRTtBQUVGLGtCQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUVoQzs7Ozs7O2VBdkJRLEdBQUciLCJmaWxlIjoiYmFyLmpzIiwic291cmNlUm9vdCI6Ii9kaXN0LyJ9