/* */ 
var arrayMin = require("../internal/arrayMin"),
    createExtremum = require("../internal/createExtremum");
var min = createExtremum(arrayMin, true);
module.exports = min;
