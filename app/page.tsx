"use client";

import Hero from "@/components/Home/Hero/Hero";
import styles from "./page.module.css";
import About from "@/components/Home/About/About";
import Skills from "@/components/Home/Skills/Skills";
import Projects from "@/components/Home/Projects/Projects";
import Experience from "@/components/Home/Experience/Experience";
import OngoingAndLearning from "@/components/Home/OngoingAndLearning/OngoingAndLearning";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <OngoingAndLearning />
    </main>
  );
}
