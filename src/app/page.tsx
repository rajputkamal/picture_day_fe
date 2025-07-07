// import Image from "next/image";
// import styles from "./page.module.css";
import { HeroSection } from "./components/hero-section";
import { HowItWorks } from "./components/HowItWorks";
import { Testimonial } from "./components/testimonial"; // Adjust the import path based on your file structure

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorks />
      <Testimonial />
    </main>
  );
}
