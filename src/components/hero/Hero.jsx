import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: { duration: 2, repeat: Infinity },
  },
};

const buttonVariants = {
  hover: {
    y: -5,
    background: "rgba(255, 165, 0, 0.1)",
    borderColor: "orange",
    transition: { type: "spring", stiffness: 300 },
  },
  tap: { scale: 0.95 },
};

const sliderVariants = {
  initial: { x: 0 },
  animate: {
    x: "-220%",
    transition: { repeat: Infinity, repeatType: "mirror", duration: 20 },
  },
};

const Hero = () => {
  const handleScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    targetElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>I'm Manaf Alsaoub</motion.h2>
          <motion.h1 variants={textVariants}>
            Web Developer & UI Designer
          </motion.h1>

          <motion.div className="buttons">
            <motion.button
              onClick={() => handleScroll("Portfolio")}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="portfolio-btn"
            >
              <span>🚀 Latest Works</span>
            </motion.button>

            <motion.button
              onClick={() => handleScroll("Contact")}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="contact-btn"
            >
              <span>📬 Contact Me</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web Developer
      </motion.div>

      <div className="imageContainer">
        <img src="/me.png" alt="Profile" />
      </div>
    </div>
  );
};

export default Hero;
