(function(){
  'use strict';

  /**
   * This is a fancy reporter
   * shamelessly stolen from sindresorhus @ https://github.com/sindresorhus/jshint-stylish
   * under MIT
   */

  var chalk = require('chalk');
  var table = require('text-table');

  var chalkReporter = function (warnings, options) {
    var total = warnings.length;
    var ret = '';
    var headers = [];
    var prevfile;

    options = options || {};

    ret += table(warnings.map(function (err, i) {
      var file = err.line.split(':');
      var lineNb = file.pop();
      file = file.pop();

      var line = [
        '',
        chalk.gray('line ' + lineNb),
        '',// chalk.gray('col ' + err.character),
        chalk.blue(err.message)
      ];

      if (file !== prevfile) {
        headers[i] = file;
      }

      prevfile = file;

      return line;
    }), {
      stringLength: function (str) {
        return chalk.stripColor(str).length;
      }
    }).split('\n').map(function (el, i) {
      return headers[i] ? '\n' + chalk.underline(headers[i]) + '\n' + el : el;
    }).join('\n') + '\n\n';

    if (total > 0) {
      ret += chalk.red.bold((process.platform !== 'win32' ? '✖ ' : '') + total + ' problem' + (total === 1 ? '' : 's'));
    } else {
      ret += chalk.green.bold((process.platform !== 'win32' ? '✔ ' : '') + 'No problems');
      ret = '\n' + ret.trim();
    }

    console.log(ret + '\n');
  };

  module.exports = chalkReporter;

}());
