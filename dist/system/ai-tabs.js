System.register(["aurelia-templating", "aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, TWO_WAY, _prototypeProperties, _classCallCheck, AiTabsAttachedBehavior;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_aureliaFramework) {
      TWO_WAY = _aureliaFramework.TWO_WAY;
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
              return Behavior.withOptions().and(function (x) {
                x.withProperty("activeTab", "tabChanged", "active-tab", false, TWO_WAY).withProperty("_showTab", "showTabChanged", "show-tab").withProperty("_hideTab", "hideTabChanged", "hide-tab");
              }).syncChildren("links", "linksChanged", "[tab-ref]").noView();
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
          panes: {
            get: function () {
              return Array.prototype.slice.call(this.element.querySelectorAll("[ai-tab]"));
            },
            configurable: true
          },
          getActiveTab: {
            get: function () {
              return this.links && this.links[0].getAttribute("tab-ref");
            },
            configurable: true
          },
          activeLink: {
            get: function () {
              var _this = this;
              return this.links.find(function (x) {
                return x.getAttribute("tab-ref") === _this.activeTab;
              }) || this.links[0];
            },
            configurable: true
          },
          activePane: {
            get: function () {
              var _this = this;
              return this.panes.find(function (x) {
                return x.getAttribute("ai-tab") === _this.activeTab;
              }) || this.panes[0];
            },
            configurable: true
          },
          attached: {
            value: function attached() {
              this.activeTab = this.activeTab || this.getActiveTab;
              this.setActiveTab(this.activeLink, true);
            },
            writable: true,
            configurable: true
          },
          bind: {
            value: function bind() {
              this.element.classList.add("ai-tabs");
              this.bindLinks();
              this.bindPanes();
              this.setBorder();
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
          bindLinks: {
            value: function bindLinks() {
              var _this = this;
              if (!this.links) {
                return;
              }this.unbindLinks;

              this.links.forEach(function (link) {
                link.addEventListener("click", _this.linkHandler, false);
              });
            },
            writable: true,
            configurable: true
          },
          bindPanes: {
            value: function bindPanes() {
              if (!this.panes) {
                return;
              }
              this.panes.forEach(function (pane) {
                pane.classList.add("tab-pane", "fade");
              });
            },
            writable: true,
            configurable: true
          },
          setActiveTab: {
            value: function setActiveTab(newActiveLink) {
              var force = arguments[1] === undefined ? false : arguments[1];
              var activeTab = newActiveLink.getAttribute("tab-ref");

              if (force !== true && activeTab == this.activeTab) {
                return;
              }this.hideTab();
              this.activeTab = activeTab;


              this.activeLink && this.activeLink.parrent.classList.add("active");

              return activeTab;
            },
            writable: true,
            configurable: true
          },
          linksChanged: {
            value: function linksChanged() {
              this.bindLinks();
            },
            writable: true,
            configurable: true
          },
          unbindLinks: {
            value: function unbindLinks() {
              var _this = this;
              if (!this.links) {
                return;
              }this.links.forEach(function (link) {
                link.removeEventListener("click", _this.linkHandler, false);
              });
            },
            writable: true,
            configurable: true
          },
          _linkHandler: {
            value: function _linkHandler($event) {
              $event.preventDefault();
              this.setActiveTab($event.target);
            },
            writable: true,
            configurable: true
          },
          showTab: {
            value: function showTab() {
              this.activeLink.classList.add("active");
              this.activePane.classList.add("active", "in");
            },
            writable: true,
            configurable: true
          },
          hideTab: {
            value: function hideTab() {
              this.activeLink.classList.remove("active");
              this.activePane.classList.remove("active", "in");
            },
            writable: true,
            configurable: true
          },
          tabChanged: {
            value: function tabChanged(value) {
              this[value ? "showTab" : "hideTab"]();
              this.updateTabSliderPosition();
            },
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
          },
          setBorder: {
            value: function setBorder() {
              this.border = this.border || this.element.getElementsByClassName("ai-tab-slider")[0] || this.createBorder();
              var nav = this.element.getElementsByClassName("ai-nav-tabs")[0];
              nav.appendChild(this.border);

              this.updateTabSliderPosition();
            },
            writable: true,
            configurable: true
          },
          createBorder: {
            value: function createBorder() {
              var border = document.createElement("DIV");
              border.classList.add("ai-tab-slider");
              return border;
            },
            writable: true,
            configurable: true
          },
          updateTabSliderPosition: {
            value: function updateTabSliderPosition() {
              var _this = this;


              var sliderWidth = 100 / this.links.length;

              this.border.style.width = sliderWidth + 10 + "%";
              this.activeLink && (this.border.style.left = this.activeLink.offsetLeft + "px");

              setTimeout(function () {
                _this.border.style.width = sliderWidth + "%";
              }, 200);
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