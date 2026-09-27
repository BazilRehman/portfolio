import { profile } from "@/lib/resumeData";

export default function StatsWidget() {
  return (
    <div className="flex flex-col gap-4">
      <a
        href={profile.links.tryhackme}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://tryhackme-badges.s3.amazonaws.com/${profile.links.tryhackmeUsername}.png`}
          alt="TryHackMe badge"
          width={300}
          height={70}
          className="rounded border border-border"
        />
      </a>
      <a
        href={profile.links.hackthebox}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-accent hover:underline font-mono"
      >
        Hack The Box profile →
      </a>
    </div>
  );
}
