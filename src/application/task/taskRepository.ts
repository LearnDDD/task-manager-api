import { Task, TaskID } from '@/domain';

export interface TaskRepository {
  generateID(): Promise<TaskID>;
  store(task: Task): Promise<Task>;
}
