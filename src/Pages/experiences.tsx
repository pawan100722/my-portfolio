import { Experience } from '../Components/experience';
import milestoneLogo from '../Logos/milestoneos-logo.jpg';
import pragmaLogo from '../Logos/pragma-logo.jpg';

export const Experiences=()=>{
  return (
    <div className="experiences-page-main-container">
      <div className="experience-box">
        <Experience
        logo={milestoneLogo}
          designation="Software Trainee"
          companyName="MilestoneOS"
          from="Dec 2021"
          to="July 2022"
        />
        <div className="line"></div>
        <div className="circle"></div>
      </div>

      <div className="experience-box">
        <div className="circle"></div>
        <div className="line"></div>
        <Experience
        logo={pragmaLogo}
          designation="Software Engineer"
          companyName="Pragma Apps and Technologies Private Limited"
          from="Aug 2022"
          to="Oct 2024"
        />
      </div>
    </div>
  );
}