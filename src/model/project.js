export default class Project {
  constructor(title, todos = []) {
    this.title = title;
    this.todos = todos;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }
}
