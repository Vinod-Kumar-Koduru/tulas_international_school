import { admissions } from "../../data/content";
import Reveal from "../animation/Reveal";

export default function Admissions() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Admissions enquiry");
    const body = encodeURIComponent(
      [
        `Parent/Guardian: ${formData.get("parentName")}`,
        `Email: ${formData.get("email")}`,
        `Phone: ${formData.get("phone")}`,
        `Class applying for: ${formData.get("class")}`,
        `Message: ${formData.get("message") || "Not provided"}`,
      ].join("\n"),
    );

    window.location.href = `mailto:info@tis.edu.in?subject=${subject}&body=${body}`;
  }

  return (
    <section id="admissions" className="px-6 pb-24">
      <Reveal className="mx-auto max-w-5xl rounded-[2rem] border-2 border-ink bg-accent p-6 text-ink shadow-[6px_6px_0px_rgba(17,24,39,1)] sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-4 inline-flex rounded-full border-2 border-ink bg-brand px-4 py-1 text-sm font-extrabold">
              Join our community
            </p>
            <h2 id="admissions-heading" className="text-3xl font-extrabold sm:text-5xl">
              {admissions.title}
            </h2>
            <p className="mt-4 leading-relaxed text-ink/80">
              {admissions.text}
            </p>
          </div>

          <form
            aria-label="Admissions enquiry form"
            onSubmit={handleSubmit}
            className="grid gap-4 rounded-3xl border-2 border-ink bg-white p-5 shadow-[4px_4px_0px_rgba(17,24,39,1)] sm:grid-cols-2 sm:p-7"
          >
            <label className="grid gap-2 text-sm font-bold">
              Parent/Guardian name
              <input
                name="parentName"
                type="text"
                autoComplete="name"
                required
                className="min-h-12 rounded-xl border-2 border-ink/20 bg-white px-4 font-normal outline-none transition focus:border-ink"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold">
              Email address
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-h-12 rounded-xl border-2 border-ink/20 bg-white px-4 font-normal outline-none transition focus:border-ink"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold">
              Phone number
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className="min-h-12 rounded-xl border-2 border-ink/20 bg-white px-4 font-normal outline-none transition focus:border-ink"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold">
              Class applying for
              <input
                name="class"
                type="text"
                required
                placeholder="e.g. Class 1"
                className="min-h-12 rounded-xl border-2 border-ink/20 bg-white px-4 font-normal outline-none transition focus:border-ink"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold sm:col-span-2">
              Message <span className="font-normal opacity-70">(optional)</span>
              <textarea
                name="message"
                rows="3"
                className="resize-y rounded-xl border-2 border-ink/20 bg-white px-4 py-3 font-normal outline-none transition focus:border-ink"
              />
            </label>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="rounded-full border-2 border-ink bg-brand px-8 py-3 font-bold shadow-[3px_3px_0px_rgba(17,24,39,1)] transition hover:translate-y-0.5 hover:shadow-[1px_1px_0px_rgba(17,24,39,1)]"
              >
                {admissions.cta}
              </button>
              <p className="mt-3 text-xs text-ink/65">
                Submitting opens your email app with your enquiry ready to send.
              </p>
            </div>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
