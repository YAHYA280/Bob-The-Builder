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
      <section className="relative z-10 pt-16 pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-[#331d0f] leading-tight">
              Is uw woning toe aan een opknapbeurt?
            </h1>

            <p className="text-lg text-[#331d0f]">
              Kies voor Buru Construction en profiteer van onze alles-in-één
              renovatieservice, zodat u met een gerust hart alles aan één
              vertrouwd bedrijf kunt overlaten. Kwaliteit, gemak en
              betrouwbaarheid - dat is Buru Construction.
            </p>

            <Link
              href="/renoveren"
              className="inline-block bg-[#ff8c00] text-white px-8 py-4 rounded-md font-medium hover:bg-[#f5621f] transition-colors text-lg"
            >
              Ja, ik wil mijn huis renoveren!
            </Link>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/mascot.png"
              alt="Buru Construction Mascot"
              width={400}
              height={500}
              className="h-auto w-full max-w-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
