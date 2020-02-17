import { TaskRepository } from '@/application';
import { Task, TaskID } from '@/domain';

export class OnMemoryTaskRepository implements TaskRepository {
  private static serial: number = 1;
  private readonly map: Map<string, Task>;

  constructor(map: Map<string, Task>) {
    this.map = map;
  }

  public static create(): OnMemoryTaskRepository {
    return new OnMemoryTaskRepository(new Map<string, Task>());
  }

  async generateID(): Promise<TaskID> {
    return new TaskID(String(OnMemoryTaskRepository.serial++));
  }

  async store(task: Task): Promise<Task> {
    this.map.set(task.id.value, task);
    return task;
  }
}
