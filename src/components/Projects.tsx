import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileSpreadsheet, BarChart3, Video, ShoppingCart } from "lucide-react";
import excelDashboard from "@/assets/excel-dashboard.png";
import powerbiDashboard from "@/assets/powerbi-dashboard.png";
import deepfakeDetection from "@/assets/deepfake-detection.png";
import ecommerceWebsite from "@/assets/ecommerce-website.png";

const projects = [
  {
    icon: FileSpreadsheet,
    title: "Excel Dashboard",
    description: "Comprehensive car sales analytics dashboard featuring interactive charts, pivot tables, and KPI tracking for data-driven business insights.",
    technologies: ["Excel", "Data Analysis", "Pivot Tables", "Data Visualization", "Conditional Formatting"],
    highlights: ["Sales Trend Analysis", "Dynamic Charts", "Payment Mode Insights", "Total Sales by Cars"],
    color: "from-primary to-primary/80",
    image: excelDashboard
  },
  {
    icon: BarChart3,
    title: "Power BI Dashboard",
    description: "Interactive manufacturing analytics dashboard for tech gear production with real-time KPIs, production efficiency metrics, and regional performance tracking.",
    technologies: ["Power BI", "DAX", "Data Modeling", "Business Intelligence", "Interactive Visuals"],
    highlights: ["Production Efficiency", "Factory Comparison", "Inventory Management", "Profitability Analysis"],
    color: "from-secondary to-secondary/80",
    image: powerbiDashboard
  },
  {
    icon: Video,
    title: "Deepfake Video Detection",
    description: "Advanced deep learning system for detecting deepfake videos using state-of-the-art models and facial detection techniques with high accuracy.",
    technologies: ["Python", "Deep Learning", "MTCNN", "EfficientNetB0", "ConvNeXt", "Xception"],
    highlights: ["Celeb-DF v1 Dataset", "Facial Alignment", "Multiple Models", "Scalable Framework"],
    color: "from-accent to-accent/80",
    image: deepfakeDetection
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Website",
    description: "Full-featured online bakery platform with admin panel for product management, user authentication, and comprehensive order management system.",
    technologies: ["HTML", "CSS", "Bootstrap", "PHP"],
    highlights: ["Admin Dashboard", "Product CRUD Operations", "User Authentication", "Database Integration"],
    color: "from-primary to-primary/80",
    image: ecommerceWebsite
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">Showcasing my technical expertise and creativity</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group hover:shadow-glow transition-all duration-300 animate-slide-up shadow-card overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <CardHeader>
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <project.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
