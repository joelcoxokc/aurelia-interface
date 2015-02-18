/* */ 
"format cjs";
(function(process) {
  !function(returnThis, framework, undefined) {
    'use strict';
    var global = returnThis(),
        OBJECT = 'Object',
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
        TO_LOCALE = 'toLocaleString',
        HAS_OWN = 'hasOwnProperty',
        FOR_EACH = 'forEach',
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
        clearTimeout = global.clearTimeout,
        setImmediate = global.setImmediate,
        clearImmediate = global.clearImmediate,
        process = global[PROCESS],
        nextTick = process && process.nextTick,
        document = global.document,
        navigator = global.navigator,
        define = global.define,
        ArrayProto = Array[PROTOTYPE],
        ObjectProto = Object[PROTOTYPE],
        FunctionProto = Function[PROTOTYPE],
        Infinity = 1 / 0,
        core = {},
        path = framework ? global : core;
    function isObject(it) {
      return it != null && (typeof it == 'object' || typeof it == 'function');
    }
    function isFunction(it) {
      return typeof it == 'function';
    }
    var isNative = ctx(/./.test, /\[native code\]\s*\}\s*$/, 1);
    var toString = ObjectProto[TO_STRING];
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
        TO_STRING_TAG;
    function setToStringTag(it, tag, stat) {
      if (TO_STRING_TAG && it)
        hidden(stat ? it : it[PROTOTYPE], TO_STRING_TAG, tag);
    }
    function cof(it) {
      return it == undefined ? it === undefined ? 'Undefined' : 'Null' : toString.call(it).slice(8, -1);
    }
    function classof(it) {
      var klass = cof(it),
          tag;
      return klass == OBJECT && TO_STRING_TAG && (tag = it[TO_STRING_TAG]) ? has(buildIn, tag) ? '~' : tag : klass;
    }
    var apply = FunctionProto.apply,
        call = FunctionProto.call;
    core._ = path._ = framework ? path._ || {} : {};
    function part() {
      var length = arguments.length,
          args = Array(length),
          i = 0,
          _ = path._,
          holder = false;
      while (length > i)
        if ((args[i] = arguments[i++]) === _)
          holder = true;
      return partial(this, args, length, holder, _, false);
    }
    function partial(fn, argsPart, lengthPart, holder, _, bind, context) {
      assertFunction(fn);
      return function() {
        var that = bind ? context : this,
            length = arguments.length,
            i = 0,
            j = 0,
            args;
        if (!holder && !length)
          return invoke(fn, argsPart, that);
        args = argsPart.slice();
        if (holder)
          for (; lengthPart > i; i++)
            if (args[i] === _)
              args[i] = arguments[j++];
        while (length > j)
          args.push(arguments[j++]);
        return invoke(fn, args, that);
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
      switch (args.length) {
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
    var create = Object.create,
        getPrototypeOf = Object.getPrototypeOf,
        defineProperty = Object.defineProperty,
        defineProperties = Object.defineProperties,
        getOwnDescriptor = Object.getOwnPropertyDescriptor,
        getKeys = Object.keys,
        getNames = Object.getOwnPropertyNames,
        getSymbols = Object.getOwnPropertySymbols,
        ownKeys = function(it) {
          return getSymbols ? getNames(it).concat(getSymbols(it)) : getNames(it);
        },
        has = ctx(call, ObjectProto[HAS_OWN], 2),
        ES5Object = Object;
    var assign = Object.assign || function(target, source) {
      var T = Object(target),
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
    function createObjectToArray(isEntries) {
      return function(object) {
        var O = ES5Object(object),
            keys = getKeys(object),
            length = keys.length,
            i = 0,
            result = Array(length),
            key;
        while (length > i)
          result[i] = isEntries ? [key = keys[i++], O[key]] : O[keys[i++]];
        return result;
      };
    }
    function keyOf(object, el) {
      var O = ES5Object(object),
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
      return function(callbackfn, that) {
        var f = ctx(callbackfn, that, 3),
            O = Object(this),
            self = ES5Object(O),
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
      return function(el, fromIndex) {
        var O = ES5Object(this),
            length = toLength(O.length),
            index = max(getPositiveIndex(O, fromIndex), 0);
        if (isContains && el != el) {
          for (; length > index; index++)
            if (sameNaN(O[index]))
              return index;
        } else
          for (; length > index; index++)
            if (isContains || index in O) {
              if (O[index] === el)
                return isContains ? true : index;
            }
        return isContains ? false : -1;
      };
    }
    function turn(mapfn, target) {
      assertFunction(mapfn);
      var memo = target == undefined ? [] : Object(target),
          O = ES5Object(this),
          length = toLength(O.length),
          index = 0;
      for (; length > index; index++) {
        if (mapfn(memo, O[index], index, this) === false)
          break;
      }
      return memo;
    }
    function generic(A, B) {
      return typeof A == 'function' ? A : B;
    }
    var MAX_SAFE_INTEGER = 0x1fffffffffffff,
        ceil = Math.ceil,
        floor = Math.floor,
        max = Math.max,
        min = Math.min,
        pow = Math.pow,
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
    function getPositiveIndex(O, index) {
      var index = toInteger(index);
      if (index < 0)
        index += toLength(O.length);
      return index;
    }
    function createReplacer(regExp, replace, isStatic) {
      var replacer = isObject(replace) ? function(part) {
        return replace[part];
      } : replace;
      return function(it) {
        return String(isStatic ? it : this).replace(regExp, replacer);
      };
    }
    var REDUCE_ERROR = 'Reduce of empty object with no initial value';
    function assert(condition, msg1, msg2) {
      if (!condition)
        throw TypeError(msg2 ? msg1 + msg2 : msg1);
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
    var DESC = !!function() {
      try {
        return defineProperty({}, 0, ObjectProto);
      } catch (e) {}
    }(),
        sid = 0,
        hidden = createDefiner(1),
        symbol = Symbol || uid,
        set = Symbol ? simpleSet : hidden;
    var ITERATOR,
        $for,
        isIterable,
        getIterator,
        COLLECTION_KEYS,
        SHIM;
    var html = document && document.documentElement;
    var NODE = cof(process) == PROCESS,
        REQJS = isFunction(define) && define.amd,
        old = global.core,
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
          exports[key] = exp;
        framework && target && !own && (isGlobal || delete target[key]) && hidden(target, key, out);
      }
    }
    if (NODE)
      module.exports = core;
    if (REQJS)
      define(function() {
        return core;
      });
    if (!NODE && !REQJS || framework) {
      core.noConflict = function() {
        global.core = old;
        return core;
      };
      global.core = core;
    }
    $define(GLOBAL, {global: global});
    !function(TAG, $ITERATOR, $TO_STRING_TAG, SymbolRegistry) {
      if (!isNative(Symbol)) {
        Symbol = function(description) {
          assert(!(this instanceof Symbol), SYMBOL + ' is not a ' + CONSTRUCTOR);
          var tag = uid(description);
          defineProperty(ObjectProto, tag, {
            configurable: true,
            set: function(value) {
              hidden(this, tag, value);
            }
          });
          return set(create(Symbol[PROTOTYPE]), TAG, tag);
        };
        hidden(Symbol[PROTOTYPE], TO_STRING, function() {
          return this[TAG];
        });
      }
      ITERATOR = $ITERATOR in Symbol ? Symbol[$ITERATOR] : uid(SYMBOL + '.' + $ITERATOR);
      TO_STRING_TAG = $TO_STRING_TAG in Symbol ? Symbol[$TO_STRING_TAG] : Symbol(SYMBOL + '.' + $TO_STRING_TAG);
      $define(GLOBAL + WRAP, {Symbol: Symbol});
      $define(STATIC, SYMBOL, {
        'for': function(key) {
          return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = Symbol(key);
        },
        iterator: ITERATOR,
        keyFor: part.call(keyOf, SymbolRegistry),
        toStringTag: TO_STRING_TAG,
        pure: symbol,
        set: set
      });
      setToStringTag(Symbol, SYMBOL);
      $define(GLOBAL, {Reflect: {ownKeys: ownKeys}});
    }(symbol('tag'), 'iterator', TO_STRING + 'Tag', {});
    !function(isFinite, tmp) {
      $define(STATIC, OBJECT, {
        assign: assign,
        is: function(x, y) {
          return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
        }
      });
      '__proto__' in ObjectProto && function(buggy, set) {
        try {
          set = ctx(call, getOwnDescriptor(ObjectProto, '__proto__').set, 2);
          set({}, ArrayProto);
        } catch (e) {
          buggy = true;
        }
        $define(STATIC, OBJECT, {setPrototypeOf: function(O, proto) {
            assertObject(O);
            assert(proto === null || isObject(proto), proto, ": can't set as prototype!");
            if (buggy)
              O.__proto__ = proto;
            else
              set(O, proto);
            return O;
          }});
      }();
      var isInteger = Number.isInteger || function(it) {
        return isFinite(it) && floor(it) === it;
      },
          sign = Math.sign || function sign(it) {
            return (it = +it) == 0 || it != it ? it : it < 0 ? -1 : 1;
          },
          abs = Math.abs,
          exp = Math.exp,
          log = Math.log,
          sqrt = Math.sqrt;
      function asinh(x) {
        return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log(x + sqrt(x * x + 1));
      }
      $define(STATIC, NUMBER, {
        EPSILON: pow(2, -52),
        isFinite: function(it) {
          return typeof it == 'number' && isFinite(it);
        },
        isInteger: isInteger,
        isNaN: sameNaN,
        isSafeInteger: function(number) {
          return isInteger(number) && abs(number) <= MAX_SAFE_INTEGER;
        },
        MAX_SAFE_INTEGER: MAX_SAFE_INTEGER,
        MIN_SAFE_INTEGER: -MAX_SAFE_INTEGER,
        parseFloat: parseFloat,
        parseInt: parseInt
      });
      $define(STATIC, MATH, {
        acosh: function(x) {
          return log(x + sqrt(x * x - 1));
        },
        asinh: asinh,
        atanh: function(x) {
          return x == 0 ? +x : log((1 + +x) / (1 - x)) / 2;
        },
        cbrt: function(x) {
          return sign(x) * pow(abs(x), 1 / 3);
        },
        clz32: function(x) {
          return (x >>>= 0) ? 32 - x[TO_STRING](2).length : 32;
        },
        cosh: function(x) {
          return (exp(x) + exp(-x)) / 2;
        },
        expm1: function(x) {
          return x == 0 ? +x : x > -1e-6 && x < 1e-6 ? +x + x * x / 2 : exp(x) - 1;
        },
        hypot: function(value1, value2) {
          var sum = 0,
              length = arguments.length,
              value;
          while (length--) {
            value = +arguments[length];
            if (value == Infinity || value == -Infinity)
              return Infinity;
            sum += value * value;
          }
          return sqrt(sum);
        },
        imul: function(x, y) {
          var UInt16 = 0xffff,
              xh = UInt16 & x >>> 16,
              xl = UInt16 & x,
              yh = UInt16 & y >>> 16,
              yl = UInt16 & y;
          return 0 | xl * yl + (xh * yl + xl * yh << 16 >>> 0);
        },
        log1p: function(x) {
          return x > -1e-8 && x < 1e-8 ? x - x * x / 2 : log(1 + +x);
        },
        log10: function(x) {
          return log(x) / Math.LN10;
        },
        log2: function(x) {
          return log(x) / Math.LN2;
        },
        sign: sign,
        sinh: function(x) {
          return x == 0 ? +x : (exp(x) - exp(-x)) / 2;
        },
        tanh: function(x) {
          return isFinite(x) ? x == 0 ? +x : (exp(x) - exp(-x)) / (exp(x) + exp(-x)) : sign(x);
        },
        trunc: trunc
      });
      setToStringTag(Math, MATH, true);
      $define(PROTO, STRING, {
        contains: function(searchString, position) {
          return !!~String(this).indexOf(searchString, position);
        },
        endsWith: function(searchString, endPosition) {
          var length = this.length,
              end = toLength(min(endPosition === undefined ? length : endPosition, length));
          searchString += '';
          return String(this).slice(end - searchString.length, end) === searchString;
        },
        repeat: function(count) {
          var str = '' + this,
              result = '',
              n = toInteger(count);
          assert(0 <= n, "Count can't be negative");
          for (; n > 0; (n >>>= 1) && (str += str))
            if (n & 1)
              result += str;
          return result;
        },
        startsWith: function(searchString, position) {
          var index = toLength(min(position, this.length));
          searchString += '';
          return String(this).slice(index, index + searchString.length) === searchString;
        }
      });
      $define(STATIC, ARRAY, {
        from: function(arrayLike, mapfn, that) {
          var O = ES5Object(arrayLike),
              result = new (generic(this, Array)),
              mapping = mapfn !== undefined,
              index = 0,
              length,
              f;
          if (mapping)
            f = ctx(mapfn, that, 2);
          if ($for && isIterable(O))
            $for(O).of(function(value) {
              result[index] = mapping ? f(value, index) : value;
              index++;
            });
          else
            for (length = toLength(O.length); length > index; index++) {
              result[index] = mapping ? f(O[index], index) : O[index];
            }
          result.length = index;
          return result;
        },
        of: function() {
          var index = 0,
              length = arguments.length,
              result = new (generic(this, Array))(length);
          while (length > index)
            result[index] = arguments[index++];
          result.length = length;
          return result;
        }
      });
      $define(PROTO, ARRAY, {
        fill: function(value, start, end) {
          var length = toLength(this.length),
              index = max(getPositiveIndex(this, start), 0),
              endPos;
          if (end === undefined)
            endPos = length;
          else {
            endPos = toInteger(end);
            if (endPos < 0)
              endPos += length;
            endPos = min(endPos, length);
          }
          while (endPos > index)
            this[index++] = value;
          return this;
        },
        find: createArrayMethod(5),
        findIndex: createArrayMethod(6)
      });
      setToStringTag(global.JSON, 'JSON', true);
      if (framework && TO_STRING_TAG) {
        tmp[TO_STRING_TAG] = 'x';
        if (cof(tmp) != 'x')
          hidden(ObjectProto, TO_STRING, function() {
            return '[object ' + classof(this) + ']';
          });
      }
    }(isFinite, {});
    isFunction(setImmediate) && isFunction(clearImmediate) || function(ONREADYSTATECHANGE) {
      var postMessage = global.postMessage,
          addEventListener = global.addEventListener,
          MessageChannel = global.MessageChannel,
          counter = 0,
          queue = {},
          defer,
          channel,
          port;
      setImmediate = function(fn) {
        var args = [],
            i = 1;
        while (arguments.length > i)
          args.push(arguments[i++]);
        queue[++counter] = function() {
          invoke(isFunction(fn) ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
      };
      clearImmediate = function(id) {
        delete queue[id];
      };
      function run(id) {
        if (has(queue, id)) {
          var fn = queue[id];
          delete queue[id];
          fn();
        }
      }
      function listner(event) {
        run(event.data);
      }
      if (NODE) {
        defer = function(id) {
          nextTick(part.call(run, id));
        };
      } else if (addEventListener && isFunction(postMessage) && !global.importScripts) {
        defer = function(id) {
          postMessage(id, '*');
        };
        addEventListener('message', listner, false);
      } else if (isFunction(MessageChannel)) {
        channel = new MessageChannel;
        port = channel.port2;
        channel.port1.onmessage = listner;
        defer = ctx(port.postMessage, port, 1);
      } else if (document && ONREADYSTATECHANGE in document[CREATE_ELEMENT]('script')) {
        defer = function(id) {
          html.appendChild(document[CREATE_ELEMENT]('script'))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
          };
        };
      } else {
        defer = function(id) {
          setTimeout(part.call(run, id), 0);
        };
      }
    }('onreadystatechange');
    $define(GLOBAL + BIND, {
      setImmediate: setImmediate,
      clearImmediate: clearImmediate
    });
    !function(Promise, test) {
      isFunction(Promise) && isFunction(Promise.resolve) && Promise.resolve(test = new Promise(Function())) == test || function(asap, DEF) {
        function isThenable(o) {
          var then;
          if (isObject(o))
            then = o.then;
          return isFunction(then) ? then : false;
        }
        function notify(def) {
          var chain = def.chain;
          chain.length && asap(function() {
            var msg = def.msg,
                ok = def.state == 1,
                i = 0;
            while (chain.length > i)
              !function(react) {
                var cb = ok ? react.ok : react.fail,
                    ret,
                    then;
                try {
                  if (cb) {
                    ret = cb === true ? msg : cb(msg);
                    if (ret === react.P) {
                      react.rej(TypeError(PROMISE + '-chain cycle'));
                    } else if (then = isThenable(ret)) {
                      then.call(ret, react.res, react.rej);
                    } else
                      react.res(ret);
                  } else
                    react.rej(msg);
                } catch (err) {
                  react.rej(err);
                }
              }(chain[i++]);
            chain.length = 0;
          });
        }
        function resolve(msg) {
          var def = this,
              then,
              wrapper;
          if (def.done)
            return ;
          def.done = true;
          def = def.def || def;
          try {
            if (then = isThenable(msg)) {
              wrapper = {
                def: def,
                done: false
              };
              then.call(msg, ctx(resolve, wrapper, 1), ctx(reject, wrapper, 1));
            } else {
              def.msg = msg;
              def.state = 1;
              notify(def);
            }
          } catch (err) {
            reject.call(wrapper || {
              def: def,
              done: false
            }, err);
          }
        }
        function reject(msg) {
          var def = this;
          if (def.done)
            return ;
          def.done = true;
          def = def.def || def;
          def.msg = msg;
          def.state = 2;
          notify(def);
        }
        Promise = function(executor) {
          assertFunction(executor);
          assertInstance(this, Promise, PROMISE);
          var def = {
            chain: [],
            state: 0,
            done: false,
            msg: undefined
          };
          hidden(this, DEF, def);
          try {
            executor(ctx(resolve, def, 1), ctx(reject, def, 1));
          } catch (err) {
            reject.call(def, err);
          }
        };
        hidden(Promise[PROTOTYPE], 'then', function(onFulfilled, onRejected) {
          var react = {
            ok: isFunction(onFulfilled) ? onFulfilled : true,
            fail: isFunction(onRejected) ? onRejected : false
          },
              P = react.P = new this[CONSTRUCTOR](function(resolve, reject) {
                react.res = assertFunction(resolve);
                react.rej = assertFunction(reject);
              }),
              def = this[DEF];
          def.chain.push(react);
          def.state && notify(def);
          return P;
        });
        hidden(Promise[PROTOTYPE], 'catch', function(onRejected) {
          return this.then(undefined, onRejected);
        });
        hidden(Promise, 'all', function(iterable) {
          var Promise = this,
              values = [];
          return new Promise(function(resolve, reject) {
            $for(iterable).of(push, values);
            var remaining = values.length,
                results = Array(remaining);
            if (remaining)
              forEach.call(values, function(promise, index) {
                Promise.resolve(promise).then(function(value) {
                  results[index] = value;
                  --remaining || resolve(results);
                }, reject);
              });
            else
              resolve(results);
          });
        });
        hidden(Promise, 'race', function(iterable) {
          var Promise = this;
          return new Promise(function(resolve, reject) {
            $for(iterable).of(function(promise) {
              Promise.resolve(promise).then(resolve, reject);
            });
          });
        });
        hidden(Promise, 'reject', function(r) {
          return new this(function(resolve, reject) {
            reject(r);
          });
        });
        hidden(Promise, 'resolve', function(x) {
          return isObject(x) && getPrototypeOf(x) === this[PROTOTYPE] ? x : new this(function(resolve, reject) {
            resolve(x);
          });
        });
      }(nextTick || setImmediate, symbol('def'));
      setToStringTag(Promise, PROMISE);
      $define(GLOBAL + FORCED * !isNative(Promise), {Promise: Promise});
    }(global[PROMISE]);
    !function() {
      SHIM = symbol('shim');
      var KEYS = COLLECTION_KEYS = symbol('keys'),
          VALUES = symbol('values'),
          STOREID = symbol('storeId'),
          WEAKDATA = symbol('weakData'),
          WEAKID = symbol('weakId'),
          SIZE = DESC ? symbol('size') : 'size',
          uid = 0,
          wid = 0;
      function getCollection(C, NAME, test, methods, commonMethods, isMap, isWeak) {
        var ADDER_KEY = isMap ? 'set' : 'add',
            init = commonMethods.clear;
        function initFromIterable(that, iterable) {
          if (iterable != undefined && $for) {
            $for(iterable, isMap).of(that[ADDER_KEY], that);
          }
          return that;
        }
        if (!test) {
          C = function(iterable) {
            assertInstance(this, C, NAME);
            init.call(this);
            initFromIterable(this, iterable);
          };
          set(C, SHIM, true);
          assign(C[PROTOTYPE], methods, commonMethods);
          isWeak || defineProperty(C[PROTOTYPE], 'size', {get: function() {
              return this[SIZE];
            }});
        } else {
          var Native = C,
              test_key = {},
              collection = new C([isMap ? [test_key, 1] : test_key]),
              adder = collection[ADDER_KEY];
          if (!(ITERATOR in ArrayProto && collection.has(test_key))) {
            C = function(iterable) {
              assertInstance(this, C, NAME);
              return initFromIterable(new Native, iterable);
            };
            C[PROTOTYPE] = Native[PROTOTYPE];
          }
          if (framework && collection[ADDER_KEY](test_key, 1) !== collection) {
            hidden(C[PROTOTYPE], ADDER_KEY, function(a, b) {
              adder.call(this, a, b);
              return this;
            });
          }
        }
        setToStringTag(C, NAME);
        var O = {};
        O[NAME] = C;
        $define(GLOBAL + WRAP + FORCED * !isNative(C), O);
        return C;
      }
      function fastKey(it, create) {
        if (!isObject(it))
          return (typeof it == 'string' ? 'S' : 'P') + it;
        if (!has(it, STOREID)) {
          if (create)
            hidden(it, STOREID, ++uid);
          else
            return '';
        }
        return 'O' + it[STOREID];
      }
      function collectionMethods($VALUES) {
        return {
          clear: function() {
            hidden(this, SIZE, 0);
            hidden(this, KEYS, create(null));
            if ($VALUES == VALUES)
              hidden(this, VALUES, create(null));
          },
          'delete': function(key) {
            var index = fastKey(key),
                keys = this[KEYS],
                contains = index in keys;
            if (contains) {
              delete keys[index];
              if ($VALUES == VALUES)
                delete this[VALUES][index];
              this[SIZE]--;
            }
            return contains;
          },
          forEach: function(callbackfn, that) {
            var f = ctx(callbackfn, that, 3),
                values = this[$VALUES],
                keys = this[KEYS],
                names = getKeys(keys),
                length = names.length,
                i = 0,
                index;
            while (length > i) {
              index = names[i++];
              f(values[index], keys[index], this);
            }
          },
          has: function(key) {
            return fastKey(key) in this[KEYS];
          }
        };
      }
      Map = getCollection(Map, MAP, isNative(Map) && has(Map[PROTOTYPE], FOR_EACH), {
        get: function(key) {
          return this[VALUES][fastKey(key)];
        },
        set: function(key, value) {
          var index = fastKey(key, true),
              values = this[VALUES];
          if (!(index in values)) {
            this[KEYS][index] = key;
            this[SIZE]++;
          }
          values[index] = value;
          return this;
        }
      }, collectionMethods(VALUES), true);
      Set = getCollection(Set, SET, isNative(Set) && has(Set[PROTOTYPE], FOR_EACH), {add: function(value) {
          var index = fastKey(value, true),
              values = this[KEYS];
          if (!(index in values)) {
            values[index] = value;
            this[SIZE]++;
          }
          return this;
        }}, collectionMethods(KEYS));
      function getWeakData(it) {
        has(it, WEAKDATA) || hidden(it, WEAKDATA, {});
        return it[WEAKDATA];
      }
      function weakCollectionHas(key) {
        return isObject(key) && has(key, WEAKDATA) && has(key[WEAKDATA], this[WEAKID]);
      }
      var weakCollectionMethods = {
        clear: function() {
          hidden(this, WEAKID, wid++);
        },
        'delete': function(key) {
          return weakCollectionHas.call(this, key) && delete key[WEAKDATA][this[WEAKID]];
        },
        has: weakCollectionHas
      };
      WeakMap = getCollection(WeakMap, WEAKMAP, isNative(WeakMap) && has(WeakMap[PROTOTYPE], 'clear'), {
        get: function(key) {
          if (isObject(key) && has(key, WEAKDATA))
            return key[WEAKDATA][this[WEAKID]];
        },
        set: function(key, value) {
          getWeakData(assertObject(key))[this[WEAKID]] = value;
          return this;
        }
      }, weakCollectionMethods, true, true);
      WeakSet = getCollection(WeakSet, WEAKSET, isNative(WeakSet), {add: function(value) {
          getWeakData(assertObject(value))[this[WEAKID]] = true;
          return this;
        }}, weakCollectionMethods, false, true);
    }();
    !function($$ITERATOR) {
      var FFITERATOR = $$ITERATOR in ArrayProto,
          KEY = 1,
          VALUE = 2,
          ITERATED = symbol('iterated'),
          KIND = symbol('kind'),
          INDEX = symbol('index'),
          KEYS = symbol('keys'),
          ENTRIES = symbol('entries'),
          getValues = createObjectToArray(false),
          Iterators = {},
          IteratorPrototype = {};
      hidden(IteratorPrototype, ITERATOR, returnThis);
      FFITERATOR && hidden(IteratorPrototype, $$ITERATOR, returnThis);
      function createIterResultObject(done, value) {
        return {
          value: value,
          done: !!done
        };
      }
      function createIteratorClass(Base, NAME, DEFAULT, Constructor, next) {
        Constructor[PROTOTYPE] = create(IteratorPrototype, {next: descriptor(1, next)});
        setToStringTag(Constructor, NAME + ' Iterator');
        function createIteratorFactory(kind) {
          return function() {
            return new Constructor(this, kind);
          };
        }
        $define(PROTO, NAME, {
          entries: createIteratorFactory(KEY + VALUE),
          keys: createIteratorFactory(KEY),
          values: createIteratorFactory(VALUE)
        });
        Base && defineIterator(Base, NAME, createIteratorFactory(DEFAULT));
      }
      function defineIterator(Constructor, NAME, value) {
        var proto = Constructor[PROTOTYPE],
            has$$ITERATOR = has(proto, $$ITERATOR);
        var iter = has(proto, ITERATOR) ? proto[ITERATOR] : has$$ITERATOR ? proto[$$ITERATOR] : value;
        if (framework) {
          !has(proto, ITERATOR) && hidden(proto, ITERATOR, iter);
          if (has$$ITERATOR)
            hidden(getPrototypeOf(iter.call(new Constructor)), ITERATOR, returnThis);
          else
            FFITERATOR && hidden(proto, $$ITERATOR, iter);
        }
        Iterators[NAME] = iter;
        Iterators[NAME + ' Iterator'] = returnThis;
      }
      createIteratorClass(Array, ARRAY, VALUE, function(iterated, kind) {
        set(this, ITERATED, ES5Object(iterated));
        set(this, KIND, kind);
        set(this, INDEX, 0);
      }, function() {
        var iterated = this[ITERATED],
            index = this[INDEX]++,
            kind = this[KIND],
            value;
        if (index >= iterated.length)
          return createIterResultObject(1);
        if (kind == KEY)
          value = index;
        else if (kind == VALUE)
          value = iterated[index];
        else
          value = [index, iterated[index]];
        return createIterResultObject(0, value);
      });
      defineIterator(String, STRING, Iterators[ARRAY]);
      Iterators[ARGUMENTS] = Iterators[ARRAY];
      createIteratorClass(Map, MAP, KEY + VALUE, function(iterated, kind) {
        var that = this,
            keys;
        if (Map[SHIM])
          keys = getValues(iterated[COLLECTION_KEYS]);
        else
          Map[PROTOTYPE][FOR_EACH].call(iterated, function(val, key) {
            this.push(key);
          }, keys = []);
        set(that, ITERATED, iterated);
        set(that, KIND, kind);
        set(that, INDEX, 0);
        set(that, KEYS, keys);
      }, function() {
        var that = this,
            iterated = that[ITERATED],
            keys = that[KEYS],
            index = that[INDEX]++,
            kind = that[KIND],
            key,
            value;
        if (index >= keys.length)
          return createIterResultObject(1);
        key = keys[index];
        if (kind == KEY)
          value = key;
        else if (kind == VALUE)
          value = iterated.get(key);
        else
          value = [key, iterated.get(key)];
        return createIterResultObject(0, value);
      });
      createIteratorClass(Set, SET, VALUE, function(iterated, kind) {
        var keys;
        if (Set[SHIM])
          keys = getValues(iterated[COLLECTION_KEYS]);
        else
          Set[PROTOTYPE][FOR_EACH].call(iterated, function(val) {
            this.push(val);
          }, keys = []);
        set(this, KIND, kind);
        set(this, KEYS, keys.reverse());
      }, function() {
        var keys = this[KEYS],
            key;
        if (!keys.length)
          return createIterResultObject(1);
        key = keys.pop();
        return createIterResultObject(0, this[KIND] == KEY + VALUE ? [key, key] : key);
      });
      $for = function(iterable, entries) {
        if (!(this instanceof $for))
          return new $for(iterable, entries);
        set(this, ITERATED, iterable);
        set(this, ENTRIES, entries);
      };
      $for[PROTOTYPE].of = function(fn, that) {
        var iterator = getIterator(this[ITERATED]),
            entries = this[ENTRIES],
            f = ctx(fn, that, entries ? 2 : 1),
            step;
        while (!(step = iterator.next()).done) {
          if ((entries ? invoke(f, step.value) : f(step.value)) === false)
            return ;
        }
      };
      $for.isIterable = isIterable = function(it) {
        return (it != undefined && ITERATOR in it) || has(Iterators, classof(it));
      };
      $for.getIterator = getIterator = function(it) {
        return assertObject((it[ITERATOR] || Iterators[classof(it)]).call(it));
      };
      $define(GLOBAL + FORCED, {$for: $for});
    }('@@iterator');
    !function() {
      function Dict(iterable) {
        var dict = create(null);
        if (iterable != undefined) {
          if ($for && isIterable(iterable))
            $for(iterable, true).of(function(key, value) {
              dict[key] = value;
            });
          else
            assign(dict, iterable);
        }
        return dict;
      }
      Dict[PROTOTYPE] = null;
      function createDictMethod(type) {
        var isMap = type == 1,
            isFilter = type == 2,
            isSome = type == 3,
            isEvery = type == 4;
        return function(object, callbackfn, that) {
          var f = ctx(callbackfn, that, 3),
              O = ES5Object(object),
              keys = getKeys(O),
              length = keys.length,
              i = 0,
              result = isMap || isFilter ? new (generic(this, Dict)) : undefined,
              key,
              val,
              res;
          while (length > i) {
            key = keys[i++];
            val = O[key];
            res = f(val, key, object);
            if (type) {
              if (isMap)
                result[key] = res;
              else if (res)
                switch (type) {
                  case 3:
                    return true;
                  case 5:
                    return val;
                  case 6:
                    return key;
                  case 2:
                    result[key] = val;
                }
              else if (isEvery)
                return false;
            }
          }
          return isSome || isEvery ? isEvery : result;
        };
      }
      function createDictReduce(isTurn) {
        return function(object, mapfn, init) {
          assertFunction(mapfn);
          var O = ES5Object(object),
              keys = getKeys(O),
              length = keys.length,
              i = 0,
              memo,
              key,
              result;
          if (isTurn)
            memo = init == undefined ? new (generic(this, Dict)) : Object(init);
          else if (arguments.length < 3) {
            assert(length, REDUCE_ERROR);
            memo = O[keys[i++]];
          } else
            memo = Object(init);
          while (length > i) {
            result = mapfn(memo, O[key = keys[i++]], key, object);
            if (isTurn) {
              if (result === false)
                break;
            } else
              memo = result;
          }
          return memo;
        };
      }
      var findKey = createDictMethod(6);
      assign(Dict, {
        forEach: createDictMethod(0),
        map: createDictMethod(1),
        filter: createDictMethod(2),
        some: createDictMethod(3),
        every: createDictMethod(4),
        find: createDictMethod(5),
        findKey: findKey,
        reduce: createDictReduce(false),
        turn: createDictReduce(true),
        keyOf: keyOf,
        contains: function(object, el) {
          return (el == el ? keyOf(object, el) : findKey(object, sameNaN)) !== undefined;
        },
        has: has,
        get: function(object, key) {
          if (has(object, key))
            return object[key];
        },
        set: createDefiner(0),
        isDict: function(it) {
          return getPrototypeOf(it) === Dict[PROTOTYPE];
        }
      });
      $define(STATIC, OBJECT, {
        values: createObjectToArray(false),
        entries: createObjectToArray(true)
      });
      $define(GLOBAL + FORCED, {Dict: Dict});
    }();
    !function(_, BOUND, toLocaleString) {
      $define(PROTO + FORCED, FUNCTION, {
        part: part,
        by: function(that) {
          var fn = this,
              _ = path._,
              holder = false,
              length = arguments.length,
              isThat = that === _,
              i = +!isThat,
              indent = i,
              it,
              args;
          if (isThat) {
            it = fn;
            fn = call;
          } else
            it = that;
          if (length < 2)
            return ctx(fn, it, -1);
          args = Array(length - indent);
          while (length > i)
            if ((args[i - indent] = arguments[i++]) === _)
              holder = true;
          return partial(fn, args, length, holder, _, true, it);
        },
        only: function(numberArguments, that) {
          var fn = assertFunction(this),
              n = toLength(numberArguments),
              isThat = arguments.length > 1;
          return function() {
            var length = min(n, arguments.length),
                args = Array(length),
                i = 0;
            while (length > i)
              args[i] = arguments[i++];
            return invoke(fn, args, isThat ? that : this);
          };
        }
      });
      function tie(key) {
        var that = this,
            bound;
        if (key === undefined || !(key in that))
          return toLocaleString.call(that);
        has(that, BOUND) || hidden(that, BOUND, {});
        bound = that[BOUND];
        return has(bound, key) ? bound[key] : (bound[key] = ctx(that[key], that, -1));
      }
      hidden(path._, TO_STRING, function() {
        return _;
      });
      hidden(ObjectProto, _, tie);
      DESC || hidden(ArrayProto, _, tie);
    }(DESC ? uid('tie') : TO_LOCALE, symbol('bound'), ObjectProto[TO_LOCALE]);
    !function() {
      function define(target, mixin) {
        var keys = ownKeys(ES5Object(mixin)),
            length = keys.length,
            i = 0,
            key;
        while (length > i)
          defineProperty(target, key = keys[i++], getOwnDescriptor(mixin, key));
        return target;
      }
      ;
      $define(STATIC + FORCED, OBJECT, {
        isObject: isObject,
        classof: classof,
        define: define,
        make: function(proto, mixin) {
          return define(create(proto), mixin);
        }
      });
    }();
    $define(PROTO, ARRAY, {contains: createArrayContains(true)});
    $define(PROTO + FORCED, ARRAY, {turn: turn});
    !function() {
      function setArrayStatics(keys, length) {
        $define(STATIC, ARRAY, turn.call(array(keys), function(memo, key) {
          if (key in ArrayProto)
            memo[key] = ctx(call, ArrayProto[key], length);
        }, {}));
      }
      setArrayStatics('pop,reverse,shift,keys,values,entries', 1);
      setArrayStatics('indexOf,every,some,forEach,map,filter,find,findIndex,contains', 3);
      setArrayStatics('join,slice,concat,push,splice,unshift,sort,' + 'lastIndexOf,reduce,reduceRight,fill,turn');
    }();
    $define(PROTO + FORCED, NUMBER, {
      times: function(mapfn, that) {
        var number = +this,
            length = toLength(number),
            result = Array(length),
            i = 0,
            f;
        if (mapfn != undefined) {
          f = ctx(mapfn, that, 1);
          while (length > i)
            result[i] = f(i++);
        } else
          while (length > i)
            result[i] = i++;
        return result;
      },
      random: function(lim) {
        var a = +this,
            b = lim == undefined ? 0 : +lim,
            m = min(a, b);
        return random() * (max(a, b) - m) + m;
      }
    });
    $define(PROTO + FORCED, NUMBER, turn.call(array('round,floor,ceil,abs,sin,asin,cos,acos,tan,atan,exp,sqrt,max,min,pow,atan2,' + 'acosh,asinh,atanh,cbrt,clz32,cosh,expm1,hypot,imul,log1p,log10,log2,sign,sinh,tanh,trunc'), function(memo, key) {
      var fn = Math[key];
      if (fn)
        memo[key] = function() {
          var args = [+this],
              i = 0;
          while (arguments.length > i)
            args.push(arguments[i++]);
          return invoke(fn, args);
        };
    }, {}));
    !function() {
      var escapeHTMLDict = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
      },
          unescapeHTMLDict = {},
          key;
      for (key in escapeHTMLDict)
        unescapeHTMLDict[escapeHTMLDict[key]] = key;
      $define(PROTO + FORCED, STRING, {
        escapeHTML: createReplacer(/[&<>"']/g, escapeHTMLDict),
        unescapeHTML: createReplacer(/&(?:amp|lt|gt|quot|apos);/g, unescapeHTMLDict)
      });
    }();
    $define(STATIC, REGEXP, {escape: createReplacer(/([\\\-[\]{}()*+?.,^$|])/g, '\\$1', true)});
    !function(formatRegExp, flexioRegExp, locales, current, SECONDS, MINUTES, HOURS, MONTH, YEAR) {
      function createFormat(UTC) {
        return function(template, locale) {
          var that = this,
              dict = locales[has(locales, locale) ? locale : current];
          function get(unit) {
            return that[(UTC ? 'getUTC' : 'get') + unit]();
          }
          return String(template).replace(formatRegExp, function(part) {
            switch (part) {
              case 's':
                return get(SECONDS);
              case 'ss':
                return lz(get(SECONDS));
              case 'm':
                return get(MINUTES);
              case 'mm':
                return lz(get(MINUTES));
              case 'h':
                return get(HOURS);
              case 'hh':
                return lz(get(HOURS));
              case 'D':
                return get(DATE);
              case 'DD':
                return lz(get(DATE));
              case 'W':
                return dict[0][get('Day')];
              case 'N':
                return get(MONTH) + 1;
              case 'NN':
                return lz(get(MONTH) + 1);
              case 'M':
                return dict[2][get(MONTH)];
              case 'MM':
                return dict[1][get(MONTH)];
              case 'Y':
                return get(YEAR);
              case 'YY':
                return lz(get(YEAR) % 100);
            }
            return part;
          });
        };
      }
      function lz(num) {
        return num > 9 ? num : '0' + num;
      }
      function addLocale(lang, locale) {
        function split(index) {
          return turn.call(array(locale.months), function(memo, it) {
            memo.push(it.replace(flexioRegExp, '$' + index));
          });
        }
        locales[lang] = [array(locale.weekdays), split(1), split(2)];
        return core;
      }
      $define(PROTO + FORCED, DATE, {
        format: createFormat(false),
        formatUTC: createFormat(true)
      });
      addLocale(current, {
        weekdays: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday',
        months: 'January,February,March,April,May,June,July,August,September,October,November,December'
      });
      addLocale('ru', {
        weekdays: 'Воскресенье,Понедельник,Вторник,Среда,Четверг,Пятница,Суббота',
        months: 'Январ:я|ь,Феврал:я|ь,Март:а|,Апрел:я|ь,Ма:я|й,Июн:я|ь,' + 'Июл:я|ь,Август:а|,Сентябр:я|ь,Октябр:я|ь,Ноябр:я|ь,Декабр:я|ь'
      });
      core.locale = function(locale) {
        return has(locales, locale) ? current = locale : current;
      };
      core.addLocale = addLocale;
    }(/\b\w\w?\b/g, /:(.*)\|(.*)$/, {}, 'en', 'Seconds', 'Minutes', 'Hours', 'Month', 'FullYear');
    !function(console) {
      var $console = turn.call(array('assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,' + 'groupEnd,info,isIndependentlyComposed,log,markTimeline,profile,profileEnd,' + 'table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn'), function(memo, key) {
        var fn = console[key];
        memo[key] = function() {
          if (enabled && fn)
            return apply.call(fn, console, arguments);
        };
      }, {
        enable: function() {
          enabled = true;
        },
        disable: function() {
          enabled = false;
        }
      }),
          enabled = true;
      try {
        framework && delete global.console;
      } catch (e) {}
      $define(GLOBAL + FORCED, {console: assign($console.log, $console)});
    }(global.console || {});
  }(Function('return this'), true);
})(require("process"));
