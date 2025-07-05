
import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">AI & Data Science Student</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Currently pursuing B.Tech in Artificial Intelligence and Data Science at 
                    Sri Manakula Vinayagar Engineering College. In my 3rd year, deeply passionate 
                    about pushing the boundaries of AI technology.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-green-500/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-green-500">Founder & Entrepreneur</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Founded <strong>Zarnex.ai</strong> - an AI-based service firm delivering smart, 
                    AI-backed solutions to businesses. Leading a team to build real-world AI applications 
                    that make a difference.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-card/50 backdrop-blur-sm border-yellow-500/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-yellow-500">Technical Expertise</h3>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {["Machine Learning", "Deep Learning", "NLP", "LLMs", "LangChain", "LangGraph"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Vertex AI", "Firebase", "Flask", "Node.js", "Express.js"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-red-500/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-red-500">Community & Leadership</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Unstop Campus Ambassador (2024-25), actively engaging with the tech community 
                    and mentoring fellow students in AI and backend development.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
