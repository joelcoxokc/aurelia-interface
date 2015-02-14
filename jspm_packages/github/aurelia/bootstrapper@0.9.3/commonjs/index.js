/* */ 
"format register";
"use strict";

exports.bootstrap = bootstrap;
var DefaultLoader = require("aurelia-loader-default").DefaultLoader;
var Aurelia = require("aurelia-framework").Aurelia;
var LogManager = require("aurelia-framework").LogManager;
var ConsoleAppender = require("aurelia-logging-console").ConsoleAppender;


var logger = LogManager.getLogger("bootstrapper");

var readyQueue = [];
var isReady = false;

function onReady(callback) {
  return new Promise(function (resolve, reject) {
    if (!isReady) {
      readyQueue.push(function () {
        try {
          resolve(callback());
        } catch (e) {
          reject(e);
        }
      });
    } else {
      resolve(callback());
    }
  });
}

function bootstrap(configure) {
  return onReady(function () {
    var loader = new DefaultLoader(),
        aurelia = new Aurelia(loader);

    return configureAurelia(aurelia).then(function () {
      return configure(aurelia);
    });
  });
}

function ready(global) {
  return new Promise(function (resolve, reject) {
    var completed = function () {
      global.document.removeEventListener("DOMContentLoaded", completed, false);
      global.removeEventListener("load", completed, false);
      resolve(global.document);
    };

    if (global.document.readyState === "complete") {
      resolve(global.document);
    } else {
      global.document.addEventListener("DOMContentLoaded", completed, false);
      global.addEventListener("load", completed, false);
    }
  });
}

function loadPolyfills() {
  return System.normalize("aurelia-bootstrapper").then(function (bootstrapperName) {
    return System.normalize("aurelia-framework", bootstrapperName).then(function (frameworkName) {
      System.map["aurelia-framework"] = frameworkName;

      return System.normalize("aurelia-loader", frameworkName).then(function (loaderName) {
        var toLoad = [];

        if (!System.polyfilled) {
          logger.debug("loading core-js");
          toLoad.push(System.normalize("core-js", loaderName).then(function (name) {
            return System["import"](name);
          }));
        }

        toLoad.push(System.normalize("aurelia-depedency-injection", frameworkName).then(function (name) {
          System.map["aurelia-depedency-injection"] = name;
        }));

        toLoad.push(System.normalize("aurelia-router", bootstrapperName).then(function (name) {
          System.map["aurelia-router"] = name;
        }));

        toLoad.push(System.normalize("aurelia-logging-console", bootstrapperName).then(function (name) {
          System.map["aurelia-logging-console"] = name;
        }));

        if (!("import" in document.createElement("link"))) {
          logger.debug("loading the HTMLImports polyfill");
          toLoad.push(System.normalize("webcomponentsjs/HTMLImports.min", loaderName).then(function (name) {
            return System["import"](name);
          }));
        }

        if (!("content" in document.createElement("template"))) {
          logger.debug("loading the HTMLTemplateElement polyfill");
          toLoad.push(System.normalize("aurelia-html-template-element", loaderName).then(function (name) {
            return System["import"](name);
          }));
        }

        return Promise.all(toLoad);
      });
    });
  });
}

function configureAurelia(aurelia) {
  return System.normalize("aurelia-bootstrapper").then(function (bName) {
    var toLoad = [];

    toLoad.push(System.normalize("aurelia-templating-binding", bName).then(function (templatingBinding) {
      aurelia.use.defaultBindingLanguage = function () {
        aurelia.use.plugin(templatingBinding);
        return this;
      };
    }));

    toLoad.push(System.normalize("aurelia-history-browser", bName).then(function (historyBrowser) {
      return System.normalize("aurelia-templating-router", bName).then(function (templatingRouter) {
        aurelia.use.router = function () {
          aurelia.use.plugin(historyBrowser);
          aurelia.use.plugin(templatingRouter);
          return this;
        };
      });
    }));

    toLoad.push(System.normalize("aurelia-templating-resources", bName).then(function (name) {
      System.map["aurelia-templating-resources"] = name;
      aurelia.use.defaultResources = function () {
        aurelia.use.plugin(name);
        return this;
      };
    }));

    toLoad.push(System.normalize("aurelia-event-aggregator", bName).then(function (eventAggregator) {
      System.map["aurelia-event-aggregator"] = eventAggregator;
      aurelia.use.eventAggregator = function () {
        aurelia.use.plugin(eventAggregator);
        return this;
      };
    }));

    return Promise.all(toLoad);
  });
}

function handleMain(mainHost) {
  var mainModuleId = mainHost.getAttribute("aurelia-main") || "main",
      loader = new DefaultLoader();

  return loader.loadModule(mainModuleId).then(function (m) {
    var aurelia = new Aurelia(loader);
    return configureAurelia(aurelia).then(function () {
      return m.configure(aurelia);
    });
  })["catch"](function (e) {
    setTimeout(function () {
      throw e;
    }, 0);
  });
}

function handleApp(appHost) {
  var appModuleId = appHost.getAttribute("aurelia-app") || "app",
      aurelia = new Aurelia();

  return configureAurelia(aurelia).then(function () {
    aurelia.use.defaultBindingLanguage().defaultResources().router().eventAggregator();

    if (appHost.hasAttribute("es5")) {
      aurelia.use.es5();
    } else if (appHost.hasAttribute("atscript")) {
      aurelia.use.atscript();
    }

    return aurelia.start().then(function (a) {
      return a.setRoot(appModuleId, appHost);
    });
  })["catch"](function (e) {
    setTimeout(function () {
      throw e;
    }, 0);
  });
}

function runningLocally() {
  return window.location.protocol !== "http" && window.location.protocol !== "https";
}

function run() {
  return ready(window).then(function (doc) {
    var mainHost = doc.querySelectorAll("[aurelia-main]"),
        appHost = doc.querySelectorAll("[aurelia-app]"),
        i,
        ii;

    if (appHost.length && !mainHost.length && runningLocally()) {
      LogManager.addAppender(new ConsoleAppender());
      LogManager.setLevel(LogManager.levels.debug);
    }

    return loadPolyfills().then(function () {
      for (i = 0, ii = mainHost.length; i < ii; ++i) {
        handleMain(mainHost[i]);
      }

      for (i = 0, ii = appHost.length; i < ii; ++i) {
        handleApp(appHost[i]);
      }

      isReady = true;
      for (i = 0, ii = readyQueue.length; i < ii; ++i) {
        readyQueue[i]();
      }
      readyQueue = [];
    });
  });
}

run();