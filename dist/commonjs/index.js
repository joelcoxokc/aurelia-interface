"use strict";

var AiBtnToggleAttachedBehavior = require("./ai-btn-toggle").AiBtnToggleAttachedBehavior;
var AiBtnRadioAttachedBehavior = require("./ai-btn-radio").AiBtnRadioAttachedBehavior;
var AiClassAttachedBehavior = require("./ai-class").AiClassAttachedBehavior;
var AiTabsAttachedBehavior = require("./ai-tabs").AiTabsAttachedBehavior;
var AiAction = require("./ai-action").AiAction;


function install(aurelia) {
  aurelia.withResources([AiBtnToggleAttachedBehavior, AiBtnRadioAttachedBehavior, AiClassAttachedBehavior, AiTabsAttachedBehavior, AiAction]);
}

exports.AiBtnToggleAttachedBehavior = AiBtnToggleAttachedBehavior;
exports.AiBtnRadioAttachedBehavior = AiBtnRadioAttachedBehavior;
exports.AiClassAttachedBehavior = AiClassAttachedBehavior;
exports.AiAction = AiAction;
exports.install = install;
Object.defineProperty(exports, "__esModule", {
  value: true
});