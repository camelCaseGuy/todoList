console.log('begin');

const classDefaults = {
  title: 'Default title',
  description: 'Default description',
  dueDate: 'Default dueDate',
  priority: 'Default priority',
  notes: 'Default notes',
  checklist: 'Default checklist',
}

class TodoList {
  constructor(options) {
    this.options = { ...classDefaults, ...options };
  }
}

class Project {
  constructor() {

  }

  lists = [];

  addList(list) {
    this.lists.push(list);
  }
}

const myProject = new Project();

const myTodoList = new TodoList({
  title: 'myTitle',
  description: 'myDescription',
  dueDate: 'myDueDate',
  priority: 'myPriority',
})

myProject.addList(myTodoList);

console.log(myTodoList);
console.log(myProject);

