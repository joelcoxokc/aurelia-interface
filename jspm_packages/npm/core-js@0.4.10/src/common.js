/* */ 
"format cjs";
(function(process) {
  var OBJECT = 'Object',
      FUNCTION = 'Function',
      ARRAY = 'Array',
      STRING = 'String',
      NUMBER = 'Number',
      REGEXP = 'RegExp',
      DATE = 'Date',
      MAP = 'Map',
      SET = 'Set',
      WEAKMAP = 'WeakMap',
      WEAKSET = 'WeakSet',
      SYMBOL = 'Symbol',
      PROMISE = 'Promise',
      MATH = 'Math',
      ARGUMENTS = 'Arguments',
      PROTOTYPE = 'prototype',
      CONSTRUCTOR = 'constructor',
      TO_STRING = 'toString',
      TO_STRING_TAG = TO_STRING + 'Tag',
      TO_LOCALE = 'toLocaleString',
      HAS_OWN = 'hasOwnProperty',
      FOR_EACH = 'forEach',
      ITERATOR = 'iterator',
      FF_ITERATOR = '@@' + ITERATOR,
      PROCESS = 'process',
      CREATE_ELEMENT = 'createElement',
      Function = global[FUNCTION],
      Object = global[OBJECT],
      Array = global[ARRAY],
      String = global[STRING],
      Number = global[NUMBER],
      RegExp = global[REGEXP],
      Date = global[DATE],
      Map = global[MAP],
      Set = global[SET],
      WeakMap = global[WEAKMAP],
      WeakSet = global[WEAKSET],
      Symbol = global[SYMBOL],
      Math = global[MATH],
      TypeError = global.TypeError,
      setTimeout = global.setTimeout,
      setImmediate = global.setImmediate,
      clearImmediate = global.clearImmediate,
      process = global[PROCESS],
      nextTick = process && process.nextTick,
      document = global.document,
      html = document && document.documentElement,
      navigator = global.navigator,
      define = global.define,
      ArrayProto = Array[PROTOTYPE],
      ObjectProto = Object[PROTOTYPE],
      FunctionProto = Function[PROTOTYPE],
      Infinity = 1 / 0,
      DOT = '.';
  function isObject(it) {
    return it != null && (typeof it == 'object' || typeof it == 'function');
  }
  function isFunction(it) {
    return typeof it == 'function';
  }
  var isNative = ctx(/./.test, /\[native code\]\s*\}\s*$/, 1);
  var buildIn = {
    Undefined: 1,
    Null: 1,
    Array: 1,
    String: 1,
    Arguments: 1,
    Function: 1,
    Error: 1,
    Boolean: 1,
    Number: 1,
    Date: 1,
    RegExp: 1
  },
      toString = ObjectProto[TO_STRING];
  function setToStringTag(it, tag, stat) {
    if (it && !has(it = stat ? it : it[PROTOTYPE], SYMBOL_TAG))
      hidden(it, SYMBOL_TAG, tag);
  }
  function cof(it) {
    return it == undefined ? it === undefined ? 'Undefined' : 'Null' : toString.call(it).slice(8, -1);
  }
  function classof(it) {
    var klass = cof(it),
        tag;
    return klass == OBJECT && (tag = it[SYMBOL_TAG]) ? has(buildIn, tag) ? '~' + tag : tag : klass;
  }
  var call = FunctionProto.call,
      apply = FunctionProto.apply,
      REFERENCE_GET;
  function part() {
    var fn = assertFunction(this),
        length = arguments.length,
        args = Array(length),
        i = 0,
        _ = path._,
        holder = false;
    while (length > i)
      if ((args[i] = arguments[i++]) === _)
        holder = true;
    return function() {
      var that = this,
          _length = arguments.length,
          i = 0,
          j = 0,
          _args;
      if (!holder && !_length)
        return invoke(fn, args, that);
      _args = args.slice();
      if (holder)
        for (; length > i; i++)
          if (_args[i] === _)
            _args[i] = arguments[j++];
      while (_length > j)
        _args.push(arguments[j++]);
      return invoke(fn, _args, that);
    };
  }
  function ctx(fn, that, length) {
    assertFunction(fn);
    if (~length && that === undefined)
      return fn;
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  }
  function invoke(fn, args, that) {
    var un = that === undefined;
    switch (args.length | 0) {
      case 0:
        return un ? fn() : fn.call(that);
      case 1:
        return un ? fn(args[0]) : fn.call(that, args[0]);
      case 2:
        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
      case 3:
        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
      case 4:
        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
      case 5:
        return un ? fn(args[0], args[1], args[2], args[3], args[4]) : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
    }
    return fn.apply(that, args);
  }
  function construct(target, argumentsList) {
    var proto = assertFunction(arguments.length < 3 ? target : arguments[2])[PROTOTYPE],
        instance = create(isObject(proto) ? proto : ObjectProto),
        result = apply.call(target, instance, argumentsList);
    return isObject(result) ? result : instance;
  }
  var create = Object.create,
      getPrototypeOf = Object.getPrototypeOf,
      setPrototypeOf = Object.setPrototypeOf,
      defineProperty = Object.defineProperty,
      defineProperties = Object.defineProperties,
      getOwnDescriptor = Object.getOwnPropertyDescriptor,
      getKeys = Object.keys,
      getNames = Object.getOwnPropertyNames,
      getSymbols = Object.getOwnPropertySymbols,
      isFrozen = Object.isFrozen,
      has = ctx(call, ObjectProto[HAS_OWN], 2),
      ES5Object = Object,
      Dict;
  function toObject(it) {
    return ES5Object(assertDefined(it));
  }
  function returnIt(it) {
    return it;
  }
  function returnThis() {
    return this;
  }
  function get(object, key) {
    if (has(object, key))
      return object[key];
  }
  function ownKeys(it) {
    assertObject(it);
    return getSymbols ? getNames(it).concat(getSymbols(it)) : getNames(it);
  }
  var assign = Object.assign || function(target, source) {
    var T = Object(assertDefined(target)),
        l = arguments.length,
        i = 1;
    while (l > i) {
      var S = ES5Object(arguments[i++]),
          keys = getKeys(S),
          length = keys.length,
          j = 0,
          key;
      while (length > j)
        T[key = keys[j++]] = S[key];
    }
    return T;
  };
  function keyOf(object, el) {
    var O = toObject(object),
        keys = getKeys(O),
        length = keys.length,
        index = 0,
        key;
    while (length > index)
      if (O[key = keys[index++]] === el)
        return key;
  }
  function array(it) {
    return String(it).split(',');
  }
  var push = ArrayProto.push,
      unshift = ArrayProto.unshift,
      slice = ArrayProto.slice,
      splice = ArrayProto.splice,
      indexOf = ArrayProto.indexOf,
      forEach = ArrayProto[FOR_EACH];
  function createArrayMethod(type) {
    var isMap = type == 1,
        isFilter = type == 2,
        isSome = type == 3,
        isEvery = type == 4,
        isFindIndex = type == 6,
        noholes = type == 5 || isFindIndex;
    return function(callbackfn) {
      var O = Object(assertDefined(this)),
          that = arguments[1],
          self = ES5Object(O),
          f = ctx(callbackfn, that, 3),
          length = toLength(self.length),
          index = 0,
          result = isMap ? Array(length) : isFilter ? [] : undefined,
          val,
          res;
      for (; length > index; index++)
        if (noholes || index in self) {
          val = self[index];
          res = f(val, index, O);
          if (type) {
            if (isMap)
              result[index] = res;
            else if (res)
              switch (type) {
                case 3:
                  return true;
                case 5:
                  return val;
                case 6:
                  return index;
                case 2:
                  result.push(val);
              }
            else if (isEvery)
              return false;
          }
        }
      return isFindIndex ? -1 : isSome || isEvery ? isEvery : result;
    };
  }
  function createArrayContains(isContains) {
    return function(el) {
      var O = toObject(this),
          length = toLength(O.length),
          index = toIndex(arguments[1], length);
      if (isContains && el != el) {
        for (; length > index; index++)
          if (sameNaN(O[index]))
            return isContains || index;
      } else
        for (; length > index; index++)
          if (isContains || index in O) {
            if (O[index] === el)
              return isContains || index;
          }
      return !isContains && -1;
    };
  }
  function generic(A, B) {
    return typeof A == 'function' ? A : B;
  }
  var MAX_SAFE_INTEGER = 0x1fffffffffffff,
      ceil = Math.ceil,
      floor = Math.floor,
      max = Math.max,
      min = Math.min,
      random = Math.random,
      trunc = Math.trunc || function(it) {
        return (it > 0 ? floor : ceil)(it);
      };
  function sameNaN(number) {
    return number != number;
  }
  function toInteger(it) {
    return isNaN(it) ? 0 : trunc(it);
  }
  function toLength(it) {
    return it > 0 ? min(toInteger(it), MAX_SAFE_INTEGER) : 0;
  }
  function toIndex(index, length) {
    var index = toInteger(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
  }
  function createReplacer(regExp, replace, isStatic) {
    var replacer = isObject(replace) ? function(part) {
      return replace[part];
    } : replace;
    return function(it) {
      return String(isStatic ? it : this).replace(regExp, replacer);
    };
  }
  function createPointAt(toString) {
    return function(pos) {
      var s = String(assertDefined(this)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l)
        return toString ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? toString ? s.charAt(i) : a : toString ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  }
  var REDUCE_ERROR = 'Reduce of empty object with no initial value';
  function assert(condition, msg1, msg2) {
    if (!condition)
      throw TypeError(msg2 ? msg1 + msg2 : msg1);
  }
  function assertDefined(it) {
    if (it == undefined)
      throw TypeError('Function called on null or undefined');
    return it;
  }
  function assertFunction(it) {
    assert(isFunction(it), it, ' is not a function!');
    return it;
  }
  function assertObject(it) {
    assert(isObject(it), it, ' is not an object!');
    return it;
  }
  function assertInstance(it, Constructor, name) {
    assert(it instanceof Constructor, name, ": use the 'new' operator!");
  }
  function descriptor(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  }
  function simpleSet(object, key, value) {
    object[key] = value;
    return object;
  }
  function createDefiner(bitmap) {
    return DESC ? function(object, key, value) {
      return defineProperty(object, key, descriptor(bitmap, value));
    } : simpleSet;
  }
  function uid(key) {
    return SYMBOL + '(' + key + ')_' + (++sid + random())[TO_STRING](36);
  }
  function getWellKnownSymbol(name, setter) {
    return (Symbol && Symbol[name]) || (setter ? Symbol : safeSymbol)(SYMBOL + DOT + name);
  }
  var DESC = !!function() {
    try {
      return defineProperty({}, DOT, ObjectProto);
    } catch (e) {}
  }(),
      sid = 0,
      hidden = createDefiner(1),
      set = Symbol ? simpleSet : hidden,
      safeSymbol = Symbol || uid;
  function assignHidden(target, src) {
    for (var key in src)
      hidden(target, key, src[key]);
    return target;
  }
  var SYMBOL_UNSCOPABLES = getWellKnownSymbol('unscopables'),
      ArrayUnscopables = ArrayProto[SYMBOL_UNSCOPABLES] || {},
      SYMBOL_SPECIES = getWellKnownSymbol('species');
  function setSpecies(C) {
    if (framework || !isNative(C))
      defineProperty(C, SYMBOL_SPECIES, {
        configurable: true,
        get: returnThis
      });
  }
  var SYMBOL_ITERATOR = getWellKnownSymbol(ITERATOR),
      SYMBOL_TAG = getWellKnownSymbol(TO_STRING_TAG),
      SUPPORT_FF_ITER = FF_ITERATOR in ArrayProto,
      ITER = safeSymbol('iter'),
      KEY = 1,
      VALUE = 2,
      Iterators = {},
      IteratorPrototype = {},
      NATIVE_ITERATORS = SYMBOL_ITERATOR in ArrayProto,
      BUGGY_ITERATORS = 'keys' in ArrayProto && !('next' in [].keys());
  setIterator(IteratorPrototype, returnThis);
  function setIterator(O, value) {
    hidden(O, SYMBOL_ITERATOR, value);
    SUPPORT_FF_ITER && hidden(O, FF_ITERATOR, value);
  }
  function createIterator(Constructor, NAME, next, proto) {
    Constructor[PROTOTYPE] = create(proto || IteratorPrototype, {next: descriptor(1, next)});
    setToStringTag(Constructor, NAME + ' Iterator');
  }
  function defineIterator(Constructor, NAME, value, DEFAULT) {
    var proto = Constructor[PROTOTYPE],
        iter = get(proto, SYMBOL_ITERATOR) || get(proto, FF_ITERATOR) || (DEFAULT && get(proto, DEFAULT)) || value;
    if (framework) {
      setIterator(proto, iter);
      if (iter !== value) {
        var iterProto = getPrototypeOf(iter.call(new Constructor));
        setToStringTag(iterProto, NAME + ' Iterator', true);
        has(proto, FF_ITERATOR) && setIterator(iterProto, returnThis);
      }
    }
    Iterators[NAME] = iter;
    Iterators[NAME + ' Iterator'] = returnThis;
    return iter;
  }
  function defineStdIterators(Base, NAME, Constructor, next, DEFAULT, IS_SET) {
    function createIter(kind) {
      return function() {
        return new Constructor(this, kind);
      };
    }
    createIterator(Constructor, NAME, next);
    var entries = createIter(KEY + VALUE),
        values = createIter(VALUE);
    if (DEFAULT == VALUE)
      values = defineIterator(Base, NAME, values, 'values');
    else
      entries = defineIterator(Base, NAME, entries, 'entries');
    if (DEFAULT) {
      $define(PROTO + FORCED * BUGGY_ITERATORS, NAME, {
        entries: entries,
        keys: IS_SET ? values : createIter(KEY),
        values: values
      });
    }
  }
  function iterResult(done, value) {
    return {
      value: value,
      done: !!done
    };
  }
  function isIterable(it) {
    var O = Object(it),
        Symbol = global[SYMBOL],
        hasExt = (Symbol && Symbol[ITERATOR] || FF_ITERATOR) in O;
    return hasExt || SYMBOL_ITERATOR in O || has(Iterators, classof(O));
  }
  function getIterator(it) {
    var Symbol = global[SYMBOL],
        ext = it[Symbol && Symbol[ITERATOR] || FF_ITERATOR],
        getIter = ext || it[SYMBOL_ITERATOR] || Iterators[classof(it)];
    return assertObject(getIter.call(it));
  }
  function stepCall(fn, value, entries) {
    return entries ? invoke(fn, value) : fn(value);
  }
  function forOf(iterable, entries, fn, that) {
    var iterator = getIterator(iterable),
        f = ctx(fn, that, entries ? 2 : 1),
        step;
    while (!(step = iterator.next()).done)
      if (stepCall(f, step.value, entries) === false)
        return ;
  }
  var NODE = cof(process) == PROCESS,
      core = {},
      path = framework ? global : core,
      old = global.core,
      exportGlobal,
      FORCED = 1,
      GLOBAL = 2,
      STATIC = 4,
      PROTO = 8,
      BIND = 16,
      WRAP = 32;
  function $define(type, name, source) {
    var key,
        own,
        out,
        exp,
        isGlobal = type & GLOBAL,
        target = isGlobal ? global : (type & STATIC) ? global[name] : (global[name] || ObjectProto)[PROTOTYPE],
        exports = isGlobal ? core : core[name] || (core[name] = {});
    if (isGlobal)
      source = name;
    for (key in source) {
      own = !(type & FORCED) && target && key in target && (!isFunction(target[key]) || isNative(target[key]));
      out = (own ? target : source)[key];
      if (type & BIND && own)
        exp = ctx(out, global);
      else if (type & WRAP && !framework && target[key] == out) {
        exp = function(param) {
          return this instanceof out ? new out(param) : out(param);
        };
        exp[PROTOTYPE] = out[PROTOTYPE];
      } else
        exp = type & PROTO && isFunction(out) ? ctx(call, out) : out;
      if (exports[key] != out)
        hidden(exports, key, exp);
      if (framework && target && !own) {
        if (isGlobal)
          target[key] = out;
        else
          delete target[key] && hidden(target, key, out);
      }
    }
  }
  if (typeof module != 'undefined' && module.exports)
    module.exports = core;
  else if (isFunction(define) && define.amd)
    define(function() {
      return core;
    });
  else
    exportGlobal = true;
  if (exportGlobal || framework) {
    core.noConflict = function() {
      global.core = old;
      return core;
    };
    global.core = core;
  }
})(require("process"));
