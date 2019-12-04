import Navbar from '../components/navbar';
import MainCard from '../components/main-card';

const UI = (() => {
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
export default UI;
