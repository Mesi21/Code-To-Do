/* eslint-disable no-restricted-globals */
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
const projectRemoveBtn = document.getElementById('remove-project-btn');
const todoList = document.getElementById('todo-list');
const projectsList = document.getElementById('project-list');
const projectInput = document.getElementById('project-name-input');
const todoFormElement = document.getElementById('input-wrapper');

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
  if (/^\S/.test(projectInput.value)) {
    Projects.addProject(projectInput.value);
    projectInput.value = '';
    if (Projects.length() === 1) {
      location.reload();
    } else {
      UI.refresh.all();
    }
  }
  event.preventDefault();
});

projectRemoveBtn.addEventListener('click', event => {
  Projects.selectProject(Number(event.target.name)).delete();
  if (!Projects.isThereAnyProject()) {
    location.reload();
  }
  event.preventDefault();
});

todoAddBtn.addEventListener('click', event => {
  const currentData = new FormData(todoFormElement);
  Projects.selectProject(state.get('selectedProject')).addTodo([
    ...currentData.values(),
  ]);
  todoFormElement.reset();
  UI.refresh.todos();
  event.preventDefault();
});

projectsList.addEventListener('click', ({ target }) => {
  const currentState = Number(target.id.split('-')[1]);
  Projects.selectProject(currentState);
  UI.refresh.all();
});

todoList.addEventListener('click', ({ target }) => {
  const todoIndex = Number(target.id.split('-')[1]);
  Projects.selectProject(state.get('selectedProject')).toggleTodoCompleted(
    todoIndex,
  );
  UI.refresh.todos();
});
