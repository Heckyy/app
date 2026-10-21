const KPIS = [
  { l: "Occupancy", v: "94%" },
  { l: "Open tickets", v: "12" },
  { l: "Rent billed — Jun", v: "€318,450" },
  { l: "Vacant units", v: "3" },
];

const UNITS = [
  { u: "A-401", t: "Bram & Vos", r: "€1,850", k: "1", s: "Occupied", chip: "mchip--solid" },
  { u: "A-402", t: "—", r: "€1,720", k: "0", s: "Vacant", chip: "mchip--lime" },
  { u: "B-112", t: "Kestrel Ltd", r: "€2,400", k: "3", s: "Occupied", chip: "mchip--solid" },
  { u: "B-205", t: "M. Duarte", r: "€1,975", k: "0", s: "Occupied", chip: "mchip--solid" },
  { u: "C-008", t: "Fenna BV", r: "€2,850", k: "2", s: "Occupied", chip: "mchip--solid" },
];

const HavenUI = () => (
  <div
    className="mock"
    role="img"
    aria-label="Concept interface: property portfolio manager with occupancy and work orders"
    data-testid="project-interface-haven-property"
  >
    <div className="mock-top">
      <span><b>Haven</b> — Portfolio</span>
      <span className="hidden sm:inline">6 buildings · 214 units</span>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-[#2a2c2a]">
      {KPIS.map((k) => (
        <div key={k.l} className="px-4 py-3 border-r border-[#2a2c2a] last:border-r-0">
          <p className="text-[9px] uppercase tracking-[0.1em] text-fog">{k.l}</p>
          <p className="mt-1 text-paper text-[15px] font-medium tabular-nums">{k.v}</p>
        </div>
      ))}
    </div>

    <div className="mock-scroll">
    <table className="mock-table">
      <thead>
        <tr>
          <th className="mock-th">Unit</th>
          <th className="mock-th">Tenant</th>
          <th className="mock-th">Rent / mo</th>
          <th className="mock-th">Tickets</th>
          <th className="mock-th">Status</th>
        </tr>
      </thead>
      <tbody>
        {UNITS.map((u) => (
          <tr key={u.u}>
            <td className="mock-td"><b>{u.u}</b></td>
            <td className="mock-td">{u.t}</td>
            <td className="mock-td">{u.r}</td>
            <td className="mock-td tabular-nums">{u.k}</td>
            <td className="mock-td"><span className={`mchip ${u.chip}`}>{u.s}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>

    <div className="mock-foot border-t border-[#2a2c2a]">
      <span>Next inspections: 4 units · Jun 17–19</span>
      <span className="ml-auto hidden sm:inline">Ledger synced 08:20</span>
    </div>
  </div>
);

export default HavenUI;
