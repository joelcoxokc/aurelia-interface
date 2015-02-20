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
                x.withProperty("activeTabRef", "tabRefChanged", "active-tab-ref", false, TWO_WAY).withProperty("_showTab", "showTabChanged", "show-tab").withProperty("_hideTab", "hideTabChanged", "hide-tab");
              }).syncChildren("tabLinks", "tabLinksChanged", "[ai-tab-link]").noView();
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
          activeTabLink: {
            get: function () {
              var _this = this;
              return this.tabLinks.find(function (x) {
                return x.getAttribute("href") === _this.activeTabRef;
              });
            },
            configurable: true
          },
          activeTabContent: {
            get: function () {
              var _this = this;
              return this.tabs.find(function (x) {
                return x.getAttribute("ai-tab") === _this.activeTabRef;
              });
            },
            configurable: true
          },
          setActiveTab: {
            value: function setActiveTab(newTabRef) {
              var _this = this;
              var force = arguments[1] === undefined ? false : arguments[1];
              if (force !== true && newTabRef == this.activeTabRef) {
                return;
              }this.activeTabRef = newTabRef;

              this.tabs.forEach(function (tab) {
                return _this.hideTab(tab);
              });

              if (newTabRef) {
                var newTab = this.element.querySelector("[ai-tab=\"" + newTabRef + "\"]");

                if (newTab) {
                  this.showTab(newTab);
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
              this.bindLinks();
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
          attached: {
            value: function attached() {
              this.setActiveTab(this.activeTabRef, true);
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
              this.setActiveTab($event.target.getAttribute("href"));
            },
            writable: true,
            configurable: true
          },
          showTab: {
            value: function showTab(tab) {
              var defaultShowTab = (function () {
                tab.style.display = "block";
              }).bind(this);

              if (typeof this._showTab === "function") {
                this._showTab(this, defaultShowTab);
              } else {
                defaultShowTab();
              }
            },
            writable: true,
            configurable: true
          },
          hideTab: {
            value: function hideTab(tab) {
              var defaultHideTab = (function () {
                tab.style.display = "none";
              }).bind(this);

              if (typeof this._hideTab === "function") {
                this._hideTab(this, defaultHideTab);
              } else {
                defaultHideTab();
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