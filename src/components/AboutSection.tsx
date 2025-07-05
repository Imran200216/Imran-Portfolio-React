
import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section id="about" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Your Photo */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-green-500/20 rounded-2xl relative overflow-hidden">
              <img 
                src="/lovable-uploads/6d1eec40-9ea8-43ce-9aab-8c45748e5c14.png"
                alt="Mohammed Aashiq"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-6"> Mohammed Aashiq,<br></br><h3>Your AI Expert</h3></h1>
              <p className="text-xl text-muted-foreground mb-6">AI/ML Engineer | Backend Developer </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about creating AI-focused intelligent systems that 
              simplify complex problems. With a strong foundation in tech and a keen 
              eye for innovation, I enjoy bridging the gap between functionality and 
              intelligence—turning data-driven ideas into clean, meaningful solutions.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Backend Development</h3>
                <h3 className="text-lg font-semibold">Web Scraping</h3>
                <h3 className="text-lg font-semibold">Computer Vision</h3>

              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">LLM Integration</h3>
                <h3 className="text-lg font-semibold">MLops Orchestration</h3>
                <h3 className="text-lg font-semibold">Agentic & Autonomous AI </h3>

                

                

              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <h4 className="text-sm text-muted-foreground mb-1">Freelance</h4>
                <p className="font-semibold">AI Engineer (PT)</p>
                <p className="text-sm text-muted-foreground">2023 - Present</p>
              </div>
              <div>
                <h4 className="text-sm text-muted-foreground mb-1">Own firm</h4>
                <p className="font-semibold">Zarnex.ai</p>
                <p className="text-sm text-muted-foreground">2024 - Present</p>
              </div>
              <div>
                <h4 className="text-sm text-muted-foreground mb-1">Present</h4>
                <p className="font-semibold">Student</p>
                <p className="text-sm text-muted-foreground">2023 - 2027</p>
              </div>
               <div>
                <h4 className="text-sm text-muted-foreground mb-1">Leadersip</h4>
                <p className="font-semibold">Campus Ambassador <br></br>   (Unstop)</p>
                <p className="text-sm text-muted-foreground">2024 - 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
