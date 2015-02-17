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
        }

        _prototypeProperties(NavBar, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("router").withProperty("bar").withProperty("aside").withProperty("size", "sizeChanged");
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
              this.title = this.router.title;
              this.element.classList.add("ai-bar", "ai-nav-bar", "bar-fixed");
              Object.observe(this.router, function () {
                _this.size = _this.router.currentInstruction.config.bar.size;
                _this.title = _this.router.currentInstruction.config.title || _this.defaults.title;
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
          }
        });

        return NavBar;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSx5Q0FFSCxNQUFNOzs7QUFGWCxjQUFRLHFCQUFSLFFBQVE7Ozs7Ozs7QUFFSCxZQUFNO0FBa0JKLGlCQWxCRixNQUFNLENBa0JILE9BQU87Z0NBbEJWLE1BQU07O0FBbUJYLGNBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ25CLGNBQUksQ0FBQyxPQUFPLEdBQUksT0FBTyxDQUFBO0FBQ3ZCLGNBQUksQ0FBQyxPQUFPLEdBQUksSUFBSSxDQUFDO0FBQ3JCLGNBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO1NBQ3ZCOzs2QkF2QlEsTUFBTTtBQUNSLGtCQUFRO21CQUFBLG9CQUFFO0FBRWIscUJBQU8sUUFBUSxDQUNWLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FDdEIsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUNuQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQ3JCLFlBQVksQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUE7YUFFM0M7Ozs7QUFHTSxnQkFBTTttQkFBQyxrQkFBRTtBQUVaLHFCQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7YUFFbkI7Ozs7O0FBU0QsY0FBSTttQkFBQSxnQkFBRTs7QUFDRixrQkFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUE7QUFDdkMsa0JBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUE7QUFDOUIsa0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFBO0FBQy9ELG9CQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsWUFBTTtBQUNoQyxzQkFBSyxJQUFJLEdBQUksTUFBSyxNQUFNLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUE7QUFDM0Qsc0JBQUssS0FBSyxHQUFHLE1BQUssTUFBTSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksTUFBSyxRQUFRLENBQUMsS0FBSyxDQUFBO2VBQ2hGLENBQUMsQ0FBQTs7YUFHTDs7OztBQUVELHFCQUFXO21CQUFBLHFCQUFDLE9BQU8sRUFBQztBQUNoQixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxVQUFRLElBQUksQ0FBQyxRQUFRLENBQUcsQ0FBQTtBQUNyRCxrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxVQUFRLE9BQU8sQ0FBRyxDQUFBO0FBQzVDLGtCQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDN0I7Ozs7OztlQXpDUSxNQUFNIiwiZmlsZSI6Im5hdi1iYXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==