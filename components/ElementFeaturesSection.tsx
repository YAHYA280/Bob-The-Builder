"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function ElementFeaturesSection() {
  // Data for the steps to improve maintainability
  const steps = [
    {
      number: "1",
      title: "Kijken",
      description:
        "Buru Construction komt langs om de werkzaamheden te bekijken.",
    },
    {
      number: "2",
      title: "Offerte",
      description:
        "Een uitgebreide offerte wordt gemaakt en gestuurd naar de opdrachtgever.",
    },
    {
      number: "3",
      title: "Start",
      description:
        "Na ondertekening van de offerte beginnen wij met de werkzaamheden.",
    },
    {
      number: "4",
      title: "Finish",
      description:
        "Na afronding van alle werkzaamheden controleren we alles op kwaliteit en perfectie.",
    },
  ];

  return (
    <section className="flex flex-col items-start relative">
      <div className="flex flex-col items-start gap-2.5 py-24 relative flex-[0_0_auto] bg-[#f2f5fa] w-full">
        <div className="absolute w-full h-[975px] top-16 left-0 overflow-hidden">
          <div className="relative h-[1077px]">
            <div className="absolute w-full h-[1077px] top-0 left-0">
              <div className="relative h-[975px] bg-[url(/s3-bg-2--nochair--1.png)] bg-cover bg-[50%_50%]">
                <img
                  className="absolute w-[696px] h-[853px] top-[122px] left-[716px] object-cover"
                  alt="Overlay"
                  src="/s3-overlay-v2.png"
                />
              </div>
            </div>
            <div className="absolute w-[173px] h-full top-[168px] left-[634px] -rotate-90 [background:linear-gradient(90deg,rgba(242,245,250,1)_25%,rgba(242,245,250,0)_100%)]" />
          </div>
        </div>

        <div className="relative w-full h-auto md:h-[847.2px] max-w-7xl mx-auto px-4">
          <Card className="flex flex-col w-full md:w-[542px] items-start gap-6 pt-6 pb-8 px-6 relative md:top-16 md:left-32 bg-white rounded-lg border-[2.52px] border-solid border-[#d6d5d9]">
            <CardContent className="p-0 w-full">
              <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
                <h3 className="relative self-stretch mt-[-1.00px] font-semibold text-[#4f4f4f] text-2xl tracking-[0] leading-normal">
                  Plan van aanpak
                </h3>
                <h2 className="relative self-stretch font-semibold text-black text-4xl md:text-5xl tracking-[0] leading-tight">
                  Hoe wij te werk gaan
                </h2>
              </div>

              {steps.map((step, index) => (
                <React.Fragment key={step.number}>
                  <Separator className="my-6 bg-neutral-300" />
                  <div className="flex items-center gap-6 relative self-stretch w-full">
                    <div className="flex-shrink-0 w-[72px] h-[72px] flex items-center justify-center">
                      <div className="relative w-[72px] h-[72px] bg-[#ff8c00] rounded-[36px] border-[2.18px] border-solid border-[#f5621f] flex items-center justify-center">
                        <div className="font-bold text-white text-[42.2px] leading-none">
                          {step.number}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-4 relative flex-1">
                      <h4 className="relative self-stretch mt-[-1.00px] font-semibold text-[#331d0f] text-2xl leading-tight">
                        {step.title}
                      </h4>
                      <p className="relative self-stretch font-normal text-[#4f4f4f] text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
