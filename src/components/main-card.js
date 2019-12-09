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
            <form id='input-wrapper'>
                <input type='text' placeholder='Any code to do ...' id='todo-input' name='todo'/>
                <input type='text' placeholder='Description' id='todo-description-input' name='description'/>
                <input type='date' id='todo-deadline-input' name='date'>
                <button id='add-todo-btn'>
                    Add to do
                </button>
                <input type='reset' id='cancel-todo-btn' value='Reset'>
            </form>
    `
        : '<h1>There is no projects</h1>'
    }
    </div>
`;

export default MainCard;
