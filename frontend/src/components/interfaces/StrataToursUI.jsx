const DEPARTURES = [
  { d: "12 Oct", seats: 9, cap: 12, guide: "L. Herrera", s: "Confirmed", chip: "mchip--solid", w: 75 },
  { d: "02 Nov", seats: 12, cap: 12, guide: "M. Kovač", s: "Waitlist", chip: "mchip--lime", w: 100 },
  { d: "23 Nov", seats: 4, cap: 12, guide: "L. Herrera", s: "Open", chip: "", w: 33 },
  { d: "14 Dec", seats: 7, cap: 12, guide: "A. Silva", s: "Open", chip: "", w: 58 },
];

const ITINERARY = [
  "D1 — Arrive Punta Arenas · briefing",
  "D2 — Drive to Torres base camp",
  "D3 — Ascend Mirador Las Torres",
  "D4 — Grey Glacier crossing",
  "D5 — Valley del Francés loop",
];

const StrataToursUI = () => (
  <div
    className="mock"
    role="img"
    aria-label="Concept interface: expedition tour booking board with departures and itinerary"
    data-testid="project-interface-strata-tours"
  >
    <div className="mock-top">
      <span><b>Strata Expedition</b> — Departures</span>
      <span className="hidden sm:inline">Torres Circuit · 9 days</span>
    </div>

    <div className="px-4 py-3 border-b border-[#2a2c2a] flex items-baseline justify-between">
      <p className="text-paper text-[13px] font-medium">Torres Circuit — Patagonia</p>
      <p className="text-fog text-[10.5px] tabular-nums">From $4,280 / seat</p>
    </div>

    <div className="grid grid-cols-12">
      <div className="col-span-12 sm:col-span-7">
        <div className="mock-scroll">
        <table className="mock-table">
          <thead>
            <tr>
              <th className="mock-th">Departure</th>
              <th className="mock-th">Seats</th>
              <th className="mock-th hidden sm:table-cell">Guide</th>
              <th className="mock-th">Status</th>
            </tr>
          </thead>
          <tbody>
            {DEPARTURES.map((dep) => (
              <tr key={dep.d}>
                <td className="mock-td"><b>{dep.d}</b></td>
                <td className="mock-td">
                  <div className="flex items-center gap-2">
                    <span className="mbar w-14"><span style={{ width: `${dep.w}%` }} /></span>
                    <span className="tabular-nums">{dep.seats}/{dep.cap}</span>
                  </div>
                </td>
                <td className="mock-td hidden sm:table-cell">{dep.guide}</td>
                <td className="mock-td"><span className={`mchip ${dep.chip}`}>{dep.s}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <p className="mock-foot border-t border-[#2a2c2a]">Season 2025 · 4 departures</p>
      </div>

      <div className="col-span-12 sm:col-span-5 border-t sm:border-t-0 sm:border-l border-[#2a2c2a]">
        <p className="px-4 pt-3 pb-2 text-[9px] uppercase tracking-[0.1em] text-fog">
          Itinerary — days 1–5
        </p>
        <ul className="border-t border-[#2a2c2a]">
          {ITINERARY.map((d) => (
            <li key={d} className="px-4 py-2.5 border-b border-[#2a2c2a] text-[#c6c8bd]">
              {d}
            </li>
          ))}
        </ul>
        <p className="px-4 py-3 text-fog text-[10px]">+ 4 more days</p>
      </div>
    </div>
  </div>
);

export default StrataToursUI;
