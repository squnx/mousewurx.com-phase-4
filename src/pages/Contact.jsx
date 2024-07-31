import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k4tv1uo', 'template_olr9hie', form.current, 'uwnfxayM5LFWOqTEK')
      .then((result) => {
        console.log(result.text);
        alert('Your message has been sent. Thank you!');
      }, (error) => {
        console.log(error.text);
        alert('An error occurred, please try again.');
      });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title pb-0" data-aos="fade-up">
        <span>Contact</span>
        <h2>Contact</h2>
        <p className="pb-30">Ready to start your next project with us? Let's get in touch!</p>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="info-wrap" data-aos="fade-up" data-aos-delay="200">
            <div className="row gy-5">
              <div className="col-lg-6">
                <div className="info-item d-flex align-items-center">
                  <a href="tel:562-453-5272"><i className="icon bi bi-telephone flex-shrink-0"></i></a>
                  <div>
                    <h3 className="d-flex justify-content-start">Phone</h3>
                    <p>562-453-5272</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="info-item d-flex align-items-center">
                  <a href="mailto:info@mousewurx.com"><i className="bi bi-envelope flex-shrink-0"></i></a>
                  <div>
                    <h3 className="d-flex justify-content-start">Email<br /></h3>
                    <p>ivansong@mousewurx.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail} className="php-email-form" data-aos="fade-up" data-aos-delay="300">
            <div className="row gy-4">
              <div className="col-md-6">
                <input type="text" name="name" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" name="email" placeholder="Your Email" required />
              </div>
              <div className="col-md-12">
                <input type="text" className="form-control" name="subject" placeholder="Subject" required />
              </div>
              <div className="col-md-12">
                <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
              </div>
              <div className="col-md-12 text-center">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
                <button type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
