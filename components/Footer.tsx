import { profile } from "@/lib/resumeData";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex gap-4">
          <a href={profile.links.github} className="hover:text-foreground transition-colors">GitHub</a>
          <a href={profile.links.linkedin} className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href={profile.links.tryhackme} className="hover:text-foreground transition-colors">TryHackMe</a>
          <a href={profile.links.hackthebox} className="hover:text-foreground transition-colors">HackTheBox</a>
          <a href={`mailto:${profile.email}`} className="hover:text-foreground transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
