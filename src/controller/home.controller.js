import Navbar from '../components/navbar';

/* eslint-disable arrow-body-style */
const Home = (() => {
  const homeElement = document.getElementById('home-wrapper');
  return {
    init() {
      homeElement.innerHTML = `
        ${Navbar}
      `;
    },
  };
})();
export default Home;
