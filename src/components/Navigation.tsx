
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { LeetcodeIcon } from "@/components/icons/leetcode.tsx";
import { HuggingFaceIcon } from "@/components/icons/huggingface.tsx";



export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/6d1eec40-9ea8-43ce-9aab-8c45748e5c14.png" 
              alt="MA Logo" 
              className="w-8 h-8"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-primary transition-colors">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Testimonials</button>

            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button>
            
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/aashiqmustak" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://linkedin.com/in/mdaashiq" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://leetcode.com/u/aashiqmustak" target="_blank" rel="noopener noreferrer">
                <LeetcodeIcon className="w-5 h-5" />
              </a>
            </Button>
             <Button variant="ghost" size="sm" asChild>
              <a href="https://huggingface.co/aashiqmustak" target="_blank" rel="noopener noreferrer">
                <HuggingFaceIcon className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
