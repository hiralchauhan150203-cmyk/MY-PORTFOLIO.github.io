import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hiralchauhan150203@gmail.com",
      href: "mailto:hiralchauhan150203@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9313089962",
      href: "tel:+919313089962"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Hiral Chauhan",
      href: "https://www.linkedin.com/in/hiral-chauhan"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">Let's discuss your next project</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 animate-slide-up shadow-card">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full min-h-[150px]"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
              >
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <Card className="p-8 shadow-card">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.label === "LinkedIn" ? "_blank" : undefined}
                    rel={info.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group hover:bg-muted/50 p-4 rounded-lg transition-colors"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-foreground mt-1">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 shadow-card">
              <h3 className="text-xl font-semibold mb-3">Let's Collaborate</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
