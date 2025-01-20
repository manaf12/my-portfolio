import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const services = [
  {
    title: "Web Developer & Designer",
    description:
      "Crafting responsive and visually appealing websites tailored to your brand's identity. Specializing in modern design principles and seamless user experiences to help your business stand out online.",
  },
  {
    title: "AI, Computer Vision & Machine Learning Specialist",
    description:
      "Transforming complex problems into intelligent solutions with AI. From image recognition to predictive modeling.",
  },
  {
    title: "Social Media Manager",
    description:
      "Building and managing engaging Instagram pages to connect with your audience. Expertise in content strategy, analytics, and brand growth to boost your online presence.",
  },
];

const variants = {
  initial: { x: -500, y: 100, opacity: 0 },
  animate: { x: 0, opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.1 } },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="People" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT CAN I HELP?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {services.map((service, index) => (
          <motion.div key={index} className="box">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
