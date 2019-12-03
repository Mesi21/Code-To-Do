import Navbar from '../components/navbar';
import MainCard from '../components/main-card';
import state from '../state';

/* eslint-disable arrow-body-style */
const UI = (() => {
  const homeElement = document.getElementById('home-wrapper');
  state.init();
  if (!state.get('projects')) {
    state.set('projects', []);
  }
  return {
    init() {
      homeElement.innerHTML = `
        ${Navbar}
        ${MainCard}
      `;
    },
    addProject(project) {
      state.current.projects.push(project);
      state.set('projects', state.current.projects);
    },
    deleteProject(index) {
      state.current.projects.splice(index, 1);
      state.set('projects', state.current.projects);
    }
  };
})();
export default UI;
