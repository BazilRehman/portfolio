type Project = {
  name: string;
  stack: string;
  url: string | null;
  status: string | null;
  summary: string;
  bullets: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-lg border border-border bg-surface p-6 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-lg">{project.name}</h3>
        {project.url && (
          <a
            href={project.url}
            className="text-accent text-sm whitespace-nowrap hover:underline"
          >
            View code →
          </a>
        )}
      </div>
      <div className="flex flex-wrap gap-2 text-xs font-mono text-muted">
        <span>{project.stack}</span>
        {project.status && <span className="text-accent">{project.status}</span>}
      </div>
      <p className="text-sm text-muted">{project.summary}</p>
      {project.bullets.length > 0 && (
        <ul className="list-disc list-inside text-sm text-muted space-y-1">
          {project.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
