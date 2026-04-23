"use client";

import Hero from "@/components/Home/Hero/Hero";
import styles from "./page.module.css";
import About from "@/components/Home/About/About";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
    </main>
  );
}
