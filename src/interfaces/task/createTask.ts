import { TaskRepository, CreateTaskService, TaskTypeRepository, NotFoundTaskTypeError, LogLevel } from '@/application';
import * as Express from "express";
import { check, validationResult } from "express-validator";
import { map, TaskTypeID, TaskID, ApplicationError } from '@/domain';
import * as taskFormatter from './taskFormatter';
import { logger } from '@/infrastructure';

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

  constructor(taskRepository: TaskRepository, taskTypeRepository: TaskTypeRepository) {
    this.createTaskService = new CreateTaskService(taskRepository, taskTypeRepository);
  }

  public async execute(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const createdTask = await this.createTaskService.execute(
        req.body.title
        , req.body.description
        , map(e => new TaskTypeID(e), req.body.taskTypeID)
        , map(e => new TaskID(e), req.body.parentTaskID)
      ).then(taskFormatter.toJSON);
      return res.send(createdTask);
    } catch (error) {
      if (error instanceof NotFoundTaskTypeError) {
        logger.log(LogLevel.fatal
          , 'Task creation failed.'
          , error
          , {
            'title': req.body.title,
            'description': req.body.description,
            'taskTypeID': req.body.taskTypeID,
            'parentTaskID': req.body.parentTaskID,
          });
        return res.status(400).json({ error: error.message });
      }
      logger.log(LogLevel.fatal, 'Task creation failed.', error);
      return res.status(500).json({ error: error.message });
    }
  }
}
