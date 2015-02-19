/* */ 
"format register";
define(["exports"], function (exports) {
  "use strict";

  var _prototypeProperties = function (child, staticProps, instanceProps) {
    if (staticProps) Object.defineProperties(child, staticProps);
    if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
  };

  var History = (function () {
    function History() {}

    _prototypeProperties(History, null, {
      activate: {
        value: function activate() {
          throw new Error("History must implement activate().");
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      deactivate: {
        value: function deactivate() {
          throw new Error("History must implement deactivate().");
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      navigate: {
        value: function navigate() {
          throw new Error("History must implement navigate().");
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      navigateBack: {
        value: function navigateBack() {
          throw new Error("History must implement navigateBack().");
        },
        writable: true,
        enumerable: true,
        configurable: true
      }
    });

    return History;
  })();

  exports.History = History;
});