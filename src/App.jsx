import { ButtonLink } from "./components/ButtonLink.jsx";
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

const WHEEL_RADIUS = 780;

function Hero() {
  const wheelBottom = -Math.round((4 * WHEEL_RADIUS) / 3);

  return (
    <section
      id="home"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
      style={{ minHeight: 520 }}
    >
      {/* Gradient fade so the wheel emerges subtly from below */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, var(--warm-white) 28%, rgba(251,250,246,0.82) 52%, rgba(251,250,246,0.38) 72%, transparent 88%)",
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

      {/* Text content */}
      <div className="shell relative" style={{ zIndex: 2 }}>
        <div className="max-w-xl lg:max-w-2xl">
          <p className="eyebrow mb-4 text-xs font-black text-[#024731]">
            Family-run in San Jose's Japantown
          </p>
          <h1 className="text-5xl font-black leading-[0.92] tracking-[-0.07em] text-black sm:text-6xl lg:text-7xl">
            Pau Hana
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-black/70 sm:text-xl">
            A relaxed after-work stop for fine shave ice, island-inspired
            flavor, and the kind of neighborhood welcome that makes the day
            feel lighter.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

function FeaturedCombinations() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="featured-heading">
      <div className="shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Featured combinations"
            title="House ideas for your next shave ice."
          >
            Simple, balanced combinations that make ordering easy while keeping
            the menu focused on shave ice.
          </SectionHeading>
          <ButtonLink href="#menu" variant="secondary" className="md:mb-2">
            Explore all options
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {specialties.map((item) => (
            <MenuCard
              key={item.name}
              title={item.name}
              price={item.price}
              description={item.description}
              meta={item.allergen ?? "Specialty | regular size only"}
            />
          ))}
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
  return (
    <section id="menu" className="bg-black py-16 text-[#fbfaf6] sm:py-20">
      <div className="shell">
        <SectionHeading
          eyebrow="Shave ice menu"
          title="Shave ice, specialties, and ice cream."
          align="center"
          light
        >
          Choose a size, add ice cream, pick up to two flavors, and finish with
          toppings, or order one of Pau Hana's regular-size specialties.
        </SectionHeading>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {sizes.map((size) => (
            <MenuCard
              key={size.name}
              title={size.name}
              price={size.price}
              description={size.description}
              dark
            />
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[2rem] bg-[#fbfaf6] p-6 text-black sm:p-8">
            <p className="eyebrow text-xs font-black text-[#024731]">How to order</p>
            <h3 className="mt-3 text-3xl font-black tracking-[-0.04em]">
              Build your shave ice.
            </h3>
            <ol className="mt-6 grid gap-4 sm:grid-cols-2">
              {buildSteps.map((step, index) => (
                <li key={step.title} className="rounded-3xl border border-[#024731]/12 p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#024731] text-sm font-black text-[#fbfaf6]">
                    {index + 1}
                  </span>
                  <h4 className="mt-4 font-black tracking-[-0.03em]">{step.title}</h4>
                  <p className="mt-2 leading-7 text-black/68">{step.description}</p>
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-[2rem] border border-[#fbfaf6]/15 p-6 sm:p-8">
            <p className="eyebrow text-xs font-black text-[#fbfaf6]/65">Flavors</p>
            <h3 className="mt-3 text-3xl font-black tracking-[-0.04em]">
              Choose up to two.
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {flavors.map((flavor) => (
                <span
                  key={flavor}
                  className="rounded-full border border-[#fbfaf6]/18 px-4 py-3 text-center text-sm font-bold text-[#fbfaf6]"
                >
                  {flavor}
                </span>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <MenuCard
            title="Add ice cream"
            price={iceCreamAddOn.price}
            description="Add a scoop under your shave ice."
            dark
          >
            <div className="flex flex-wrap gap-2">
              {iceCreamAddOn.options.map((option) => (
                <span
                  key={option}
                  className="rounded-full bg-[#fbfaf6]/12 px-3 py-2 text-sm font-bold text-[#fbfaf6]/82"
                >
                  {option}
                </span>
              ))}
            </div>
          </MenuCard>

          <div>
            <h3 className="text-2xl font-black tracking-[-0.04em]">Toppings</h3>
            <p className="mt-2 text-[#fbfaf6]/70">Add toppings for $1.00 each.</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {toppings.map((topping) => (
                <MenuCard
                  key={topping.name}
                  title={topping.name}
                  price={topping.price}
                  description={topping.description}
                  dark
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <section aria-labelledby="specialties-heading">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 id="specialties-heading" className="text-3xl font-black tracking-[-0.04em]">
                  Specialties
                </h3>
                <div className="mt-3 space-y-1 text-sm font-bold uppercase tracking-[0.08em] text-[#fbfaf6]/70">
                  {specialtyNotes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>
              </div>
              <span className="w-fit rounded-full bg-[#fbfaf6] px-4 py-2 text-sm font-black text-[#024731]">
                $9.99
              </span>
            </div>
            <div className="mt-6 grid gap-4">
              {specialties.map((item) => (
                <MenuCard
                  key={item.name}
                  title={item.name}
                  price={item.price}
                  description={item.description}
                  meta={item.allergen}
                  dark
                />
              ))}
            </div>
          </section>

          <MenuCard
            title={iceCreamMenu.title}
            price={iceCreamMenu.price}
            meta={iceCreamMenu.serving}
            description="Simple scoop options served in a cup."
            dark
          >
            <div className="flex flex-wrap gap-2">
              {iceCreamMenu.flavors.map((flavor) => (
                <span
                  key={flavor}
                  className="rounded-full bg-[#fbfaf6]/12 px-3 py-2 text-sm font-bold text-[#fbfaf6]/82"
                >
                  {flavor}
                </span>
              ))}
            </div>
          </MenuCard>
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
        <FeaturedCombinations />
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
