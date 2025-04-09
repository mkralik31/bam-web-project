import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: 1, name: "chytka S", description: "Najmenšia z chytiek", image: "/projects-landing-img/ch-s.png" },
    { id: 2, name: "chytka M", description: "Stredná chytka", image: "/projects-landing-img/ch-m.png" },
    { id: 3, name: "chytka L", description: "Väčšia chytka", image: "/projects-landing-img/ch-l.png" },
    { id: 4, name: "chytka XL", description: "Najvačšia chytka", image: "/projects-landing-img/ch-xl.png" },
    { id: 5, name: "chytka XL", description: "Najvačšia chytka", image: "/projects-landing-img/ch-xl.png" },
    { id: 6, name: "chytka L", description: "Väčšia chytka", image: "/projects-landing-img/ch-l.png" },
    { id: 7, name: "chytka M", description: "Stredná chytka", image: "/projects-landing-img/ch-m.png" },
    { id: 8, name: "chytka S", description: "Najmenšia z chytiek", image: "/projects-landing-img/ch-s.png" },
  ]);
}
