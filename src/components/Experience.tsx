import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Data Engineer",
    company: "Nastron Solutions",
    location: "Lahore-Onsite", 
    period: "July 2025 - Present",
    type: "Full-time",
    current: true
  },
  {
    title: "Data Scientist",
    company: "MasterLinks",
    location: "Lahore-Remote",
    period: "September 2024 - Present", 
    type: "Full-time",
    current: true
  },
  {
    title: "Software Quality Assurance Intern",
    company: "Tanbits",
    location: "Lahore-Onsite",
    period: "August 2023 - September 2023",
    type: "Internship",
    current: false
  }
];

const Experience = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-4">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering data-driven solutions and engineering excellence across industry-leading organizations
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-border/50 shadow-float hover:shadow-glow transition-all duration-500 hover:scale-[1.02] animate-slide-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-6">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Building2 className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                      <p className="text-xl font-semibold text-primary">{exp.company}</p>
                    </div>
                  </div>
                  {exp.current && (
                    <Badge className="bg-gradient-primary text-primary-foreground border-0 px-4 py-2 text-sm font-medium animate-pulse-glow">
                      Current Position
                    </Badge>
                  )}
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-lg">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="font-medium text-foreground">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-lg">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="font-medium text-foreground">{exp.location}</span>
                    </div>
                    <Badge variant="outline" className="text-sm font-medium border-primary/30 text-primary">
                      {exp.type}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;