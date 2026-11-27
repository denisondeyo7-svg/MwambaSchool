import Navbar from '../components/Navbar';
import heros2 from '../assets/administration.webp'
import Announcements from '../components/Announcements';
import AboutComponent from '../components/AboutComponent';
import Advice from '../components/Advice';

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
                        
                        <h2 className='vision'> Arise  <span className='dams'>&</span> Shine .</h2>
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
                <br />
                <Advice/><br />
                <Announcements/>
             
                <AboutComponent/><br />
                
            </div>
            
        </div>
    );
}

export default Indexpage;