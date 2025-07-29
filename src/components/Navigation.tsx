import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-medium text-xs">AK</span>
            </div>
            <span className="font-medium text-foreground text-sm">Muhammad Asfand Khan</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
              >
                {item.label}
              </a>
            ))}
            <Button size="sm" className="ml-2 text-xs">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border/50 py-4 space-y-3 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button size="sm" className="w-full mt-4">
              Get In Touch
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;