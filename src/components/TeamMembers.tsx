"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  email?: string;
  linkedin?: string;
  github?: string;
}

export default function TeamMembers() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/team")
      .then((res) => res.json())
      .then((data) => {
        setMembers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching team members:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-gray-200 animate-pulse rounded-2xl h-96"></div>
        ))}
      </div>
    );
  }

  if (members.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Zatiaľ nemáme žiadnych členov tímu.</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {members.map((member) => (
        <div key={member._id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
          <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-[#8ca4c0] mb-2">
            {member.name}
          </h3>
          <p className="text-gray-600 font-semibold mb-4">
            {member.role}
          </p>
          <p className="text-gray-600 mb-6">
            {member.bio}
          </p>
          <div className="flex justify-center space-x-4">
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="text-[#8ca4c0] hover:text-[#6b7c93] transition-colors"
                title="Email"
              >
                📧
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8ca4c0] hover:text-[#6b7c93] transition-colors"
                title="LinkedIn"
              >
                💼
              </a>
            )}
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8ca4c0] hover:text-[#6b7c93] transition-colors"
                title="GitHub"
              >
                🐙
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
} 