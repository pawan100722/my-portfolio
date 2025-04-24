export const Project = ({ id, image, title, description, projectURL,animation }: ProjectDTO) => {

  return (
    <div
      className={`project-component-container ${animation}`}
      id={id}
    >
      <a href={projectURL} target="blank">
        <img src={image} alt={`${title}-project-image`} />
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
  animation: string
}
