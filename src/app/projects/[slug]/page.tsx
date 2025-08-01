import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ProjectGallery from "@/components/ProjectGallery";

interface ProjectPageProps {
  params: { slug: string };
}

async function getProject(slug: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/projects/${slug}`, {
      cache: 'no-store'
    });
    
    if (!res.ok) {
      return null;
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching project:', error);
    return null;
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-12">
      {/* Hero sekcia */}
      <section className="relative h-96 rounded-3xl overflow-hidden">
        <Image
          src={project.featuredImage}
          alt={project.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{project.name}</h1>
            <p className="text-xl">{project.description}</p>
          </div>
        </div>
      </section>

      {/* Informácie o projekte */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold text-[#8ca4c0] mb-6">O projekte</h2>
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-[#8ca4c0] mb-4">Detaily projektu</h3>
            <div className="space-y-3">
              <div>
                <span className="font-semibold text-gray-700">Kategória:</span>
                <span className="ml-2 text-gray-600 capitalize">{project.category}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Dátum:</span>
                <span className="ml-2 text-gray-600">
                  {new Date(project.date).toLocaleDateString('sk-SK')}
                </span>
              </div>
              {project.client && (
                <div>
                  <span className="font-semibold text-gray-700">Klient:</span>
                  <span className="ml-2 text-gray-600">{project.client}</span>
                </div>
              )}
            </div>
          </div>

          {project.technologies && project.technologies.length > 0 && (
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-[#8ca4c0] mb-4">Použité technológie</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-[#8ca4c0] text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Galéria */}
      {project.images && project.images.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold text-[#8ca4c0] mb-8">Galéria</h2>
          <ProjectGallery images={project.images} />
        </section>
      )}

      {/* Navigácia */}
      <section className="flex justify-between items-center pt-8 border-t border-gray-200">
        <Link
          href="/projects"
          className="text-[#8ca4c0] hover:text-[#6b7c93] font-semibold transition-colors"
        >
          ← Späť na projekty
        </Link>
        <Link
          href="/contact"
          className="bg-[#8ca4c0] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#6b7c93] transition-colors"
        >
          Kontaktovať nás
        </Link>
      </section>
    </div>
  );
} 