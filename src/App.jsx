import { MotionConfig } from "framer-motion";
import ScrollProgress from "./components/animation/ScrollProgress";
import CustomCursor from "./components/animation/CustomCursor";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import About from "./components/sections/About";
import Programs from "./components/sections/Programs";
import Testimonials from "./components/sections/Testimonials";
import Admissions from "./components/sections/Admissions";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Stats />
        <Programs />
        <Testimonials />
        <Admissions />
      </main>
      <Footer />
    </MotionConfig>
  );
}
