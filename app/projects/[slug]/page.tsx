import styles from "./ProjectPage.module.css";
import projects from "@/components/Home/Projects/projectsInfo";
import type { Project } from "@/components/Home/Projects/project";
import { notFound } from "next/navigation";
import Hero from "@/components/ProjectPage/Hero/Hero";
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
    <main className={styles.main}>
      <Hero key={project.id} project={project} />
    </main>
  );
}

export default Project;
