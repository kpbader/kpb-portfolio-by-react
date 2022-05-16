import { useState } from 'react';
import './contact.css';

function Contact() {
const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
const { name, email, message } = contactForm;

const submitForm = (e) =>{
    e.preventDefault();
    console.log('contact form', contactForm)
}

const formChange = (e) => {
    setContactForm({...contactForm, [e.target.name]: e.target.value });
}
    return (
        <section id="contact-container">
            <form id="contact-form" onSubmit={submitForm}>
            <h3>Contact</h3>
            <div className="form-slot">
              <label htmlFor="name">Name:</label>
              <input type="text" defaultValue={name} onBlur={formChange} name="name" />
            </div>
            <div className="form-slot">
              <label htmlFor="email">Email address:</label>
              <input type="email" defaultValue={email} name="email" onBlur={formChange} />
            </div>
            <div className="form-slot">
              <label htmlFor="message">Message:</label>
              <textarea name="message" defaultValue={message} onBlur={formChange} rows="5" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
    )
}

export default Contact;