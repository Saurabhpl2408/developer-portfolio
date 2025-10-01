import { Card, CardContent } from "@/components/ui/card";
import { skills } from "@/data/portfolio-data";

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="space-y-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <div key={category} className="animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 100}ms` }}>
              <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {items.map((skill) => (
                  <Card
                    key={skill.name}
                    className="transition-smooth hover:scale-105 hover:shadow-medium cursor-pointer glass-effect"
                  >
                    <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-2">
                      <div className="text-4xl">{skill.icon}</div>
                      <p className="text-sm font-medium">{skill.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
