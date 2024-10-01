import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "70fec83c-4d8f-454c-a1af-6e822e09a28e");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);

        }
      };

  return (

    <div className='contact'id='contact'>
        <div className="contact-title">
            <h1>GET IN TOUCH</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>LET'S TALK</h1>
                <p>I am available to to do any project you want. if you need me contact me anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail"><img src={mail_icon} alt="" /><p>someone@gmail.com</p></div>
                    <div className="contact-detail"><img src={call_icon} alt="" /><p>9812346247</p></div>
                    <div className="contact-detail"><img src={location_icon} alt="" /><p>Bhairahwa</p></div>
                </div>
                
            </div>
           <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter Your Name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter Your email' name='email'  />
            <label htmlFor="">Write Your Massege Here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className= "contact-submit">Submit now</button>
           </form>
        </div>
      
    </div>
  )
}

export default Contact
