import log4js from 'log4js';
import { Logger, LogLevel } from '@/application';
import { ApplicationError } from '@/domain';

log4js.configure({
  appenders: {
    out: {
      type: 'stdout',
    },
    logFile: {
      type: 'dateFile',
      filename: 'logs/application_',
      pattern: 'yyyyMMdd.log',
      alwaysIncludePattern: 'true',
    },
    errFile: {
      type: 'dateFile',
      filename: 'logs/error_',
      pattern: 'yyyyMMdd.log',
      alwaysIncludePattern: 'true',
    },
    log: {
      type: 'logLevelFilter',
      appender: 'logFile',
      level: 'info',
    },
    err: {
      type: 'logLevelFilter',
      appender: 'errFile',
      level: 'warn',
    },
  },
  categories: {
    default: {
      appenders: ['out', 'log', 'err'],
      level: 'all',
      enableCallStack: true
    }
  }
})

export class Log4JSLogger implements Logger {
  private readonly logger: log4js.Logger;

  constructor() {
    this.logger = log4js.getLogger();
  }

  private format(message?: string, error?: ApplicationError, data?: object): string {
    const json: Map<string, any> = new Map();
    if (message !== null && message !== undefined) {
      json.set('Message', message);
    }
    if (error !== null && error !== undefined) {
      const errorJson: Map<string, any> = new Map();
      errorJson.set('Type', error.name);
      errorJson.set('Message', error.message);
      if (error.datas !== null && error.datas !== undefined) {
        errorJson.set('Datas', error.datas);
      };
      errorJson.set('Stack', error.stack);
      json.set('Error', Object.fromEntries(errorJson));
    }
    if (data !== null && data !== undefined) {
      json.set('Data', data);
    }
    return JSON.stringify(Object.fromEntries(json));
  }

  log(level: LogLevel, message?: string, error?: ApplicationError, data?: object) {
    const line: string = this.format(message, error, data);

    switch (level) {
      case LogLevel.fatal:
        this.logger.fatal(line);
        break;
      case LogLevel.error:
        this.logger.error(line);
        break;
      case LogLevel.warn:
        this.logger.warn(line);
        break;
      case LogLevel.info:
        this.logger.info(line);
        break;
      case LogLevel.debug:
        this.logger.debug(line);
        break;
      case LogLevel.trace:
        this.logger.trace(line);
        break;
      default:
        this.logger.fatal(`Unknown LogLevel "${level}".`);
        this.logger.fatal(line);
    }
  }
}
