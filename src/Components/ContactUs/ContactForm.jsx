import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.scss';
const ContactForm = () => {
    const [data, setdata] = useState({ user_name: "", user_email: "", phone: "", message: "" });
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setdata({ ...data, [name]: value });
    }
    const handleSubmit = (e) => {

        e.preventDefault();
    }
    // ************************************* Function to send email *******************************************
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_oaqnz4b', 'template_4pcs4oy', form.current, 'HlVSf-C8o7SCagUkh')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        // *****************************************  to clear the data after clicking on submit ********************
        e.target.reset()
        alert(` 👏 ${data.user_name} your Message has been sent`);
    };

    return (
        <>
            <section id="contactForm" >
                <form className='form-group' ref={form} onSubmit={sendEmail}>
                    <h1 className=' mb-3'> Contact <span className="here"> Here </span> </h1>
                    <input type="text" onChange={handleChange} value={data.name} name='user_name' placeholder='Enter your name' className=' input-group' required />
                    <input type="email" onChange={handleChange} value={data.email} name='user_email' placeholder='Enter your email' className=' input-group' required />
                    <input type="number" onChange={handleChange} value={data.number} name='phone' placeholder='Enter your Phone number' className=' input-group' required />
                    {/* <textarea name="message" onChange={handleChange} value={data.message} id="" cols="30" rows="10" placeholder='type your message'></textarea> */}
                    <label>Message</label>
                    <textarea name="message" />
                    <button className="btn btn-primary" type='submit'> Submit </button>

                </form>
            </section>
        </>
    )
}

export default ContactForm;