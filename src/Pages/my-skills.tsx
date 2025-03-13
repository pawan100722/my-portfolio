import { SkillDescription } from '../Components/skill-description';
import htmlLogo from '../Logos/html-logo.png';
import cssLogo from '../Logos/css-logo.png';
import jsLogo from '../Logos/js-logo.png';
import reactLogo from '../Logos/reactjs-logo.jpg';
import nodeLogo from '../Logos/nodejs-logo.png';
import '../Styles/skills.css'
import { Footer } from '../Components/footer';
import { useEffect } from 'react';

export const MySkills=()=>{

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])


  return (
    <div className="skills-page-main-container">
      <div className="skill-page-head-container">
        <h1 className="skill-page-main-heading">My Skills</h1>
        <p className="skill-page-main-description">
          As a passionate software engineer specializing in web development, I
          have developed a strong foundation in the following technologies
        </p>
      </div>
      <SkillDescription
        heading="HTML"
        description="I am proficient in crafting well-structured, semantic HTML that forms the backbone of any web page. I focus on accessibility and SEO optimization to ensure that websites are user-friendly and easy to find."
        logo={htmlLogo}
      />

      <SkillDescription
        heading="CSS"
        description="I have experience in styling web pages with modern CSS techniques, including Flexbox, Grid, and custom animations. I'm skilled in creating responsive designs that ensure a seamless experience across all devices, from mobile to desktop."
        logo={cssLogo}
      />

      <SkillDescription
        heading="JavaScript"
        description="I am comfortable working with vanilla JavaScript to create dynamic, interactive web applications. I focus on writing clean, efficient code that enhances user engagement and functionality."
        logo={jsLogo}
      />

      <SkillDescription
        heading="React JS"
        description="I have hands-on experience building single-page applications (SPAs) using React. I’m familiar with React's component-based architecture, hooks, state management, and routing to build fast and scalable user interfaces.
"
        logo={reactLogo}
      />

      <SkillDescription
        heading="Node JS"
        description="With Node.js, I am able to create robust back-end applications that complement front-end functionality. I use it to handle server-side logic, manage databases, and build RESTful APIs."
        logo={nodeLogo}
      />

      <Footer/>
    </div>
  );
}