/* */ 
"format register";
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var hasTemplateElement = ("content" in document.createElement("template"));

function importElements(frag, link, callback) {
  document.head.appendChild(frag);

  if (window.Polymer && Polymer.whenReady) {
    Polymer.whenReady(callback);
  } else {
    link.addEventListener("load", callback);
  }
}

var Loader = (function () {
  function Loader() {}

  _prototypeProperties(Loader, {
    createDefaultLoader: {
      value: function createDefaultLoader() {
        throw new Error("No default loader module imported.");
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  }, {
    loadModule: {
      value: function loadModule(id) {
        throw new Error("Loaders must implement loadModule(id).");
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    loadAllModules: {
      value: function loadAllModules(ids) {
        throw new Error("Loader must implement loadAllModules(ids).");
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    loadTemplate: {
      value: function loadTemplate(url) {
        throw new Error("Loader must implement loadTemplate(url).");
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    importDocument: {
      value: function importDocument(url) {
        return new Promise(function (resolve, reject) {
          var frag = document.createDocumentFragment();
          var link = document.createElement("link");

          link.rel = "import";
          link.href = url;
          frag.appendChild(link);

          importElements(frag, link, function () {
            return resolve(link["import"]);
          });
        });
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    importTemplate: {
      value: function importTemplate(url) {
        var _this = this;
        return this.importDocument(url).then(function (doc) {
          return _this.findTemplate(doc, url);
        });
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    findTemplate: {
      value: function findTemplate(doc, url) {
        if (!hasTemplateElement) {
          HTMLTemplateElement.bootstrap(doc);
        }

        var template = doc.querySelector("template");

        if (!template) {
          throw new Error("There was no template element found in '" + url + "'.");
        }

        return template;
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return Loader;
})();

exports.Loader = Loader;