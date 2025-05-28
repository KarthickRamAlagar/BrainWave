import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";

const App = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="benefits">
        <Benefits />
      </div>
      <div id="collaboration">
        <Collaboration />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="roadmap">
        <Roadmap />
      </div>
      <div id="footer">
        <Footer />
      </div>
      <ButtonGradient />
    </div>
  );
};

export default App;
