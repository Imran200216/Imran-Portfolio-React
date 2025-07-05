
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Star } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "WhisprNet.ai",
      description: "An intelligent AI workforce system for cross-department automation. Streamlines HR, IT, and Finance operations through advanced AI agents.",
      tech: ["LangChain", "LangGraph", "Python", "Flask", "AI Agents"],
      color: "primary",
      featured: true
    },
    {
      title: "Doc Nova",
      description: "🏆 Hackmasters '23 Winner - AI-powered healthcare platform that predicts diseases and serves as a personalized medical assistant.",
      tech: ["TensorFlow", "NLP", "Healthcare AI", "Python", "React"],
      color: "green-500",
      featured: true,
      award: "Hackmasters '23 Winner"
    },
    {
      title: "Pediatrics Genome ML Model",
      description: "Personalized dosage recommendation system based on genome sequencing data. Ensuring safe medication for children.",
      tech: ["Machine Learning", "Genomics", "PyTorch", "Bioinformatics"],
      color: "yellow-500"
    },
    {
      title: "Street Resolver",
      description: "Full-stack civic engagement system for complaint redressal. Connecting citizens with local authorities for efficient problem solving.",
      tech: ["Node.js", "Express.js", "MongoDB", "React", "REST API"],
      color: "red-500"
    },
    {
      title: "Timetable Scheduler",
      description: "Built for Dr.M.G.R. Govt. College (Viluppuram) - Automated scheduling system for academic institutions.",
      tech: ["Algorithm Design", "Python", "Database Design", "Web App"],
      color: "purple-500"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:scale-105 ${
                  project.featured ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    {project.featured && <Star className="w-5 h-5 text-yellow-500" />}
                  </div>
                  {project.award && (
                    <Badge className="w-fit bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                      {project.award}
                    </Badge>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className={`px-2 py-1 bg-${project.color}/10 text-${project.color} rounded text-xs`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" variant="ghost">
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
