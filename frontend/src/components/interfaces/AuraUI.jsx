const PERKS = [
  { t: "Private preview — 12 Jun", s: "Confirmed", chip: "mchip--solid" },
  { t: "Concierge line · 24/7", s: "Active", chip: "" },
  { t: "Suite upgrade", s: "Available", chip: "mchip--lime" },
];

const ACTIVITY = [
  { t: "+120 pts — Boutique Amsterdam", a: "2 days ago" },
  { t: "−8,000 pts — Suite upgrade", a: "12 May" },
  { t: "+310 pts — Season purchase", a: "28 Apr" },
];

const AuraUI = () => (
  <div
    className="mock"
    role="img"
    aria-label="Concept interface: membership portal with tier progress, perks and activity"
    data-testid="project-interface-aura-loyalty"
  >
    <div className="mock-top">
      <span><b>Aura Privé</b> — Member suite</span>
      <span className="hidden sm:inline">Member since 2023</span>
    </div>

    <div className="px-4 py-4 border-b border-[#2a2c2a]">
      <div className="flex items-baseline justify-between">
        <p className="text-paper text-[13.5px] font-medium">M. Laurent — <span className="text-lime">Gold</span></p>
        <p className="text-fog text-[10px] tabular-nums">2,140 / 3,000 pts to Platinum</p>
      </div>
      <div className="mbar mt-2.5 h-1"><span style={{ width: "71%" }} /></div>
    </div>

    <div className="grid grid-cols-12">
      <div className="col-span-12 sm:col-span-6 sm:border-r border-[#2a2c2a]">
        <p className="px-4 pt-3 pb-2 text-[9px] uppercase tracking-[0.1em] text-fog">Privileges</p>
        <ul className="border-t border-[#2a2c2a]">
          {PERKS.map((p) => (
            <li key={p.t} className="px-4 py-2.5 border-b border-[#2a2c2a] flex items-center justify-between gap-3">
              <span className="text-[#c6c8bd]">{p.t}</span>
              <span className={`mchip ${p.chip}`}>{p.s}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-12 sm:col-span-6 border-t sm:border-t-0 border-[#2a2c2a]">
        <p className="px-4 pt-3 pb-2 text-[9px] uppercase tracking-[0.1em] text-fog">Activity</p>
        <ul className="border-t border-[#2a2c2a]">
          {ACTIVITY.map((a) => (
            <li key={a.t} className="px-4 py-2.5 border-b border-[#2a2c2a] flex items-center justify-between gap-3">
              <span className="text-[#c6c8bd]">{a.t}</span>
              <span className="text-fog text-[9.5px]">{a.a}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="mock-foot border-t border-[#2a2c2a]">
      <span>Next tier review: 1 Jul</span>
      <span className="ml-auto hidden sm:inline">Card in Apple Wallet · active</span>
    </div>
  </div>
);

export default AuraUI;
