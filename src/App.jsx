import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Tools from "./components/tools/Tools";

const App = () => {

  return (
 
    <div>
      {/* <Cursor /> */}
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="Projects">
      <Portfolio />
      </section>
      <section id="tools">
        <Tools/>
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>

  );
};

export default App;