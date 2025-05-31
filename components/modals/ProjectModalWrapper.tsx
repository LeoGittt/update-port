import ProjectModal from "./ProjectModal";
import { Project } from "@/types/project";

interface Props {
  selectedProject: Project | null;
  closeProjectModal: () => void;
}

export default function ProjectModalWrapper({
  selectedProject,
  closeProjectModal,
}: Props) {
  if (!selectedProject) return null;
  return <ProjectModal project={selectedProject} onClose={closeProjectModal} />;
}
