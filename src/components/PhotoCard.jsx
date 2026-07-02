export function PhotoCard({ title, alt, label, className = "" }) {
  return (
    <figure className={`group overflow-hidden rounded-[2rem] bg-[#024731] ${className}`}>
      <div
        role="img"
        aria-label={alt}
        className="photo-placeholder flex min-h-[18rem] items-end p-6 transition duration-300 group-hover:scale-[1.02]"
      >
        <figcaption className="rounded-2xl bg-[#fbfaf6]/92 p-4 text-black shadow-sm">
          {label ? (
            <p className="eyebrow mb-2 text-[0.65rem] font-black text-[#024731]">{label}</p>
          ) : null}
          <p className="text-lg font-black tracking-[-0.03em]">{title}</p>
          <p className="mt-1 text-sm text-black/60">Photography placeholder</p>
        </figcaption>
      </div>
    </figure>
  );
}
