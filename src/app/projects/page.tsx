import ProjectList from "@/components/ProjectList";

export const generateMetadata = () => {
  return {
    title: "BAM! - Home",
    description: "Vitajte na našej domovskej stránke",
  };
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center sm:items-start gap-8">
              <h1 className="text-4xl font-bold text-[#8ca4c0]">Projekty</h1>
      <ProjectList />
    </div>
  );
}
