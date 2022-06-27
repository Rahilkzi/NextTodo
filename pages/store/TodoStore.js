import { action, computed, makeAutoObservable, observable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { v4 as uuidv4 } from 'uuid';


const isBrowser = typeof window !== 'undefined';

class TodoStore {
  // initialize an array of list ToDo objects
  todos = [];



  // makeAutoObservable makes all properties observable by default
  constructor() {
    makeAutoObservable(this, {
      todos: observable,
      addTodo: action,
      completeTodo: action,
      info: computed
    });

  // makes store persistable
    makePersistable(this, {
      name: 'TodoStore',
      properties: ['todos'],
      debugMode: true,
      storage: isBrowser ? localStorage : undefined
    })
  };

  // store in mobx is mutable, so just push a new task into it
  addTodo(todo) {
    console.log(`create`)
    this.todos.push({ ...todo, id: uuidv4() });
  };

  // delete the task by id, the filtered array by id
  deleteTodo(id) {
    console.log(`delete`)
    this.todos = this.todos.filter(todo => todo.id !== id)
  };

  // set the completed task to true or false otherwise
  completeTodo(id) {
    console.log(`complete`)
    this.todos = this.todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  };

}


export default new TodoStore();