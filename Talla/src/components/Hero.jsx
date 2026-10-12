import ProfilePhoto from "./ProfilePhoto";
import { SocialIcon, PhoneIcon, CodeIcon, ArrowRight } from "./Icons";

export default function Hero({ profile, onDownloadCv }) {
  return (
    <section id="home" className="flex min-h-screen items-center px-6 pb-16 pt-32 sm:px-10">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="font-display text-lg font-bold text-white">Welcome</p>
          <h1 className="mt-2 font-display text-3xl font-bold leading-tight text-neon glow-text sm:text-4xl lg:text-5xl">
            Hello Everyone I'm {profile.shortName}
          </h1>
          <p className="mt-5 max-w-md leading-relaxed text-soft">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="glow-box inline-flex items-center gap-2 rounded-full bg-neon px-7 py-3 font-display text-sm font-bold text-black transition hover:bg-white"
            >
              Hire me <ArrowRight />
            </a>
            <button
              type="button"
              onClick={onDownloadCv}
              className="rounded-full border border-neon px-7 py-3 font-display text-sm font-semibold text-white transition hover:bg-neon hover:text-black"
            >
              Download CV
            </button>
          </div>

          <ul className="mt-8 flex gap-4">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-edge bg-panel text-white transition hover:border-neon hover:text-neon"
                >
                  <SocialIcon name={s.label} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-72 sm:w-80 lg:ml-auto lg:mr-10">
          <div className="rounded-3xl border border-neon/40 bg-[#0a0a0a] p-3 shadow-[0_0_45px_rgba(255,43,43,0.22)]">
            <ProfilePhoto
              src={profile.photo}
              name={profile.name}
              rounded="rounded-2xl"
              className="h-[26rem] w-full sm:h-[30rem]"
            />
          </div>
          <span className="absolute -left-4 top-12 flex items-center gap-2 rounded-xl border border-neon/30 bg-[#1b0707] px-4 py-2 text-sm font-bold text-white shadow-lg sm:-left-10">
            <PhoneIcon /> Responsive
          </span>
          <span className="absolute -left-2 bottom-16 flex items-center gap-2 rounded-xl bg-[#7a4a6b]/90 px-4 py-2 text-sm font-bold text-white shadow-lg sm:left-4">
            <CodeIcon /> Clean code
          </span>
        </div>
      </div>
    </section>
  );
}
