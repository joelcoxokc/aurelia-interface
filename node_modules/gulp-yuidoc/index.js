(function(){
  'use strict';

  var through2 = require('through2'),
    path = require('path'),
    gutil = require('gulp-util'),
    fs = require('vinyl-fs');

  var File = gutil.File;
  var PluginError = gutil.PluginError;

  var Parser = require('./lib/parser.js');
  var Generator = require('./lib/generator.js');

  /**
   * That's the plugin parser
   */

  var streamParser = function (options, name) {
    name = name || 'yuidoc.json';

    var firstFile = null;

    var wp = new Parser(options);

    var bufferFiles = function(file, enc, next){
      if (file.isNull()) return; // ignore
      if (file.isStream()) return this.emit('error', new PluginError('gulp-yuidoc',  'Streaming not supported'));

      // Store firstFile to get a base and cwd later on
      if (!firstFile)
        firstFile = file;

      wp.parse(file);

      next();
    };

    var endStream = function(conclude){
      // Nothing? Exit right away
      if (!firstFile){
        conclude();
        return;
      }

      var data;
      try{
        data = JSON.stringify(wp.complete());
        // data = parser(options, filemap));
      }catch(e){
        return this.emit('error', new PluginError('gulp-jsdoc',
          'Oooooh! Failed parsing with yuisdoc. What did you do?! ' + e));
      }

      // Pump-up the generated json file
      this.push(new File({
        cwd: firstFile.cwd,
        base: firstFile.base,
        path: path.join(firstFile.base, name),
        contents: new Buffer(data)
      }));

      conclude();
    };

    // That's it for the parser
    return through2.obj(bufferFiles, endStream);
  };

  // May take any number of documentation json files as entry - this is kind of stupid, but well
  var streamGenerator = function(options){
    options = options || {};
    var gp = new Generator(options);
    var tdir = options.themedir || path.join(__dirname, 'node_modules', 'yuidocjs', 'themes', 'default')

    var processor = function(file, enc, next){
      if (file.isNull()) return; // ignore
      if (file.isStream()) return this.emit('error', new PluginError('gulp-jsdoc',  'Streaming not supported'));


      // Globs the assets from the theme
      var theme = tdir;
      var opt = {cwd: theme};
      var defaultheme = './assets/**/*';

      try{
        gp.render(file, function(result){
          // Get the path/content pairs and spoof them into the stream
          Object.keys(result).forEach(function(f){
            var p = path.resolve(file.cwd, f);
            this.push(new File({
              cwd: file.cwd,
              base: file.cwd,
              path: p,
              contents: new Buffer(result[f])
            }));
          }.bind(this));

          // Get the theme and spoof it into us stream
          fs.src(defaultheme, opt)
            .pipe(through2.obj(function(f, e, n){
              // XXX why oh why - vinyl doesn't make much sense :-(
              f.base = f.cwd;
              this.push(f);
              n();
            }.bind(this), function(end){
              end();
              // XXX get the custom theme, possibly, otherwise, end the main stream as well.
              next();
            }));
        }.bind(this));
      }catch(e){
        return this.emit('error', new PluginError('gulp-jsdoc',
          'Oooooh! Failed rendering with yuidoc. What did you do?! ' + e));
      }

    };

    return through2.obj(processor);
  };

  // Wrap reporter helper
  var wrapReporter = function(reporter){
    return function(options){
      return through2.obj(function(file, enc, next){
        var warnings = JSON.parse(file.contents.toString('utf8')).warnings;
        if(warnings && warnings.length){
          // Don't trust the (yahoo) reporter too much
          try{
            reporter(warnings, options);
          }catch(e){
            return this.emit('error', new PluginError('gulp-yuidoc', 'Reporter crashed!' + e));
          }
        }
        this.push(file);
        next();
      });
    };
  };

  var yuidoc = function(parserOptions, generatorOptions){
    return gutil.combine(
      yuidoc.parser(parserOptions),
      yuidoc.reporter(),
      yuidoc.generator(generatorOptions)
    )();
  };

  // Yui default, provided reporter
  yuidoc.yuiReporter = wrapReporter(require('./lib/uglyreporter'));

  // Our own reporter
  yuidoc.chalkReporter = wrapReporter(require('./lib/chalkreporter'));

  // Default to chalk, nicier :)
  yuidoc.reporter = yuidoc.chalkReporter;

  yuidoc.generator = streamGenerator;

  yuidoc.parser = streamParser;

  // Listening on uncaughtException is plain bad - deny YUI the right to do so
  // https://github.com/joyent/node/issues/2582
  process.removeAllListeners('uncaughtException');

  module.exports = yuidoc;

}());

