var path = require('path');

var appRoot    = 'src/plugins/';
var demoRoot   = 'src/demo/';
var styleRoot  = 'src/styles/';

module.exports = {
  root: appRoot,
  source: appRoot   + '**/*.js',
  html  : appRoot   + '**/*.html',
  style : styleRoot + '**/*.css',
  stylus: 'src/styles/index.styl',
  output: 'dist/',
  doc:'./doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/',
  src: {
      scripts : appRoot   + '**/*.js'   ,
      views   : appRoot   + '**/*.html'   ,
      stylus  : styleRoot + '**/*.styl' ,
      css     : styleRoot + '**/*.css'  ,
      styl    : styleRoot + 'index.styl'
    },
  demo: {
      scripts : demoRoot + '**/*.js'  ,
      views   : demoRoot + '**/*.html'
  }
};
