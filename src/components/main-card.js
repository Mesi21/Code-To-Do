/* eslint-disable indent */
import todoItem from './todo-item';
import state from '../state';

const MainCard = () => `
    <div id='main-card'>
        <div id='input-wrapper'>
            <input type='text' placeholder='Any code to do ...' id='todo-input'/>
            <button id='add-todo-btn'>
            <i class='material-icons'>
                add
            </i>
        </button>
        </div>
        <ul id='todo-list'>
            ${state
                .get('projects')[state.get('selectedProject')]
                .todos
                .map((todo, index) => todoItem(todo, index))
                .join('')}
        </ul>
    </div>
`;

export default MainCard;
