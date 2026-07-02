import { useState } from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Shave Ice Menu" },
  { href: "#gallery", label: "Gallery" },
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
        <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
          <span
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#024731] text-sm font-black text-[#fbfaf6]"
            aria-hidden="true"
          >
            PH
          </span>
          <span className="leading-tight">
            <span className="block text-base font-black tracking-[-0.04em] text-black">
              Pau Hana
            </span>
            <span className="block text-xs font-bold uppercase tracking-[0.18em] text-[#024731]">
              Shave Ice
            </span>
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
