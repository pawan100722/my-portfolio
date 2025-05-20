import { ImageLoader } from "./ImageLoader";

export const Project = ({ id, image:imageSrc, title, description, projectURL }: ProjectDTO) => {
  const image = new Image();
  image.src= imageSrc;
  image.alt=title;
  image.width=500;
  image.height=200;
  return (
    <div
      className={`project-component-container`}
      id={id}
    >
      <a href={projectURL} target="blank">
        
        <ImageLoader image={image} style={{width:'99%', height:'100%'}}/>
        <h1>{title}</h1>
        <p>{description}</p>
      </a>
    </div>
  );
};

interface ProjectDTO {
  id: string;
  image: string;
  title: string;
  description: string;
  projectURL: string;
}
