import { Entity, TaskID } from 'src/domain';
import { Period } from './period';

export class LogID {
  private readonly value: string;

  constructor(value: string) {
    this.value = value;
  }
}

export class Log implements Entity<Log> {
  private readonly id: LogID;
  private readonly taskID: TaskID;
  private readonly period: Period;

  constructor(id: LogID, taskID: TaskID, period: Period) {
    this.id = id;
    this.taskID = taskID;
    this.period = period;
  }

  public isSameIdentityAs(other: Log): boolean {
    return this.id === other.id;
  }
}
