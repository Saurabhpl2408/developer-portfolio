import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";
import { publications } from "@/data/portfolio-data";

export function Publications() {
  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">Publications</h2>
          <p className="text-muted-foreground text-lg">
            Research papers and technical publications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((publication, index) => (
            <Card
              key={publication.id}
              className="transition-smooth hover:shadow-medium glass-effect animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl flex items-start gap-2">
                      <FileText className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <span>{publication.title}</span>
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                      {publication.authors}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="secondary">{publication.publication}</Badge>
                      <Badge variant="outline">{publication.year}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{publication.description}</p>
                {publication.link && (
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Publication
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
