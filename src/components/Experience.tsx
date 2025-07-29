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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-4">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building data solutions and driving insights across different organizations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative mb-8 animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-24 w-0.5 h-16 bg-gradient-to-b from-primary to-accent"></div>
              )}
              
              <Card className="bg-gradient-card border-border/50 shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-lg font-medium text-primary">{exp.company}</p>
                    </div>
                  </div>
                  {exp.current && (
                    <Badge className="bg-gradient-primary text-primary-foreground border-0">
                      Current
                    </Badge>
                  )}
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {exp.type}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;