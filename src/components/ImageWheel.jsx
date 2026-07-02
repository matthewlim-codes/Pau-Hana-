import img1 from "@assets/Gemini_Generated_Image_csb9shcsb9shcsb9_1782954132879.png";
import img2 from "@assets/Gemini_Generated_Image_akuzr1akuzr1akuz_1782954132879.png";
import img3 from "@assets/Gemini_Generated_Image_fi8tryfi8tryfi8t_1782954132880.png";
import img4 from "@assets/Gemini_Generated_Image_zbxggvzbxggvzbxg_1782954132880.png";
import img5 from "@assets/Gemini_Generated_Image_xsqrtuxsqrtuxsqr_1782954132880.png";
import img6 from "@assets/Gemini_Generated_Image_ddaw5cddaw5cddaw_1782954132880.png";
import img7 from "@assets/Gemini_Generated_Image_8nqcun8nqcun8nqc_1782954132880.png";
import img8 from "@assets/Gemini_Generated_Image_t4yk86t4yk86t4yk_1782954132880.png";

const TILES = [img1, img2, img3, img4, img5, img6, img7, img8];

const RADIUS = 780;
const TILE_W = 324;
const TILE_H = 462;

export function ImageWheel({ className = "" }) {
  const tileCount = TILES.length;

  return (
    <div
      className={`wheel-orbit ${className}`}
      style={{
        position: "relative",
        width: RADIUS * 2,
        height: RADIUS * 2,
        flexShrink: 0,
      }}
    >
      {TILES.map((src, i) => {
        const angleDeg = (360 / tileCount) * i;
        const tilt = Math.round(Math.sin((angleDeg * Math.PI) / 180) * 7);

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              marginLeft: -(TILE_W / 2),
              marginTop: -(TILE_H / 2),
              width: TILE_W,
              height: TILE_H,
              transform: `rotate(${angleDeg}deg) translateY(-${RADIUS}px)`,
            }}
          >
            <div
              className="wheel-tile-counter"
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 40,
                  overflow: "hidden",
                  boxShadow:
                    "0 24px 72px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.10), inset 0 2px 0 rgba(255,255,255,0.52)",
                  transform: `rotate(${tilt}deg)`,
                  position: "relative",
                  backgroundColor: "#f5f5f5",
                }}
              >
                <img
                  src={src}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                />
                {/* glossy sheen */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(155deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.04) 40%, transparent 62%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
