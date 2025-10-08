import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio-data";
import profilePhoto from "@/assets/profile-photo.jpg";

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center gradient-hero pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <p className="text-primary font-medium">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold">
                {personalInfo.name}
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground">
                {personalInfo.title}
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {personalInfo.intro}
            </p>

            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-smooth">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-primary transition-smooth">
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Button size="lg" className="gradient-primary">
                <a href="#contact" className="flex items-center">
                  Get in Touch
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="./Saurabh_Lohokare_Resume.pdf" download className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <Button variant="ghost" size="icon" asChild>
                <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary blur-3xl opacity-20 rounded-full"></div>
              <img
                src={profilePhoto}
                alt={personalInfo.name}
                className="relative rounded-2xl shadow-strong w-full max-w-md aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
