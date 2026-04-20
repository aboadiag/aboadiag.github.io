// ArtPage.jsx
import React, { useState, useLayoutEffect, useRef } from "react";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import styles from "./ArtPage.module.css";

const artPieces = [
  { id: 1, title: "Self Portrait (2020).", src: "/img/art/abena_self_portrait.png", alt: "Self portrait of Abena" },
  { id: 2, title: "TT 1 (2020).", src: "/img/art/tt_art1.jpg", alt: "Digital image of person with hand on breast in blue ink." },
  { id: 3, title: "TT 2 (2020).", src: "/img/art/tt_art2.jpg", alt: "Digital image of person in red ink." },
  { id: 4, title: "Man Wearing Durag (2018).", src: "/img/art/durag_art.jpeg", alt: "Incomplete image of Black man wearing red durag." },
  { id: 5, title: "Mother Nature (2018).", src: "/img/art/self_color.jpeg", alt: "Painting of young woman gazing at viewer." },
  { id: 6, title: "Jorja Smith in Pastel (2018).", src: "/img/art/jorja.jpeg", alt: "Portrait of musician Jorja Smith." },
  { id: 7, title: "Solonge (2017).", src: "/img/art/solonge.jpeg", alt: "Portrait of musician Solonge Knowles." },
  { id: 8, title: "Girl Sketch (2017).", src: "/img/art/girl_sketch.jpeg", alt: "Portrait of young girl gazing at the viewer." },
  { id: 9, title: "Cara Delevigne Sketch (2013).", src: "/img/art/cara_del.jpeg", alt: "Portrait of model Cara Delevigne." },
  { id: 10, title: "Audrey Hepburn Sketch (2013).", src: "/img/art/audrey_sketch.jpg", alt: "Portrait of Audrey Hepburn." },
];

export const ArtPage = () => {
  const [modalArt, setModalArt] = useState(null);
  const [bubbleStyles, setBubbleStyles] = useState([]);
  const containerRef = useRef(null);
  const lastLayoutRef = useRef({ w: -1, h: -1, bubble: -1 });

  useLayoutEffect(() => {
    const calculatePositions = () => {
      const el = containerRef.current;
      if (!el) return;

      const containerW = el.offsetWidth;
      const containerH = el.offsetHeight;

      const bubbleCss = getComputedStyle(el).getPropertyValue("--art-bubble-size").trim();
      const bubbleSize = Math.max(
        80,
        parseFloat(bubbleCss) || 250
      );

      const prev = lastLayoutRef.current;
      if (
        prev.w === containerW &&
        prev.h === containerH &&
        prev.bubble === bubbleSize
      ) {
        return;
      }
      lastLayoutRef.current = { w: containerW, h: containerH, bubble: bubbleSize };

      const newStyles = artPieces.map(() => {
        const left = Math.random() * Math.max(0, containerW - bubbleSize);
        const top = Math.random() * Math.max(0, containerH - bubbleSize);

        const delay = Math.random() * 2;
        const duration = 3 + Math.random() * 3;

        return {
          left: `${left}px`,
          top: `${top}px`,
          animationDelay: `-${delay}s`,
          animationDuration: `${duration}s`,
        };
      });
      setBubbleStyles(newStyles);
    };

    calculatePositions();
    window.addEventListener("resize", calculatePositions);
    window.visualViewport?.addEventListener("resize", calculatePositions);
    window.visualViewport?.addEventListener("scroll", calculatePositions);

    const ro = new ResizeObserver(() => calculatePositions());
    if (containerRef.current) ro.observe(containerRef.current);

    return () => {
      window.removeEventListener("resize", calculatePositions);
      window.visualViewport?.removeEventListener("resize", calculatePositions);
      window.visualViewport?.removeEventListener("scroll", calculatePositions);
      ro.disconnect();
    };
  }, []);

  const openModal = (art) => {
    setModalArt(art);
    document.body.style.overflow = "hidden"; 
  };

  const closeModal = () => {
    setModalArt(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className={styles['art-page']}>
      
      <header className={styles['navbar-container']}>
        <NavBar />
      </header>

      <div className={styles['art-intro']}>
        <h1 className={styles['select-art']}>select art.</h1>
        <p className={styles['art-description']}>
          I have always enjoyed creating visual art in my free time. This is some of my work. Click images to view larger.
        </p>
      </div>

      <div className={styles['art-bubbles-container']} ref={containerRef}>
        {artPieces.map((art, index) => (
          <button
            key={art.id}
            type="button"
            className={styles['art-bubble']}
            style={bubbleStyles[index]} 
            onClick={() => openModal(art)}
            aria-label={`View ${art.title}`}
          >
            <img src={art.src} alt={art.alt} />
          </button>
        ))}
      </div>

      {modalArt && (
        <div className={styles['art-modal']} onClick={closeModal}>
          <div className={styles['art-modal-content']} onClick={(e) => e.stopPropagation()}>
            <img src={modalArt.src} alt={modalArt.alt} />
            <p>{modalArt.title}</p>
            <button className={styles['close-button']} onClick={closeModal}>
              Close Preview
            </button>
          </div>
        </div>
      )}

      <div className={styles['footer-container']}>
        <Footer />
      </div>

    </div>
  );
};