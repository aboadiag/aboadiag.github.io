// Home.jsx

import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Group } from "../../components/Group";
import { NavBar } from "../../components/NavBar";
import styles from "./Home.module.css";
import { Footer } from "../../components/Footer";

// ... (Keep your existing handleLoadError function here) ...

/* ---- RECENT UPDATES CONTENT ---- */
const UPDATES_DATA = {
  2026: [
    {
      text: "Presented pluriversal approach to co-designing delivery robots at ACM/IEE HRI 2026. Read full paper ",
      link: "https://dl.acm.org/doi/abs/10.1145/3757279.3785567",
    },
    {
      text: "Received Best Paper Honorable Mention Award for the Design Track!",
      link: "https://humanrobotinteraction.org/2026/award-nominees/",
    },
    {
      text: "Selected as 2026 HRI Pioneer! Presented on my proposed thesis work. Read ",
      link: "https://dl.acm.org/doi/abs/10.1145/3776734.3794631",
    },
  ],
  2025: [
    { text: "Successfully Proposed my PhD thesis! Yay!", link: null },
    {
      text: "Presented our human-robot synchrony paper at IEEE RO-MAN 2025. Read full paper ",
      link: "https://ieeexplore.ieee.org/abstract/document/11217674/",
    },
    {
      text: "Our ACM HRI Journal paper on Delivery Robots was published. Read it ",
      link: "https://ieeexplore.ieee.org/abstract/document/11217674/",
    },
  ],
  2024: [
    {
      text: "Our short paper on voice agents for emotion regulation was accepted at ACM/IEEE HRI. Read paper ",
      link: "https://dl.acm.org/doi/abs/10.1145/3610978.3640600",
    },
    {
      text: "Successfully defended my Master's thesis! Woohoo! Read my thesis ",
      link: "https://publications.ri.cmu.edu/storage/publications/2025/03/WritingQual_MSRThesis_aboadiag_final.pdf",
    },
  ],
  2023: [
    {
      text: "Presented our short paper on designing interactive creative haptic tools to support TVIs at ACM ASSETS. Read paper ",
      link: "https://dl.acm.org/doi/abs/10.1145/3597638.3614512",
    },
    {
      text: "Our full paper on parametric tactors for modular, wearable haptics was accepted at ACM UIST. Read paper ",
      link: "https://dl.acm.org/doi/abs/10.1145/3586183.3606766",
    },
    { text: "Received Cadence Future Innovators Scholarship.", link: null },
  ],
  2022: [
    { text: "Received CMU Uber Presidential PhD Fellowship for '22-'23", link: null },
  ],
  2021: [
    { text: "Started PhD at CMU Robotics! ", link: null },
    { text: "Graduated from Stanford!", link: null },
    {
      text: "Received MSR internship offer to work w/ Teddy Seyed (Yay)! Had to decline (Aww)!",
      link: null,
    },
  ],
  2020: [
    {
      text: "Presented our short paper for improving photo-social media accessibility using voice narration at ACM ASSETS. Read paper ",
      link: "https://dl.acm.org/doi/abs/10.1145/3373625.3418013",
    },
    {
      text: "Our short paper on multi-modal wearable haptics for tactile graphics was accepted at ACM ASSETS",
      link: "https://dl.acm.org/doi/abs/10.1145/3373625.3418013",
    },
  ],
};

/* ---- RECENT UPDATES FUNCTION ---- */
const UPDATES_YEAR_ORDER = Object.keys(UPDATES_DATA)
  .map(Number)
  .sort((a, b) => b - a);

const HIGHLIGHT_SLIDES = [
  {
    src: "/img/bena-mug-removebg-preview-1-1.svg",
    alt: "Portrait of Abena smiling",
    caption: "Portrait",
  },
  {
    src: "/img/voice-agent-blur.svg",
    alt: "Stylized graphic related to voice agents research",
    caption: "Research & design",
  },
  {
    src: "/img/vector-1-3.svg",
    alt: "",
    caption: "Visual work",
  },
];

/* ---- CAROUSEL FUNCTION ---- */
function HomeHighlightCarousel() {
  const n = HIGHLIGHT_SLIDES.length;
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);

  const go = useCallback(
    (dir) => {
      setIndex((i) => (i + dir + n) % n);
    },
    [n]
  );

  const onTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  }, []);

  const onTouchEnd = useCallback(
    (e) => {
      const start = touchStartX.current;
      touchStartX.current = null;
      const end = e.changedTouches[0]?.clientX;
      if (start == null || end == null) return;
      const dx = end - start;
      if (dx > 48) go(-1);
      else if (dx < -48) go(1);
    },
    [go]
  );

  return (
    <section
      className={styles.homeCarousel}
      aria-roledescription="carousel"
      aria-label="Highlights"
    >
      <div className={styles.homeCarouselInner}>
        <div
          className={styles.homeCarouselViewport}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className={styles.homeCarouselTrack}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {HIGHLIGHT_SLIDES.map((slide, i) => (
              <div key={i} className={styles.homeCarouselSlide} aria-hidden={i !== index}>
                <img src={slide.src} alt={slide.alt} draggable={false} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.homeCarouselControls}>
          <button
            type="button"
            className={styles.homeCarouselBtn}
            onClick={() => go(-1)}
            aria-label="Previous slide"
          >
            Previous
          </button>
          <div className={styles.homeCarouselDots} role="tablist" aria-label="Slides">
            {HIGHLIGHT_SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1} of ${n}`}
                className={
                  i === index
                    ? `${styles.homeCarouselDot} ${styles.homeCarouselDotActive}`
                    : styles.homeCarouselDot
                }
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className={styles.homeCarouselBtn}
            onClick={() => go(1)}
            aria-label="Next slide"
          >
            Next
          </button>
        </div>
        <p className={styles.homeCarouselCaption} aria-live="polite">
          {HIGHLIGHT_SLIDES[index]?.caption}
        </p>
      </div>
    </section>
  );
}

/** Artboard width (px) — must match `--home-design-w-px` in Home.module.css */
const HOME_DESIGN_W = 1660;

/** Same as NavBar `.nav-bar` max-width — content scales to this band */
const NAV_BAR_MAX_PX = 1440;

/** Mirror NavBar `padding: … clamp(12px, 4vw, 60px)` horizontal inset */
function navHorizontalPaddingPx(viewportWidth) {
  return Math.min(60, Math.max(12, Math.round(viewportWidth * 0.04)));
}

function RecentUpdatesPanel() {
  return (
    <aside
      className={styles.recentUpdates}
      aria-labelledby="recent-updates-heading"
    >
      <h2 id="recent-updates-heading" className={styles.recentUpdatesTitle}>
        Recent updates
      </h2>
      <div className={styles.recentUpdatesScroll}>
        {UPDATES_YEAR_ORDER.map((year) => {
          const items = UPDATES_DATA[year];
          if (!items?.length) return null;
          return (
            <section key={year} className={styles.recentYearBlock}>
              <h3 className={styles.recentYear}>{year}</h3>
              <ul className={styles.recentList}>
                {items.map((entry, idx) => (
                  <li key={idx} className={styles.recentListItem}>
                    {entry.text}
                    {entry.link ? (
                      <>
                        {" "}
                        <a
                          href={entry.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.updateLink}
                        >
                          here
                        </a>
                      </>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </aside>
  );
}

export const Home = () => {
  const scaleWrapRef = useRef(null);
  const innerRef = useRef(null);
  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    const syncArtboardSize = () => {
      const inner = innerRef.current;
      const wrap = scaleWrapRef.current;
      const canvas = canvasRef.current;
      if (!inner || !canvas) return;

      const footer = canvas.querySelector("footer");
      if (!footer) return;

      const pad = 48;
      const bottomPx = footer.offsetTop + footer.offsetHeight + pad;
      const h = Math.max(3020, Math.ceil(bottomPx));

      inner.style.setProperty("--home-design-h-px", `${h}px`);

      /* Layout viewport width — stable under pinch-zoom so zoom actually enlarges text */
      const layoutW =
        document.documentElement?.clientWidth ?? window.innerWidth;
      const padX = navHorizontalPaddingPx(layoutW);
      const availW = Math.min(NAV_BAR_MAX_PX, layoutW) - 2 * padX;
      const scale = Math.min(1, Math.max(0, availW) / HOME_DESIGN_W);
      inner.style.setProperty("--home-layout-scale", String(scale));
      if (wrap) {
        wrap.style.setProperty("--home-scaled-h", `${Math.ceil(h * scale)}px`);
      }
    };

    syncArtboardSize();
    window.addEventListener("resize", syncArtboardSize);
    const ro = new ResizeObserver(() => syncArtboardSize());
    const footer = canvasRef.current?.querySelector("footer");
    if (footer) ro.observe(footer);

    return () => {
      window.removeEventListener("resize", syncArtboardSize);
      ro.disconnect();
    };
  }, []);

  return (
    <div className={styles.home}>
      
      {/* 1. Header flows naturally at the top */}
      <header>
        <NavBar />
      </header>

      {/* 2. Main Content Canvas 
             This contains all your absolute positioned elements.
             We use the new class 'main-content-canvas' (formerly div-2) 
             to give this a fixed height so the footer knows where to start. 
      */}

      <div ref={scaleWrapRef} className={styles.homeLayoutScale}>
        <div ref={innerRef} className={styles.homeLayoutScaleInner}>
          <div ref={canvasRef} className={styles['main-content-canvas']}>
            <main>
              <RecentUpdatesPanel />

              {/* SECTION 1: Hero / Introduction */}
          <section className={styles['hero-intro']}>
            <img
              className={styles['bena-background']}
              alt="Reddish brown circle background"
              src="/img/bena-background-2.svg"
            />
            
            <div className={styles['mask-group']}>
              <img
                className={styles['bena-mug-removebg-2']}
                alt="Portrait of Abena smiling"
                src="/img/bena-mug-removebg-preview-1-1.svg"
              />
              {/* <img
                className={styles['bena-mask-2']}
                alt=""
                src="/img/bena-mask-1.svg"
              /> */}
            </div>

            <img 
              className={styles['vector-3']}
              alt="" 
              src="/img/vector-1-3.svg" 
            />

            <h1 className={styles['hi-my-name-is-abena-2']}>
              <span className={styles['text-wrapper-69']}>Hi, my name is </span>
              <span className={styles['text-wrapper-70']}>Abena</span>
              <span className={styles['text-wrapper-69']}> (she/her), a</span>
            </h1>

            <h2 className={styles['researcher-designer-2']}>
              <span className={styles['text-wrapper-77']}><br /></span>
              <span className={styles['text-wrapper-78']}>Researcher,<br /></span>
              <span className={styles['text-wrapper-79']}>Designer,<br /></span>
              <span className={styles['text-wrapper-80']}>Engineer,</span>
            </h2>

            <h3 className={styles['final-year-phd-2']}>
              &amp; final year PhD Candidate in Robotics!
            </h3>

            <div className={styles.aboutTitleRow}>
              <h2 className={styles['text-wrapper-82']}>about.</h2>
              <a
                href="/pdfs/abenab-cv-december2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open CV (PDF in new tab)"
                className={styles.cvAboutLink}
              >
                <Group
                  className={styles['design-component-instance-node']}
                  divClassName={styles.cvAboutResume}
                  property1="default"
                  rectangleClassName="group-2"
                  rectangleClassNameOverride="group-3"
                  text="CV"
                />
              </a>
            </div>
            <p className={styles['i-am-in-the-fifth-2']}>
              <span className={styles['text-wrapper-71']}>I am a </span>
              <span className={styles['text-wrapper-72']}>fifth</span>
              <span className={styles['text-wrapper-71']}>&nbsp;</span>
              <span className={styles['text-wrapper-72']}>year</span>
              <span className={styles['text-wrapper-71']}>
                {" "}
                PhD Candidate in the Robotics Institute at Carnegie Mellon
                University. Here, I'm advised by{" "}
              </span>
              <a
                href="https://www.ri.cmu.edu/ri-faculty/aaron-steinfeld/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className={styles['text-wrapper-74']}>Aaron Steinfeld</span>
              </a>
              <span className={styles['text-wrapper-71']}> and a part of the </span>
              <a
                href="https://tbd.ri.cmu.edu/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className={styles['text-wrapper-74']}>TBD Lab</span>
              </a>
              <span className={styles['text-wrapper-71']}>. I graduate in 2026 and am actively seeking </span>
                <span className={styles['text-wrapper-72']}>full-time positions.</span> <br />
                <br />
                <span className={styles['text-wrapper-71']}>
                  My research interests are at the intersection of{" "}
              </span>
              <span className={styles['text-wrapper-72']}>human-robot interaction</span>
              <span className={styles['text-wrapper-71']}>, </span>
              <span className={styles['text-wrapper-72']}>design research</span>
              <span className={styles['text-wrapper-71']}>, and </span>
              <span className={styles['text-wrapper-72']}>accessibility</span>
              <span className={styles['text-wrapper-71']}>
                . I am interested in applying{" "}
              </span>
              <span className={styles['text-wrapper-72']}>
                participatory approaches 
              </span>
              <span className={styles['text-wrapper-71']}>
                {" "}
                to design embodied &amp; agentic AI with and for{" "}
              </span>
              <span className={styles['text-wrapper-76']}>people with disabilities </span>
              <span className={styles['text-wrapper-71']}>
                &amp; their respective communities.
               </span>
                <br /><br />

               {/* --- NEW BIO CONTENT START --- */}
                <span className={styles['text-wrapper-71']}>
                  I completed my B.S. in Mechanical Engineering at Stanford University. 
                  During my undergraduate studies, I was fortunate to work as an 
                  undergraduate researcher in{" "}
                </span>
                
                {/* 1. SHAPE Lab Link */}
                <a href="https://shape.stanford.edu/" /* TODO: Insert SHAPE Lab link here */ target="_blank" rel="noopener noreferrer">
                  <span className={styles['text-wrapper-74']}>SHAPE Lab </span>
                </a>

                <span className={styles['text-wrapper-71']}> under the supervision of </span>

                {/* 2. Sean Follmer Link */}
                <a href="https://me.stanford.edu/people/sean-follmer" /* TODO: Insert Sean Follmer link here */ target="_blank" rel="noopener noreferrer">
                  <span className={styles['text-wrapper-74']}>Dr. Sean Follmer</span>
                </a>

                <span className={styles['text-wrapper-71']}>, at the </span>

                {/* 3. Clayman Institute Link */}
                <a href="https://gender.stanford.edu/" /* TODO: Insert Clayman Institute link here */ target="_blank" rel="noopener noreferrer">
                  <span className={styles['text-wrapper-74']}>Clayman Institute for Gender Research</span>
                </a>

                <span className={styles['text-wrapper-71']}> with </span>

                {/* 4. Melissa Abad Link */}
                <a href="https://www.melissaabad.com/" /* TODO: Insert Melissa Abad link here */ target="_blank" rel="noopener noreferrer">
                  <span className={styles['text-wrapper-74']}>Dr. Melissa Abad</span>
                </a>

                <span className={styles['text-wrapper-71']}>, and at the </span>
                
                {/* 5. Stanford Graduate School of Education Link */}
                <a href="https://ed.stanford.edu/" /* TODO: Insert Stanford GSE link here */ target="_blank" rel="noopener noreferrer">
                  <span className={styles['text-wrapper-74']}>Stanford Graduate School of Education</span>
                </a>

                <span className={styles['text-wrapper-71']}> with </span>

                {/* 6. John Willinsky Link */}
                <a href="https://ed.stanford.edu/faculty/willinsk" /* TODO: Insert John Willinsky link here */ target="_blank" rel="noopener noreferrer">
                  <span className={styles['text-wrapper-74']}>Dr. John Willinsky</span>
                </a>
                
                <span className={styles['text-wrapper-71']}>.</span>
                <br /><br />

                <span className={styles['text-wrapper-71']}>
                  I am passionate about uncovering technology solutions that enable people to live empowered lives. If you are interested in collaborating, send me an email with your interests.
                {/* </span> */}
                {/* <br /><br /> */}
                {/* <span className={styles['text-wrapper-71']}> */}
                 &nbsp;&nbsp;When I am not doing research, you can find me doing yoga, bouldering, rollerblading, creating artwork, or playing with my cats, Bee and Bug!
                </span>
                <br /><br />
            </p>
          </section>

          <HomeHighlightCarousel />

          {/* SECTION 2: Education */}
          <section className={styles['education-section']}>
            <div className={styles['education-bit']}>
              <div className={styles['ellipse-5']} />
              <div className={styles['ellipse-6']} />
              <div className={styles['ellipse-7']} />

              <div className={styles['a-bit-about-me-3']}>
                <p className={styles['phd-in-robotics-2']}>
                  <span className={styles['text-wrapper-87']}>
                    PhD in Robotics. <br />
                  </span>
                  <span className={styles['text-wrapper-88']}>
                    Aaron Steinfeld (Chair), Jean Oh, Patrick Carrington, Cynthia L.
                    Bennett
                    <br />
                    "Robot Design at the Margins: The Lived Experience as a Participatory 
                    Approach to Co-designing with Disabled Adults” [
                  </span>
                  <a
                    href="https://drive.google.com/file/d/1vOES-GlMrkdDGLuSiGDzSR8nxRw3KGi4/view?usp=sharing"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className={styles['text-wrapper-74']}>Proposed Thesis, Video Summary</span>
                  </a>
                  <span className={styles['text-wrapper-88']}>]</span>
                </p>

                <h3 className={styles['text-wrapper-89']}>
                  2021 - present, Carnegie Mellon University
                </h3>

                <p className={styles['m-s-in-robotics-2']}>
                  <span className={styles['text-wrapper-87']}>
                    M.S. in Robotics.
                    <br />
                  </span>
                  <span className={styles['text-wrapper-88']}>
                    Aaron Steinfeld (Chair), Henny Admoni, Nikolas Martelaro,
                    Michelle Zhao
                    <br />
                    “Simulated Encounters of the Third Kind: A Scenario-Based
                    Approach to Designing Robotic Mobility Aids” [
                  </span>
                  <a
                    href="https://www.ri.cmu.edu/app/uploads/2025/03/WritingQual_MSRThesis_aboadiag_final.pdf"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className={styles['text-wrapper-74']}>Master’s Thesis</span>
                  </a>
                  <span className={styles['text-wrapper-88']}>]</span>
                </p>

                <h3 className={styles['text-wrapper-90']}>
                  2021 - 2025, Carnegie Mellon University
                </h3>

                <p className={styles['b-s-in-mechanical-2']}>
                  <span className={styles['text-wrapper-87']}>
                    B.S. in Mechanical Engineering
                  </span>
                  <span className={styles['text-wrapper-88']}>
                    . Concentration in Dynamic Systems &amp; Controls
                  </span>
                </p>

                <h3 className={styles['text-wrapper-91']}>
                  2017 - 2021, Stanford University
                </h3>

                <h2 className={styles['text-wrapper-92']}>education.</h2>
              </div>
            </div>
          </section>

          {/*
            Former CV callout (moved next to “about.”):
            <p className={styles['this-is-only-a-bit-2']}>
              <span className={styles['text-wrapper-71']}>This is only a </span>
              <span className={styles['text-wrapper-72']}>bit</span>
              <span className={styles['text-wrapper-71']}> about me. For a </span>
              <span className={styles['text-wrapper-72']}>byte</span>
              <span className={styles['text-wrapper-71']}>, see my CV below.</span>
            </p>
          */}

          {/* THE FIX: 
             1. Move Footer INSIDE the canvas.
             2. Add 'style' prop to position it absolutely at the bottom.
             3. 'top: 2500px' places it right after your education section ends.
          */}
          <Footer
            style={{
              position: 'absolute',
              top: 'calc(3800px - var(--home-hero-lift))',
              width: '100%',
            }}
          />
            </main>
          </div>
        </div>
      </div>

      {/* 3. Footer - Now outside the canvas, so it sits at the bottom */}
       {/* <Footer /> */}
    </div>
  );
};