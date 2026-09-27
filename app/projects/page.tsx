import type { Metadata } from "next";
import { projects } from "@/lib/resumeData";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects | Bazil Rehman",
  description: "Security engineering projects by Bazil Rehman.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-muted mt-2">
          Security tooling and research projects covering LLM defence, authentication testing,
          and API threat detection.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </div>
  );
}
