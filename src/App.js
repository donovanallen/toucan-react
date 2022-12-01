import './App.scss';
import NavBar from './components/nav-bar/nav-bar.js';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import LandingPage from './components/landing-page/landing-page.js';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import About from './components/about/about';
import Resume from './components/resume/resume';

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

	return (
		<div className="app">
			<NavBar />
			<RouterProvider router={router} />
			<Footer />
		</div>
	);
}

export default App;
