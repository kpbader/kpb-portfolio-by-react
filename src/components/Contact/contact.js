import { useState, useRef } from 'react';
import emailjs from 'emailjs-com'
import { validateEmail } from '../../utils/helpers';
import './contact.css';

function Contact() {
  const form = useRef();
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = contactForm;
  const [errorMessage, setErrorMessage] = useState('');

  const formChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Invalid email address')
      } else {
        setErrorMessage('');
      }
    } else {
      console.log(e.target.value.length)
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required!`)
      } else {
        setErrorMessage('');
      }
    }
    
    if (!errorMessage) {
      setContactForm({ ...contactForm, [e.target.name]: e.target.value });
    }
  }

  const submitForm = (e) => {
    e.preventDefault();

    if (!errorMessage && contactForm.name && contactForm.email && contactForm.message) {
      emailjs.sendForm('service_dtjnzsb', 'contact_form', 'form', '71NYlxaRV1UENrt02')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      setErrorMessage(`${e.target.name} is required!`)
      e.target.reset();
    } setContactForm({ name: '', email: '', message: '' });
  }

  return (
    <section id="contact-container">
      <form id="contact-form" ref={form} onSubmit={submitForm}>
        <h3>Contact</h3>
        <div id="form-slot-1">
          <label htmlFor="name">Name</label>
          <input type="text" defaultValue={name} onBlur={formChange} name="name" />
        </div>
        <div id="form-slot-2">
          <label htmlFor="email">Email</label>
          <input type="email" defaultValue={email} name="email" onBlur={formChange} />
        </div>
        <div id="form-slot-3">
          <label htmlFor="message">Message</label>
          <textarea name="message" defaultValue={message} onBlur={formChange} rows="5" />
        </div>
        <button type="submit" className="contact-submit-btn">Submit</button>
      </form>
    </section>
  )
}

export default Contact;