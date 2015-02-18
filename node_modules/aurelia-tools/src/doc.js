var fs = require('fs');

module.exports = {
  transformAPIModel:function(docPath){
    var api = JSON.parse(fs.readFileSync(docPath + '/api.json', 'utf-8')),
        classes = [],
        methods = [],
        properties = [],
        events = [],
        moduleName, moduleDescription;

    function categorizeMember(item, methods, properties, events){
      switch(item.itemtype){
        case 'method':
          methods.push(item);
          break;
        case 'property':
          properties.push(item);
          break;
        case 'event':
          events.push(item);
          break;
        default:
          console.warn('API DOC Item Type "' + item.itemtype + '" is not supported.');
          break;
      }

      delete item.itemtype;
    }

    function processClassItem(item){
      delete item.module;

      if(item.class){
        if(item.class === 'export'){
          delete item.class;
          item.file = item.file.substring(item.file.indexOf('aurelia'));
          categorizeMember(item, methods, properties, events);
        }else{
          var owner = api.classes[item.class];
          owner.methods = owner.methods || [];
          owner.properties = owner.properties || [];
          owner.events = owner.events || [];

          delete item.class;
          delete item.file;
          categorizeMember(item, owner.methods, owner.properties, owner.events);
        }
      }else{
        item.file = item.file.substring(item.file.indexOf('aurelia'));
        categorizeMember(item, methods, properties, events);
      }
    }

    for(var name in api.classes){
      var value = api.classes[name];
      if(!value.file){
        continue;
      }

      delete value.shortname;
      delete value.plugins;
      delete value.plugin_for;
      delete value.extensions;
      delete value.extension_for;
      delete value.namespace;
      delete value.module;
      delete value.classitems;

      value.methods = [];
      value.properties = [];
      value.events = [];
      value.file = value.file.substring(value.file.indexOf('aurelia'));

      classes.push(value);
    }

    api.classitems.forEach(processClassItem);

    for(var name in api.modules){
      moduleName = name;
      moduleDescription = api.modules[name].description;
      break;
    }

    fs.writeFileSync(docPath + '/api.json', JSON.stringify({
      name:moduleName,
      description: moduleDescription,
      classes: classes,
      methods: methods,
      properties: properties,
      events: events
    }));
  }
};