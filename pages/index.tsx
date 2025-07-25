import Companies from "@/components/home/companies";
import HeroSection from "@/components/home/heroSection";
import Stepper from "@/components/home/stepper";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <Companies />

      <Stepper />
    </div>
  );
}
