import { useState } from "react";

// Shows /public/profile.jpg. If the file is missing, shows a dark placeholder with initials.
export default function ProfilePhoto({ src, name, className = "", rounded = "rounded-full" }) {
  const [failed, setFailed] = useState(false);
  const initials = name.split(" ").filter(Boolean).map((n) => n[0]).join("").slice(0, 2);

  return failed ? (
    <div
      className={`${className} ${rounded} flex items-center justify-center bg-gradient-to-b from-[#1a0505] via-[#2a0a14] to-[#5b3a6e] font-display text-4xl font-bold text-neon glow-text`}
      role="img"
      aria-label={`Profile placeholder for ${name}`}
    >
      {initials}
    </div>
  ) : (
    <img
      src={src}
      alt={`Photo of ${name}`}
      onError={() => setFailed(true)}
      className={`${className} ${rounded} object-cover`}
    />
  );
}
