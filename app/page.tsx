import { Hero } from "../components/hero";
import { Features } from "../components/features";
import { Testimonials } from "../components/testimonials";
import { Cta } from "../components/cta";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <Cta />
    </div>
  );
}