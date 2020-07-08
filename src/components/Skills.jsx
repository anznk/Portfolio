import React from "react";
import '../styles/Skills.scss';
import skillsData from '../data/skills.json'
import '../styles/Skills.scss';
import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';

const Skills =()=> {
	const title1 = "Front-end development";
	const text1 = 
	"Developed, maintained and tested the website for inbound tourists with Javascript, HTML5, CSS3 for 2 years.\n Now I'm working whth React.js, Node.js, HTML5, SCSS.";
	const title2 = "Software development";
	const text2 = "Developed Supply Chain Management (SCM) system using C, Java, Oracle SQL for 3 years.";
	const skills = skillsData.skills;
  const params = {
		autoplay: {
			delay: 2000
		},
		loop: true,  
		slidesPerView:5,
    spaceBetween: 30
  }
	return (
		<section className="sec-Skills" id="skills" >
			<div className="title-sec">
				<h2>Skills</h2>
			</div>
			{/* <div className='foo' data-delighter> */}
				<div className="wrap-skills">
					<div className="skill-text">
						<h3>{title1}</h3>
						<p>{text1.split('\n').map((str, index) => (
							<React.Fragment key={index}>{str}<br /></React.Fragment>
							))}
						</p>	
						<h3>{title2}</h3>
						<p>{text2.split('\n').map((str, index) => (
							<React.Fragment key={index}>{str}<br /></React.Fragment>
							))}
						</p>	
					</div>
				<div className="show_pc skill-item">
					<Swiper {...params}>
						{skills.map(({ logoPath, name }) => (
						<div key={name} className="icon">
							<img src={logoPath}  alt={name} />
							<p>{name}</p>
						</div>
						))} 
					</Swiper>
				</div>
			</div>
    </section>

	)
}

export default Skills


