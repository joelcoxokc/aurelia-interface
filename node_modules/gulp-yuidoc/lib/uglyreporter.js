(function(){
  'use strict';

  // Butt-ugly, simple reporter that consumes warnings attached to the json output object
  // This is copied literraly from the YUI linter/reporter, save the process.exit
  var uglyReporter = function(warnings){
    // Stupidly enough, the YUI linter process exit :/
    // (new Y.YUIDoc({})).lint(warnings);

    var count = 0;

    if (warnings && warnings.length) {
      console.log('YUIDoc found', warnings.length, 'lint errors in your docs');
      warnings.forEach(function(item) {
        count++;
        console.log('#' + count, item.message, item.line + '\n');
      });
    }
  };

  module.exports = uglyReporter;

}());
