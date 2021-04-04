import React, { useState } from 'react';
import '../styles/Contact.scss';
import { Axios, db } from '../firebase/firebaseConfig'



const Contact =()=> {
  const [formData, setFormData] = useState({})
  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    sendEmail()
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }
  const sendEmail = () => {
    Axios.post(
      'https://us-central1-myportfolio-6f01c.cloudfunctions.net/submit',
      formData
    )
      .then(res => {
        db.collection('emails').add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  const [contactInfo, setContactInfo] = useState({
    name: '',
  	email: '',
  	message: ''
  });

  // const handleChange = event => {
  //   setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  // };
  // const handleSubmit = event => {
  //   event.preventDefault();
  // };
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
          onChange={updateInput}
          value={formData.name || ''}
          // value={contactInfo.name}
          // onChange={handleChange}
        />
				</dd>
				<dt>E-mail</dt>
				<dd>
        <input
          type="email"
          name="email"
          // value={contactInfo.email}
          // onChange={handleChange}
          onChange={updateInput}
          value={formData.email || ''}
        />
				</dd>
				<dt>Message</dt>
				<dd>
        <textarea
          type="text"
          name="message"
          // value={contactInfo.message}
          // onChange={handleChange}
          onChange={updateInput}
          value={formData.message || ''}
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


