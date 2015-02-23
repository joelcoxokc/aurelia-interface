var gulp = require('gulp');
var runSequence = require('run-sequence');
var to5 = require('gulp-6to5');
var paths = require('../paths');
var compilerOptions = require('../6to5-options');
var assign = Object.assign || require('object.assign');
var $      = require('gulp-load-plugins')({lazy:false});



gulp
    .task('build:source', [ 'source:es6'
                          , 'source:amd'
                          , 'source:views'
                          , 'source:styles'
                          , 'source:system'
                          , 'source:commonjs'
                          ])

    .task('build:demo', [ 'demo:views'
                        , 'demo:system'
                        ])
    .task('build', $.sequence('clean', ['build:demo','build:source']));

gulp
    .task('source:es6'      , system(paths.src.scripts, 'es6').dist)
    .task('source:amd'      , system(paths.src.scripts, 'amd').dist)
    .task('source:commonjs' , system(paths.src.scripts, 'commonjs').dist)
    .task('source:system'   , system(paths.src.scripts, 'system').flatten)
    .task('source:views'    , views(paths.src.views   , 'system').flatten)
    .task('source:styles'   , stylus(paths.src.styl ))
    ;


gulp
    .task('demo:views'  , views(paths.demo.views   ).path)
    .task('demo:system' , system(paths.demo.scripts).system)
    ;



    function system(source, name) {
        return {
          system: function() {
            var filter = $.filter('!**/*-mkd.js')
              name = name || '';
              return gulp
                    .src(source)
                    .pipe($.plumber())
                    .pipe($.changed(paths.output, {extension: '.js'}))
                    .pipe(filter)
                    .pipe($.sourcemaps.init())
                    .pipe(to5(assign({}, compilerOptions, {modules: 'system'} )))
                    .pipe($.sourcemaps.write({includeContent: false, sourceRoot: '/' + paths.root }))
                    .pipe(filter.restore())
                    .pipe(gulp.dest(paths.output + name));
            },
          dist: function() {
              name = name || '';
              return gulp.src(source)
                  .pipe($.flatten())
                  .pipe(to5(assign({}, compilerOptions, {modules: 'system'} )))
                  .pipe(gulp.dest(paths.output + name));
            },
          flatten: function(){
              name = name || '';
              return gulp
                    .src(source)
                    .pipe($.flatten())
                    .pipe($.plumber())
                    .pipe($.changed(paths.output, {extension: '.js'}))
                    .pipe($.sourcemaps.init())
                    .pipe(to5(assign({}, compilerOptions, {modules: 'system'} )))
                    .pipe($.sourcemaps.write({includeContent: false, sourceRoot: '/' + paths.root }))
                    .pipe(gulp.dest(paths.output + name));
            }
        }
    }

    function views(source, name) {
        return {
          path:function(){
              name = name || '';
              return gulp
                .src(source)
                .pipe(gulp.dest(paths.output + name));
          },
          flatten: function(){
              name = name || '';
              return gulp
                .src(source)
                .pipe($.flatten())
                .pipe(gulp.dest(paths.output + name));
          }
        }
    }


    function stylus(source) {
        return function() {
            return gulp.src(source)
              .pipe($.plumber())
              .pipe($.stylus())
              .pipe($.concat('aurelia-interface.css'))
              .pipe($.autoprefixer())
              .pipe($.plumber.stop())
              .pipe(gulp.dest(paths.src.styles))
        }
    }
