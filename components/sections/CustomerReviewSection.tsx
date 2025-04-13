"use client";

import React, { useEffect, useRef } from "react";
import { StarIcon } from "lucide-react";
import gsap from "gsap";

export function CustomerReviewsSection() {
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const firstRowAnimation = useRef<gsap.core.Tween | null>(null);
  const secondRowAnimation = useRef<gsap.core.Tween | null>(null);

  // Reviews data - using generic placeholder data
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

  useEffect(() => {
    if (!firstRowRef.current || !secondRowRef.current) return;

    // The top row slides to the right
    firstRowAnimation.current = gsap.to(firstRowRef.current, {
      x: "50%",
      duration: 60, // Slower animation (60 seconds instead of 40)
      ease: "none",
      repeat: -1,
      paused: false,
    });

    // The bottom row slides to the left
    secondRowAnimation.current = gsap.to(secondRowRef.current, {
      x: "-50%",
      duration: 60, // Slower animation (60 seconds instead of 40)
      ease: "none",
      repeat: -1,
      paused: false,
    });

    return () => {
      if (firstRowAnimation.current) firstRowAnimation.current.kill();
      if (secondRowAnimation.current) secondRowAnimation.current.kill();
    };
  }, []);

  // Arrows let you reverse direction if you want
  const handlePrevClick = () => {
    if (!firstRowAnimation.current || !secondRowAnimation.current) return;
    // Reverse the current direction
    firstRowAnimation.current.reverse();
    secondRowAnimation.current.reverse();
  };

  const handleNextClick = () => {
    if (!firstRowAnimation.current || !secondRowAnimation.current) return;
    // Ensure they’re playing forward
    if (firstRowAnimation.current.reversed()) {
      firstRowAnimation.current.reverse();
    }
    if (secondRowAnimation.current.reversed()) {
      secondRowAnimation.current.reverse();
    }
  };

  const ReviewCard = ({ review }: { review: (typeof reviews)[0] }) => (
    <div
      // Use Tailwind margin class to space between cards
      className="flex flex-col h-[220px] bg-white rounded-md overflow-hidden relative shadow-md mr-5"
      style={{
        background: "linear-gradient(90deg, white, white 90%, #f0f0f0)",
        width: "270px",
      }}
    >
      {/* Star rating at top */}
      <div className="flex p-3 bg-gradient-to-r from-white to-[#f9f9f9]">
        {Array(review.rating)
          .fill(null)
          .map((_, i) => (
            <StarIcon
              key={i}
              className="w-5 h-5 fill-[#FF8C00] text-[#FF8C00]"
            />
          ))}
        <span className="ml-auto text-sm font-medium">{review.rating}</span>
      </div>

      {/* Review text */}
      <div className="p-3 flex-grow">
        <p className="text-sm text-[#333333] leading-tight">{review.text}</p>
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

  // Duplicate reviews for seamless infinite effect
  const firstRowReviews = [...reviews, ...reviews];
  const secondRowReviews = [...reviews, ...reviews];

  return (
    <div className="w-full overflow-hidden" ref={containerRef}>
      <div className="relative mx-auto max-w-[1400px]">
        {/* Gradient overlays for fade effect */}
        <div
          className="absolute left-0 top-0 w-[100px] h-full z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #001b47 40%, rgba(0,27,71,0))",
          }}
        ></div>
        <div
          className="absolute right-0 top-0 w-[100px] h-full z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, #001b47 40%, rgba(0,27,71,0))",
          }}
        ></div>

        {/* First row (slides to the right) */}
        <div className="overflow-hidden w-full mb-3">
          <div
            ref={firstRowRef}
            className="flex"
            style={{ width: `${(100 * firstRowReviews.length) / 2}%` }}
          >
            {firstRowReviews.map((review, index) => (
              <div key={`row1-${index}`} className="flex-shrink-0">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        {/* Second row (slides to the left) */}
        <div className="overflow-hidden w-full">
          <div
            ref={secondRowRef}
            className="flex"
            style={{ width: `${(100 * secondRowReviews.length) / 2}%` }}
          >
            {secondRowReviews.map((review, index) => (
              <div key={`row2-${index}`} className="flex-shrink-0">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={handlePrevClick}
          className="absolute left-[10px] top-1/2 -translate-y-1/2 bg-[#FF8C00] hover:bg-[#F5621F] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNextClick}
          className="absolute right-[10px] top-1/2 -translate-y-1/2 bg-[#FF8C00] hover:bg-[#F5621F] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
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
