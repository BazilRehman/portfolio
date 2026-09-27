import type { Metadata } from "next";
import { certifications, education } from "@/lib/resumeData";

export const metadata: Metadata = {
  title: "Certifications & Education | Bazil Rehman",
  description: "Certifications and education background of Bazil Rehman.",
};

export default function CertificationsPage() {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <h1 className="text-3xl font-bold">Certifications</h1>
        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          {certifications.map((c) => (
            <div key={c.org} className="rounded-lg border border-border bg-surface p-6">
              <h3 className="font-semibold mb-2">{c.org}</h3>
              <ul className="list-disc list-inside text-sm text-muted space-y-1">
                {c.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Education</h2>
        <div className="flex flex-col gap-4 mt-6">
          {education.map((e) => (
            <div key={e.degree} className="rounded-lg border border-border bg-surface p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">{e.degree}</h3>
                <span className="text-xs font-mono text-accent">{e.period}</span>
              </div>
              <p className="text-sm text-muted">{e.school}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
