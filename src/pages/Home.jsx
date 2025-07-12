import { Navbar } from "../Components/Navbar";
import { ThemeToggle } from "../Components/ThemeToggle";
import { StarBackground } from "@/Components/StarBackground";
import { HeroSection } from "../Components/HeroSection";
import { AboutSection } from "../Components/AboutSection";
import { SkillSection } from "../Components/SkillSection";
import { ProjectsSection } from "../Components/ProjectsSection";
import { ContactSection } from "../Components/ContactSection";
import { Footer } from "../Components/Footer";
import { WorkExperienceSection } from "../Components/WorkExperienceSection";
export const Home = () => {
  return <div className="min-h-screen ">
    
    {/* Theme toggle */}
    <ThemeToggle />
    {/* Background effects */}
    <StarBackground />
    {/* Navbar */}
    <Navbar />
    {/* Main Content */}
    <main>
      <HeroSection />
      <AboutSection />
      <WorkExperienceSection />
      <SkillSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    {/* Footer */}
    <Footer />
  </div>
};