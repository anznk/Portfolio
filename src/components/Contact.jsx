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
    console.log("formData",formData);
    Axios.post(
      // 'http://localhost:5001/myportfolio-6f01c/us-central1/submit',
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

	return (
		<section className="sec-Contact" id="contact">
			<div className="title-sec">
				<h2>Contact</h2>
			</div>
			<div className="wrap-contact">
			<form onSubmit={handleSubmit}>
			<dl>
				<dt>Name</dt>
				<dd>
        <input
          type="text"
          name="name"
          onChange={updateInput}
          value={formData.name || ''}
        />
				</dd>
				<dt>E-mail</dt>
				<dd>
        <input
          type="email"
          name="email"
          onChange={updateInput}
          value={formData.email || ''}
        />
				</dd>
				<dt>Message</dt>
				<dd>
        <textarea
          type="text"
          name="message"
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