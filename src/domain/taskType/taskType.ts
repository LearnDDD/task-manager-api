import { Entity } from '../entity';

export class TaskTypeID {
  private readonly value: string;

  constructor(value: string) {
    this.value = value;
  }
}

export class TaskType implements Entity<TaskType> {
  private readonly id: TaskTypeID;
  private readonly name: string;

  constructor(id: TaskTypeID, name: string) {
    this.id = id;
    this.name = name;
  }

  public isSameIdentityAs(other: TaskType): boolean {
    return this.id === other.id;
  }
}
