import React from "react";
import portfolio from "../../../assets/portfolio.jpg";
import "./Home.scss";
import { motion } from "framer-motion";

const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1,
      },
    },
  };

  return (
    <motion.div
      className="container "
      id="home"
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
      }}
    >
      <div className="profile">
        <img src={portfolio} alt="portfolio" />
      </div>
      <div className="profile_text">
        <h3 className="name">
          Hi, I'm <span>Luka Benedetti</span>{" "}
        </h3>
        <span className="job">Web developer</span>
        <span className="text">
          Passionate in <br></br> frontend development.
        </span>
        <motion.a
          href="#portfolio"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          My Projects
        </motion.a>
        <div className="web">Web Developer</div>

        <div className="freelance">Freelancer</div>
      </div>
    </motion.div>
  );
};

export default Home;
