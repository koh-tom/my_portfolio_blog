import { ProjectCard, type Project } from "@/components/portfolio/ProjectCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// サーバーコンポーネント
// 最新のプロジェクトをAPIから取得
async function getLatestProjects(): Promise<Project[]> {
  try {
    // APIから最新3件を取得
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/projects?_sort=id&_order=desc&_limit=3`,
      { cache: "no-store" },
    );
    if (!res.ok) return []; // エラー時は空配列
    const projects = await res.json();
    return projects.map((p: Project) => ({
      ...p,
      image_url: p.image_url || "/images/placeholder-project.png",
    }));
  } catch (error) {
    console.error("Failed to fetch latest projects:", error);
    return []; // エラー時は空配列
  }
}

export async function WorksPreview() {
  const latestProjects = await getLatestProjects();

  return (
    <section id="works" className="py-20 px-4 md:px-8 bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">Works</h2>
          <Button
            asChild
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-black"
          >
            <Link href="/portfolio">View all</Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {latestProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
