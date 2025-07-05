
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Star } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up">
          <h2 className="text-4xl font-bold text-center mb-12">Let's Connect</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-primary">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    I'm always excited to discuss AI projects, collaborate on innovative solutions, 
                    or explore opportunities in machine learning and backend development.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span>Open to freelance AI/ML projects</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-green-500" />
                      <span>Available for backend development</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-primary" />
                      <span>Seeking internship opportunities</span>
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <Button asChild className="flex-1">
                      <a href="https://linkedin.com/in/mdaashiq" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="flex-1">
                      <a href="https://github.com/mdaashiq" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" type="email" />
                <Input placeholder="Subject" />
                <Textarea placeholder="Your Message" className="min-h-[120px]" />
                <Button className="w-full">Send Message</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              © 2024 Mohammed Aashiq. Built with ❤️ using React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
