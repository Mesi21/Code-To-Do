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
                <h3 class='brand-logo'>CODETODO<span>_<span></h3>
            </div>
            <div class='nav-right'>
            </div>
        </nav>    
    ${MenuContent()}
    </div>
`;

export default Navbar;