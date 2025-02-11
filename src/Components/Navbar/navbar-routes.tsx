import { Routes, Route } from "react-router";
import { Homepage } from "../../Pages/homepage";
import { About } from "../../Pages/about";
import { MySkills } from "../../Pages/my-skills";
// import { MyProjects } from "../../Pages/my-projects";
import { Experiences } from "../../Pages/experiences";

export const NavbarRoutes = () => {
  return (
    <Routes>
      <Route index element={<Homepage />} />

      <Route path="/my-skills" element={<MySkills />} />
      {/* <Route path="my-projects" element={<MyProjects />} /> */}
      <Route path="/experience" element={<Experiences />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
