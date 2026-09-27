import Link from "next/link";
import { profile, experience, projects, skills } from "@/lib/resumeData";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import StatsWidget from "@/components/StatsWidget";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <section className="flex flex-col gap-4">
        <p className="font-mono text-accent text-sm">{profile.location}</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{profile.name}</h1>
        <p className="text-xl text-muted">
          {profile.title} · {profile.subtitle}
        </p>
        <p className="max-w-2xl text-muted leading-relaxed">{profile.summary}</p>
        <div className="flex flex-wrap gap-3 mt-2">
          <a
            href={profile.resumeUrl}
            className="rounded bg-accent text-background px-4 py-2 text-sm font-semibold hover:opacity-90"
          >
            Download Résumé
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded border border-border px-4 py-2 text-sm hover:border-accent"
          >
            Contact Me
          </a>
          <Link
            href="/projects"
            className="rounded border border-border px-4 py-2 text-sm hover:border-accent"
          >
            View Projects
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Live Profiles</h2>
        <StatsWidget />
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Hands-On Experience</h2>
        <div className="flex flex-col gap-6">
          {experience.map((e) => (
            <div key={e.org} className="rounded-lg border border-border bg-surface p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">{e.org}</h3>
                {e.tag && <span className="text-xs font-mono text-accent">{e.tag}</span>}
              </div>
              <p className="text-sm text-muted mb-2">{e.role}</p>
              <ul className="list-disc list-inside text-sm text-muted space-y-1">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <Link href="/projects" className="text-sm text-accent hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.slice(0, 2).map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="flex flex-col gap-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <p className="text-sm text-muted mb-2">{category}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <SkillBadge key={s} label={s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
