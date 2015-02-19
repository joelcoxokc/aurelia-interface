/* */ 
"format cjs";
(function(process) {
  ;
  (function() {
    var undefined;
    var VERSION = '3.2.0';
    var BIND_FLAG = 1,
        BIND_KEY_FLAG = 2,
        CURRY_BOUND_FLAG = 4,
        CURRY_FLAG = 8,
        CURRY_RIGHT_FLAG = 16,
        PARTIAL_FLAG = 32,
        PARTIAL_RIGHT_FLAG = 64,
        REARG_FLAG = 128,
        ARY_FLAG = 256;
    var DEFAULT_TRUNC_LENGTH = 30,
        DEFAULT_TRUNC_OMISSION = '...';
    var HOT_COUNT = 150,
        HOT_SPAN = 16;
    var LAZY_FILTER_FLAG = 0,
        LAZY_MAP_FLAG = 1,
        LAZY_WHILE_FLAG = 2;
    var FUNC_ERROR_TEXT = 'Expected a function';
    var PLACEHOLDER = '__lodash_placeholder__';
    var argsTag = '[object Arguments]',
        arrayTag = '[object Array]',
        boolTag = '[object Boolean]',
        dateTag = '[object Date]',
        errorTag = '[object Error]',
        funcTag = '[object Function]',
        mapTag = '[object Map]',
        numberTag = '[object Number]',
        objectTag = '[object Object]',
        regexpTag = '[object RegExp]',
        setTag = '[object Set]',
        stringTag = '[object String]',
        weakMapTag = '[object WeakMap]';
    var arrayBufferTag = '[object ArrayBuffer]',
        float32Tag = '[object Float32Array]',
        float64Tag = '[object Float64Array]',
        int8Tag = '[object Int8Array]',
        int16Tag = '[object Int16Array]',
        int32Tag = '[object Int32Array]',
        uint8Tag = '[object Uint8Array]',
        uint8ClampedTag = '[object Uint8ClampedArray]',
        uint16Tag = '[object Uint16Array]',
        uint32Tag = '[object Uint32Array]';
    var reEmptyStringLeading = /\b__p \+= '';/g,
        reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
        reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
    var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g,
        reUnescapedHtml = /[&<>"'`]/g,
        reHasEscapedHtml = RegExp(reEscapedHtml.source),
        reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
    var reEscape = /<%-([\s\S]+?)%>/g,
        reEvaluate = /<%([\s\S]+?)%>/g,
        reInterpolate = /<%=([\s\S]+?)%>/g;
    var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
    var reFlags = /\w*$/;
    var reFuncName = /^\s*function[ \n\r\t]+\w/;
    var reHexPrefix = /^0[xX]/;
    var reHostCtor = /^\[object .+?Constructor\]$/;
    var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;
    var reNoMatch = /($^)/;
    var reRegExpChars = /[.*+?^${}()|[\]\/\\]/g,
        reHasRegExpChars = RegExp(reRegExpChars.source);
    var reThis = /\bthis\b/;
    var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
    var reWords = (function() {
      var upper = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
          lower = '[a-z\\xdf-\\xf6\\xf8-\\xff]+';
      return RegExp(upper + '{2,}(?=' + upper + lower + ')|' + upper + '?' + lower + '|' + upper + '+|[0-9]+', 'g');
    }());
    var whitespace = (' \t\x0b\f\xa0\ufeff' + '\n\r\u2028\u2029' + '\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000');
    var contextProps = ['Array', 'ArrayBuffer', 'Date', 'Error', 'Float32Array', 'Float64Array', 'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Math', 'Number', 'Object', 'RegExp', 'Set', 'String', '_', 'clearTimeout', 'document', 'isFinite', 'parseInt', 'setTimeout', 'TypeError', 'Uint8Array', 'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap', 'window', 'WinRTError'];
    var templateCounter = -1;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[stringTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[mapTag] = cloneableTags[setTag] = cloneableTags[weakMapTag] = false;
    var debounceOptions = {
      'leading': false,
      'maxWait': 0,
      'trailing': false
    };
    var deburredLetters = {
      '\xc0': 'A',
      '\xc1': 'A',
      '\xc2': 'A',
      '\xc3': 'A',
      '\xc4': 'A',
      '\xc5': 'A',
      '\xe0': 'a',
      '\xe1': 'a',
      '\xe2': 'a',
      '\xe3': 'a',
      '\xe4': 'a',
      '\xe5': 'a',
      '\xc7': 'C',
      '\xe7': 'c',
      '\xd0': 'D',
      '\xf0': 'd',
      '\xc8': 'E',
      '\xc9': 'E',
      '\xca': 'E',
      '\xcb': 'E',
      '\xe8': 'e',
      '\xe9': 'e',
      '\xea': 'e',
      '\xeb': 'e',
      '\xcC': 'I',
      '\xcd': 'I',
      '\xce': 'I',
      '\xcf': 'I',
      '\xeC': 'i',
      '\xed': 'i',
      '\xee': 'i',
      '\xef': 'i',
      '\xd1': 'N',
      '\xf1': 'n',
      '\xd2': 'O',
      '\xd3': 'O',
      '\xd4': 'O',
      '\xd5': 'O',
      '\xd6': 'O',
      '\xd8': 'O',
      '\xf2': 'o',
      '\xf3': 'o',
      '\xf4': 'o',
      '\xf5': 'o',
      '\xf6': 'o',
      '\xf8': 'o',
      '\xd9': 'U',
      '\xda': 'U',
      '\xdb': 'U',
      '\xdc': 'U',
      '\xf9': 'u',
      '\xfa': 'u',
      '\xfb': 'u',
      '\xfc': 'u',
      '\xdd': 'Y',
      '\xfd': 'y',
      '\xff': 'y',
      '\xc6': 'Ae',
      '\xe6': 'ae',
      '\xde': 'Th',
      '\xfe': 'th',
      '\xdf': 'ss'
    };
    var htmlEscapes = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '`': '&#96;'
    };
    var htmlUnescapes = {
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&#39;': "'",
      '&#96;': '`'
    };
    var objectTypes = {
      'function': true,
      'object': true
    };
    var stringEscapes = {
      '\\': '\\',
      "'": "'",
      '\n': 'n',
      '\r': 'r',
      '\u2028': 'u2028',
      '\u2029': 'u2029'
    };
    var root = (objectTypes[typeof window] && window !== (this && this.window)) ? window : this;
    var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
    var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
    var freeGlobal = freeExports && freeModule && typeof global == 'object' && global;
    if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
      root = freeGlobal;
    }
    var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;
    function baseCompareAscending(value, other) {
      if (value !== other) {
        var valIsReflexive = value === value,
            othIsReflexive = other === other;
        if (value > other || !valIsReflexive || (typeof value == 'undefined' && othIsReflexive)) {
          return 1;
        }
        if (value < other || !othIsReflexive || (typeof other == 'undefined' && valIsReflexive)) {
          return -1;
        }
      }
      return 0;
    }
    function baseIndexOf(array, value, fromIndex) {
      if (value !== value) {
        return indexOfNaN(array, fromIndex);
      }
      var index = (fromIndex || 0) - 1,
          length = array.length;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    function baseSortBy(array, comparer) {
      var length = array.length;
      array.sort(comparer);
      while (length--) {
        array[length] = array[length].value;
      }
      return array;
    }
    function baseToString(value) {
      if (typeof value == 'string') {
        return value;
      }
      return value == null ? '' : (value + '');
    }
    function charAtCallback(string) {
      return string.charCodeAt(0);
    }
    function charsLeftIndex(string, chars) {
      var index = -1,
          length = string.length;
      while (++index < length && chars.indexOf(string.charAt(index)) > -1) {}
      return index;
    }
    function charsRightIndex(string, chars) {
      var index = string.length;
      while (index-- && chars.indexOf(string.charAt(index)) > -1) {}
      return index;
    }
    function compareAscending(object, other) {
      return baseCompareAscending(object.criteria, other.criteria) || (object.index - other.index);
    }
    function compareMultipleAscending(object, other) {
      var index = -1,
          objCriteria = object.criteria,
          othCriteria = other.criteria,
          length = objCriteria.length;
      while (++index < length) {
        var result = baseCompareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          return result;
        }
      }
      return object.index - other.index;
    }
    function deburrLetter(letter) {
      return deburredLetters[letter];
    }
    function escapeHtmlChar(chr) {
      return htmlEscapes[chr];
    }
    function escapeStringChar(chr) {
      return '\\' + stringEscapes[chr];
    }
    function indexOfNaN(array, fromIndex, fromRight) {
      var length = array.length,
          index = fromRight ? (fromIndex || length) : ((fromIndex || 0) - 1);
      while ((fromRight ? index-- : ++index < length)) {
        var other = array[index];
        if (other !== other) {
          return index;
        }
      }
      return -1;
    }
    function isObjectLike(value) {
      return (value && typeof value == 'object') || false;
    }
    function isSpace(charCode) {
      return ((charCode <= 160 && (charCode >= 9 && charCode <= 13) || charCode == 32 || charCode == 160) || charCode == 5760 || charCode == 6158 || (charCode >= 8192 && (charCode <= 8202 || charCode == 8232 || charCode == 8233 || charCode == 8239 || charCode == 8287 || charCode == 12288 || charCode == 65279)));
    }
    function replaceHolders(array, placeholder) {
      var index = -1,
          length = array.length,
          resIndex = -1,
          result = [];
      while (++index < length) {
        if (array[index] === placeholder) {
          array[index] = PLACEHOLDER;
          result[++resIndex] = index;
        }
      }
      return result;
    }
    function sortedUniq(array, iteratee) {
      var seen,
          index = -1,
          length = array.length,
          resIndex = -1,
          result = [];
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value, index, array) : value;
        if (!index || seen !== computed) {
          seen = computed;
          result[++resIndex] = value;
        }
      }
      return result;
    }
    function trimmedLeftIndex(string) {
      var index = -1,
          length = string.length;
      while (++index < length && isSpace(string.charCodeAt(index))) {}
      return index;
    }
    function trimmedRightIndex(string) {
      var index = string.length;
      while (index-- && isSpace(string.charCodeAt(index))) {}
      return index;
    }
    function unescapeHtmlChar(chr) {
      return htmlUnescapes[chr];
    }
    function runInContext(context) {
      context = context ? _.defaults(root.Object(), context, _.pick(root, contextProps)) : root;
      var Array = context.Array,
          Date = context.Date,
          Error = context.Error,
          Function = context.Function,
          Math = context.Math,
          Number = context.Number,
          Object = context.Object,
          RegExp = context.RegExp,
          String = context.String,
          TypeError = context.TypeError;
      var arrayProto = Array.prototype,
          objectProto = Object.prototype;
      var document = (document = context.window) && document.document;
      var fnToString = Function.prototype.toString;
      var getLength = baseProperty('length');
      var hasOwnProperty = objectProto.hasOwnProperty;
      var idCounter = 0;
      var objToString = objectProto.toString;
      var oldDash = context._;
      var reNative = RegExp('^' + escapeRegExp(objToString).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
      var ArrayBuffer = isNative(ArrayBuffer = context.ArrayBuffer) && ArrayBuffer,
          bufferSlice = isNative(bufferSlice = ArrayBuffer && new ArrayBuffer(0).slice) && bufferSlice,
          ceil = Math.ceil,
          clearTimeout = context.clearTimeout,
          floor = Math.floor,
          getPrototypeOf = isNative(getPrototypeOf = Object.getPrototypeOf) && getPrototypeOf,
          push = arrayProto.push,
          propertyIsEnumerable = objectProto.propertyIsEnumerable,
          Set = isNative(Set = context.Set) && Set,
          setTimeout = context.setTimeout,
          splice = arrayProto.splice,
          Uint8Array = isNative(Uint8Array = context.Uint8Array) && Uint8Array,
          WeakMap = isNative(WeakMap = context.WeakMap) && WeakMap;
      var Float64Array = (function() {
        try {
          var func = isNative(func = context.Float64Array) && func,
              result = new func(new ArrayBuffer(10), 0, 1) && func;
        } catch (e) {}
        return result;
      }());
      var nativeIsArray = isNative(nativeIsArray = Array.isArray) && nativeIsArray,
          nativeCreate = isNative(nativeCreate = Object.create) && nativeCreate,
          nativeIsFinite = context.isFinite,
          nativeKeys = isNative(nativeKeys = Object.keys) && nativeKeys,
          nativeMax = Math.max,
          nativeMin = Math.min,
          nativeNow = isNative(nativeNow = Date.now) && nativeNow,
          nativeNumIsFinite = isNative(nativeNumIsFinite = Number.isFinite) && nativeNumIsFinite,
          nativeParseInt = context.parseInt,
          nativeRandom = Math.random;
      var NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY,
          POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
      var MAX_ARRAY_LENGTH = Math.pow(2, 32) - 1,
          MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
          HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var FLOAT64_BYTES_PER_ELEMENT = Float64Array ? Float64Array.BYTES_PER_ELEMENT : 0;
      var MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;
      var metaMap = WeakMap && new WeakMap;
      function lodash(value) {
        if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
          if (value instanceof LodashWrapper) {
            return value;
          }
          if (hasOwnProperty.call(value, '__chain__') && hasOwnProperty.call(value, '__wrapped__')) {
            return wrapperClone(value);
          }
        }
        return new LodashWrapper(value);
      }
      function LodashWrapper(value, chainAll, actions) {
        this.__wrapped__ = value;
        this.__actions__ = actions || [];
        this.__chain__ = !!chainAll;
      }
      var support = lodash.support = {};
      (function(x) {
        support.funcDecomp = !isNative(context.WinRTError) && reThis.test(runInContext);
        support.funcNames = typeof Function.name == 'string';
        try {
          support.dom = document.createDocumentFragment().nodeType === 11;
        } catch (e) {
          support.dom = false;
        }
        try {
          support.nonEnumArgs = !propertyIsEnumerable.call(arguments, 1);
        } catch (e) {
          support.nonEnumArgs = true;
        }
      }(0, 0));
      lodash.templateSettings = {
        'escape': reEscape,
        'evaluate': reEvaluate,
        'interpolate': reInterpolate,
        'variable': '',
        'imports': {'_': lodash}
      };
      function LazyWrapper(value) {
        this.__wrapped__ = value;
        this.__actions__ = null;
        this.__dir__ = 1;
        this.__dropCount__ = 0;
        this.__filtered__ = false;
        this.__iteratees__ = null;
        this.__takeCount__ = POSITIVE_INFINITY;
        this.__views__ = null;
      }
      function lazyClone() {
        var actions = this.__actions__,
            iteratees = this.__iteratees__,
            views = this.__views__,
            result = new LazyWrapper(this.__wrapped__);
        result.__actions__ = actions ? arrayCopy(actions) : null;
        result.__dir__ = this.__dir__;
        result.__dropCount__ = this.__dropCount__;
        result.__filtered__ = this.__filtered__;
        result.__iteratees__ = iteratees ? arrayCopy(iteratees) : null;
        result.__takeCount__ = this.__takeCount__;
        result.__views__ = views ? arrayCopy(views) : null;
        return result;
      }
      function lazyReverse() {
        if (this.__filtered__) {
          var result = new LazyWrapper(this);
          result.__dir__ = -1;
          result.__filtered__ = true;
        } else {
          result = this.clone();
          result.__dir__ *= -1;
        }
        return result;
      }
      function lazyValue() {
        var array = this.__wrapped__.value();
        if (!isArray(array)) {
          return baseWrapperValue(array, this.__actions__);
        }
        var dir = this.__dir__,
            isRight = dir < 0,
            view = getView(0, array.length, this.__views__),
            start = view.start,
            end = view.end,
            length = end - start,
            dropCount = this.__dropCount__,
            takeCount = nativeMin(length, this.__takeCount__),
            index = isRight ? end : start - 1,
            iteratees = this.__iteratees__,
            iterLength = iteratees ? iteratees.length : 0,
            resIndex = 0,
            result = [];
        outer: while (length-- && resIndex < takeCount) {
          index += dir;
          var iterIndex = -1,
              value = array[index];
          while (++iterIndex < iterLength) {
            var data = iteratees[iterIndex],
                iteratee = data.iteratee,
                computed = iteratee(value, index, array),
                type = data.type;
            if (type == LAZY_MAP_FLAG) {
              value = computed;
            } else if (!computed) {
              if (type == LAZY_FILTER_FLAG) {
                continue outer;
              } else {
                break outer;
              }
            }
          }
          if (dropCount) {
            dropCount--;
          } else {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function MapCache() {
        this.__data__ = {};
      }
      function mapDelete(key) {
        return this.has(key) && delete this.__data__[key];
      }
      function mapGet(key) {
        return key == '__proto__' ? undefined : this.__data__[key];
      }
      function mapHas(key) {
        return key != '__proto__' && hasOwnProperty.call(this.__data__, key);
      }
      function mapSet(key, value) {
        if (key != '__proto__') {
          this.__data__[key] = value;
        }
        return this;
      }
      function SetCache(values) {
        var length = values ? values.length : 0;
        this.data = {
          'hash': nativeCreate(null),
          'set': new Set
        };
        while (length--) {
          this.push(values[length]);
        }
      }
      function cacheIndexOf(cache, value) {
        var data = cache.data,
            result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];
        return result ? 0 : -1;
      }
      function cachePush(value) {
        var data = this.data;
        if (typeof value == 'string' || isObject(value)) {
          data.set.add(value);
        } else {
          data.hash[value] = true;
        }
      }
      function arrayCopy(source, array) {
        var index = -1,
            length = source.length;
        array || (array = Array(length));
        while (++index < length) {
          array[index] = source[index];
        }
        return array;
      }
      function arrayEach(array, iteratee) {
        var index = -1,
            length = array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEachRight(array, iteratee) {
        var length = array.length;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEvery(array, predicate) {
        var index = -1,
            length = array.length;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array, predicate) {
        var index = -1,
            length = array.length,
            resIndex = -1,
            result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[++resIndex] = value;
          }
        }
        return result;
      }
      function arrayMap(array, iteratee) {
        var index = -1,
            length = array.length,
            result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function arrayMax(array) {
        var index = -1,
            length = array.length,
            result = NEGATIVE_INFINITY;
        while (++index < length) {
          var value = array[index];
          if (value > result) {
            result = value;
          }
        }
        return result;
      }
      function arrayMin(array) {
        var index = -1,
            length = array.length,
            result = POSITIVE_INFINITY;
        while (++index < length) {
          var value = array[index];
          if (value < result) {
            result = value;
          }
        }
        return result;
      }
      function arrayReduce(array, iteratee, accumulator, initFromArray) {
        var index = -1,
            length = array.length;
        if (initFromArray && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function arrayReduceRight(array, iteratee, accumulator, initFromArray) {
        var length = array.length;
        if (initFromArray && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      function arraySome(array, predicate) {
        var index = -1,
            length = array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      function assignDefaults(objectValue, sourceValue) {
        return typeof objectValue == 'undefined' ? sourceValue : objectValue;
      }
      function assignOwnDefaults(objectValue, sourceValue, key, object) {
        return (typeof objectValue == 'undefined' || !hasOwnProperty.call(object, key)) ? sourceValue : objectValue;
      }
      function baseAssign(object, source, customizer) {
        var props = keys(source);
        if (!customizer) {
          return baseCopy(source, object, props);
        }
        var index = -1,
            length = props.length;
        while (++index < length) {
          var key = props[index],
              value = object[key],
              result = customizer(value, source[key], key, object, source);
          if ((result === result ? result !== value : value === value) || (typeof value == 'undefined' && !(key in object))) {
            object[key] = result;
          }
        }
        return object;
      }
      function baseAt(collection, props) {
        var index = -1,
            length = collection.length,
            isArr = isLength(length),
            propsLength = props.length,
            result = Array(propsLength);
        while (++index < propsLength) {
          var key = props[index];
          if (isArr) {
            key = parseFloat(key);
            result[index] = isIndex(key, length) ? collection[key] : undefined;
          } else {
            result[index] = collection[key];
          }
        }
        return result;
      }
      function baseCopy(source, object, props) {
        if (!props) {
          props = object;
          object = {};
        }
        var index = -1,
            length = props.length;
        while (++index < length) {
          var key = props[index];
          object[key] = source[key];
        }
        return object;
      }
      function baseBindAll(object, methodNames) {
        var index = -1,
            length = methodNames.length;
        while (++index < length) {
          var key = methodNames[index];
          object[key] = createWrapper(object[key], BIND_FLAG, object);
        }
        return object;
      }
      function baseCallback(func, thisArg, argCount) {
        var type = typeof func;
        if (type == 'function') {
          return (typeof thisArg != 'undefined' && isBindable(func)) ? bindCallback(func, thisArg, argCount) : func;
        }
        if (func == null) {
          return identity;
        }
        if (type == 'object') {
          return baseMatches(func);
        }
        return typeof thisArg == 'undefined' ? baseProperty(func + '') : baseMatchesProperty(func + '', thisArg);
      }
      function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
        var result;
        if (customizer) {
          result = object ? customizer(value, key, object) : customizer(value);
        }
        if (typeof result != 'undefined') {
          return result;
        }
        if (!isObject(value)) {
          return value;
        }
        var isArr = isArray(value);
        if (isArr) {
          result = initCloneArray(value);
          if (!isDeep) {
            return arrayCopy(value, result);
          }
        } else {
          var tag = objToString.call(value),
              isFunc = tag == funcTag;
          if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
            result = initCloneObject(isFunc ? {} : value);
            if (!isDeep) {
              return baseCopy(value, result, keys(value));
            }
          } else {
            return cloneableTags[tag] ? initCloneByTag(value, tag, isDeep) : (object ? value : {});
          }
        }
        stackA || (stackA = []);
        stackB || (stackB = []);
        var length = stackA.length;
        while (length--) {
          if (stackA[length] == value) {
            return stackB[length];
          }
        }
        stackA.push(value);
        stackB.push(result);
        (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
          result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
        });
        return result;
      }
      var baseCreate = (function() {
        function Object() {}
        return function(prototype) {
          if (isObject(prototype)) {
            Object.prototype = prototype;
            var result = new Object;
            Object.prototype = null;
          }
          return result || context.Object();
        };
      }());
      function baseDelay(func, wait, args, fromIndex) {
        if (typeof func != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return setTimeout(function() {
          func.apply(undefined, baseSlice(args, fromIndex));
        }, wait);
      }
      function baseDifference(array, values) {
        var length = array ? array.length : 0,
            result = [];
        if (!length) {
          return result;
        }
        var index = -1,
            indexOf = getIndexOf(),
            isCommon = indexOf == baseIndexOf,
            cache = isCommon && values.length >= 200 && createCache(values),
            valuesLength = values.length;
        if (cache) {
          indexOf = cacheIndexOf;
          isCommon = false;
          values = cache;
        }
        outer: while (++index < length) {
          var value = array[index];
          if (isCommon && value === value) {
            var valuesIndex = valuesLength;
            while (valuesIndex--) {
              if (values[valuesIndex] === value) {
                continue outer;
              }
            }
            result.push(value);
          } else if (indexOf(values, value) < 0) {
            result.push(value);
          }
        }
        return result;
      }
      function baseEach(collection, iteratee) {
        var length = collection ? collection.length : 0;
        if (!isLength(length)) {
          return baseForOwn(collection, iteratee);
        }
        var index = -1,
            iterable = toObject(collection);
        while (++index < length) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      }
      function baseEachRight(collection, iteratee) {
        var length = collection ? collection.length : 0;
        if (!isLength(length)) {
          return baseForOwnRight(collection, iteratee);
        }
        var iterable = toObject(collection);
        while (length--) {
          if (iteratee(iterable[length], length, iterable) === false) {
            break;
          }
        }
        return collection;
      }
      function baseEvery(collection, predicate) {
        var result = true;
        baseEach(collection, function(value, index, collection) {
          result = !!predicate(value, index, collection);
          return result;
        });
        return result;
      }
      function baseFill(array, value, start, end) {
        var length = array.length;
        start = start == null ? 0 : (+start || 0);
        if (start < 0) {
          start = -start > length ? 0 : (length + start);
        }
        end = (typeof end == 'undefined' || end > length) ? length : (+end || 0);
        if (end < 0) {
          end += length;
        }
        length = start > end ? 0 : end >>> 0;
        start >>>= 0;
        while (start < length) {
          array[start++] = value;
        }
        return array;
      }
      function baseFilter(collection, predicate) {
        var result = [];
        baseEach(collection, function(value, index, collection) {
          if (predicate(value, index, collection)) {
            result.push(value);
          }
        });
        return result;
      }
      function baseFind(collection, predicate, eachFunc, retKey) {
        var result;
        eachFunc(collection, function(value, key, collection) {
          if (predicate(value, key, collection)) {
            result = retKey ? key : value;
            return false;
          }
        });
        return result;
      }
      function baseFlatten(array, isDeep, isStrict, fromIndex) {
        var index = (fromIndex || 0) - 1,
            length = array.length,
            resIndex = -1,
            result = [];
        while (++index < length) {
          var value = array[index];
          if (isObjectLike(value) && isLength(value.length) && (isArray(value) || isArguments(value))) {
            if (isDeep) {
              value = baseFlatten(value, isDeep, isStrict);
            }
            var valIndex = -1,
                valLength = value.length;
            result.length += valLength;
            while (++valIndex < valLength) {
              result[++resIndex] = value[valIndex];
            }
          } else if (!isStrict) {
            result[++resIndex] = value;
          }
        }
        return result;
      }
      function baseFor(object, iteratee, keysFunc) {
        var index = -1,
            iterable = toObject(object),
            props = keysFunc(object),
            length = props.length;
        while (++index < length) {
          var key = props[index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      }
      function baseForRight(object, iteratee, keysFunc) {
        var iterable = toObject(object),
            props = keysFunc(object),
            length = props.length;
        while (length--) {
          var key = props[length];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      }
      function baseForIn(object, iteratee) {
        return baseFor(object, iteratee, keysIn);
      }
      function baseForOwn(object, iteratee) {
        return baseFor(object, iteratee, keys);
      }
      function baseForOwnRight(object, iteratee) {
        return baseForRight(object, iteratee, keys);
      }
      function baseFunctions(object, props) {
        var index = -1,
            length = props.length,
            resIndex = -1,
            result = [];
        while (++index < length) {
          var key = props[index];
          if (isFunction(object[key])) {
            result[++resIndex] = key;
          }
        }
        return result;
      }
      function baseInvoke(collection, methodName, args) {
        var index = -1,
            isFunc = typeof methodName == 'function',
            length = collection ? collection.length : 0,
            result = isLength(length) ? Array(length) : [];
        baseEach(collection, function(value) {
          var func = isFunc ? methodName : (value != null && value[methodName]);
          result[++index] = func ? func.apply(value, args) : undefined;
        });
        return result;
      }
      function baseIsEqual(value, other, customizer, isWhere, stackA, stackB) {
        if (value === other) {
          return value !== 0 || (1 / value == 1 / other);
        }
        var valType = typeof value,
            othType = typeof other;
        if ((valType != 'function' && valType != 'object' && othType != 'function' && othType != 'object') || value == null || other == null) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, baseIsEqual, customizer, isWhere, stackA, stackB);
      }
      function baseIsEqualDeep(object, other, equalFunc, customizer, isWhere, stackA, stackB) {
        var objIsArr = isArray(object),
            othIsArr = isArray(other),
            objTag = arrayTag,
            othTag = arrayTag;
        if (!objIsArr) {
          objTag = objToString.call(object);
          if (objTag == argsTag) {
            objTag = objectTag;
          } else if (objTag != objectTag) {
            objIsArr = isTypedArray(object);
          }
        }
        if (!othIsArr) {
          othTag = objToString.call(other);
          if (othTag == argsTag) {
            othTag = objectTag;
          } else if (othTag != objectTag) {
            othIsArr = isTypedArray(other);
          }
        }
        var objIsObj = objTag == objectTag,
            othIsObj = othTag == objectTag,
            isSameTag = objTag == othTag;
        if (isSameTag && !(objIsArr || objIsObj)) {
          return equalByTag(object, other, objTag);
        }
        var valWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
        if (valWrapped || othWrapped) {
          return equalFunc(valWrapped ? object.value() : object, othWrapped ? other.value() : other, customizer, isWhere, stackA, stackB);
        }
        if (!isSameTag) {
          return false;
        }
        stackA || (stackA = []);
        stackB || (stackB = []);
        var length = stackA.length;
        while (length--) {
          if (stackA[length] == object) {
            return stackB[length] == other;
          }
        }
        stackA.push(object);
        stackB.push(other);
        var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isWhere, stackA, stackB);
        stackA.pop();
        stackB.pop();
        return result;
      }
      function baseIsMatch(object, props, values, strictCompareFlags, customizer) {
        var length = props.length;
        if (object == null) {
          return !length;
        }
        var index = -1,
            noCustomizer = !customizer;
        while (++index < length) {
          if ((noCustomizer && strictCompareFlags[index]) ? values[index] !== object[props[index]] : !hasOwnProperty.call(object, props[index])) {
            return false;
          }
        }
        index = -1;
        while (++index < length) {
          var key = props[index];
          if (noCustomizer && strictCompareFlags[index]) {
            var result = hasOwnProperty.call(object, key);
          } else {
            var objValue = object[key],
                srcValue = values[index];
            result = customizer ? customizer(objValue, srcValue, key) : undefined;
            if (typeof result == 'undefined') {
              result = baseIsEqual(srcValue, objValue, customizer, true);
            }
          }
          if (!result) {
            return false;
          }
        }
        return true;
      }
      function baseMap(collection, iteratee) {
        var result = [];
        baseEach(collection, function(value, key, collection) {
          result.push(iteratee(value, key, collection));
        });
        return result;
      }
      function baseMatches(source) {
        var props = keys(source),
            length = props.length;
        if (length == 1) {
          var key = props[0],
              value = source[key];
          if (isStrictComparable(value)) {
            return function(object) {
              return object != null && value === object[key] && hasOwnProperty.call(object, key);
            };
          }
        }
        var values = Array(length),
            strictCompareFlags = Array(length);
        while (length--) {
          value = source[props[length]];
          values[length] = value;
          strictCompareFlags[length] = isStrictComparable(value);
        }
        return function(object) {
          return baseIsMatch(object, props, values, strictCompareFlags);
        };
      }
      function baseMatchesProperty(key, value) {
        if (isStrictComparable(value)) {
          return function(object) {
            return object != null && object[key] === value;
          };
        }
        return function(object) {
          return object != null && baseIsEqual(value, object[key], null, true);
        };
      }
      function baseMerge(object, source, customizer, stackA, stackB) {
        var isSrcArr = isLength(source.length) && (isArray(source) || isTypedArray(source));
        (isSrcArr ? arrayEach : baseForOwn)(source, function(srcValue, key, source) {
          if (isObjectLike(srcValue)) {
            stackA || (stackA = []);
            stackB || (stackB = []);
            return baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
          }
          var value = object[key],
              result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
              isCommon = typeof result == 'undefined';
          if (isCommon) {
            result = srcValue;
          }
          if ((isSrcArr || typeof result != 'undefined') && (isCommon || (result === result ? result !== value : value === value))) {
            object[key] = result;
          }
        });
        return object;
      }
      function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
        var length = stackA.length,
            srcValue = source[key];
        while (length--) {
          if (stackA[length] == srcValue) {
            object[key] = stackB[length];
            return ;
          }
        }
        var value = object[key],
            result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
            isCommon = typeof result == 'undefined';
        if (isCommon) {
          result = srcValue;
          if (isLength(srcValue.length) && (isArray(srcValue) || isTypedArray(srcValue))) {
            result = isArray(value) ? value : (value ? arrayCopy(value) : []);
          } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
            result = isArguments(value) ? toPlainObject(value) : (isPlainObject(value) ? value : {});
          } else {
            isCommon = false;
          }
        }
        stackA.push(srcValue);
        stackB.push(result);
        if (isCommon) {
          object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
        } else if (result === result ? result !== value : value === value) {
          object[key] = result;
        }
      }
      function baseProperty(key) {
        return function(object) {
          return object == null ? undefined : object[key];
        };
      }
      function basePullAt(array, indexes) {
        var length = indexes.length,
            result = baseAt(array, indexes);
        indexes.sort(baseCompareAscending);
        while (length--) {
          var index = parseFloat(indexes[length]);
          if (index != previous && isIndex(index)) {
            var previous = index;
            splice.call(array, index, 1);
          }
        }
        return result;
      }
      function baseRandom(min, max) {
        return min + floor(nativeRandom() * (max - min + 1));
      }
      function baseReduce(collection, iteratee, accumulator, initFromCollection, eachFunc) {
        eachFunc(collection, function(value, index, collection) {
          accumulator = initFromCollection ? (initFromCollection = false, value) : iteratee(accumulator, value, index, collection);
        });
        return accumulator;
      }
      var baseSetData = !metaMap ? identity : function(func, data) {
        metaMap.set(func, data);
        return func;
      };
      function baseSlice(array, start, end) {
        var index = -1,
            length = array.length;
        start = start == null ? 0 : (+start || 0);
        if (start < 0) {
          start = -start > length ? 0 : (length + start);
        }
        end = (typeof end == 'undefined' || end > length) ? length : (+end || 0);
        if (end < 0) {
          end += length;
        }
        length = start > end ? 0 : (end - start) >>> 0;
        start >>>= 0;
        var result = Array(length);
        while (++index < length) {
          result[index] = array[index + start];
        }
        return result;
      }
      function baseSome(collection, predicate) {
        var result;
        baseEach(collection, function(value, index, collection) {
          result = predicate(value, index, collection);
          return !result;
        });
        return !!result;
      }
      function baseUniq(array, iteratee) {
        var index = -1,
            indexOf = getIndexOf(),
            length = array.length,
            isCommon = indexOf == baseIndexOf,
            isLarge = isCommon && length >= 200,
            seen = isLarge && createCache(),
            result = [];
        if (seen) {
          indexOf = cacheIndexOf;
          isCommon = false;
        } else {
          isLarge = false;
          seen = iteratee ? [] : result;
        }
        outer: while (++index < length) {
          var value = array[index],
              computed = iteratee ? iteratee(value, index, array) : value;
          if (isCommon && value === value) {
            var seenIndex = seen.length;
            while (seenIndex--) {
              if (seen[seenIndex] === computed) {
                continue outer;
              }
            }
            if (iteratee) {
              seen.push(computed);
            }
            result.push(value);
          } else if (indexOf(seen, computed) < 0) {
            if (iteratee || isLarge) {
              seen.push(computed);
            }
            result.push(value);
          }
        }
        return result;
      }
      function baseValues(object, props) {
        var index = -1,
            length = props.length,
            result = Array(length);
        while (++index < length) {
          result[index] = object[props[index]];
        }
        return result;
      }
      function baseWrapperValue(value, actions) {
        var result = value;
        if (result instanceof LazyWrapper) {
          result = result.value();
        }
        var index = -1,
            length = actions.length;
        while (++index < length) {
          var args = [result],
              action = actions[index];
          push.apply(args, action.args);
          result = action.func.apply(action.thisArg, args);
        }
        return result;
      }
      function binaryIndex(array, value, retHighest) {
        var low = 0,
            high = array ? array.length : low;
        if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
          while (low < high) {
            var mid = (low + high) >>> 1,
                computed = array[mid];
            if (retHighest ? (computed <= value) : (computed < value)) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return high;
        }
        return binaryIndexBy(array, value, identity, retHighest);
      }
      function binaryIndexBy(array, value, iteratee, retHighest) {
        value = iteratee(value);
        var low = 0,
            high = array ? array.length : 0,
            valIsNaN = value !== value,
            valIsUndef = typeof value == 'undefined';
        while (low < high) {
          var mid = floor((low + high) / 2),
              computed = iteratee(array[mid]),
              isReflexive = computed === computed;
          if (valIsNaN) {
            var setLow = isReflexive || retHighest;
          } else if (valIsUndef) {
            setLow = isReflexive && (retHighest || typeof computed != 'undefined');
          } else {
            setLow = retHighest ? (computed <= value) : (computed < value);
          }
          if (setLow) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return nativeMin(high, MAX_ARRAY_INDEX);
      }
      function bindCallback(func, thisArg, argCount) {
        if (typeof func != 'function') {
          return identity;
        }
        if (typeof thisArg == 'undefined') {
          return func;
        }
        switch (argCount) {
          case 1:
            return function(value) {
              return func.call(thisArg, value);
            };
          case 3:
            return function(value, index, collection) {
              return func.call(thisArg, value, index, collection);
            };
          case 4:
            return function(accumulator, value, index, collection) {
              return func.call(thisArg, accumulator, value, index, collection);
            };
          case 5:
            return function(value, other, key, object, source) {
              return func.call(thisArg, value, other, key, object, source);
            };
        }
        return function() {
          return func.apply(thisArg, arguments);
        };
      }
      function bufferClone(buffer) {
        return bufferSlice.call(buffer, 0);
      }
      if (!bufferSlice) {
        bufferClone = !(ArrayBuffer && Uint8Array) ? constant(null) : function(buffer) {
          var byteLength = buffer.byteLength,
              floatLength = Float64Array ? floor(byteLength / FLOAT64_BYTES_PER_ELEMENT) : 0,
              offset = floatLength * FLOAT64_BYTES_PER_ELEMENT,
              result = new ArrayBuffer(byteLength);
          if (floatLength) {
            var view = new Float64Array(result, 0, floatLength);
            view.set(new Float64Array(buffer, 0, floatLength));
          }
          if (byteLength != offset) {
            view = new Uint8Array(result, offset);
            view.set(new Uint8Array(buffer, offset));
          }
          return result;
        };
      }
      function composeArgs(args, partials, holders) {
        var holdersLength = holders.length,
            argsIndex = -1,
            argsLength = nativeMax(args.length - holdersLength, 0),
            leftIndex = -1,
            leftLength = partials.length,
            result = Array(argsLength + leftLength);
        while (++leftIndex < leftLength) {
          result[leftIndex] = partials[leftIndex];
        }
        while (++argsIndex < holdersLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
        while (argsLength--) {
          result[leftIndex++] = args[argsIndex++];
        }
        return result;
      }
      function composeArgsRight(args, partials, holders) {
        var holdersIndex = -1,
            holdersLength = holders.length,
            argsIndex = -1,
            argsLength = nativeMax(args.length - holdersLength, 0),
            rightIndex = -1,
            rightLength = partials.length,
            result = Array(argsLength + rightLength);
        while (++argsIndex < argsLength) {
          result[argsIndex] = args[argsIndex];
        }
        var pad = argsIndex;
        while (++rightIndex < rightLength) {
          result[pad + rightIndex] = partials[rightIndex];
        }
        while (++holdersIndex < holdersLength) {
          result[pad + holders[holdersIndex]] = args[argsIndex++];
        }
        return result;
      }
      function createAggregator(setter, initializer) {
        return function(collection, iteratee, thisArg) {
          var result = initializer ? initializer() : {};
          iteratee = getCallback(iteratee, thisArg, 3);
          if (isArray(collection)) {
            var index = -1,
                length = collection.length;
            while (++index < length) {
              var value = collection[index];
              setter(result, value, iteratee(value, index, collection), collection);
            }
          } else {
            baseEach(collection, function(value, key, collection) {
              setter(result, value, iteratee(value, key, collection), collection);
            });
          }
          return result;
        };
      }
      function createAssigner(assigner) {
        return function() {
          var length = arguments.length,
              object = arguments[0];
          if (length < 2 || object == null) {
            return object;
          }
          if (length > 3 && isIterateeCall(arguments[1], arguments[2], arguments[3])) {
            length = 2;
          }
          if (length > 3 && typeof arguments[length - 2] == 'function') {
            var customizer = bindCallback(arguments[--length - 1], arguments[length--], 5);
          } else if (length > 2 && typeof arguments[length - 1] == 'function') {
            customizer = arguments[--length];
          }
          var index = 0;
          while (++index < length) {
            var source = arguments[index];
            if (source) {
              assigner(object, source, customizer);
            }
          }
          return object;
        };
      }
      function createBindWrapper(func, thisArg) {
        var Ctor = createCtorWrapper(func);
        function wrapper() {
          return (this instanceof wrapper ? Ctor : func).apply(thisArg, arguments);
        }
        return wrapper;
      }
      var createCache = !(nativeCreate && Set) ? constant(null) : function(values) {
        return new SetCache(values);
      };
      function createCompounder(callback) {
        return function(string) {
          var index = -1,
              array = words(deburr(string)),
              length = array.length,
              result = '';
          while (++index < length) {
            result = callback(result, array[index], index);
          }
          return result;
        };
      }
      function createCtorWrapper(Ctor) {
        return function() {
          var thisBinding = baseCreate(Ctor.prototype),
              result = Ctor.apply(thisBinding, arguments);
          return isObject(result) ? result : thisBinding;
        };
      }
      function createExtremum(arrayFunc, isMin) {
        return function(collection, iteratee, thisArg) {
          if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
            iteratee = null;
          }
          var func = getCallback(),
              noIteratee = iteratee == null;
          if (!(func === baseCallback && noIteratee)) {
            noIteratee = false;
            iteratee = func(iteratee, thisArg, 3);
          }
          if (noIteratee) {
            var isArr = isArray(collection);
            if (!isArr && isString(collection)) {
              iteratee = charAtCallback;
            } else {
              return arrayFunc(isArr ? collection : toIterable(collection));
            }
          }
          return extremumBy(collection, iteratee, isMin);
        };
      }
      function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
        var isAry = bitmask & ARY_FLAG,
            isBind = bitmask & BIND_FLAG,
            isBindKey = bitmask & BIND_KEY_FLAG,
            isCurry = bitmask & CURRY_FLAG,
            isCurryBound = bitmask & CURRY_BOUND_FLAG,
            isCurryRight = bitmask & CURRY_RIGHT_FLAG;
        var Ctor = !isBindKey && createCtorWrapper(func),
            key = func;
        function wrapper() {
          var length = arguments.length,
              index = length,
              args = Array(length);
          while (index--) {
            args[index] = arguments[index];
          }
          if (partials) {
            args = composeArgs(args, partials, holders);
          }
          if (partialsRight) {
            args = composeArgsRight(args, partialsRight, holdersRight);
          }
          if (isCurry || isCurryRight) {
            var placeholder = wrapper.placeholder,
                argsHolders = replaceHolders(args, placeholder);
            length -= argsHolders.length;
            if (length < arity) {
              var newArgPos = argPos ? arrayCopy(argPos) : null,
                  newArity = nativeMax(arity - length, 0),
                  newsHolders = isCurry ? argsHolders : null,
                  newHoldersRight = isCurry ? null : argsHolders,
                  newPartials = isCurry ? args : null,
                  newPartialsRight = isCurry ? null : args;
              bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
              bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);
              if (!isCurryBound) {
                bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
              }
              var result = createHybridWrapper(func, bitmask, thisArg, newPartials, newsHolders, newPartialsRight, newHoldersRight, newArgPos, ary, newArity);
              result.placeholder = placeholder;
              return result;
            }
          }
          var thisBinding = isBind ? thisArg : this;
          if (isBindKey) {
            func = thisBinding[key];
          }
          if (argPos) {
            args = reorder(args, argPos);
          }
          if (isAry && ary < args.length) {
            args.length = ary;
          }
          return (this instanceof wrapper ? (Ctor || createCtorWrapper(func)) : func).apply(thisBinding, args);
        }
        return wrapper;
      }
      function createPad(string, length, chars) {
        var strLength = string.length;
        length = +length;
        if (strLength >= length || !nativeIsFinite(length)) {
          return '';
        }
        var padLength = length - strLength;
        chars = chars == null ? ' ' : (chars + '');
        return repeat(chars, ceil(padLength / chars.length)).slice(0, padLength);
      }
      function createPartialWrapper(func, bitmask, thisArg, partials) {
        var isBind = bitmask & BIND_FLAG,
            Ctor = createCtorWrapper(func);
        function wrapper() {
          var argsIndex = -1,
              argsLength = arguments.length,
              leftIndex = -1,
              leftLength = partials.length,
              args = Array(argsLength + leftLength);
          while (++leftIndex < leftLength) {
            args[leftIndex] = partials[leftIndex];
          }
          while (argsLength--) {
            args[leftIndex++] = arguments[++argsIndex];
          }
          return (this instanceof wrapper ? Ctor : func).apply(isBind ? thisArg : this, args);
        }
        return wrapper;
      }
      function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
        var isBindKey = bitmask & BIND_KEY_FLAG;
        if (!isBindKey && typeof func != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var length = partials ? partials.length : 0;
        if (!length) {
          bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
          partials = holders = null;
        }
        length -= (holders ? holders.length : 0);
        if (bitmask & PARTIAL_RIGHT_FLAG) {
          var partialsRight = partials,
              holdersRight = holders;
          partials = holders = null;
        }
        var data = !isBindKey && getData(func),
            newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];
        if (data && data !== true) {
          mergeData(newData, data);
          bitmask = newData[1];
          arity = newData[9];
        }
        newData[9] = arity == null ? (isBindKey ? 0 : func.length) : (nativeMax(arity - length, 0) || 0);
        if (bitmask == BIND_FLAG) {
          var result = createBindWrapper(newData[0], newData[2]);
        } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !newData[4].length) {
          result = createPartialWrapper.apply(undefined, newData);
        } else {
          result = createHybridWrapper.apply(undefined, newData);
        }
        var setter = data ? baseSetData : setData;
        return setter(result, newData);
      }
      function equalArrays(array, other, equalFunc, customizer, isWhere, stackA, stackB) {
        var index = -1,
            arrLength = array.length,
            othLength = other.length,
            result = true;
        if (arrLength != othLength && !(isWhere && othLength > arrLength)) {
          return false;
        }
        while (result && ++index < arrLength) {
          var arrValue = array[index],
              othValue = other[index];
          result = undefined;
          if (customizer) {
            result = isWhere ? customizer(othValue, arrValue, index) : customizer(arrValue, othValue, index);
          }
          if (typeof result == 'undefined') {
            if (isWhere) {
              var othIndex = othLength;
              while (othIndex--) {
                othValue = other[othIndex];
                result = (arrValue && arrValue === othValue) || equalFunc(arrValue, othValue, customizer, isWhere, stackA, stackB);
                if (result) {
                  break;
                }
              }
            } else {
              result = (arrValue && arrValue === othValue) || equalFunc(arrValue, othValue, customizer, isWhere, stackA, stackB);
            }
          }
        }
        return !!result;
      }
      function equalByTag(object, other, tag) {
        switch (tag) {
          case boolTag:
          case dateTag:
            return +object == +other;
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case numberTag:
            return (object != +object) ? other != +other : (object == 0 ? ((1 / object) == (1 / other)) : object == +other);
          case regexpTag:
          case stringTag:
            return object == (other + '');
        }
        return false;
      }
      function equalObjects(object, other, equalFunc, customizer, isWhere, stackA, stackB) {
        var objProps = keys(object),
            objLength = objProps.length,
            othProps = keys(other),
            othLength = othProps.length;
        if (objLength != othLength && !isWhere) {
          return false;
        }
        var hasCtor,
            index = -1;
        while (++index < objLength) {
          var key = objProps[index],
              result = hasOwnProperty.call(other, key);
          if (result) {
            var objValue = object[key],
                othValue = other[key];
            result = undefined;
            if (customizer) {
              result = isWhere ? customizer(othValue, objValue, key) : customizer(objValue, othValue, key);
            }
            if (typeof result == 'undefined') {
              result = (objValue && objValue === othValue) || equalFunc(objValue, othValue, customizer, isWhere, stackA, stackB);
            }
          }
          if (!result) {
            return false;
          }
          hasCtor || (hasCtor = key == 'constructor');
        }
        if (!hasCtor) {
          var objCtor = object.constructor,
              othCtor = other.constructor;
          if (objCtor != othCtor && ('constructor' in object && 'constructor' in other) && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
            return false;
          }
        }
        return true;
      }
      function extremumBy(collection, iteratee, isMin) {
        var exValue = isMin ? POSITIVE_INFINITY : NEGATIVE_INFINITY,
            computed = exValue,
            result = computed;
        baseEach(collection, function(value, index, collection) {
          var current = iteratee(value, index, collection);
          if ((isMin ? current < computed : current > computed) || (current === exValue && current === result)) {
            computed = current;
            result = value;
          }
        });
        return result;
      }
      function getCallback(func, thisArg, argCount) {
        var result = lodash.callback || callback;
        result = result === callback ? baseCallback : result;
        return argCount ? result(func, thisArg, argCount) : result;
      }
      var getData = !metaMap ? noop : function(func) {
        return metaMap.get(func);
      };
      function getIndexOf(collection, target, fromIndex) {
        var result = lodash.indexOf || indexOf;
        result = result === indexOf ? baseIndexOf : result;
        return collection ? result(collection, target, fromIndex) : result;
      }
      function getView(start, end, transforms) {
        var index = -1,
            length = transforms ? transforms.length : 0;
        while (++index < length) {
          var data = transforms[index],
              size = data.size;
          switch (data.type) {
            case 'drop':
              start += size;
              break;
            case 'dropRight':
              end -= size;
              break;
            case 'take':
              end = nativeMin(end, start + size);
              break;
            case 'takeRight':
              start = nativeMax(start, end - size);
              break;
          }
        }
        return {
          'start': start,
          'end': end
        };
      }
      function initCloneArray(array) {
        var length = array.length,
            result = new array.constructor(length);
        if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
          result.index = array.index;
          result.input = array.input;
        }
        return result;
      }
      function initCloneObject(object) {
        var Ctor = object.constructor;
        if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
          Ctor = Object;
        }
        return new Ctor;
      }
      function initCloneByTag(object, tag, isDeep) {
        var Ctor = object.constructor;
        switch (tag) {
          case arrayBufferTag:
            return bufferClone(object);
          case boolTag:
          case dateTag:
            return new Ctor(+object);
          case float32Tag:
          case float64Tag:
          case int8Tag:
          case int16Tag:
          case int32Tag:
          case uint8Tag:
          case uint8ClampedTag:
          case uint16Tag:
          case uint32Tag:
            var buffer = object.buffer;
            return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);
          case numberTag:
          case stringTag:
            return new Ctor(object);
          case regexpTag:
            var result = new Ctor(object.source, reFlags.exec(object));
            result.lastIndex = object.lastIndex;
        }
        return result;
      }
      function isBindable(func) {
        var support = lodash.support,
            result = !(support.funcNames ? func.name : support.funcDecomp);
        if (!result) {
          var source = fnToString.call(func);
          if (!support.funcNames) {
            result = !reFuncName.test(source);
          }
          if (!result) {
            result = reThis.test(source) || isNative(func);
            baseSetData(func, result);
          }
        }
        return result;
      }
      function isIndex(value, length) {
        value = +value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return value > -1 && value % 1 == 0 && value < length;
      }
      function isIterateeCall(value, index, object) {
        if (!isObject(object)) {
          return false;
        }
        var type = typeof index;
        if (type == 'number') {
          var length = object.length,
              prereq = isLength(length) && isIndex(index, length);
        } else {
          prereq = type == 'string' && index in object;
        }
        return prereq && object[index] === value;
      }
      function isLength(value) {
        return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      function isStrictComparable(value) {
        return value === value && (value === 0 ? ((1 / value) > 0) : !isObject(value));
      }
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
      function pickByArray(object, props) {
        object = toObject(object);
        var index = -1,
            length = props.length,
            result = {};
        while (++index < length) {
          var key = props[index];
          if (key in object) {
            result[key] = object[key];
          }
        }
        return result;
      }
      function pickByCallback(object, predicate) {
        var result = {};
        baseForIn(object, function(value, key, object) {
          if (predicate(value, key, object)) {
            result[key] = value;
          }
        });
        return result;
      }
      function reorder(array, indexes) {
        var arrLength = array.length,
            length = nativeMin(indexes.length, arrLength),
            oldArray = arrayCopy(array);
        while (length--) {
          var index = indexes[length];
          array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
        }
        return array;
      }
      var setData = (function() {
        var count = 0,
            lastCalled = 0;
        return function(key, value) {
          var stamp = now(),
              remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return key;
            }
          } else {
            count = 0;
          }
          return baseSetData(key, value);
        };
      }());
      function shimIsPlainObject(value) {
        var Ctor,
            support = lodash.support;
        if (!(isObjectLike(value) && objToString.call(value) == objectTag) || (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
          return false;
        }
        var result;
        baseForIn(value, function(subValue, key) {
          result = key;
        });
        return typeof result == 'undefined' || hasOwnProperty.call(value, result);
      }
      function shimKeys(object) {
        var props = keysIn(object),
            propsLength = props.length,
            length = propsLength && object.length,
            support = lodash.support;
        var allowIndexes = length && isLength(length) && (isArray(object) || (support.nonEnumArgs && isArguments(object)));
        var index = -1,
            result = [];
        while (++index < propsLength) {
          var key = props[index];
          if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
            result.push(key);
          }
        }
        return result;
      }
      function toIterable(value) {
        if (value == null) {
          return [];
        }
        if (!isLength(value.length)) {
          return values(value);
        }
        return isObject(value) ? value : Object(value);
      }
      function toObject(value) {
        return isObject(value) ? value : Object(value);
      }
      function wrapperClone(wrapper) {
        return wrapper instanceof LazyWrapper ? wrapper.clone() : new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__, arrayCopy(wrapper.__actions__));
      }
      function chunk(array, size, guard) {
        if (guard ? isIterateeCall(array, size, guard) : size == null) {
          size = 1;
        } else {
          size = nativeMax(+size || 1, 1);
        }
        var index = 0,
            length = array ? array.length : 0,
            resIndex = -1,
            result = Array(ceil(length / size));
        while (index < length) {
          result[++resIndex] = baseSlice(array, index, (index += size));
        }
        return result;
      }
      function compact(array) {
        var index = -1,
            length = array ? array.length : 0,
            resIndex = -1,
            result = [];
        while (++index < length) {
          var value = array[index];
          if (value) {
            result[++resIndex] = value;
          }
        }
        return result;
      }
      function difference() {
        var index = -1,
            length = arguments.length;
        while (++index < length) {
          var value = arguments[index];
          if (isArray(value) || isArguments(value)) {
            break;
          }
        }
        return baseDifference(value, baseFlatten(arguments, false, true, ++index));
      }
      function drop(array, n, guard) {
        var length = array ? array.length : 0;
        if (!length) {
          return [];
        }
        if (guard ? isIterateeCall(array, n, guard) : n == null) {
          n = 1;
        }
        return baseSlice(array, n < 0 ? 0 : n);
      }
      function dropRight(array, n, guard) {
        var length = array ? array.length : 0;
        if (!length) {
          return [];
        }
        if (guard ? isIterateeCall(array, n, guard) : n == null) {
          n = 1;
        }
        n = length - (+n || 0);
        return baseSlice(array, 0, n < 0 ? 0 : n);
      }
      function dropRightWhile(array, predicate, thisArg) {
        var length = array ? array.length : 0;
        if (!length) {
          return [];
        }
        predicate = getCallback(predicate, thisArg, 3);
        while (length-- && predicate(array[length], length, array)) {}
        return baseSlice(array, 0, length + 1);
      }
      function dropWhile(array, predicate, thisArg) {
        var length = array ? array.length : 0;
        if (!length) {
          return [];
        }
        var index = -1;
        predicate = getCallback(predicate, thisArg, 3);
        while (++index < length && predicate(array[index], index, array)) {}
        return baseSlice(array, index);
      }
      function fill(array, value, start, end) {
        var length = array ? array.length : 0;
        if (!length) {
          return [];
        }
        if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
          start = 0;
          end = length;
        }
        return baseFill(array, value, start, end);
      }
      function findIndex(array, predicate, thisArg) {
        var index = -1,
            length = array ? array.length : 0;
        predicate = getCallback(predicate, thisArg, 3);
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function findLastIndex(array, predicate, thisArg) {
        var length = array ? array.length : 0;
        predicate = getCallback(predicate, thisArg, 3);
        while (length--) {
          if (predicate(array[length], length, array)) {
            return length;
          }
        }
        return -1;
      }
      function first(array) {
        return array ? array[0] : undefined;
      }
      function flatten(array, isDeep, guard) {
        var length = array ? array.length : 0;
        if (guard && isIterateeCall(array, isDeep, guard)) {
          isDeep = false;
        }
        return length ? baseFlatten(array, isDeep) : [];
      }
      function flattenDeep(array) {
        var length = array ? array.length : 0;
        return length ? baseFlatten(array, true) : [];
      }
      function indexOf(array, value, fromIndex) {
        var length = array ? array.length : 0;
        if (!length) {
          return -1;
        }
        if (typeof fromIndex == 'number') {
          fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
        } else if (fromIndex) {
          var index = binaryIndex(array, value),
              other = array[index];
          return (value === value ? value === other : other !== other) ? index : -1;
        }
        return baseIndexOf(array, value, fromIndex);
      }
      function initial(array) {
        return dropRight(array, 1);
      }
      function intersection() {
        var args = [],
            argsIndex = -1,
            argsLength = arguments.length,
            caches = [],
            indexOf = getIndexOf(),
            isCommon = indexOf == baseIndexOf;
        while (++argsIndex < argsLength) {
          var value = arguments[argsIndex];
          if (isArray(value) || isArguments(value)) {
            args.push(value);
            caches.push(isCommon && value.length >= 120 && createCache(argsIndex && value));
          }
        }
        argsLength = args.length;
        var array = args[0],
            index = -1,
            length = array ? array.length : 0,
            result = [],
            seen = caches[0];
        outer: while (++index < length) {
          value = array[index];
          if ((seen ? cacheIndexOf(seen, value) : indexOf(result, value)) < 0) {
            argsIndex = argsLength;
            while (--argsIndex) {
              var cache = caches[argsIndex];
              if ((cache ? cacheIndexOf(cache, value) : indexOf(args[argsIndex], value)) < 0) {
                continue outer;
              }
            }
            if (seen) {
              seen.push(value);
            }
            result.push(value);
          }
        }
        return result;
      }
      function last(array) {
        var length = array ? array.length : 0;
        return length ? array[length - 1] : undefined;
      }
      function lastIndexOf(array, value, fromIndex) {
        var length = array ? array.length : 0;
        if (!length) {
          return -1;
        }
        var index = length;
        if (typeof fromIndex == 'number') {
          index = (fromIndex < 0 ? nativeMax(length + fromIndex, 0) : nativeMin(fromIndex || 0, length - 1)) + 1;
        } else if (fromIndex) {
          index = binaryIndex(array, value, true) - 1;
          var other = array[index];
          return (value === value ? value === other : other !== other) ? index : -1;
        }
        if (value !== value) {
          return indexOfNaN(array, index, true);
        }
        while (index--) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function pull() {
        var array = arguments[0];
        if (!(array && array.length)) {
          return array;
        }
        var index = 0,
            indexOf = getIndexOf(),
            length = arguments.length;
        while (++index < length) {
          var fromIndex = 0,
              value = arguments[index];
          while ((fromIndex = indexOf(array, value, fromIndex)) > -1) {
            splice.call(array, fromIndex, 1);
          }
        }
        return array;
      }
      function pullAt(array) {
        return basePullAt(array || [], baseFlatten(arguments, false, false, 1));
      }
      function remove(array, predicate, thisArg) {
        var index = -1,
            length = array ? array.length : 0,
            result = [];
        predicate = getCallback(predicate, thisArg, 3);
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result.push(value);
            splice.call(array, index--, 1);
            length--;
          }
        }
        return result;
      }
      function rest(array) {
        return drop(array, 1);
      }
      function slice(array, start, end) {
        var length = array ? array.length : 0;
        if (!length) {
          return [];
        }
        if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
          start = 0;
          end = length;
        }
        return baseSlice(array, start, end);
      }
      function sortedIndex(array, value, iteratee, thisArg) {
        var func = getCallback(iteratee);
        return (func === baseCallback && iteratee == null) ? binaryIndex(array, value) : binaryIndexBy(array, value, func(iteratee, thisArg, 1));
      }
      function sortedLastIndex(array, value, iteratee, thisArg) {
        var func = getCallback(iteratee);
        return (func === baseCallback && iteratee == null) ? binaryIndex(array, value, true) : binaryIndexBy(array, value, func(iteratee, thisArg, 1), true);
      }
      function take(array, n, guard) {
        var length = array ? array.length : 0;
        if (!length) {
          return [];
        }
        if (guard ? isIterateeCall(array, n, guard) : n == null) {
          n = 1;
        }
        return baseSlice(array, 0, n < 0 ? 0 : n);
      }
      function takeRight(array, n, guard) {
        var length = array ? array.length : 0;
        if (!length) {
          return [];
        }
        if (guard ? isIterateeCall(array, n, guard) : n == null) {
          n = 1;
        }
        n = length - (+n || 0);
        return baseSlice(array, n < 0 ? 0 : n);
      }
      function takeRightWhile(array, predicate, thisArg) {
        var length = array ? array.length : 0;
        if (!length) {
          return [];
        }
        predicate = getCallback(predicate, thisArg, 3);
        while (length-- && predicate(array[length], length, array)) {}
        return baseSlice(array, length + 1);
      }
      function takeWhile(array, predicate, thisArg) {
        var length = array ? array.length : 0;
        if (!length) {
          return [];
        }
        var index = -1;
        predicate = getCallback(predicate, thisArg, 3);
        while (++index < length && predicate(array[index], index, array)) {}
        return baseSlice(array, 0, index);
      }
      function union() {
        return baseUniq(baseFlatten(arguments, false, true));
      }
      function uniq(array, isSorted, iteratee, thisArg) {
        var length = array ? array.length : 0;
        if (!length) {
          return [];
        }
        if (typeof isSorted != 'boolean' && isSorted != null) {
          thisArg = iteratee;
          iteratee = isIterateeCall(array, isSorted, thisArg) ? null : isSorted;
          isSorted = false;
        }
        var func = getCallback();
        if (!(func === baseCallback && iteratee == null)) {
          iteratee = func(iteratee, thisArg, 3);
        }
        return (isSorted && getIndexOf() == baseIndexOf) ? sortedUniq(array, iteratee) : baseUniq(array, iteratee);
      }
      function unzip(array) {
        var index = -1,
            length = (array && array.length && arrayMax(arrayMap(array, getLength))) >>> 0,
            result = Array(length);
        while (++index < length) {
          result[index] = arrayMap(array, baseProperty(index));
        }
        return result;
      }
      function without(array) {
        return baseDifference(array, baseSlice(arguments, 1));
      }
      function xor() {
        var index = -1,
            length = arguments.length;
        while (++index < length) {
          var array = arguments[index];
          if (isArray(array) || isArguments(array)) {
            var result = result ? baseDifference(result, array).concat(baseDifference(array, result)) : array;
          }
        }
        return result ? baseUniq(result) : [];
      }
      function zip() {
        var length = arguments.length,
            array = Array(length);
        while (length--) {
          array[length] = arguments[length];
        }
        return unzip(array);
      }
      function zipObject(props, values) {
        var index = -1,
            length = props ? props.length : 0,
            result = {};
        if (length && !values && !isArray(props[0])) {
          values = [];
        }
        while (++index < length) {
          var key = props[index];
          if (values) {
            result[key] = values[index];
          } else if (key) {
            result[key[0]] = key[1];
          }
        }
        return result;
      }
      function chain(value) {
        var result = lodash(value);
        result.__chain__ = true;
        return result;
      }
      function tap(value, interceptor, thisArg) {
        interceptor.call(thisArg, value);
        return value;
      }
      function thru(value, interceptor, thisArg) {
        return interceptor.call(thisArg, value);
      }
      function wrapperChain() {
        return chain(this);
      }
      function wrapperCommit() {
        return new LodashWrapper(this.value(), this.__chain__);
      }
      function wrapperPlant(value) {
        var result,
            parent = this;
        while (parent instanceof LodashWrapper) {
          var clone = wrapperClone(parent);
          if (result) {
            previous.__wrapped__ = clone;
          } else {
            result = clone;
          }
          var previous = clone;
          parent = parent.__wrapped__;
        }
        previous.__wrapped__ = value;
        return result;
      }
      function wrapperReverse() {
        var value = this.__wrapped__;
        if (value instanceof LazyWrapper) {
          if (this.__actions__.length) {
            value = new LazyWrapper(this);
          }
          return new LodashWrapper(value.reverse(), this.__chain__);
        }
        return this.thru(function(value) {
          return value.reverse();
        });
      }
      function wrapperToString() {
        return (this.value() + '');
      }
      function wrapperValue() {
        return baseWrapperValue(this.__wrapped__, this.__actions__);
      }
      function at(collection) {
        var length = collection ? collection.length : 0;
        if (isLength(length)) {
          collection = toIterable(collection);
        }
        return baseAt(collection, baseFlatten(arguments, false, false, 1));
      }
      function includes(collection, target, fromIndex) {
        var length = collection ? collection.length : 0;
        if (!isLength(length)) {
          collection = values(collection);
          length = collection.length;
        }
        if (!length) {
          return false;
        }
        if (typeof fromIndex == 'number') {
          fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
        } else {
          fromIndex = 0;
        }
        return (typeof collection == 'string' || !isArray(collection) && isString(collection)) ? (fromIndex < length && collection.indexOf(target, fromIndex) > -1) : (getIndexOf(collection, target, fromIndex) > -1);
      }
      var countBy = createAggregator(function(result, value, key) {
        hasOwnProperty.call(result, key) ? ++result[key] : (result[key] = 1);
      });
      function every(collection, predicate, thisArg) {
        var func = isArray(collection) ? arrayEvery : baseEvery;
        if (typeof predicate != 'function' || typeof thisArg != 'undefined') {
          predicate = getCallback(predicate, thisArg, 3);
        }
        return func(collection, predicate);
      }
      function filter(collection, predicate, thisArg) {
        var func = isArray(collection) ? arrayFilter : baseFilter;
        predicate = getCallback(predicate, thisArg, 3);
        return func(collection, predicate);
      }
      function find(collection, predicate, thisArg) {
        if (isArray(collection)) {
          var index = findIndex(collection, predicate, thisArg);
          return index > -1 ? collection[index] : undefined;
        }
        predicate = getCallback(predicate, thisArg, 3);
        return baseFind(collection, predicate, baseEach);
      }
      function findLast(collection, predicate, thisArg) {
        predicate = getCallback(predicate, thisArg, 3);
        return baseFind(collection, predicate, baseEachRight);
      }
      function findWhere(collection, source) {
        return find(collection, baseMatches(source));
      }
      function forEach(collection, iteratee, thisArg) {
        return (typeof iteratee == 'function' && typeof thisArg == 'undefined' && isArray(collection)) ? arrayEach(collection, iteratee) : baseEach(collection, bindCallback(iteratee, thisArg, 3));
      }
      function forEachRight(collection, iteratee, thisArg) {
        return (typeof iteratee == 'function' && typeof thisArg == 'undefined' && isArray(collection)) ? arrayEachRight(collection, iteratee) : baseEachRight(collection, bindCallback(iteratee, thisArg, 3));
      }
      var groupBy = createAggregator(function(result, value, key) {
        if (hasOwnProperty.call(result, key)) {
          result[key].push(value);
        } else {
          result[key] = [value];
        }
      });
      var indexBy = createAggregator(function(result, value, key) {
        result[key] = value;
      });
      function invoke(collection, methodName) {
        return baseInvoke(collection, methodName, baseSlice(arguments, 2));
      }
      function map(collection, iteratee, thisArg) {
        var func = isArray(collection) ? arrayMap : baseMap;
        iteratee = getCallback(iteratee, thisArg, 3);
        return func(collection, iteratee);
      }
      var max = createExtremum(arrayMax);
      var min = createExtremum(arrayMin, true);
      var partition = createAggregator(function(result, value, key) {
        result[key ? 0 : 1].push(value);
      }, function() {
        return [[], []];
      });
      function pluck(collection, key) {
        return map(collection, baseProperty(key));
      }
      function reduce(collection, iteratee, accumulator, thisArg) {
        var func = isArray(collection) ? arrayReduce : baseReduce;
        return func(collection, getCallback(iteratee, thisArg, 4), accumulator, arguments.length < 3, baseEach);
      }
      function reduceRight(collection, iteratee, accumulator, thisArg) {
        var func = isArray(collection) ? arrayReduceRight : baseReduce;
        return func(collection, getCallback(iteratee, thisArg, 4), accumulator, arguments.length < 3, baseEachRight);
      }
      function reject(collection, predicate, thisArg) {
        var func = isArray(collection) ? arrayFilter : baseFilter;
        predicate = getCallback(predicate, thisArg, 3);
        return func(collection, function(value, index, collection) {
          return !predicate(value, index, collection);
        });
      }
      function sample(collection, n, guard) {
        if (guard ? isIterateeCall(collection, n, guard) : n == null) {
          collection = toIterable(collection);
          var length = collection.length;
          return length > 0 ? collection[baseRandom(0, length - 1)] : undefined;
        }
        var result = shuffle(collection);
        result.length = nativeMin(n < 0 ? 0 : (+n || 0), result.length);
        return result;
      }
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
      function size(collection) {
        var length = collection ? collection.length : 0;
        return isLength(length) ? length : keys(collection).length;
      }
      function some(collection, predicate, thisArg) {
        var func = isArray(collection) ? arraySome : baseSome;
        if (typeof predicate != 'function' || typeof thisArg != 'undefined') {
          predicate = getCallback(predicate, thisArg, 3);
        }
        return func(collection, predicate);
      }
      function sortBy(collection, iteratee, thisArg) {
        var index = -1,
            length = collection ? collection.length : 0,
            result = isLength(length) ? Array(length) : [];
        if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
          iteratee = null;
        }
        iteratee = getCallback(iteratee, thisArg, 3);
        baseEach(collection, function(value, key, collection) {
          result[++index] = {
            'criteria': iteratee(value, key, collection),
            'index': index,
            'value': value
          };
        });
        return baseSortBy(result, compareAscending);
      }
      function sortByAll(collection) {
        var args = arguments;
        if (args.length > 3 && isIterateeCall(args[1], args[2], args[3])) {
          args = [collection, args[1]];
        }
        var index = -1,
            length = collection ? collection.length : 0,
            props = baseFlatten(args, false, false, 1),
            result = isLength(length) ? Array(length) : [];
        baseEach(collection, function(value) {
          var length = props.length,
              criteria = Array(length);
          while (length--) {
            criteria[length] = value == null ? undefined : value[props[length]];
          }
          result[++index] = {
            'criteria': criteria,
            'index': index,
            'value': value
          };
        });
        return baseSortBy(result, compareMultipleAscending);
      }
      function where(collection, source) {
        return filter(collection, baseMatches(source));
      }
      var now = nativeNow || function() {
        return new Date().getTime();
      };
      function after(n, func) {
        if (typeof func != 'function') {
          if (typeof n == 'function') {
            var temp = n;
            n = func;
            func = temp;
          } else {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
        }
        n = nativeIsFinite(n = +n) ? n : 0;
        return function() {
          if (--n < 1) {
            return func.apply(this, arguments);
          }
        };
      }
      function ary(func, n, guard) {
        if (guard && isIterateeCall(func, n, guard)) {
          n = null;
        }
        n = (func && n == null) ? func.length : nativeMax(+n || 0, 0);
        return createWrapper(func, ARY_FLAG, null, null, null, null, n);
      }
      function before(n, func) {
        var result;
        if (typeof func != 'function') {
          if (typeof n == 'function') {
            var temp = n;
            n = func;
            func = temp;
          } else {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
        }
        return function() {
          if (--n > 0) {
            result = func.apply(this, arguments);
          } else {
            func = null;
          }
          return result;
        };
      }
      function bind(func, thisArg) {
        var bitmask = BIND_FLAG;
        if (arguments.length > 2) {
          var partials = baseSlice(arguments, 2),
              holders = replaceHolders(partials, bind.placeholder);
          bitmask |= PARTIAL_FLAG;
        }
        return createWrapper(func, bitmask, thisArg, partials, holders);
      }
      function bindAll(object) {
        return baseBindAll(object, arguments.length > 1 ? baseFlatten(arguments, false, false, 1) : functions(object));
      }
      function bindKey(object, key) {
        var bitmask = BIND_FLAG | BIND_KEY_FLAG;
        if (arguments.length > 2) {
          var partials = baseSlice(arguments, 2),
              holders = replaceHolders(partials, bindKey.placeholder);
          bitmask |= PARTIAL_FLAG;
        }
        return createWrapper(key, bitmask, object, partials, holders);
      }
      function curry(func, arity, guard) {
        if (guard && isIterateeCall(func, arity, guard)) {
          arity = null;
        }
        var result = createWrapper(func, CURRY_FLAG, null, null, null, null, null, arity);
        result.placeholder = curry.placeholder;
        return result;
      }
      function curryRight(func, arity, guard) {
        if (guard && isIterateeCall(func, arity, guard)) {
          arity = null;
        }
        var result = createWrapper(func, CURRY_RIGHT_FLAG, null, null, null, null, null, arity);
        result.placeholder = curryRight.placeholder;
        return result;
      }
      function debounce(func, wait, options) {
        var args,
            maxTimeoutId,
            result,
            stamp,
            thisArg,
            timeoutId,
            trailingCall,
            lastCalled = 0,
            maxWait = false,
            trailing = true;
        if (typeof func != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = wait < 0 ? 0 : wait;
        if (options === true) {
          var leading = true;
          trailing = false;
        } else if (isObject(options)) {
          leading = options.leading;
          maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
          trailing = 'trailing' in options ? options.trailing : trailing;
        }
        function cancel() {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
          if (maxTimeoutId) {
            clearTimeout(maxTimeoutId);
          }
          maxTimeoutId = timeoutId = trailingCall = undefined;
        }
        function delayed() {
          var remaining = wait - (now() - stamp);
          if (remaining <= 0 || remaining > wait) {
            if (maxTimeoutId) {
              clearTimeout(maxTimeoutId);
            }
            var isCalled = trailingCall;
            maxTimeoutId = timeoutId = trailingCall = undefined;
            if (isCalled) {
              lastCalled = now();
              result = func.apply(thisArg, args);
              if (!timeoutId && !maxTimeoutId) {
                args = thisArg = null;
              }
            }
          } else {
            timeoutId = setTimeout(delayed, remaining);
          }
        }
        function maxDelayed() {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
          maxTimeoutId = timeoutId = trailingCall = undefined;
          if (trailing || (maxWait !== wait)) {
            lastCalled = now();
            result = func.apply(thisArg, args);
            if (!timeoutId && !maxTimeoutId) {
              args = thisArg = null;
            }
          }
        }
        function debounced() {
          args = arguments;
          stamp = now();
          thisArg = this;
          trailingCall = trailing && (timeoutId || !leading);
          if (maxWait === false) {
            var leadingCall = leading && !timeoutId;
          } else {
            if (!maxTimeoutId && !leading) {
              lastCalled = stamp;
            }
            var remaining = maxWait - (stamp - lastCalled),
                isCalled = remaining <= 0 || remaining > maxWait;
            if (isCalled) {
              if (maxTimeoutId) {
                maxTimeoutId = clearTimeout(maxTimeoutId);
              }
              lastCalled = stamp;
              result = func.apply(thisArg, args);
            } else if (!maxTimeoutId) {
              maxTimeoutId = setTimeout(maxDelayed, remaining);
            }
          }
          if (isCalled && timeoutId) {
            timeoutId = clearTimeout(timeoutId);
          } else if (!timeoutId && wait !== maxWait) {
            timeoutId = setTimeout(delayed, wait);
          }
          if (leadingCall) {
            isCalled = true;
            result = func.apply(thisArg, args);
          }
          if (isCalled && !timeoutId && !maxTimeoutId) {
            args = thisArg = null;
          }
          return result;
        }
        debounced.cancel = cancel;
        return debounced;
      }
      function defer(func) {
        return baseDelay(func, 1, arguments, 1);
      }
      function delay(func, wait) {
        return baseDelay(func, wait, arguments, 2);
      }
      function flow() {
        var funcs = arguments,
            length = funcs.length;
        if (!length) {
          return function() {
            return arguments[0];
          };
        }
        if (!arrayEvery(funcs, isFunction)) {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return function() {
          var index = 0,
              result = funcs[index].apply(this, arguments);
          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      }
      function flowRight() {
        var funcs = arguments,
            fromIndex = funcs.length - 1;
        if (fromIndex < 0) {
          return function() {
            return arguments[0];
          };
        }
        if (!arrayEvery(funcs, isFunction)) {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return function() {
          var index = fromIndex,
              result = funcs[index].apply(this, arguments);
          while (index--) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      }
      function memoize(func, resolver) {
        if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var cache = memoized.cache,
              key = resolver ? resolver.apply(this, arguments) : arguments[0];
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result = func.apply(this, arguments);
          cache.set(key, result);
          return result;
        };
        memoized.cache = new memoize.Cache;
        return memoized;
      }
      function negate(predicate) {
        if (typeof predicate != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return function() {
          return !predicate.apply(this, arguments);
        };
      }
      function once(func) {
        return before(func, 2);
      }
      function partial(func) {
        var partials = baseSlice(arguments, 1),
            holders = replaceHolders(partials, partial.placeholder);
        return createWrapper(func, PARTIAL_FLAG, null, partials, holders);
      }
      function partialRight(func) {
        var partials = baseSlice(arguments, 1),
            holders = replaceHolders(partials, partialRight.placeholder);
        return createWrapper(func, PARTIAL_RIGHT_FLAG, null, partials, holders);
      }
      function rearg(func) {
        var indexes = baseFlatten(arguments, false, false, 1);
        return createWrapper(func, REARG_FLAG, null, null, null, indexes);
      }
      function spread(func) {
        if (typeof func != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return function(array) {
          return func.apply(this, array);
        };
      }
      function throttle(func, wait, options) {
        var leading = true,
            trailing = true;
        if (typeof func != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        if (options === false) {
          leading = false;
        } else if (isObject(options)) {
          leading = 'leading' in options ? !!options.leading : leading;
          trailing = 'trailing' in options ? !!options.trailing : trailing;
        }
        debounceOptions.leading = leading;
        debounceOptions.maxWait = +wait;
        debounceOptions.trailing = trailing;
        return debounce(func, wait, debounceOptions);
      }
      function wrap(value, wrapper) {
        wrapper = wrapper == null ? identity : wrapper;
        return createWrapper(wrapper, PARTIAL_FLAG, null, [value], []);
      }
      function clone(value, isDeep, customizer, thisArg) {
        if (typeof isDeep != 'boolean' && isDeep != null) {
          thisArg = customizer;
          customizer = isIterateeCall(value, isDeep, thisArg) ? null : isDeep;
          isDeep = false;
        }
        customizer = typeof customizer == 'function' && bindCallback(customizer, thisArg, 1);
        return baseClone(value, isDeep, customizer);
      }
      function cloneDeep(value, customizer, thisArg) {
        customizer = typeof customizer == 'function' && bindCallback(customizer, thisArg, 1);
        return baseClone(value, true, customizer);
      }
      function isArguments(value) {
        var length = isObjectLike(value) ? value.length : undefined;
        return (isLength(length) && objToString.call(value) == argsTag) || false;
      }
      var isArray = nativeIsArray || function(value) {
        return (isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag) || false;
      };
      function isBoolean(value) {
        return (value === true || value === false || isObjectLike(value) && objToString.call(value) == boolTag) || false;
      }
      function isDate(value) {
        return (isObjectLike(value) && objToString.call(value) == dateTag) || false;
      }
      function isElement(value) {
        return (value && value.nodeType === 1 && isObjectLike(value) && objToString.call(value).indexOf('Element') > -1) || false;
      }
      if (!support.dom) {
        isElement = function(value) {
          return (value && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value)) || false;
        };
      }
      function isEmpty(value) {
        if (value == null) {
          return true;
        }
        var length = value.length;
        if (isLength(length) && (isArray(value) || isString(value) || isArguments(value) || (isObjectLike(value) && isFunction(value.splice)))) {
          return !length;
        }
        return !keys(value).length;
      }
      function isEqual(value, other, customizer, thisArg) {
        customizer = typeof customizer == 'function' && bindCallback(customizer, thisArg, 3);
        if (!customizer && isStrictComparable(value) && isStrictComparable(other)) {
          return value === other;
        }
        var result = customizer ? customizer(value, other) : undefined;
        return typeof result == 'undefined' ? baseIsEqual(value, other, customizer) : !!result;
      }
      function isError(value) {
        return (isObjectLike(value) && typeof value.message == 'string' && objToString.call(value) == errorTag) || false;
      }
      var isFinite = nativeNumIsFinite || function(value) {
        return typeof value == 'number' && nativeIsFinite(value);
      };
      function isFunction(value) {
        return typeof value == 'function' || false;
      }
      if (isFunction(/x/) || (Uint8Array && !isFunction(Uint8Array))) {
        isFunction = function(value) {
          return objToString.call(value) == funcTag;
        };
      }
      function isObject(value) {
        var type = typeof value;
        return type == 'function' || (value && type == 'object') || false;
      }
      function isMatch(object, source, customizer, thisArg) {
        var props = keys(source),
            length = props.length;
        customizer = typeof customizer == 'function' && bindCallback(customizer, thisArg, 3);
        if (!customizer && length == 1) {
          var key = props[0],
              value = source[key];
          if (isStrictComparable(value)) {
            return object != null && value === object[key] && hasOwnProperty.call(object, key);
          }
        }
        var values = Array(length),
            strictCompareFlags = Array(length);
        while (length--) {
          value = values[length] = source[props[length]];
          strictCompareFlags[length] = isStrictComparable(value);
        }
        return baseIsMatch(object, props, values, strictCompareFlags, customizer);
      }
      function isNaN(value) {
        return isNumber(value) && value != +value;
      }
      function isNative(value) {
        if (value == null) {
          return false;
        }
        if (objToString.call(value) == funcTag) {
          return reNative.test(fnToString.call(value));
        }
        return (isObjectLike(value) && reHostCtor.test(value)) || false;
      }
      function isNull(value) {
        return value === null;
      }
      function isNumber(value) {
        return typeof value == 'number' || (isObjectLike(value) && objToString.call(value) == numberTag) || false;
      }
      var isPlainObject = !getPrototypeOf ? shimIsPlainObject : function(value) {
        if (!(value && objToString.call(value) == objectTag)) {
          return false;
        }
        var valueOf = value.valueOf,
            objProto = isNative(valueOf) && (objProto = getPrototypeOf(valueOf)) && getPrototypeOf(objProto);
        return objProto ? (value == objProto || getPrototypeOf(value) == objProto) : shimIsPlainObject(value);
      };
      function isRegExp(value) {
        return (isObjectLike(value) && objToString.call(value) == regexpTag) || false;
      }
      function isString(value) {
        return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag) || false;
      }
      function isTypedArray(value) {
        return (isObjectLike(value) && isLength(value.length) && typedArrayTags[objToString.call(value)]) || false;
      }
      function isUndefined(value) {
        return typeof value == 'undefined';
      }
      function toArray(value) {
        var length = value ? value.length : 0;
        if (!isLength(length)) {
          return values(value);
        }
        if (!length) {
          return [];
        }
        return arrayCopy(value);
      }
      function toPlainObject(value) {
        return baseCopy(value, keysIn(value));
      }
      var assign = createAssigner(baseAssign);
      function create(prototype, properties, guard) {
        var result = baseCreate(prototype);
        if (guard && isIterateeCall(prototype, properties, guard)) {
          properties = null;
        }
        return properties ? baseCopy(properties, result, keys(properties)) : result;
      }
      function defaults(object) {
        if (object == null) {
          return object;
        }
        var args = arrayCopy(arguments);
        args.push(assignDefaults);
        return assign.apply(undefined, args);
      }
      function findKey(object, predicate, thisArg) {
        predicate = getCallback(predicate, thisArg, 3);
        return baseFind(object, predicate, baseForOwn, true);
      }
      function findLastKey(object, predicate, thisArg) {
        predicate = getCallback(predicate, thisArg, 3);
        return baseFind(object, predicate, baseForOwnRight, true);
      }
      function forIn(object, iteratee, thisArg) {
        if (typeof iteratee != 'function' || typeof thisArg != 'undefined') {
          iteratee = bindCallback(iteratee, thisArg, 3);
        }
        return baseFor(object, iteratee, keysIn);
      }
      function forInRight(object, iteratee, thisArg) {
        iteratee = bindCallback(iteratee, thisArg, 3);
        return baseForRight(object, iteratee, keysIn);
      }
      function forOwn(object, iteratee, thisArg) {
        if (typeof iteratee != 'function' || typeof thisArg != 'undefined') {
          iteratee = bindCallback(iteratee, thisArg, 3);
        }
        return baseForOwn(object, iteratee);
      }
      function forOwnRight(object, iteratee, thisArg) {
        iteratee = bindCallback(iteratee, thisArg, 3);
        return baseForRight(object, iteratee, keys);
      }
      function functions(object) {
        return baseFunctions(object, keysIn(object));
      }
      function has(object, key) {
        return object ? hasOwnProperty.call(object, key) : false;
      }
      function invert(object, multiValue, guard) {
        if (guard && isIterateeCall(object, multiValue, guard)) {
          multiValue = null;
        }
        var index = -1,
            props = keys(object),
            length = props.length,
            result = {};
        while (++index < length) {
          var key = props[index],
              value = object[key];
          if (multiValue) {
            if (hasOwnProperty.call(result, value)) {
              result[value].push(key);
            } else {
              result[value] = [key];
            }
          } else {
            result[value] = key;
          }
        }
        return result;
      }
      var keys = !nativeKeys ? shimKeys : function(object) {
        if (object) {
          var Ctor = object.constructor,
              length = object.length;
        }
        if ((typeof Ctor == 'function' && Ctor.prototype === object) || (typeof object != 'function' && (length && isLength(length)))) {
          return shimKeys(object);
        }
        return isObject(object) ? nativeKeys(object) : [];
      };
      function keysIn(object) {
        if (object == null) {
          return [];
        }
        if (!isObject(object)) {
          object = Object(object);
        }
        var length = object.length;
        length = (length && isLength(length) && (isArray(object) || (support.nonEnumArgs && isArguments(object))) && length) || 0;
        var Ctor = object.constructor,
            index = -1,
            isProto = typeof Ctor == 'function' && Ctor.prototype === object,
            result = Array(length),
            skipIndexes = length > 0;
        while (++index < length) {
          result[index] = (index + '');
        }
        for (var key in object) {
          if (!(skipIndexes && isIndex(key, length)) && !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
            result.push(key);
          }
        }
        return result;
      }
      function mapValues(object, iteratee, thisArg) {
        var result = {};
        iteratee = getCallback(iteratee, thisArg, 3);
        baseForOwn(object, function(value, key, object) {
          result[key] = iteratee(value, key, object);
        });
        return result;
      }
      var merge = createAssigner(baseMerge);
      function omit(object, predicate, thisArg) {
        if (object == null) {
          return {};
        }
        if (typeof predicate != 'function') {
          var props = arrayMap(baseFlatten(arguments, false, false, 1), String);
          return pickByArray(object, baseDifference(keysIn(object), props));
        }
        predicate = bindCallback(predicate, thisArg, 3);
        return pickByCallback(object, function(value, key, object) {
          return !predicate(value, key, object);
        });
      }
      function pairs(object) {
        var index = -1,
            props = keys(object),
            length = props.length,
            result = Array(length);
        while (++index < length) {
          var key = props[index];
          result[index] = [key, object[key]];
        }
        return result;
      }
      function pick(object, predicate, thisArg) {
        if (object == null) {
          return {};
        }
        return typeof predicate == 'function' ? pickByCallback(object, bindCallback(predicate, thisArg, 3)) : pickByArray(object, baseFlatten(arguments, false, false, 1));
      }
      function result(object, key, defaultValue) {
        var value = object == null ? undefined : object[key];
        if (typeof value == 'undefined') {
          value = defaultValue;
        }
        return isFunction(value) ? value.call(object) : value;
      }
      function transform(object, iteratee, accumulator, thisArg) {
        var isArr = isArray(object) || isTypedArray(object);
        iteratee = getCallback(iteratee, thisArg, 4);
        if (accumulator == null) {
          if (isArr || isObject(object)) {
            var Ctor = object.constructor;
            if (isArr) {
              accumulator = isArray(object) ? new Ctor : [];
            } else {
              accumulator = baseCreate(isFunction(Ctor) && Ctor.prototype);
            }
          } else {
            accumulator = {};
          }
        }
        (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
          return iteratee(accumulator, value, index, object);
        });
        return accumulator;
      }
      function values(object) {
        return baseValues(object, keys(object));
      }
      function valuesIn(object) {
        return baseValues(object, keysIn(object));
      }
      function random(min, max, floating) {
        if (floating && isIterateeCall(min, max, floating)) {
          max = floating = null;
        }
        var noMin = min == null,
            noMax = max == null;
        if (floating == null) {
          if (noMax && typeof min == 'boolean') {
            floating = min;
            min = 1;
          } else if (typeof max == 'boolean') {
            floating = max;
            noMax = true;
          }
        }
        if (noMin && noMax) {
          max = 1;
          noMax = false;
        }
        min = +min || 0;
        if (noMax) {
          max = min;
          min = 0;
        } else {
          max = +max || 0;
        }
        if (floating || min % 1 || max % 1) {
          var rand = nativeRandom();
          return nativeMin(min + (rand * (max - min + parseFloat('1e-' + ((rand + '').length - 1)))), max);
        }
        return baseRandom(min, max);
      }
      var camelCase = createCompounder(function(result, word, index) {
        word = word.toLowerCase();
        return result + (index ? (word.charAt(0).toUpperCase() + word.slice(1)) : word);
      });
      function capitalize(string) {
        string = baseToString(string);
        return string && (string.charAt(0).toUpperCase() + string.slice(1));
      }
      function deburr(string) {
        string = baseToString(string);
        return string && string.replace(reLatin1, deburrLetter);
      }
      function endsWith(string, target, position) {
        string = baseToString(string);
        target = (target + '');
        var length = string.length;
        position = (typeof position == 'undefined' ? length : nativeMin(position < 0 ? 0 : (+position || 0), length)) - target.length;
        return position >= 0 && string.indexOf(target, position) == position;
      }
      function escape(string) {
        string = baseToString(string);
        return (string && reHasUnescapedHtml.test(string)) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
      }
      function escapeRegExp(string) {
        string = baseToString(string);
        return (string && reHasRegExpChars.test(string)) ? string.replace(reRegExpChars, '\\$&') : string;
      }
      var kebabCase = createCompounder(function(result, word, index) {
        return result + (index ? '-' : '') + word.toLowerCase();
      });
      function pad(string, length, chars) {
        string = baseToString(string);
        length = +length;
        var strLength = string.length;
        if (strLength >= length || !nativeIsFinite(length)) {
          return string;
        }
        var mid = (length - strLength) / 2,
            leftLength = floor(mid),
            rightLength = ceil(mid);
        chars = createPad('', rightLength, chars);
        return chars.slice(0, leftLength) + string + chars;
      }
      function padLeft(string, length, chars) {
        string = baseToString(string);
        return string && (createPad(string, length, chars) + string);
      }
      function padRight(string, length, chars) {
        string = baseToString(string);
        return string && (string + createPad(string, length, chars));
      }
      function parseInt(string, radix, guard) {
        if (guard && isIterateeCall(string, radix, guard)) {
          radix = 0;
        }
        return nativeParseInt(string, radix);
      }
      if (nativeParseInt(whitespace + '08') != 8) {
        parseInt = function(string, radix, guard) {
          if (guard ? isIterateeCall(string, radix, guard) : radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          string = trim(string);
          return nativeParseInt(string, radix || (reHexPrefix.test(string) ? 16 : 10));
        };
      }
      function repeat(string, n) {
        var result = '';
        string = baseToString(string);
        n = +n;
        if (n < 1 || !string || !nativeIsFinite(n)) {
          return result;
        }
        do {
          if (n % 2) {
            result += string;
          }
          n = floor(n / 2);
          string += string;
        } while (n);
        return result;
      }
      var snakeCase = createCompounder(function(result, word, index) {
        return result + (index ? '_' : '') + word.toLowerCase();
      });
      var startCase = createCompounder(function(result, word, index) {
        return result + (index ? ' ' : '') + (word.charAt(0).toUpperCase() + word.slice(1));
      });
      function startsWith(string, target, position) {
        string = baseToString(string);
        position = position == null ? 0 : nativeMin(position < 0 ? 0 : (+position || 0), string.length);
        return string.lastIndexOf(target, position) == position;
      }
      function template(string, options, otherOptions) {
        var settings = lodash.templateSettings;
        if (otherOptions && isIterateeCall(string, options, otherOptions)) {
          options = otherOptions = null;
        }
        string = baseToString(string);
        options = baseAssign(baseAssign({}, otherOptions || options), settings, assignOwnDefaults);
        var imports = baseAssign(baseAssign({}, options.imports), settings.imports, assignOwnDefaults),
            importsKeys = keys(imports),
            importsValues = baseValues(imports, importsKeys);
        var isEscaping,
            isEvaluating,
            index = 0,
            interpolate = options.interpolate || reNoMatch,
            source = "__p += '";
        var reDelimiters = RegExp((options.escape || reNoMatch).source + '|' + interpolate.source + '|' + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' + (options.evaluate || reNoMatch).source + '|$', 'g');
        var sourceURL = '//# sourceURL=' + ('sourceURL' in options ? options.sourceURL : ('lodash.templateSources[' + (++templateCounter) + ']')) + '\n';
        string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
          interpolateValue || (interpolateValue = esTemplateValue);
          source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
          if (escapeValue) {
            isEscaping = true;
            source += "' +\n__e(" + escapeValue + ") +\n'";
          }
          if (evaluateValue) {
            isEvaluating = true;
            source += "';\n" + evaluateValue + ";\n__p += '";
          }
          if (interpolateValue) {
            source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
          }
          index = offset + match.length;
          return match;
        });
        source += "';\n";
        var variable = options.variable;
        if (!variable) {
          source = 'with (obj) {\n' + source + '\n}\n';
        }
        source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source).replace(reEmptyStringMiddle, '$1').replace(reEmptyStringTrailing, '$1;');
        source = 'function(' + (variable || 'obj') + ') {\n' + (variable ? '' : 'obj || (obj = {});\n') + "var __t, __p = ''" + (isEscaping ? ', __e = _.escape' : '') + (isEvaluating ? ', __j = Array.prototype.join;\n' + "function print() { __p += __j.call(arguments, '') }\n" : ';\n') + source + 'return __p\n}';
        var result = attempt(function() {
          return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
        });
        result.source = source;
        if (isError(result)) {
          throw result;
        }
        return result;
      }
      function trim(string, chars, guard) {
        var value = string;
        string = baseToString(string);
        if (!string) {
          return string;
        }
        if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
          return string.slice(trimmedLeftIndex(string), trimmedRightIndex(string) + 1);
        }
        chars = (chars + '');
        return string.slice(charsLeftIndex(string, chars), charsRightIndex(string, chars) + 1);
      }
      function trimLeft(string, chars, guard) {
        var value = string;
        string = baseToString(string);
        if (!string) {
          return string;
        }
        if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
          return string.slice(trimmedLeftIndex(string));
        }
        return string.slice(charsLeftIndex(string, (chars + '')));
      }
      function trimRight(string, chars, guard) {
        var value = string;
        string = baseToString(string);
        if (!string) {
          return string;
        }
        if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
          return string.slice(0, trimmedRightIndex(string) + 1);
        }
        return string.slice(0, charsRightIndex(string, (chars + '')) + 1);
      }
      function trunc(string, options, guard) {
        if (guard && isIterateeCall(string, options, guard)) {
          options = null;
        }
        var length = DEFAULT_TRUNC_LENGTH,
            omission = DEFAULT_TRUNC_OMISSION;
        if (options != null) {
          if (isObject(options)) {
            var separator = 'separator' in options ? options.separator : separator;
            length = 'length' in options ? +options.length || 0 : length;
            omission = 'omission' in options ? baseToString(options.omission) : omission;
          } else {
            length = +options || 0;
          }
        }
        string = baseToString(string);
        if (length >= string.length) {
          return string;
        }
        var end = length - omission.length;
        if (end < 1) {
          return omission;
        }
        var result = string.slice(0, end);
        if (separator == null) {
          return result + omission;
        }
        if (isRegExp(separator)) {
          if (string.slice(end).search(separator)) {
            var match,
                newEnd,
                substring = string.slice(0, end);
            if (!separator.global) {
              separator = RegExp(separator.source, (reFlags.exec(separator) || '') + 'g');
            }
            separator.lastIndex = 0;
            while ((match = separator.exec(substring))) {
              newEnd = match.index;
            }
            result = result.slice(0, newEnd == null ? end : newEnd);
          }
        } else if (string.indexOf(separator, end) != end) {
          var index = result.lastIndexOf(separator);
          if (index > -1) {
            result = result.slice(0, index);
          }
        }
        return result + omission;
      }
      function unescape(string) {
        string = baseToString(string);
        return (string && reHasEscapedHtml.test(string)) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
      }
      function words(string, pattern, guard) {
        if (guard && isIterateeCall(string, pattern, guard)) {
          pattern = null;
        }
        string = baseToString(string);
        return string.match(pattern || reWords) || [];
      }
      function attempt(func) {
        try {
          return func.apply(undefined, baseSlice(arguments, 1));
        } catch (e) {
          return isError(e) ? e : new Error(e);
        }
      }
      function callback(func, thisArg, guard) {
        if (guard && isIterateeCall(func, thisArg, guard)) {
          thisArg = null;
        }
        return isObjectLike(func) ? matches(func) : baseCallback(func, thisArg);
      }
      function constant(value) {
        return function() {
          return value;
        };
      }
      function identity(value) {
        return value;
      }
      function matches(source) {
        return baseMatches(baseClone(source, true));
      }
      function matchesProperty(key, value) {
        return baseMatchesProperty(key + '', baseClone(value, true));
      }
      function mixin(object, source, options) {
        if (options == null) {
          var isObj = isObject(source),
              props = isObj && keys(source),
              methodNames = props && props.length && baseFunctions(source, props);
          if (!(methodNames ? methodNames.length : isObj)) {
            methodNames = false;
            options = source;
            source = object;
            object = this;
          }
        }
        if (!methodNames) {
          methodNames = baseFunctions(source, keys(source));
        }
        var chain = true,
            index = -1,
            isFunc = isFunction(object),
            length = methodNames.length;
        if (options === false) {
          chain = false;
        } else if (isObject(options) && 'chain' in options) {
          chain = options.chain;
        }
        while (++index < length) {
          var methodName = methodNames[index],
              func = source[methodName];
          object[methodName] = func;
          if (isFunc) {
            object.prototype[methodName] = (function(func) {
              return function() {
                var chainAll = this.__chain__;
                if (chain || chainAll) {
                  var result = object(this.__wrapped__);
                  (result.__actions__ = arrayCopy(this.__actions__)).push({
                    'func': func,
                    'args': arguments,
                    'thisArg': object
                  });
                  result.__chain__ = chainAll;
                  return result;
                }
                var args = [this.value()];
                push.apply(args, arguments);
                return func.apply(object, args);
              };
            }(func));
          }
        }
        return object;
      }
      function noConflict() {
        context._ = oldDash;
        return this;
      }
      function noop() {}
      function property(key) {
        return baseProperty(key + '');
      }
      function propertyOf(object) {
        return function(key) {
          return object == null ? undefined : object[key];
        };
      }
      function range(start, end, step) {
        if (step && isIterateeCall(start, end, step)) {
          end = step = null;
        }
        start = +start || 0;
        step = step == null ? 1 : (+step || 0);
        if (end == null) {
          end = start;
          start = 0;
        } else {
          end = +end || 0;
        }
        var index = -1,
            length = nativeMax(ceil((end - start) / (step || 1)), 0),
            result = Array(length);
        while (++index < length) {
          result[index] = start;
          start += step;
        }
        return result;
      }
      function times(n, iteratee, thisArg) {
        n = +n;
        if (n < 1 || !nativeIsFinite(n)) {
          return [];
        }
        var index = -1,
            result = Array(nativeMin(n, MAX_ARRAY_LENGTH));
        iteratee = bindCallback(iteratee, thisArg, 1);
        while (++index < n) {
          if (index < MAX_ARRAY_LENGTH) {
            result[index] = iteratee(index);
          } else {
            iteratee(index);
          }
        }
        return result;
      }
      function uniqueId(prefix) {
        var id = ++idCounter;
        return baseToString(prefix) + id;
      }
      LodashWrapper.prototype = baseCreate(lodash.prototype);
      LazyWrapper.prototype = baseCreate(LodashWrapper.prototype);
      LazyWrapper.prototype.constructor = LazyWrapper;
      MapCache.prototype['delete'] = mapDelete;
      MapCache.prototype.get = mapGet;
      MapCache.prototype.has = mapHas;
      MapCache.prototype.set = mapSet;
      SetCache.prototype.push = cachePush;
      memoize.Cache = MapCache;
      lodash.after = after;
      lodash.ary = ary;
      lodash.assign = assign;
      lodash.at = at;
      lodash.before = before;
      lodash.bind = bind;
      lodash.bindAll = bindAll;
      lodash.bindKey = bindKey;
      lodash.callback = callback;
      lodash.chain = chain;
      lodash.chunk = chunk;
      lodash.compact = compact;
      lodash.constant = constant;
      lodash.countBy = countBy;
      lodash.create = create;
      lodash.curry = curry;
      lodash.curryRight = curryRight;
      lodash.debounce = debounce;
      lodash.defaults = defaults;
      lodash.defer = defer;
      lodash.delay = delay;
      lodash.difference = difference;
      lodash.drop = drop;
      lodash.dropRight = dropRight;
      lodash.dropRightWhile = dropRightWhile;
      lodash.dropWhile = dropWhile;
      lodash.fill = fill;
      lodash.filter = filter;
      lodash.flatten = flatten;
      lodash.flattenDeep = flattenDeep;
      lodash.flow = flow;
      lodash.flowRight = flowRight;
      lodash.forEach = forEach;
      lodash.forEachRight = forEachRight;
      lodash.forIn = forIn;
      lodash.forInRight = forInRight;
      lodash.forOwn = forOwn;
      lodash.forOwnRight = forOwnRight;
      lodash.functions = functions;
      lodash.groupBy = groupBy;
      lodash.indexBy = indexBy;
      lodash.initial = initial;
      lodash.intersection = intersection;
      lodash.invert = invert;
      lodash.invoke = invoke;
      lodash.keys = keys;
      lodash.keysIn = keysIn;
      lodash.map = map;
      lodash.mapValues = mapValues;
      lodash.matches = matches;
      lodash.matchesProperty = matchesProperty;
      lodash.memoize = memoize;
      lodash.merge = merge;
      lodash.mixin = mixin;
      lodash.negate = negate;
      lodash.omit = omit;
      lodash.once = once;
      lodash.pairs = pairs;
      lodash.partial = partial;
      lodash.partialRight = partialRight;
      lodash.partition = partition;
      lodash.pick = pick;
      lodash.pluck = pluck;
      lodash.property = property;
      lodash.propertyOf = propertyOf;
      lodash.pull = pull;
      lodash.pullAt = pullAt;
      lodash.range = range;
      lodash.rearg = rearg;
      lodash.reject = reject;
      lodash.remove = remove;
      lodash.rest = rest;
      lodash.shuffle = shuffle;
      lodash.slice = slice;
      lodash.sortBy = sortBy;
      lodash.sortByAll = sortByAll;
      lodash.spread = spread;
      lodash.take = take;
      lodash.takeRight = takeRight;
      lodash.takeRightWhile = takeRightWhile;
      lodash.takeWhile = takeWhile;
      lodash.tap = tap;
      lodash.throttle = throttle;
      lodash.thru = thru;
      lodash.times = times;
      lodash.toArray = toArray;
      lodash.toPlainObject = toPlainObject;
      lodash.transform = transform;
      lodash.union = union;
      lodash.uniq = uniq;
      lodash.unzip = unzip;
      lodash.values = values;
      lodash.valuesIn = valuesIn;
      lodash.where = where;
      lodash.without = without;
      lodash.wrap = wrap;
      lodash.xor = xor;
      lodash.zip = zip;
      lodash.zipObject = zipObject;
      lodash.backflow = flowRight;
      lodash.collect = map;
      lodash.compose = flowRight;
      lodash.each = forEach;
      lodash.eachRight = forEachRight;
      lodash.extend = assign;
      lodash.iteratee = callback;
      lodash.methods = functions;
      lodash.object = zipObject;
      lodash.select = filter;
      lodash.tail = rest;
      lodash.unique = uniq;
      mixin(lodash, lodash);
      lodash.attempt = attempt;
      lodash.camelCase = camelCase;
      lodash.capitalize = capitalize;
      lodash.clone = clone;
      lodash.cloneDeep = cloneDeep;
      lodash.deburr = deburr;
      lodash.endsWith = endsWith;
      lodash.escape = escape;
      lodash.escapeRegExp = escapeRegExp;
      lodash.every = every;
      lodash.find = find;
      lodash.findIndex = findIndex;
      lodash.findKey = findKey;
      lodash.findLast = findLast;
      lodash.findLastIndex = findLastIndex;
      lodash.findLastKey = findLastKey;
      lodash.findWhere = findWhere;
      lodash.first = first;
      lodash.has = has;
      lodash.identity = identity;
      lodash.includes = includes;
      lodash.indexOf = indexOf;
      lodash.isArguments = isArguments;
      lodash.isArray = isArray;
      lodash.isBoolean = isBoolean;
      lodash.isDate = isDate;
      lodash.isElement = isElement;
      lodash.isEmpty = isEmpty;
      lodash.isEqual = isEqual;
      lodash.isError = isError;
      lodash.isFinite = isFinite;
      lodash.isFunction = isFunction;
      lodash.isMatch = isMatch;
      lodash.isNaN = isNaN;
      lodash.isNative = isNative;
      lodash.isNull = isNull;
      lodash.isNumber = isNumber;
      lodash.isObject = isObject;
      lodash.isPlainObject = isPlainObject;
      lodash.isRegExp = isRegExp;
      lodash.isString = isString;
      lodash.isTypedArray = isTypedArray;
      lodash.isUndefined = isUndefined;
      lodash.kebabCase = kebabCase;
      lodash.last = last;
      lodash.lastIndexOf = lastIndexOf;
      lodash.max = max;
      lodash.min = min;
      lodash.noConflict = noConflict;
      lodash.noop = noop;
      lodash.now = now;
      lodash.pad = pad;
      lodash.padLeft = padLeft;
      lodash.padRight = padRight;
      lodash.parseInt = parseInt;
      lodash.random = random;
      lodash.reduce = reduce;
      lodash.reduceRight = reduceRight;
      lodash.repeat = repeat;
      lodash.result = result;
      lodash.runInContext = runInContext;
      lodash.size = size;
      lodash.snakeCase = snakeCase;
      lodash.some = some;
      lodash.sortedIndex = sortedIndex;
      lodash.sortedLastIndex = sortedLastIndex;
      lodash.startCase = startCase;
      lodash.startsWith = startsWith;
      lodash.template = template;
      lodash.trim = trim;
      lodash.trimLeft = trimLeft;
      lodash.trimRight = trimRight;
      lodash.trunc = trunc;
      lodash.unescape = unescape;
      lodash.uniqueId = uniqueId;
      lodash.words = words;
      lodash.all = every;
      lodash.any = some;
      lodash.contains = includes;
      lodash.detect = find;
      lodash.foldl = reduce;
      lodash.foldr = reduceRight;
      lodash.head = first;
      lodash.include = includes;
      lodash.inject = reduce;
      mixin(lodash, (function() {
        var source = {};
        baseForOwn(lodash, function(func, methodName) {
          if (!lodash.prototype[methodName]) {
            source[methodName] = func;
          }
        });
        return source;
      }()), false);
      lodash.sample = sample;
      lodash.prototype.sample = function(n) {
        if (!this.__chain__ && n == null) {
          return sample(this.value());
        }
        return this.thru(function(value) {
          return sample(value, n);
        });
      };
      lodash.VERSION = VERSION;
      arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
        lodash[methodName].placeholder = lodash;
      });
      arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
        var isFilter = index == LAZY_FILTER_FLAG,
            isWhile = index == LAZY_WHILE_FLAG;
        LazyWrapper.prototype[methodName] = function(iteratee, thisArg) {
          var result = this.clone(),
              filtered = result.__filtered__,
              iteratees = result.__iteratees__ || (result.__iteratees__ = []);
          result.__filtered__ = filtered || isFilter || (isWhile && result.__dir__ < 0);
          iteratees.push({
            'iteratee': getCallback(iteratee, thisArg, 3),
            'type': index
          });
          return result;
        };
      });
      arrayEach(['drop', 'take'], function(methodName, index) {
        var countName = '__' + methodName + 'Count__',
            whileName = methodName + 'While';
        LazyWrapper.prototype[methodName] = function(n) {
          n = n == null ? 1 : nativeMax(floor(n) || 0, 0);
          var result = this.clone();
          if (result.__filtered__) {
            var value = result[countName];
            result[countName] = index ? nativeMin(value, n) : (value + n);
          } else {
            var views = result.__views__ || (result.__views__ = []);
            views.push({
              'size': n,
              'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
            });
          }
          return result;
        };
        LazyWrapper.prototype[methodName + 'Right'] = function(n) {
          return this.reverse()[methodName](n).reverse();
        };
        LazyWrapper.prototype[methodName + 'RightWhile'] = function(predicate, thisArg) {
          return this.reverse()[whileName](predicate, thisArg).reverse();
        };
      });
      arrayEach(['first', 'last'], function(methodName, index) {
        var takeName = 'take' + (index ? 'Right' : '');
        LazyWrapper.prototype[methodName] = function() {
          return this[takeName](1).value()[0];
        };
      });
      arrayEach(['initial', 'rest'], function(methodName, index) {
        var dropName = 'drop' + (index ? '' : 'Right');
        LazyWrapper.prototype[methodName] = function() {
          return this[dropName](1);
        };
      });
      arrayEach(['pluck', 'where'], function(methodName, index) {
        var operationName = index ? 'filter' : 'map',
            createCallback = index ? baseMatches : baseProperty;
        LazyWrapper.prototype[methodName] = function(value) {
          return this[operationName](createCallback(value));
        };
      });
      LazyWrapper.prototype.compact = function() {
        return this.filter(identity);
      };
      LazyWrapper.prototype.dropWhile = function(iteratee, thisArg) {
        var done;
        iteratee = getCallback(iteratee, thisArg, 3);
        return this.filter(function(value, index, array) {
          return done || (done = !iteratee(value, index, array));
        });
      };
      LazyWrapper.prototype.reject = function(iteratee, thisArg) {
        iteratee = getCallback(iteratee, thisArg, 3);
        return this.filter(function(value, index, array) {
          return !iteratee(value, index, array);
        });
      };
      LazyWrapper.prototype.slice = function(start, end) {
        start = start == null ? 0 : (+start || 0);
        var result = start < 0 ? this.takeRight(-start) : this.drop(start);
        if (typeof end != 'undefined') {
          end = (+end || 0);
          result = end < 0 ? result.dropRight(-end) : result.take(end - start);
        }
        return result;
      };
      LazyWrapper.prototype.toArray = function() {
        return this.drop(0);
      };
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var lodashFunc = lodash[methodName],
            retUnwrapped = /^(?:first|last)$/.test(methodName);
        lodash.prototype[methodName] = function() {
          var value = this.__wrapped__,
              args = arguments,
              chainAll = this.__chain__,
              isHybrid = !!this.__actions__.length,
              isLazy = value instanceof LazyWrapper,
              onlyLazy = isLazy && !isHybrid;
          if (retUnwrapped && !chainAll) {
            return onlyLazy ? func.call(value) : lodashFunc.call(lodash, this.value());
          }
          var interceptor = function(value) {
            var otherArgs = [value];
            push.apply(otherArgs, args);
            return lodashFunc.apply(lodash, otherArgs);
          };
          if (isLazy || isArray(value)) {
            var wrapper = onlyLazy ? value : new LazyWrapper(this),
                result = func.apply(wrapper, args);
            if (!retUnwrapped && (isHybrid || result.__actions__)) {
              var actions = result.__actions__ || (result.__actions__ = []);
              actions.push({
                'func': thru,
                'args': [interceptor],
                'thisArg': lodash
              });
            }
            return new LodashWrapper(result, chainAll);
          }
          return this.thru(interceptor);
        };
      });
      arrayEach(['concat', 'join', 'pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
        var func = arrayProto[methodName],
            chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
            retUnwrapped = /^(?:join|pop|shift)$/.test(methodName);
        lodash.prototype[methodName] = function() {
          var args = arguments;
          if (retUnwrapped && !this.__chain__) {
            return func.apply(this.value(), args);
          }
          return this[chainName](function(value) {
            return func.apply(value, args);
          });
        };
      });
      LazyWrapper.prototype.clone = lazyClone;
      LazyWrapper.prototype.reverse = lazyReverse;
      LazyWrapper.prototype.value = lazyValue;
      lodash.prototype.chain = wrapperChain;
      lodash.prototype.commit = wrapperCommit;
      lodash.prototype.plant = wrapperPlant;
      lodash.prototype.reverse = wrapperReverse;
      lodash.prototype.toString = wrapperToString;
      lodash.prototype.run = lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
      lodash.prototype.collect = lodash.prototype.map;
      lodash.prototype.head = lodash.prototype.first;
      lodash.prototype.select = lodash.prototype.filter;
      lodash.prototype.tail = lodash.prototype.rest;
      return lodash;
    }
    var _ = runInContext();
    if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
      root._ = _;
      define(function() {
        return _;
      });
    } else if (freeExports && freeModule) {
      if (moduleExports) {
        (freeModule.exports = _)._ = _;
      } else {
        freeExports._ = _;
      }
    } else {
      root._ = _;
    }
  }.call(this));
})(require("process"));
