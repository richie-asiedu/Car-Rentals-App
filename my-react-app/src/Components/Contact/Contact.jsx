import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/message-icon.png'
import location_icon from '../../assets/location-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f2fea323-8cad-464e-99f8-9a9095e8e853");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✔");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send Us a Message <img src={msg_icon}></img></h3>
        <p>Feel free to reach out through contact form or find our Contact infomation below. Your feedback, questions, and suggestions are important to us as we strive to prove exceptional service to our university community</p>
        <ul>
            <li><img src={mail_icon}></img>richieasiedu19@gmail.com</li>
            <li><img src={phone_icon}></img>+233 532700248</li>
            <li><img src={location_icon}></img>Greater Accra<br></br>Labadi</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter your name' required></input>
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your Phone Number' required></input>
            <label>Write your message here</label>
            <textarea name='message' rows='6' placeholder='Enter your message here' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit msg ➡</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
