const ITEMS = [
  "Custom Software Development",
  "Web Application Platforms",
  "Mobile Applications",
  "API & Systems Integration",
  "Business Operations Platforms",
  "Maintenance & Modernization",
];

const Marquee = () => (
  <section
    aria-label="Capabilities ticker"
    className="marquee border-y border-hair-d bg-ink py-5 overflow-hidden"
    data-testid="capabilities-marquee"
  >
    <div className="marquee-track">
      {[0, 1].map((half) => (
        <div key={half} aria-hidden={half === 1} className="flex shrink-0 items-center">
          {ITEMS.map((item) => (
            <span key={item} className="flex items-center">
              <span className="px-8 text-sm tracking-wide text-fog whitespace-nowrap">
                {item}
              </span>
              <span className="inline-block h-1.5 w-1.5 rotate-45 bg-hair-d" aria-hidden="true" />
            </span>
          ))}
        </div>
      ))}
    </div>
  </section>
);

export default Marquee;
