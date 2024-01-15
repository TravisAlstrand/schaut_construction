import "./App.css";
import { Toaster } from "./components/ui/toaster";

// Components
import Header from "./components/page_sections/Header";
import Hero from "./components/page_sections/Hero";
import About from "./components/page_sections/About";
import Services from "./components/page_sections/Services";
import Gallery from "./components/page_sections/Gallery";
import Reviews from "./components/page_sections/Reviews";
import Contact from "./components/page_sections/Contact";
import Footer from "./components/page_sections/Footer";

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
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
