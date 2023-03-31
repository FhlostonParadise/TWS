import React from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactThree = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y6hrzok', 'template_ufsdu9l', form.current, 'fO5LmFnaQfr9m30SY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
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
                  <button type="submit" className="tp-btn-border">
                    Send Message
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
