import { useEffect } from 'react';
import '../Styles/about.css';
import { AboutDetail } from '../Components/about-detail';
import { Footer } from '../Components/footer';
import { GithubIcon } from '../Icons/GithubIcon';
import { LinkedinIcon } from '../Icons/LinkedinIcon';
import { GmailIcon } from '../Icons/GmailIcon';
import { WhatsappIcon } from '../Icons/WhatsappIcon';
import { PhoneIcon } from '../Icons/PhoneIcon';

export const About=()=>{

  useEffect(()=>{
      window.scrollTo(0,0)
    },[])
    
  return (
    <div className="about-page-main-container">
      <h1 className="about-page-main-heading">About</h1>
      <div className="about-summary-container">
        <p className="about-short-summary">
          I am Pawan Kumar, a software engineer with over 2 years of experience
          in web development. Based in Bareilly, Uttar Pradesh, India, I hold a
          BCA and an MCA degree. My expertise lies in both backend and frontend
          technologies, and I have worked on several projects that involve
          creating scalable and efficient web applications.
        </p>
        <ul className="about-tech-skills-container">
          <li>
            <span className="about-skill-heading">Backend Development</span>: I
            have experience using Node.js and Express.js to build RESTful APIs,
            work with databases (such as MongoDB and MySQL), and implement
            features like authentication and authorization.
          </li>
          <li>
            <span className="about-skill-heading">Frontend Development</span>: I
            am skilled in React.js, creating dynamic user interfaces, managing
            state with Redux, and ensuring responsive designs with HTML, CSS,
            and JavaScript.
          </li>
        </ul>
        <div className="about-tech-skills-container">
          <div className="about-skill-heading">Key Skills</div>
          <ul>
            <li>
              <span className="about-skill-heading2">Backend:</span> Node.js,
              Nest.js, REST APIs, MongoDB, MySQL
            </li>
            <li>
              <span className="about-skill-heading2">Frontend:</span> React.js,
              HTML5, CSS3
            </li>
            <li>
              <span className="about-skill-heading2">Version Control:</span>{" "}
              Git, GitHub
            </li>
          </ul>
          I am passionate about building both backend systems and user-friendly
          interfaces, and I always aim to optimize performance and code quality.
        </div>
      </div>

      <div className="about-contact-container">
        <h1 className="about-skill-heading">Contact Information</h1>
        <AboutDetail title="Email" detail="pawan100722@gmail.com" />
        <AboutDetail title="Phone" detail="9084353026" />
        {/* <AboutDetail title="Email" detail="pawan100722@gmail.com" /> */}
      </div>

      <div className="contact-icons-container">
        <a
          className="contact-icon"
          target="blank"
          href="https://github.com/pawan100722"
        >
          <GithubIcon />
        </a>

        <a
          className="contact-icon"
          target="blank"
          href="https://www.linkedin.com/in/pawan-kumar-8477801a0"
        >
          <LinkedinIcon />
        </a>
        <a
          className="contact-icon"
          target="blank"
          href="mailto:pawan100722@gmail.com"
        >
          <GmailIcon />
        </a>
        <a
          className="contact-icon"
          target="blank"
          href="tel:9084353026"
        >
          <PhoneIcon />
        </a>
        <a
          className="contact-icon"
          target="blank"
          href="https://wa.me/9084353026?text=Hello, How are you today?"
        >
          <WhatsappIcon />
        </a>
      </div>
      <div className="about-footer">
      <Footer />
      </div>
    </div>
  );
}