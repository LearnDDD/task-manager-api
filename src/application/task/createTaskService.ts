import { TaskRepository } from '@/application';
import { TaskTypeID, TaskID, Task } from '@/domain';

export class CreateTaskService {
  private readonly taskRepository: TaskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  public async execute(title: string, description: string, taskTypeID: TaskTypeID, parentTaskID: TaskID): Promise<Task> {
    let taskID: TaskID = await this.taskRepository.generateID();
    let task: Task = new Task(taskID, title, description, taskTypeID, parentTaskID);
    return this.taskRepository.store(task);
  }
}
