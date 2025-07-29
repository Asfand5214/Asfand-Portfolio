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
      <section id="experience" className="py-16 lg:py-24">
        <Experience />
      </section>
      <section id="projects" className="py-16 lg:py-24 bg-muted/30">
        <Projects />
      </section>
      <section id="skills" className="py-16 lg:py-24">
        <Skills />
      </section>
      <section id="contact" className="py-16 lg:py-24 bg-muted/30">
        <Contact />
      </section>
    </div>
  );
};

export default Index;
