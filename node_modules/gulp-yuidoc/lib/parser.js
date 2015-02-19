/**
 * This is the document parser
 * Should be fed an options object, a list of files and dirs
 */

(function(){
  'use strict';

  var Y = require('yuidocjs');

  var Parser = function(options){
    options = options || {};
    // Be sure NOT to write the resulting JSON file to disk
    options.writeJSON = false;
    // Shut it
    options.lint = false;
    // Shut it, really
    options.quiet = true;

    options.syntaxtype = options.syntaxtype || 'js';

    // Set file list up
    var filemap = {};
    var dirmap = {};

    // Init yui
    var ydoc = new Y.YUIDoc(options);

    // Accumulate files
    this.parse = function(vinyl){
      var data = vinyl.contents.toString('utf8');
      // Don't treat empty files
      if (data.length){
        filemap[vinyl.path] = data;
        dirmap[vinyl.path] = vinyl.cwd;
      }
    };

    // Finally parse them up
    this.complete = function(){
      // Return the generated json
      return ydoc.writeJSON(new Y.DocParser({
        syntaxtype: ydoc.options.syntaxtype,
        filemap: filemap,
        dirmap: dirmap
      }).parse());
    };
  };

  module.exports = Parser;

}());
