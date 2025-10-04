import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export const ProjectsSection = () => {
  const getTechUrl = (tech: string): string => {
    const techUrls: { [key: string]: string } = {
      // AI/ML Technologies
      LangChain: "https://www.langchain.com/",
      LangGraph: "https://langchain-ai.github.io/langgraph/",
      LLM: "https://en.wikipedia.org/wiki/Large_language_model",
      "Fine Tuning": "https://openai.com/blog/fine-tuning/",
      MLOps: "https://mlops.community/",
      TensorFlow: "https://www.tensorflow.org/",
      PyTorch: "https://pytorch.org/",
      "Deep Learning": "https://en.wikipedia.org/wiki/Deep_learning",
      "Machine Learning": "https://en.wikipedia.org/wiki/Machine_learning",
      NLP: "https://en.wikipedia.org/wiki/Natural_language_processing",
      "Computer Vision": "https://en.wikipedia.org/wiki/Computer_vision",
      Genomics: "https://en.wikipedia.org/wiki/Genomics",

      // Programming Languages & Frameworks
      Python: "https://www.python.org/",
      Flask: "https://flask.palletsprojects.com/",
      "React.js": "https://reactjs.org/",
      "Node.js": "https://nodejs.org/",
      "Express.js": "https://expressjs.com/",

      // Databases & Storage
      MongoDB: "https://www.mongodb.com/",

      // APIs & Services
      Mapbox: "https://www.mapbox.com/",
      OpenStreetMap: "https://www.openstreetmap.org/",
      "API Integration": "https://en.wikipedia.org/wiki/API",

      // Specialized Technologies
      "AI Agents": "https://en.wikipedia.org/wiki/Intelligent_agent",
      Orchestration: "https://en.wikipedia.org/wiki/Orchestration_(computing)",
      "Healthcare AI":
        "https://en.wikipedia.org/wiki/Artificial_intelligence_in_healthcare",
      Medicine: "https://en.wikipedia.org/wiki/Medicine",
      "Data Handling": "https://en.wikipedia.org/wiki/Data_processing",
      Geolocation: "https://en.wikipedia.org/wiki/Geolocation",
      "Timetable Algorithms":
        "https://en.wikipedia.org/wiki/Scheduling_(computing)",
    };

    return (
      techUrls[tech] ||
      `https://www.google.com/search?q=${encodeURIComponent(tech)}`
    );
  };

  const projects = [
    // KARS Application & Admin Panel
    {
      title: "KARS Application & Admin Panel",
      description:
        "The KARS app is a comprehensive community management platform designed to help organizations seamlessly manage their members, training programs, and events. It provides features to add and maintain member details, schedule and track training sessions, and display upcoming events and prayer times. The app also integrates a nearby mosque locator for convenience, along with a built-in Hijri calendar to highlight important Islamic dates. By combining organizational management with essential religious tools, KARS serves as a powerful assistant for both administrators and members.",
      tech: [
        "Graphql",
        "Localization",
        "Apollo Server",
        "REST Api",
        "GetX",
        "Google Map",
        "ShoreBird",
        "Firebase Firestore, Push Notification",
        "TestFlight",
        "App Store Connect",
        "Playstore",
      ],
      featured: true,
      award: "Production",
      image: "/logos/KARS.png",
      url: "https://apps.apple.com/in/app/kuwait-amateur-radio-society/id6717586319",
    },

    // RestaPOS
    {
      title: "RestaPOS",
      description:
        "RestaPOS is a comprehensive restaurant Point-of-Sale (POS) app designed to streamline billing, order management, and table operations. It allows staff to quickly take orders, process payments, and manage inventory efficiently. The app supports printer integration for receipts, localizes printer settings for different restaurants, and provides real-time updates for orders. Built with Flutter Web and Windows, RestaPOS ensures a smooth and responsive experience for both front-of-house and back-of-house operations.",
      tech: [
        "Graphql",
        "Apollo Server",
        "GetX",
        "Flutter Web, Windows",
        "Google Cloud",
        "POS Printer Management",
        "Printer Localization",
        "Postgres",
        "Hive (Local Storage)",
      ],
      featured: true,
      award: "Production",
      image: "/logos/restapos.png",
      url: "https://restasmart.com/",
    },

    // Scanner App
    {
      title: "Business Card Scanner Application(Google ML Kit)",
      description:
        "A scanner app using Google ML Kit to scan business cards and extract key entities like name, email, phone number, and company. Extracted information is structured and stored securely in Firebase Firestore. Provider is used for efficient state management, ensuring a smooth and responsive user experience.",

      tech: [
        "Google ML Kit Entity Extraction (Dart Package)",
        "Provider",
        "Firebase Firestore",
      ],
      featured: true,
      award: "Prototype",
      image: "/logos/scanner-appikorn.png",
      url: "",
    },

    // Virtual Business Card Application
    {
      title: "Virtual Business Card Application",
      description:
        "A virtual business card is a digital representation of a traditional paper business card. It serves the same purpose of providing contact information and basic details about an individual or a business, but it exists in a digital format that can be easily shared and accessed through various electronic devices.",

      tech: ["Pretty Qr (Dart Package)", "Provider", "Firebase Firestore"],
      featured: true,
      award: "Prototype",
      image: "/logos/virtual-business-card-levitate.jpg",
      url: "",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      rotateY: 5,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const badgeVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring" as const,
        stiffness: 400,
      },
    },
  };

  const techTagVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring" as const,
        stiffness: 300,
      },
    },
  };

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 bg-muted/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Projects Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span>Recent Project</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Projects{" "}
            <ArrowRight className="inline-block w-6 h-6 sm:w-8 sm:h-8 ml-2 transform -rotate-45" />
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcase of some of my recent Flutter Applications
          </p>
        </motion.div>

        {/* Project Cards Stack */}
        <motion.div
          className="flex flex-col gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -4,
                x: 10,
                transition: {
                  type: "spring" as const,
                  stiffness: 300,
                  damping: 20,
                },
              }}
              className="cursor-pointer"
              // onClick={() => {
              //   if (project.title === "WhisprNet.ai") {
              //     window.open("https://whisprnet.ai/", "_blank");
              //   }
              // }}
              onClick={() => {
                if (project.url) {
                  window.open(project.url, "_blank");
                }
              }}
              style={{
                zIndex: projects.length - index,
              }}
            >
              <Card
                className={`group relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  index === 0 ? "border-2 border-primary/20" : ""
                }`}
              >
                <div className="flex flex-col lg:flex-row">
                  <motion.div
                    variants={imageVariants}
                    whileHover="hover"
                    className={`w-full lg:w-1/3 aspect-video lg:aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-t-lg lg:rounded-l-lg lg:rounded-r-none relative overflow-hidden ${
                      index === 0
                        ? "aspect-[16/10] lg:aspect-square"
                        : "aspect-video lg:aspect-square"
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
                  </motion.div>

                  <div className="w-full lg:w-2/3 p-4 sm:p-6">
                    <CardHeader className="p-0 pb-3 sm:pb-4">
                      <div className="flex justify-between items-start">
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{
                            type: "spring" as const,
                            stiffness: 300,
                          }}
                        >
                          <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                        </motion.div>
                        <motion.div
                          whileHover={{
                            x: 5,
                            rotate: 45,
                            scale: 1.1,
                          }}
                          transition={{
                            type: "spring" as const,
                            stiffness: 400,
                          }}
                        >
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </motion.div>
                      </div>
                      {project.award && (
                        <motion.div variants={badgeVariants} whileHover="hover">
                          <Badge className="w-fit bg-yellow-500/10 text-yellow-600 border-yellow-500/20 cursor-pointer text-xs sm:text-sm">
                            {project.award}
                          </Badge>
                        </motion.div>
                      )}
                    </CardHeader>
                    <CardContent className="p-0 space-y-3 sm:space-y-4">
                      <motion.p
                        className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                        whileHover={{ color: "hsl(var(--foreground))" }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.description}
                      </motion.p>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <motion.a
                            key={tech}
                            href={getTechUrl(tech)}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={techTagVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: techIndex * 0.1,
                              type: "spring" as const,
                              stiffness: 300,
                            }}
                            className="px-2 sm:px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs sm:text-sm cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {tech}
                          </motion.a>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Freelancing Contributions Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span>Freelancing Contributions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Freelance Works{" "}
            <ArrowRight className="inline-block w-6 h-6 sm:w-8 sm:h-8 ml-2 transform -rotate-45" />
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Independent solutions delivered for real-world clients and startups
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Game It */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -4,
              x: 10,
              transition: {
                type: "spring" as const,
                stiffness: 300,
                damping: 20,
              },
            }}
            className="cursor-pointer"
            style={{ zIndex: 2 }}
          >
            <Card className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row">
                <motion.div
                  className="w-full lg:w-1/3 aspect-video lg:aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-t-lg lg:rounded-l-lg lg:rounded-r-none relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src="/logos/game-it.jpeg"
                    alt="Street Resolver"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
                </motion.div>
                <div className="w-full lg:w-2/3 p-4 sm:p-6">
                  <CardHeader className="p-0 pb-3 sm:pb-4">
                    <div className="flex justify-between items-start">
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring" as const, stiffness: 300 }}
                      >
                        <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors">
                          Game It
                        </CardTitle>
                      </motion.div>
                      <motion.div
                        whileHover={{
                          x: 5,
                          rotate: 45,
                          scale: 1.1,
                        }}
                        transition={{ type: "spring" as const, stiffness: 400 }}
                      >
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.div>
                    </div>
                    <motion.div variants={badgeVariants} whileHover="hover">
                      <Badge className="w-fit bg-blue-500/10 text-blue-600 border-blue-500/20 cursor-pointer text-xs sm:text-sm">
                        Prince App Studios
                      </Badge>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="p-0 space-y-3 sm:space-y-4">
                    <motion.p
                      className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                      whileHover={{ color: "hsl(var(--foreground))" }}
                      transition={{ duration: 0.3 }}
                    >
                      I developed Puzzle It, a sub-game within the Game It
                      application, built entirely with Flutter. The game
                      currently supports single-player mode, where users can
                      solve puzzles, earn coins, and track their progress
                      through wins and losses. I designed the game logic to
                      manage coin rewards, scoring, and player states
                      efficiently, ensuring smooth gameplay. Looking ahead, I’m
                      working on adding a two-player competitive mode, bringing
                      real-time interactions and a more engaging multiplayer
                      experience.
                    </motion.p>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {[
                        "Flutter",
                        "Webview",
                        "FastApi",
                        "Firebase",
                        "MongoDB",
                        "Provider",
                        "API Integration - REST API",
                        "MVVM Architecture",
                      ].map((tech, techIndex) => (
                        <motion.a
                          key={tech}
                          href={getTechUrl(tech)}
                          target="_blank"
                          rel="noopener noreferrer"
                          variants={techTagVariants}
                          whileHover="hover"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: techIndex * 0.1,
                            type: "spring" as const,
                            stiffness: 300,
                          }}
                          className="px-2 sm:px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs sm:text-sm cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {tech}
                        </motion.a>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Unstop Project */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -4,
              x: 10,
              transition: {
                type: "spring" as const,
                stiffness: 300,
                damping: 20,
              },
            }}
            className="cursor-pointer"
            style={{ zIndex: 1 }}
          >
            <Card className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row">
                <motion.div
                  className="w-full lg:w-1/3 aspect-video lg:aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-t-lg lg:rounded-l-lg lg:rounded-r-none relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src="/logos/streetnosh.png"
                    alt="Dr. MGR - Janaki College of Arts and Science for Woment"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
                </motion.div>
                <div className="w-full lg:w-2/3 p-4 sm:p-6">
                  <CardHeader className="p-0 pb-3 sm:pb-4">
                    <div className="flex justify-between items-start">
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring" as const, stiffness: 300 }}
                      >
                        <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors">
                          StreetNosh Food Delivery App
                        </CardTitle>
                      </motion.div>
                      <motion.div
                        whileHover={{
                          x: 5,
                          rotate: 45,
                          scale: 1.1,
                        }}
                        transition={{ type: "spring" as const, stiffness: 400 }}
                      >
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.div>
                    </div>
                    <motion.div variants={badgeVariants} whileHover="hover">
                      <Badge className="w-fit bg-green-500/10 text-green-600 border-green-500/20 cursor-pointer text-xs sm:text-sm">
                        FitNosh
                      </Badge>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="p-0 space-y-3 sm:space-y-4">
                    <motion.p
                      className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                      whileHover={{ color: "hsl(var(--foreground))" }}
                      transition={{ duration: 0.3 }}
                    >
                      I developed StreetNosh, a full-featured food delivery
                      application built with Flutter. The app integrates Google
                      Maps for real-time location tracking and routing, and
                      Razorpay for secure, seamless payments. I structured the
                      project using Clean Architecture, ensuring scalability,
                      maintainability, and a clear separation of concerns.
                      StreetNosh demonstrates my expertise in building
                      production-ready apps with smooth UI/UX, third-party API
                      integration, and robust architectural patterns.
                    </motion.p>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {[
                        "Flutter",
                        "Bloc",
                        "Cubit",
                        "API Integration - REST API",
                        "Node js",
                        "Firebase",
                        "PetPooja",
                        "Clean Architecture",
                      ].map((tech, techIndex) => (
                        <motion.a
                          key={tech}
                          href={getTechUrl(tech)}
                          target="_blank"
                          rel="noopener noreferrer"
                          variants={techTagVariants}
                          whileHover="hover"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: techIndex * 0.1,
                            type: "spring" as const,
                            stiffness: 300,
                          }}
                          className="px-2 sm:px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs sm:text-sm cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {tech}
                        </motion.a>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
