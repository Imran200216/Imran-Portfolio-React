  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
  import { Badge } from "@/components/ui/badge";
  import { Button } from "@/components/ui/button";
  import { ArrowRight } from "lucide-react";
  import { motion } from "framer-motion";

  export const ProjectsSection = () => {
    const projects = [
      {
        title: "WhisprNet.ai",
        description:
          "An intelligent AI workforce system for cross-department automation. Streamlines HR, IT, and Finance operations through advanced AI agents.",
        tech: [
          "LangChain",
          "LangGraph",
          "Python",
          "Flask",
          "AI Agents",
          "Orchestration",
          "LLM",
          "Fine Tuning",
          "MLOps",
        ],
        featured: true,
        award: "Production",
        image: "laptop",
      },
      {
        title: "Doc Nova",
        description:
          "\ud83c\udfc6 Hackmasters '23 Winner - AI-powered healthcare platform that predicts diseases and serves as a personalized medical assistant.",
        tech: [
          "TensorFlow",
          "NLP",
          "Healthcare AI",
          "Python",
          "Deep Learning",
          "PyTorch",
          "Medicine",
          "Data Handling",
        ],
        featured: true,
        award: "Hackmasters '23 Winner",
        image: "mobile",
      },
      {
        title: "Pediatrics Genome ML",
        description:
          "Personalized dosage recommendation system based on genome sequencing data. Ensuring safe medication for children.",
        tech: ["Machine Learning", "Genomics", "PyTorch", "Medicine", "Data Handling"],
        image: "dashboard",
      },
    ];

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
        },
      },
    };

    const cardVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    };

    return (
      <section id="projects" className="py-32 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Projects Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Recent Project</span>
            </div>
            <h2 className="text-5xl font-bold mb-6">
              Projects <ArrowRight className="inline-block w-8 h-8 ml-2 transform -rotate-45" />
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcase of some of my recent AI-powered applications
            </p>
          </motion.div>

          {/* Project Cards */}
          <motion.div
            className="grid lg:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={cardVariants} transition={{ duration: 0.6 }}>
                <Card
                  className={`group hover:scale-105 transition-all duration-300 ${
                    index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                  }`}
                >
                  <div
                    className={`aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-t-lg relative overflow-hidden ${
                      index === 0 ? "aspect-[16/10]" : "aspect-video"
                    }`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      {project.image === "laptop" && (
                        <div className="w-3/4 h-3/4 bg-card rounded-lg border border-border shadow-lg flex items-center justify-center">
                          <div className="w-4/5 h-4/5 bg-primary/10 rounded flex items-center justify-center">
                            <span className="text-xs text-muted-foreground">AI Dashboard</span>
                          </div>
                        </div>
                      )}
                      {project.image === "mobile" && (
                        <div className="w-32 h-56 bg-card rounded-2xl border border-border shadow-lg relative">
                          <div className="absolute top-2 left-2 right-2 bottom-2 bg-green-500/10 rounded-xl flex items-center justify-center">
                            <span className="text-xs text-muted-foreground">Health AI</span>
                          </div>
                        </div>
                      )}
                      {project.image === "dashboard" && (
                        <div className="w-4/5 h-4/5 bg-card rounded border border-border shadow-lg flex items-center justify-center">
                          <div className="w-full h-full bg-yellow-500/10 rounded flex items-center justify-center">
                            <span className="text-xs text-muted-foreground">ML Analytics</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                    {project.award && (
                      <Badge className="w-fit bg-yellow-500/10 text-yellow-600 border-yellow-500/20">
                        {project.award}
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Freelancing Contributions Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Freelancing Contributions</span>
            </div>
  <h2 className="text-5xl font-bold mb-6">
              Freelance Works <ArrowRight className="inline-block w-8 h-8 ml-2 transform -rotate-45" />
            </h2>          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Independent solutions delivered for real-world clients and startups
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Street Resolver */}
            <motion.div variants={cardVariants} transition={{ duration: 0.6 }}>
              <Card className="group hover:scale-105 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-t-lg relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-card rounded-lg border border-border shadow-lg flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">Geo Mapping</span>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">Street Resolver</CardTitle>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    A smart system that resolves street-level addresses from partial GPS coordinates. Useful for logistics and delivery optimization.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Mapbox", "Geolocation", "Flask", "OpenStreetMap", "API Integration"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Timetable Management */}
            <motion.div variants={cardVariants} transition={{ duration: 0.6 }}>
              <Card className="group hover:scale-105 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-t-lg relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-card rounded-lg border border-border shadow-lg flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">Scheduler</span>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">Timetable Management</CardTitle>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    A centralized web app to dynamically generate, manage, and optimize academic timetables using constraints and logic.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React.js", "Node.js", "Timetable Algorithms", "MongoDB", "Express.js"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="rounded-full px-8">
                See All Projects
              </Button>
              <Button size="lg" className="bg-muted-foreground text-background hover:bg-muted-foreground/90 rounded-full px-8">
                Contact Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };
