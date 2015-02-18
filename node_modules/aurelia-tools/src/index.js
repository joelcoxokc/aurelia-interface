var doc = require('./doc');
var dev = require('./dev');

module.exports = {
  transformAPIModel:doc.transformAPIModel,
  updateOwnDependenciesFromLocalRepositories:dev.updateOwnDependenciesFromLocalRepositories,
  buildDevEnv:dev.buildDevEnv
};