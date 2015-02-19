/* */ 
var isNative = require("../lang/isNative");
var WeakMap = isNative(WeakMap = global.WeakMap) && WeakMap;
var metaMap = WeakMap && new WeakMap;
module.exports = metaMap;
