/* */ 
var baseRandom = require("../internal/baseRandom"),
    toIterable = require("../internal/toIterable");
function shuffle(collection) {
  collection = toIterable(collection);
  var index = -1,
      length = collection.length,
      result = Array(length);
  while (++index < length) {
    var rand = baseRandom(0, index);
    if (index != rand) {
      result[index] = result[rand];
    }
    result[rand] = collection[index];
  }
  return result;
}
module.exports = shuffle;
