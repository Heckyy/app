import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import RawLeagueUI from "./interfaces/RawLeagueUI";
import RawLeagueAppUI from "./interfaces/RawLeagueAppUI";
import SampoernaUI from "./interfaces/SampoernaUI";

const FILTERS = [
  { id: "all", label: "All Work" },
  { id: "webapp", label: "Web App" },
  { id: "cms", label: "CMS & Admin" },
  { id: "profile", label: "Company Profile" },
];

const PROJECTS = [
  {
    id: "raw-league",
    index: "01",
    title: "Raw League CMS",
    category: "Content management system",
    filter: "cms",
    badge: "Production Project",
    badgeChip: "border-lime/50 text-lime",
    layout: { text: "lg:order-1 lg:col-span-5", visual: "lg:order-2 lg:col-span-7" },
    problem:
      "Banners, announcements, and community content on the Raw League frontend needed a developer for every update — slowing campaigns down.",
    solution:
      "A focused operations CMS: the Announcement Hub controls banners per position with instant mobile preview, while hub setup, activity, redeem points, feedback, and score management live in one admin panel.",
    features: ["Announcement Hub — banners by position", "Image upload with live mobile preview", "Hub, activity & redeem-points management", "Feedback, team & score administration"],
    direction:
      "The admin side is deliberately plain — clear forms and a live preview — so the Raw League team can publish without a developer in the loop.",
    UI: RawLeagueUI,
  },
  {
    id: "sampoerna-university",
    index: "02",
    title: "Sampoerna University",
    category: "Company profile & admissions website",
    filter: "profile",
    badge: "Production Project",
    badgeChip: "border-lime/50 text-lime",
    layout: { text: "lg:order-2 lg:col-span-5", visual: "lg:order-1 lg:col-span-7 mb-16 lg:mb-0" },
    problem:
      "A university website carries dense program, admissions, and student information — and it had to establish trust from the first screen, with accreditation credibility stated plainly and every detail easy to find.",
    solution:
      "A structured company profile site: an accreditation-first hero, deep program navigation, and clean information pages — from non-degree programs to visa guidance — that stay readable on any device.",
    features: ["Accreditation-first messaging & banner system", "Deep program navigation with dropdown menus", "Language selector for international visitors", "Responsive information pages (visa, admissions)"],
    direction:
      "Credibility first — accreditation, programs, and key actions stated up front, then let the information breathe on clean, quiet pages.",
    UI: SampoernaUI,
  },
  {
    id: "raw-league-app",
    index: "03",
    title: "Raw League Web App",
    category: "Student event web application",
    filter: "webapp",
    badge: "Production Project",
    badgeChip: "border-lime/50 text-lime",
    layout: { text: "lg:order-1 lg:col-span-5", visual: "lg:order-2 lg:col-span-7" },
    problem:
      "On event day, students had to register for matches, check in on site, and keep track of their redeem points — all of it was handled manually, with queues forming at every table.",
    solution:
      "The student-facing side of Raw League: register for futsal and Mobile Legend matches, scan a QR to check in and check out on site, and watch points accumulate in a running history.",
    features: ["Event registration — futsal & Mobile Legend", "QR check-in / check-out on venue", "Points history & redeem tracking", "Match schedule with team pairings"],
    direction:
      "Built for a crowded venue, not a desk — big targets, high contrast, and flows short enough to finish between matches.",
    UI: RawLeagueAppUI,
  },
];

const ProjectText = ({ p }) => (
  <div className={p.layout.text}>
    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
      {p.index} / {p.category}
    </p>
    <h3 className="mt-4 text-2xl lg:text-[1.75rem] font-medium tracking-tight">
      {p.title}
    </h3>
    <span
      className={`inline-block mt-3 border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] ${
        p.badgeChip || "border-hair-d text-paper"
      }`}
      data-testid={`project-badge-${p.id}`}
    >
      {p.badge || "Concept Project"}
    </span>

    <dl className="mt-7 space-y-5 max-w-[46rem]">
      <div>
        <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-fog">Problem</dt>
        <dd className="mt-1.5 text-sm leading-relaxed text-[#b9bbb2]">{p.problem}</dd>
      </div>
      <div>
        <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-fog">Solution</dt>
        <dd className="mt-1.5 text-sm leading-relaxed text-[#b9bbb2]">{p.solution}</dd>
      </div>
    </dl>

    <ul className="mt-7 border-t border-hair-d">
      {p.features.map((f) => (
        <li
          key={f}
          className="flex items-baseline gap-3 border-b border-hair-d py-2.5 text-sm text-paper/90"
        >
          <span className="font-mono text-[10px] text-fog">+</span>
          {f}
        </li>
      ))}
    </ul>

    <p className="mt-6 font-serif italic text-[15.5px] leading-relaxed text-[#9a9c93]">
      {p.direction}
    </p>
  </div>
);

const Work = () => {
  const [filter, setFilter] = useState("all");
  const visible = PROJECTS.filter((p) => filter === "all" || p.filter === filter);

  return (
    <section id="work" className="bg-ink">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-24 lg:py-32">
        <SectionHead
          label="Selected Work"
          title="Recent builds, live in production."
          intro="Three production projects: an event web app, the CMS behind it, and a university company profile. The portfolio is young — new case studies are on the way."
        />

        <Reveal className="mt-12 lg:mt-16">
          <div
            className="flex flex-wrap gap-x-6 gap-y-2 border-b border-hair-d pb-4"
            role="tablist"
            aria-label="Filter projects"
          >
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={filter === f.id}
                onClick={() => setFilter(f.id)}
                data-testid={`work-filter-${f.id}`}
                className={`font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-200 flex items-center gap-2 ${
                  filter === f.id ? "text-paper" : "text-fog hover:text-paper"
                }`}
              >
                {filter === f.id && (
                  <span className="h-1.5 w-1.5 bg-lime" aria-hidden="true" />
                )}
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 lg:mt-20 space-y-24 lg:space-y-32">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center"
                data-testid={`project-${p.id}`}
              >
                <div className={`${p.layout.visual} min-w-0`}>
                  <p.UI />
                </div>
                <ProjectText p={p} />
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Work;
