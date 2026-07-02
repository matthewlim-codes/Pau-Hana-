const TILES = [
  { bg: "linear-gradient(155deg, #fbcfe8 0%, #f472b6 60%, #db2777 100%)" },
  { bg: "linear-gradient(155deg, #fef3c7 0%, #fbbf24 60%, #d97706 100%)" },
  { bg: "linear-gradient(155deg, #ede9fe 0%, #a78bfa 60%, #7c3aed 100%)" },
  { bg: "linear-gradient(155deg, #d1fae5 0%, #34d399 60%, #059669 100%)" },
  { bg: "linear-gradient(155deg, #dbeafe 0%, #60a5fa 60%, #2563eb 100%)" },
  { bg: "linear-gradient(155deg, #fee2e2 0%, #f87171 60%, #dc2626 100%)" },
  { bg: "linear-gradient(155deg, #ffedd5 0%, #fb923c 60%, #ea580c 100%)" },
  { bg: "linear-gradient(155deg, #ccfbf1 0%, #2dd4bf 60%, #0d9488 100%)" },
  { bg: "linear-gradient(155deg, #fae8ff 0%, #e879f9 60%, #a21caf 100%)" },
  { bg: "linear-gradient(155deg, #fef9c3 0%, #facc15 60%, #ca8a04 100%)" },
];

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
      {TILES.map((tile, i) => {
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
                  background: tile.bg,
                  boxShadow:
                    "0 24px 72px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.10), inset 0 2px 0 rgba(255,255,255,0.52)",
                  transform: `rotate(${tilt}deg)`,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(155deg, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.08) 42%, transparent 66%)",
                    borderRadius: 40,
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
