import { Project } from "./Project";
import { TodoList } from "./TodoList";

const myProject = new Project();

const myTodoList = new TodoList({
  title: 'myTitle',
  description: 'myDescription',
  dueDate: 'myDueDate',
  priority: 'myPriority',
})

myProject.addList(myTodoList);

console.log('myTodoList', myTodoList);
console.log('myProject', myProject);
