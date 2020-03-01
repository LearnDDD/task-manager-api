const TYPES = {
  TaskRepository: Symbol.for('TaskRepository'),
  TaskTypeRepository: Symbol.for('TaskTypeRepository'),

  CreateTaskService: Symbol.for('CreateTaskService'),
} as const;

export default TYPES;
