import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import { projects, experiences, contactInfo } from "@/data/portfolio";
import { Project } from "@/types/project";

interface Props {
  activeSection: string;
  scrollY: number;
  scrollToSection: (sectionId: string) => void;
  setSelectedProject: (project: Project | null) => void;
}

export default function PortfolioSections({
  activeSection,
  scrollY,
  scrollToSection,
  setSelectedProject,
}: Props) {
  return (
    <>
      <Navbar
        activeSection={activeSection}
        scrollY={scrollY}
        scrollToSection={scrollToSection}
      />
      <Hero isVisible={true} />
      <Projects
        isVisible={true}
        projects={projects}
        setSelectedProject={setSelectedProject}
      />
      <Experience isVisible={true} experiences={experiences} />
      <Education />
      <Contact isVisible={true} contactInfo={contactInfo} />
      <Footer />
    </>
  );
}
