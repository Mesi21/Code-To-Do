import Navbar from '../components/navbar';
import MainCard from '../components/main-card';

/* eslint-disable arrow-body-style */
const Home = (() => {
  const homeElement = document.getElementById('home-wrapper');
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
