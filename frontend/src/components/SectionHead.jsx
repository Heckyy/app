import Reveal from "./Reveal";

export const SectionHead = ({ label, title, intro, tone = "dark" }) => (
  <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-end">
    <div className="lg:col-span-7">
      <Reveal>
        <p
          className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] ${
            tone === "dark" ? "text-fog" : "text-[#6b6d66]"
          }`}
        >
          <span className="inline-block h-2 w-2 bg-lime" aria-hidden="true" />
          {label}
        </p>
        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] font-medium tracking-tight leading-[1.12]">
          {title}
        </h2>
      </Reveal>
    </div>
    {intro && (
      <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
        <p className="text-[15px] leading-relaxed text-fog">{intro}</p>
      </Reveal>
    )}
  </div>
);

export default SectionHead;
