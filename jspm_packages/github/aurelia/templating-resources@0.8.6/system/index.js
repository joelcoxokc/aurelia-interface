/* */ 
System.register(["./compose", "./if", "./repeat", "./show", "./selected-item", "./global-behavior"], function (_export) {
  "use strict";

  var Compose, If, Repeat, Show, SelectedItem, GlobalBehavior;


  function install(aurelia) {
    aurelia.withResources([Show, If, Repeat, Compose, SelectedItem, GlobalBehavior]);
  }

  return {
    setters: [function (_compose) {
      Compose = _compose.Compose;
    }, function (_if) {
      If = _if.If;
    }, function (_repeat) {
      Repeat = _repeat.Repeat;
    }, function (_show) {
      Show = _show.Show;
    }, function (_selectedItem) {
      SelectedItem = _selectedItem.SelectedItem;
    }, function (_globalBehavior) {
      GlobalBehavior = _globalBehavior.GlobalBehavior;
    }],
    execute: function () {
      _export("Compose", Compose);

      _export("If", If);

      _export("Repeat", Repeat);

      _export("Show", Show);

      _export("SelectedItem", SelectedItem);

      _export("GlobalBehavior", GlobalBehavior);

      _export("install", install);
    }
  };
});