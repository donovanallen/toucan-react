import './resume.scss';

import github from '../../assets/github.svg';
import gmail from '../../assets/gmail.svg';
import linkedin from '../../assets/linkedin.svg';

const Resume = () => {
	return (
		<div className="resume-container">
			{/* HEADER */}
			<header className="resume-header">
				<div className="resume-title">
					<h1 className="resume-title-text">resume</h1>
					<span className="resume-title-subtext">
						neil donovan allen
						<span className="resume-title-subtext-2"> | houston, tx, usa</span>
					</span>
					{/* <button className="resume-title-btn">download</button> */}
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
			</header>

			{/* SUB CONTENT */}
			<div className="resume-sub-content">
				{/* <p>This is where a potential skills carousel could go</p> */}
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
					<li>figma</li>
					<li>contentful</li>
				</ul>
			</div>

			{/* MAIN CONTENT */}
			<div className="resume-main-content">
				<div className="resume-main-content-left">
					<h2 className="resume-main-content-left-title">experience</h2>
					<div className="resume-main-content-left-entry">
						<p className="entry-title">
							engineer ii{' '}
							<a href="https://shop.luluemon.com" target="_blank">
								| lululemon
							</a>
						</p>
						<p className="entry-subtitle">february 2022 - present</p>
						<p className="entry-subtitle">remote/houston, tx</p>
					</div>
					<hr />
					<div className="resume-main-content-left-entry">
						<p className="entry-title">
							sr. software engineer{' '}
							<a href="https://www.deloittedigital.com" target="_blank">
								| deloitte digital
							</a>
						</p>
						<p className="entry-subtitle">june 2018 - february 2022</p>
						<p className="entry-subtitle">arlington, va/new york city, ny</p>
					</div>
					<hr />
					<div className="resume-main-content-left-entry">
						<p className="entry-title">
							software consultant i{' '}
							<a href="https://www.counterpointconsulting.com" target="_blank">
								| counterpoint consulting
							</a>
						</p>
						<p className="entry-subtitle">february 2017 - may 2018</p>
						<p className="entry-subtitle">vienna, va</p>
					</div>
					<hr />
					<div className="resume-main-content-left-entry">
						<p className="entry-title">
							operations lead{' '}
							<a href="https://www.cove.is/" target="_blank">
								| cove
							</a>
						</p>
						<p className="entry-subtitle">september 2013 - september 2016</p>
						<p className="entry-subtitle">washington, dc</p>
					</div>
				</div>
				<div className="resume-main-content-right">
					{/* EDUCATION */}
					<h3>education</h3>
					<div className="resume-main-content-left-entry">
						<p className="entry-title">
							<span>bachelor of arts, international affairs</span>
						</p>
						<p>
							<a href="https://www.gwu.edu/" target="_blank">
								george washington university
							</a>{' '}
							| washington, dc
						</p>
						<p className="entry-subtitle">august 2009 - december 2013</p>
					</div>
					<div className="resume-main-content-left-entry">
						<p className="entry-title">
							<span>certificate, web development immersive</span>
						</p>
						<p>
							<a href="https://generalassemb.ly/">general assembly</a> |
							washington, dc
						</p>
						<p className="entry-subtitle">september 2016 - december 2016</p>
					</div>

					{/* TOOLS/TECH */}
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
					{/* <h3>awards/honors/press</h3> */}
				</div>
			</div>
		</div>
	);
};

export default Resume;
