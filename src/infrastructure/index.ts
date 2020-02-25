import { OnMemoryTaskRepository } from './onMemory/onMemoryTaskRepository';
import { OnMemoryTaskTypeRepository } from './onMemory/onMemoryTaskTypeRepository';
import { TaskRepository, TaskTypeRepository, Logger } from '@/application';
import { Log4JSLogger } from './log4js/logging';

export let logger: Logger = new Log4JSLogger();

export let taskRepository: TaskRepository = OnMemoryTaskRepository.create();
export let taskTypeRepository: TaskTypeRepository = new OnMemoryTaskTypeRepository();
