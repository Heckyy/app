import { ArrowUpRight } from "lucide-react";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

const CAPABILITIES = [
  {
    id: "01",
    title: "Custom Software Development",
    tagline: "Architected for proprietary workflows and complex domain logic.",
    description:
      "We replace fragile spreadsheets and disconnected legacy systems with bespoke software tailored to exact operational requirements.",
    delivers: ["Tailored workflow engines", "High-throughput data pipelines", "Scalable backend architecture"],
  },
  {
    id: "02",
    title: "Web Application Development",
    tagline: "High-performance applications engineered for daily business use.",
    description:
      "Fast, accessible, resilient web applications that streamline staff workflows and deliver intuitive user portals.",
    delivers: ["Real-time collaborative tools", "Role-based access dashboards", "Offline-capable PWAs"],
  },
  {
    id: "03",
    title: "Mobile Applications",
    tagline: "Field-ready apps for staff and customers on the move.",
    description:
      "Focus on offline reliability, device telemetry, and friction-free experiences in demanding field conditions.",
    delivers: ["iOS & Android applications", "Biometric authentication", "Real-time sync & offline queueing"],
  },
  {
    id: "04",
    title: "API & System Integration",
    tagline: "One connected flow across payments, ERPs and third-party tools.",
    description:
      "Unifying fragmented software ecosystems through robust REST/GraphQL APIs and automated data synchronization.",
    delivers: ["Custom webhook architectures", "ERP/CRM synchronization", "Automated reconciliation pipelines"],
  },
  {
    id: "05",
    title: "Business Operations Platforms",
    tagline: "End-to-end systems that keep daily operations on one screen.",
    description:
      "Consolidating order processing, inventory tracking, customer accounts, and financial analytics into a single pane of glass.",
    delivers: ["Resource allocation engines", "Multi-tenant management", "Automated billing & invoicing"],
  },
  {
    id: "06",
    title: "Ongoing Maintenance & Modernization",
    tagline: "Systems that stay healthy long after the first release.",
    description:
      "Proactive health monitoring, dependency audits, and strategic modernization without downtime.",
    delivers: ["Zero-downtime updates", "Security & compliance audits", "Performance optimization"],
  },
];

const Capabilities = () => (
  <section id="capabilities" className="bg-paper text-ink">
    <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-24 lg:py-32">
      <SectionHead
        tone="light"
        label="Capabilities"
        title="What we build, end to end."
        intro="Six practices, one outcome: software your operation can actually run on — designed around the workflow, engineered to be maintained."
      />

      <div className="mt-16 lg:mt-20 border-b border-hair-l">
        {CAPABILITIES.map((cap, i) => (
          <Reveal key={cap.id} delay={i * 0.04}>
            <div
              className="group grid grid-cols-12 gap-x-6 gap-y-4 border-t border-hair-l py-9 lg:py-10 px-2 lg:px-4 -mx-2 lg:-mx-4 transition-colors duration-200 hover:bg-card-l"
              data-testid={`capability-row-${cap.id}`}
            >
              <p className="col-span-12 sm:col-span-1 font-mono text-xs text-fog pt-1.5">
                {cap.id}
              </p>
              <div className="col-span-12 sm:col-span-4">
                <h3 className="text-lg font-medium tracking-tight flex items-center gap-2">
                  {cap.title}
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200"
                  />
                </h3>
                <p className="mt-1.5 font-serif italic text-[15px] leading-snug text-[#6b6d66]">
                  {cap.tagline}
                </p>
              </div>
              <p className="col-span-12 sm:col-span-4 text-sm leading-relaxed text-ink/70">
                {cap.description}
              </p>
              <ul className="col-span-12 sm:col-span-3 space-y-1.5 pt-1">
                {cap.delivers.map((d) => (
                  <li
                    key={d}
                    className="text-[12.5px] text-ink/80 border-b border-hair-l pb-1.5 last:border-b-0"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Capabilities;
