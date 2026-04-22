// Projects.jsx
import React, { useLayoutEffect, useRef } from "react";
import { NavBar } from "../../components/NavBar";
import styles from "./Projects.module.css";
import { Footer } from "../../components/Footer";
import { ProjectDescriptionClamp } from "../../components/ProjectDescriptionClamp/ProjectDescriptionClamp";

/** Must match `--projects-design-w-px` in Projects.module.css */
const PROJECTS_DESIGN_W = 1440;

export const Projects = () => {
  const pageRef = useRef(null);
  const scaleWrapRef = useRef(null);
  const innerRef = useRef(null);

  useLayoutEffect(() => {
    const syncArtboardSize = () => {
      const inner = innerRef.current;
      const wrap = scaleWrapRef.current;
      const page = pageRef.current;
      if (!inner || !wrap || !page) return;

      inner.style.removeProperty("--projects-design-h-px");
      void inner.offsetHeight;
      const naturalH = Math.ceil(inner.scrollHeight);

      const vw =
        window.visualViewport?.width ??
        document.documentElement.clientWidth ??
        window.innerWidth;
      const vh =
        window.visualViewport?.height ??
        document.documentElement.clientHeight ??
        window.innerHeight;
      const scale = Math.min(1, vw / PROJECTS_DESIGN_W);

      const footer = page.querySelector("footer");
      const footerH = footer?.offsetHeight ?? 120;
      const pageTopPad = parseFloat(getComputedStyle(page).paddingTop) || 0;
      const available = Math.max(400, vh - footerH - pageTopPad - 32);
      const minDesignH = Math.ceil(available / Math.max(scale, 1e-6));

      const h = Math.max(naturalH, minDesignH);
      inner.style.setProperty("--projects-design-h-px", `${h}px`);

      wrap.style.setProperty("--projects-scaled-h", `${Math.ceil(h * scale)}px`);
    };

    syncArtboardSize();
    window.addEventListener("resize", syncArtboardSize);
    window.visualViewport?.addEventListener("resize", syncArtboardSize);
    window.visualViewport?.addEventListener("scroll", syncArtboardSize);
    const ro = new ResizeObserver(() => syncArtboardSize());
    const inner = innerRef.current;
    const page = pageRef.current;
    if (inner) ro.observe(inner);
    const footer = page?.querySelector("footer");
    if (footer) ro.observe(footer);

    return () => {
      window.removeEventListener("resize", syncArtboardSize);
      window.visualViewport?.removeEventListener("resize", syncArtboardSize);
      window.visualViewport?.removeEventListener("scroll", syncArtboardSize);
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={pageRef} className={styles.projects}>
      
      {/* HEADER */}
      <header className={styles['navbar-container']}>
        <NavBar />
      </header>

      <div ref={scaleWrapRef} className={styles.projectsLayoutScale}>
        <div ref={innerRef} className={styles.projectsLayoutScaleInner}>
      <div className={styles.projectsIntro}>
      {/* INTRO */}
      <h1 className={styles['text-wrapper-97']}>select projects.</h1>
      <p className={styles['during-my-phd-i-have']}>
        During my PhD, I have had the opportunity to design &amp;
        implement various ideas that span across digital & physical experiences.
        Some of these projects resulted in publication, others are
        archived here.
        <br />
        <br />
        See some of these&nbsp;&nbsp;projects below.
      </p>
      </div>

      <div className={styles.projectsProjectStack}>
      {/* ================= PROJECT 0: INCLUSIVE E-LEARNING (DUOLINGO TARGET) ================= */}
  {/* <div className={styles['project-persuasive-2']}>
    <p className={styles['persuasive-title']}>
      Inclusive Literacy: Expert-Novice Modeling for Digital Accessibility
    </p>

    <div className={styles['split-content']}>
      <div className={styles['left-column']}>
        <img 
          className={styles['project-video']} 
          src="/img/e-learning-project.png" 
          alt="Inclusive Literacy Learning Path" 
        />
        <p className={styles['media-caption']}>
          Example of learning paths utilizing conversational tone to teach social media alt-text creation.
        </p>
        <div className={styles['project-date']}>Fall 2022</div>
      </div>

      <div className={styles['right-column']}>
        <div className={styles['description-header']}>
          Description 
          <span className={styles['bracket']}> [</span>
          <a href="https://www.canva.com/design/DAHCcmemD9o/sMxwc2YRiWiuOt6z2nJD4w/view?utm_content=DAHCcmemD9o&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5e2ba5cf14" target="_blank" rel="noopener noreferrer" className={styles['link-text']}>
            view case study
          </a>
          <span className={styles['bracket']}>]</span>
        </div>

        <p className={styles['persuasive-blurb']}>
          I led the end-to-end UX strategy for an inclusive literacy tool, architecting 
          mobile-first learning paths based on expert-novice cognitive modeling. 
          I operationalized scaffolded interaction patterns (Faded Examples) 
          and conversational instruction (Personalization Principle) to teach high-stakes accessibility 
          skills, specifically social media alt-text authoring. 
          <br /><br />
          A validated A/B test (n=20) demonstrated a <strong>40% increase in 
          user performance</strong>. This project bridges learning science with 
          scalable product design, focusing on reducing cognitive load for 
          complex technical tasks.
        </p>
      </div>
    </div>
  </div> */}

  {/* ================= PROJECT 0: CO-DESIGNING INCLUSIVE SOCIAL ROBOTS ================= */}

  <div className={styles['project-persuasive-2']}>
    <p className={styles['persuasive-title']}>
      Co-designing Inclusive Social Robots with Black women with Anxiety and/or Depression
    </p>

    <div className={styles['split-content']}>
      <div className={styles['left-column']}>
        <img 
          className={styles['project-video']} 
          src="/vids/interactive-robot-misty-gif-2.gif" 
          alt="Human engaging with interactive social robot" 
        />
        <p className={styles['media-caption']}>
          Example of an interaction with a prototype of a social robot that supports meaning-making.
        </p>
        <div className={styles['project-date']}>Ongoing</div>
      </div>

      <div className={styles['right-column']}>
        <div className={styles['description-header']}>
              Description 
              <span className={styles['bracket']}> [</span>
              <a href="https://github.com/aboadiag/misty-speculative-prototyping" target="_blank" rel="noopener noreferrer" className={styles['link-text']}>
                github project
              </a>
              <span className={styles['bracket']}>]</span>
            </div>

        <ProjectDescriptionClamp contentClassName={styles['persuasive-blurb']}>
          <p>
            Anxiety and depression being the most common mental health conditions
            experienced by black women (BW) in the US. Still, BW with anxiety and/or depression
            (BWA/D) are under-diagnosed, mis-diagnosed, and under-treated at higher rates than other social groups
            due to structural inequities. In human-robot interaction (HRI), researchers have shown the
            promise of social robots (SRs) for mental well-being. However,
            there is a lack of work exploring the potential of these technologies for BWA/D.
            Still, preliminary evidence suggests the value of engaging BWA/D in the co-design of mental health technologies.
            Furthermore, recent work shows that culturally responsive technology innovation with Black girls
            promotes techno-agency and community development; this suggests that engaging BW in community-focused technology
            innovation is empowering and enables them to construct futures necessary for their social transformation.
            <br />
            <br />
            In this work, I lead two-phase participatory design (PD) workshops to explore how the
            lived experiences of BWA/D can reshape the design of social robot-mediated mental well-being. Across 15 in-person
            PD prototyping sessions, we explore the roles and responsibilities of SRs, features and functionalities,
            and socio-ethical considerations that BWA/D stakeholders envision when ideating about social robot-mediated mental well-being.
          </p>
        </ProjectDescriptionClamp>
      </div>
    </div>
  </div> 



      {/* ================= PROJECT 1: PERSUASIVE ================= */}
      <div className={styles['project-persuasive-2']}>
        <p className={styles['persuasive-title']}>
          Persuasive Social Robots to Encourage Art-making
        </p>

        <div className={styles['split-content']}>
          <div className={styles['left-column']}>
            <video controls className={styles['project-video']}>
              <source src="/vids/persuasive_misty.mp4" type="video/mp4" />
            </video>
            <p className={styles['media-caption']}>
              Two Pilot Participants. Left: Baseline. Right: Context Bandit.
            </p>
            <div className={styles['project-date']}>Fall 2024</div>
          </div>

          <div className={styles['right-column']}>
            <div className={styles['description-header']}>
              Description 
              <span className={styles['bracket']}> [</span>
              <a href="https://github.com/aboadiag/persuasive-misty" target="_blank" rel="noopener noreferrer" className={styles['link-text']}>
                github project
              </a>
              <span className={styles['bracket']}>]</span>
            </div>

            <ProjectDescriptionClamp contentClassName={styles['persuasive-blurb']}>
              <p>
                Visual art-making can support mental wellbeing.
                Task engagement predicts the effectiveness of visual art-making. I implemented a context bandit policy, which contextualizes user &quot;involvement&quot; (a proxy for engagement; low, medium, high),
                to adapt a social robotic coach&apos;s personality (i.e., charismatic/direct vs uncharismatic/indirect)
                with the goal of increasing user engagement. While there are benefits
                of personalized robotic coach feedback during visual art-making activities,
                our work suggests the importance of identifying user-specific context
                (e.g., attention, stress, affect) to enrich feedback personalization policies.
              </p>
            </ProjectDescriptionClamp>
          </div>
        </div>
      </div>

      {/* ================= PROJECT 2: ROBOT MEDIATED ================= */}
      <div className={styles['project-robot-2']}>
        <p className={styles['robot-mediated']}>
          Robot Mediated Haptic Mouse for Co-creation of Non-Visual Aids
          between&nbsp;&nbsp;TVIs &amp; BLV Students
        </p>

        <div className={styles['split-content']}>
          <div className={styles['left-column']}>
            <video controls className={styles['project-video']}>
              <source src="/vids/haptic-mouse-vid.mp4" type="video/mp4" />
            </video>
            <p className={styles['media-caption']}>
              Left: FDM 3D printed 3DoF RUU Delta Rendering a Simple Spring;
              Middle: SLA printed 3 Dof RUU Delta with Capstan Drive Mechanism;
              Right: Capstan-drive, impedence-type mechanism.
            </p>
             <div className={styles['project-date']}>2021-2023</div>
          </div>

          <div className={styles['right-column']}>
            <div className={styles['description-header']}>
              Description 
              <span className={styles['bracket']}> [</span>
              <a href="https://dl.acm.org/doi/pdf/10.1145/3597638.3614512" target="_blank" rel="noopener noreferrer" className={styles['link-text']}>
                ASSETS ‘23
              </a>
              <span className={styles['bracket']}>]</span>
            </div>

            <ProjectDescriptionClamp contentClassName={styles['blurb-4']}>
              <p>
                Inspired by my previous work in accessible haptics,
                I iterated on a robot-mediated haptic mouse&nbsp;&nbsp;to facilitate
                on-demand and iterative adaptation of visual aids used in K-12
                learning to non-visual, particularly haptic modalities. This haptic
                device is an impedance-type kinesthetic device based on an RUU delta
                mechanism.
                <br />
                <br />
                Additionally, I conducted semi-structured interviews with 5 educators --
                all have teacher of students with visual impairment (TVI) experience --
                and identified their considerations when creating adaptations,
                attitudes towards technology, and perspectives on existing barriers to access.
                Our findings reveal and reaffirm unresolved challenges in the adaptation process
                as well as offer insights into key factors that must be considered when selecting the
                type of adaptation. We formulate design recommendations for interactive tools that support
                TVIs in creating effective adaptations for BLV students.
              </p>
            </ProjectDescriptionClamp>
          </div>
        </div>
      </div>

      {/* ================= PROJECT 3: VERSATILE HAPTICS ================= */}
      <div className={styles['project-versatile-2']}>
        <p className={styles['versatile-haptics']}>
           Versatile Haptics
           <span style={{ fontSize: '24px', fontWeight: 400 }}> [Collaboration with Violet Han et al.]</span>
        </p>

        <div className={styles['split-content']}>
            {/* LEFT COLUMN: Both Images Stacked */}
            <div className={styles['left-column']}>
               {/* <div className={styles['versatile-image-stack']}>
                  <div>
                    <img className={styles['vers-haptics-img']} src="/img/vers-haptics-img1-2.png" alt="Prototype 1" />
                    <p className={styles['media-caption']}>Top: Early prototype with vertical motor arrangement.</p>
                  </div>
                  <div>
                    <img className={styles['vers-haptics-img']} src="/img/vers-haptics-img2-2.png" alt="Prototype 2" />
                    <p className={styles['media-caption']}>Bottom: Final Prototype with horizontal motor arrangement.</p>
                  </div>
               </div> */}
                <div className={styles['video-container']}>
              <img
                className={`${styles['project-video']} ${styles['vers-haptics-gif']}`}
                src="/vids/parametric-haptics-vid-gif_v1.gif"
                alt="Gif of Tendon-driven customizable tactor patches with vertical motor arrangement and final version with horizontal motor arrangement"
                decoding="async"
              />
            </div>
            <p className={styles['media-caption']}>
              Tendon-driven customizable tactor patches with vertical motor arrangement &amp; final version with horizontal motor arrangement.
            </p>
               
               <div className={styles['project-date']}>Fall 2023</div>
            </div>

            {/* RIGHT COLUMN: Description Header + Main Text */}
            <div className={styles['right-column']}>
                <div className={styles['description-header']}>
                   Description 
                   <span className={styles['bracket']}> [</span>
                   <a href="https://dl.acm.org/doi/pdf/10.1145/3586183.3606766" target="_blank" rel="noopener noreferrer" className={styles['link-text']}>
                     UIST ‘23
                   </a>
                   <span className={styles['bracket']}>]</span>
                </div>

                <ProjectDescriptionClamp contentClassName={styles['text-wrapper-115']}>
                  <p>
                    We presented Parametric Haptics, customizable and versatile haptic
                    patches that are lightweight, reconfigurable, and can be integrated as
                    wearables or into objects. We linearly actuated the motors by
                    varying the direction of the rotation, the Pulse-Width-Modulation
                    (PWM), and the duration and frequency of the pulses, allowing us to
                    approximate control over the displacement of the tactors and velocity
                    of actuation to achieve a diverse set of tactile sensations. Control
                    strategies can be adapted to elicit desired tactile feedback and
                    incorporate refined control approaches with appropriate hardware consideration.
                  </p>
                </ProjectDescriptionClamp>
            </div>
        </div>
      </div>

      {/* ================= PROJECT 4: ACCESSIBLE HAPTICS ================= */}
      <div className={styles['project-haptics-2']}>
        <p className={styles['accessible-haptics']}>
            Accessible Haptics through Graphics Rendering
            <span style={{ fontSize: '24px', fontWeight: 400 }}> [Collab with A. Brantley, A.F. Siu, &amp; S. Follmer]</span>
        </p>

        <div className={styles['split-content']}>
           <div className={styles['left-column']}>
              <video controls className={styles['project-video']}>
                <source src="/vids/haptic-graphics.mp4 " type="video/mp4" />
              </video>
              <p className={styles['media-caption']}>
                Left: haptic mouse platform. Right: Rendering surface curvature
                through kinesthetic feedback (left) and visually on GUI (right). Note:
                While 2 fingers are placed on the tilt platform, 1 finger is best for
                curvature perception.
              </p>
              <div className={styles['project-date']}>2020-2021</div>
           </div>

           <div className={styles['right-column']}>
              <div className={styles['description-header']}>
                Description 
                <span className={styles['bracket']}> [</span>
                <a href="/pdfs/me-suri-2020-accessible.pdf" target="_blank" rel="noopener noreferrer" className={styles['link-text']}>
                  project poster
                </a>
                <span className={styles['bracket']}>]</span>
              </div>

              <ProjectDescriptionClamp contentClassName={styles['text-wrapper-109']}>
                <p>
                  The preliminary development of a mechanically-actuated, kinesthetic
                  haptic mouse for tactile graphic rendering to assist with remote
                  learning for blind and low vision (BLV) students. It provides
                  kinesthetic feedback to render surfaces and the mechanism is a 3 DOF
                  (height, pitch, yaw) modified Stewart platform. We explore the
                  system&apos;s design, integration, and preliminary implementation. For
                  future work, we proposed the integration of a voice coil actuator
                  (VCA) for haptic texture rendering and a sensor for absolute position
                  tracking.
                </p>
              </ProjectDescriptionClamp>
           </div>
        </div>
      </div>

      </div>

        </div>
      </div>

      <div className={styles.pageFooterWrap}>
        <Footer
          style={{
            position: 'relative',
            top: 'auto',
            left: 0,
            width: '100%',
            maxWidth: '100%',
          }}
        />
      </div>

    </div>
  );
};