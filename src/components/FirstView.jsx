import React from 'react'
import '../styles/FirstView.scss';
// import FirstViewPic from '/img/FirstView2.jpg'


const FirstView = ({ play }) => {
	
	return (
		<section className="Sec-FirstView">
			<div className="show_pc title-sec">
				<h2> Anzu Nakayama</h2>
			</div>
			<div className="show_pc pic">
				<img src='/img/FirstView2.jpg'  alt="FirstView" />
			</div>
		</section>

	)
}

export default FirstView


