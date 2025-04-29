import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
    </div>
  );
}
