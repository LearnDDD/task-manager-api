import { Task, ifPresent } from '@/domain';

export function toJSON(task: Task): {} {
  let json = new Map();
  json.set('id', task.id.value);
  json.set('title', task.title);
  ifPresent(e => json.set('description', e), task.description);
  ifPresent(e => json.set('taskTypeID', e.value), task.taskTypeID);
  ifPresent(e => json.set('parentTaskID', e.value), task.parentTaskID);
  return Array.from(json.entries())
    .reduce(
      (main, [key, value]) => ({ ...main, [key]: value })
      , {});
}
