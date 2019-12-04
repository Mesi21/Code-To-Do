import MenuContent from './menu-content';

const Navbar = () => `
    <div id='menu-wrapper'>
        <nav id='navbar'>
            <div class='nav-left'>
                <a id='burger-btn'>
                    <i class='material-icons'>
                        menu
                    </i>
                </a>
                <h3 id='status'>today<h3>
            </div>
            <div class='nav-right'>
                <p id='remaining-todos'>1/5<p>
            </div>
        </nav>    
    ${MenuContent()}
    </div>
`;

export default Navbar;