import todoItem from './todo-item';

const MainCard = (() => `
    <div id='main-card'>
        <ul id='todo-list'>
            ${[...Array(11).keys()].map(i => todoItem(i)).join('')}
        </ul>
        <div class="btn-wrapper">
            <button id='add-todo-btn'>
                <i class='material-icons'>
                    add
                </i>
            </button>
        </div>
    </div>
`)();

export default MainCard;
