export default function SectionHeading({ title, children }) {
  return (
    <div className="mb-10 max-w-2xl">
      <h2 className="font-display text-3xl font-bold tracking-wide text-neon glow-text sm:text-4xl">
        {title}
      </h2>
      {children && <p className="mt-3 text-lg text-soft">{children}</p>}
    </div>
  );
}
