import { TaskRepository, CreateTaskService } from '@/application';
import * as Express from "express";
import { check, validationResult } from "express-validator";
import { map, TaskTypeID, TaskID } from '@/domain';
import * as taskFormatter from './taskFormatter';

export const validator = [
  check('title')
    .exists({ checkNull: true }).withMessage('title not exists.')
    .isString().withMessage('title not string.')
    .notEmpty().withMessage('title is empty.'),
  check('description')
    .optional({ nullable: true })
    .isString().withMessage('description not string.')
    .notEmpty().withMessage('description is empty.'),
  check('taskTypeID')
    .optional({ nullable: true })
    .isString().withMessage('taskTypeID not string.')
    .notEmpty().withMessage('taskTypeID is empty.'),
  check('parentTaskID')
    .optional({ nullable: true })
    .isString().withMessage('parentTaskID not string.')
    .notEmpty().withMessage('parentTaskID is empty.'),
]

export class CreateTaskController {
  private readonly createTaskService: CreateTaskService;

  constructor(repository: TaskRepository) {
    this.createTaskService = new CreateTaskService(repository);
  }

  public async execute(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const createdTask = await this.createTaskService.execute(
      req.body.title
      , req.body.description
      , map(e => new TaskTypeID(e), req.body.taskTypeID)
      , map(e => new TaskID(e), req.body.parentTaskID)
    ).then(taskFormatter.toJSON);
    res.send(createdTask);
  }
}
