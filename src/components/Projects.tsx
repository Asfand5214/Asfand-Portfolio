import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, BarChart3, Brain, Bot, FileText, Search, Zap, Sun } from "lucide-react";

const projects = [
  {
    title: "Historical Stock/Revenue Data Dashboard",
    description: "Comprehensive analysis and visualization of historical financial data with interactive dashboards for decision-making.",
    icon: BarChart3,
    tags: ["Data Analysis", "Dashboard", "Visualization", "Python"]
  },
  {
    title: "Bike Trip Duration Prediction",
    description: "Regression model built using BigQuery ML to predict bike trip durations with high accuracy.",
    icon: Zap,
    tags: ["BigQuery ML", "Regression", "Machine Learning", "Prediction"]
  },
  {
    title: "Brain Tumor Detection & Classification",
    description: "AI-powered medical imaging solution for detecting and classifying brain tumors using deep learning.",
    icon: Brain,
    tags: ["Deep Learning", "Medical AI", "Classification", "Computer Vision"]
  },
  {
    title: "AI Chatbot WordPress Integration", 
    description: "Deployed intelligent chatbot on WordPress site with natural language processing capabilities.",
    icon: Bot,
    tags: ["NLP", "WordPress", "Deployment", "AI Integration"]
  },
  {
    title: "Chronic Disease Management System",
    description: "AI-driven platform for managing chronic diseases with predictive analytics and personalized recommendations.",
    icon: FileText,
    tags: ["Healthcare AI", "Predictive Analytics", "System Design", "ML"]
  },
  {
    title: "OCR Document Data Extraction",
    description: "Automated document processing system using OCR technology for efficient data extraction and digitization.",
    icon: Search,
    tags: ["OCR", "Document Processing", "Automation", "Data Extraction"]
  },
  {
    title: "SunIsUs Solar Data Ingestion",
    description: "Scalable data pipeline for solar energy data ingestion, processing, and real-time analytics.",
    icon: Sun,
    tags: ["Data Engineering", "Pipeline", "Real-time", "Solar Energy"]
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-4">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative data science and AI solutions across various domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index}
                className="group bg-gradient-card border-border/50 shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:animate-float">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;