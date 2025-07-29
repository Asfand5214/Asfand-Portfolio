import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <Badge variant="outline" className="mb-6 text-sm font-medium border-primary/20 bg-primary/5">
            Data Scientist & Engineer
          </Badge>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Muhammad Asfand Khan
          </h1>
          
          <div className="mb-6">
            <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-4">
              Data-Driven Innovation
            </h2>
          </div>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Experienced data scientist specializing in leveraging data-driven insights for effective 
            decision-making and problem-solving. Building predictive models that drive efficiency 
            and innovation across diverse industries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="shadow-glow hover:shadow-elegant transition-all duration-300">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="group">
              <FileText className="mr-2 h-5 w-5 group-hover:animate-float" />
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 mb-16">
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="animate-float">
          <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;