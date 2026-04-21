// Research.jsx
import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import styles from "./Research.module.css";
import { Footer } from "../../components/Footer";

/** Must match `--research-design-w-px` in Research.module.css */
const RESEARCH_DESIGN_W = 1440;

export const Research = () => {
  const pageRef = useRef(null);
  const scaleWrapRef = useRef(null);
  const innerRef = useRef(null);

  useLayoutEffect(() => {
    const syncArtboardSize = () => {
      const inner = innerRef.current;
      const wrap = scaleWrapRef.current;
      const page = pageRef.current;
      if (!inner || !wrap || !page) return;

      inner.style.removeProperty("--research-design-h-px");
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
      const scale = Math.min(1, vw / RESEARCH_DESIGN_W);

      const footer = page.querySelector("footer");
      const footerH = footer?.offsetHeight ?? 120;
      const pageTopPad = parseFloat(getComputedStyle(page).paddingTop) || 0;
      const available = Math.max(400, vh - footerH - pageTopPad - 32);
      const minDesignH = Math.ceil(available / Math.max(scale, 1e-6));

      const h = Math.max(naturalH, minDesignH);
      inner.style.setProperty("--research-design-h-px", `${h}px`);

      wrap.style.setProperty("--research-scaled-h", `${Math.ceil(h * scale)}px`);
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
    <div ref={pageRef} className={styles.research}>
      
      {/* HEADER */}
      <header className={styles['navbar-container']}>
        <NavBar />
      </header>

      <div ref={scaleWrapRef} className={styles.researchLayoutScale}>
        <div ref={innerRef} className={styles.researchLayoutScaleInner}>
      <div className={styles.researchIntro}>
      {/* TITLE */}
      <h1 className={styles['text-wrapper-127']}>select research.</h1>

      {/* INTRO */}
      <p className={styles['my-research-focuses-3']}>
        <span className={styles['text-wrapper-122']}>
          My research focuses on designing physically embodied and agentic AI that operate in service roles, namely assistive and social robots.&nbsp;&nbsp;I use{" "}
        </span>
        <span className={styles['text-wrapper-124']}>participatory design </span>
        <span className={styles['text-wrapper-122']}>approaches and lead co-design workshops with </span>
        <span className={styles['text-wrapper-124']}>people with disabilities</span>
        <span className={styles['text-wrapper-122']}>
          {" "}
          (PwDs) who are non-roboticists to ensure these processes yield robots and AI systems that are
        </span>
        <span className={styles['text-wrapper-124']}> inclusive, intuitive, safe</span>
        <span className={styles['text-wrapper-122']}>, and </span>
        <span className={styles['text-wrapper-124']}>equitable</span>
        <span className={styles['text-wrapper-122']}> for all.</span>
        {/* <span className={styles['text-wrapper-123']}>&nbsp;&nbsp;these</span>
        <span className={styles['text-wrapper-122']}>
          {" "}
          technologies.  */}
      <span className={styles['text-wrapper-122']}> I also leverage mixed-methods approaches, including{" "}
        </span>
        <span className={styles['text-wrapper-124']}>user-centered design (UCD) practices, </span>
        {/* <span className={styles['text-wrapper-122']}>&nbsp;, </span> */}
        <span className={styles['text-wrapper-124']}>behavioral science </span>
        <span className={styles['text-wrapper-122']}>and </span>
        <span className={styles['text-wrapper-124']}>experimental methods</span>
        {/* <span className={styles['text-wrapper-122']}>
          in my work.
          {/* <br /> */}
          {/* <br />
        </span> */}
        <span className={styles['text-wrapper-122']}>.&nbsp;
          My work has been published at several top-tier conferences and journals in ACM &amp; IEEE, including
          ASSETS, UIST, HRI, RO-MAN, and THRI.&nbsp;&nbsp;See some of this research below.
        </span>
      </p>
      </div>

      <div className={styles.researchProjectStack}>
      {/* ================= RESEARCH 1: DELIVERY ROBOTS ================= */}
      <div className={styles['project-delivery']}>
        
        <p className={styles['project-title']}>
          Co-designing Autonomous Mobility with Local Disabled Adults
        </p>

        <div className={styles['split-content']}>
          {/* LEFT */}
          <div className={styles['left-column']}>
            <img
              className={styles['project-image']}
              alt="Two boxes with co-design process with text: 1 initial workshop:
              OD/LMD experiences and perceptions, and four subfigures showing process 
              and materials generated. additional caption: motivations, advantages, challenges,
              future desires, and early robot ideations. Second box with text: 2 Iterative Participatory Workshops:
              generative activities to extend delivery robot ideations. Additional caption: 
              speculative co-design surfaced varied robot morphologies, functionalities, roles, & socio-technical perspectives."
              src="/img/adr-new-img-website.png"
            />
            <p className={styles['media-caption']}>
              Co-design Process &amp; Delivery Robot Designs Generated.
            </p>
            <div className={styles['project-date']}>Spring - Fall 2025</div>
          </div>

          {/* RIGHT */}
          <div className={styles['right-column']}>
            <div className={styles['description-header']}>
              Description 
              <span className={styles['bracket']}> [</span>
               <a
                href="https://dl.acm.org/doi/epdf/10.1145/3757279.3785567"
                rel="noopener noreferrer"
                target="_blank"
                className={styles['link-text']}
              >
                HRI '26 
              </a>
              <span className={styles['bracket']}>]</span>
              <p className={styles['project-text']}>
                	🏆 Best Paper Honorable Mention
              </p>
            </div>

            <p className={styles['project-text']}>
              On-demand, last-mile delivery (OD/LMD) is used by people with disabilities (PwDs)
              for various reasons. As delivery robots are being introduced into OD/LMD ecosystems,
              PwDs are more likely to encounter them.
              In the U.S. alone, there have been several reports about PwDs'
              negative encounters with delivery robots, necessitating their redesigns.
              Over 2 months, we invited 14 local PwDs to participate in 
              2 phases: focus groups/interviews aimed at capturing their experiences 
              and perspectives on existing OD/LMD solutions;
              and participatory prototyping workshops in which participants 
              iterated on co-designs through up to three in-person sessions and remote diary studies.
              The contributions of this work are twofold: (1) varied designs for delivery robots, including 
              different form factors, features, &amp; interaction modalities; and 
              (2) community-informed considerations that roboticists &amp; designers 
              should incorporate when designing ADRs. 
            </p>
          </div>
        </div>
      </div>

      {/* ================= RESEARCH 2: IS4HRA ================= */}
      <div className={styles['project-ishra']}>
        
        <p className={styles['project-title']}>
          Investigating Human-Robot Synchrony in Collborative Art-Making
        </p>

        <div className={styles['split-content']}>
          {/* LEFT */}
          <div className={styles['left-column']}>
            <div className={styles['video-container']}>
                <video controls className={styles['project-video']}>
                  <source src="/vids/IS4HRA_Supplemental.mp4" type="video/mp4" />
                </video>
            </div>
            <p className={styles['media-caption']}>
              Video featuring Control &amp; Experimental Conditions.
            </p>
            <div className={styles['project-date']}>Fall 2024 - Spring 2025</div>
          </div>

          {/* RIGHT */}
          <div className={styles['right-column']}>
            <div className={styles['description-header']}>
              Description 
              <span className={styles['bracket']}> [</span>
              <a
                href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11217674"
                rel="noopener noreferrer"
                target="_blank"
                className={styles['link-text']}
              >
                RO-MAN ‘25
              </a>
              <span className={styles['bracket']}>]</span>
            </div>

            <p className={styles['project-text']}>
              Interpersonal synchrony (IS), the behavioral &amp; physiological 
              coordination across time and space, plays a crucial role in social 
              interactions by fostering empathy, closeness, &amp; prosocial behaviors. 
              We investigated the impact of IS on human raters’ perceptions of a human-robot (HR) dyad engaged in a joint painting activity.
              We conducted two online studies (n = 70, total) in which participants watched 4 videos.
              We varied the degree of IS displayed by an HR dyad on two axes: (a) temporal alignment (e.g., speed of producing brush strokes) 
              &amp; (b) spatial similarity (i.e., similarity in the visual content produced).
              Our results indicate that some temporal &amp; spatial dimensions of IS displayed by an HR dyad 
              during joint painting have significant positive impacts on external observers’ perceptions of the robot, 
              including prosocial tendencies (i.e., empathy, synchrony, and closeness) and acceptance. 
              These findings are significant for emergent research on collaborative robots.
            </p>
          </div>
        </div>
      </div>

      {/* ================= RESEARCH 3: GUIDE ROBOTS ================= */}
      <div className={styles['project-guide']}>
        <p className={styles['project-title']}>
          Co-designing Robotic Mobility Aids with Adults with Visual Disabilities
        </p>

        <div className={styles['split-content']}>
          <div className={styles['left-column']}>
            <img
              className={styles['project-image']}
              alt="Two boxes with co-design process with text: 1 robot interaction. Photograph of 
              man walking with guide robot prototype. Additional caption: interactions with guide robot prototype as mutual learning.
              Second box with text: 2 Participatory Design: Interviews, Scenario-based Design, &amp; Dialogue Simulations. 
              Diagram of overlapping factors: Usability, Shared Robot Control, and Safeguarding User Safety Perceptions.
              Additional caption:key factors for user trust, safety, and comfort while using guide robot in public."
              src="/img/guide-robot-new-img-website.png"
            />
            <p className={styles['media-caption']}>
              Two-phase user study. Left: Robot Interaction. Right: Participatory Design Process &amp; Outcomes.
            </p>
            <div className={styles['project-date']}>Summer 2023 - Fall 2023</div>
          </div>

          {/* RIGHT */}
          <div className={styles['right-column']}>
            <div className={styles['description-header']}>
              Description 
              <span className={styles['bracket']}> [</span>
              <a
                href="https://dl.acm.org/doi/pdf/10.1145/3750054"
                rel="noopener noreferrer"
                target="_blank"
                className={styles['link-text']}
              >
                ACM THRI ‘25
              </a>
              <span className={styles['bracket']}>]</span>
            </div>

            <p className={styles['project-text']}>
              Navigating through unfamiliar environments is a challenging task.
              For people who are blind or have low vision (BLV), 
              navigation can be particularly daunting. 
              Guide robots are a type of service robot that can assist BLV people with navigation tasks.
              We conducted a user study with 16 BLV 
              participants to co-design guide robots that enhance BLV users’ sense of orientation, perceived safety, and comfort. 
              We conducted semi-structured interviews and participatory design (PD) sessions with each of the participants. 
              The PD sessions utilized a scenario-based design (SBD) approach 
              aimed at identifying ideal features and functionality of guide robots and a dialogue simulated activity to verify these requirements. 
              We identified three key themes that serve as design considerations for future robotic mobility aids for BLV people:
              (1) features that enhance the usability of guide robot systems;
              factors that (2) influence BLV users’ desires for shared robot control;
              and (3) enhance BLV users’ perceived safety in public settings.
            </p>
          </div>
        </div>
      </div>

      {/* ================= RESEARCH 4: VOICE AGENTS ================= */}
      <div className={styles['project-voice']}>
        <p className={styles['project-title']}>
          Designing Voice Agents for Emotional Wellbeing in the Workplace
        </p>

        <div className={styles['split-content']}>
          <div className={styles['left-column']}>
            <div className={styles['video-container']}>
              <video controls className={styles['project-video']}>
                <source src="/vids/voice_agent_4_artmaking-2.mp4" type="video/mp4" />
              </video>
              {/* Blur Overlay REMOVED */}
            </div>
            <p className={styles['media-caption']}>
              Pilot participant engaged in voice-agent guided art-making.
            </p>
            <div className={styles['project-date']}>Fall 2023</div>
          </div>

          <div className={styles['right-column']}>
            <div className={styles['description-header']}>
              Description 
              <span className={styles['bracket']}> [</span>
              <a
                href="https://dl.acm.org/doi/pdf/10.1145/3610978.3640600"
                rel="noopener noreferrer"
                target="_blank"
                className={styles['link-text']}
              >
                HRI Companion ‘24
              </a>
              <span className={styles['bracket']}>]</span>
            </div>

            <p className={styles['project-text']}>
            Workplaces are high-pressure environments that lead to occupational stress and anxiety. 
            Still, there are few deliberate opportunities for employees to regulate their emotional state in the workplace. 
            We present a voice agent to guide a users through a therapeutic art-making intervention
            and promote emotion regulation within the workplace. We use a Wizard-of-Oz (WoZ)
            methodology to conduct pilot studies in which we evaluate the voice agent-guided interactions
            to that of a self-guided interaction. We share preliminary insights regarding the design 
            of our voice agent, including the importance of embodiment and personalization. 
            We also share insights about the feasibility of our proposed user study, 
            which is aimed at evaluating the effectiveness of our voice agent at promoting emotion regulation 
            in employees through therapeutic art-making.
            </p>
          </div>
        </div>
      </div>

      </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className={styles.pageFooterWrap}>
         <Footer style={{ position: 'relative', top: 'auto' }} />
      </div>

    </div>
  );
};