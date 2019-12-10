export default class Todo {
  constructor(title, description, deadlineDate, isHighPriority = false, isCompleted = false) {
    this.title = title;
    this.description = description;
    this.deadlineDate = deadlineDate;
    this.isHighPriority = isHighPriority;
    this.isCompleted = isCompleted;
  }
}
