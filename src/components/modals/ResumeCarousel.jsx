import { useState, useEffect, useCallback, useRef } from "react";
import "./ResumeCarousel.css";

/**
 * Usage:
 *   <ResumeCarousel images={[{ src: "/img1.png", alt: "CMS admin panel" }, ...]} intervalMs={3000} />
 */
export default function ResumeCarousel({ images = [], intervalMs = 3000 }) {
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const isPaused = isHovering || isDragging;
  const dragStartX = useRef(null);
  const [dragDeltaX, setDragDeltaX] = useState(0);
  const count = images.length;

  const clamp = useCallback((i) => (i + count) % count, [count]);
  const goTo = useCallback((i) => setIndex(clamp(i)), [clamp]);
  const next = useCallback(() => setIndex((i) => clamp(i + 1)), [clamp]);
  const prev = useCallback(() => setIndex((i) => clamp(i - 1)), [clamp]);

  // override an accessibility preference the user has already made.
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (count <= 1 || !intervalMs || isPaused || prefersReducedMotion) return;
    const id = setInterval(next, intervalMs);
    return () => clearInterval(id);
  }, [count, intervalMs, isPaused, prefersReducedMotion, next]);

  if (count === 0) return null;

  const onPointerDown = (e) => {
    dragStartX.current = e.clientX;
    setDragDeltaX(0);
    setIsDragging(true);
  };
  const onPointerMove = (e) => {
    if (dragStartX.current === null) return;
    setDragDeltaX(e.clientX - dragStartX.current);
  };
  const endDrag = () => {
    if (dragStartX.current === null) return;
    if (dragDeltaX > 50) prev();
    else if (dragDeltaX < -50) next();
    dragStartX.current = null;
    setDragDeltaX(0);
    setIsDragging(false);
  };

  return (
    <div
      className="resume-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Project screenshots"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocus={() => setIsHovering(true)}
      onBlur={() => setIsHovering(false)}
    >
      <div
        className="resume-carousel__viewport"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        <div
          className="resume-carousel__track"
          style={{
            transform: `translateX(calc(${-index * 100}% + ${dragDeltaX}px))`,
            transitionDuration: dragStartX.current !== null ? "0ms" : "250ms",
          }}
        >
          {images.map((img, i) => (
            <div className="resume-carousel__slide" key={i}>
              <img src={img.src} alt={img.alt || `Screenshot ${i + 1}`} draggable={false} loading="lazy" />
            </div>
          ))}
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              className="resume-carousel__btn resume-carousel__btn--prev"
              onClick={prev}
              aria-label="Previous screenshot"
            >
              &#8249;
            </button>
            <button
              type="button"
              className="resume-carousel__btn resume-carousel__btn--next"
              onClick={next}
              aria-label="Next screenshot"
            >
              &#8250;
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="resume-carousel__dots">
          {images.map((_, i) => (
            <button
              type="button"
              key={i}
              className={`resume-carousel__dot${i === index ? " is-active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to screenshot ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
      )}
    </div>
  );
}