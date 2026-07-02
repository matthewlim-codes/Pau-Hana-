import { useState } from "react";
import pauHanaLogo from "@assets/pau_hana_logo_nobg.png";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#location", label: "Location & Hours" },
  { href: "#contact", label: "Contact" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#024731]/10 bg-[#fbfaf6]/95 backdrop-blur">
      <nav className="shell flex min-h-20 items-center justify-between gap-4" aria-label="Primary">
        <a href="#home" className="flex flex-col items-start" onClick={closeMenu}>
          <img
            src={pauHanaLogo}
            alt="Pau Hana"
            style={{ height: 36, width: "auto" }}
          />
          <span className="text-[10px] font-bold tracking-[0.18em] text-black uppercase -mt-0.5">
            Shave Ice
          </span>
        </a>

        <button
          type="button"
          className="rounded-full border border-[#024731]/20 px-4 py-2 text-sm font-black text-[#024731] md:hidden"
          aria-controls="primary-navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          Menu
        </button>

        <div
          id="primary-navigation"
          className={`${
            isOpen ? "block" : "hidden"
          } absolute left-4 right-4 top-24 rounded-[1.5rem] border border-[#024731]/10 bg-[#fbfaf6] p-4 shadow-xl md:static md:block md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-full px-4 py-3 text-sm font-bold text-black/70 hover:bg-[#024731] hover:text-[#fbfaf6] md:py-2"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
