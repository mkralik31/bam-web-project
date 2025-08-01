"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

export default function AdminNav() {
  const pathname = usePathname();

  const navItems = [
    { href: "/admin/dashboard", label: "Dashboard", icon: "📊" },
    { href: "/admin/dashboard/projects", label: "Projekty", icon: "📁" },
    { href: "/admin/dashboard/team", label: "Tím", icon: "👥" },
    { href: "/admin/dashboard/settings", label: "Nastavenia", icon: "⚙️" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/admin" className="text-xl font-bold text-[#8ca4c0]">
              BAM! Admin
            </Link>
            
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "bg-[#8ca4c0] text-white"
                      : "text-gray-600 hover:text-[#8ca4c0] hover:bg-gray-100"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-gray-600 hover:text-[#8ca4c0] text-sm font-medium"
            >
              Zobraziť web
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="text-gray-600 hover:text-red-600 text-sm font-medium"
            >
              Odhlásiť sa
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 