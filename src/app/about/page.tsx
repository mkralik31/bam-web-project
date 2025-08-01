import React from "react";
import { Suspense } from "react";
import TeamMembers from "@/components/TeamMembers";

export const generateMetadata = () => {
  return {
    title: "BAM! atelier - O nás",
    description: "Spoznajte náš tím a našu históriu",
  };
};

export default function AboutPage() {
  return (
    <div className="space-y-16">
      {/* Hero sekcia */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-[#8ca4c0] mb-6">
          O nás
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Sme tím kreatívnych profesionálov, ktorí veria v silu digitálnych riešení 
          a ich schopnosť meniť svet k lepšiemu.
        </p>
      </section>

      {/* História */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#8ca4c0] mb-6">
            Naša história
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            BAM! atelier vznikol v roku 2019 z myšlienky, že digitálne riešenia 
            môžu byť nielen funkčné, ale aj krásne a inšpirujúce. Začali sme ako 
            malý tím dvoch nadšencov a dnes sme rástli na plnohodnotné kreatívne štúdio.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Počas rokov sme spolupracovali s rôznymi klientmi - od malých startupov 
            až po veľké korporácie. Každý projekt je pre nás výzvou a príležitosťou 
            učiť sa niečo nové.
          </p>
          <p className="text-lg text-gray-600">
            Naša filozofia je jednoduchá: vytvárať riešenia, ktoré sú nielen 
            technicky dokonalé, ale aj emocionálne pútavé a používateľské.
          </p>
        </div>
        <div className="bg-gradient-to-br from-[#8ca4c0] to-[#6b7c93] rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Naše hodnoty</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="text-2xl mr-3">✨</span>
              Kreativita a inovácia
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">🎯</span>
              Kvalita a presnosť
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">🤝</span>
              Partnerstvo a dôvera
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">🚀</span>
              Rast a vývoj
            </li>
          </ul>
        </div>
      </section>

      {/* Štatistiky */}
      <section className="bg-gray-50 rounded-3xl p-12">
        <h2 className="text-3xl font-bold text-[#8ca4c0] text-center mb-12">
          Naše úspechy
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-[#8ca4c0] mb-2">50+</div>
            <div className="text-gray-600">Dokončených projektov</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#8ca4c0] mb-2">30+</div>
            <div className="text-gray-600">Spokojných klientov</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#8ca4c0] mb-2">5+</div>
            <div className="text-gray-600">Rokov skúseností</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#8ca4c0] mb-2">100%</div>
            <div className="text-gray-600">Spokojnosť klientov</div>
          </div>
        </div>
      </section>

      {/* Náš tím */}
      <section>
        <h2 className="text-3xl font-bold text-[#8ca4c0] text-center mb-12">
          Náš tím
        </h2>
        <Suspense fallback={<div className="text-center py-12">Načítavam členov tímu...</div>}>
          <TeamMembers />
        </Suspense>
      </section>
    </div>
  );
} 