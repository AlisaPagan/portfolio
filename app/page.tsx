import Hero from "@/components/Home/Hero/Hero";
import styles from "./page.module.css";
import About from "@/components/Home/About/About";
import Skills from "@/components/Home/Skills/Skills";
import Projects from "@/components/Home/Projects/Projects";
import Experience from "@/components/Home/Experience/Experience";
import OngoingAndLearning from "@/components/Home/OngoingAndLearning/OngoingAndLearning";
import Contact from "@/components/Home/Contact/Contact";
import Header from "@/components/Layout/Header/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <OngoingAndLearning />
      <Contact />
    </main>
  );
}
