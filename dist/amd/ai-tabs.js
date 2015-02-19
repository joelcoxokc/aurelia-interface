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