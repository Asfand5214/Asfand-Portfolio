import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageSquare, Github, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Build Something
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-4">Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to turn data into actionable insights? Let's discuss your next project with Muhammad Asfand Khan.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="bg-gradient-card border-border/50 shadow-elegant animate-slide-in">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Get In Touch</CardTitle>
                <p className="text-muted-foreground">
                  I'm Muhammad Asfand Khan, and I'm always open to discussing new opportunities and innovative data science projects.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">your.email@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Lahore, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Response Time</p>
                    <p className="text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Connect with me on</p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="icon" className="hover:bg-gradient-primary hover:text-primary-foreground hover:border-primary transition-all">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-gradient-primary hover:text-primary-foreground hover:border-primary transition-all">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-gradient-primary hover:text-primary-foreground hover:border-primary transition-all">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-glow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                    <Mail className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Ready to Start?</h3>
                  <p className="mb-6 opacity-90">
                    Let's discuss how data science can transform your business goals into reality.
                  </p>
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-lg font-semibold mb-4">What I Can Help With</h3>
                  <div className="space-y-3">
                    {[
                      "Data Analysis & Visualization",
                      "Machine Learning Models",
                      "Predictive Analytics",
                      "Data Pipeline Development",
                      "AI Solution Architecture",
                      "Business Intelligence"
                    ].map((service, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-primary"></div>
                        <span className="text-muted-foreground">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;