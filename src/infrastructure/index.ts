import { Logger } from '@/application';
import { Log4JSLogger } from './log4js/logging';
export * from './mysql/types';

export let logger: Logger = new Log4JSLogger();
