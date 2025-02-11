// import '../CSS/skill-description.css'

export const SkillDescription=({heading, description, logo}: SkillDescriptionDTO)=>{
  return (
    <>
      <div className="description-container">
        <h2 className='skill-heading'>{heading}</h2>
        <div className='image-description-container'>
          <img className='skill-logo' src={logo} />
          <p className='description'>{description}</p>
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