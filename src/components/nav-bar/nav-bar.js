import './nav-bar.scss';
import { useState, useEffect } from 'react';
import dnvn from '../../assets/logo-main.png';
import { motion } from 'framer-motion';

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
		<motion.nav
			initial={{ opacity: 0, y: -100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
			className="nav-bar"
		>
			<motion.a
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				href="about"
			>
				about
			</motion.a>
			{!mobile && (
				<motion.a
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					href="portfolio"
				>
					portfolio
				</motion.a>
			)}
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
				href="resume"
			>
				resume
			</motion.a>
			<motion.a
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				href="contact"
			>
				contact
			</motion.a>
		</motion.nav>
	);
};

export default NavBar;
