const TICKETS = [
  {
    id: "T12", covers: 2, time: "04:12", chip: "mchip--lime", s: "Fire",
    items: ["2× Burrata", "1× Cacio e pepe — no guanciale"],
  },
  {
    id: "T04", covers: 3, time: "07:48", chip: "", s: "Prep",
    items: ["3× Sea bass", "1× Tiramisù", "1× Insalata mista"],
  },
  {
    id: "Bar 2", covers: 1, time: "01:20", chip: "mchip--solid", s: "Served",
    items: ["2× Negroni", "1× Focaccia"],
  },
];

const GastroFlowUI = () => (
  <div
    className="mock"
    role="img"
    aria-label="Concept interface: restaurant kitchen display system with live order tickets"
    data-testid="project-interface-gastro-flow"
  >
    <div className="mock-top">
      <span><b>GastroFlow</b> — Kitchen</span>
      <span className="hidden sm:inline">Fri 19:42 · 24 open tickets</span>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3">
      {TICKETS.map((t) => (
        <div key={t.id} className="border-r border-b border-[#2a2c2a] last:border-r-0 p-3.5">
          <p className="flex items-baseline justify-between gap-2">
            <span className="text-paper text-[13.5px] font-medium">{t.id}</span>
            <span className="text-fog text-[10px] tabular-nums">{t.time}</span>
          </p>
          <p className="mt-0.5 text-[9.5px] uppercase tracking-[0.08em] text-fog">
            {t.covers} covers
          </p>
          <ul className="mt-2.5 space-y-1.5 min-h-[64px]">
            {t.items.map((i) => (
              <li key={i} className="text-[12px] text-[#d8dad0] leading-snug">{i}</li>
            ))}
          </ul>
          <p className="mt-3">
            <span className={`mchip ${t.chip}`}>{t.s}</span>
          </p>
        </div>
      ))}
    </div>

    <div className="mock-foot border-t border-[#2a2c2a]">
      <span>Covers 68</span>
      <span>Walk-ins 12</span>
      <span>Avg turn 1h24</span>
      <span className="ml-auto">86'd: Burrata (2)</span>
    </div>
  </div>
);

export default GastroFlowUI;
