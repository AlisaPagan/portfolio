import styles from "./ProjectPage.module.css";
import projects from "@/components/Home/Projects/projectsInfo";
import type { Project } from "@/components/Home/Projects/project";
import { notFound } from "next/navigation";
type Props = {
  params: Promise<{ slug: string }>;
};

async function Project({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((project) => project.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <h1>{project.title}</h1>
    </main>
  );
}

export default Project;
