import { useEffect, useRef, useState } from "react";

/** Custom crosshair cursor with subtle arc-blue glow trail. */
export default function Cursor() {
  const ref = useRef(null);
  const trailRef = useRef(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setHidden(true);
      return;
    }

    let x = window.innerWidth / 2,
      y = window.innerHeight / 2;
    let tx = x,
      ty = y;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (ref.current) {
        ref.current.style.transform = `translate(${x - 14}px, ${y - 14}px)`;
      }
    };

    const enterInteractive = () => {
      if (ref.current) ref.current.dataset.hover = "true";
    };
    const leaveInteractive = () => {
      if (ref.current) ref.current.dataset.hover = "false";
    };

    let raf;
    const loop = () => {
      tx += (x - tx) * 0.18;
      ty += (y - ty) * 0.18;
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${tx - 24}px, ${ty - 24}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, input, textarea, [data-cursor='hover']").forEach((el) => {
      el.addEventListener("mouseenter", enterInteractive);
      el.addEventListener("mouseleave", leaveInteractive);
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      <div
        ref={trailRef}
        className="cursor-crosshair"
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          border: "1px solid rgba(0,200,255,0.35)",
          boxShadow: "0 0 20px rgba(0,200,255,0.35)",
        }}
      />
      <div
        ref={ref}
        className="cursor-crosshair"
        data-hover="false"
        style={{
          width: 28,
          height: 28,
        }}
      >
        <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="14" r="2" fill="#00c8ff" />
          <path d="M14 1 V8 M14 20 V27 M1 14 H8 M20 14 H27" stroke="#00c8ff" strokeWidth="1.2" />
          <circle cx="14" cy="14" r="10" stroke="#00c8ff" strokeOpacity="0.45" strokeWidth="0.8" />
        </svg>
      </div>
    </>
  );
}