import logo from '../assets/logonobg.png'
function navbar() {
    return (
        <header>
            <div className="header-content">
                <div className="logo">
                    <img src={logo} alt="logo" />

                    <div className="name">
                        <p>RCEA</p>
                    </div>
                </div>

                <nav>
                    <a href="">Home</a>
                    <a href="">Students</a>
                    <a href="">Teachers</a>
                    <a href="">Administration</a>
                    <a href="#About">About us</a>
                    <a href="">Portal</a>
                
                </nav>
            </div>
            
        </header>
    );
}

export default navbar;