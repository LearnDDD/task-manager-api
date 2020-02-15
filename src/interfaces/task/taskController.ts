import { TaskRepository, CreateTaskService } from '@/application';
import * as Express from "express";

export class TaskController {
  private readonly repository: TaskRepository;
  private readonly createTaskService: CreateTaskService;

  constructor(repository: TaskRepository) {
    this.repository = repository;
    this.createTaskService = new CreateTaskService(repository);
  }

  public createTask(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
    res.send("Hello World !!");
  }
}
