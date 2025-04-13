"use client";

import Image from "next/image";
import {
  Phone,
  Mail,
  MessageSquare,
  Upload,
  ChevronRight,
  MoreVertical,
} from "lucide-react";

export function ContactSection() {
  return (
    <section className="bg-[#001b47] py-16 px-4 md:px-8">
      <div className="max-w-6xl w-full mx-auto">
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <p className="max-w-2xl mx-auto">
            Heb je vragen, of wil je een offerte ontvangen? Vul dan het
            contactformulier in.
            <br />
            Wij komen zo spoedig mogelijk bij je terug.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Form */}
          <div className="bg-white rounded-lg p-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-1">
                Naam:
              </label>
              <input
                type="text"
                id="name"
                placeholder="Vul hier je naam in..."
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-1">
                E-mailadres:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Voer hier uw e-mailadres in..."
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 mb-1">
                Telefoon:
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Vul hier je telefoonnummer in..."
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>

            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <label className="block text-gray-700">
                  Bijlage(s) uploaden:
                </label>
                <span className="text-sm text-gray-500">0/10</span>
              </div>
              <div className="border border-dashed border-orange-300 rounded-lg p-6 text-center">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-2">
                    <MessageSquare className="h-5 w-5 text-[#ffb100]" />
                  </div>
                  <p className="text-sm text-orange-500 mb-4">
                    Sleep en zet uw bestanden hier neer
                  </p>
                  <button className="bg-[#ffb100] text-white px-4 py-2 rounded flex items-center">
                    <Upload className="h-4 w-4 mr-2" />
                    Foto uploaden
                  </button>
                </div>
              </div>
              <div className="mt-2 border border-gray-200 rounded p-2 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-blue-500 mr-2">📄</span>
                  <span className="text-sm text-gray-600">
                    Screenshot 2022-02-03 at 49.710.png
                  </span>
                </div>
                <MoreVertical className="h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="service" className="block text-gray-700 mb-1">
                Selecteer jouw gewenste werkzaamheden:
              </label>
              <div className="relative">
                <select
                  id="service"
                  className="w-full border border-gray-300 rounded p-2 appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Renovatie kiezen
                  </option>
                  <option value="renovation">Renovatie</option>
                  <option value="construction">Nieuwbouw</option>
                  <option value="maintenance">Onderhoud</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-1">
                Bericht:
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Vul hier je bericht in..."
                className="w-full border border-gray-300 rounded p-2"
              ></textarea>
            </div>

            <div className="mb-6 flex items-start">
              <input type="checkbox" id="terms" className="mt-1 mr-2" />
              <label htmlFor="terms" className="text-sm text-gray-700">
                Ik ga akkoord met de algemene voorwaarden
              </label>
            </div>

            <button className="w-full bg-[#ffb100] text-white py-3 rounded flex items-center justify-center">
              Verstuur bericht
              <ChevronRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-1">
                  <h3 className="font-bold text-lg">Ovik Pogosjan</h3>
                  <p className="text-gray-600 text-sm">Directeur</p>
                </div>
                <div className="relative">
                  <Image
                    src="/placeholder.svg"
                    alt="Ovik Pogosjan"
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div className="absolute -top-1 -right-1 bg-yellow-400 p-1 rounded-full">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-2">Even babbelen?</h4>
                <div className="bg-[#ffb100] text-white p-2 rounded flex items-center mb-1">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>Bel: 06 - 212 765 7</span>
                </div>
                <p className="text-xs text-gray-500 mb-4">
                  Gemiddelde reactietijd: Circa 15 minuten
                </p>

                <h4 className="font-semibold mb-2">Liever appje sturen?</h4>
                <div className="bg-[#ffb100] text-white p-2 rounded flex items-center mb-1">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  <span>App: +31 6 489 119 82</span>
                </div>
                <p className="text-xs text-gray-500 mb-4">
                  Gemiddelde reactietijd: Circa 15 minuten
                </p>

                <h4 className="font-semibold mb-2">Of toch mailen?</h4>
                <div className="bg-[#ffb100] text-white p-2 rounded flex items-center mb-1">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>Mail: info@buruconstruction.nl</span>
                </div>
                <p className="text-xs text-gray-500">
                  Gemiddelde reactietijd: binnen 24 uur
                </p>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold mb-2">Gezellig op bezoek komen?</h4>
              <p className="text-sm mb-1">Strevelsweg 72A</p>
              <p className="text-sm mb-4">3075 AM Rotterdam</p>
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src="/placeholder.svg"
                  alt="Map location"
                  width={300}
                  height={200}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
