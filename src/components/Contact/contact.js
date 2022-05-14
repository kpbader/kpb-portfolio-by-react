import { useState } from 'react';

function Contact() {
const [contactForm, setContactForm] = useState({

})

const submitForm = (e) =>{
    e.preventDefault();
    console.log('contact form', contactForm)
}

const formChange = (e) => {

}
    return (
        <section>
            <h3>Contact</h3>
        </section>
    )
}

export default Contact;