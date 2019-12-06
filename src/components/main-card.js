/* eslint-disable indent */
import todoItem from './todo-item';
import state from '../state';

const MainCard = () => `
    <div id='main-card'>
    ${
      state.get('projects').length
        ? `
            <header>
                <h1 id='nav-status'>
                    ${state.get('projects')[state.get('selectedProject')].title}
                </h1>
                <button id='remove-project-btn' name='${state.get('selectedProject')}'>
                    Delete
                </button>
            </header>
            <ul id='todo-list'>
                ${state
                .get('projects')[state.get('selectedProject')]
                .todos.map((todo, index) => todoItem(todo, index))
                .join('')}
            </ul>
            <div id='input-wrapper'>
                <input type='text' placeholder='Any code to do ...' id='todo-input'/>
                <input type='text' placeholder='Description' id='todo-description-input'/>
                <input type='date' id='todo-deadline-input'>
                <button id='add-todo-btn'>
                    Add to do
                </button>
                <button id='cancel-todo-btn'>
                    Cancel
                </button>
            </div>
    `
        : '<h1>There is no projects</h1>'
    }
    </div>
`;

export default MainCard;
