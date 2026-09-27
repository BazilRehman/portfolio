export default function SkillBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted font-mono">
      {label}
    </span>
  );
}
