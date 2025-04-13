// components/NavItem.tsx
import { ChevronDown } from "lucide-react";

interface NavItemProps {
  text: string;
}

export default function NavItem({ text }: NavItemProps) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 text-white font-medium">
        {text} <ChevronDown className="h-4 w-4 text-[#f5621f]" />
      </button>
      <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-2 min-w-40 z-20">
        <div className="py-1 px-2 hover:bg-gray-100 rounded text-[#001b47]">
          Optie 1
        </div>
        <div className="py-1 px-2 hover:bg-gray-100 rounded text-[#001b47]">
          Optie 2
        </div>
        <div className="py-1 px-2 hover:bg-gray-100 rounded text-[#001b47]">
          Optie 3
        </div>
      </div>
    </div>
  );
}
