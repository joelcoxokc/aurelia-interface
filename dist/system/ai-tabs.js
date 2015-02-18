System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, AiTabsAttachedBehavior;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AiTabsAttachedBehavior = _export("AiTabsAttachedBehavior", (function () {
        function AiTabsAttachedBehavior(element) {
          _classCallCheck(this, AiTabsAttachedBehavior);

          this.element = element;
          this.linkHandler = this._linkHandler.bind(this);
        }

        _prototypeProperties(AiTabsAttachedBehavior, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("activeTabRef", "tabRefChanged", "ai-tabs").and(function (x) {
                return x.bindingIsTwoWay();
              }).withProperty("_showTab", "showTabChanged", "ai-show-tab").withProperty("_hideTab", "hideTabChanged", "ai-hide-tab").syncChildren("tabLinks", "tabLinksChanged", "[ai-tab-link]").noView();
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
          tabs: {
            get: function () {
              return Array.prototype.slice.call(this.element.querySelectorAll("[ai-tab]"));
            },
            configurable: true
          },
          setActiveTab: {
            value: function setActiveTab(newTabRef) {
              var _this = this;


              if (newTabRef == this.activeTabRef) return;

              this.tabs.forEach(function (tab) {
                return _this.hideTab(tab);
              });

              if (newTabRef) {
                var newTab = this.element.querySelector("[ai-tab=\"" + newTabRef + "\"]");

                if (newTab) {
                  this.showTab(newTab);
                  this.activeTabRef = newTabRef;
                  return newTab;
                } else {
                  throw new Error("ai-tab element for " + newTabRef + " not found");
                }
              } else {
                this.activeTabRef = null;
              }
            },
            writable: true,
            configurable: true
          },
          bind: {
            value: function bind() {
              this.element.classList.add("ai-tabs");
              this.linksContainer = this.element.querySelector(".ai-nav-tabs");
              this.slider = $("<div class=\"ai-tab-slider\">");
              this.sliderWidth = 100 / this.tabLinks.length;
              this._setSliderWidth();
              this.bindLinks();

              $(this.linksContainer).append(this.slider);
            },
            writable: true,
            configurable: true
          },
          unbind: {
            value: function unbind() {
              this.unbindLinks();
            },
            writable: true,
            configurable: true
          },
          tabLinksChanged: {
            value: function tabLinksChanged() {
              this.bindLinks();
            },
            writable: true,
            configurable: true
          },
          bindLinks: {
            value: function bindLinks() {
              var _this = this;
              this.unbindLinks;

              this.tabLinks.forEach(function (link) {
                link.addEventListener("click", _this.linkHandler, false);
              });
            },
            writable: true,
            configurable: true
          },
          unbindLinks: {
            value: function unbindLinks() {
              var _this = this;
              this.tabLinks.forEach(function (link) {
                link.removeEventListener("click", _this.linkHandler, false);
              });
            },
            writable: true,
            configurable: true
          },
          _linkHandler: {
            value: function _linkHandler($event) {
              $event.preventDefault();
              console.log($event.target.offsetLeft);
              this._setSliderPosition($event.target.offsetLeft);
              this.setActiveTab($event.target.getAttribute("href"));
            },
            writable: true,
            configurable: true
          },
          _setSliderPosition: {
            value: function _setSliderPosition(position) {
              this._setSliderWidth();
              this.slider.css("left", position);
            },
            writable: true,
            configurable: true
          },
          _setSliderWidth: {
            value: function _setSliderWidth() {
              var _this = this;
              this.slider.css("width", _this.sliderWidth + 10 + "%");
              setTimeout(function () {
                _this.slider.css("width", _this.sliderWidth + "%");
              }, 200);
            },
            writable: true,
            configurable: true
          },
          showTab: {
            value: function showTab(tab) {
              if (typeof this._showTab === "function") {
                this._showTab(tab);
              } else {
                tab.style.display = "block";
              }
            },
            writable: true,
            configurable: true
          },
          hideTab: {
            value: function hideTab(tab) {
              if (typeof this._hideTab === "function") {
                this._hideTab(tab);
              } else {
                tab.style.display = "none";
              }
            },
            writable: true,
            configurable: true
          },
          tabRefChanged: {
            value: function tabRefChanged() {
              console.log("tabRefChanged", arguments);
            },
            writable: true,
            configurable: true
          },
          showTabChanged: {
            value: function showTabChanged() {
              console.log("showTabChanged", arguments);
            },
            writable: true,
            configurable: true
          },
          hideTabChanged: {
            value: function hideTabChanged() {
              console.log("hideTabChanged", arguments);
            },
            writable: true,
            configurable: true
          }
        });

        return AiTabsAttachedBehavior;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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