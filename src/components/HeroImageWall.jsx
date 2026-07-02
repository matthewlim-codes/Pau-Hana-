import img1 from "@assets/4994c673-1355-4635-a1db-6df6c71ab212_1782954800933.png";
import img2 from "@assets/a05eb0fa-8ca3-4a49-b3e0-3cf7034f3aa3_1782954800933.png";
import img3 from "@assets/4022d0bc-c89a-4097-8144-133a0cebb848_1782954800934.png";
import img4 from "@assets/7a44a945-f141-48f9-8718-3086426cbc17_1782954800934.png";
import img5 from "@assets/00292086-e905-4eb5-ab3e-4946ab8faa06_1782954800934.png";
import img6 from "@assets/7ddbb129-974e-4adf-b18c-ffc116b46e24_1782954800934.png";
import img7 from "@assets/cc78e2d7-a347-4ef4-a9a7-faf74a5d3aea_1782954800934.png";

const WALL_ITEMS = [
  { src: img1, className: "hero-wall-item tall rotate-[-7deg]" },
  { src: img2, className: "hero-wall-item square rotate-[5deg]" },
  { src: img3, className: "hero-wall-item wide rotate-[-3deg]" },
  { src: img4, className: "hero-wall-item tall rotate-[7deg]" },
  { src: img5, className: "hero-wall-item square rotate-[4deg]" },
  { src: img6, className: "hero-wall-item wide rotate-[-6deg]" },
  { src: img7, className: "hero-wall-item tall rotate-[6deg]" },
  { src: img2, className: "hero-wall-item wide rotate-[-4deg]" },
  { src: img4, className: "hero-wall-item square rotate-[3deg]" },
  { src: img1, className: "hero-wall-item tall rotate-[-5deg]" },
  { src: img6, className: "hero-wall-item square rotate-[6deg]" },
  { src: img3, className: "hero-wall-item wide rotate-[-2deg]" },
];

function WallSet({ offset = false }) {
  return (
    <div className={`hero-wall-grid ${offset ? "hero-wall-grid-offset" : ""}`}>
      {WALL_ITEMS.map((item, index) => (
        <figure className={item.className} key={`${item.src}-${index}`}>
          <img src={item.src} alt="" draggable="false" />
        </figure>
      ))}
    </div>
  );
}

export function HeroImageWall() {
  return (
    <div className="hero-wall" aria-hidden="true">
      <div className="hero-wall-perspective">
        <div className="hero-wall-track">
          <WallSet />
          <WallSet offset />
        </div>
      </div>
    </div>
  );
}
