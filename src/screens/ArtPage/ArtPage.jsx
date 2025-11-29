import React, { useState, useEffect, useRef } from "react";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import styles from "./ArtPage.module.css";

// Art pieces array
const artPieces = [
  { id: 1, title: "Self Portrait (2020).", src: "/img/art/abena_self_portrait.png", alt: "Self portrait of Abena" },
  { id: 2, title: "TT 1 (2020).", src: "/img/art/tt_art1.jpg", alt: "Digital image of person with hand on breast in blue ink." },
  { id: 3, title: "TT 2 (2020).", src: "/img/art/tt_art2.jpg", alt: "Digital image of person in red ink." },
  { id: 4, title: "Man Wearing Durag (2018).", src: "/img/art/durag_art.jpeg", alt: "Incomplete image of Black man wearing red durag, gazing forwards." },
  { id: 5, title: "Mother Nature (2018).", src: "/img/art/self_color.jpeg", alt: "Painting of young woman gazing at viewer." },
  { id: 6, title: "Jorja Smith in Pastel (2018).", src: "/img/art/jorja.jpeg", alt: "Portrait of musician Jorja Smith." },
  { id: 7, title: "Solonge (2017).", src: "/img/art/solonge.jpeg", alt: "Portrait of musician Solonge Knowles." },
  { id: 8, title: "Girl Sketch (2017).", src: "/img/art/girl_sketch.jpeg", alt: "Portrait of young girl gazing at the viewer." },
  { id: 9, title: "Cara Delevigne Sketch (2013).", src: "/img/art/cara_del.jpeg", alt: "Portrait of model Cara Delevigne staring intently at a lighter in her hand." },
  { id: 10, title: "Audrey Hepburn Sketch (2013).", src: "/img/art/audrey_sketch.jpg", alt: "Portrait of actress and humanitarian Audrey Hepburn, smiling softly at viewer with her face resting in her right hand." },
];

export const ArtPage = () => {
  const [modalArt, setModalArt] = useState(null);
  const [bubbleStyles, setBubbleStyles] = useState([]);
  const containerRef = useRef(null);
  const firstComputeRef = useRef(true); // used to bias the very first placement top-left

  // bias constants: adjust to move bubbles even more top-left
  const BIAS_WIDTH = 0.30;  // use left within first 25% of container width (initially)
  const BIAS_HEIGHT = 0.30; // use top within first 15% of container height (initially)

  // Helper: read CSS variable for bubble size (fallback to 180)
  const getBubbleSizePx = () => {
    try {
      const cssVar = getComputedStyle(document.documentElement).getPropertyValue("--art-bubble-size");
      const parsed = parseInt(cssVar, 10);
      return Number.isFinite(parsed) ? parsed : 180;
    } catch (e) {
      return 180;
    }
  };

  useEffect(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;

    const computeStyles = (useTopLeftBias = false) => {
      const rect = containerEl.getBoundingClientRect();
      const containerW = Math.max(1, rect.width || window.innerWidth);
      const containerH = Math.max(1, rect.height || window.innerHeight * 0.6);
      const bubblePx = getBubbleSizePx();

      const maxLeftPx = Math.max(0, containerW - bubblePx);
      const maxTopPx = Math.max(0, containerH - bubblePx);

      // If bias requested, restrict initial positions to the top-left small area (BIAS_WIDTH x BIAS_HEIGHT)
      const leftRange = useTopLeftBias ? Math.max(1, Math.floor(maxLeftPx * BIAS_WIDTH)) : maxLeftPx;
      const topRange = useTopLeftBias ? Math.max(1, Math.floor(maxTopPx * BIAS_HEIGHT)) : maxTopPx;

      const styles = artPieces.map(() => {
        const leftPx = Math.random() * leftRange; // 0..leftRange px
        const topPx = Math.random() * topRange; // 0..topRange px
        return {
          left: `${Math.round(leftPx)}px`,
          top: `${Math.round(topPx)}px`,
          animationDuration: `${(6 + Math.random() * 6).toFixed(2)}s`,
          animationDelay: `${(Math.random() * 5).toFixed(2)}s`,
        };
      });

      setBubbleStyles(styles);
    };

    // initial compute after a frame so layout is stable -> bias to top-left
    let raf = requestAnimationFrame(() => {
      computeStyles(firstComputeRef.current);
      firstComputeRef.current = false;
    });

    // Resize handling — use ResizeObserver for container and window for layout changes
    const resizeObserver = new ResizeObserver(() => computeStyles(false));
    resizeObserver.observe(containerEl);

    const onWindowResize = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => computeStyles(false));
    };
    window.addEventListener("resize", onWindowResize);

    // recompute once images/fonts settle (small timeout)
    const timeoutId = setTimeout(() => computeStyles(false), 600);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      window.removeEventListener("resize", onWindowResize);
      clearTimeout(timeoutId);
      document.body.classList.remove("modal-open");
    };
  }, []); // run once on mount

  // Modal helpers (pause animations via body.modal-open)
  const openModal = (art) => {
    setModalArt(art);
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setModalArt(null);
    document.body.classList.remove("modal-open");
  };

  // ESC to close modal
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && modalArt) closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalArt]);

  return (
    <div className={styles["art-page"]}>
      <NavBar className="navbar" />

      <div className="art-intro">
        <div className="select-art">select art.</div>
        <p className="art-description">
          I have always enjoyed creating visual art in my free time. This is some of my work. Click images to view larger.
        </p>
      </div>

      {/* container ref used for size measurement */}
      <div className="art-gallery art-bubbles-container" ref={containerRef} aria-live="polite">
        {artPieces.map((art, index) => {
          const style = bubbleStyles[index] || {};
          const inlineStyle = {
            top: style.top,
            left: style.left,
            animationDuration: style.animationDuration,
            animationDelay: style.animationDelay,
          };

          return (
            <button
              key={art.id}
              type="button"
              className="art-item art-bubble"
              style={inlineStyle}
              onClick={() => openModal(art)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openModal(art);
                }
              }}
              aria-label={`${art.title} — click to open`}
              title={art.title}
            >
              <img src={art.src} alt={art.alt} />
              <p className="art-caption" aria-hidden="true">{art.title}</p>
            </button>
          );
        })}
      </div>

      {modalArt && (
        <div
          className="art-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${modalArt.title} preview`}
          onClick={closeModal}
        >
          <div className="art-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalArt.src} alt={modalArt.alt} />
            <p>{modalArt.title}</p>
            <button
              type="button"
              onClick={closeModal}
              style={{ marginTop: 12 }}
              aria-label="Close preview"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer className="footer" />
    </div>
  );
};
