

function Contact() {
    return (
        <div className="contact">
            <h1>Contact <span className="dams">Us</span> </h1>
<br /><br />
            <div className="contact-card">
                <div className="contact-card1">
                    <h2>Contact details</h2>
                    <div className="socials">
                        <div className="icon">
                            <i className="fas fa-phone"></i>

                            <div className="detail">
                                <small>Phone</small>
                                <a href="tel:+254722438587">254722438587</a>
                            </div>
                        </div>

                        <div className="icon">
                            <i className="fab fa-whatsapp"></i>

                            <div className="detail">
                                <small>Chat on Whatsapp</small>
                                <a href="https://wa.me/254722438587?text=Hello%20RCEA%20Mwamba%20senior%20School%2C%20I%20would%20like%20to%20make%20an%20enquiry."target="_blank" rel="noopener noreferrer">Whatsapp</a>
                            </div>
                        </div>

                        <div className="icon">
                            <i className="fa-regular fa-envelope"></i>

                            <div className="detail">
                                <small>Send Email</small>
                                <a href="mailto:mwambasecsch@gmail.com"target="_blank" rel="noopener noreferrer">mwambasecsch@gmail.com</a>
                            </div>
                        </div>

                        <div className="icon">
                            <i className="fas fa-message"></i>

                            <div className="detail">
                                <small>Send SMS</small>
                                <a href="sms:+254722438587">SMS</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-card2">
                    <h2>Send a message</h2>
                    <form action="">
                        <div className="input">
                            <input type="text"name="firstname"placeholder="Enter your firsttname"required />
                        </div>
                        <div className="input">
                            <input type="text"name="lastname" placeholder="Enter your lastname"required />
                        </div>
                        <div className="input">
                            <input type="tel"name="phone" placeholder="Enter your phone"required />
                        </div>

                        <div className="input">
                            <textarea name="message" id="message" placeholder="Type something..."required></textarea>
                        </div>
                        <button id="sendmessage">Send message <i className="fas fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>

            <br /><br />
        </div>
    );
}

export default Contact;