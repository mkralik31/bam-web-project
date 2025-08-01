import React from "react";
import ContactForm from "@/components/ContactForm";

export const generateMetadata = () => {
  return {
    title: "BAM! atelier - Kontakt",
    description: "Kontaktujte nás pre vaše digitálne riešenia",
  };
};

export default function ContactPage() {
  return (
    <div className="space-y-16">
      {/* Hero sekcia */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-[#8ca4c0] mb-6">
          Kontaktujte nás
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Máte nápad na projekt? Chcete diskutovať o vašich digitálnych potrebách? 
          Neváhajte nás kontaktovať - sme tu pre vás!
        </p>
      </section>

      {/* Kontaktné informácie a formulár */}
      <section className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-[#8ca4c0] mb-8">
            Kontaktné informácie
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="text-2xl">📍</div>
              <div>
                <h3 className="font-semibold text-gray-900">Adresa</h3>
                <p className="text-gray-600">
                  BAM! atelier<br />
                  Kreatívna ulica 123<br />
                  811 01 Bratislava<br />
                  Slovensko
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl">📧</div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:info@bam-atelier.sk" className="hover:text-[#8ca4c0] transition-colors">
                    info@bam-atelier.sk
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl">📞</div>
              <div>
                <h3 className="font-semibold text-gray-900">Telefón</h3>
                <p className="text-gray-600">
                  <a href="tel:+421901234567" className="hover:text-[#8ca4c0] transition-colors">
                    +421 901 234 567
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl">🕒</div>
              <div>
                <h3 className="font-semibold text-gray-900">Otvorené hodiny</h3>
                <p className="text-gray-600">
                  Pondelok - Piatok: 9:00 - 18:00<br />
                  Sobota: 10:00 - 14:00<br />
                  Nedeľa: Zatvorené
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-br from-[#8ca4c0] to-[#6b7c93] rounded-2xl text-white">
            <h3 className="text-xl font-bold mb-4">Prečo si vybrať BAM! atelier?</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Profesionálny prístup
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Moderné technológie
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Individuálne riešenia
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Podpora po dokončení
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#8ca4c0] mb-8">
            Napíšte nám
          </h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
