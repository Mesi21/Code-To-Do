import './style/style.scss';
import UI from './controller/ui.controller';
import Projects from './controller/projects.controller';
import state from './state';

state.init();
Projects.init();
UI.init();

const burgerBtn = document.getElementById('burger-btn');
const menuWrapperElement = document.getElementById('menu-wrapper');
const projectAddBtn = document.getElementById('project-add-btn');
const todoAddBtn = document.getElementById('add-todo-btn');

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

projectAddBtn.addEventListener('click', event => {
  Projects.addProject('title');
  event.preventDefault();
});

todoAddBtn.addEventListener('click', event => {
  Projects.selectProject(0).addTodo('want to buy milk');
  event.preventDefault();
});
