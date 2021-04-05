import React, { useState } from 'react';
// import Media from 'react-media';
import classNames from 'classnames';
import HamburgerIcon from './HamburgerIcon';
import '../styles/Header.scss';

const Dropdown = () => {
  const navMenu = [
		{ text: "About", url: "#about" },
		{ text: "Skills", url: "#skills" },
    { text: "Works", url: "#works" },
    { text: "Contact", url: "#contact" }
  ];
  const [isOpen, setIsOpen] = useState(false);
  const onScrollLink = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector(e.target.hash);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth"
    });
    setIsOpen(!isOpen);
	};
	
  return (
    <>
			<HamburgerIcon isOpen={isOpen} handleBurgerClick={() => setIsOpen(!isOpen)} />
			<nav id="toggleMenu" className={classNames({ open: isOpen })} >
				{navMenu.map(({ text, url }, index) => (
					<a key={index} href={url} onClick={onScrollLink}>
						{text}
					</a>
				))}
			</nav>
    </>
  );
};
export default Dropdown;