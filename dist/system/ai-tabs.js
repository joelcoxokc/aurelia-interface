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
              this.activeTabRef = "tab-3";
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
            value: function tabRefChanged() {},
            writable: true,
            configurable: true
          },
          showTabChanged: {
            value: function showTabChanged() {},
            writable: true,
            configurable: true
          },
          hideTabChanged: {
            value: function hideTabChanged() {},
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