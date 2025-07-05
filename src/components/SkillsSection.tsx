import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

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
    <section id="skills" className="py-24 bg-muted/5 relative overflow-hidden">
    

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-16">Skills & Tools</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card/60 border border-border shadow-xl hover:scale-[1.03] transition-transform duration-300">
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
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/60 border border-border shadow-xl">
              <CardHeader>
                <CardTitle>Favorite Tools & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool, index) => (
                    <motion.span 
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
