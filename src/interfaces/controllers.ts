import { CreateTaskController } from "./task/createTaskController";
import container from './container';
import TYPES from './types';

export const createTaskController: CreateTaskController = container.get<CreateTaskController>(TYPES.CreateTaskController);
