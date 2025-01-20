import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Mern full stack blog app",
    img: "first-img.jpg",
    desc: "Developed a dynamic and user-friendly web application using the MERN stack. Implemented secure and scalable authentication with Clerk. Optimized image handling and performance through ImageKit, featuring advanced image optimization and lazy loading techniques. Integrated infinite scrolling functionality with TanStack and Axios to provide a smooth and engaging data browsing experience.",
    github:"https://github.com/manaf12/full-stack-mern-blog-project-"
  },
  {
    id: 2,
    title: "Responsive Social Media Web Application",
    img:"social.jpg",
    desc: "Developed a fully responsive social media platform utilizing the MERN stac, to provide users with an intuitive, dynamic, and scalable social networking experience. This platform integrates real-time features using Socket.IO.",
    github:"https://github.com/manaf12/social-media-app"

  },
  {
    id:3,
    title:"Admin Dashboard",
    img:"admindashboard.jpg",
    desc:"React Admin Panel UI,designed with React Router DOM 6 for navigation, and utilizes Material-UI (MUI) for tables, data grids, and components. The dashboard includes reusable widgets, a Progress Bar, and interactive charts, along with a dynamic Single Item Page and Form Page Design. It also supports Dark Mode via the Context API and smooth navigation with React Router DOM Links.",
    github:"https://github.com/manaf12/Admin-Dashboard",
  },
  {
    id: 4,
    title: "Responsive Blog Application Built with Next.js ",
    img: "second.jpg",
    desc: "Developed a responsive and modern blog application using Next.js to deliver fast performance and SEO optimization.The app features dynamic content rendering and is built with a focus on user experience, providing a smooth and engaging interface across all devicesOne of the standout features is the integration of Context API for state management, specifically used to allow users to switch between light and dark theme modes",
    github:"https://github.com/manaf12/nextjs-app"

  },
 

  {
    id: 5,
    title: "Smart water production line",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Developed an AI-powered system using YOLOv8 for bottle detection and production process automation. Integrated computer vision with PLCs to control production line operations, including bottle counting, water flow adjustment, and processing time tracking.",
    github:"https://github.com/manaf12/social-media-app"

  },

];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.github} target="_blank" rel="noopener noreferrer">
              <img
                src="/link.png"
                alt="GitHub Logo"
                style={{ width: "30px", height: "30px", cursor: "pointer" }}
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
