import './resume.scss';

import github from '../../assets/github.svg';
import gmail from '../../assets/gmail.svg';
import linkedin from '../../assets/linkedin.svg';

const ResumeTwo = () => {
	return (
		<div className="resume-container">
			{/* HEADER */}
			{/* <header className="resume-header">
				<div className="resume-title">
					<h1 className="resume-title-text">resume</h1>
					<span className="resume-title-subtext">
						neil donovan allen
						<span className="resume-title-subtext-2"> | houston, tx, usa</span>
					</span>
					<button className="resume-title-btn">download</button>
				</div>
				<div className="resume-header-content">
					<div className="contact-container">
						<div className="icon-grid">
							<div className="icon-grid-link">
								<a href="mailto:hello@donovanallen.dev" target="_blank">
									<img className="icon" src={gmail} alt="gmail icon" />
								</a>
							</div>
							<div className="icon-grid-link">
								<a href="https://www.github.com/donovanallen" target="_blank">
									<img className="icon" src={github} alt="github icon" />
								</a>
							</div>
							<div className="icon-grid-link">
								<a
									href="https://www.linkedin.com/in/donovan-allen"
									target="_blank"
								>
									<img className="icon" src={linkedin} alt="linkedin icon" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</header> */}

			<header>
				<div className="resume-header-title">
					<h1>Donovan Allen</h1>
					<h2>Senior Web Engineer</h2>
				</div>
			</header>

			<div className="resume-content">
				<div className="resume-content-left">
					<div className="resume-content-section">
						<h4>experience</h4>
						<div className="resume-content-entry">
							<h3>engineer ii</h3>
							<h5>lululemon</h5>
							<h5>february 2022 - present | remote/houston, tx</h5>
							<p>short description</p>
						</div>
						<div className="resume-content-entry">
							<h3>sr. software engineer</h3>
							<h5>deloitte digital</h5>
							<h5>
								june 2018 - february 2022 | 3+ years | arlington, va/new york
								city, ny
							</h5>
							<p>short description</p>
						</div>
						<div className="resume-content-entry">
							<h3>software consultant</h3>
							<h5>counterpoint consulting</h5>
							<h5>february 2017 - may 2018 | 1+ year | vienna, va</h5>
							<p>short description</p>
						</div>
						<div className="resume-content-entry">
							<h3>operations lead</h3>
							<h5>cove</h5>
							<h5>
								september 2013 - september 2016 | 3 years | washington, dc
							</h5>
							<p>short description</p>
						</div>
					</div>
					<div className="resume-content-section">
						<h4>education</h4>
						<div className="resume-content-entry">
							<h3>certificate, web development immersive</h3>
							<h5>general assembly</h5>
							<h5>september 2016 - december 2016 | washington, dc</h5>
						</div>
						<div className="resume-content-entry">
							<h3>bachelor of arts, international affairs</h3>
							<h5>george washington university</h5>
							<h5>august 2009 - december 2013 | washington, dc</h5>
						</div>
					</div>
				</div>
				<div className="resume-content-right">
					<div>
						<p>contact info here</p>
					</div>
					<div>
						<h4>competencies</h4>
						<ul>
							<li>title</li>
							<li>company</li>
							<li>dates | length | location</li>
							<li>short descripition</li>
						</ul>
						<h4>tools & technologies</h4>
						<ul>
							<li>title</li>
							<li>company</li>
							<li>dates | length | location</li>
							<li>short description</li>
						</ul>
						<h4>languages</h4>
						<ul>
							<li>title</li>
							<li>company</li>
							<li>dates | length | location</li>
							<li>short description</li>
						</ul>
						<h4>links</h4>
						<ul>
							<li>title</li>
							<li>company</li>
							<li>dates | length | location</li>
							<li>short description</li>
						</ul>
					</div>
				</div>
			</div>

			{/* SUB CONTENT */}
			{/* <div className="resume-sub-content">
			</div> */}

			{/* MAIN CONTENT */}
			{/* <div className="resume-main-content">
				
					
					
				</div>
				<div className="resume-main-content-right">
					

					<h3>tools & tech</h3>
					<h4>development</h4>
					<ul className="tools">
						<li>javascript</li>
						<li>typescript</li>
						<li>java</li>
						<li>angular</li>
						<li>react</li>
						<li>redux</li>
						<li>vue</li>
						<li>node</li>
						<li>next.js</li>
						<li>d3</li>
						<li>postgres</li>
						<li>python</li>
						<li>html</li>
						<li>css/sass</li>
					</ul>
					<h4>infrastructure</h4>
					<ul className="tools">
						<li>git</li>
						<li>docker</li>
						<li>jenkins</li>
						<li>gitlab</li>
						<li>aws</li>
						<li>sentry</li>
						<li>kibana</li>
						<li>mulesoft</li>
						<li>kubernetes</li>
						<li>kafka</li>
						<li>terraform</li>
					</ul>
					<h4>design</h4>
					<ul className="tools">
						<li>figma</li>
						<li>contentful</li>
					</ul>
				</div>
			</div> */}
		</div>
	);
};

export default ResumeTwo;
