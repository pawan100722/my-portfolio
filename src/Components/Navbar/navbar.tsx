import  { useEffect, useState } from "react";
import "../../Styles/navbar.css";
import { NavbarRoutes } from "./navbar-routes";
import { HamburgerIcon } from "../../Icons/HamburgerIcon";
// import { UserIcon } from "../../Icons/UserIcon";
// import logo from '../../Images/logo_pic.jpg'

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);


  const handleHamburgerClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(()=>{
     setTimeout(()=>{
      if(isMenuOpen){
        setMenuOpen(false)
      }
    },2000)
  },[isMenuOpen])

  return (
    <>
      <nav>
        <div className="navbar-container">
          <ul
            className={`navbar-routes-container ${isMenuOpen ? "visible auto-height" : ""}`}
          >
            <li className="navbar-list">
              <a href="#/" className="navbar-link">
                Home
              </a>
            </li>

            <li className="navbar-list">
              <a href={`#/my-skills`} className="navbar-link">
                My Skills
              </a>
            </li>
            <li className="navbar-list">
                <a href={`#/my-projects`} className="navbar-link">
                  My Projects
                </a>
              </li>
            <li className="navbar-list">
              <a href={`#/experience`} className="navbar-link">
                Experience
              </a>
            </li>
            <li className="navbar-list">
              <a href={`#/about`} className="navbar-link">
                About
              </a>
            </li>
          </ul>
          <div
            className="hamburger-logo"
            onClick={handleHamburgerClick}
          >
            <HamburgerIcon />
          </div>
        </div>

        <NavbarRoutes />
      </nav>
    </>
  );
};
