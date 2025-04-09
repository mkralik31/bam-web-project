import Image from "next/image";
import ProjectList from "@/components/ProjectList";

export const generateMetadata = () => {
  return {
    title: "BAM! - Home",
    description: "Vitajte na našej domovskej stránke",
  };
};

export default function HomePage() {
  return (
    <div className="flex flex-col items-center sm:items-start gap-8">
      {/* Logo */}
      <Image
        className="dark:invert"
        src="/ch-logo.jpg"
        alt="chytka logo"
        width={180}
        height={38}
        priority
      />
      <ProjectList />
    </div>
  );
}
