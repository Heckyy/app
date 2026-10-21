import Logo from "./Logo";
import { NAV, scrollToHash } from "@/config";

const Footer = () => (
  <footer className="bg-ink border-t border-hair-d" data-testid="site-footer">
    <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-14">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-[13px] leading-relaxed text-fog">
            A software house for custom software, web applications, and
            integrated business systems.
          </p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-2.5 content-start">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToHash(e, item.href)}
              data-testid={`footer-link-${item.href.slice(1)}`}
              className="text-sm text-fog hover:text-paper transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-14 border-t border-hair-d pt-6 flex flex-col sm:flex-row justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.16em] text-fog">
        <span>© 2026 Alpha One Studio</span>
        <span className="max-w-md sm:text-right normal-case tracking-normal">
          Raw League &amp; Sampoerna University are production work — the rest are
          labeled Concept Projects, not client engagements.
        </span>
        <a
          href="#home"
          onClick={(e) => scrollToHash(e, "#home")}
          data-testid="back-to-top"
          className="hover:text-paper transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
