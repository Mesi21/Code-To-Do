/* eslint-disable indent */
import projectItem from './project-item';
import state from '../state';

const MenuContent = () => `
    <div id='menu-content'>
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
        <div id='todo-menu-header'>
        <input type='text' placeholder='Project name' id='project-name-input'>
            <button id='project-add-btn'>
                <i class='material-icons'>
                    add
                </i>
            </button>
        </div>
 
    </div>
`;

export default MenuContent;
