import { useState } from "react";
import SectionHeading from "./SectionHeading";

const empty = { name: "", email: "", message: "" };

function validate(v) {
  const errors = {};
  if (v.name.trim().length < 2) errors.name = "Enter your name (at least 2 characters).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()))
    errors.email = "Enter a valid email address, like name@example.com.";
  if (v.message.trim().length < 10)
    errors.message = "Write a message of at least 10 characters.";
  return errors;
}

export default function Contact({ profile }) {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const subject = encodeURIComponent(`Portfolio message from ${values.name.trim()}`);
    const body = encodeURIComponent(`${values.message.trim()}\n\nFrom: ${values.name.trim()} (${values.email.trim()})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const reset = () => {
    setValues(empty);
    setErrors({});
    setSent(false);
  };

  const field = (name) =>
    `mt-1 w-full rounded-lg border bg-panel px-4 py-2.5 text-white transition ${
      errors[name] ? "border-red-400" : "border-edge focus:border-neon"
    }`;

  return (
    <section id="contact" className="border-t border-edge px-6 py-20 sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionHeading title="Contact">
            Have a question or a project idea? Send me a message or reach me through the links below.
          </SectionHeading>
          <ul className="space-y-3 text-lg text-soft">
            <li>
              <span className="font-semibold text-white">Email: </span>
              <a className="text-neon underline underline-offset-4" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </li>
            <li>
              <span className="font-semibold text-white">Location: </span>
              {profile.location}
            </li>
            {profile.socials.map((s) => (
              <li key={s.label}>
                <span className="font-semibold text-white">{s.label}: </span>
                <a
                  className="text-neon underline underline-offset-4"
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open profile
                </a>
              </li>
            ))}
          </ul>
        </div>

        {sent ? (
          <div className="rounded-2xl border border-neon bg-panel p-8" role="status">
            <p className="font-display text-xl font-bold text-neon">Message ready to send</p>
            <p className="mt-2 text-soft">
              Thanks, {values.name.trim()}. Your email app should open with the message filled in. Press
              send there to deliver it.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-5 rounded-full bg-neon px-6 py-2.5 font-display text-sm font-bold text-black hover:bg-white"
            >
              Write another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-2xl border border-edge bg-[#0b0b0b] p-6 sm:p-8">
            {[
              { name: "name", label: "Your name", type: "text" },
              { name: "email", label: "Your email", type: "email" },
            ].map((f) => (
              <div key={f.name}>
                <label htmlFor={f.name} className="font-medium">{f.label}</label>
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type}
                  value={values[f.name]}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors[f.name])}
                  aria-describedby={errors[f.name] ? `${f.name}-error` : undefined}
                  className={field(f.name)}
                />
                {errors[f.name] && (
                  <p id={`${f.name}-error`} className="mt-1 text-sm text-red-400">{errors[f.name]}</p>
                )}
              </div>
            ))}
            <div>
              <label htmlFor="message" className="font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={field("message")}
              />
              <div className="mt-1 flex justify-between text-sm">
                <p id="message-error" className="text-red-400">{errors.message}</p>
                <span className="text-soft">{values.message.trim().length} characters</span>
              </div>
            </div>
            <button
              type="submit"
              className="glow-box rounded-full bg-neon px-8 py-3 font-display text-sm font-bold text-black transition hover:bg-white"
            >
              Send message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
