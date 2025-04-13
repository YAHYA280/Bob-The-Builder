// components/RenovationSection.tsx
import BeforeAfterSlider from "./before-after-slider";

export default function RenovationSection() {
  return (
    <section className="min-h-screen bg-[#001b47] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          De juiste vakmensen om unieke bouwoplossingen te leveren
        </h1>

        <BeforeAfterSlider
          beforeImage="/before-bathroom.png"
          afterImage="/after-bathroom.png"
          beforeLabel="Before"
          afterLabel="After"
          ctaText="Een klus bespreken? Bel nu!"
          ctaHref="/contact"
        />
      </div>
    </section>
  );
}
