import img0 from "@assets/00292086-e905-4eb5-ab3e-4946ab8faa06_1782954800934.png";
import img1 from "@assets/4022d0bc-c89a-4097-8144-133a0cebb848_1782954800934.png";
import img2 from "@assets/4994c673-1355-4635-a1db-6df6c71ab212_1782954800933.png";
import img3 from "@assets/7a44a945-f141-48f9-8718-3086426cbc17_1782954800934.png";
import img4 from "@assets/7ddbb129-974e-4adf-b18c-ffc116b46e24_1782954800934.png";
import img5 from "@assets/a05eb0fa-8ca3-4a49-b3e0-3cf7034f3aa3_1782954800933.png";
import img6 from "@assets/cc78e2d7-a347-4ef4-a9a7-faf74a5d3aea_1782954800934.png";

const IMAGES = [img0, img1, img2, img3, img4, img5, img6];
const N = IMAGES.length;
const RADIUS = 780;
const TILE_SIZE = 340;
const DIAMETER = RADIUS * 2 + TILE_SIZE;

export function ImageWheel() {
  return (
    <div
      className="wheel-orbit"
      style={{ width: DIAMETER, height: DIAMETER, position: "relative" }}
    >
      {IMAGES.map((src, i) => {
        const angle = (i / N) * 2 * Math.PI - Math.PI / 2;
        const x = RADIUS * Math.cos(angle) + RADIUS + TILE_SIZE / 2;
        const y = RADIUS * Math.sin(angle) + RADIUS + TILE_SIZE / 2;

        return (
          <img
            key={i}
            src={src}
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              left: x - TILE_SIZE / 2,
              top: y - TILE_SIZE / 2,
              width: TILE_SIZE,
              height: TILE_SIZE,
              objectFit: "contain",
              filter:
                "drop-shadow(0 12px 24px rgba(0,0,0,0.18)) drop-shadow(0 4px 8px rgba(0,0,0,0.10))",
              pointerEvents: "none",
              userSelect: "none",
            }}
          />
        );
      })}
    </div>
  );
}
