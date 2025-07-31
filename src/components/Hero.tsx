import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-glow">
      <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
        <div className="animate-fade-in space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-foreground">
              Muhammad Asfand Khan
            </h1>
            <p className="text-lg text-muted-foreground font-light">
              Data Scientist & Engineer
            </p>
          </div>
          
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Transforming complex data into actionable insights through machine learning 
            and statistical analysis. Focused on building solutions that drive 
            meaningful business outcomes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
            <Button variant="outline" size="lg" className="min-w-32">
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>
          
          <div className="flex justify-center gap-4 pt-8">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <ArrowDown className="h-5 w-5 text-muted-foreground opacity-60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;