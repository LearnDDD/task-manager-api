import { TaskRepository, TaskTypeRepository, CreateTaskService } from '@/application';
import * as applicationTypes from '@/application/types';
import { OnMemoryTaskRepository } from '@/infrastructure/onMemory/onMemoryTaskRepository';
import { OnMemoryTaskTypeRepository } from '@/infrastructure/onMemory/onMemoryTaskTypeRepository';
import * as interfacesTypes from '@/interfaces/types';
import * as infrastructureTypes from '@/infrastructure/mysql/types';
import { Container } from 'inversify';
import { CreateTaskController } from './task/createTaskController';
import { ConfigController } from './config/configController';
import { Config } from './config';
import { MySQLConnectionFactory } from '@/infrastructure/mysql/mySQLConnectionFactory';
import { Connection } from 'mysql';
import { MySQLTaskRepository } from '@/infrastructure/mysql/mySQLTaskRepository';

const config = Config.load();
const mySQLConnection = new MySQLConnectionFactory(config).create();
const container = new Container();

container
  .bind<Config>(interfacesTypes.default.Config)
  .toConstantValue(config);
container
  .bind<Connection>(infrastructureTypes.default.Connection)
  .toConstantValue(mySQLConnection);
container
  .bind<ConfigController>(interfacesTypes.default.ConfigController)
  .to(ConfigController);
container
  .bind<TaskRepository>(applicationTypes.default.TaskRepository)
  .to(MySQLTaskRepository);
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
