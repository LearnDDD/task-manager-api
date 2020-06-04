import { TaskTypeRepository } from '@/application';
import { TaskTypeID } from '@/domain';
import { injectable } from 'inversify';

@injectable()
export class OnMemoryTaskTypeRepository implements TaskTypeRepository {
  async exists(taskTypeID: TaskTypeID): Promise<boolean> {
    return true;
  }
}
