import './resume.scss';

const Resume = () => {
	return (
		<div className="resume-container">
			{/* HEADER */}
			<header className="resume-header">
				<h1 className="resume-title">resume</h1>
				{/* download button here */}
				<div className="resume-header-content">
					<ul>
						<li>Location: Houston, TX</li>
						<li>email: hello@donovanallen.dev</li>
						<li>phone: 555-123-4567</li>
					</ul>
				</div>
			</header>

			{/* SUB CONTENT */}
			<div className="resume-sub-content">
				<p>This is where a potential skills carousel could go</p>
			</div>

			{/* MAIN CONTENT */}
			<div className="resume-main-content">
				<div className="resume-main-content-left">
					<h2>experience</h2>
				</div>
				<div className="resume-main-content-right">
					<h3>education</h3>
					<h3>skills</h3>
					<h3>toolkit</h3>
					<h3>awards/honors/press</h3>
				</div>
			</div>

			{/* CONTACT */}
			<div className="contact-container">
				<h3>contact me</h3>
				{/* contact widget */}
			</div>
		</div>
	);
};

export default Resume;
