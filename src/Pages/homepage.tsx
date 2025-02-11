import myImage from '../Images/profile_pic.jpg';
// import '../CSS/homepage.css';

export const Homepage=()=>{
  return (
    <>
      <div className="main-container">
          <img src={myImage} />
        <div className="text-container">
          <p className='intro-text'>
            Hi my name is Pawan Kumar. I am a <span className='highlighted-text'>Software Engineer</span>. I
            am skilled in <span className='highlighted-text'>Web Development</span>
          </p>
        </div>
      </div>
    </>
  );
}