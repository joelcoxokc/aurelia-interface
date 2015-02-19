/* */ 
"format register";
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var _inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) subClass.__proto__ = superClass;
};

var Origin = require("aurelia-metadata").Origin;
var Loader = require("aurelia-loader").Loader;
var join = require("aurelia-path").join;


if (!window.System || !window.System["import"]) {
  var sys = window.System = window.System || {};
  sys.polyfilled = true;
  sys.map = {};
  sys["import"] = function (moduleId) {
    return new Promise(function (resolve, reject) {
      require([moduleId], resolve, reject);
    });
  };
  sys.normalize = function (url) {
    return Promise.resolve(url);
  };
}

function ensureOriginOnExports(executed, name) {
  var target = executed,
      key,
      exportedValue;

  if (target.__useDefault) {
    target = target["default"];
  }

  Origin.set(target, new Origin(name, "default"));

  for (key in target) {
    exportedValue = target[key];

    if (typeof exportedValue === "function") {
      Origin.set(exportedValue, new Origin(name, key));
    }
  }

  return executed;
}

Loader.createDefaultLoader = function () {
  return new DefaultLoader();
};

var DefaultLoader = (function (Loader) {
  function DefaultLoader() {
    this.baseUrl = System.baseUrl;
    this.baseViewUrl = System.baseViewUrl || System.baseUrl;
    this.registry = {};
  }

  _inherits(DefaultLoader, Loader);

  _prototypeProperties(DefaultLoader, null, {
    loadModule: {
      value: function loadModule(id, baseUrl) {
        var _this = this;
        baseUrl = baseUrl === undefined ? this.baseUrl : baseUrl;

        if (baseUrl && !id.startsWith(baseUrl)) {
          id = join(baseUrl, id);
        }

        return System.normalize(id).then(function (newId) {
          var existing = _this.registry[newId];
          if (existing) {
            return existing;
          }

          return System["import"](newId).then(function (m) {
            _this.registry[newId] = m;
            return ensureOriginOnExports(m, newId);
          });
        });
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    loadAllModules: {
      value: function loadAllModules(ids) {
        var loads = [],
            i,
            ii,
            loader = this.loader;

        for (i = 0, ii = ids.length; i < ii; ++i) {
          loads.push(this.loadModule(ids[i]));
        }

        return Promise.all(loads);
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    loadTemplate: {
      value: function loadTemplate(url) {
        if (this.baseViewUrl && !url.startsWith(this.baseViewUrl)) {
          url = join(this.baseViewUrl, url);
        }

        return this.importTemplate(url);
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return DefaultLoader;
})(Loader);

exports.DefaultLoader = DefaultLoader;