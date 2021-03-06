import Navbar from '../components/navbar';
import MainCard from '../components/main-card';
import state from '../state';
import projectItem from '../components/project-item';
import todoItem from '../components/todo-item';

const UI = (() => {
  const mainCardElement = document.getElementById('mc');
  const navbarElement = document.getElementById('nb');

  return {
    init() {
      navbarElement.innerHTML = Navbar();
      mainCardElement.innerHTML = MainCard();
    },
    refresh: {
      projects() {
        const projectsList = document.getElementById('project-list');
        projectsList.innerHTML = state
          .get('projects')
          .map((project, index) => projectItem(project.title, index))
          .join('');
      },
      todos() {
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = state
          .get('projects')[state.get('selectedProject')]
          .todos.map((todo, index) => todoItem(todo, index))
          .join('');
      },
      navStatus() {
        const navStatus = document.getElementById('nav-status');
        navStatus.innerHTML = state.get('projects')[
          state.get('selectedProject')
        ].title;
      },
      all() {
        this.projects();
        this.todos();
        this.navStatus();
      },
    },
    editInit({ title, description, deadlineDate }, todoIndex) {
      document.getElementById('todo-input').value = title;
      document.getElementById('todo-description-input').value = description;
      document.getElementById('todo-deadline-input').value = deadlineDate;
      document.getElementById('add-todo-btn').name = `edit-${todoIndex}`;
    },
  };
})();
export default UI;
