import { useState } from "react";

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-edge bg-panel transition-colors hover:border-neon/60">
      <div
        className="flex h-40 items-center justify-center bg-gradient-to-br from-[#2a0707] via-[#0d0d0d] to-black"
        aria-hidden="true"
      >
        <span className="font-display text-4xl font-bold text-neon glow-text">{project.glyph}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-base font-bold text-white">{project.title}</h3>
          <span className="shrink-0 rounded-full border border-neon/50 px-2.5 py-0.5 text-xs font-semibold text-neon">
            {project.tag}
          </span>
        </div>
        <p className="mt-2 text-soft">{project.summary}</p>

        {expanded && (
          <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-soft">
            {project.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        )}

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li key={t} className="rounded bg-white/5 px-2 py-0.5 text-xs font-semibold text-white">
              {t}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className="mt-auto pt-5 text-left text-sm font-bold text-neon underline-offset-4 hover:underline"
        >
          {expanded ? "Show less" : "View more"}
        </button>
      </div>
    </article>
  );
}
