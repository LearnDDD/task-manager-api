import express from 'express';
import * as Infra from '@/infrastructure';
import { validator, CreateTaskController } from './task/createTask';

let router = express.Router()

const createTaskController = new CreateTaskController(Infra.onMemoryTaskRepository, Infra.onMemoryTaskTypeRepository);
router.post('/task/create', validator, createTaskController.execute.bind(createTaskController));

export default router
