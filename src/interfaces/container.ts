import { TaskRepository, TaskTypeRepository, CreateTaskService } from '@/application';
import * as applicationTypes from '@/application/types';
import { OnMemoryTaskRepository } from '@/infrastructure/onMemory/onMemoryTaskRepository';
import { OnMemoryTaskTypeRepository } from '@/infrastructure/onMemory/onMemoryTaskTypeRepository';
import * as interfacesTypes from '@/interfaces/types';
import { Container } from 'inversify';
import { CreateTaskController } from './task/createTaskController';

const container = new Container();
container
  .bind<TaskRepository>(applicationTypes.default.TaskRepository)
  .to(OnMemoryTaskRepository);
container
  .bind<TaskTypeRepository>(applicationTypes.default.TaskTypeRepository)
  .to(OnMemoryTaskTypeRepository);
container
  .bind<CreateTaskService>(applicationTypes.default.CreateTaskService)
  .to(CreateTaskService);
container
  .bind<CreateTaskController>(interfacesTypes.default.CreateTaskController)
  .to(CreateTaskController);

export default container;
