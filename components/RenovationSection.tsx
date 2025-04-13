// components/RenovationSection.tsx
import BeforeAfterSlider from "./before-after-slider";

export default function RenovationSection() {
  return (
    <section className="min-h-screen bg-[#001b47] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          De juiste vakmensen om unieke bouwoplossingen te leveren
        </h2>

        <BeforeAfterSlider
          beforeImage="/before-bathroom.png"
          afterImage="/after-bathroom.png"
          beforeLabel="Voor"
          afterLabel="Na"
          ctaText="Een klus bespreken? Bel nu!"
          ctaHref="/contact"
        />
      </div>
    </section>
  );
}
