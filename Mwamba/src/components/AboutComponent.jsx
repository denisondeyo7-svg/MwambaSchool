
import aboutimg from '../assets/WhatsApp Image 2026-11-22 at 20.23.55 (2).jpeg'
function AboutComponent() {
    return (
        <div className="about" id='About'>
            <br /> <br />
            <h1>About Us</h1>
 <br /> <br />
            <div className="about-wrapper">
                    <div className="image">
                        <img src={aboutimg} alt="About image" />
                    </div>
                <div className="about-card">
                    <h2 className='about-headline'>Hear From Us</h2>
                   <p>RCEA Mwamba Senior School is a faith-based school guided by the motto Arise and Shine. We provide quality education that shapes learners academically, morally, and spiritually.Our learners live by Discipline, Hard Work, Commitment, Team Work, Coherence, and God Fearing — and are prepared to lead, serve, and shine</p>

                   <div className="cards">
                    <div className="the-card">
                        <div className="icon">
                            <i className='fas fa-shield'></i>
                        </div>
                        <h2>Discipline</h2>
                    </div>

                    <div className="the-card">
                        <div className="icon">
                            <i className='fas fa-users'></i>
                        </div>
                        <h2>Teamwork</h2>
                    </div>

                    <div className="the-card">
                        <div className="icon">
                            <i className='fas fa-hand'></i>
                        </div>
                        <h2>Hardwork</h2>
                    </div>

                    <div className="the-card">
                        <div className="icon">
                            <i className='fas fa-hand-holding-heart'></i>
                        </div>
                        <h2>Commitment</h2>
                    </div>

                   
                   </div>
                </div>
            </div>
        </div>
    );
}

export default AboutComponent;