import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <section id="experience" className="py-12 lg:py-16 transition-all duration-700 ease-in-out">
        <Experience />
      </section>
      <section id="projects" className="py-12 lg:py-16 bg-muted/30 transition-all duration-700 ease-in-out">
        <Projects />
      </section>
      <section id="skills" className="py-12 lg:py-16 transition-all duration-700 ease-in-out">
        <Skills />
      </section>
      <section id="contact" className="py-12 lg:py-16 bg-muted/30 transition-all duration-700 ease-in-out">
        <Contact />
      </section>
    </div>
  );
};

export default Index;
