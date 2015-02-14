/* */ 
System.register(["./dsl"], function (_export) {
  "use strict";

  var map, specials, escapeRegex, oCreate, RouteRecognizer;


  function isArray(test) {
    return Object.prototype.toString.call(test) === "[object Array]";
  }

  function StaticSegment(string) {
    this.string = string;
  }


  function DynamicSegment(name) {
    this.name = name;
  }


  function StarSegment(name) {
    this.name = name;
  }


  function EpsilonSegment() {}


  function parse(route, names, types) {
    if (route.charAt(0) === "/") {
      route = route.substr(1);
    }

    var segments = route.split("/"),
        results = [];

    for (var i = 0, l = segments.length; i < l; i++) {
      var segment = segments[i],
          match;

      if (match = segment.match(/^:([^\/]+)$/)) {
        results.push(new DynamicSegment(match[1]));
        names.push(match[1]);
        types.dynamics++;
      } else if (match = segment.match(/^\*([^\/]+)$/)) {
        results.push(new StarSegment(match[1]));
        names.push(match[1]);
        types.stars++;
      } else if (segment === "") {
        results.push(new EpsilonSegment());
      } else {
        results.push(new StaticSegment(segment));
        types.statics++;
      }
    }

    return results;
  }

  function State(charSpec) {
    this.charSpec = charSpec;
    this.nextStates = [];
  }

  function sortSolutions(states) {
    return states.sort(function (a, b) {
      if (a.types.stars !== b.types.stars) {
        return a.types.stars - b.types.stars;
      }

      if (a.types.stars) {
        if (a.types.statics !== b.types.statics) {
          return b.types.statics - a.types.statics;
        }
        if (a.types.dynamics !== b.types.dynamics) {
          return b.types.dynamics - a.types.dynamics;
        }
      }

      if (a.types.dynamics !== b.types.dynamics) {
        return a.types.dynamics - b.types.dynamics;
      }
      if (a.types.statics !== b.types.statics) {
        return b.types.statics - a.types.statics;
      }

      return 0;
    });
  }

  function recognizeChar(states, ch) {
    var nextStates = [];

    for (var i = 0, l = states.length; i < l; i++) {
      var state = states[i];

      nextStates = nextStates.concat(state.match(ch));
    }

    return nextStates;
  }

  function RecognizeResults(queryParams) {
    this.queryParams = queryParams || {};
  }


  function findHandler(state, path, queryParams) {
    var handlers = state.handlers,
        regex = state.regex;
    var captures = path.match(regex),
        currentCapture = 1;
    var result = new RecognizeResults(queryParams);

    for (var i = 0, l = handlers.length; i < l; i++) {
      var handler = handlers[i],
          names = handler.names,
          params = {};

      for (var j = 0, m = names.length; j < m; j++) {
        params[names[j]] = captures[currentCapture++];
      }

      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
    }

    return result;
  }

  function addSegment(currentState, segment) {
    segment.eachChar(function (ch) {
      var state;

      currentState = currentState.put(ch);
    });

    return currentState;
  }

  return {
    setters: [function (_dsl) {
      map = _dsl.map;
    }],
    execute: function () {
      specials = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\"];
      escapeRegex = new RegExp("(\\" + specials.join("|\\") + ")", "g");
      StaticSegment.prototype = {
        eachChar: function (callback) {
          var string = this.string,
              ch;

          for (var i = 0, l = string.length; i < l; i++) {
            ch = string.charAt(i);
            callback({ validChars: ch });
          }
        },

        regex: function () {
          return this.string.replace(escapeRegex, "\\$1");
        },

        generate: function () {
          return this.string;
        }
      };DynamicSegment.prototype = {
        eachChar: function (callback) {
          callback({ invalidChars: "/", repeat: true });
        },

        regex: function () {
          return "([^/]+)";
        },

        generate: function (params) {
          return params[this.name];
        }
      };StarSegment.prototype = {
        eachChar: function (callback) {
          callback({ invalidChars: "", repeat: true });
        },

        regex: function () {
          return "(.+)";
        },

        generate: function (params) {
          return params[this.name];
        }
      };EpsilonSegment.prototype = {
        eachChar: function () {},
        regex: function () {
          return "";
        },
        generate: function () {
          return "";
        }
      };State.prototype = {
        get: function (charSpec) {
          var nextStates = this.nextStates;

          for (var i = 0, l = nextStates.length; i < l; i++) {
            var child = nextStates[i];

            var isEqual = child.charSpec.validChars === charSpec.validChars;
            isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;

            if (isEqual) {
              return child;
            }
          }
        },

        put: function (charSpec) {
          var state;

          if (state = this.get(charSpec)) {
            return state;
          }

          state = new State(charSpec);

          this.nextStates.push(state);

          if (charSpec.repeat) {
            state.nextStates.push(state);
          }

          return state;
        },
        match: function (ch) {
          var nextStates = this.nextStates,
              child,
              charSpec,
              chars;

          var returned = [];

          for (var i = 0, l = nextStates.length; i < l; i++) {
            child = nextStates[i];

            charSpec = child.charSpec;

            if (typeof (chars = charSpec.validChars) !== "undefined") {
              if (chars.indexOf(ch) !== -1) {
                returned.push(child);
              }
            } else if (typeof (chars = charSpec.invalidChars) !== "undefined") {
              if (chars.indexOf(ch) === -1) {
                returned.push(child);
              }
            }
          }

          return returned;
        }

      };

      oCreate = Object.create || function (proto) {
        var F = function () {};

        F.prototype = proto;
        return new F();
      };
      RecognizeResults.prototype = oCreate({
        splice: Array.prototype.splice,
        slice: Array.prototype.slice,
        push: Array.prototype.push,
        length: 0,
        queryParams: null
      });RouteRecognizer = _export("RouteRecognizer", function () {
        this.rootState = new State();
        this.names = {};
      });



      RouteRecognizer.prototype = {
        add: function (routes, options) {
          var currentState = this.rootState,
              regex = "^",
              types = { statics: 0, dynamics: 0, stars: 0 },
              handlers = [],
              allSegments = [],
              name;

          var isEmpty = true;

          for (var i = 0, l = routes.length; i < l; i++) {
            var route = routes[i],
                names = [];

            var segments = parse(route.path, names, types);

            allSegments = allSegments.concat(segments);

            for (var j = 0, m = segments.length; j < m; j++) {
              var segment = segments[j];

              if (segment instanceof EpsilonSegment) {
                continue;
              }

              isEmpty = false;

              currentState = currentState.put({ validChars: "/" });
              regex += "/";

              currentState = addSegment(currentState, segment);
              regex += segment.regex();
            }

            var handler = { handler: route.handler, names: names };
            handlers.push(handler);
          }

          if (isEmpty) {
            currentState = currentState.put({ validChars: "/" });
            regex += "/";
          }

          currentState.handlers = handlers;
          currentState.regex = new RegExp(regex + "$");
          currentState.types = types;

          if (name = options && options.as) {
            this.names[name] = {
              segments: allSegments,
              handlers: handlers
            };
          }
        },

        handlersFor: function (name) {
          var route = this.names[name],
              result = [];
          if (!route) {
            throw new Error("There is no route named " + name);
          }

          for (var i = 0, l = route.handlers.length; i < l; i++) {
            result.push(route.handlers[i]);
          }

          return result;
        },

        hasRoute: function (name) {
          return !!this.names[name];
        },

        generate: function (name, params) {
          var route = this.names[name],
              output = "";
          if (!route) {
            throw new Error("There is no route named " + name);
          }

          var segments = route.segments;

          for (var i = 0, l = segments.length; i < l; i++) {
            var segment = segments[i];

            if (segment instanceof EpsilonSegment) {
              continue;
            }

            output += "/";
            output += segment.generate(params);
          }

          if (output.charAt(0) !== "/") {
            output = "/" + output;
          }

          if (params && params.queryParams) {
            output += this.generateQueryString(params.queryParams, route.handlers);
          }

          return output;
        },

        generateQueryString: function (params, handlers) {
          var pairs = [];
          var keys = [];
          for (var key in params) {
            if (params.hasOwnProperty(key)) {
              keys.push(key);
            }
          }
          keys.sort();
          for (var i = 0, len = keys.length; i < len; i++) {
            key = keys[i];
            var value = params[key];
            if (value === null) {
              continue;
            }
            var pair = encodeURIComponent(key);
            if (isArray(value)) {
              for (var j = 0, l = value.length; j < l; j++) {
                var arrayPair = key + "[]" + "=" + encodeURIComponent(value[j]);
                pairs.push(arrayPair);
              }
            } else {
              pair += "=" + encodeURIComponent(value);
              pairs.push(pair);
            }
          }

          if (pairs.length === 0) {
            return "";
          }

          return "?" + pairs.join("&");
        },

        parseQueryString: function (queryString) {
          var pairs = queryString.split("&"),
              queryParams = {};
          for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split("="),
                key = decodeURIComponent(pair[0]),
                keyLength = key.length,
                isArray = false,
                value;
            if (pair.length === 1) {
              value = "true";
            } else {
              if (keyLength > 2 && key.slice(keyLength - 2) === "[]") {
                isArray = true;
                key = key.slice(0, keyLength - 2);
                if (!queryParams[key]) {
                  queryParams[key] = [];
                }
              }
              value = pair[1] ? decodeURIComponent(pair[1]) : "";
            }
            if (isArray) {
              queryParams[key].push(value);
            } else {
              queryParams[key] = value;
            }
          }
          return queryParams;
        },

        recognize: function (path) {
          var states = [this.rootState],
              pathLen,
              i,
              l,
              queryStart,
              queryParams = {},
              isSlashDropped = false;

          queryStart = path.indexOf("?");
          if (queryStart !== -1) {
            var queryString = path.substr(queryStart + 1, path.length);
            path = path.substr(0, queryStart);
            queryParams = this.parseQueryString(queryString);
          }

          path = decodeURI(path);

          if (path.charAt(0) !== "/") {
            path = "/" + path;
          }

          pathLen = path.length;
          if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
            path = path.substr(0, pathLen - 1);
            isSlashDropped = true;
          }

          for (i = 0, l = path.length; i < l; i++) {
            states = recognizeChar(states, path.charAt(i));
            if (!states.length) {
              break;
            }
          }

          var solutions = [];
          for (i = 0, l = states.length; i < l; i++) {
            if (states[i].handlers) {
              solutions.push(states[i]);
            }
          }

          states = sortSolutions(solutions);

          var state = solutions[0];

          if (state && state.handlers) {
            if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
              path = path + "/";
            }
            return findHandler(state, path, queryParams);
          }
        }
      };

      RouteRecognizer.prototype.map = map;
    }
  };
});