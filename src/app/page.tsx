import "./globals.css";

import { HeroSection } from "./components/hero-section";
import { HowItWorks } from "./components/how-it-works";
import { Testimonial } from "./components/testimonial";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorks />
      <Testimonial />
    </main>
  );
}
