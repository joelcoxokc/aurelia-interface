/* */ 
var isLength = require("../internal/isLength"),
    keys = require("../object/keys");
function size(collection) {
  var length = collection ? collection.length : 0;
  return isLength(length) ? length : keys(collection).length;
}
module.exports = size;
