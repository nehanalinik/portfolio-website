import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactGA from 'react-ga4';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Message Sent", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          toast.error("Error Occured! Send Again", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
    e.target.reset();
  };
  const trackInputChange = (event) => {
    debugger;
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    ReactGA.event('contact_input_change', {
      'field_name': fieldName,
      'field_value': fieldValue
    });
  };

  useEffect(() => {
    const inputs = document.querySelectorAll('input[name="name"], input[name="email"], input[name="subject"], input[name="message"]');
    inputs.forEach(input => input.addEventListener('change', trackInputChange));

    return () => {
      inputs.forEach(input => input.removeEventListener('change', trackInputChange));
    };
  }, []);
  return (
    <section className="contact" id="contact">
      <div className="heading">
        <h3>Contact</h3>
        <p>
          I'm open to Job opportunities where I can contribute, learn and grow.
          If you have a good opportunity that matches my skills and experience
          then contact me.
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          placeholder="What's your name.."
          name="name"
          required
          autoComplete="off"
          onChange={trackInputChange}
        />
        <input
          type="email"
          placeholder="Your Email Address.."
          name="email"
          pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}"
          title="must be a valid email address"
          required
          autoComplete="off"
          onChange={trackInputChange}
        />
        <input
          type="text"
          placeholder="Subject Here.."
          name="subject"
          required
          autoComplete="off"
          onChange={trackInputChange}
        />
        <textarea
          type="text"
          placeholder="Your Message.."
          name="message"
          required
          autoComplete="off"
          minLength="5"
          onChange={trackInputChange}
        />
        <input type="submit" className="btn" value="Send" />
        <ToastContainer />
      </form>
      <div className="contact-bg-text">contact</div>
    </section>
  );
};

export default Contact;
