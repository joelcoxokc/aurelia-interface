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

  gulp.watch(paths.demo.scripts , ['demo:system'  , browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.demo.views   , ['demo:views'    , browserSync.reload]).on('change', reportChange);

  gulp.watch(paths.src.scripts  , ['source:system', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.src.views    , ['source:views'  , browserSync.reload]).on('change', reportChange);

  gulp.watch(paths.src.stylus   , ['source:styles' , browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.src.css      , browserSync.reload).on('change', reportChange);
});
