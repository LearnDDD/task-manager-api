import { ApplicationError } from '@/domain';

export enum LogLevel {
  fatal,
  error,
  warn,
  info,
  debug,
  trace,
}

export interface Logger {
  log(level: LogLevel, message?: string, error?: ApplicationError, data?: object): void;
}
