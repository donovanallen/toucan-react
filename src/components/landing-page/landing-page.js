import "./landing-page.scss";
import Typed from "react-typed";
import Footer from "../footer/footer";

const marqueeList = [
  "web engineer",
  "creator",
  "plant dad",
  "human-centered designer",
  "athlete",
  "UI artisan",
  "musician",
  "code craftsman",
  "amateur mixologist",
  "tinkerer",
  "favorite uncle x2",
  "music producer",
  "third-culture kid",
  "he/him",
];

const LandingPage = () => {
  return (
    <div className="app-container">
      <div className="app-content">
        <header className="app-header">
          <div className="hero-heading-main">
            <h1 className="hero-heading-text">
              donovan<span className="hero-heading-text-landmark">allen</span>
            </h1>
          </div>
          <Typed
            className="hero-marquee-text"
            strings={marqueeList}
            typeSpeed={60}
            backDelay={2000}
            backSpeed={30}
            cursorChar={"_"}
            shuffle
            loop
          ></Typed>
        </header>
        <div className="app-content-text">
          <p>
            currently: creating digital elevated experiences at{" "}
            <a href="https://shop.lululemon.com" target="_blank">
              lululemon
            </a>
          </p>
          <p>
            previously: software engineer at{" "}
            <a
              className="secondary"
              href="https://www.deloittedigital.com/"
              target="_blank"
            >
              Deloitte Digital
            </a>
          </p>
          {/* <p>this site was built with react</p> */}
          {/* <p>
            "Whatever our role, we are designers of information. Our choices
            alter the presentation and flow of human knowledge. We control how
            people find, understand, and use information in every facet of their
            lives.
          </p>
          <p>We must be very, very careful."</p>
          <p>
            - Lisa Marie Marquis, "Everyday Information Architecture" (2019)
          </p>
          <ArrowDown className="content-arrow-down" size={36} strokeWidth={1} /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
