import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Flutter Engineer",
      company: "Safa Tech Integrated Solutions",
      period: "Present",
      description:
        "At Safatech, I deployed the KARS App across multiple platforms including TestFlight, Shorebird, Play Store, and App Store, ensuring smooth delivery and release management. I also contributed to the KARS Admin Panel (built with Flutter) by fixing issues and implementing corrections for better stability and performance. Additionally, I integrated a printer management system into Restapos, a Flutter-based POS solution for Windows and Android, enabling seamless support for Sunmi printers and enhancing the app’s retail functionality. I also implemented GraphQL to optimize data fetching, improve API efficiency, and ensure smooth communication between the client and server.",
      color: "muted-foreground",
      logo: "/logos/safatech.png",
    },

    {
      title: "Flutter Flow Develper Groups Tech Event Organizer",
      company: "Flutter Flow Develper Groups(FFDG)",
      period: "Present",
      description:
        "At Flutter Flow Developer Groups (FFDG), I organized and hosted tech events in Chennai, where I engaged with the community to share insights on Flutter Flow and its capabilities. I presented and demonstrated how to leverage Flutter Flow for building cross-platform applications efficiently, explained the underlying tech stack, and guided participants on best practices for designing responsive, scalable apps. These events allowed me to connect with fellow developers, promote knowledge sharing, and inspire the adoption of modern Flutter development techniques.",
      logo: "/logos/ffdg.jpeg",
    },

    {
      title: "Flutter Developer Intern",
      company: "Yuvabe",
      period: "Nov 2024 - Feb 2025",
      description:
        "At Yuvabe, I worked on a Doctor Notes App for a Singapore-based project. The app integrates REST APIs built with FastAPI and uses Postgres as the database along with Firebase Authentication for secure user management. I implemented BLoC for state management, GoRouter for navigation, and GetIt for dependency injection, ensuring a clean, maintainable, and scalable Flutter architecture. This project strengthened my experience in building production-ready apps with robust backend integration and modern Flutter design patterns.",
      color: "muted-foreground",
      logo: "/logos/yuvabe.png",
    },

    {
      title: "Flutter Developer Intern",
      company: "Appikorn Software Consultancy Service",
      period: "May 2024 - Oct 2024",
      description:
        "At Appikorn, I developed a scanner application that allows users to scan their visiting cards and automatically extract key entities such as names, emails, and phone numbers. I integrated Google ML Kit using the Dart package google_entity_extraction_kit to handle the entity extraction process, ensuring accurate and efficient data parsing. The extracted information was then stored securely in Firestore, providing a smooth and intelligent way to digitize and manage visiting card data.",
      color: "muted-foreground",
      logo: "/logos/appikorn.png",
    },

    {
      title: "Flutter Developer Intern",
      company: "Levitate Studios",
      period: "Jan 2024 - Mar 2024",
      description:
        "At Levitate Studios, I honed my skills in responsive UI design and implemented them in the Retake UAE project, a refurbished electronics selling application for the UAE. I also developed a digital business card app featuring Pretty QR functionality. The project leveraged Firebase for authentication, real-time notifications, and Firestore database management, allowing me to gain hands-on experience in building scalable, user-friendly Flutter applications with seamless backend integration.",
      color: "muted-foreground",
      logo: "/logos/levitate-studios.jpeg",
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-muted/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up">
          {/* Available for work indicator */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Versatile Knowledge</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            Experience
          </h2>

          <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                viewport={{ once: true }}
              >
                <Card className="bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 border-border hover:shadow-lg">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                      <div className="flex items-start gap-3 sm:gap-4">
                        {exp.logo && (
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full border border-muted flex-shrink-0"
                          />
                        )}
                        <div className="min-w-0 flex-1">
                          <CardTitle className="text-lg sm:text-xl text-foreground mb-1">
                            {exp.title}
                          </CardTitle>
                          <p
                            className={`text-sm sm:text-base text-${exp.color} font-semibold`}
                          >
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-border text-muted-foreground text-xs sm:text-sm w-fit sm:w-auto"
                      >
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
