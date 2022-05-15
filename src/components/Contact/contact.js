import { useState } from 'react';

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
        <section>
            <h3>Contact</h3>
            <form id="contact-form" onSubmit={submitForm}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" defaultValue={name} onChange={formChange} name="name" />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input type="email" defaultValue={email} name="email" onChange={formChange} />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea name="message" defaultValue={message} onChange={formChange} rows="5" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
    )
}

export default Contact;