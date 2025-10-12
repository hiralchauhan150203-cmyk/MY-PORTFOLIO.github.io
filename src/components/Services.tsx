import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Brain } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "Transform raw data into actionable insights using Power BI, MS Excel, and MySQL. Expert in creating interactive dashboards and comprehensive reports.",
    features: ["Data Visualization", "Dashboard Creation", "Statistical Analysis", "Report Generation"]
  },
  {
    icon: Brain,
    title: "Data Science",
    description: "Leverage machine learning and deep learning techniques to solve complex problems. Experience with neural networks and advanced AI models.",
    features: ["Machine Learning", "Deep Learning", "Predictive Modeling", "AI Solutions"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">What I can help you with</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:shadow-glow transition-all duration-300 animate-slide-up shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
