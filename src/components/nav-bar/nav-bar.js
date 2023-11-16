import './nav-bar.scss';
import { useState, useEffect } from 'react';
import dnvn from '../../assets/logo-main.png';

const NavBar = () => {
	const [hovered, setHovered] = useState(false);
	const toggleHover = () => setHovered(!hovered);
	const [mobile, setMobile] = useState(window.innerWidth <= 500);

	const handleWindowSizeChange = () => {
		setMobile(window.innerWidth <= 500);
	};

	useEffect(() => {
		window.addEventListener('resize', handleWindowSizeChange);
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		};
	}, []);

	return (
		<nav className="nav-bar">
			<a href="about">about</a>
			{!mobile && <a href="portfolio">portfolio</a>}
			<div
				className="logo"
				onMouseEnter={toggleHover}
				onMouseLeave={toggleHover}
			>
				<a href="/">da</a>
			</div>
			<a href="resume">resume</a>
			<a href="contact">contact</a>
		</nav>
	);
};

export default NavBar;
