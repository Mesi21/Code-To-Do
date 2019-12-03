import './style/style.scss';
import UI from './controller/ui.controller';
import Project from './model/project';
import state from './state';
import Todo from './model/todo';

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
  UI.addProject(new Project('title'));
  event.preventDefault();
});

todoAddBtn.addEventListener('click', event => {
  state.current.projects[0].todos.push(new Todo('First Todo'));
  state.set('projects', state.current.projects);
  event.preventDefault();
});