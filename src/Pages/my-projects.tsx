import { useEffect } from 'react';
import '../Styles/projects.css';
import { Project } from "../Components/project.tsx";
import whatsappWebCloneImage from "../Images/projects/whatsapp-web-clone.png";

export const MyProjects=()=>{
  useEffect(()=>{
      window.scrollTo(0,0)
    },[])

  return (
    <div className="projects-page-container">
      <h1 className="projects-page-main-heading">My Projects</h1>
      <Project
        image={whatsappWebCloneImage}
        projectURL="https://pawan100722.github.io/whatsapp-web-clone/"
        title="Whatsapp Web Clone"
        description="This project is a clone/sample of the web version of the whatsapp app"
      />
    </div>
  );
}