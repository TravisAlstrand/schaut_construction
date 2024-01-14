import "./App.css";

// Components
import Header from "./components/page_sections/Header";
import Hero from "./components/page_sections/Hero";
import About from "./components/page_sections/About";
import Services from "./components/page_sections/Services";
import Gallery from "./components/page_sections/Gallery";
import Reviews from "./components/page_sections/Reviews";
import Contact from "./components/page_sections/Contact";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Reviews />
      <Contact />
    </>
  );
}

export default App;
