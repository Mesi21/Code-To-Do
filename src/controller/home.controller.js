import Navbar from '../components/navbar';
import MainCard from '../components/main-card';
import state from '../state';

/* eslint-disable arrow-body-style */
const Home = (() => {
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
  };
})();
export default Home;
