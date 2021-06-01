import React from "react";
import profile_pic from '../img/photo_me.jpg'
import '../styles/About.scss';
import GitHub from '../img/icon-github.svg'
import LinkedIn from '../img/icon-linkedin.svg'

const About =(props)=> {

	return (
		<section className="sec-About" id="about" >
			<div className="show_pc title-sec">
				<h2>About</h2>
			</div>
			{/* <div className='foo' data-delighter> */}
			<div className="show_pc wrap-about">
				<div className="text-sec">
				<p>
				{props.text.split('\n').map((str, index) => (
				<React.Fragment key={index}>{str}<br /></React.Fragment>
				))}
				</p>	
				</div>
				<div className="photo-sec">
					<img src={profile_pic} alt="profile_pic" />
				</div>
			</div>	
			<div className="show_sp wrap-about">
				<img src={profile_pic} alt="profile_pic" />
				<div className="title-sec">
					<h2>About</h2>
				</div>
				<div className="text-sec">
				<p>
				{props.text.split('\n').map((str, index) => (
				<React.Fragment key={index}>{str}<br /></React.Fragment>
				))}
				</p>	
				</div>
				<div className="link">
					<li href="https://www.linkedin.com/in/anzu-nakayama-0660641b1/">
						<img src={LinkedIn} alt="linkedin" />
					</li>
					<li href="https://github.com/anznk">
						<img src={GitHub} alt="GitHub" />
					</li>
				</div>
			</div>
			{/* </div>  */}

    </section>
	)
}

export default About


