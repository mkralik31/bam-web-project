"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Project {
  _id: string;
  name: string;
  slug: string;
  description: string;
  featuredImage: string;
  category: string;
  date: string;
}

export default function FeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects?featured=true&limit=3")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-gray-200 animate-pulse rounded-2xl h-80"></div>
        ))}
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Zatiaľ nemáme žiadne projekty.</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {projects.map((project) => (
        <Link
          key={project._id}
          href={`/projects/${project.slug}`}
          className="group block"
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.featuredImage}
                alt={project.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[#8ca4c0] font-semibold uppercase">
                  {project.category}
                </span>
                <span className="text-sm text-gray-500">
                  {new Date(project.date).toLocaleDateString('sk-SK')}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#8ca4c0] transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-600 line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
} 