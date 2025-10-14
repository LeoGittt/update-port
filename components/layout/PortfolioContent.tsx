import MainLayout from "@/components/layout/MainLayout";
import PortfolioSections from "@/components/layout/PortfolioSections";
import { usePortfolio } from "@/hooks/usePortfolio";

export default function PortfolioContent() {
  const {
    activeSection,
    scrollY,
    scrollToSection,
  } = usePortfolio();

  return (
    <MainLayout>
      <PortfolioSections
        activeSection={activeSection}
        scrollY={scrollY}
        scrollToSection={scrollToSection}
      />
    </MainLayout>
  );
}
