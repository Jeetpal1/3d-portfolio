import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-green py-4 px-8 text-white mx-5">
        Hello, I'm
        <span className="font-semibold mx-2 text-white">Jeetpal Singh</span>
        👋
        <br />A Full Stack Developer from Winnipeg, Canada 🍁
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Specializing in cloud solutions and full-stack development, <br />{" "}
          with a focus on creating innovative web applications
        </p>

        <Link to="/about" className="neo-brutalism-white neo-btn">
          Learn more
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          Led the development of advanced 3D Visualization Web Portals <br />{" "}
          and contributed to enhancing user experiences
        </p>

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          Visit my portfolio
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Interested in collaborative opportunities or need a project
          consultation? <br /> Let's connect and explore possibilities
        </p>

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          Let's talk
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain " />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
