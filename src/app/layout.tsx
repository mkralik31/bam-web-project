import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Link from "next/link";
import "../styles/globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "BAM! atelier",
  description: "Profesionálne riešenia pre váš digitálny svet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body
        className={`${roboto.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Header s navigáciou */}
        <header className="bg-[#8ca4c0] text-white sticky top-0 z-50">
          <nav className="container mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="text-2xl font-bold hover:text-gray-300 transition-colors">
                BAM! atelier
              </Link>
              {/* Navigačné odkazy */}
              <div className="flex space-x-8">
                <NavLink href="/">Domov</NavLink>
                <NavLink href="/projects">Projekty</NavLink>
                <NavLink href="/about">O nás</NavLink>
                <NavLink href="/contact">Kontakt</NavLink>
              </div>
            </div>
          </nav>
        </header>

        {/* Hlavný obsah */}
        <main className="flex-1 container mx-auto px-6 py-8">{children}</main>

        {/* Footer */}
        <footer className="bg-[#8ca4c0] text-white mt-auto">
          <div className="container mx-auto px-6 py-4 text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} BAM! atelier. Všetky práva vyhradené.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="hover:text-gray-300 transition-colors text-lg font-medium relative
                 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                 after:bg-white after:transition-all hover:after:w-full"
    >
      {children}
    </Link>
  );
}
