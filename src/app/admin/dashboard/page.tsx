import React from "react";
import { auth } from "@/lib/auth";
import Link from "next/link";

export default async function AdminDashboard() {
  const session = await auth();

  return (
    <div className="space-y-8">
      {/* Vitajte sekcia */}
      <div className="bg-white rounded-2xl p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-[#8ca4c0] mb-2">
          Vitajte v admin rozhraní
        </h1>
        <p className="text-gray-600">
          Dobrý deň, {session?.user?.name}! Tu môžete spravovať obsah vašej webovej stránky.
        </p>
      </div>

      {/* Rýchle akcie */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link
          href="/admin/dashboard/projects/new"
          className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
        >
          <div className="text-3xl mb-3">➕</div>
          <h3 className="font-semibold text-gray-900 mb-2">Nový projekt</h3>
          <p className="text-sm text-gray-600">Pridať nový projekt do portfólia</p>
        </Link>

        <Link
          href="/admin/dashboard/team/new"
          className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
        >
          <div className="text-3xl mb-3">👤</div>
          <h3 className="font-semibold text-gray-900 mb-2">Nový člen tímu</h3>
          <p className="text-sm text-gray-600">Pridať nového člena do tímu</p>
        </Link>

        <Link
          href="/admin/dashboard/projects"
          className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
        >
          <div className="text-3xl mb-3">📁</div>
          <h3 className="font-semibold text-gray-900 mb-2">Spravovať projekty</h3>
          <p className="text-sm text-gray-600">Upraviť existujúce projekty</p>
        </Link>

        <Link
          href="/admin/dashboard/settings"
          className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
        >
          <div className="text-3xl mb-3">⚙️</div>
          <h3 className="font-semibold text-gray-900 mb-2">Nastavenia</h3>
          <p className="text-sm text-gray-600">Konfigurácia webovej stránky</p>
        </Link>
      </div>

      {/* Štatistiky */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Celkovo projektov</p>
              <p className="text-2xl font-bold text-[#8ca4c0]">12</p>
            </div>
            <div className="text-3xl">📁</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Členovia tímu</p>
              <p className="text-2xl font-bold text-[#8ca4c0]">4</p>
            </div>
            <div className="text-3xl">👥</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Kontaktné správy</p>
              <p className="text-2xl font-bold text-[#8ca4c0]">8</p>
            </div>
            <div className="text-3xl">📧</div>
          </div>
        </div>
      </div>

      {/* Posledné aktivity */}
      <div className="bg-white rounded-2xl p-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Posledné aktivity</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl">📝</div>
            <div>
              <p className="font-medium">Pridaný nový projekt "E-commerce platforma"</p>
              <p className="text-sm text-gray-600">Pred 2 hodinami</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl">👤</div>
            <div>
              <p className="font-medium">Aktualizovaný profil člena tímu</p>
              <p className="text-sm text-gray-600">Pred 1 dňom</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl">📧</div>
            <div>
              <p className="font-medium">Nová kontaktná správa od zákazníka</p>
              <p className="text-sm text-gray-600">Pred 2 dňami</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 