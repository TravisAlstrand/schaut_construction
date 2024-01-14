import "./App.css";

// Components
import Header from "./components/page_sections/Header";
import Hero from "./components/page_sections/Hero";
import About from "./components/page_sections/About";
import Services from "./components/page_sections/Services";
import Gallery from "./components/page_sections/Gallery";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
    </>
  );
}

export default App;
