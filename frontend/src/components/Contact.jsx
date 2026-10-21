import { MessageCircle } from "lucide-react";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { waLink, SITE } from "@/config";

const PROJECT_TYPES = [
  "Custom Software",
  "Web Application",
  "Mobile App",
  "API & Systems Integration",
  "Business Operations Platform",
];

const TIMELINES = [
  "Immediate (< 1 month)",
  "1 – 3 months",
  "3 – 6 months",
  "Exploratory / Planning",
];

const inputCls =
  "w-full bg-transparent border border-hair-d px-4 py-3 text-sm text-paper placeholder:text-fog/60 focus:border-lime focus:outline-none transition-colors duration-200 rounded-none";
const labelCls =
  "block font-mono text-[10px] uppercase tracking-[0.18em] text-fog mb-2";

const Contact = () => {
  const submit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const lines = [
      "Hello Alpha One Studio, I'd like to discuss a project.",
      "",
      `Name: ${data.fullName}`,
      `Email: ${data.email}`,
      data.company ? `Company: ${data.company}` : null,
      `Project type: ${data.projectType}`,
      `Timeline: ${data.timeline}`,
      "",
      "Brief:",
      data.message,
    ]
      .filter((l) => l !== null)
      .join("\n");
    window.open(waLink(lines), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="bg-ink">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <SectionHead
              label="Contact"
              title="Tell us about the operation."
              intro="Describe what your business does and what is slowing it down. We reply with honest next steps — usually a short technical discovery session, not a sales call."
            />
            <Reveal delay={0.15}>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-whatsapp-direct"
                className="mt-10 inline-flex items-center gap-2.5 border border-hair-d px-5 py-3.5 text-sm font-medium text-paper hover:border-lime hover:text-lime transition-colors duration-200"
              >
                <MessageCircle size={17} strokeWidth={1.5} />
                Message us directly
              </a>
              <p className="mt-5 max-w-sm text-xs leading-relaxed text-fog/80" data-testid="contact-whatsapp-note">
                Opens WhatsApp with your brief prefilled. Note: this build uses a
                placeholder WhatsApp number ({SITE.whatsappNumber}) — set yours in
                one line of the site config.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <form
              onSubmit={submit}
              data-testid="contact-form"
              className="bg-card-d border border-hair-d p-6 sm:p-10"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className={labelCls}>Full Name *</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    data-testid="contact-input-name"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelCls}>Business Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    data-testid="contact-input-email"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="company" className={labelCls}>Company / Organization</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Acme Corp"
                    data-testid="contact-input-company"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className={labelCls}>Project Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    data-testid="contact-select-project-type"
                    className={`${inputCls} appearance-none`}
                  >
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} className="bg-card-d text-paper">{t}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="timeline" className={labelCls}>Target Timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    data-testid="contact-select-timeline"
                    className={`${inputCls} appearance-none`}
                  >
                    {TIMELINES.map((t) => (
                      <option key={t} className="bg-card-d text-paper">{t}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className={labelCls}>Project Brief &amp; Requirements *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Describe your business workflow and what the software needs to handle..."
                    data-testid="contact-textarea-message"
                    className={`${inputCls} resize-y`}
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    data-testid="contact-submit-button"
                    className="w-full bg-lime text-ink font-semibold py-4 text-sm hover:bg-paper transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={17} strokeWidth={1.75} />
                    Send via WhatsApp
                  </button>
                  <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-fog">
                    Opens in WhatsApp — nothing is stored on this site
                  </p>
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
