/* */ 
"format register";
export class ConsoleAppender {
  constructor(){}

  debug(logger, message, ...rest){
    console.debug(`DEBUG [${logger.id}] ${message}`, ...rest);
  }

  info(logger, message, ...rest){
    console.info(`INFO [${logger.id}] ${message}`, ...rest);
  }

  warn(logger, message, ...rest){
    console.warn(`WARN [${logger.id}] ${message}`, ...rest);
  }

  error(logger, message, ...rest){
    console.error(`ERROR [${logger.id}] ${message}`, ...rest);
  }
}