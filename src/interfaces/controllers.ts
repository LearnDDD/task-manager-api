import { CreateTaskController } from "./task/createTaskController";
import container from './container';
import TYPES from './types';
import { ConfigController } from './config/configController';

export const configController: ConfigController = container.get<ConfigController>(TYPES.ConfigController);
export const createTaskController: CreateTaskController = container.get<CreateTaskController>(TYPES.CreateTaskController);
