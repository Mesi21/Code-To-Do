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
                <li class='project-item'>Project 1</li>
                <li class='project-item'>Project 2</li>
                <li class='project-item'>Project 3</li>
                <li class='project-item'>Project 4</li>
            </ul>
        </section>
    </div>
`)();

export default MenuContent;
