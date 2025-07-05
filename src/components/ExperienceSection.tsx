
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Founder & CEO",
      company: "Zarnex.ai",
      period: "2024 - Present",
      description: "Leading an AI-based service firm delivering intelligent solutions to businesses. Building end-to-end AI systems and managing cross-functional teams.",
      color: "primary"
    },
    {
      title: "Unstop Campus Ambassador",
      company: "Unstop",
      period: "2024 - 2025",
      description: "Promoting tech events, hackathons, and opportunities within the campus community. Engaging with students and fostering innovation.",
      color: "green-500"
    },
    {
      title: "AI & Backend Developer",
      company: "Freelance",
      period: "2023 - Present",
      description: "Developing ML models, LLM applications, and backend systems for various clients. Specializing in healthcare AI and automation solutions.",
      color: "yellow-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up">
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <p className={`text-${exp.color} font-semibold`}>{exp.company}</p>
                    </div>
                    <Badge variant="outline">{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
