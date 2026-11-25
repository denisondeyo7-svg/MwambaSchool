import Navbar from '../components/Navbar';
import heros2 from '../assets/image_32b92c39.jpg'
import Announcements from '../components/Announcements';
import AboutComponent from '../components/AboutComponent';
function Indexpage() {
    return (
        <div className="main"id='Home'>
            <Navbar/>
            <br /><br />
            <div className="heroes" >
                
                <div className='heroes-img'>
            <br />
                    <img src={heros2} alt="Hero image" />
                    
                    <div className="headline">
                        
                        
                        <h1 className='school-name'>RCEA Mwamba Senior School</h1>
                        <p className='vision'>To produce an all-round person who is able to perform well academically, socially and spiritually as he/she faces challenges in the present society.</p>
                        <div className="actions">
                            <a href="">
                                <button id="about_btn">Learn More  <i className="fas fa-arrow-right"></i></button>
                            </a>

                            <a href="">
                                <button id="contact_btn">Contact us <i className="fas fa-phone"></i></button>
                            </a>
                        </div>
                    </div>
                </div>
                <Announcements/>
             
                <AboutComponent/><br />
            </div>
            
        </div>
    );
}

export default Indexpage;