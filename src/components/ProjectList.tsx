"use client";
import { useEffect, useState } from "react";

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
}

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="mt-8 flex justify-center">
      <div className="max-w-8xl w-full">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {projects.map((project) => (
            <li
              key={project.id}
              className="p-4 border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow max-w-[550px] w-full max-h-[550px] h-full flex flex-col"
            >
              <h3 className="text-xl font-medium">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
              <div className="p-2 flex-1 flex justify-center items-center">
                <img src={project.image} className="h-auto" loading="lazy" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
