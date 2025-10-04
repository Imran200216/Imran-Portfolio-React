import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const roles = [
    { text: "Flutter Developer", color: "#4285F4" }, // Blue
    { text: "Mobile App Engineer", color: "#34A853" }, // Green
    { text: "Cross-Platform Expert", color: "#FBBC05" }, // Yellow
    { text: "Own Firm - Freelance", color: "#FF69B4" }, // Pink
    { text: "Full Stack Flutter Developer", color: "#EA4335" }, // Red
    { text: "Firebase + Flutter Specialist", color: "#87CEEB" }, // Sky Blue
    { text: "UI/UX with Flutter", color: "#8A2BE2" }, // Purple
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
      setDisplayText("");
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const text = roles[currentIndex].text;
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
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-110"
        >
          <source src="/logos/Moon_AI_Video_Ready.mp4" type="video/mp4" />
        </video>
        {/* Overlay for transparency */}
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
      </div>

      {/* Geometric background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-4 sm:right-20 w-32 h-32 sm:w-72 sm:h-72 bg-gradient-to-br from-muted/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-4 sm:left-20 w-40 h-40 sm:w-96 sm:h-96 bg-gradient-to-tr from-muted/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] border border-border/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] border border-border/10 rounded-full"></div>
      </div>

      {/* Floating Testimonials - Hidden on mobile, visible on larger screens */}
      {/* <div className="hidden lg:block absolute top-13 right-5 z-10 transform -translate-x-1/2">
        <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 max-w-md">
          <p className="text-sm text-muted-foreground mb-2 text-center">
            "His Statistical Knowledge of approach
            <br /> Whaaaoooooo!"
          </p>
          <p className="text-xs text-muted-foreground text-center">
            - Team mates
          </p>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-1/4 left-5 bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 max-w-xs transform rotate-2 animate-pulse">
        <p className="text-sm text-muted-foreground mb-2">
          "His Leadership qualities are insane"
        </p>
        <p className="text-xs text-muted-foreground">- UNSTOP Feedback</p>
      </div>

      <div className="hidden lg:block absolute top-1/3 left-5 bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 max-w-xs transform rotate-2 animate-pulse">
        <p className="text-sm text-muted-foreground mb-2">
          "Why is he fond of Artificial Intelligence and Google Technologies"
        </p>
        <p className="text-xs text-muted-foreground">
          - My own mind voice! Lol
        </p>
      </div>

      <div className="hidden lg:block absolute top-1/3 right-1 bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 max-w-xs transform rotate-2 animate-pulse">
        <p className="text-sm text-muted-foreground mb-2">
          "He provided extraordinary AI solutions"
        </p>
        <p className="text-xs text-muted-foreground">- Zarnex.ai client</p>
      </div> */}

      {/* Main Hero Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left z-10 space-y-6 sm:space-y-8">
        {/* Role Indicator */}
        <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-muted-foreground">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span>Available for work</span>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight">
            Imran <span className="text-muted-foreground">B</span>
            <ArrowRight
              className="inline-block w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ml-2 sm:ml-4 transform -rotate-45 cursor-pointer hover:scale-110 transition-transform"
              onClick={scrollToAbout}
            />
          </h1>

          <div className="h-16 sm:h-20 flex items-center justify-center sm:justify-start">
            <p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-center sm:text-left"
              style={{ color: roles[currentIndex].color }}
            >
              {displayText}
              <span className="animate-pulse text-yellow-300">|</span>
            </p>
          </div>

          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto sm:mx-0 text-muted-foreground leading-relaxed">
            I’m a versatile Flutter developer specializing in building
            cross-platform mobile apps that deliver seamless performance and
            beautiful design. Let’s create something amazing together!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-8 justify-center sm:justify-start">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 sm:px-8 text-sm sm:text-base"
            >
              See All Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="rounded-full px-6 sm:px-8 border-foreground text-foreground hover:bg-foreground hover:text-background text-sm sm:text-base"
            >
              Contact Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
