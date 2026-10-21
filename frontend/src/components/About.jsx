import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

const PILLARS = [
  {
    title: "Direct engineering access",
    desc: "You work directly with the engineers building your application — no middle managers, no outsourced layers.",
  },
  {
    title: "Complete code ownership",
    desc: "You own 100% of the repository, documentation, and IP from day one. Zero vendor lock-in.",
  },
  {
    title: "Built for longevity",
    desc: "Battle-tested technologies and modular patterns that remain easy to maintain for years, not months.",
  },
];

const About = () => (
  <section id="about" className="bg-ink">
    <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-24 lg:py-32">
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-3">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-fog">
              <span className="inline-block h-2 w-2 bg-lime" aria-hidden="true" />
              About
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-9">
          <Reveal>
            <p
              className="font-serif text-[1.65rem] sm:text-4xl lg:text-[2.6rem] leading-[1.25] tracking-tight"
              data-testid="about-manifesto"
            >
              Software should not be an impressive maze of tech debt and trendy
              frameworks. It should be a{" "}
              <em className="italic">quiet, reliable engine</em> that handles
              business complexity effortlessly.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-10 max-w-2xl text-[15px] leading-relaxed text-fog" data-testid="about-copy">
              Alpha One Studio approaches software as a practical business tool.
              We start by understanding the workflow as it actually runs — not as
              an org chart describes it. Then we design the right solution for
              that workflow, engineer it with care, and make sure it stays
              maintainable long after launch. The measure of our work is simple:
              does the business run better because this software exists?
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-fog">
              Engagement models — Fixed-scope milestones · Dedicated sprints
            </p>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-3 gap-8">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="border-t border-hair-d pt-6" data-testid={`about-pillar-${i + 1}`}>
                  <h3 className="text-[17px] font-medium tracking-tight">{p.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-fog">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
