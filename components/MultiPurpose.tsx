"use client";

// components/MultiPurpose.tsx
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function MultiPurpose() {
  // Data for accordion items
  const accordionItems = [
    {
      id: "item-1",
      title: "Duidelijk plan van aanpak",
      content:
        "Bij Buru Construction krijgt u een transparant en gedetailleerd stappenplan, zodat u precies weet wat u kunt verwachten.\n\nVan de eerste schets tot de oplevering, wij zorgen voor een gestructureerde aanpak die u volledig ontzorgt.",
      active: true,
    },
    {
      id: "item-2",
      title: "Professioneel en vakbekwaam",
      content:
        "Onze ervaren vakmensen werken volgens de hoogste standaarden en zorgen voor een perfect resultaat dat voldoet aan al uw wensen en eisen.",
      active: false,
    },
    {
      id: "item-3",
      title: "Uitstekende uitvoering",
      content:
        "Wij staan voor kwaliteit en precisie in elk detail van uw renovatieproject. Ons team werkt netjes, efficiënt en met oog voor detail.",
      active: false,
    },
    {
      id: "item-4",
      title: "Langdurige garantie",
      content:
        "Bij Buru Construction krijgt u niet alleen een prachtig eindresultaat, maar ook de zekerheid van een uitgebreide garantie op al onze werkzaamheden.",
      active: false,
    },
  ];

  // Function to toggle active state
  const [items, setItems] = React.useState(accordionItems);

  const toggleActive = (clickedId: string) => {
    setItems(
      items.map((item) => ({
        ...item,
        active: item.id === clickedId,
      }))
    );
  };

  return (
    <section className="flex flex-col items-center justify-center w-full bg-[#f2f5fa] relative py-20">
      {/* Heading */}
      <div className="flex flex-col items-center gap-8 w-full max-w-7xl px-6 z-[2] mb-16">
        <h2 className="font-bold text-4xl md:text-5xl text-center text-[#331d0f] leading-tight">
          Buru Construction, gegarandeerd
          <br className="hidden md:block" />
          een zorgeloze verbouwing
        </h2>
      </div>

      {/* Content area */}
      <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-7xl px-6 gap-12 z-[1] relative">
        <div className="flex flex-col min-h-[500px] items-start justify-center gap-10 flex-1">
          {/* Custom accordion */}
          <div className="flex flex-col items-start gap-6 w-full max-w-lg">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col w-full items-start py-2"
                onClick={() => toggleActive(item.id)}
              >
                <div className="flex items-center justify-between w-full cursor-pointer">
                  <h3
                    className={`font-semibold text-lg leading-tight ${
                      item.active ? "text-[#331d0f]" : "text-[#b9b9b9]"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <CheckIcon
                    className={
                      item.active ? "text-[#ff8c00]" : "text-[#b9b9b9]"
                    }
                    size={20}
                  />
                </div>

                <div className="inline-flex flex-col items-start gap-3 mt-2 w-full">
                  <div className="w-full h-px bg-[#999f9980]" />
                  {item.active && item.content && (
                    <p className="font-normal text-base text-[#331d0f] leading-relaxed whitespace-pre-line">
                      {item.content}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link href="/over-ons">
            <Button className="flex items-center justify-center gap-2 px-8 py-4 bg-[#ff8c00] text-white border-none rounded-md hover:bg-[#f5621f] transition-colors shadow-md">
              <span className="font-medium text-base">
                Lees meer over Buru Construction
              </span>
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Responsive image placement */}
        <div className="relative md:w-1/2 w-full h-[400px] md:h-[600px] overflow-hidden">
          <img
            className="absolute bottom-0 right-0 w-full h-auto object-contain"
            alt="Renovatiewoning"
            src="/heavyhouse-1.png"
          />
        </div>
      </div>
    </section>
  );
}
