/**
 * This is the documentation generator
 * Eats-up a JSON doc file previously generated, and spit out a bunch of html files
 */

(function(){
  'use strict';

  var Y = require('yuidocjs');

  var Generator = function(options){
    options = options || {};
    options.quiet = true;

    this.render = function(vinyl, complete){
      var json = JSON.parse(vinyl.contents.toString('utf8'));

      options = Y.Project.mix(json, options);

      // Instanciate a YUI builder
      var builder = new Y.DocBuilder(options, json);

      var total = 0;
      // Stack of files to return
      var stack = {
      };

      // These are NOT asynchronous, despite the callbackification of the API

      // Handle modules first
      Object.keys(builder.data.modules).forEach(function(k) {
        var v = builder.data.modules[k];
        // External? Don't.
        if (v.external)
          return;
        total++;
        // Render
        builder.renderModule(function(html/*, view*/) {
          stack['modules/' + v.name + '.html'] = html;
        }, v, 'main');
      });

      // Now, classes
      Object.keys(builder.data.classes).forEach(function(k) {
        var v = builder.data.classes[k];
        // External? Don't.
        if (v.external)
          return;
        total++;
        // Render
        builder.renderClass(function(html/*, view*/) {
          stack['classes/' + v.name + '.html'] = html;
        }, v, 'main');
      });

      // Now, files - this one is asynchronous :/
      Object.keys(builder.data.files).forEach(function(k) {
        var v = builder.data.files[k];
        // External? Don't.
        if (v.external)
          return;
        total++;
        // Render
        builder.renderFile(function(html, view, data) {
          if (!view || !data)
            return;
          stack['files/' + data.name.replace(/[\/\\]/g, '_') + '.html'] = html;
          if(Object.keys(stack).length == total)
            complete(stack);
        }, v, 'main');
      });

      // Render the index
      builder.renderIndex(function(html/*, view*/) {
        stack['index.html'] = html;
        total++;
      });

      // Render the stuff
      builder.renderAPIMeta(function(js) {
        stack['api.js'] = js;
        total++;
      });

    };
  };

  module.exports = Generator;

}());
