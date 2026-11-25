import logo from '../assets/logo.png'
function navbar() {
    return (
        <header>
            <div className="header-content">
                <div className="logo">
                    <div className="header-content-logo">
                        <img src={logo} alt="logo" />
                    </div>

                    <div className="name">
                        <p>RCEA</p>
                    </div>
                </div>

                <nav>
                    <a href="#Home">Home</a>
                    <a href="#About">About</a>
                    <a href="">Administration</a>
                    <a href="">Contact</a>
                    <a href="">Portal</a>
                
                </nav>
            </div>
            
        </header>
    );
}

export default navbar;