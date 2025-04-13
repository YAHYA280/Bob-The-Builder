// components/Banner.tsx
import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative">
      {/* Sky background */}
      <div className="absolute inset-0 bg-[#87CEFA] z-0">
        <div className="absolute inset-0 bg-[url('/banner.png')] bg-repeat-x bg-cover"></div>
      </div>

      {/* Hero Section */}
      <section
        className="relative z-10 pt-28 pb-44 px-6 min-h-[650px] flex items-center"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1
              id="hero-heading"
              className="text-4xl md:text-6xl font-bold text-[#331d0f] leading-tight"
            >
              Is uw woning toe aan een opknapbeurt?
            </h1>

            <p className="text-lg md:text-xl text-[#331d0f] max-w-xl leading-relaxed">
              Kies voor Buru Construction en profiteer van onze alles-in-één
              renovatieservice, zodat u met een gerust hart alles aan één
              vertrouwd bedrijf kunt overlaten. Kwaliteit, gemak en
              betrouwbaarheid - dat is Buru Construction.
            </p>

            <Link
              href="/renoveren"
              className="inline-block bg-[#ff8c00] text-white px-8 py-4 rounded-md font-medium hover:bg-[#f5621f] transition-colors text-lg shadow-md"
              aria-label="Renovatie aanvragen"
            >
              Ja, ik wil mijn huis renoveren!
            </Link>
          </div>

          <div className="flex justify-center md:justify-end mt-8 md:mt-0">
            <Image
              src="/mascot.png"
              alt="Buru Construction Mascot"
              width={500}
              height={600}
              className="h-auto w-full max-w-md object-contain"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
