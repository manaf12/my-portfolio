import { useRef } from "react";
import "./tools.scss";
import { motion, useInView } from "framer-motion";

const tools = [
  {
    title: "Web Development",
    description: "Modern web development using cutting-edge technologies",
    icon: "🌐",
    stack: ["JavaScript (ES6+)", "React", "Next.js", "Node.js", "TypeScript","Express.js"]
  },
  {
    title: "E-Commerce",
    description: "Full-service e-commerce solutions",
    icon: "🛒",
    stack: ["Shopify", "WooCommerce", "Payment Gateways", "Inventory Systems"]
  },
  {
    title: "Design Tools",
    description: "Professional design implementation",
    icon: "🎨",
    stack: ["Figma", "Adobe XD", "Photoshop", "WebGL", "Three.js"]
  },
  {
    title: "AI & Cloud",
    description: "Intelligent solutions infrastructure",
    icon: "☁️",
    stack: ["Python", "TensorFlow", "AWS", "Firebase", "Docker"]
  }
];

const variants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: (index) => ({
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, delay: index * 0.1 }
  }),
  hover: { y: -10 }
};

const Tools = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px", once: true });

  return (
    <motion.div className="tools" ref={ref}>
      <div className="headerSection">
        <motion.div 
          className="textContainer"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>
            Leveraging Modern Technologies
            <br /> to Drive Digital Innovation
          </p>
          <hr />
        </motion.div>

        <motion.div 
          className="titleContainer"
          initial={{ y: 50 }}
          animate={{ y: isInView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="title">
            <h1>
              <motion.b whileHover={{ color: "orange" }}>Tech</motion.b> Stack
            </h1>
          </div>
          <div className="title">
            <h1>
              <motion.b whileHover={{ color: "orange" }}>&</motion.b> Expertise
            </h1>
          </div>
        </motion.div>
      </div>

      <motion.div className="gridContainer">
        {tools.map((tool, index) => (
          <motion.div 
            key={index}
            className="toolCard"
            variants={variants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            whileHover="hover"
            custom={index}
          >
            <div className="cardContent">
              <div className="iconWrapper">
                <div className="iconGlow" />
                <div className="icon">{tool.icon}</div>
              </div>
              <h3>{tool.title}</h3>
              <p className="description">{tool.description}</p>
              <div className="stack">
                {tool.stack.map((item, i) => (
                  <motion.span 
                    key={i}
                    className="stackItem"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Tools;