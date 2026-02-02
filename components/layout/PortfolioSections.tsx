import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import { TechnologiesSlider } from "@/components/sections/TechnologiesSlider";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import { experiences, contactInfo } from "@/data/portfolio";

interface Props {
  activeSection: string;
  scrollY: number;
  scrollToSection: (sectionId: string) => void;
}

export default function PortfolioSections({
  activeSection,
  scrollY,
  scrollToSection,
}: Props) {
  return (
    <>
      <Hero isVisible={true} />
      <TechnologiesSlider />
      <Projects isVisible={true} />
      <Experience isVisible={true} experiences={experiences} />
      <Education />
      <Contact isVisible={true} contactInfo={contactInfo} />
      <Footer />
    </>
  );
}
