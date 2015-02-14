"use strict";

var AiBtnToggleAttachedBehavior = require("./ai-btn-toggle").AiBtnToggleAttachedBehavior;
var AiBtnRadioAttachedBehavior = require("./ai-btn-radio").AiBtnRadioAttachedBehavior;
var AiClassAttachedBehavior = require("./ai-class").AiClassAttachedBehavior;


function install(aurelia) {
  aurelia.withResources([AiBtnToggleAttachedBehavior, AiBtnRadioAttachedBehavior, AiClassAttachedBehavior]);
}

exports.AiBtnToggleAttachedBehavior = AiBtnToggleAttachedBehavior;
exports.AiBtnRadioAttachedBehavior = AiBtnRadioAttachedBehavior;
exports.AiClassAttachedBehavior = AiClassAttachedBehavior;
exports.install = install;
Object.defineProperty(exports, "__esModule", {
  value: true
});