import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const roles = [
    "End to End AI Engineer",
    "Own firm - Freelance",
    "ML Researcher",
    "Backend Developer",
    "LLM Specialist",
    "Neural Networks in hand"
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

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Geometric background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-muted/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-muted/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-border/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/10 rounded-full"></div>
      </div>

      {/* Floating Testimonials */}
      <div className="absolute top-13 right-5 z-10 transform -translate-x-1/2">
        <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 max-w-md">
          <p className="text-sm text-muted-foreground mb-2 text-center">
            "His Statistical Knowledge of approach<br /> Whaaaoooooo!"
          </p>
          <p className="text-xs text-muted-foreground text-center">- Team mates</p>
        </div>
      </div>

      <div className="absolute bottom-1/4 left-5 bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 max-w-xs transform rotate-2 animate-pulse">
        <p className="text-sm text-muted-foreground mb-2">"His Leadership qualities are insane"</p>
        <p className="text-xs text-muted-foreground">- UNSTOP Feedback</p>
      </div>

      <div className="absolute top-1/3 left-5 bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 max-w-xs transform rotate-2 animate-pulse">
        <p className="text-sm text-muted-foreground mb-2">
          "Why is he fond of Artificial Intelligence and Google Technologies"
        </p>
        <p className="text-xs text-muted-foreground">- My own mind voice! Lol</p>
      </div>

      <div className="absolute top-1/3 right-1 bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 max-w-xs transform rotate-2 animate-pulse">
        <p className="text-sm text-muted-foreground mb-2">"He provided extraordinary AI solutions"</p>
        <p className="text-xs text-muted-foreground">- Zarnex.ai client</p>
      </div>

      {/* Main Hero Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10 space-y-8">
        {/* Role Indicator */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span>Available for work</span>
        </div>

        <div className="space-y-6">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
            Mohammed <span className="text-muted-foreground">Aashiq</span>
            <ArrowRight
              className="inline-block w-12 h-12 ml-4 transform -rotate-45 cursor-pointer hover:scale-110 transition-transform"
              onClick={scrollToAbout}
            />
          </h1>

          <div className="h-20 flex items-center">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gold">
              {displayText}
              <span className="animate-pulse text-yellow-300">|</span>
            </p>
          </div>

          <p className="text-xl max-w-2xl text-muted-foreground leading-relaxed">
            I'm a versatile AI engineer specializing in intelligent systems to help grow your business.
            Let's build something great!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8"
            >
              See All Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="rounded-full px-8 border-foreground text-foreground hover:bg-foreground hover:text-background"
            >
              Contact Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
