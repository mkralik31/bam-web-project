import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import FeaturedProjects from "@/components/FeaturedProjects";

export const generateMetadata = () => {
  return {
    title: "BAM! atelier - Domov",
    description: "Vitajte v BAM! ateliere - vašom partnerovi pre digitálne riešenia",
  };
};

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero sekcia */}
      <section className="text-center py-20 bg-gradient-to-br from-[#8ca4c0] to-[#6b7c93] text-white rounded-3xl">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            BAM! atelier
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Vytvárame digitálne riešenia, ktoré menia svet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/projects"
              className="bg-white text-[#8ca4c0] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Pozrieť projekty
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#8ca4c0] transition-colors"
            >
              Kontaktovať nás
            </Link>
          </div>
        </div>
      </section>

      {/* O nás sekcia */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-[#8ca4c0] mb-6">
            Kto sme
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            BAM! atelier je kreatívne štúdio, ktoré sa špecializuje na vývoj webových aplikácií, 
            mobilných aplikácií a digitálneho dizajnu. Naša misia je vytvárať riešenia, 
            ktoré sú nielen funkčné, ale aj krásne a používateľské.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            S viac ako 5-ročnou skúsenosťou v odvetví sme pomohli desiatkam klientov 
            realizovať ich digitálne sny a dosiahnuť úspech online.
          </p>
          <Link 
            href="/about"
            className="inline-block bg-[#8ca4c0] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#6b7c93] transition-colors"
          >
            Zistiť viac o nás
          </Link>
        </div>
        <div className="relative h-96 rounded-2xl overflow-hidden">
          <Image
            src="/chytka-logo.svg"
            alt="BAM! atelier"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Služby sekcia */}
      <section>
        <h2 className="text-4xl font-bold text-[#8ca4c0] text-center mb-12">
          Naše služby
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            title="Webové aplikácie"
            description="Vytvárame moderné, responzívne webové aplikácie s najnovšími technológiami."
            icon="🌐"
          />
          <ServiceCard
            title="Mobilné aplikácie"
            description="Vývoj nativných a cross-platform mobilných aplikácií pre iOS a Android."
            icon="📱"
          />
          <ServiceCard
            title="Digitálny dizajn"
            description="Kreatívny dizajn webových stránok, loga, brandingu a UI/UX riešení."
            icon="🎨"
          />
        </div>
      </section>

      {/* Najnovšie projekty */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-[#8ca4c0]">
            Najnovšie projekty
          </h2>
          <Link 
            href="/projects"
            className="text-[#8ca4c0] hover:text-[#6b7c93] font-semibold transition-colors"
          >
            Zobraziť všetky →
          </Link>
        </div>
        <Suspense fallback={<div className="text-center py-12">Načítavam projekty...</div>}>
          <FeaturedProjects />
        </Suspense>
      </section>
    </div>
  );
}

function ServiceCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-[#8ca4c0] mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
