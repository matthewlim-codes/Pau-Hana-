import aboutPhoto from "@assets/image_1782957945341.png";

export function PhotoCard({ title, alt, label, className = "", src }) {
  const imageSrc = src ?? aboutPhoto;

  return (
    <figure className={`group overflow-hidden rounded-[2rem] bg-[#024731] ${className}`}>
      <div className="relative flex min-h-[18rem] items-end transition duration-300 group-hover:scale-[1.02]">
        <img
          src={imageSrc}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <figcaption className="relative z-10 m-6 rounded-2xl bg-[#fbfaf6]/92 p-4 text-black shadow-sm">
          {label ? (
            <p className="eyebrow mb-2 text-[0.65rem] font-black text-[#024731]">{label}</p>
          ) : null}
          <p className="text-lg font-black tracking-[-0.03em]">{title}</p>
        </figcaption>
      </div>
    </figure>
  );
}
