import { Experience } from '../Components/experience';
import { Footer } from '../Components/footer';
import milestoneLogo from '../Logos/milestoneos-logo.jpg';
import pragmaLogo from '../Logos/pragma-logo.jpg';
import '../Styles/experiences.css'

export const Experiences=()=>{
  return (
    <div className="experiences-page-main-container">
      <h1 className="experiences-page-main-heading">
        My Professional Experiences
      </h1>
      <div className="experience-box">
        <Experience
          logo={milestoneLogo}
          designation="Software Trainee"
          companyName="MilestoneOS"
          from="Dec 2021"
          to="July 2022"
        />
        <div className="experience-circle"></div>
        <div className="experience-line"></div>
      </div>

      <div className="experience-box">
        <div className="experience-line"></div>
        <div className="experience-circle"></div>
        <Experience
          logo={pragmaLogo}
          designation="Software Engineer"
          companyName="Pragma Apps and Technologies Private Limited"
          from="Aug 2022"
          to="Oct 2024"
        />
      </div>
      <Footer/>
    </div>
  );
}