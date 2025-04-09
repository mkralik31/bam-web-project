import React from "react";

export const generateMetadata = () => {
  return {
    title: "BAM! - Home",
    description: "Vitajte na našej domovskej stránke",
  };
};

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center sm:items-start gap-8">
      <div>
      <h1 className="text-4xl font-bold text-[#8ca4c0]">Kontakty</h1>
      </div>
    </div>
  );
}
