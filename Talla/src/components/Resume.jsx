import SectionHeading from "./SectionHeading";

function Entry({ item }) {
  return (
    <li className="rounded-r-xl border-l-4 border-neon bg-panel py-3 pl-5 pr-4">
      <p className="font-display text-base font-bold text-white">{item.title}</p>
      <p className="text-sm font-semibold text-neon">
        {item.place}, {item.period}
      </p>
      <p className="mt-1 text-soft">{item.note}</p>
    </li>
  );
}

export default function Resume({ resume, onDownloadCv }) {
  return (
    <section id="resume" className="border-t border-edge px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading title="Resume / CV" />
          <button
            type="button"
            onClick={onDownloadCv}
            className="mb-10 rounded-full border border-neon px-6 py-3 font-display text-sm font-semibold text-white transition hover:bg-neon hover:text-black"
          >
            Download CV
          </button>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 font-display text-lg font-bold text-white">Education</h3>
            <ul className="space-y-3">
              {resume.education.map((e) => (
                <Entry key={e.title} item={e} />
              ))}
            </ul>

            <h3 className="mb-4 mt-10 font-display text-lg font-bold text-white">Skills</h3>
            <ul className="flex flex-wrap gap-2">
              {resume.skills.map((s) => (
                <li key={s} className="rounded-md border border-edge bg-panel px-3 py-1.5 text-sm text-soft">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg font-bold text-white">Experience</h3>
            <ul className="space-y-3">
              {resume.experience.map((e) => (
                <Entry key={e.title} item={e} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
