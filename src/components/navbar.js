import MenuContent from './menu-content';
import state from '../state';

const Navbar = () => `
    <div id='menu-wrapper'>
        <nav id='navbar'>
            <div class='nav-left'>
                <a id='burger-btn'>
                    <i class='material-icons'>
                        menu
                    </i>
                </a>
                <h3 id='nav-status'>
                    ${state.get('projects')[state.get('selectedProject')].title}
                <h3>
            </div>
            <div class='nav-right'>
                <p id='remaining-todos'>
                    0
                    /
                    ${state.get('projects')[state.get('selectedProject')].todos.length}
                <p>
            </div>
        </nav>    
    ${MenuContent()}
    </div>
`;

export default Navbar;