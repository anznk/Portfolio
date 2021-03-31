import React, { useState } from 'react';
import '../styles/Contact.scss';
import axios from 'axios';
// import firebase from '../firebase/Firebase';
// const firebase = require("firebase");
// require("firebase/functions");


const Contact =()=> {
  const [contactInfo, setContactInfo] = useState({
    name: '',
  	email: '',
  	message: ''
  });

  const handleChange = event => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  contactInfo
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
        resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  };
  const resetForm =() => {
     setContactInfo({ 
        name: '',
  	    email: '',
      	message: ''
     });
  }

	return (
		<section className="sec-Contact" id="contact">
			<div className="title-sec">
				<h2>Contact</h2>
			</div>
			<div className="wrap-contact">
			{/* <h3>Interested in working together?</h3> */}
			<form onSubmit={handleSubmit}>
			<dl>
				<dt>Name</dt>
				<dd>
        <input
          type="text"
          name="name"
          value={contactInfo.name}
          onChange={handleChange}
        />
				</dd>
				<dt>E-mail</dt>
				<dd>
        <input
          type="email"
          name="email"
          value={contactInfo.email}
          onChange={handleChange}
        />
				</dd>
				<dt>Message</dt>
				<dd>
        <textarea
          type="text"
          name="message"
          value={contactInfo.message}
          onChange={handleChange}
        />
				</dd>
        <button className="btn_send" type="submit">Send</button>
			</dl>
      </form>
			</div>
    </section>
	)
}

export default Contact


