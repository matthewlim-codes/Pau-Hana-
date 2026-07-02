import { useState } from "react";
import { ButtonLink } from "./components/ButtonLink.jsx";
import { HeroLogo } from "./components/HeroLogo.jsx";
import { ImageWheel } from "./components/ImageWheel.jsx";
import { MenuCard } from "./components/MenuCard.jsx";
import { PhotoCard } from "./components/PhotoCard.jsx";
import { SectionHeading } from "./components/SectionHeading.jsx";
import { SiteFooter } from "./components/SiteFooter.jsx";
import { SiteHeader } from "./components/SiteHeader.jsx";
import {
  buildSteps,
  faqs,
  flavors,
  iceCreamAddOn,
  iceCreamMenu,
  sizes,
  specialtyNotes,
  specialties,
  toppings,
} from "./data/menuData.js";

const storyCards = [
  {
    title: "Pau Hana means done with work",
    text: "It is the moment to slow down, meet someone you love, and let the day soften.",
  },
  {
    title: "Family-run in San Jose",
    text: "Our counter is shaped by family hospitality, local pride, and a steady welcome.",
  },
  {
    title: "Inspired by Hawaii",
    text: "The flavors, textures, and visual rhythm point back to island culture with care.",
  },
];

const WHEEL_RADIUS = 1560;

const menuTabs = [
  { id: "build", label: "Build Your Own" },
  { id: "specialties", label: "Signature Specialties" },
  { id: "ice-cream", label: "Ice Cream Cups" },
];

function Hero() {
  const wheelBottom = -Math.round((4 * WHEEL_RADIUS) / 3);

  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden py-16 sm:py-20 lg:py-28"
      style={{ minHeight: 760 }}
    >
      {/* Gradient fade so the wheel emerges subtly from below */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(251,250,246,0.6) 28%, rgba(251,250,246,0.49) 52%, rgba(251,250,246,0.23) 72%, transparent 88%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Spinning image wheel — background decoration */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: wheelBottom,
          left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <ImageWheel />
      </div>

      <div className="shell relative" style={{ zIndex: 2 }}>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <HeroLogo />
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="#menu">View Shave Ice Menu</ButtonLink>
            <ButtonLink href="#location" variant="secondary">
              Visit Us
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandStoryPreview() {
  return (
    <section className="bg-[#024731] py-16 text-[#fbfaf6] sm:py-20">
      <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading eyebrow="Our story" title="A neighborhood shave ice pause." light>
          Pau Hana is a family-run Hawaiian business rooted in the meaning of
          taking a breath when the work is done. In San Jose's Japantown, that
          spirit becomes a simple bowl of shave ice shared with community.
        </SectionHeading>
        <div className="grid gap-4 sm:grid-cols-3">
          {storyCards.map((card) => (
            <article key={card.title} className="rounded-[2rem] bg-[#fbfaf6]/10 p-5">
              <h3 className="text-lg font-black tracking-[-0.03em]">{card.title}</h3>
              <p className="mt-3 leading-7 text-[#fbfaf6]/76">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <PhotoCard
          title="Family hospitality, island inspiration"
          alt="Family-run shave ice counter inspired by Hawaiian culture and local community."
          label="About"
        />
        <div>
          <SectionHeading eyebrow="About Pau Hana" title="Made for the moment after work.">
            Pau Hana means the work is finished, but it also means the good part
            of the day can begin.
          </SectionHeading>
          <div className="mt-8 space-y-5 text-lg leading-8 text-black/70">
            <p>
              Pau Hana Shave Ice brings a focused Hawaiian shave ice experience
              to San Jose's Japantown with a calm, welcoming spirit. The brand is
              shaped by family ownership, local pride, and cultural inspiration
              from Hawaii.
            </p>
            <p>
              Every detail is meant to feel warm and direct: finely textured ice,
              clear flavor choices, generous toppings, and a place where neighbors
              can pause together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShaveIceMenu() {
  const [activeTab, setActiveTab] = useState("build");
  const [showAllFlavors, setShowAllFlavors] = useState(false);
  const [selectedToppings, setSelectedToppings] = useState([]);

  const visibleFlavors = showAllFlavors ? flavors : flavors.slice(0, 9);
  const hiddenFlavorCount = flavors.length - visibleFlavors.length;

  const toggleTopping = (name) => {
    setSelectedToppings((current) =>
      current.includes(name)
        ? current.filter((topping) => topping !== name)
        : [...current, name],
    );
  };

  return (
    <section id="menu" className="bg-black py-8 text-[#fbfaf6]">
      <div className="shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-2 text-[0.65rem] font-black text-[#fbfaf6]/60">
            Menu
          </p>
          <h2 className="text-2xl font-black leading-tight tracking-[-0.04em] sm:text-3xl">
            Shave Ice - Specialties - Ice Cream
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#fbfaf6]/72">
            Choose a size, pick up to two flavors, and finish with toppings, or
            order one of Pau Hana's regular-size specialties.
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          <div
            className="inline-flex max-w-full gap-1 overflow-x-auto rounded-full border border-[#fbfaf6]/15 bg-[#fbfaf6]/8 p-1"
            role="tablist"
            aria-label="Menu categories"
          >
            {menuTabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`menu-tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`menu-panel-${tab.id}`}
                  className={`whitespace-nowrap rounded-full px-3 py-2 text-xs font-black uppercase tracking-[0.08em] sm:px-4 ${
                    isActive
                      ? "bg-[#fbfaf6] text-[#024731] shadow-sm"
                      : "text-[#fbfaf6]/76 hover:bg-[#fbfaf6]/12 hover:text-[#fbfaf6]"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6">
          <div
            id="menu-panel-build"
            role="tabpanel"
            aria-labelledby="menu-tab-build"
            hidden={activeTab !== "build"}
          >
            <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
              <article className="rounded-[1.5rem] border border-[#fbfaf6]/12 p-5">
                <p className="eyebrow text-[0.62rem] font-black text-[#fbfaf6]/58">
                  Build your own shave ice
                </p>
                <h3 className="mt-2 text-xl font-black tracking-[-0.035em]">
                  How to order
                </h3>
                <ol className="mt-4 space-y-3 border-l border-[#fbfaf6]/18 pl-4">
                  {buildSteps.map((step, index) => (
                    <li key={step.title} className="relative">
                      <span className="absolute -left-[1.55rem] top-0 flex h-5 w-5 items-center justify-center rounded-full bg-[#fbfaf6] text-[0.65rem] font-black text-[#024731]">
                        {index + 1}
                      </span>
                      <h4 className="text-sm font-black leading-5 tracking-[-0.02em]">
                        {step.title}
                      </h4>
                      <p className="mt-0.5 text-xs leading-5 text-[#fbfaf6]/66">
                        {step.description}
                      </p>
                    </li>
                  ))}
                </ol>

                <div className="mt-5 grid gap-3 text-xs sm:grid-cols-2 lg:grid-cols-1">
                  <div>
                    <p className="font-black uppercase tracking-[0.12em] text-[#fbfaf6]/52">
                      Sizes
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {sizes.map((size) => (
                        <span
                          key={size.name}
                          className="rounded-full border border-[#fbfaf6]/16 px-2.5 py-1 font-bold text-[#fbfaf6]/82"
                        >
                          {size.name} {size.price}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-black uppercase tracking-[0.12em] text-[#fbfaf6]/52">
                      Ice cream add-on {iceCreamAddOn.price}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {iceCreamAddOn.options.map((option) => (
                        <span
                          key={option}
                          className="rounded-full bg-[#fbfaf6]/10 px-2.5 py-1 font-bold text-[#fbfaf6]/80"
                        >
                          {option}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>

              <div className="grid content-start gap-5">
                <article>
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="eyebrow text-[0.62rem] font-black text-[#fbfaf6]/58">
                        Flavors
                      </p>
                      <h3 className="mt-1 text-xl font-black tracking-[-0.035em]">
                        Choose up to two
                      </h3>
                    </div>
                    <span className="text-xs font-bold text-[#fbfaf6]/52">
                      {flavors.length} options
                    </span>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                    {visibleFlavors.map((flavor) => (
                      <span
                        key={flavor}
                        className="rounded-full border border-[#fbfaf6]/18 px-2.5 py-1.5 text-center text-xs font-bold leading-4 text-[#fbfaf6]/86"
                      >
                        {flavor}
                      </span>
                    ))}
                  </div>
                  {flavors.length > 9 ? (
                    <button
                      type="button"
                      className="mt-3 inline-flex items-center gap-2 rounded-full px-1 text-xs font-black uppercase tracking-[0.1em] text-[#fbfaf6]/72 hover:text-[#fbfaf6]"
                      aria-expanded={showAllFlavors}
                      onClick={() => setShowAllFlavors((current) => !current)}
                    >
                      {showAllFlavors
                        ? "Show fewer flavors"
                        : `Show all flavors${hiddenFlavorCount > 0 ? ` (+${hiddenFlavorCount})` : ""}`}
                      <span
                        className={`text-sm transition ${showAllFlavors ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      >
                        ↓
                      </span>
                    </button>
                  ) : null}
                </article>

                <article>
                  <p className="eyebrow text-[0.62rem] font-black text-[#fbfaf6]/58">
                    Toppings
                  </p>
                  <h3 className="mt-1 text-xl font-black tracking-[-0.035em]">
                    Select add-ons
                  </h3>
                  <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {toppings.map((topping) => {
                      const isSelected = selectedToppings.includes(topping.name);

                      return (
                        <button
                          key={topping.name}
                          type="button"
                          aria-pressed={isSelected}
                          className={`rounded-full border px-3 py-2 text-left text-xs font-bold leading-4 ${
                            isSelected
                              ? "border-[#fbfaf6] bg-[#fbfaf6] text-[#024731]"
                              : "border-[#fbfaf6]/18 text-[#fbfaf6]/86 hover:bg-[#fbfaf6]/10"
                          }`}
                          onClick={() => toggleTopping(topping.name)}
                        >
                          {topping.name} ({topping.price})
                        </button>
                      );
                    })}
                  </div>
                </article>
              </div>
            </div>
          </div>

          <div
            id="menu-panel-specialties"
            role="tabpanel"
            aria-labelledby="menu-tab-specialties"
            hidden={activeTab !== "specialties"}
          >
            <section aria-labelledby="specialties-heading">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="eyebrow text-[0.62rem] font-black text-[#fbfaf6]/58">
                    Signature Specialties
                  </p>
                  <h3
                    id="specialties-heading"
                    className="mt-1 text-2xl font-black tracking-[-0.04em]"
                  >
                    Cafe-style combinations
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs font-bold uppercase tracking-[0.08em] text-[#fbfaf6]/56">
                    {specialtyNotes.map((note) => (
                      <p key={note}>{note}</p>
                    ))}
                  </div>
                </div>
                <span className="w-fit rounded-full bg-[#fbfaf6] px-3 py-1.5 text-xs font-black text-[#024731]">
                  $9.99 each
                </span>
              </div>

              <div className="mt-5 grid gap-x-8 gap-y-5 md:grid-cols-2">
                {specialties.map((item) => (
                  <article key={item.name} className="border-b border-[#fbfaf6]/10 pb-4">
                    <div className="flex items-baseline justify-between gap-4">
                      <h4 className="text-base font-black leading-5 tracking-[-0.02em]">
                        {item.name}
                      </h4>
                      <span className="shrink-0 text-sm font-black text-[#fbfaf6]">
                        {item.price}
                      </span>
                    </div>
                    {item.allergen ? (
                      <p className="mt-1 text-[0.68rem] font-black uppercase tracking-[0.12em] text-[#fbfaf6]/48">
                        {item.allergen}
                      </p>
                    ) : null}
                    <p className="mt-1.5 text-sm leading-6 text-[#fbfaf6]/62">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <div
            id="menu-panel-ice-cream"
            role="tabpanel"
            aria-labelledby="menu-tab-ice-cream"
            hidden={activeTab !== "ice-cream"}
          >
            <article className="mx-auto max-w-2xl rounded-[1.5rem] border border-[#fbfaf6]/12 p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="eyebrow text-[0.62rem] font-black text-[#fbfaf6]/58">
                    Ice Cream Cups
                  </p>
                  <h3 className="mt-1 text-2xl font-black tracking-[-0.04em]">
                    {iceCreamMenu.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#fbfaf6]/62">
                    {iceCreamMenu.serving} service, simple scoop options.
                  </p>
                </div>
                <span className="w-fit rounded-full bg-[#fbfaf6] px-3 py-1.5 text-xs font-black uppercase tracking-[0.08em] text-[#024731]">
                  {iceCreamMenu.price}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {iceCreamMenu.flavors.map((flavor) => (
                <span
                  key={flavor}
                  className="rounded-full border border-[#fbfaf6]/18 px-3 py-1.5 text-xs font-bold text-[#fbfaf6]/86"
                >
                  {flavor}
                </span>
              ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}


function LocationHours() {
  return (
    <section id="location" className="bg-[#024731] py-16 text-[#fbfaf6] sm:py-20">
      <div className="shell grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-stretch">
        <div className="rounded-[2rem] bg-[#fbfaf6] p-8 text-black">
          <SectionHeading eyebrow="Location & hours" title="Find us in Japantown.">
            Stop by for a calm Pau Hana pause in one of San Jose's most beloved
            neighborhood districts.
          </SectionHeading>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <address className="not-italic leading-7 text-black/70">
              <strong className="block text-black">Address</strong>
              248 Jackson St.
              <br />
              San Jose, CA 95112
            </address>
            <div className="leading-7 text-black/70">
              <strong className="block text-black">Hours</strong>
              Mon-Fri 1-6PM
              <br />
              Sat-Sun 1-6:30PM
            </div>
          </div>
          <ButtonLink href="#contact" className="mt-8">
            Contact Us
          </ButtonLink>
        </div>
        <a
          href="https://www.google.com/maps/place/Pau+Hana+Shave+Ice/data=!4m2!3m1!1s0x0:0x3c43d47cedd86980?sa=X&ved=1t:2428&ictx=111"
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-[2rem] min-h-[22rem]"
          aria-label="Open Pau Hana Shave Ice on Google Maps"
        >
          <iframe
            title="Pau Hana Shave Ice on Google Maps"
            src="https://maps.google.com/maps?q=248+Jackson+St,+San+Jose,+CA+95112&output=embed&z=16"
            width="100%"
            height="100%"
            style={{ minHeight: "22rem", border: 0, display: "block", pointerEvents: "none" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading eyebrow="Contact" title="Questions before your Pau Hana stop?">
          Reach out for event interest, flavor updates, or neighborhood
          collaborations. This form is ready to connect to a submission service.
        </SectionHeading>

        <form className="rounded-[2rem] border border-[#024731]/12 bg-white/80 p-6 shadow-sm sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-bold text-black" htmlFor="name">
              Name
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className="mt-2 w-full rounded-2xl border border-[#024731]/18 bg-[#fbfaf6] px-4 py-3 text-black"
                placeholder="Your name"
              />
            </label>
            <label className="block text-sm font-bold text-black" htmlFor="email">
              Email
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="mt-2 w-full rounded-2xl border border-[#024731]/18 bg-[#fbfaf6] px-4 py-3 text-black"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="mt-5 block text-sm font-bold text-black" htmlFor="message">
            Message
            <textarea
              id="message"
              name="message"
              rows="5"
              className="mt-2 w-full rounded-2xl border border-[#024731]/18 bg-[#fbfaf6] px-4 py-3 text-black"
              placeholder="Tell us what you are looking for."
            />
          </label>
          <button
            type="submit"
            className="mt-6 rounded-full bg-[#024731] px-6 py-3 text-sm font-black uppercase tracking-[0.16em] text-[#fbfaf6] hover:-translate-y-0.5 hover:bg-black"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-20">
      <div className="shell">
        <SectionHeading eyebrow="FAQ" title="Simple answers for a focused menu." />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[2rem] border border-[#024731]/12 bg-white/80 p-6 shadow-sm"
            >
              <summary className="cursor-pointer list-none text-lg font-black tracking-[-0.03em] text-black">
                <span className="inline-flex w-full items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-[#024731] transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-4 leading-7 text-black/68">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <BrandStoryPreview />
        <About />
        <ShaveIceMenu />
        <LocationHours />
        <Contact />
        <FAQ />
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
