import styles from "./ProjectPage.module.css";
import projects from "@/components/Home/Projects/projectsInfo";
import type { Project } from "@/components/Home/Projects/project";
import { notFound } from "next/navigation";
import Hero from "@/components/ProjectPage/Hero/Hero";
import Intro from "@/components/ProjectPage/Intro/Intro";
import DevProcess from "@/components/ProjectPage/DevProcess/DevProcess";
import UxProcess from "@/components/ProjectPage/UxProcess/UxProcess";
import DevFocus from "@/components/ProjectPage/DevFocus/DevFocus";
type Props = {
  params: Promise<{ slug: string }>;
};

async function Project({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((project) => project.id === slug);

  if (!project) {
    notFound();
  }

  const isDev = project.categories.includes("dev");
  const isUx = project.categories.includes("ux");
  const isGoRaiding = project.id === "go-raiding";

  return (
    <main className={styles.main}>
      <Hero project={project} />
      <Intro project={project} />

      {isDev && !isGoRaiding && <DevProcess project={project} />}
      {isUx && <UxProcess project={project} />}

      {isDev && !isGoRaiding && <DevFocus project={project} />}
    </main>
  );
}

export default Project;
