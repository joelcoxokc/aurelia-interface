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
                x.withProperty("activeTab", "tabChanged", "active-tab").withProperty("_showTab", "showTabChanged", "show-tab").withProperty("_hideTab", "hideTabChanged", "hide-tab").withProperty("waves", "wavesChanged", "waves").withProperty("text", "textChanged", "text").withProperty("bg", "bgChanged", "bg");
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
              this.activeLink && this.setActiveTab(this.activeLink, true);
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
              var classList = [];
              this.bg && classList.push(this.bg);
              this.text && classList.push(this.text);
              var tabsContainer = this.element.getElementsByClassName("ai-nav-tabs")[0];
              tabsContainer.classList.add.apply(tabsContainer.classList, classList);
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
          unbind: {
            value: function unbind() {
              this.unbindLinks();
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
          setActiveTab: {
            value: function setActiveTab(newActiveLink) {
              var force = arguments[1] === undefined ? false : arguments[1];
              var activeTab = newActiveLink.getAttribute("tab-ref");

              if (force !== true && activeTab == this.activeTab) {
                return;
              }this.hideTab();
              this.activeTab = activeTab;


              this.activeLink && this.activeLink.parentElement.classList.add("active");

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
              if (this.activeLink) {
                this.activeLink.classList.add("active");
                this.activePane.classList.add("active", "in");
              }
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
              this.borderElement = this.borderElement || this.element.getElementsByClassName("ai-tab-slider")[0] || this.createBorder();
              var nav = this.element.getElementsByClassName("ai-nav-tabs")[0];
              nav.appendChild(this.borderElement);

              this.updateTabSliderPosition();
            },
            writable: true,
            configurable: true
          },
          createBorder: {
            value: function createBorder() {
              var classList = ["ai-tab-slider"];
              var border = document.createElement("DIV");
              this.border && classList.push(this.border);
              border.classList.add.apply(border.classList, classList);
              return border;
            },
            writable: true,
            configurable: true
          },
          updateTabSliderPosition: {
            value: function updateTabSliderPosition() {
              var _this = this;


              var sliderWidth = 100 / this.links.length;

              this.borderElement.style.width = sliderWidth + 10 + "%";
              this.activeLink && (this.borderElement.style.left = this.activeLink.offsetLeft + "px");

              setTimeout(function () {
                _this.borderElement.style.width = sliderWidth + "%";
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