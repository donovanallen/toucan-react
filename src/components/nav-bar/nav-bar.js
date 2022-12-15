import './nav-bar.scss';
import { useState } from 'react';
import dnvn from '../../assets/logo-main.png';

const NavBar = () => {
	const [hovered, setHovered] = useState(false);
	const toggleHover = () => setHovered(!hovered);

	return (
		<nav className="nav-bar">
			<div
				className="logo"
				onMouseEnter={toggleHover}
				onMouseLeave={toggleHover}
			>
				<a href="/">da</a>
				{hovered && (
					<a href="https://dnvn.haus" className={hovered ? 'show' : 'hide'}>
						<img src={dnvn} alt="dnvn-logo" />
					</a>
				)}
			</div>
			<div className="nav-links">
				<a href="about">about</a>
				<a href="resume">resume</a>
				<a href="contact">contact</a>
			</div>
		</nav>
	);
};

export default NavBar;
