
import principal from '../assets/principal.jpg'
function Advice() {
    return (
        <div className="advice">
            <h1>From <span className='dams'>Principal</span></h1>
            <br /><br />
            <div className="advice-wrapper">
                <div className="advice-img">
                    <img src={principal} alt="Principal words" />
                </div>
                <div className="advice-card">

                    <div className="advice-content">
                        
                    
                        <p>Welcome to Mwamba Senior School.</p><br />
                        <h2><strong>Mwamba</strong> is more than a school. It is a home where discipline builds character, and hard work builds futures. <span className='den'>Arise and Shine!</span> "</h2>
                        
                        <br />
                        <p className='names'>Mary Sifuna</p>
                        <small className='role'>Principal, Mwamba Senior Sec</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Advice;