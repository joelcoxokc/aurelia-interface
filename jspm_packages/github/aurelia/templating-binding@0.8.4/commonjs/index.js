/* */ 
"format register";
"use strict";

var BindingLanguage = require("aurelia-templating").BindingLanguage;
var TemplatingBindingLanguage = require("./binding-language").TemplatingBindingLanguage;
var SyntaxInterpreter = require("./syntax-interpreter").SyntaxInterpreter;


function install(aurelia) {
  var instance,
      getInstance = function (c) {
    return instance || (instance = c.invoke(TemplatingBindingLanguage));
  };

  if (aurelia.container.hasHandler(TemplatingBindingLanguage)) {
    instance = aurelia.container.get(TemplatingBindingLanguage);
  } else {
    aurelia.container.registerHandler(TemplatingBindingLanguage, getInstance);
  }

  aurelia.container.registerHandler(BindingLanguage, getInstance);
}

exports.TemplatingBindingLanguage = TemplatingBindingLanguage;
exports.SyntaxInterpreter = SyntaxInterpreter;
exports.install = install;