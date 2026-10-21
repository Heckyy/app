const KPIs = [
  { label: "Orders today", value: "1,284", delta: "+4.2%" },
  { label: "On-time dispatch", value: "96.8%", delta: "+0.4%" },
  { label: "Open exceptions", value: "7", delta: "-3" },
  { label: "Carriers live", value: "12", delta: "" },
];

const ORDERS = [
  { id: "#FX-20481", dest: "Rotterdam DC", carrier: "DHL", items: "34", status: "Packed", chip: "mchip--solid" },
  { id: "#FX-20482", dest: "Antwerp", carrier: "DPD", items: "12", status: "In transit", chip: "" },
  { id: "#FX-20483", dest: "Hamburg", carrier: "DHL", items: "87", status: "Packing", chip: "" },
  { id: "#FX-20484", dest: "Liège", carrier: "PostNL", items: "6", status: "Hold", chip: "mchip--lime" },
  { id: "#FX-20485", dest: "Utrecht", carrier: "DPD", items: "21", status: "Packed", chip: "mchip--solid" },
];

const EXCEPTIONS = [
  { t: "SKU mismatch — bin B-14", ago: "05:12" },
  { t: "Address unverified — #FX-20483", ago: "11:47" },
];

const DOCKS = [
  { t: "Dock A — outbound", v: 82 },
  { t: "Dock B — returns", v: 46 },
  { t: "Dock C — outbound", v: 63 },
];

const OperationsOS = () => (
  <div
    className="mock"
    data-testid="hero-interface-mockup"
    role="img"
    aria-label="Concept interface: fulfillment operations console with dispatch queue, exceptions and dock capacity"
  >
    <div className="mock-top">
      <span>
        <b>Apex Fulfillment</b> — Operations
      </span>
      <span className="hidden sm:inline">Sat 14 Jun · 09:41 · All sites</span>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-[#2a2c2a]">
      {KPIs.map((k) => (
        <div key={k.label} className="px-4 py-3 border-r border-[#2a2c2a] last:border-r-0">
          <p className="text-[9px] uppercase tracking-[0.1em] text-fog">{k.label}</p>
          <p className="mt-1 flex items-baseline gap-2">
            <span className="text-paper text-[15px] font-medium tabular-nums">{k.value}</span>
            {k.delta && <span className="text-[9px] text-fog">{k.delta}</span>}
          </p>
        </div>
      ))}
    </div>

    <div className="mock-scroll">
      <table className="mock-table">
        <caption className="sr-only">Dispatch queue</caption>
      <thead>
        <tr>
          <th className="mock-th">Order</th>
          <th className="mock-th">Destination</th>
          <th className="mock-th">Carrier</th>
          <th className="mock-th">Items</th>
          <th className="mock-th">Status</th>
        </tr>
      </thead>
      <tbody>
        {ORDERS.map((o) => (
          <tr key={o.id}>
            <td className="mock-td"><b>{o.id}</b></td>
            <td className="mock-td">{o.dest}</td>
            <td className="mock-td">{o.carrier}</td>
            <td className="mock-td">{o.items}</td>
            <td className="mock-td">
              <span className={`mchip ${o.chip}`}>{o.status}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>

    <div className="grid grid-cols-2 border-t border-[#2a2c2a]">
      <div className="border-r border-[#2a2c2a]">
        <p className="px-4 pt-2.5 pb-1.5 text-[9px] uppercase tracking-[0.1em] text-fog">
          Exceptions
        </p>
        <ul className="border-t border-[#2a2c2a]">
          {EXCEPTIONS.map((e) => (
            <li key={e.t} className="px-4 py-2 border-b border-[#2a2c2a] flex justify-between gap-3">
              <span className="text-[#c6c8bd] truncate">{e.t}</span>
              <span className="text-fog tabular-nums">{e.ago}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="px-4 pt-2.5 pb-1.5 text-[9px] uppercase tracking-[0.1em] text-fog">
          Dock capacity
        </p>
        <div className="px-4 py-2 space-y-2 border-t border-[#2a2c2a]">
          {DOCKS.map((d) => (
            <div key={d.t}>
              <p className="flex justify-between text-[10px] text-fog">
                <span className="truncate">{d.t}</span>
                <span className="tabular-nums text-[#c6c8bd]">{d.v}%</span>
              </p>
              <div className="mbar mt-0.5">
                <span style={{ width: `${d.v}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <p className="mock-foot border-t border-[#2a2c2a]">Last sync 09:41 · 5 sites reporting</p>
  </div>
);

export default OperationsOS;
