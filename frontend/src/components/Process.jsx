import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

const STEPS = [
  {
    step: "01",
    title: "Discovery & Requirements",
    desc: "We unpack your operational workflows, pain points, technical constraints, and measurable business objectives.",
  },
  {
    step: "02",
    title: "Architecture & Planning",
    desc: "System blueprints, data schemas, API contracts, and technology choices tuned for long-term scalability.",
  },
  {
    step: "03",
    title: "Design & Engineering",
    desc: "High-density interfaces and clean, modular code bases built in short iterative feedback sprints.",
  },
  {
    step: "04",
    title: "Testing & Refinement",
    desc: "Edge cases, performance benchmarks, security standards, and user experience details — validated rigorously.",
  },
  {
    step: "05",
    title: "Deployment & Handover",
    desc: "Controlled release, team onboarding, full code ownership transfer, and ongoing maintenance support.",
  },
];

const Process = () => (
  <section id="process" className="bg-paper text-ink">
    <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-24 lg:py-32">
      <SectionHead
        tone="light"
        label="Process"
        title="A disciplined path from brief to handover."
        intro="Five stages, no black boxes. You see the architecture before we build it, and you own everything when we finish."
      />

      {/* Horizontal timeline — desktop */}
      <div className="hidden lg:block mt-20" data-testid="process-timeline-desktop">
        <div className="relative">
          <div className="absolute left-0 right-0 top-[9px] border-t border-[#b9b8ae]" aria-hidden="true" />
          <ol className="grid grid-cols-5 gap-8">
            {STEPS.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.08}>
                <div className="relative">
                  <span
                    className="block h-[19px] w-[19px] rounded-full border border-ink bg-paper relative z-10"
                    aria-hidden="true"
                  >
                    <span className="absolute inset-[5px] rounded-full bg-ink" />
                  </span>
                  <p className="mt-6 font-mono text-xs text-fog">{s.step}</p>
                  <h3 className="mt-2 text-[17px] font-medium tracking-tight leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink/70">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>

      {/* Vertical timeline — mobile */}
      <div className="lg:hidden mt-14" data-testid="process-timeline-mobile">
        <ol className="relative border-l border-hair-l space-y-12 ml-2">
          {STEPS.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.05}>
              <div className="relative pl-7">
                <span
                  className="absolute -left-[10px] top-1 block h-[19px] w-[19px] rounded-full border border-ink bg-paper"
                  aria-hidden="true"
                >
                  <span className="absolute inset-[5px] rounded-full bg-ink" />
                </span>
                <p className="font-mono text-xs text-fog">{s.step}</p>
                <h3 className="mt-2 text-lg font-medium tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default Process;
