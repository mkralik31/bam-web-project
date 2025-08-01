import React from "react";
import { Suspense } from "react";
import ProjectGrid from "@/components/ProjectGrid";

export const generateMetadata = () => {
  return {
    title: "BAM! atelier - Projekty",
    description: "Pozrite si naše najnovšie projekty a práce",
  };
};

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      {/* Hero sekcia */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-[#8ca4c0] mb-6">
          Naše projekty
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Pozrite si našu portfólio prác - od webových aplikácií až po mobilné riešenia. 
          Každý projekt je príbeh o kreativite, technológii a úspechu.
        </p>
      </section>

      {/* Projekty grid */}
      <section>
        <Suspense fallback={<div className="text-center py-12">Načítavam projekty...</div>}>
          <ProjectGrid />
        </Suspense>
      </section>
    </div>
  );
}
