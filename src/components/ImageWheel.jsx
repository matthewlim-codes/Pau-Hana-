import img1 from "@assets/4994c673-1355-4635-a1db-6df6c71ab212_1782954800933.png";
import img2 from "@assets/a05eb0fa-8ca3-4a49-b3e0-3cf7034f3aa3_1782954800933.png";
import img3 from "@assets/4022d0bc-c89a-4097-8144-133a0cebb848_1782954800934.png";
import img4 from "@assets/7a44a945-f141-48f9-8718-3086426cbc17_1782954800934.png";
import img5 from "@assets/00292086-e905-4eb5-ab3e-4946ab8faa06_1782954800934.png";
import img6 from "@assets/7ddbb129-974e-4adf-b18c-ffc116b46e24_1782954800934.png";
import img7 from "@assets/cc78e2d7-a347-4ef4-a9a7-faf74a5d3aea_1782954800934.png";

const TILES = [img1, img2, img3, img4, img5, img6, img7];

const WHEEL_SIZE = 1540;
const RADIUS = 570;
const TILE_SIZE = 440;

export function ImageWheel({ className = "" }) {
  return (
    <div className={`image-wheel-frame ${className}`} aria-hidden="true">
      <div
        className="image-wheel-orbit"
        style={{
          width: WHEEL_SIZE,
          height: WHEEL_SIZE,
        }}
      >
        {TILES.map((src, i) => {
          const angleDeg = (360 / TILES.length) * i;

          return (
            <div
              key={src}
              className="image-wheel-item"
              style={{
                width: TILE_SIZE,
                height: TILE_SIZE,
                transform: `translate(-50%, -50%) rotate(${angleDeg}deg) translateY(-${RADIUS}px)`,
              }}
            >
              <img src={src} alt="" draggable="false" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
