(function(){
    var gulp = require('gulp');
    var $    = require('gulp-load-plugins')({lazy:false});
    var runSequence = require('run-sequence');
    var changed = require('gulp-changed');
    var plumber = require('gulp-plumber');
    var to5 = require('gulp-6to5');
    var sourcemaps = require('gulp-sourcemaps');
    var paths = require('../paths');
    var compilerOptions = require('../6to5-options');
    var assign = Object.assign || require('object.assign');



    var build = {
      source: {
            js   : buildSystem(paths.source.js, paths.output),
            html : buildHTML([paths.source.html, paths.source.jade], paths.output),
            style: buildCss(paths.source.style)
        },

      plugins:{
            js    : buildSystem(paths.plugins.js, paths.output)    ,
            html  : buildHTML([paths.plugins.html, paths.plugins.jade], paths.output)    ,
            fonts : buildFonts(paths.plugins.fonts)  ,
            styles: buildStylus(paths.plugins.styl.index)
        }
    }


    gulp
        .task('build',
              $.sequence( 'clean'
                         , 'build:source'
                         , 'build:plugins'
                         ))

    gulp
        .task('source:style' , build.source.css   )
        .task('source:html' , build.source.html )
        .task('source:js'   , build.source.js   )
        .task('build:source',
              $.sequence( 'source:js'
                        , 'source:html'
                        , 'source:style'
                        ))
    gulp
        .task('plugins:styles', build.plugins.styles )
        .task('plugins:fonts' , build.plugins.fonts  )
        .task('plugins:html'  , build.plugins.html   )
        .task('plugins:js'    , build.plugins.js     )
        .task('build:plugins' ,
              $.sequence( 'plugins:styles'
                        , 'plugins:html'
                        , 'plugins:js'
                        , 'plugins:fonts'
                        ))

    //////////////////////////

    // transpiles changed es6 files to SystemJS format

    // the plumber() call prevents 'pipe breaking' caused
    // by errors from other gulp plugins
    // https://www.npmjs.com/package/gulp-plumber
    function buildSystem(source, dest) {

        return function(){

            return gulp
              .src(source)
              .pipe($.flatten())
              .pipe(plumber())
              .pipe(changed(paths.output, {extension: '.js'}))
              .pipe(sourcemaps.init())
              .pipe(to5(assign({}, compilerOptions, {modules:'system'})))
              .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/' + paths.output }))
              .pipe(gulp.dest(dest));

        }

    }

    // copies changed html files to the output directory


    // this task calls the clean task (located
    // in ./clean.js), then runs the build-system
    // and build-html tasks in parallel
    // https://www.npmjs.com/package/gulp-run-sequence
    function buildHTML(source, dest) {

        return function() {
            var jadeFilter = $.filter('**/*.jade')
            return gulp
              .src(source)
              .pipe(jadeFilter)
              .pipe($.plumber())
              .pipe($.jade())
              .pipe($.plumber.stop())
              .pipe(jadeFilter.restore())
              .pipe($.flatten())
              .pipe(changed(paths.output, {extension: '.html'}))
              .pipe(gulp.dest(dest));

        }

    }


    function buildFonts(source) {

        return function() {

           return gulp
              .src(source)
              .pipe(gulp.dest(paths.output + '/fonts'))

        }

    }

    function buildStylus(source) {

        return function() {

            return gulp
              .src(source)
              .pipe($.plumber())
              .pipe($.stylus())
              .pipe($.concat('ui-aurelia.css'))
              .pipe($.autoprefixer())
              .pipe($.plumber.stop())
              .pipe(gulp.dest(paths.output))

        }

    }

    function buildCss(source) {

        return function() {
            console.log(source)
            return gulp
              .src(source)
              .pipe($.concat('system.css'))
              .pipe($.autoprefixer())
              .pipe(gulp.dest(paths.output))

        }

    }


})();
