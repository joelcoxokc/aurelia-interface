/*
 * Copyright 2014 Workiva, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cwd = process.cwd();
var glob = require("glob");
var path = require("path");
var fs = require("fs");


function flatten(structure) {
  return [].concat.apply([], structure);
}

function expandGlob(file) {
  return glob.sync(file.pattern || file);
};

var createPattern = function(path) {
  return {pattern: path, included: true, served: true, watched: false};
};

var createServedPattern = function(path){
  return {pattern: path, included: false, served: true, watched: true};
};

function getJspmPackageJson(dir) {
  var pjson = {};
  try {
    pjson = JSON.parse(fs.readFileSync(path.resolve(dir, 'package.json')));
  }
  catch(e) {
    pjson = {};
  }
  if (pjson.jspm) {
    for (var p in pjson.jspm)
      pjson[p] = pjson.jspm[p];
  }
  pjson.directories = pjson.directories || {};
  if (pjson.directories.baseURL) {
    if (!pjson.directories.packages)
      pjson.directories.packages = path.join(pjson.directories.baseURL, 'jspm_packages');
    if (!pjson.configFile)
      pjson.configFile = path.join(pjson.directories.baseURL, 'config.js');
  }
  return pjson;
}

module.exports = function(files, basePath, jspm, client) {
  // Initialize jspm config if it wasn't specified in karma.conf.js
  if(!jspm)
    jspm = {};
  if(!jspm.config)
    jspm.config = getJspmPackageJson(cwd).configFile || "config.js";
  if(!jspm.loadFiles)
    jspm.loadFiles = [];
  if(!jspm.serveFiles)
    jspm.serveFiles = [];
  if(!jspm.packages)
    jspm.packages = getJspmPackageJson(cwd).directories.packages || "jspm_packages/";
  if(!client.jspm)
    client.jspm = {};

  // Pass on useBundles option to client
  client.jspm.useBundles = jspm.useBundles;

  var packagesPath = path.normalize(cwd + '/' + jspm.packages + '/');
  var configPath = path.normalize(cwd + '/' + jspm.config);

  // Allow Karma to serve all files within jspm_packages.
  // This allows jspm/SystemJS to load them
  files.unshift(createServedPattern(packagesPath + '**/*'));

  // Add SystemJS loader and jspm config
  function getLoaderPath(fileName){
    var exists = glob.sync(packagesPath + fileName + '@*.js');
    if(exists && exists.length != 0){
      return packagesPath + fileName + '@*.js';
    } else {
      return packagesPath + fileName + '.js';
    }
  }
  files.unshift(createPattern(__dirname + '/adapter.js'));
  files.unshift(createPattern(configPath));
  files.unshift(createPattern(getLoaderPath('system')));
  files.unshift(createPattern(getLoaderPath('es6-module-loader')));

  // Loop through all of jspm.load_files and do two things
  // 1. Add all the files as "served" files to the files array
  // 2. Expand out and globs to end up with actual files for jspm to load. 
  //    Store that in client.jspm.expandedFiles
  client.jspm.expandedFiles = flatten(jspm.loadFiles.map(function(file){
    files.push(createServedPattern(cwd + "/" + (file.pattern || file)));
    return expandGlob(file);
  }));

  // Add served files to files array
  jspm.serveFiles.map(function(file){
    files.push(createServedPattern(cwd + "/" + (file.pattern || file)));
  });
};
