export default class Todo {
  constructor(title, isCompleted = false) {
    this.title = title;
    this.isCompleted = isCompleted;
  }
}
