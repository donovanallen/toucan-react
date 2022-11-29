import './resume.scss';

const Resume = () => {
	return (
		<div className="resume-container">
			{/* HEADER */}
			<header className="resume-header">
				<div className="resume-title">
					<h1 className="resume-title-text">resume</h1>
					{/* <button className="resume-title-btn">download</button> */}
				</div>
				<div className="resume-header-content">
					{/* <ul>
						<li>Location: Houston, TX</li>
						<li>email: hello@donovanallen.dev</li>
						<li>phone: 555-123-4567</li>
					</ul> */}
				</div>
			</header>

			{/* SUB CONTENT */}
			<div className="resume-sub-content">
				{/* <p>This is where a potential skills carousel could go</p> */}
			</div>

			{/* MAIN CONTENT */}
			<div className="resume-main-content">
				<div className="resume-main-content-left">
					<h2 className="resume-main-content-left-title">experience</h2>
					<div className="resume-main-content-left-entry">
						<p className="entry-title">
							<span>engineer ii</span> |{' '}
							<a href="https://shop.luluemon.com" target="_blank">
								lululemon
							</a>
						</p>
						<p className="entry-subtitle">february 2022 - present</p>
						<p className="entry-subtitle">remote/houston, tx</p>
						<ul className="entry-items">
							<li>item 1</li>
							<li>item 2</li>
							<li>item 3</li>
						</ul>
					</div>
					<hr />
					<div className="resume-main-content-left-entry">
						<p className="entry-title">
							<span>sr. software engineer</span> |{' '}
							<a href="https://www.deloittedigital.com" target="_blank">
								deloitte digital
							</a>
						</p>
						<p className="entry-subtitle">june 2018 - february 2022</p>
						<p className="entry-subtitle">arlington, va/new york city, ny</p>
						<ul className="entry-items">
							<li>item 1</li>
							<li>item 2</li>
							<li>item 3</li>
						</ul>
					</div>
					<hr />
					<div className="resume-main-content-left-entry">
						<p className="entry-title">
							<span>software consultant i</span> |{' '}
							<a href="" target="_blank">
								counterpoint consulting
							</a>
						</p>
						<p className="entry-subtitle">february 2017 - may 2018</p>
						<p className="entry-subtitle">vienna, va</p>
						<ul className="entry-items">
							<li>item 1</li>
							<li>item 2</li>
							<li>item 3</li>
						</ul>
					</div>
					<hr />
					<div className="resume-main-content-left-entry">
						<p className="entry-title">
							<span>operations lead</span> |{' '}
							<a href="" target="_blank">
								cove
							</a>
						</p>
						<p className="entry-subtitle">september 2013 - september 2016</p>
						<p className="entry-subtitle">washington, dc</p>
						<ul className="entry-items">
							<li>item 1</li>
							<li>item 2</li>
							<li>item 3</li>
						</ul>
					</div>
				</div>
				<div className="resume-main-content-right">
					<h3>education</h3>
					<div className="resume-main-content-left-entry">
						<h4>bachelor of arts - international affairs</h4>
						<h4>august 2009 - december 2013</h4>
						<h4>george washington university | washington, dc</h4>
					</div>
					<div className="resume-main-content-left-entry">
						<h4>certificate, web development immersive</h4>
						<h4>september 2016 - december 2016</h4>
						<h4>general assembly | washington, dc</h4>
					</div>
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
