import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Calendar, FileText } from "lucide-react";
import { awards } from "@/data/portfolio-data";

export function Awards() {
  return (
    <section id="awards" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">Awards & Achievements</h2>
          <p className="text-muted-foreground text-lg">
            Recognition for excellence and innovation
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {awards.map((award, index) => (
            <Card
              key={award.id}
              className="transition-smooth hover:shadow-medium glass-effect animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="text-4xl">
                    <Award className="h-12 w-12 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl">{award.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary mt-1">
                      {award.issuer}
                    </CardDescription>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {award.date}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{award.description}</p>

                {award.certificate && (
                  <div className="pt-2">
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={award.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <FileText className="h-4 w-4" />
                        View Certificate
                      </a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
