import Navbar from '../components/navbar';
import MainCard from '../components/main-card';
import Projects from './projects.controller';

const UI = (() => {
  const homeElement = document.getElementById('home-wrapper');
  Projects.init();
  return {
    init() {
      homeElement.innerHTML = `
        ${Navbar}
        ${MainCard}
      `;
    },
  };
})();
export default UI;
