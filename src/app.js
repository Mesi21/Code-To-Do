import './style/style.scss';
import UI from './controller/ui.controller';

UI.init();

const burgerBtn = document.getElementById('burger-btn');
const menuWrapperElement = document.getElementById('menu-wrapper');

burgerBtn.addEventListener('click', event => {
  const isExpanded = 'is-menu-expanded';
  const currentState = menuWrapperElement.className;
  if (currentState === isExpanded) {
    menuWrapperElement.className = '';
  } else {
    menuWrapperElement.className = 'is-menu-expanded';
  }
  event.preventDefault();
});
