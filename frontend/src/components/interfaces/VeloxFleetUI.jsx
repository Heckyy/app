const FLEET = [
  { v: "VW Golf 8", p: "B-4821", s: "Rented", chip: "mchip--solid", loc: "Branch Centraal", due: "14 Jun 10:00" },
  { v: "Toyota Hilux", p: "B-1177", s: "Available", chip: "", loc: "Depot West", due: "—" },
  { v: "BMW 320i", p: "B-3390", s: "Rented", chip: "mchip--solid", loc: "Airport Hub", due: "15 Jun 08:30" },
  { v: "Renault Zoe", p: "B-9925", s: "In service", chip: "", loc: "Workshop", due: "—" },
  { v: "Kia Ceed SW", p: "B-2208", s: "Rented", chip: "mchip--solid", loc: "Branch Centraal", due: "14 Jun 16:45" },
  { v: "Ford Transit", p: "B-7781", s: "Available", chip: "", loc: "Depot East", due: "—" },
];

const VeloxFleetUI = () => (
  <div
    className="mock"
    role="img"
    aria-label="Concept interface: car rental fleet dispatch console with availability and reservations"
    data-testid="project-interface-velox-fleet"
  >
    <div className="mock-top">
      <span><b>Velox Fleet OS</b> — Dispatch</span>
      <span className="hidden sm:inline">Sat 14 Jun · All branches</span>
    </div>

    <div className="px-4 py-3 border-b border-[#2a2c2a] flex items-center justify-between gap-4">
      <p className="text-fog text-[10px] uppercase tracking-[0.1em]">
        Fleet utilization — <span className="text-lime tabular-nums">82%</span>
        <span className="normal-case tracking-normal text-[#c6c8bd]"> · 41 of 50 vehicles out</span>
      </p>
      <p className="hidden sm:block text-fog text-[10px]">3 due back today</p>
    </div>

    <div className="mock-scroll">
    <table className="mock-table">
      <thead>
        <tr>
          <th className="mock-th">Vehicle</th>
          <th className="mock-th">Plate</th>
          <th className="mock-th">Status</th>
          <th className="mock-th hidden sm:table-cell">Location</th>
          <th className="mock-th">Due back</th>
        </tr>
      </thead>
      <tbody>
        {FLEET.map((f) => (
          <tr key={f.p}>
            <td className="mock-td"><b>{f.v}</b></td>
            <td className="mock-td">{f.p}</td>
            <td className="mock-td"><span className={`mchip ${f.chip}`}>{f.s}</span></td>
            <td className="mock-td hidden sm:table-cell">{f.loc}</td>
            <td className="mock-td">{f.due}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>

    <div className="mock-foot border-t border-[#2a2c2a]">
      <span>New booking</span>
      <span>Check-in</span>
      <span>Inspection</span>
      <span className="ml-auto hidden sm:inline">Branch: Centraal ▾</span>
    </div>
  </div>
);

export default VeloxFleetUI;
