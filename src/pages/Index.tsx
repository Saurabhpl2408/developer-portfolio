import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Publications } from "@/components/Publications";
import { Awards } from "@/components/Awards";
import { Recommendations } from "@/components/Recommendations";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Publications />
        <Awards />
        <Recommendations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
