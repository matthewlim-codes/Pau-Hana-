export function MenuCard({ title, price, description, meta, children, dark = false }) {
  return (
    <article
      className={`rounded-[2rem] border p-6 shadow-sm ${
        dark
          ? "border-[#fbfaf6]/15 bg-[#fbfaf6]/10 text-[#fbfaf6]"
          : "border-[#024731]/15 bg-white/80 text-black"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-black tracking-[-0.03em]">{title}</h3>
          {meta ? (
            <p className={dark ? "mt-2 text-sm text-[#fbfaf6]/70" : "mt-2 text-sm text-black/55"}>
              {meta}
            </p>
          ) : null}
        </div>
        {price ? (
          <span
            className={`rounded-full px-3 py-1 text-sm font-black ${
              dark ? "bg-[#fbfaf6] text-[#024731]" : "bg-[#024731] text-[#fbfaf6]"
            }`}
          >
            {price}
          </span>
        ) : null}
      </div>
      {description ? (
        <p className={dark ? "mt-4 leading-7 text-[#fbfaf6]/78" : "mt-4 leading-7 text-black/68"}>
          {description}
        </p>
      ) : null}
      {children ? <div className="mt-5">{children}</div> : null}
    </article>
  );
}
