import './App.scss';
import NavBar from './components/nav-bar/nav-bar.js';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import LandingPage from './components/landing-page/landing-page.js';
import React, { useState, useEffect, useRef } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/about/about';
import Resume from './components/resume/resume';
import ResumeTwo from './components/resume copy/resume';
import Portfolio from './components/portfolio/portfolio';
import AnimatedCursor from 'react-animated-cursor';
import FOG from 'vanta/dist/vanta.fog.min';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <LandingPage />,
			// errorElement: <ErrorPage />,
		},
		{
			path: '/contact',
			element: <Contact />,
		},
		{
			path: '/about',
			element: <About />,
		},
		// {
		// 	path: '/resume',
		// 	element: <Resume />,
		// },
		{
			path: '/resume',
			element: <ResumeTwo />,
		},
		{
			path: '/portfolio',
			element: <Portfolio />,
		},
	]);

	// VANTA.JS
	const [vantaEffect, setVantaEffect] = useState(null);
	const bg = useRef(null);
	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				FOG({
					el: bg.current,
					mouseControls: true,
					touchControls: true,
					gyroControls: true,
					baseColor: 0xd6d6d6,
					midtoneColor: 0x383838,
					lowlightColor: 0x383838,
					highlightColor: 0xffffff,
					blurFactor: 0.5,
					speed: 0.2,
					zoom: 0.2,
				})
			);
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);

	return (
		<div className="app" ref={bg}>
			<AnimatedCursor
				color="56, 56, 56"
				innerSize={16}
				outerSize={16}
				innerScale={0.7}
				outerScale={5}
				outerAlpha={0.1}
			/>

			<NavBar />

			<RouterProvider router={router} />
			{/* <Footer /> */}
		</div>
	);
}

export default App;
