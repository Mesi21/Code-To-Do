/* eslint-disable import/no-unresolved */
import { format } from 'date-fns';
import state from '../state';
import Todo from '../model/todo';
import Project from '../model/project';

const Projects = (() => ({
  init() {
    if (!state.current.projects) {
      state.set('projects', []);
      state.set('selectedProject', 0);
      this.firstProject();
    }
  },
  firstProject() {
    this.addProject('First Project');
    this.selectProject(0).addTodo([
      'First todo',
      'first decription',
      format(new Date(2020, 1, 11), 'MM/dd/yyyy'),
    ]);
  },
  refreshProjects() {
    state.set('projects', state.current.projects);
  },
  selectProject(projectIndex) {
    state.set('selectedProject', projectIndex);
    const that = this;
    const project = state.current.projects[projectIndex];
    return {
      addTodo([todo, decription, deadlineDate]) {
        project.todos.push(new Todo(todo, decription, deadlineDate));
        that.refreshProjects();
      },
      getTodo(todoIndex) {
        return project.todos[todoIndex];
      },
      updateTodo([todo, description, deadlineDate], todoIndex) {
        const currentTodo = project.todos[todoIndex];
        project.todos[todoIndex] = {
          ...currentTodo, todo, description, deadlineDate,
        };
        that.refreshProjects();
      },
      deleteTodo(todoIndex) {
        project.todos.splice(todoIndex, 1);
        that.refreshProjects();
      },
      toggleTodoCompleted(todoIndex) {
        const currentState = project.todos[todoIndex].isCompleted;
        project.todos[todoIndex].isCompleted = !currentState;
        that.refreshProjects();
      },
      toggleTodoPriority(todoIndex) {
        const currentState = project.todos[todoIndex].isHighPriority;
        project.todos[todoIndex].isHighPriority = !currentState;
        that.refreshProjects();
      },
      delete() {
        state.current.projects.splice(projectIndex, 1);
        that.refreshProjects();
      },
    };
  },
  addProject(project) {
    state.current.projects.push(new Project(project));
    this.refreshProjects();
  },
  length() {
    return state.get('projects').length;
  },
  isThereAnyProject() {
    return this.length() > 0;
  },
}))();

export default Projects;
