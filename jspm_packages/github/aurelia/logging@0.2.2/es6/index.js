/* */ 
"format register";
/**
 * This library is part of the Aurelia platform and contains a minimal but effective logging mechanism
 * with support for log levels and pluggable log appenders.
 *
 * @module logging
 */

 /**
 * Enum specifying the levels of the logger
 * 
 * @property levels
 * @type Enum
 * @for export
 */
export var levels = {
  none: 0,
  error:1,
  warn:2,
  info:3,
  debug:4
};

var loggers = {}, 
    logLevel = levels.none,
    appenders = [],
    slice = Array.prototype.slice,
    loggerConstructionKey = {};

function log(logger, level, args){
  var i = appenders.length, 
          current;

  args = slice.call(args);
  args.unshift(logger);

  while(i--) {
    current = appenders[i];
    current[level].apply(current, args);
  }
}

function debug(){
  if(logLevel < 4){
    return;
  }

  log(this, 'debug', arguments);
}

function info(){
  if(logLevel < 3){
    return;
  }

  log(this, 'info', arguments);
}

function warn(){
  if(logLevel < 2){
    return;
  }

  log(this, 'warn', arguments);
}

function error(){
  if(logLevel < 1){
    return;
  }

  log(this, 'error', arguments);
}

function connectLogger(logger){
  logger.debug = debug;
  logger.info = info;
  logger.warn = warn;
  logger.error = error;
}

function createLogger(id){
  var logger = new Logger(id, loggerConstructionKey);

  if(appenders.length) {
    connectLogger(logger);  
  }

  return logger;
}

﻿/**
 * Gets an instance of a logger by the Id used when creating.
 *
 * @method getLogger
 * @param {string} id The id of the logger you wish to get an instance of.
 * @return {Logger} The instance of the logger, or creates a new logger if none exists for that Id.
 * @for export
 */
export function getLogger(id){
  return loggers[id] || (loggers[id] = createLogger(id));
}

/**
 * Adds an appender capable of processing logs and channeling them to an output.
 *
 * @method addAppender
 * @param {Object} appender An appender instance to begin processing logs with.
 * @for export
 */
export function addAppender(appender){
  appenders.push(appender);

  if(appenders.length === 1){
    for(var key in loggers){
      connectLogger(loggers[key]);
    }
  }
}

﻿/**
 * Sets the level of the logging for the application loggers
 *
 * @method setLevel
 * @param {Number} level Matches an enum specifying the level of logging.
 * @for export
 */
export function setLevel(level){
  logLevel = level;
}

/**
* The logger is essentially responsible for having log statements that appear during debugging but are squelched
* when using the build tools, depending on the log level that is set.  The available levels are -
* 1. none
* 2. error
* 3. warn
* 4. info
* 5. debug
*
* You cannot instantiate the logger directly - you must use the getLogger method instead.
*
* @class Logger
* @constructor
*/
export class Logger {
  constructor(id, key){
    if(key !== loggerConstructionKey){
      throw new Error('You cannot instantiate "Logger". Use the "getLogger" API instead.');
    }

    this.id = id;
  }

  /**
   * Logs a debug message.
   *
   * @method debug
   * @param {string} message The message to log
   */
  debug(){}

  /**
   * Logs info.
   *
   * @method info
   * @param {string} message The message to log
   */
  info(){}

  /**
   * Logs a warning.
   *
   * @method warn
   * @param {string} message The message to log
   */
  warn(){}

  /**
   * Logs an error.
   *
   * @method error
   * @param {string} message The message to log
   */
  error(){}
}