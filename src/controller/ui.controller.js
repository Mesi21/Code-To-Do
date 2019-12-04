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
      state.set('selectedProject', 0);
      navbarElement.innerHTML = Navbar();
      mainCardElement.innerHTML = MainCard();
    },
    refresh: {
      projects() {
        const projectsList = document.getElementById('project-list');
        projectsList.innerHTML = state
          .get('projects')
          .map(project => projectItem(project.title))
          .join('');
      },
      todos() {
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = state
          .get('projects')[state.get('selectedProject')]
          .todos
          .map(i => todoItem(i.title))
          .join('');
      },
      all() {
        navbarElement.innerHTML = Navbar();
        mainCardElement.innerHTML = MainCard();
      },
    },
  };
})();
export default UI;
