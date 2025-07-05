
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      color: "primary",
      skills: [
        { name: "Machine Learning", level: 90 },
        { name: "Deep Learning", level: 85 },
        { name: "Natural Language Processing", level: 88 },
        { name: "LLMs & LangChain", level: 92 }
      ]
    },
    {
      title: "Backend Development", 
      color: "green-500",
      skills: [
        { name: "Python/Flask", level: 90 },
        { name: "Node.js/Express", level: 85 },
        { name: "API Development", level: 88 },
        { name: "Database Design", level: 82 }
      ]
    },
    {
      title: "Cloud & Tools",
      color: "yellow-500", 
      skills: [
        { name: "Google Cloud/Vertex AI", level: 85 },
        { name: "Firebase", level: 80 },
        { name: "Docker & DevOps", level: 75 },
        { name: "Git & Version Control", level: 90 }
      ]
    }
  ];

  const tools = [
    "Ollama (localhost:11434)", "TensorFlow", "Keras", "PyTorch", 
    "LangChain", "LangGraph", "Crew.ai", "Vertex AI", "Firebase", 
    "Flask", "Node.js", "Express.js"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up">
          <h2 className="text-4xl font-bold text-center mb-12">Skills & Tools</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className={`text-${category.color}`}>{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Favorite Tools & Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
