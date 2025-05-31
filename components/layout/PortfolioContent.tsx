import MainLayout from "@/components/layout/MainLayout";
import PortfolioSections from "@/components/layout/PortfolioSections";
import ProjectModalWrapper from "@/components/modals/ProjectModalWrapper";
import { usePortfolio } from "@/hooks/usePortfolio";

export default function PortfolioContent() {
  const {
    activeSection,
    scrollY,
    selectedProject,
    setSelectedProject,
    scrollToSection,
    closeProjectModal,
  } = usePortfolio();

  return (
    <MainLayout>
      <PortfolioSections
        activeSection={activeSection}
        scrollY={scrollY}
        scrollToSection={scrollToSection}
        setSelectedProject={setSelectedProject}
      />
      <ProjectModalWrapper
        selectedProject={selectedProject}
        closeProjectModal={closeProjectModal}
      />
    </MainLayout>
  );
}
