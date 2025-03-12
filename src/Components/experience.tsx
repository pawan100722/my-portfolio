import '../Styles/experiences.css'

export const Experience=({logo,designation, companyName, from, to}: ExperienceDTO)=>{
  return (
    <div className="experience-component-container">
      <img className="experience-component-logo" src={logo} />
      <div className="experience-component-designation">{designation}</div>
      <div>
        at{" "}
        <span className="experience-component-company-name">{companyName}</span>
        &nbsp;<span className="experience-component-normal-text">
          From
        </span>{" "}
        <span className="experience-component-date-text">{from}</span>{" "}
        <span className="experience-component-normal-text">to</span>{" "}
        <span className="experience-component-date-text">{to}</span>
      </div>
    </div>
  );
}

interface ExperienceDTO{
  logo: string;
  designation: string;
  companyName: string;
  from: string;
  to: string;
}