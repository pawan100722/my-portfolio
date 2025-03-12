export const Project = ({ image, title, description, projectURL }: ProjectDTO) => {
  const handleParentGrow = () => {
    addClass({ idParam: "parent", classNameParam: "increase-width" });
    removeClass({ idParam: "parent", classNameParam: "decrease-width" });
  };

  const handleParentShrink = () => {
    addClass({ idParam: "parent", classNameParam: "decrease-width" });
    removeClass({ idParam: "parent", classNameParam: "increase-width" });
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
    <div className="project-component-container left-animation" id="parent">
      <a href={projectURL} target="blank">
        <img
          src={image}
          alt={`${title}-project-image`}
          onMouseEnter={handleParentGrow}
          onMouseLeave={handleParentShrink}
        />
      </a>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

interface ProjectDTO {
  image: string;
  title: string;
  description: string;
  projectURL: string;
}

interface AddClassParamDTO {
  idParam: string;
  classNameParam: string;
}
