gulp-yuidoc
===========

![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url] [![Code Climate][codeclimate-image]][codeclimate-url]

> [yuidoc](https://github.com/yui/yuidoc) plugin for [gulp](https://github.com/wearefractal/gulp)

WARNING
-------------

This is an early release, and you will likely encounter bugs or limitations.

TL;DR
-------------

Install `gulp-yuidoc` as a development dependency:

```shell
npm install --save-dev gulp-yuidoc
```

Then, add it to your `gulpfile.js`:

```javascript
var yuidoc = require("gulp-yuidoc");

gulp.src("./src/*.js")
  .pipe(yuidoc())
  .pipe(gulp.dest("./doc"));
```

## API

### yuidoc.parser(options, name)

Calling the parser alone will build a vinyl containing the parsing result of fed files.
By default, that vinyl will get named "yuidoc.json", unless you override it with the optional "name" argument.

"options" allows you to speficy yuidoc parsing options (XXX untested).

```javascript
gulp.src("./src/*.js")
  .pipe(yuidoc.parser())
  .pipe(gulp.dest("./jsondocoutput"));
```

### yuidoc.reporter()

Reports whatever went wrong with parsing.

```javascript
gulp.src("./src/*.js")
  .pipe(yuidoc.parser())
  .pipe(yuidoc.reporter())
```

If you prefer ugly things, call `yiudoc.yuiReporter()` instead (default reporter, which is beautiful, is "stylish", stolen from sindresorhus).

### yuidoc.generator(options)

Generates documentation from the result of the parser.

```javascript
gulp.src("./src/*.js")
  .pipe(yuidoc.parser())
  .pipe(yuidoc.generator())
  .pipe(gulp.dest('./documentation-output'))
```

You may pass yuidoc generator options optionally (XXX untested - undocumented).

### yuidoc(parseOpts, renderOpts)

This:

```javascript
gulp.src("./src/*.js")
  .pipe(yuidoc())
  .pipe(gulp.dest('./documentation-output'))
```

is a shortcut for:

```javascript
gulp.src("./src/*.js")
  .pipe(yuidoc.parser())
  .pipe(yuidoc.reporter())
  .pipe(yuidoc.generator())
  .pipe(gulp.dest('./documentation-output'))
```


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-yuidoc
[npm-image]: https://badge.fury.io/js/gulp-yuidoc.png

[travis-url]: http://travis-ci.org/jsBoot/gulp-yuidoc
[travis-image]: https://secure.travis-ci.org/jsBoot/gulp-yuidoc.png?branch=master

[coveralls-url]: https://coveralls.io/r/jsBoot/gulp-yuidoc
[coveralls-image]: https://coveralls.io/repos/jsBoot/gulp-yuidoc/badge.png?branch=master

[depstat-url]: https://david-dm.org/jsBoot/gulp-yuidoc
[depstat-image]: https://david-dm.org/jsBoot/gulp-yuidoc.png

[codeclimate-url]: https://codeclimate.com/github/jsBoot/gulp-yuidoc.js
[codeclimate-image]: https://codeclimate.com/github/jsBoot/gulp-yuidoc.png
