import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const services = [
  {
    title: "Web Developer & Designer",
    description:
      "Crafting responsive and visually appealing websites tailored to your brand's identity. Specializing in modern design principles and seamless user experiences to help your business stand out online.",
    icon: "💻",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Transforming complex problems into intelligent solutions with AI. From image recognition to predictive modeling.",
    icon: "🤖",
  },
  {
    title: "Social Media Management",
    description:
      "Building and managing engaging Instagram pages to connect with your audience. Expertise in content strategy, analytics, and brand growth.",
    icon: "📱",
  },
];

const variants = {
  initial: { y: 100, opacity: 0 },
  animate: (index) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: index * 0.2 },
  }),
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div className="services" ref={ref}>
      <div className="headerSection">
        <motion.div className="textContainer">
          <p>
            I focus on helping your brand grow
            <br /> and move forward
          </p>
          <hr />
        </motion.div>

        <motion.div className="titleContainer">
          <div className="title">
            <h1>
              <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
            </h1>
          </div>
          <div className="title">
            <h1>
              <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
              Business.
            </h1>
            <motion.div 
              className="actionPill"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>WHAT CAN I HELP</span>
              <div className="arrow">→</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div className="listContainer">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            className="serviceCard"
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            whileHover={{ y: -10 }}
          >
            <div className="cardContent">
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;