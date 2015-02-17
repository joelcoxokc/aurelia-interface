"use strict";

var AiBtnToggleAttachedBehavior = require("./ai-btn-toggle").AiBtnToggleAttachedBehavior;
var AiBtnRadioAttachedBehavior = require("./ai-btn-radio").AiBtnRadioAttachedBehavior;
var AiClassAttachedBehavior = require("./ai-class").AiClassAttachedBehavior;
var AiTabsAttachedBehavior = require("./ai-tabs").AiTabsAttachedBehavior;
var NavMe = require("./nav-me").NavMe;


function install(aurelia) {
  aurelia.withResources([AiBtnToggleAttachedBehavior, AiBtnRadioAttachedBehavior, AiClassAttachedBehavior, AiTabsAttachedBehavior, NavMe]);
}

exports.AiBtnToggleAttachedBehavior = AiBtnToggleAttachedBehavior;
exports.AiBtnRadioAttachedBehavior = AiBtnRadioAttachedBehavior;
exports.AiClassAttachedBehavior = AiClassAttachedBehavior;
exports.AiTabsAttachedBehavior = AiTabsAttachedBehavior;
exports.NavMe = NavMe;
exports.install = install;
Object.defineProperty(exports, "__esModule", {
  value: true
});