import React from "react";
import Link from "next/link";

export default function AdminTeamPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#8ca4c0]">Správa tímu</h1>
        <Link
          href="/admin/dashboard/team/new"
          className="bg-[#8ca4c0] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#6b7c93] transition-colors"
        >
          + Nový člen
        </Link>
      </div>

      {/* Tím list */}
      <div className="bg-white rounded-2xl p-8 shadow-sm">
        <div className="text-center py-12">
          <div className="text-4xl mb-4">👥</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Zatiaľ nemáte žiadnych členov tímu
          </h3>
          <p className="text-gray-600 mb-6">
            Pridajte členov tímu a predstavte ich návštevníkom.
          </p>
          <Link
            href="/admin/dashboard/team/new"
            className="bg-[#8ca4c0] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#6b7c93] transition-colors"
          >
            Pridať prvého člena
          </Link>
        </div>
      </div>
    </div>
  );
} 