"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { CustomerReviewsSection } from "@/components/sections/CustomerReviewSection";
import { HeroSection } from "@/components/sections/HeroSection";

export function ElementReviewsSection() {
  return (
    <section className="flex flex-col w-full items-start bg-[#001b47]">
      {/* Hero section with title and rating */}
      <HeroSection />

      {/* Reviews slider section */}
      <div className="py-10 w-full">
        <CustomerReviewsSection />
      </div>

      {/* CTA Button */}
      <div className="flex items-center justify-center gap-3 w-full py-10 px-4">
        <Button className="px-8 py-4 bg-[#ff8c00] hover:bg-[#f5621f] text-white font-bold text-lg rounded-md border-[3px] border-solid border-[#ffb100] shadow-md">
          Een klus bespreken? Bel nu!
        </Button>
      </div>
    </section>
  );
}
