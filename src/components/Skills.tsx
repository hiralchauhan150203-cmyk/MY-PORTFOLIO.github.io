import { Card } from "@/components/ui/card";
import { Code2, Database, Globe, Users } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["C", "Python", "Java", ".NET"],
    color: "from-primary to-primary/80"
  },
  {
    icon: Globe,
    title: "Web Development",
    skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP"],
    color: "from-secondary to-secondary/80"
  },
  {
    icon: Database,
    title: "Data & Analytics",
    skills: ["MySQL", "Power BI", "MS Excel"],
    color: "from-accent to-accent/80"
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Teamwork", "Communication", "Time Management", "Collaboration"],
    color: "from-primary to-secondary"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg">My technical and professional capabilities</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-6 hover:shadow-glow transition-all duration-300 animate-slide-up shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-muted-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
