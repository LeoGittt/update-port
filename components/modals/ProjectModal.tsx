"use client";

import { ProjectModal as NewProjectModal } from "../sections/project-modal";
import { Project } from "@/types/project";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

/**
 * @deprecated Use ProjectModal from @/components/sections/project-modal instead.
 * This component now wraps the new design to ensure consistency.
 */
export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return <NewProjectModal project={project} onClose={onClose} />;
}