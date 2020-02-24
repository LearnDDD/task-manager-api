import { TaskRepository } from '@/application';
import { TaskTypeID, TaskID, Task, ApplicationError } from '@/domain';
import { TaskTypeRepository } from '../taskType/taskTypeRepository';

export class NotFoundTaskTypeError extends ApplicationError { }

export class CreateTaskService {
  private readonly taskRepository: TaskRepository;
  private readonly taskTypeRepository: TaskTypeRepository;

  constructor(taskRepository: TaskRepository, taskTypeRepository: TaskTypeRepository) {
    this.taskRepository = taskRepository;
    this.taskTypeRepository = taskTypeRepository;
  }

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
