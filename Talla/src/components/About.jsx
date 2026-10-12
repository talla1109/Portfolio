import SectionHeading from "./SectionHeading";
import ProfilePhoto from "./ProfilePhoto";
import { useInView } from "../hooks";

export default function About({ about, profile }) {
  const [ref, seen] = useInView();

  return (
    <section id="about" className="border-t border-edge px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About me" />
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <ProfilePhoto
              src={profile.photo}
              name={profile.name}
              className="mb-6 h-36 w-36 border-2 border-neon glow-box"
            />
            <div className="space-y-4 leading-relaxed text-soft">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <h3 className="mt-8 font-display text-lg font-bold text-white">Interests</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {about.interests.map((i) => (
                <li key={i} className="rounded-full border border-edge bg-panel px-4 py-1.5 text-sm text-soft">
                  {i}
                </li>
              ))}
            </ul>
          </div>

          <div ref={ref}>
            <h3 className="font-display text-lg font-bold text-white">Skills</h3>
            <ul className="mt-4 space-y-4">
              {about.skills.map((s) => (
                <li key={s.name}>
                  <div className="mb-1 flex justify-between text-sm font-semibold">
                    <span>{s.name}</span>
                    <span className="text-soft">{s.level}%</span>
                  </div>
                  <div
                    className="h-2.5 overflow-hidden rounded-full bg-white/10"
                    role="progressbar"
                    aria-valuenow={s.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={s.name}
                  >
                    <div
                      className="h-full rounded-full bg-neon shadow-[0_0_10px_rgba(255,43,43,0.8)] transition-[width] duration-1000 ease-out"
                      style={{ width: seen ? `${s.level}%` : "0%" }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
