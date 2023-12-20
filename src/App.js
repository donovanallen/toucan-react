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
import ScilentMusic from './components/portfolio/scilent-music/scilent-music.js';
import GiftGuide from './components/portfolio/gift-guide/gift-guide.js';
import F123 from './components/portfolio/f1-23/f1-23.js';

import AnimatedCursor from 'react-animated-cursor';
import FOG from 'vanta/dist/vanta.fog.min';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			// errorElement: <ErrorPage />,
			children: [
				{
					path: '',
					element: <LandingPage />,
				},
				{
					path: 'contact',
					element: <Contact />,
				},
				{
					path: 'about',
					element: <About />,
				},
				// {
				// 	path: '/resume',
				// 	element: <Resume />,
				// },
				{
					path: 'resume',
					element: <ResumeTwo />,
				},
				{
					path: 'portfolio',
					element: <Portfolio />,
				},
				{
					path: 'holiday-gift-guide',
					element: <GiftGuide />,
				},
				{
					path: 'scilent-music',
					element: <ScilentMusic />,
				},
				{
					path: 'f1-23',
					element: <F123 />,
				},
			],
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
					midtoneColor: 0x000,
					lowlightColor: 0x383838,
					highlightColor: 0xd6d6d6,
					blurFactor: 0.5,
					speed: 0.3,
					zoom: 0.25,
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
				color="249, 211, 180"
				innerSize={12}
				outerSize={12}
				innerScale={0.7}
				outerScale={2.5}
				outerAlpha={0.3}
			/>

			<NavBar />

			<RouterProvider router={router} />
			{/* <Footer /> */}
		</div>
	);
}

export default App;
