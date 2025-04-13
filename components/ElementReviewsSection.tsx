"use client";

import React from "react";
import { CustomerReviewsSection } from "@/components/sections/CustomerReviewSection";
import { HeroSection } from "@/components/sections/HeroSection";

export function ElementReviewsSection() {
  return (
    <section className="flex flex-col w-full items-start bg-[#001b47]">
      {/* Hero section with title and rating */}
      <HeroSection />

      {/* Reviews slider section */}
      <div className="py-6 w-full">
        <CustomerReviewsSection />
      </div>

      {/* CTA Button */}
      <div className="flex items-center justify-center w-full py-10 px-4">
        <a
          href="/contact"
          className="px-8 py-4 bg-[#ff8c00] hover:bg-[#f5621f] text-white font-bold text-lg rounded-md border-[3px] border-solid border-[#ffb100] shadow-md text-center"
        >
          Een klus bespreken? Bel nu!
        </a>
      </div>
    </section>
  );
}
