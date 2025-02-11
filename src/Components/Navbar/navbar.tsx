import  { useState } from "react";
// import "../../CSS/navbar.css";
import { NavbarRoutes } from "./navbar-routes";
import { HamburgerIcon } from "../../Icons/HamburgerIcon";
// import { UserIcon } from "../../Icons/UserIcon";
// import logo from '../../Images/logo_pic.jpg'

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  // const baseUrl='/Pawan-Kumar-Portfolio'

  const handleHamburgerClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav>
        <div
          className="navbar-container"
          style={isMenuOpen ? { height: "12em" } : {}}
        >
          <div
            className="navbar-routes"
            style={
              isMenuOpen
                ? {
                    display: "flex",
                    flexDirection: "column",
                  }
                : {}
            }
          >
            <ul>
              <li>
                <a href="#/" className="navbar-link">
                  Home
                </a>
              </li>

              <li>
                <a href={`#/my-skills`} className="navbar-link">
                  My Skills
                </a>
              </li>
              {/* <li>
                <a href={`#/my-projects`} className="navbar-link">
                  My Projects
                </a>
              </li> */}
              <li>
                <a href={`#/experience`} className="navbar-link">
                  Experience
                </a>
              </li>
              <li>
                <a href={`#/about`} className="navbar-link">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="hamburger-logo navbar-link"
          onClick={handleHamburgerClick}
        >
          <HamburgerIcon />
        </div>
        <NavbarRoutes />
      </nav>
    </>
  );
};
