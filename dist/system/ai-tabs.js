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
//# sourceMappingURL=data:application/json;base64,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Q0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0Msa0JBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDMUMsb0JBQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ3hELHFCQUFPLE1BQU0sQ0FBQzthQUNmOzs7O0FBRUQsaUNBQXVCO21CQUFDLG1DQUFHOzs7O0FBRXZCLGtCQUFJLFdBQVcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUE7O0FBRXpDLGtCQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDeEQsa0JBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQSxBQUFFLENBQUE7O0FBRXZGLHdCQUFVLENBQUMsWUFBSTtBQUNYLHNCQUFLLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFdBQVcsR0FBRyxHQUFHLENBQUM7ZUFDdEQsRUFBRSxHQUFHLENBQUMsQ0FBQTthQUlWOzs7Ozs7ZUFwS1Usc0JBQXNCIiwiZmlsZSI6ImFpLXRhYnMuanMiLCJzb3VyY2VSb290IjoiL3NyYy9wbHVnaW5zLyJ9