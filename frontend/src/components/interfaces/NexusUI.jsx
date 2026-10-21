const KPIS = [
  { l: "Fill rate", v: "97.2%" },
  { l: "Reorders pending", v: "9" },
  { l: "SKUs below min", v: "14" },
];

const SKUS = [
  { s: "SKU-1042", i: "Nitrile gloves M (100)", on: "320", min: "400", m: "38%", st: "Reorder", chip: "mchip--lime" },
  { s: "SKU-2210", i: "Vinyl apron — clear", on: "1,120", min: "300", m: "41%", st: "OK", chip: "" },
  { s: "SKU-1187", i: "Stretch wrap 50cm", on: "88", min: "150", m: "27%", st: "Reorder", chip: "mchip--lime" },
  { s: "SKU-3092", i: "Label rolls 62mm", on: "4,210", min: "800", m: "33%", st: "OK", chip: "" },
  { s: "SKU-2265", i: "Thermal paper 80mm", on: "640", min: "600", m: "19%", st: "Low", chip: "mchip--solid" },
];

const NexusUI = () => (
  <div
    className="mock"
    role="img"
    aria-label="Concept interface: inventory and sales system with stock levels and reorder triggers"
    data-testid="project-interface-nexus-inventory"
  >
    <div className="mock-top">
      <span><b>Nexus</b> — Inventory</span>
      <span className="hidden sm:inline">Warehouse C + 3 · 08:55</span>
    </div>

    <div className="grid grid-cols-3 border-b border-[#2a2c2a]">
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
          <th className="mock-th">SKU</th>
          <th className="mock-th">Item</th>
          <th className="mock-th">On hand</th>
          <th className="mock-th hidden sm:table-cell">Min</th>
          <th className="mock-th">Margin</th>
          <th className="mock-th">Status</th>
        </tr>
      </thead>
      <tbody>
        {SKUS.map((r) => (
          <tr key={r.s}>
            <td className="mock-td"><b>{r.s}</b></td>
            <td className="mock-td max-w-[160px] truncate">{r.i}</td>
            <td className="mock-td">{r.on}</td>
            <td className="mock-td hidden sm:table-cell">{r.min}</td>
            <td className="mock-td">{r.m}</td>
            <td className="mock-td"><span className={`mchip ${r.chip}`}>{r.st}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>

    <div className="mock-foot border-t border-[#2a2c2a]">
      <span>PO drafts queued: 3</span>
      <span className="ml-auto hidden sm:inline">Sales 30d — €1.24M</span>
    </div>
  </div>
);

export default NexusUI;
