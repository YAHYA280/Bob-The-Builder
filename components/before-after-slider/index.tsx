"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import styles from "./styles.module.css";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  className?: string;
  initialPosition?: number;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Situatie voor renovatie",
  afterAlt = "Resultaat na renovatie",
  beforeLabel = "Before",
  afterLabel = "After",
  ctaText = "Een klus bespreken? Bel nu!",
  ctaHref = "/contact",
  onCtaClick,
  className,
  initialPosition = 50,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Calculate slider position based on mouse/touch position
  const calculateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const relativeX = clientX - containerRect.left;
    const newPosition = (relativeX / containerWidth) * 100;

    // Clamp the value between 5 and 95 to ensure labels remain visible
    return Math.min(Math.max(newPosition, 5), 95);
  };

  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    const newPosition = calculateSliderPosition(e.clientX);
    if (newPosition !== undefined) {
      setSliderPosition(newPosition);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const newPosition = calculateSliderPosition(e.clientX);
    if (newPosition !== undefined) {
      setSliderPosition(newPosition);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    const newPosition = calculateSliderPosition(e.touches[0].clientX);
    if (newPosition !== undefined) {
      setSliderPosition(newPosition);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !e.touches[0]) return;
    const newPosition = calculateSliderPosition(e.touches[0].clientX);
    if (newPosition !== undefined) {
      setSliderPosition(newPosition);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Keyboard event handlers for accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const step = 5;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(prev - step, 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(prev + step, 95));
    }
  };

  // Set up event listeners
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => handleMouseMove(e);
    const handleGlobalTouchMove = (e: TouchEvent) => handleTouchMove(e);

    if (isDragging) {
      window.addEventListener("mousemove", handleGlobalMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleGlobalTouchMove, {
        passive: false,
      });
      window.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleGlobalTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging]);

  // Handle CTA button click
  const handleCtaClick = (e: React.MouseEvent) => {
    if (onCtaClick) {
      e.preventDefault();
      onCtaClick();
    }
  };

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div
        ref={containerRef}
        className={cn(
          "relative w-full overflow-hidden rounded-xl shadow-lg",
          "aspect-[4/3] md:aspect-[16/9] max-w-5xl mx-auto",
          styles.container,
          isDragging && styles.dragging,
          isFocused && styles.focused
        )}
        aria-roledescription="slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={sliderPosition}
        aria-valuetext={`${sliderPosition}% after, ${
          100 - sliderPosition
        }% before`}
      >
        {/* Before Image - Base layer */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={beforeImage || "/placeholder.svg"}
            alt={beforeAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />

          {/* Before Label */}
          <div
            className={cn(
              "absolute top-4 right-4 bg-[#331d0f] text-white px-4 py-1 rounded-md font-medium z-30",
              "transition-opacity duration-300",
              sliderPosition < 50 ? "opacity-100" : "opacity-50"
            )}
          >
            {beforeLabel}
          </div>
        </div>

        {/* After Image - Reveal layer with clip path */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
          }}
        >
          <Image
            src={afterImage || "/placeholder.svg"}
            alt={afterAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />

          {/* After Label */}
          <div
            className={cn(
              "absolute top-4 left-4 bg-[#ff8c00] text-white px-4 py-1 rounded-md font-medium z-30",
              "transition-opacity duration-300",
              sliderPosition > 50 ? "opacity-100" : "opacity-50"
            )}
          >
            {afterLabel}
          </div>
        </div>

        {/* Slider Control */}
        <div
          ref={sliderRef}
          className={cn(
            "absolute top-0 bottom-0 w-0.5 bg-white z-40",
            styles.sliderLine
          )}
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          tabIndex={0}
          role="slider"
          aria-label="Schuif om voor en na te vergelijken"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={sliderPosition}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        >
          <div
            className={cn(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50",
              "w-12 h-12 rounded-full bg-[#662211] flex items-center justify-center",
              "shadow-lg border-2 border-white",
              "transition-transform duration-150",
              isDragging ? "scale-110" : "scale-100",
              styles.sliderHandle
            )}
          >
            <div className="flex items-center justify-center">
              <ChevronLeft className="text-white h-4 w-4" />
              <ChevronRight className="text-white h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Screen reader instructions */}
        <div className="sr-only">
          Gebruik de linker- en rechter pijltoetsen om de slider te bewegen en
          de voor- en na-situatie te vergelijken.
        </div>
      </div>

      {/* Call to Action Button */}
      <a
        href={ctaHref}
        onClick={handleCtaClick}
        className={cn(
          "mt-8 inline-block bg-[#ff8c00] text-white px-8 py-4 rounded-md font-medium",
          "hover:bg-[#f5621f] transition-colors text-lg shadow-md",
          "focus:outline-none focus:ring-2 focus:ring-[#f5621f] focus:ring-offset-2"
        )}
      >
        {ctaText}
      </a>
    </div>
  );
}
