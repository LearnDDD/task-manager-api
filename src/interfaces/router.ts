import express from 'express';
import * as Infra from '@/infrastructure';
import { TaskController } from './task/taskController';

let router = express.Router()

const taskController = new TaskController(Infra.onMemoryTaskRepository);
router.get('/task', taskController.createTask)

export default router
