import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { MenuCombo } from "@/components/site/MenuCombo";
import { BuildPanino } from "@/components/site/BuildPanino";
import { Schedule } from "@/components/site/Schedule";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <MenuCombo />
      <BuildPanino />
      <Schedule />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
