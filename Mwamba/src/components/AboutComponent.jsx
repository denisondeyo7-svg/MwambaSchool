import aboutimg from '../assets/teachers.jpg'
import aboutimg1 from '../assets/students.jpg'
import aboutimg2 from '../assets/principal.jpg'
function AboutComponent() {
    return (
        <div className="about" id='About'>
            <br /> <br /><br /><br />
            <h1>About <span className='dams'>Us</span></h1>
 <br /> <br />
            <div className="about-wrapper">
                    <div className="image">
                        <img src={aboutimg} alt="About image" />
                        <img src={aboutimg1} alt="About image" />
                        <img src={aboutimg2} alt="About image" />
                    </div>
                <div className="about-card">
                    <h1 className='about-headline'>What's Mwamba</h1>
                   <p>RCEA Mwamba Senior School is a faith-based school guided by the motto Arise and Shine. We provide quality education that shapes learners academically, morally, and spiritually.Our learners live by Discipline, Hard Work, Commitment, Team Work, Coherence, and God Fearing — and are prepared to lead, serve, and shine</p>
<br />
                   
                <button id='Explore'>Explore More <i className='fas fa-arrow-right'></i></button>
                </div>
            </div>
        </div>
    );
}

export default AboutComponent;