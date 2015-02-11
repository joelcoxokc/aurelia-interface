var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');

// outputs changes to files to the console
function reportChange(event){
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// this task wil watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
gulp.task('watch', ['serve'], function() {
  gulp.watch(paths.source.js,        ['source:js'     , browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.source.html,      ['source:html'   , browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.source.jade,      ['source:html'   , browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.plugins.js,       ['plugins:js', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.plugins.styl.all, ['plugins:styles', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.plugins.html,     ['plugins:html'  , browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.plugins.jade,     ['plugins:html'  , browserSync.reload]).on('change', reportChange);
  // gulp.watch(paths.plugins.style, browserSync.reload).on('change', reportChange);
});
