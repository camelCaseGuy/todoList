console.log('welcome');

const item = (options) => {
  const title = options.title || 'no title';
  const description = options.description || 'no description';
  const dueDate = options.dueDate || 'no dueDate';
  const priority = options.priority || 'no priority';
  const notes = options.notes || 'no notes';
  const checklist = options.checklist || 'no checklist';
  return { title, description, dueDate, priority, notes, checklist }
}

const list = (name) => {
  const name = name;
  let list = [];
  const setList = (list) => {
    list = list;
  }
  return { name };
}

class Item {
  constructor(options) {
    title = options.title || 'no title';
    description = options.description || 'no description';
    dueDate = options.dueDate || 'no dueDate';
    priority = options.priority || 'no priority';
    notes = options.notes || 'no notes';
    checklist = options.checklist || 'no checklist';
  }
}

class List {
  constructor(items){
    this._list = items;
  }
  _list = [];
}

const defaultOptions = () => {
  
}

const defaultList = new List();