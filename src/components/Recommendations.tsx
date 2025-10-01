import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Quote } from "lucide-react";
import { recommendations } from "@/data/portfolio-data";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function Recommendations() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>("");
  const [selectedRecommendation, setSelectedRecommendation] = useState<number | null>(null);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    try {
      mapboxgl.accessToken = mapboxToken;

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/dark-v11",
        center: [0, 20],
        zoom: 1.5,
        projection: { name: "globe" } as any,
      });

      map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

      map.current.on("load", () => {
        // Add markers for each recommendation
        recommendations.forEach((rec, index) => {
          const el = document.createElement("div");
          el.className = "recommendation-marker";
          el.style.cssText = `
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-variant)));
            border-radius: 50%;
            border: 3px solid white;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            transition: transform 0.3s ease;
          `;
          el.textContent = rec.image;

          el.addEventListener("mouseenter", () => {
            el.style.transform = "scale(1.2)";
          });
          el.addEventListener("mouseleave", () => {
            el.style.transform = "scale(1)";
          });

          el.addEventListener("click", () => {
            setSelectedRecommendation(index);
            map.current?.flyTo({
              center: rec.coordinates as [number, number],
              zoom: 4,
              duration: 2000,
            });
          });

          new mapboxgl.Marker(el)
            .setLngLat(rec.coordinates as [number, number])
            .addTo(map.current!);
        });

        // Add atmosphere effect
        map.current?.setFog({
          color: "rgb(30, 30, 50)",
          "high-color": "rgb(50, 50, 100)",
          "horizon-blend": 0.1,
        } as any);
      });
    } catch (error) {
      console.error("Error initializing map:", error);
      toast.error("Failed to initialize map. Please check your Mapbox token.");
    }

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  if (!mapboxToken) {
    return (
      <section id="recommendations" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Recommendations</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Professional recommendations from around the world
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Enter Mapbox Token</CardTitle>
                <CardDescription>
                  To display the interactive recommendations map, please enter your Mapbox public token.
                  Get yours at{" "}
                  <a
                    href="https://mapbox.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    mapbox.com
                  </a>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Input
                  type="text"
                  placeholder="pk.eyJ1..."
                  value={mapboxToken}
                  onChange={(e) => setMapboxToken(e.target.value)}
                  className="mb-2"
                />
                <p className="text-xs text-muted-foreground">
                  Note: For production, this should be stored in Supabase Edge Function Secrets
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Show recommendations cards even without map */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mt-12">
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
                  <p className="text-xs text-muted-foreground">{rec.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="recommendations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">Recommendations</h2>
          <p className="text-muted-foreground text-lg">
            Professional recommendations from around the world
          </p>
        </div>

        {/* Map Container */}
        <div className="max-w-6xl mx-auto mb-12">
          <Card className="overflow-hidden glass-effect">
            <div
              ref={mapContainer}
              className="w-full h-[500px] rounded-lg"
            />
          </Card>
        </div>

        {/* Selected Recommendation Detail */}
        {selectedRecommendation !== null && (
          <div className="max-w-3xl mx-auto mb-12 animate-fade-in">
            <Card className="glass-effect border-primary/50">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="text-5xl">
                    {recommendations[selectedRecommendation].image}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl">
                      {recommendations[selectedRecommendation].name}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {recommendations[selectedRecommendation].title}
                    </CardDescription>
                    <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {recommendations[selectedRecommendation].location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Badge variant="secondary">
                  {recommendations[selectedRecommendation].relationship}
                </Badge>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                  <p className="text-muted-foreground italic pl-8">
                    {recommendations[selectedRecommendation].text}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {recommendations[selectedRecommendation].date}
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* All Recommendations Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {recommendations.map((rec, index) => (
            <Card
              key={rec.id}
              className={`transition-smooth hover:shadow-medium glass-effect animate-fade-in-up cursor-pointer ${
                selectedRecommendation === index ? "ring-2 ring-primary" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => {
                setSelectedRecommendation(index);
                map.current?.flyTo({
                  center: rec.coordinates as [number, number],
                  zoom: 4,
                  duration: 2000,
                });
              }}
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
                <p className="text-xs text-muted-foreground">{rec.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
