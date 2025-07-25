import HeroSection from "@/components/home/heroSection";
import Companies from "@/components/home/companies";
import Stepper from "@/components/home/stepper";
import Why from "@/components/home/why";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <Companies />

      <Stepper />

      <Why />
    </div>
  );
}
