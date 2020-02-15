import { Entity, TaskTypeID } from 'src/domain';

export class TaskID {
  private readonly value: string;

  constructor(value: string) {
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }
}

export class Task implements Entity<Task> {
  private readonly id: TaskID;
  private readonly title: string;
  private readonly description: string;
  private readonly taskTypeID: TaskTypeID;
  private readonly parentTaskID: TaskID;

  constructor(id: TaskID, title: string, description: string, taskTypeID: TaskTypeID, parentTaskID: TaskID) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.taskTypeID = taskTypeID;
    this.parentTaskID = parentTaskID;
  }

  getID(): TaskID {
    return this.id;
  }

  public isSameIdentityAs(other: Task): boolean {
    return this.id === other.id;
  }
}
