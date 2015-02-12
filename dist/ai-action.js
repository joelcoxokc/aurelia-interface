System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, AiAction, AiToggleAttachedBehavior;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AiAction = _export("AiAction", (function () {
        function AiAction(element) {
          _classCallCheck(this, AiAction);

          this.element = element;
        }

        _prototypeProperties(AiAction, null, {
          bind: {
            value: function bind() {
              var _this = this;


              this.element.addEventListener("mouseover", function (event) {
                _this.revealActions();
              });
              this.elementelement.addEventListener("mouseout", function (event) {
                _this.hideActions();
              });
            },
            writable: true,
            configurable: true
          },
          revealActions: {
            value: function revealActions() {
              this.element.classList.add("action-reveal");
            },
            writable: true,
            configurable: true
          },
          hideAtions: {
            value: function hideAtions() {
              this.element.classList.remove("action-reveal");
            },
            writable: true,
            configurable: true
          }
        });

        return AiAction;
      })());
      AiToggleAttachedBehavior = _export("AiToggleAttachedBehavior", (function () {
        function AiToggleAttachedBehavior(element) {
          _classCallCheck(this, AiToggleAttachedBehavior);

          this.showing = true;

          this.element = element;
          console.log(this);
        }

        _prototypeProperties(AiToggleAttachedBehavior, {
          metadata: {
            value: function metadata() {
              return Behavior.attachedBehavior("global-behavior").withProperty("value", "valueChanged");
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
          valueChanged: {
            value: function valueChanged(newValue) {
              console.log(newValue);
            },
            writable: true,
            configurable: true
          }
        });

        return AiToggleAttachedBehavior;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWFjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLHlDQUVILFFBQVEsRUF1Q1Isd0JBQXdCOzs7QUF6QzdCLGNBQVEsc0JBQVIsUUFBUTs7Ozs7OztBQUVILGNBQVE7QUFFTixpQkFGRixRQUFRLENBRUosT0FBTztnQ0FGWCxRQUFROztBQUliLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQzFCOzs2QkFMUSxRQUFRO0FBU2pCLGNBQUk7bUJBQUEsZ0JBQUU7Ozs7QUFFRixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQ2pDLFVBQUMsS0FBSyxFQUFHO0FBRUwsc0JBQUssYUFBYSxFQUFFLENBQUM7ZUFFeEIsQ0FDSixDQUFBO0FBQ0wsa0JBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUN2QyxVQUFDLEtBQUssRUFBRztBQUNMLHNCQUFLLFdBQVcsRUFBRSxDQUFBO2VBQ3JCLENBQ0osQ0FBQTthQUVSOzs7O0FBR0QsdUJBQWE7bUJBQUEseUJBQUU7QUFDWCxrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFBO2FBQzlDOzs7O0FBR0Qsb0JBQVU7bUJBQUEsc0JBQUU7QUFDUixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFBO2FBQ2pEOzs7Ozs7ZUFsQ1EsUUFBUTs7QUF1Q1IsOEJBQXdCO0FBaUJ0QixpQkFqQkYsd0JBQXdCLENBaUJyQixPQUFPO2dDQWpCVix3QkFBd0I7O0FBbUI3QixjQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzs7QUFFcEIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsaUJBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7U0FFcEI7OzZCQXhCUSx3QkFBd0I7QUFFMUIsa0JBQVE7bUJBQUEsb0JBQUU7QUFFYixxQkFBTyxRQUFRLENBQ1YsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsQ0FDbkMsWUFBWSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQTthQUU3Qzs7OztBQUdNLGdCQUFNO21CQUFBLGtCQUFFO0FBRVgscUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUVuQjs7Ozs7QUFXRCxzQkFBWTttQkFBQSxzQkFBQyxRQUFRLEVBQUU7QUFFbkIscUJBQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7YUFFeEI7Ozs7OztlQTlCUSx3QkFBd0IiLCJmaWxlIjoiYWktYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9kaXN0LyJ9