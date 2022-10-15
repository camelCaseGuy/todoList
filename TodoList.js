const classDefaults = {
  title: 'Default title',
  description: 'Default description',
  dueDate: 'Default dueDate',
  priority: 'Default priority',
  notes: 'Default notes',
  checklist: 'Default checklist',
}

export class TodoList {
  constructor(options) {
    this.options = { ...classDefaults, ...options };
  }
}
