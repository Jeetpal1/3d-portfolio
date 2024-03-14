import { NavLink } from "react-router-dom";

import { jeetpalPic } from "../assets/images";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img
          src={jeetpalPic}
          alt="logo"
          className="w-20 h-20 object-contain rounded-3xl hover:w-24 hover:h-24 transition-all duration-300 ease-in-out"
        />
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
