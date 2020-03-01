import { TaskRepository } from '@/application';
import { TaskTypeID, TaskID, Task, ApplicationError } from '@/domain';
import { TaskTypeRepository } from '../taskType/taskTypeRepository';
import { injectable, inject } from 'inversify';
import TYPES from '../types';

export class NotFoundTaskTypeError extends ApplicationError { }

@injectable()
export class CreateTaskService {
  @inject(TYPES.TaskRepository)
  private readonly taskRepository!: TaskRepository;
  @inject(TYPES.TaskTypeRepository)
  private readonly taskTypeRepository!: TaskTypeRepository;

  public async execute(title: string, description?: string, taskTypeID?: TaskTypeID, parentTaskID?: TaskID): Promise<Task> {
    let taskID: TaskID = await this.taskRepository.generateID();
    let task: Task = new Task(taskID, title, description, taskTypeID, parentTaskID);
    if (taskTypeID !== null && taskTypeID !== undefined) {
      if (!await this.taskTypeRepository.exists(taskTypeID)) {
        throw new NotFoundTaskTypeError('Not Found TaskType.', {'taskTypeID': taskTypeID});
      }
    }
    return this.taskRepository.store(task);
  }
}
