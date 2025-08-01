import React from "react";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#8ca4c0]">Nastavenia</h1>
        <p className="text-gray-600 mt-2">
          Spravujte nastavenia vašej webovej stránky.
        </p>
      </div>

      {/* Nastavenia sekcie */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Všeobecné nastavenia */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Všeobecné nastavenia
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Názov webu
              </label>
              <input
                type="text"
                defaultValue="BAM! atelier"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8ca4c0] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Popis webu
              </label>
              <textarea
                rows={3}
                defaultValue="Profesionálne riešenia pre váš digitálny svet"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8ca4c0] focus:border-transparent"
              />
            </div>
            <button className="bg-[#8ca4c0] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#6b7c93] transition-colors">
              Uložiť zmeny
            </button>
          </div>
        </div>

        {/* Kontaktné informácie */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Kontaktné informácie
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                defaultValue="info@bam-atelier.sk"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8ca4c0] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Telefón
              </label>
              <input
                type="tel"
                defaultValue="+421 901 234 567"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8ca4c0] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adresa
              </label>
              <textarea
                rows={3}
                defaultValue="BAM! atelier&#10;Kreatívna ulica 123&#10;811 01 Bratislava"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8ca4c0] focus:border-transparent"
              />
            </div>
            <button className="bg-[#8ca4c0] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#6b7c93] transition-colors">
              Uložiť zmeny
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 