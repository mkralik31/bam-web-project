"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Nesprávne prihlasovacie údaje");
      } else {
        router.push("/admin");
        router.refresh();
      }
    } catch (error) {
      setError("Chyba pri prihlásení");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-[#8ca4c0]">
            <span className="text-2xl">🔐</span>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Prihlásenie do admin rozhrania
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            BAM! atelier - Administrácia
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#8ca4c0] focus:border-[#8ca4c0] focus:z-10 sm:text-sm"
                placeholder="Email adresa"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Heslo
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#8ca4c0] focus:border-[#8ca4c0] focus:z-10 sm:text-sm"
                placeholder="Heslo"
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#8ca4c0] hover:bg-[#6b7c93] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8ca4c0] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Prihlasujem..." : "Prihlásiť sa"}
            </button>
          </div>

          <div className="text-center">
            <Link
              href="/"
              className="font-medium text-[#8ca4c0] hover:text-[#6b7c93] text-sm"
            >
              Späť na hlavnú stránku
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
} 