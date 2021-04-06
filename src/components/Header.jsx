import React from 'react';
import '../styles/Header.scss';
// import LinkedIn from '/img/icon-linkedin.svg'
// import GitHub from '/img/icon-github.svg'
import Dropdown from './Dropdown'

const Header =()=> {

    // const [header, setHeader] = useState("default");
    
    // document.onscroll = () => {
    //     setHeader(
    //       document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ?
    //         "scrolled" : "default");
    //   };

	return (
		<header>
			<div className="header show_pc">
				<ul className="menu">
					<li><a href="#about">ABOUT</a></li>
					<li><a href="#skills">SKILLS</a></li>
					<li><a href="#works">WORKS</a></li>
					<li><a href="#contact">CONTACT</a></li>
					<li href="https://www.linkedin.com/in/anzu-nakayama-0660641b1/">
						<img src='/img/icon-linkedin.svg' alt="linkedin" />
					</li>
					<li href="https://github.com/anznk">
						<img src='/img/icon-github.svg' alt="GitHub" />
					</li>
				</ul>
			</div>
			<div className="header show_sp">
				<div className="logo top">
					<a href="./"><h1>ANZU NAKAYAMA</h1></a>
				</div>
				<div className="top">
					<Dropdown />  
				</div>
			</div>
		</header>
	)
}

export default Header


