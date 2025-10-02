import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Quote, ExternalLink } from "lucide-react";
import { recommendations } from "@/data/portfolio-data";

export function Recommendations() {
  return (
    <section id="recommendations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">Recommendations</h2>
          <p className="text-muted-foreground text-lg">
            Professional recommendations from colleagues and mentors
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {recommendations.map((rec, index) => (
            <Card
              key={rec.id}
              className="transition-smooth hover:shadow-medium glass-effect animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{rec.image}</div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">{rec.name}</CardTitle>
                    <CardDescription className="text-sm">{rec.title}</CardDescription>
                    <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {rec.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <Badge variant="secondary" className="text-xs">
                  {rec.relationship}
                </Badge>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/20" />
                  <p className="text-sm text-muted-foreground italic pl-6">{rec.text}</p>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <p className="text-xs text-muted-foreground">{rec.date}</p>
                  {rec.url && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={rec.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        View Recommendation
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}