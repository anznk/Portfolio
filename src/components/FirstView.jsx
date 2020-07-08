import React from 'react'
import '../styles/FirstView.scss';
import FirstViewPic from '../img/FirstView2.jpg'
import { Animate } from 'react-simple-animate';

const FirstView = ({ play }) => {
	const text = "Hello, my name is Anzu.\n I am a Front End Developer living in Vancouver, BC."

	return (
		<section className="Sec-FirstView">
			<div className="show_pc title-sec">
				<h2> Anzu Nakayama</h2>
			</div>
			<div className="show_pc pic">
				<img src={FirstViewPic} alt="FirstView" />
				{/* <p>{text.split('\n').map((str, index) => (
					<React.Fragment key={index}>{str}<br /></React.Fragment>
					))}
				</p>	 */}
			</div>
		</section>

	)
}

export default FirstView


