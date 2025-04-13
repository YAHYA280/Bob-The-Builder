// components/Navigation.tsx
import Link from "next/link";
import Image from "next/image";
import NavItem from "./NavItem";

export default function Navigation() {
  return (
    <nav
      className="bg-[#001b47] text-white py-4 px-6 relative z-10"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Buru Construction Home"
        >
          <Image
            src="/logo.png"
            alt=""
            width={50}
            height={50}
            className="h-10 w-auto"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-[#f5621f]">BURU</span>
            <span className="text-sm tracking-wider">CONSTRUCTION</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavItem text="Home" />
          <NavItem text="Over" />
          <NavItem text="Diensten" />
          <NavItem text="Contact" />

          <Link
            href="/offerte"
            className="bg-[#ff8c00] text-white px-6 py-2 rounded-md font-medium hover:bg-[#f5621f] transition-colors shadow-md"
          >
            Offerte Aanvragen
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          aria-label="Open menu"
          aria-expanded="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
