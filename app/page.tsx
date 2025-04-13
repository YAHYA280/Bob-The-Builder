// pages/index.tsx
import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";
import RenovationSection from "@/components/RenovationSection";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navigation />
      <Banner />
      <RenovationSection />
    </main>
  );
}
