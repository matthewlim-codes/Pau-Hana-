import pauHanaLogo from "@assets/pau_hana_logo_nobg.png";

export function HeroLogo() {
  return (
    <div className="hero-logo">
      <img
        src={pauHanaLogo}
        alt="Pau Hana"
        style={{ maxWidth: 720, width: "100%", height: "auto" }}
      />
    </div>
  );
}
