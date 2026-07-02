export function ButtonLink({ href, children, variant = "primary", className = "" }) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] shadow-sm hover:-translate-y-0.5 focus-visible:-translate-y-0.5";

  const variantClasses = {
    primary: "bg-[#024731] text-[#fbfaf6] hover:bg-black",
    secondary:
      "border border-[#024731] bg-transparent text-[#024731] hover:bg-[#024731] hover:text-[#fbfaf6]",
    dark: "bg-black text-[#fbfaf6] hover:bg-[#024731]",
  };

  return (
    <a href={href} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </a>
  );
}
