import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, BarChart, Cog, GraduationCap, Award } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Development",
    icon: Code,
    skills: ["Python", "SQL", "R", "JavaScript", "Machine Learning", "Deep Learning", "TensorFlow", "PyTorch"]
  },
  {
    title: "Data Engineering & Analytics",
    icon: Database,
    skills: ["BigQuery", "Data Pipeline", "ETL", "Apache Spark", "Pandas", "NumPy", "Data Modeling", "Cloud Platforms"]
  },
  {
    title: "Visualization & BI",
    icon: BarChart,
    skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly", "Dashboard Design", "Statistical Analysis"]
  },
  {
    title: "Tools & Technologies",
    icon: Cog,
    skills: ["Git", "Docker", "AWS", "GCP", "Jupyter", "WordPress", "OCR", "API Development"]
  }
];

const education = {
  degree: "Bachelor of Computer Science",
  institution: "Bahria University",
  period: "2021 - 2025",
  icon: GraduationCap
};

const certifications = [
  {
    title: "Project Management Specialization",
    provider: "Google",
    icon: Award
  },
  {
    title: "Python for Data Science, AI and Development", 
    provider: "IBM",
    icon: Award
  },
  {
    title: "Data-Driven Decision Making (DDDM) Specialization",
    provider: "University at Buffalo",
    icon: Award
  },
  {
    title: "Data Engineering, Big Data, and Machine Learning on GCP",
    provider: "Google Cloud",
    icon: Award
  }
];

const Skills = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Skills &
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-4">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical proficiencies and continuous learning journey
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 shadow-elegant hover:shadow-glow transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg font-semibold">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="hover:bg-gradient-primary hover:text-primary-foreground transition-all cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Education and Certifications */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Education */}
          <Card className="bg-gradient-card border-border/50 shadow-elegant animate-fade-in">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold">Education</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-medium text-foreground mb-2">{education.degree}</h3>
              <p className="text-primary font-medium mb-1">{education.institution}</p>
              <p className="text-muted-foreground text-sm">{education.period}</p>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="bg-gradient-card border-border/50 shadow-elegant animate-fade-in">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Award className="h-5 w-5 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold">Certifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-l-2 border-primary/20 pl-4">
                    <h4 className="font-medium text-foreground text-sm">{cert.title}</h4>
                    <p className="text-primary text-sm font-medium">{cert.provider}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;