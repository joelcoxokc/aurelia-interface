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
              if (force !== true && newTabRef == this.activeTabRef) return;
              this.activeTabRef = newTabRef;

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
//# sourceMappingURL=data:application/json;base64,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