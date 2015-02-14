/* */ 
System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, GlobalBehavior;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      GlobalBehavior = _export("GlobalBehavior", (function () {
        function GlobalBehavior(element) {
          this.element = element;
        }

        _prototypeProperties(GlobalBehavior, {
          metadata: {
            value: function metadata() {
              return Behavior.attachedBehavior("global-behavior").withOptions().and(function (x) {
                return x.dynamic();
              });
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
          bind: {
            value: function bind() {
              var handler = GlobalBehavior.handlers[this.aureliaAttrName];

              if (!handler) {
                throw new Error("Conventional binding handler not found for " + this.aureliaAttrName + ".");
              }

              try {
                this.handler = handler.bind(this, this.element, this.aureliaCommand) || handler;
              } catch (error) {
                throw new Error("Conventional binding handler failed.", error);
              }
            },
            writable: true,
            configurable: true
          },
          attached: {
            value: function attached() {
              if (this.handler && "attached" in this.handler) {
                this.handler.attached(this, this.element);
              }
            },
            writable: true,
            configurable: true
          },
          detached: {
            value: function detached() {
              if (this.handler && "detached" in this.handler) {
                this.handler.detached(this, this.element);
              }
            },
            writable: true,
            configurable: true
          },
          unbind: {
            value: function unbind() {
              if (this.handler && "unbind" in this.handler) {
                this.handler.unbind(this, this.element);
              }

              this.handler = null;
            },
            writable: true,
            configurable: true
          }
        });

        return GlobalBehavior;
      })());


      GlobalBehavior.createSettingsFromBehavior = function (behavior) {
        var settings = {};

        for (var key in behavior) {
          if (key === "aureliaAttrName" || key === "aureliaCommand" || !behavior.hasOwnProperty(key)) {
            continue;
          }

          settings[key] = behavior[key];
        }

        return settings;
      };

      GlobalBehavior.jQueryPlugins = {};

      GlobalBehavior.handlers = {
        jquery: {
          bind: function bind(behavior, element, command) {
            var settings = GlobalBehavior.createSettingsFromBehavior(behavior);
            var pluginName = GlobalBehavior.jQueryPlugins[command] || command;
            behavior.plugin = window.jQuery(element)[pluginName](settings);
          },
          unbind: function unbind(behavior, element) {
            if (typeof behavior.plugin.destroy === "function") {
              behavior.plugin.destroy();
              behavior.plugin = null;
            }
          }
        }
      };
    }
  };
});