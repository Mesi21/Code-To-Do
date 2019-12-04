import state from '../state';
import Todo from '../model/todo';
import Project from '../model/project';

const Projects = (() => ({
  init() {
    state.init();
    if (!state.current.projects) {
      state.set('projects', []);
    }
  },
  refreshProjects() {
    state.set('projects', state.current.projects);
  },
  selectProject(projectIndex) {
    const that = this;
    const project = state.current.projects[projectIndex];
    return {
      addTodo(todo) {
        project.todos.push(new Todo(todo));
        that.refreshProjects();
      },
      deleteTodo(todoIndex) {
        project.todos.splice(todoIndex, 1);
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
}))();

export default Projects;
