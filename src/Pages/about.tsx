// import '../CSS/about.css';
import { AboutDetail } from '../Components/about-detail';

export const About=()=>{
  return (
    <div className="about-main-container">
      <div className="summary-container">
        <p className="summary">
          I am Pawan Kumar, a software engineer with over 2 years of experience
          in web development. Based in Bareilly, Uttar Pradesh, India, I hold a
          BCA and an MCA degree. My expertise lies in both backend and frontend
          technologies, and I have worked on several projects that involve
          creating scalable and efficient web applications.
        </p>
        <ul className="technical-skills">
          <li>
            <span className="heading">Backend Development</span>: I have
            experience using Node.js and Express.js to build RESTful APIs, work
            with databases (such as MongoDB and MySQL), and implement features
            like authentication and authorization.
          </li>
          <li>
            <span className="heading">Frontend Development</span>: I am skilled
            in React.js, creating dynamic user interfaces, managing state with
            Redux, and ensuring responsive designs with HTML, CSS, and
            JavaScript.
          </li>
        </ul>
        <p className="skills-container">
          <h1 className="about-skill-heading">Key Skills</h1>
          <ul>
            <li>
              <span className="heading2">Backend:</span> Node.js, Nest.js, REST
              APIs, MongoDB, MySQL
            </li>
            <li>
              <span className="heading2">Frontend:</span> React.js, HTML5, CSS3
            </li>
            <li>
              <span className="heading2">Version Control:</span> Git, GitHub
            </li>
          </ul>
          I am passionate about building both backend systems and user-friendly
          interfaces, and I always aim to optimize performance and code quality.
        </p>
      </div>

      <div className='about-contact-container'>
        <h1>Contact Information</h1>
        <AboutDetail title="Email" detail="pawan100722@gmail.com" />
        <AboutDetail title="Phone" detail="8433004706" />
        {/* <AboutDetail title="Email" detail="pawan100722@gmail.com" /> */}
      </div>
    </div>
  );
}