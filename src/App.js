import './App.scss';
import NavBar from './components/nav-bar/nav-bar.js';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import LandingPage from './components/landing-page/landing-page.js';
import React, { useState, useEffect, useRef } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/about/about';
import Resume from './components/resume/resume';
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
		{
			path: '/resume',
			element: <Resume />,
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
					// FIERY
					highlightColor: 0xffbb00,
					midtoneColor: 0xff2000,

					// NORD
					// baseColor: 0x81a1c1,
					// lowlightColor: 0xa3be8c,
					// midtoneColor: 0xebcb8b,
					// highlightColor: 0xd08770,
					// blurFactor: 0.33,
					blurFactor: 0.5,
					speed: 0.5,
					zoom: 0.7,
					// minWidth: 200.0,
					// minHeight: 50.0,
				})
			);
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);

	return (
		<div className="app" ref={bg}>
			<NavBar />
			<RouterProvider router={router} />
			<Footer />
		</div>
	);
}

export default App;
