import { Card } from "@/components/ui/card";
import { GraduationCap, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg">Get to know who I am</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 animate-slide-up shadow-card hover:shadow-glow transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Education & Experience</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I am Hiral Chauhan, a Computer Engineering student at UPL University of Technology, graduating in 2025. 
                  With hands-on experience from internships at <span className="text-primary font-semibold">Techomax</span>, <span className="text-primary font-semibold">Cloud Infosoft</span>, and <span className="text-primary font-semibold">Neotech Solutions</span>, 
                  I have worked on web development, responsive design, and database integration.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 animate-slide-up shadow-card hover:shadow-glow transition-shadow" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <Heart className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Passion & Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Passionate about technology, problem-solving, and innovation, I enjoy collaborating in teams 
                  to build impactful solutions. I believe in continuous learning and pushing the boundaries of 
                  what's possible with code.
                </p>
              </div>
            </div>
        </Card>
      </div>
      </div>
    </section>
  );
};

export default About;
