import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { NAV, scrollToHash } from "@/config";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sections = NAV.map((n) =>
      document.getElementById(n.href.slice(1))
    ).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => en.isIntersecting && setActive(`#${en.target.id}`)),
      { rootMargin: "-25% 0px -65% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (e, href) => {
    setOpen(false);
    scrollToHash(e, href);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-ink border-b border-hair-d">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => go(e, "#home")}
          data-testid="nav-logo-link"
          aria-label="Alpha One Studio — back to top"
        >
          <Logo />
        </a>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => go(e, item.href)}
              data-testid={`nav-link-${item.href.slice(1)}`}
              className={`text-sm transition-colors duration-200 flex items-center gap-1.5 ${
                active === item.href ? "text-paper" : "text-fog hover:text-paper"
              }`}
            >
              {active === item.href && (
                <span className="h-1.5 w-1.5 bg-lime" aria-hidden="true" />
              )}
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => go(e, "#contact")}
            data-testid="nav-cta-button"
            className="ml-2 inline-flex items-center gap-1.5 bg-paper text-ink text-sm font-medium px-4 py-2 hover:bg-lime transition-colors duration-200"
          >
            Discuss a Project
            <ArrowUpRight size={15} strokeWidth={1.5} />
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          data-testid="nav-mobile-toggle"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden text-paper p-2 -mr-2"
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 top-16 bg-ink z-[45]"
            data-testid="nav-mobile-menu"
          >
            <nav
              className="h-full flex flex-col justify-between px-6 pt-10 pb-10 bg-ink"
              aria-label="Mobile"
            >
              <ul className="space-y-2">
                {NAV.map((item, i) => (
                  <li key={item.href} className="border-b border-hair-d">
                    <a
                      href={item.href}
                      onClick={(e) => go(e, item.href)}
                      data-testid={`nav-mobile-link-${item.href.slice(1)}`}
                      className="flex items-baseline gap-4 py-4 text-2xl font-medium tracking-tight text-paper"
                    >
                      <span className="font-mono text-[11px] text-fog">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={(e) => go(e, "#contact")}
                data-testid="nav-mobile-cta"
                className="inline-flex items-center justify-center gap-2 bg-paper text-ink font-medium px-6 py-4 hover:bg-lime transition-colors"
              >
                Discuss a Project
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
