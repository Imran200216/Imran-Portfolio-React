
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = [
    "AI Engineer",
    "Founder of Zarnex.ai", 
    "ML Researcher",
    "Backend Developer",
    "LLM Specialist"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
      setDisplayText("");
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const text = roles[currentIndex];
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-green-500/10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full neural-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-green-500 rounded-full neural-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-yellow-500 rounded-full neural-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-primary to-green-500 bg-clip-text text-transparent">
              Mohammed Aashiq
            </h1>
            <div className="h-16 flex justify-center items-center">
              <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>

          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            B.Tech AI & Data Science student passionate about building intelligent systems. 
            Specializing in <span className="text-primary font-semibold">Machine Learning</span>, 
            <span className="text-green-500 font-semibold"> Large Language Models</span>, and 
            <span className="text-yellow-500 font-semibold"> Backend Engineering</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="glow-effect" onClick={scrollToAbout}>
              Explore My Work
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/resume.pdf" target="_blank">Download Resume</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};
