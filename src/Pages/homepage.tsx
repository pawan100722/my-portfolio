import { Footer } from "../Components/footer";
import { ImageLoader } from "../Components/ImageLoader";
import myImage from "../Images/profile_pic.jpg";
import "../Styles/homepage.css";

export const Homepage = () => {
  const image = new Image();
  image.src = myImage;
  image.alt = "My Profile Image";
  image.width = 200;
  image.height = 320;
  image.style.borderRadius = "50%";

  return (
    <>
      <div className="homepage-main-container">
        <div className="homepage-items-container">
          <ImageLoader
            image={image}
            style={{
              borderRadius: "50%",
              margin: "10px",
              borderBottom: "5px solid red",
              borderTop: "5px solid green",
            }}
          />
          <p className="intro-text">
            Hi my name is Pawan Kumar. I am a{" "}
            <span className="highlighted-text">Software Engineer</span>. I am
            skilled in <span className="highlighted-text animated-text"></span>
          </p>
        </div>
      </div>
      <footer className="homepage-footer">
        <Footer />
      </footer>
    </>
  );
};
