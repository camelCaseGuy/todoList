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

const classDefaults = {
  title: 'no title',
  description: 'no description',
  dueDate: 'no dueDate',
  priority: 'no priority',
  notes: 'no notes',
  checklist: 'no checklist',
}
class Item {
  constructor(options) {
    const {
      title,
      description,
      dueDate,
      priority,
      notes,
      checklist
    } = options;
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