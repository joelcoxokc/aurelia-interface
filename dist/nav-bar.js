System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, NavBar;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      NavBar = _export("NavBar", (function () {
        function NavBar(element) {
          _classCallCheck(this, NavBar);

          this.defaults = {};
          this.element = element;
          this.heading = "ai";
          this.lastSize = null;
          this.lastColor = null;
          this.lastBg = null;
        }

        _prototypeProperties(NavBar, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("router").withProperty("bar").withProperty("aside").withProperty("size", "sizeChanged").withProperty("bg", "bgChanged").withProperty("color", "colorChanged");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element];
            },
            writable: true,
            configurable: true
          }
        }, {
          bind: {
            value: function bind() {
              var _this = this;
              this.defaults.title = this.router.title;
              this.defaults.bg = "white";
              this.defaults.color = "purple";
              this.title = this.router.title;
              this.element.classList.add("ai-bar", "ai-nav-bar", "bar-fixed");
              Object.observe(this.router, function () {
                _this.size = _this.router.currentInstruction.config.bar.size;
                _this.title = _this.router.currentInstruction.config.title || _this.defaults.title;
                _this.color = _this.router.currentInstruction.config.bar.color || _this.defaults.color;
                _this.bg = _this.router.currentInstruction.config.bar.bg || _this.defaults.bg;
              });

            },
            writable: true,
            configurable: true
          },
          sizeChanged: {
            value: function sizeChanged(newSize) {
              this.element.classList.remove("bar-" + this.lastSize);
              this.element.classList.add("bar-" + newSize);
              this.lastSize = this.size;
            },
            writable: true,
            configurable: true
          },
          colorChanged: {
            value: function colorChanged(newColor) {
              this.element.classList.remove("text-" + this.lastColor);
              this.element.classList.add("text-" + newColor);
              this.lastColor = this.color;
            },
            writable: true,
            configurable: true
          },
          bgChanged: {
            value: function bgChanged(newBg) {
              this.element.classList.remove("bg-" + this.lastBg);
              this.element.classList.add("bg-" + newBg);
              this.lastBg = this.bg;
            },
            writable: true,
            configurable: true
          }
        });

        return NavBar;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSx5Q0FFSCxNQUFNOzs7QUFGWCxjQUFRLHFCQUFSLFFBQVE7Ozs7Ozs7QUFFSCxZQUFNO0FBb0JKLGlCQXBCRixNQUFNLENBb0JILE9BQU87Z0NBcEJWLE1BQU07O0FBcUJYLGNBQUksQ0FBQyxRQUFRLEdBQUksRUFBRSxDQUFDO0FBQ3BCLGNBQUksQ0FBQyxPQUFPLEdBQUssT0FBTyxDQUFBO0FBQ3hCLGNBQUksQ0FBQyxPQUFPLEdBQUssSUFBSSxDQUFDO0FBQ3RCLGNBQUksQ0FBQyxRQUFRLEdBQUksSUFBSSxDQUFBO0FBQ3JCLGNBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO0FBQ3JCLGNBQUksQ0FBQyxNQUFNLEdBQU0sSUFBSSxDQUFBO1NBQ3hCOzs2QkEzQlEsTUFBTTtBQUNSLGtCQUFRO21CQUFBLG9CQUFFO0FBRWIscUJBQU8sUUFBUSxDQUNWLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FDdEIsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUNuQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQ3JCLFlBQVksQ0FBQyxNQUFNLEVBQUcsYUFBYSxDQUFDLENBQ3BDLFlBQVksQ0FBQyxJQUFJLEVBQUssV0FBVyxDQUFDLENBQ2xDLFlBQVksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUE7YUFFN0M7Ozs7QUFHTSxnQkFBTTttQkFBQyxrQkFBRTtBQUVaLHFCQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7YUFFbkI7Ozs7O0FBV0QsY0FBSTttQkFBQSxnQkFBRTs7QUFDRixrQkFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUE7QUFDdkMsa0JBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFNLE9BQU8sQ0FBQTtBQUM3QixrQkFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFBO0FBQzlCLGtCQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFBO0FBQzlCLGtCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQTtBQUMvRCxvQkFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFlBQU07QUFDaEMsc0JBQUssSUFBSSxHQUFJLE1BQUssTUFBTSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFBO0FBQzNELHNCQUFLLEtBQUssR0FBRyxNQUFLLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQUssUUFBUSxDQUFDLEtBQUssQ0FBQTtBQUMvRSxzQkFBSyxLQUFLLEdBQUcsTUFBSyxNQUFNLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksTUFBSyxRQUFRLENBQUMsS0FBSyxDQUFBO0FBQ25GLHNCQUFLLEVBQUUsR0FBTSxNQUFLLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBTyxNQUFLLFFBQVEsQ0FBQyxFQUFFLENBQUE7ZUFDakYsQ0FBQyxDQUFBOzthQUdMOzs7O0FBRUQscUJBQVc7bUJBQUEscUJBQUMsT0FBTyxFQUFDO0FBQ2hCLGtCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLFVBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBRyxDQUFBO0FBQ3JELGtCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLFVBQVEsT0FBTyxDQUFHLENBQUE7QUFDNUMsa0JBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzthQUM3Qjs7OztBQUVELHNCQUFZO21CQUFBLHNCQUFDLFFBQVEsRUFBQztBQUVsQixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxXQUFTLElBQUksQ0FBQyxTQUFTLENBQUcsQ0FBQTtBQUN2RCxrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxXQUFTLFFBQVEsQ0FBRyxDQUFBO0FBQzlDLGtCQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7YUFFL0I7Ozs7QUFFRCxtQkFBUzttQkFBQSxtQkFBQyxLQUFLLEVBQUM7QUFFWixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxTQUFPLElBQUksQ0FBQyxNQUFNLENBQUcsQ0FBQTtBQUNsRCxrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxTQUFPLEtBQUssQ0FBRyxDQUFBO0FBQ3pDLGtCQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7YUFFekI7Ozs7OztlQWpFUSxNQUFNIiwiZmlsZSI6Im5hdi1iYXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy9wbHVnaW5zLyJ9