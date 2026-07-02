export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
  light = false,
  titleClassName,
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`eyebrow mb-3 text-xs font-black ${
          light ? "text-[#fbfaf6]/75" : "text-[#024731]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={titleClassName ?? `text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl ${
          light ? "text-[#fbfaf6]" : "text-black"
        }`}
      >
        {title}
      </h2>
      {children ? (
        <p
          className={`mt-5 text-base leading-8 sm:text-lg ${
            light ? "text-[#fbfaf6]/80" : "text-black/70"
          }`}
        >
          {children}
        </p>
      ) : null}
    </div>
  );
}
