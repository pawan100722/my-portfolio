// import '../CSS/experience.css'

export const Experience=({logo,designation, companyName, from, to}: ExperienceDTO)=>{
  return (
    <div className="experience-container">
      <img className='experience-logo' src={logo}/>
      <div className="designation-text">{designation}</div>
      <div>
        at <span className='company-name'>{companyName}</span>
        &nbsp;<span className='normal-text'>From</span> <span className='date-text'>{from}</span> <span className='normal-text'>to</span> <span className='date-text'>{to}</span>
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