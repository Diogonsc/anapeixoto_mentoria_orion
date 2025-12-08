import { HeroSection } from "../../components/HeroSection";
import { MentorshipMethodsSection } from "../../components/MentorshipMethodsSection";
import { TestimonialSection } from "../../components/TestimonialSection";
import { AnaPresentationSection } from "../../components/AnaPresentationSection";

export default function Home() {
  return (
    <div className="w-full">
        <HeroSection />
        <MentorshipMethodsSection />
        <TestimonialSection />
        <AnaPresentationSection />
    </div>
  );
}

