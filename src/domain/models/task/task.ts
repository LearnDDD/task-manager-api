import { Entity, TaskTypeID } from 'src/domain';

export class TaskID {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
  }
}

export class Task implements Entity<Task> {
  readonly id: TaskID;
  readonly title: string;
  readonly description?: string;
  readonly taskTypeID?: TaskTypeID;
  readonly parentTaskID?: TaskID;

  constructor(id: TaskID, title: string, description?: string, taskTypeID?: TaskTypeID, parentTaskID?: TaskID) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.taskTypeID = taskTypeID;
    this.parentTaskID = parentTaskID;
  }

  public isSameIdentityAs(other: Task): boolean {
    return this.id === other.id;
  }
}
