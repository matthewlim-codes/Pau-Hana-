import { useEffect, useRef } from "react";
import img1 from "@assets/4994c673-1355-4635-a1db-6df6c71ab212_1782954800933.png";
import img2 from "@assets/a05eb0fa-8ca3-4a49-b3e0-3cf7034f3aa3_1782954800933.png";
import img3 from "@assets/4022d0bc-c89a-4097-8144-133a0cebb848_1782954800934.png";
import img4 from "@assets/7a44a945-f141-48f9-8718-3086426cbc17_1782954800934.png";
import img5 from "@assets/00292086-e905-4eb5-ab3e-4946ab8faa06_1782954800934.png";
import img6 from "@assets/7ddbb129-974e-4adf-b18c-ffc116b46e24_1782954800934.png";
import img7 from "@assets/cc78e2d7-a347-4ef4-a9a7-faf74a5d3aea_1782954800934.png";

const TILES = [img1, img2, img3, img4, img5, img6, img7];

const STAGE_WIDTH = 1800;
const STAGE_HEIGHT = 520;
const RADIUS = 690;
const CENTER_X = STAGE_WIDTH / 2;
const CENTER_Y = 800;
const TILE_WIDTH = 220;
const TILE_HEIGHT = 310;
const START_ANGLE = -76;
const END_ANGLE = 76;

function getTilePosition(index, total) {
  const progress = total === 1 ? 0.5 : index / (total - 1);
  const angleDeg = START_ANGLE + (END_ANGLE - START_ANGLE) * progress;
  const angleRad = (angleDeg * Math.PI) / 180;
  const x = CENTER_X + Math.sin(angleRad) * RADIUS;
  const y = CENTER_Y - Math.cos(angleRad) * RADIUS;

  return {
    angleDeg,
    x,
    y,
  };
}

export function ImageWheel({ className = "" }) {
  const scrollRef = useRef(null);
  const dragRef = useRef({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (!scrollRef.current) {
        return;
      }

      scrollRef.current.scrollLeft =
        (scrollRef.current.scrollWidth - scrollRef.current.clientWidth) / 2;
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const handleWheel = (event) => {
    if (!scrollRef.current || Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
      return;
    }

    event.preventDefault();
    scrollRef.current.scrollLeft += event.deltaY;
  };

  const handleKeyDown = (event) => {
    if (!scrollRef.current) {
      return;
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      scrollRef.current.scrollBy({
        left: event.key === "ArrowLeft" ? -180 : 180,
        behavior: "smooth",
      });
    }
  };

  const handlePointerDown = (event) => {
    if (!scrollRef.current) {
      return;
    }

    dragRef.current = {
      isDragging: true,
      startX: event.clientX,
      scrollLeft: scrollRef.current.scrollLeft,
    };

    scrollRef.current.setPointerCapture(event.pointerId);
    scrollRef.current.classList.add("is-dragging");
  };

  const handlePointerMove = (event) => {
    if (!scrollRef.current || !dragRef.current.isDragging) {
      return;
    }

    const deltaX = event.clientX - dragRef.current.startX;
    scrollRef.current.scrollLeft = dragRef.current.scrollLeft - deltaX;
  };

  const stopDragging = (event) => {
    if (!scrollRef.current) {
      return;
    }

    dragRef.current.isDragging = false;
    scrollRef.current.classList.remove("is-dragging");

    if (scrollRef.current.hasPointerCapture(event.pointerId)) {
      scrollRef.current.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div
      ref={scrollRef}
      className={`image-wheel-scroll ${className}`}
      role="region"
      aria-label="Scrollable product image wheel"
      tabIndex={0}
      onWheel={handleWheel}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
    >
      <div
        className="image-wheel-stage"
        style={{
          width: STAGE_WIDTH,
          height: STAGE_HEIGHT,
        }}
      >
        <div className="image-wheel-arc" aria-hidden="true" />
        {TILES.map((src, i) => {
          const { angleDeg, x, y } = getTilePosition(i, TILES.length);

          return (
            <figure
              key={src}
              className="image-wheel-card"
              style={{
                left: x,
                top: y,
                width: TILE_WIDTH,
                height: TILE_HEIGHT,
                transform: `translate(-50%, -50%) rotate(${angleDeg * 0.58}deg)`,
              }}
            >
              <img src={src} alt="" draggable="false" />
            </figure>
          );
        })}
      </div>
    </div>
  );
}
