
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      color: "primary",
      skills: [
        "Machine Learning",
        "Deep Learning", 
        "Natural Language Processing",
        "LLMs & LangChain"
      ]
    },
    {
      title: "Backend Development", 
      color: "green-500",
      skills: [
        "Python/Flask",
        "Node.js/Express",
        "API Development", 
        "Database Design"
      ]
    },
    {
      title: "Cloud & Tools",
      color: "yellow-500", 
      skills: [
        "Google Cloud/Vertex AI",
        "Firebase",
        "Docker & DevOps",
        "Git & Version Control"
      ]
    }
  ];

  const tools = [
    "Ollama (localhost:11434)", "TensorFlow", "Keras", "PyTorch", 
    "LangChain", "LangGraph", "Crew.ai", "Vertex AI", "Firebase", 
    "Flask", "Node.js", "Express.js"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/5 relative overflow-hidden">
      {/* Floating AI Technologies Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-tech-bg tech-bg-1">PyTorch</div>
        <div className="floating-tech-bg tech-bg-2">OpenAI</div>
        <div className="floating-tech-bg tech-bg-3">Hugging Face</div>
        <div className="floating-tech-bg tech-bg-4">Transformers</div>
        <div className="floating-tech-bg tech-bg-5">BERT</div>
        <div className="floating-tech-bg tech-bg-6">GPT</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                    <div key={skillIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm font-medium">{skill}</span>
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
