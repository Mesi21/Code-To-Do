/* eslint-disable indent */
import projectItem from './project-item';
import state from '../state';

const MenuContent = () => `
    <div id='menu-content'>
        <header id='todo-menu-header'>
            <input type='text' placeholder='Project name' id='project-name-input'>
            <button id='project-add-btn'>
            <i class='material-icons'>
                add
            </i>
        </button>
        </header>
        <hr>
        <section id='projects-section'>
            <header>
                <h3>Projects</h3>
            </header>
            <ul id='project-list'>
            ${state
                .get('projects')
                .map((project, index) => projectItem(project.title, index))
                .join('')}
            </ul>
        </section>
    </div>
`;

export default MenuContent;
