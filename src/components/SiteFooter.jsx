const socialLinks = [
  { href: "https://www.instagram.com/pauhanashaveiceco/?hl=en", label: "Instagram" },
  { href: "https://www.yelp.com/biz/pau-hana-shave-ice-san-jose-2", label: "Yelp" },
];

export function SiteFooter() {
  return (
    <footer className="bg-black py-12 text-[#fbfaf6]">
      <div className="shell grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="eyebrow text-xs font-black text-[#fbfaf6]/60">Pau Hana Shave Ice</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em]">
            Hawaiian shave ice, served with neighborhood aloha.
          </h2>
        </div>
        <address className="not-italic leading-7 text-[#fbfaf6]/78">
          <strong className="block text-[#fbfaf6]">Visit us</strong>
          248 Jackson St.
          <br />
          San Jose, CA 95112
        </address>
        <div className="leading-7 text-[#fbfaf6]/78">
          <strong className="block text-[#fbfaf6]">Hours</strong>
          Mon-Fri 1-6PM
          <br />
          Sat-Sun 1-6:30PM
          <div className="mt-5 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full border border-[#fbfaf6]/20 px-3 py-1 text-sm font-bold hover:bg-[#fbfaf6] hover:text-black"
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
