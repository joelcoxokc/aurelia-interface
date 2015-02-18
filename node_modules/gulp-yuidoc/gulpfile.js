(function(){
  'use strict';

  // Gulp
  var gulp = require('gulp');
  var gutil = require('gulp-util');

  // Some basic linting
  var eslint = require('gulp-eslint');
  var jshint = require('gulp-jshint');

  var jsreporter = require('jshint-stylish');
  var esreporter = require('eslint-stylish');

  var fs = require('fs');
  var jsconfig = JSON.parse(fs.readFileSync('./.jshintrc'));
  var esconfig = JSON.parse(fs.readFileSync('./.eslintrc'));

  gulp.task('lint', function(){
    gulp.src([
      'gulpfile.js',
      'index.js',
      'lib/**/*.js'
    ])
    .pipe(gutil.combine(
      eslint(esconfig),
      eslint.formatEach(esreporter),
      jshint(jsconfig),
      jshint.reporter(jsreporter)
    )());
  });




  var template = require('gulp-template');
  var yuidoc = require('./');

  var pkg = require('./package.json');

  // var opts = {
  //   'private': true,
  //   monospaceLinks: true,
  //   cleverLinks: true,
  //   outputSourceFiles: true
  // };

  // var tpl = {
  //   path: 'ink-docstrap',
  //   systemName      : pkg.name,
  //   footer          : 'Generated with gulp',
  //   copyright       : 'Copyright WebItUp 2014',
  //   navType         : 'vertical',
  //   theme           : 'journal',
  //   linenums        : true,
  //   collapseSymbols : false,
  //   inverseNav      : false
  // };

  // Amelia
  // Cerulean
  // Cosmo
  // Cyborg
  // Flatly
  // Journal
  // Readable
  // Simplex
  // Slate
  // Spacelab
  // Spruce
  // Superhero
  // United

  gulp.task('doc-simple', function() {
    gulp.src([
      'index.js',
      'lib/**/*.js',
      'node_modules/yuidocjs/lib/**/*.js'
    ])
    // Process source files first
    .pipe(template({pkg: pkg}))
    // Then process it
    .pipe(yuidoc())
    .pipe(gulp.dest('./doc/yuidoc-simple'));
  });

  gulp.task('doc-inked', function() {
    gulp.src([
      'index.js',
      'lib/**/*.js',
      'node_modules/yuidocjs/lib/**/*.js'
    ])
    // Process source files first
    .pipe(template({pkg: pkg}))
    // Then parse
    .pipe(yuidoc.parser())
    .pipe(yuidoc.reporter())
    // Then generate the documentation and
    .pipe(yuidoc.generator())
    .pipe(gulp.dest('./doc/yuidoc-inked'));
  });

}());
