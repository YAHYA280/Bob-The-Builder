"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface NavItemProps {
  text: string;
}

export default function NavItem({ text }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-1 text-white font-medium"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {text}{" "}
        <ChevronDown className="h-4 w-4 text-[#f5621f]" aria-hidden="true" />
      </button>
      <div
        className={`absolute ${
          isOpen ? "block" : "hidden"
        } group-hover:block bg-white shadow-lg rounded-md p-2 min-w-40 z-20`}
        role="menu"
      >
        <div
          className="py-1 px-2 hover:bg-gray-100 rounded text-[#001b47]"
          role="menuitem"
        >
          Optie 1
        </div>
        <div
          className="py-1 px-2 hover:bg-gray-100 rounded text-[#001b47]"
          role="menuitem"
        >
          Optie 2
        </div>
        <div
          className="py-1 px-2 hover:bg-gray-100 rounded text-[#001b47]"
          role="menuitem"
        >
          Optie 3
        </div>
      </div>
    </div>
  );
}
