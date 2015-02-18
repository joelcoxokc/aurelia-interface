var gulp = require('gulp');
var runSequence = require('run-sequence');
var to5 = require('gulp-6to5');
var paths = require('../paths');
var compilerOptions = require('../6to5-options');
var assign = Object.assign || require('object.assign');
var $      = require('gulp-load-plugins')({lazy:false});


gulp.task('build', $.sequence('clean', ['build:demo','build:source']));

// gulp.task('build', function(callback) {
//   return runSequence(
//     'clean',
//     ['build-es6', 'build-commonjs', 'build-amd', 'build-system', 'build-html'],
//     callback
//   );
// });
