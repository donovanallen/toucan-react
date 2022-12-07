import './nav-bar.scss';

const NavBar = () => {
	return (
		<nav className="nav-bar">
			<div className="logo">
				<a href="/">da</a>
			</div>
			<div className="nav-links">
				<a href="about">about</a>
				{/* <a href="resume">resume</a> */}
				<a href="contact">contact</a>
			</div>
		</nav>
	);
};

export default NavBar;
