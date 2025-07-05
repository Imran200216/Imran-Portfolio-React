
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const stats = [
    { number: "5+", label: "Happy clients" },
    { number: "8+", label: "Projects" },
    { number: "4.8", label: "Average Rating" }
  ];

  const testimonials = [
    {
      rating: 5,
      text: "Working with him was a breeze. He took our scattered ideas and turned them into a cohesive and stunning AI solution. Highly recommended!",
      author: "Tech Lead",
      company: "Startup Client"
    },
    {
      rating: 4,
      text: "The professionalism and technical expertise Mohammed brought to our project was exceptional. Great communication throughout.",
      author: "Project Manager", 
      company: "Enterprise Client"
    }
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - Stats */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Happy Clients</span>
              </div>
              <h2 className="text-5xl font-bold mb-6">Clients Prefer me!!!</h2>
              <p className="text-xl text-muted-foreground">Trusted by 5+ happy clients</p>
            </div>

            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm text-center p-6">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <Button size="lg" variant="outline" className="rounded-full px-8">
                See All Projects
              </Button>
              <Button size="lg" className="bg-muted-foreground text-background hover:bg-muted-foreground/90 rounded-full px-8">
                Contact Now
              </Button>
            </div>
          </div>

          {/* Right side - Testimonials */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
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
