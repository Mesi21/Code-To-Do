import projectItem from './project-item';

const MenuContent = (() => `
    <div id='menu-content'>
        <header id='todo-menu-header'>
            <div name='past'>Past</div>
            <div name='today' class='is-selected'>Today</div>
            <div name='future'>Future</div>
        </header>
        <hr>
        <section id='projects-section'>
            <header>
                <h3>Projects</h3>
                <button id='project-add-btn'>
                    <i class='material-icons'>
                        add
                    </i>
                </button>
            </header>
            <ul id='project-list'>
                ${[...Array(4).keys()].map(i => projectItem(i)).join('')}
            </ul>
        </section>
    </div>
`)();

export default MenuContent;
