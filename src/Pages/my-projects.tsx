import { useEffect } from 'react';
import '../Styles/projects.css';
import { Project } from "../Components/project.tsx";
import newsImage from '../Images/projects/news.png';
import amazonCloneImage from '../Images/projects/amazon-clone.png';
import whatsappWebCloneImage from "../Images/projects/whatsapp-web-clone.png";
import googleImage from '../Images/projects/google-clone.png';

export const MyProjects=()=>{
  useEffect(()=>{
      window.scrollTo(0,0)
    },[])

  return (
    <div className="projects-page-container">
      <h1 className="projects-page-main-heading">My Projects</h1>
      <Project
        id="project1"
        image={whatsappWebCloneImage}
        projectURL="https://pawan100722.github.io/whatsapp-web-clone/"
        title="Whatsapp Web Clone"
        description="This project is a clone/sample of the web version of the whatsapp app"
      />
      <Project
        id="project2"
        image={amazonCloneImage}
        projectURL="https://pawan100722.github.io/amazon-clone/"
        title="Amazon Clone"
        description="This project is a clone/sample of the amazon shopping app"
      />
      <Project
        id="project3"
        image={newsImage}
        projectURL="https://pawan100722.github.io/All-Time-News/"
        title="News App"
        description="This project is a about the news app. It gives latest news"
      />
      <Project
        id="project4"
        image={googleImage}
        projectURL="https://pawan100722.github.io/google-clone/"
        title="Google Search Clone"
        description="This project is the clone of google search"
      />
    </div>
  );
}