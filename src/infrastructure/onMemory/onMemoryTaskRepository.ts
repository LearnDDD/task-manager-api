import { TaskRepository } from '@/application';
import { Task, TaskID } from '@/domain';
import { injectable } from 'inversify';

@injectable()
export class OnMemoryTaskRepository implements TaskRepository {
  private static serial: number = 1;
  private readonly map: Map<string, Task>;

  constructor() {
    this.map = new Map<string, Task>();
  }

  async generateID(): Promise<TaskID> {
    return new TaskID(String(OnMemoryTaskRepository.serial++));
  }

  async store(task: Task): Promise<Task> {
    this.map.set(task.id.value, task);
    return task;
  }
}
