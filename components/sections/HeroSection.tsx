"use client";

import React from "react";

export function HeroSection() {
  return (
    <header className="flex h-auto md:h-[320px] items-center justify-center relative w-full bg-[#001337] py-10 md:py-6 px-4 md:px-0">
      {/* Bull mascot with construction helmet */}
      <div className="absolute top-0 left-0 h-full md:block hidden">
        <img
          className="absolute w-[180px] h-auto top-[70px] left-[40px]"
          alt="Bull mascot with construction helmet"
          src="/bull-stars.svg"
        />
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center gap-5 max-w-3xl z-10 text-center mt-6">
        <h2 className="font-bold text-white text-4xl md:text-5xl tracking-tight">
          1000+ verbouwingen
        </h2>

        <p className="font-normal text-[#dbdbdb] text-lg md:text-xl max-w-2xl">
          Lees hoe wij onze klanten hebben geholpen hun
          <br className="hidden md:block" />
          verbouwingswensen te realiseren en hoe zij het hebben ervaren.
        </p>

        {/* Google reviews rating */}
        <div className="flex items-center justify-center mt-3">
          <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-lg">
            {/* Google icon */}
            <span className="text-[#4285F4] font-bold text-xl mr-1">G</span>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <svg
                  key={index}
                  viewBox="0 0 24 24"
                  fill="#FFCC00"
                  className="w-5 h-5 mr-0.5"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="font-semibold text-[#331d0f] ml-1 text-xl">
              5.0
            </span>
          </div>
          <span className="font-semibold text-white text-xl ml-3">
            87 reviews on Google
          </span>
        </div>
      </div>
    </header>
  );
}
