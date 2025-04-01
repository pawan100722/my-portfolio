export const Project = ({ id, image, title, description, projectURL,animation }: ProjectDTO) => {
  const handleParentGrow = (id: string) => {
    addClass({ idParam: id, classNameParam: "increase-width" });
    removeClass({ idParam: id, classNameParam: "decrease-width" });
  };

  const handleParentShrink = (id: string) => {
    addClass({ idParam: id, classNameParam: "decrease-width" });
    removeClass({ idParam: id, classNameParam: "increase-width" });
  };

  const addClass = ({ idParam, classNameParam }: AddClassParamDTO) => {
    const parent = document.getElementById(idParam);
    parent?.classList?.add(classNameParam);
  };

  const removeClass = ({ idParam, classNameParam }: AddClassParamDTO) => {
    const parent = document.getElementById(idParam);
    parent?.classList?.remove(classNameParam);
  };

  return (
    <div
      className={`project-component-container ${animation}`}
      id={id}
      onMouseEnter={() => handleParentGrow(id)}
      onMouseLeave={() => handleParentShrink(id)}
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

interface AddClassParamDTO {
  idParam: string;
  classNameParam: string;
}
