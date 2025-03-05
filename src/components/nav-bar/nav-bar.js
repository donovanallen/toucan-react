import './nav-bar.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';

const NavBar = () => {
	const pathname = window.location.pathname;

	const [hovered, setHovered] = useState(false);
	const toggleHover = () => setHovered(!hovered);

	return (
		<nav className="nav-bar">
			<motion.div
				className="logo"
				onMouseEnter={toggleHover}
				onMouseLeave={toggleHover}
			>
				<motion.a
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					href="/"
				>
					da
				</motion.a>
			</motion.div>
			<motion.a
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				href="about"
				className={pathname === '/about' ? 'active' : ''}
			>
				about
			</motion.a>
			<motion.a
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				href="portfolio"
				className={pathname === '/portfolio' ? 'active' : ''}
			>
				portfolio
			</motion.a>
			<motion.a
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				href="contact"
				className={pathname === '/contact' ? 'active' : ''}
			>
				contact
			</motion.a>
		</nav>
	);
};

export default NavBar;
