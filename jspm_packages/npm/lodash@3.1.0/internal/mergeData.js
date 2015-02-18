/* */ 
var arrayCopy = require("./arrayCopy"),
    composeArgs = require("./composeArgs"),
    composeArgsRight = require("./composeArgsRight"),
    replaceHolders = require("./replaceHolders");
var BIND_FLAG = 1,
    BIND_KEY_FLAG = 2,
    CURRY_BOUND_FLAG = 4,
    CURRY_RIGHT_FLAG = 16,
    REARG_FLAG = 128,
    ARY_FLAG = 256;
var PLACEHOLDER = '__lodash_placeholder__';
var nativeMin = Math.min;
function mergeData(data, source) {
  var bitmask = data[1],
      srcBitmask = source[1],
      newBitmask = bitmask | srcBitmask;
  var arityFlags = ARY_FLAG | REARG_FLAG,
      bindFlags = BIND_FLAG | BIND_KEY_FLAG,
      comboFlags = arityFlags | bindFlags | CURRY_BOUND_FLAG | CURRY_RIGHT_FLAG;
  var isAry = bitmask & ARY_FLAG && !(srcBitmask & ARY_FLAG),
      isRearg = bitmask & REARG_FLAG && !(srcBitmask & REARG_FLAG),
      argPos = (isRearg ? data : source)[7],
      ary = (isAry ? data : source)[8];
  var isCommon = !(bitmask >= REARG_FLAG && srcBitmask > bindFlags) && !(bitmask > bindFlags && srcBitmask >= REARG_FLAG);
  var isCombo = (newBitmask >= arityFlags && newBitmask <= comboFlags) && (bitmask < REARG_FLAG || ((isRearg || isAry) && argPos.length <= ary));
  if (!(isCommon || isCombo)) {
    return data;
  }
  if (srcBitmask & BIND_FLAG) {
    data[2] = source[2];
    newBitmask |= (bitmask & BIND_FLAG) ? 0 : CURRY_BOUND_FLAG;
  }
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? composeArgs(partials, value, source[4]) : arrayCopy(value);
    data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : arrayCopy(source[4]);
  }
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? composeArgsRight(partials, value, source[6]) : arrayCopy(value);
    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : arrayCopy(source[6]);
  }
  value = source[7];
  if (value) {
    data[7] = arrayCopy(value);
  }
  if (srcBitmask & ARY_FLAG) {
    data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
  }
  if (data[9] == null) {
    data[9] = source[9];
  }
  data[0] = source[0];
  data[1] = newBitmask;
  return data;
}
module.exports = mergeData;
