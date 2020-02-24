import { TaskTypeRepository } from '@/application';
import { TaskType, TaskTypeID } from '@/domain';

export class OnMemoryTaskTypeRepository implements TaskTypeRepository {
  async exists(taskTypeID: TaskTypeID): Promise<boolean> {
    return false;
  }
}
