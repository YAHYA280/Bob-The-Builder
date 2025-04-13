// app/page.tsx
import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";
import { MultiPurpose } from "@/components/MultiPurpose";
import { ElementFeaturesSection } from "@/components/ElementFeaturesSection";
import { ElementReviewsSection } from "@/components/ElementReviewsSection";
import RenovationSection from "@/components/RenovationSection";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navigation />
      <Banner />
      <MultiPurpose />
      <ElementFeaturesSection />
      <ElementReviewsSection />
      <RenovationSection />
    </main>
  );
}
