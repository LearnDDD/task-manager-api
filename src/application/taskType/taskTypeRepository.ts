import { Task, TaskID, TaskTypeID, TaskType } from '@/domain';

export interface TaskTypeRepository {
  exists(taskTypeID: TaskTypeID): Promise<boolean>;
}
