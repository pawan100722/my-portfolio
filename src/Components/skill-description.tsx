import '../Styles/skills.css'

export const SkillDescription=({heading, description, logo}: SkillDescriptionDTO)=>{
  return (
    <>
      <div className=" skill-desc-main-container">
        <p className="skill-heading">{heading}</p>
        <div className="skill-desc-container">
          <img className="skill-logo" src={logo} />
          <p className="skill-description">{description}</p>
        </div>
      </div>
    </>
  );
}

interface SkillDescriptionDTO{
  heading: string;
  description: string;
  logo: string;
}