System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, TabsDemo;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      TabsDemo = _export("TabsDemo", (function () {
        function TabsDemo() {
          _classCallCheck(this, TabsDemo);

          this.selectedTabRef = "tab-2";
        }

        _prototypeProperties(TabsDemo, null, {
          showMyTab: {
            value: function showMyTab(tab) {
              tab.classList.add("active in");
            },
            writable: true,
            configurable: true
          },
          hideMyTab: {
            value: function hideMyTab(tab) {
              tab.classList.remove("active in");
            },
            writable: true,
            configurable: true
          }
        });

        return TabsDemo;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMtZGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkNBQWEsUUFBUTs7Ozs7Ozs7QUFBUixjQUFRO0FBRVAsaUJBRkQsUUFBUTtnQ0FBUixRQUFROztBQUdqQixjQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQTtTQUM5Qjs7NkJBSlUsUUFBUTtBQU1uQixtQkFBUzttQkFBQyxtQkFBQyxHQUFHLEVBQUU7QUFDZCxpQkFBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7YUFDL0I7Ozs7QUFFRCxtQkFBUzttQkFBQyxtQkFBQyxHQUFHLEVBQUU7QUFDZCxpQkFBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7YUFDbEM7Ozs7OztlQVpVLFFBQVEiLCJmaWxlIjoidGFicy1kZW1vLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=