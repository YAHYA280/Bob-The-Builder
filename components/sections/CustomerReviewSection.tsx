"use client";

import React, { useEffect, useRef } from "react";
import { StarIcon } from "lucide-react";
import gsap from "gsap";

export function CustomerReviewsSection() {
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);

  // Reviews data - using generic placeholder data to match the image
  const reviews = [
    {
      name: "John Doe",
      text: "DEFAULT REVIEW OPTION WITH PLACEHOLDER TEXT UNDER NO CIRCUMSTANCES SHOULD THIS BE PUBLISHED",
      rating: 5,
      date: "Feb 17",
    },
    {
      name: "John Doe",
      text: "DEFAULT REVIEW OPTION WITH PLACEHOLDER TEXT UNDER NO CIRCUMSTANCES SHOULD THIS BE PUBLISHED",
      rating: 5,
      date: "Feb 17",
    },
    {
      name: "John Doe",
      text: "DEFAULT REVIEW OPTION WITH PLACEHOLDER TEXT UNDER NO CIRCUMSTANCES SHOULD THIS BE PUBLISHED",
      rating: 5,
      date: "Feb 17",
    },
    {
      name: "John Doe",
      text: "DEFAULT REVIEW OPTION WITH PLACEHOLDER TEXT UNDER NO CIRCUMSTANCES SHOULD THIS BE PUBLISHED",
      rating: 5,
      date: "Feb 17",
    },
    {
      name: "John Doe",
      text: "DEFAULT REVIEW OPTION WITH PLACEHOLDER TEXT UNDER NO CIRCUMSTANCES SHOULD THIS BE PUBLISHED",
      rating: 5,
      date: "Feb 17",
    },
    {
      name: "John Doe",
      text: "DEFAULT REVIEW OPTION WITH PLACEHOLDER TEXT UNDER NO CIRCUMSTANCES SHOULD THIS BE PUBLISHED",
      rating: 5,
      date: "Feb 17",
    },
  ];

  // GSAP Animation
  useEffect(() => {
    if (!firstRowRef.current || !secondRowRef.current) return;

    // Create animations for infinite scrolling - slower speed
    gsap.to(firstRowRef.current, {
      x: "-50%",
      duration: 60, // Slower animation
      ease: "linear",
      repeat: -1,
    });

    gsap.to(secondRowRef.current, {
      x: "50%",
      duration: 60, // Slower animation
      ease: "linear",
      repeat: -1,
    });

    return () => {
      // Cleanup animations on component unmount
      gsap.killTweensOf([firstRowRef.current, secondRowRef.current]);
    };
  }, []);

  // Review Card styled to match the image
  const ReviewCard = ({ review }: { review: (typeof reviews)[0] }) => (
    <div
      className="flex flex-col min-w-[270px] max-w-[270px] bg-white rounded-lg mx-2 overflow-hidden relative shadow-lg"
      style={{
        background: "linear-gradient(90deg, white, white 60%, #e6e6e6)",
      }}
    >
      {/* Star rating at top */}
      <div className="flex p-3 bg-gradient-to-r from-white to-[#f0f0f0]">
        {Array(review.rating)
          .fill(null)
          .map((_, i) => (
            <StarIcon
              key={i}
              className="w-5 h-5 fill-[#FF8C00] text-[#FF8C00] mr-1"
            />
          ))}
        <span className="ml-auto text-sm">{review.rating}</span>
      </div>

      {/* Review text */}
      <div className="p-4 flex-grow">
        <p className="text-sm text-[#333333] leading-tight mb-10">
          {review.text}
        </p>
      </div>

      {/* Footer with date and user */}
      <div className="flex items-center p-3 mt-auto border-t border-gray-200">
        <div className="bg-gray-400 rounded-full w-8 h-8 flex items-center justify-center text-white text-sm mr-2">
          J
        </div>
        <span className="font-medium text-sm">{review.name}</span>
        <span className="ml-auto text-sm text-gray-500">{review.date}</span>
      </div>
    </div>
  );

  // Clone reviews to ensure we have enough for the animation
  const firstRowReviews = [...reviews, ...reviews, ...reviews];
  const secondRowReviews = [...reviews, ...reviews, ...reviews];

  return (
    <div className="w-full overflow-hidden px-4">
      {/* No heading in the reference image */}

      {/* Controls for the slider */}
      <div className="relative">
        {/* First row - moving right */}
        <div className="overflow-hidden w-full mb-4">
          <div
            ref={firstRowRef}
            className="flex"
            style={{ width: `${(100 * firstRowReviews.length) / 3}%` }}
          >
            {firstRowReviews.map((review, index) => (
              <div
                key={`row1-${index}`}
                className="px-2"
                style={{ width: `${100 / firstRowReviews.length}%` }}
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        {/* Second row - moving left */}
        <div className="overflow-hidden w-full">
          <div
            ref={secondRowRef}
            className="flex"
            style={{ width: `${(100 * secondRowReviews.length) / 3}%` }}
          >
            {secondRowReviews.map((review, index) => (
              <div
                key={`row2-${index}`}
                className="px-2"
                style={{ width: `${100 / secondRowReviews.length}%` }}
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#FF8C00] hover:bg-[#F5621F] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#FF8C00] hover:bg-[#F5621F] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
