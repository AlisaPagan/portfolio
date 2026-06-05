import styles from "./ProjectPage.module.css";
import type { Metadata } from "next";
import projects from "@/components/Home/Projects/projectsInfo";
import type { Project } from "@/components/Home/Projects/project";
import { notFound } from "next/navigation";
import Hero from "@/components/ProjectPage/Hero/Hero";
import Intro from "@/components/ProjectPage/Intro/Intro";
import DevProcess from "@/components/ProjectPage/DevProcess/DevProcess";
import UxProcess from "@/components/ProjectPage/UxProcess/UxProcess";
import DevFocus from "@/components/ProjectPage/DevFocus/DevFocus";
import Gallery from "@/components/ProjectPage/Gallery/Gallery";
import CurrentProcess from "@/components/ProjectPage/CurrentProcess/CurrentProcess";
import DevCtas from "@/components/ProjectPage/DevCtas/DevCtas";
import GoRaidingDetails from "@/components/ProjectPage/GoRaidingDetails/GoRaidingDetails";
import NextSteps from "@/components/ProjectPage/NextSteps/NextSteps";
import ProjectHeader from "@/components/Layout/ProjectHeader/ProjectHeader";
type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((project) => project.id === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const title = `${project.title} | Project`;
  const description = project.shortDescription || project.description;
  const image = project.image;

  return {
    title,
    description,
    openGraph: {
      title: `${project.title} | Alisa Pagan Portfolio`,
      description,
      url: `/projects/${project.id}`,
      siteName: "Alisa Pagan Portfolio",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: project.imageAlt,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Alisa Pagan Portfolio`,
      description,
      images: [image],
    },
  };
}

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
      <ProjectHeader currentProjectId={project.id} />

      {/* hero section */}
      <Hero project={project} />

      {/* intro section */}
      <Intro project={project} />

      {/* project details / design process/ ux planning */}
      {isDev && !isGoRaiding && <DevProcess project={project} />}
      {isUx && <UxProcess project={project} />}

      {/* dev focus / current prosses on goraiding*/}
      {isDev && !isGoRaiding && <DevFocus project={project} />}
      {isGoRaiding && <CurrentProcess project={project} />}

      {/* gallery on dev and ux */}
      {!isGoRaiding && <Gallery project={project} />}

      {/* ux and goraiding details */}
      {isUx && !isGoRaiding && <DevProcess project={project} />}
      {isGoRaiding && <GoRaidingDetails project={project} />}

      {/* ux next steps*/}

      {isGoRaiding && <Gallery project={project} />}
      {isUx && <NextSteps project={project} />}

      {/* dev ctas */}
      {isDev && !isGoRaiding && <DevCtas project={project} />}
    </main>
  );
}

export default Project;
