import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Star } from "lucide-react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up">
          {/* Available for work indicator */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
            <div className="w-3 h-3 bg-sky-500 rounded-full animate-pulse"></div>
            <span>Impressed ?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            Let's Connect
          </h2>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
            <div className="space-y-6 order-2 md:order-1">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-primary text-lg sm:text-xl">
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-4 sm:p-6 pt-0">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    I’m always excited to discuss Flutter projects, collaborate
                    on building innovative mobile apps, or explore opportunities
                    in cross-platform development, state management, and backend
                    integration.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                      <span className="text-sm sm:text-base">
                        Open to freelance App Projects
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                      <span className="text-sm sm:text-base">
                        Available for App development
                      </span>
                    </div>
                    {/* <div className="flex items-center space-x-3">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      <span className="text-sm sm:text-base">
                        Seeking internship opportunities
                      </span>
                    </div> */}
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                    <Button asChild className="flex-1 text-sm sm:text-base">
                      <a
                        href="https://www.linkedin.com/in/imran-b-9b150b28b/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      className="flex-1 text-sm sm:text-base"
                    >
                      <a
                        href="https://github.com/Imran200216"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card/50 backdrop-blur-sm order-1 md:order-2">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-4 sm:p-6 pt-0">
                <form
                  className="space-y-4"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const formData = new FormData(form);
                    const data = {
                      name: formData.get("name"),
                      email: formData.get("email"),
                      subject: formData.get("subject"),
                      message: formData.get("message"),
                    };
                    try {
                      const res = await fetch(
                        "http://localhost:5000/api/contact",
                        {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(data),
                        }
                      );
                      if (res.ok) {
                        toast.success("Message sent!");
                        form.reset();
                      } else {
                        toast.error("Failed to send message.");
                      }
                    } catch (err) {
                      toast.error("Failed to send message.");
                    }
                  }}
                >
                  <Input
                    name="name"
                    placeholder="Your Name"
                    required
                    className="text-sm sm:text-base"
                  />
                  <Input
                    name="email"
                    placeholder="Your Email"
                    type="email"
                    required
                    className="text-sm sm:text-base"
                  />
                  <Input
                    name="subject"
                    placeholder="Subject"
                    required
                    className="text-sm sm:text-base"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    className="min-h-[100px] sm:min-h-[120px] text-sm sm:text-base"
                    required
                  />
                  <Button className="w-full text-sm sm:text-base" type="submit">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-sm sm:text-base text-muted-foreground">
              © 2025 Imran B | MR DEV
            </p>
          </div>
        </div>
      </div>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "hsl(var(--card))",
            color: "hsl(var(--card-foreground))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "var(--radius)",
            backdropFilter: "blur(8px)",
            boxShadow:
              "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            padding: "16px 20px",
            fontSize: "14px",
            fontWeight: "500",
            maxWidth: "400px",
          },
          success: {
            iconTheme: {
              primary: "hsl(var(--primary))",
              secondary: "hsl(var(--primary-foreground))",
            },
            style: {
              borderLeft: "4px solid hsl(var(--primary))",
            },
          },
          error: {
            iconTheme: {
              primary: "hsl(var(--destructive))",
              secondary: "hsl(var(--destructive-foreground))",
            },
            style: {
              borderLeft: "4px solid hsl(var(--destructive))",
            },
          },
        }}
      />
    </section>
  );
};
