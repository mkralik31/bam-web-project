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
  technologies: string[];
  date: string;
}

const categories = [
  { value: '', label: 'Všetky kategórie' },
  { value: 'web', label: 'Webové aplikácie' },
  { value: 'mobile', label: 'Mobilné aplikácie' },
  { value: 'design', label: 'Dizajn' },
  { value: 'branding', label: 'Branding' },
  { value: 'other', label: 'Ostatné' },
];

export default function ProjectGrid() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory === '') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory, projects]);

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="flex justify-center">
          <div className="bg-gray-200 animate-pulse rounded-lg h-12 w-64"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-200 animate-pulse rounded-2xl h-80"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Filtre */}
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category.value
                  ? 'bg-[#8ca4c0] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projekty grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">
            {selectedCategory ? 'V tejto kategórii nemáme žiadne projekty.' : 'Zatiaľ nemáme žiadne projekty.'}
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
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
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs text-gray-500">
                          +{project.technologies.length - 3} viac
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
} 