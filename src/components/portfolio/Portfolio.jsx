import { useState, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import "./portfolio.scss";

const Portfolio = () => {
  const ref = useRef();
  const [expanded, setExpanded] = useState(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });
const projects = [
  {
    id: 1,
    title: "Mern full stack blog app",
    img: "blog.png",
    desc: "Developed a dynamic and user-friendly web application using the MERN stack. Implemented secure and scalable authentication with Clerk. Optimized image handling and performance through ImageKit, featuring advanced image optimization and lazy loading techniques. Integrated infinite scrolling functionality with TanStack and Axios to provide a smooth and engaging data browsing experience.",
    github:"https://github.com/manaf12/full-stack-mern-blog-project-",
    live:"https://blog-app-manafs-projects-7a962bb5.vercel.app"
    
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
    img:"dashboard.png",
    desc:"React Admin Panel UI,designed with React Router DOM 6 for navigation, and utilizes Material-UI (MUI) for tables, data grids, and components. The dashboard includes reusable widgets, a Progress Bar, and interactive charts, along with a dynamic Single Item Page and Form Page Design. It also supports Dark Mode via the Context API and smooth navigation with React Router DOM Links.",
    github:"https://github.com/manaf12/Admin-Dashboard",
    live:"admin-dashboard-phi-sage-38.vercel.app"
  },
  {
    id: 4,
    title: "Responsive Blog Application Built with Next.js ",
    img: "second.jpg",
    desc: "Developed a responsive and modern blog application using Next.js to deliver fast performance and SEO optimization.The app features dynamic content rendering and is built with a focus on user experience, providing a smooth and engaging interface across all devicesOne of the standout features is the integration of Context API for state management, specifically used to allow users to switch between light and dark theme modes",
    github:"https://github.com/manaf12/nextjs-app"
  },
];


return (
  <div className="portfolio" ref={ref}>
    <div className="progress">
      <h1>Featured Works</h1>
      <motion.div style={{ scaleX }} className="progress-bar" />
    </div>

    <div className="cards-container">
      {projects.map((project, index) => (
        <motion.article
          key={project.id}
          className="project-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ delay: index * 0.1 }}
        >
          <figure className="card-image">
            <img 
              src={project.img} 
              alt={project.title}
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/fallback.jpg';
              }}
            />
          </figure>
          
          <div className="card-content">
            <h3>{project.title}</h3>
            <div className="card-description">
              <p style={{ 
                WebkitLineClamp: expanded === project.id ? 'unset' : 3 
              }}>
                {project.desc}
              </p>
              {project.desc.length > 100 && (
                <button
                  className="expand-btn"
                  onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                >
                  {expanded === project.id ? 'Show less' : 'Read more'}
                </button>
              )}
            </div>
            <div className="buttonlinks">
            <a 
              href={project.github} 
              className="github-link"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Code
            </a>
            <a 
              href={project.live} 
              className="github-link"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Live 
            </a>

            </div>
         
          </div>
        </motion.article>
      ))}
    </div>
  </div>
);
};

export default Portfolio;
