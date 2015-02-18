/* */ 
"format register";
define(["exports","aurelia-templating","./binding-language","./syntax-interpreter"], function (exports, _aureliaTemplating, _bindingLanguage, _syntaxInterpreter) {
  "use strict";

  var BindingLanguage = _aureliaTemplating.BindingLanguage;
  var TemplatingBindingLanguage = _bindingLanguage.TemplatingBindingLanguage;
  var SyntaxInterpreter = _syntaxInterpreter.SyntaxInterpreter;


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
});