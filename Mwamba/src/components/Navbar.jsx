import logo from '../assets/logo.png'
function navbar() {
    return (
        <header>
            <div className="header-content">
                <div className="header-logo">
                    <div className="header-content-logo">
                        <img src={logo} alt="logo" />
                    </div>

                    <div className="header-school-name">
                        <p className='name-of-school'>RCEA</p>
                        <small>Arise & Shine</small>
                    </div>
                </div>

                <nav>
                    <a href="#Home">Home</a>
                    <a href="#About">About</a>
                    <a href="">Administration</a>
                    <a href="">Contact</a>
                    <a href="">Portal</a>
                
                </nav>

                <div className="menubtn">
                    <i className='fas fa-bars'></i>
                </div>
            </div>
            
        </header>
    );
}

export default navbar;