import "./contact.scss";
import { ArrowDown } from "lucide-react";
import { useState } from "react";
import dribbble from "../../assets/dribbble.svg";
import github from "../../assets/github.svg";
import gmail from "../../assets/gmail.svg";
import linkedin from "../../assets/linkedin.svg";
import soundcloud from "../../assets/soundcloud.svg";
// import twitter from "../../assets/twitter.svg";

const Contact = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="contact-content">
      <div>
        <h1 className="contact-heading-text">let's collaborate</h1>
        <p className="contact-heading-subtext">
          Found an issue or bug while visiting?
          <a
            href="https://github.com/donovanallen/donovanallen.github.io/issues/new?assignees=&labels=&template=bug_report.md&title=%5BBUG%2FIMPROVEMENT%5D%5Bdonovanallen.dev%5D"
            target="_blank"
            className="contact-heading-link"
          >
            Let me know!
          </a>
        </p>
      </div>
      <div className="contact-links">
        <div className="icon-grid">
          <div className="icon-grid-link">
            <a href="mailto:hello@donovanallen.dev" target="_blank">
              <img className="icon float-shadow" src={gmail} alt="gmail icon" />
            </a>
          </div>
          <div className="icon-grid-link">
            <a href="https://www.github.com/donovanallen" target="_blank">
              <img
                className="icon float-shadow"
                src={github}
                alt="github icon"
              />
            </a>
          </div>
          <div className="icon-grid-link">
            <a href="https://www.linkedin.com/in/donovan-allen" target="_blank">
              <img
                className="icon float-shadow"
                src={linkedin}
                alt="linkedin icon"
              />
            </a>
          </div>
          <div className="icon-grid-link">
            <a href="https://dribbble.com/dnvn" target="_blank">
              <img
                className="icon float-shadow"
                src={dribbble}
                alt="dribbble icon"
              />
            </a>
          </div>

          <div className="icon-grid-link">
            <a href="https://soundcloud.com/itsdnvn" target="_blank">
              <img
                className="icon float-shadow"
                src={soundcloud}
                alt="soundcloud icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
