import React from "react";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactThree = () => {
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const form = useRef();
 

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    emailjs.sendForm('service_y6hrzok', 'template_ufsdu9l', form.current, 'fO5LmFnaQfr9m30SY')
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
          setLoading(false);
          // Reset form after successful submission
          form.current.reset();
          // Auto-hide success message after 5 seconds
          setTimeout(() => setSuccess(null), 5000);
      }, (error) => {
          console.log(error.text);
          setSuccess(false);
          setError('Failed to send message. Please try again.');
          setLoading(false);
          // Auto-hide error message after 5 seconds
          setTimeout(() => {
            setError(null);
            setSuccess(null);
          }, 5000);
      });
  };

  
  return (
    <>
      {/* <!-- contact area start --> */}
      <div
        className="tp-contact-area"
        // data-background="assets/img/contact/contact.jpg"
        style={{ backgroundImage: `url("assets/img/contact/contact2.jpg")` }}
      >
        <div className="container" id='contact'>
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-contact-info pt-180 pb-150 pr-50">
                <div className="tp-section-wrapper p-color-change">
                  <span className="tp-section-subtitle text-white mb-30">
                    Get in touch now
                  </span>
                  <h2 className="tp-section-title text-white mb-35">
                    Don't hesitate to contact me for any additional questions!
                  </h2>
                  
                  <div className="mt-50">
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-contact-form white-bg pt-60 pl-50 pr-50 pb-60">
                <h4 className="tp-contact-form-title">
                  <i className="fal fa-file-edit"></i>Online Contact
                </h4>
                <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder="Your Name"/>
                  <br />
                  <input type="email" name="user_email" placeholder="Your Email"/>
                  <br />
                  <textarea
                    name="message"
                    placeholder="Enter your mail"
                  ></textarea>
                  <button type="submit" className="tp-btn-border" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                    <span>
                      <svg
                        width="22"
                        height="8"
                        viewBox="0 0 22 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.3536 4.35356C21.5488 4.15829 21.5488 3.84171 21.3536 3.64645L18.1716 0.464468C17.9763 0.269205 17.6597 0.269205 17.4645 0.464468C17.2692 0.65973 17.2692 0.976312 17.4645 1.17157L20.2929 4L17.4645 6.82843C17.2692 7.02369 17.2692 7.34027 17.4645 7.53554C17.6597 7.7308 17.9763 7.7308 18.1716 7.53554L21.3536 4.35356ZM-4.37114e-08 4.5L21 4.5L21 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <svg
                        width="22"
                        height="8"
                        viewBox="0 0 22 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.3536 4.35356C21.5488 4.15829 21.5488 3.84171 21.3536 3.64645L18.1716 0.464468C17.9763 0.269205 17.6597 0.269205 17.4645 0.464468C17.2692 0.65973 17.2692 0.976312 17.4645 1.17157L20.2929 4L17.4645 6.82843C17.2692 7.02369 17.2692 7.34027 17.4645 7.53554C17.6597 7.7308 17.9763 7.7308 18.1716 7.53554L21.3536 4.35356ZM-4.37114e-08 4.5L21 4.5L21 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  
                  {/* Notification Messages */}
                  {success === true && (
                    <div 
                      style={{
                        marginTop: '15px',
                        padding: '12px 15px',
                        backgroundColor: '#d4edda',
                        color: '#155724',
                        border: '1px solid #c3e6cb',
                        borderRadius: '5px',
                        fontSize: '14px',
                        fontWeight: '500'
                      }}
                    >
                      ✅ Your message was sent successfully! We'll get back to you soon.
                    </div>
                  )}
                  
                  {(success === false || error) && (
                    <div 
                      style={{
                        marginTop: '15px',
                        padding: '12px 15px',
                        backgroundColor: '#f8d7da',
                        color: '#721c24',
                        border: '1px solid #f5c6cb',
                        borderRadius: '5px',
                        fontSize: '14px',
                        fontWeight: '500'
                      }}
                    >
                      ❌ {error || 'Failed to send message. Please try again.'}
                    </div>
                  )}
                  
                  {loading && (
                    <div 
                      style={{
                        marginTop: '15px',
                        padding: '12px 15px',
                        backgroundColor: '#d1ecf1',
                        color: '#0c5460',
                        border: '1px solid #bee5eb',
                        borderRadius: '5px',
                        fontSize: '14px',
                        fontWeight: '500'
                      }}
                    >
                      📤 Sending your message...
                    </div>
                  )}
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- contact area end  -->  */}
    </>
  );
};

export default ContactThree;


