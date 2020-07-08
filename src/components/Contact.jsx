import React from "react";
import '../styles/Contact.scss';
// import firebase from '../firebase/Firebase';
const firebase = require("firebase");
require("firebase/functions");


const Contact =()=> {
	const handleSubmit = event => {
    event.preventDefault()
    // sendEmail()
    // setFormData({
    //   name: '',
    //   email: '',
    //   message: '',
    // })
  }

	return (
		<section className="sec-Contact" id="contact">
			<div className="title-sec">
				<h2>Contact</h2>
			</div>
			<div class="wrap-contact">
			{/* <h3>Interested in working together?</h3> */}
			<form onSubmit={handleSubmit}>
			<dl>
				<dt>Name</dt>
				<dd>
        <input
          type="text"
          name="name"
          // onChange={updateInput}
          // value={formData.name || ''}
        />
				</dd>
				<dt>E-mail</dt>
				<dd>
        <input
          type="email"
          name="email"
          // onChange={updateInput}
          // value={formData.email || ''}
        />
				</dd>
				<dt>Message</dt>
				<dd>
        <textarea
          type="text"
          name="message"
          // onChange={updateInput}
          // value={formData.message || ''}
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


