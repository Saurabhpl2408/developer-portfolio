import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";
import { experience } from "@/data/portfolio-data";
import dealerOnLogo from "@/assets/dealeron-logo.png";
import atomicLoopsLogo from "@/assets/atomicloops-logo.png";

const logoMap: Record<string, string> = {
  "/src/assets/dealeron-logo.png": dealerOnLogo,
  "/src/assets/atomicloops-logo.png": atomicLoopsLogo,
};

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground text-lg">
            My professional journey and contributions
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experience.map((job, index) => (
            <Card
              key={job.id}
              className="transition-smooth hover:shadow-medium glass-effect animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 flex-shrink-0">
                      <img src={logoMap[job.logo] || job.logo} alt={`${job.company} logo`} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{job.role}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {job.company}
                      </CardDescription>
                      <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {job.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">{responsibility}</span>
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
}
