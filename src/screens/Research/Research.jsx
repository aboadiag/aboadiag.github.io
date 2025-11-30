// Research.jsx
import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import styles from "./Research.module.css";
import { Footer } from "../../components/Footer";

export const Research = () => {
  return (
    <div className={styles.research}>
      
      {/* HEADER */}
      <header className={styles['navbar-container']}>
        <NavBar />
      </header>

      {/* TITLE */}
      <div className={styles['text-wrapper-127']}>select research.</div>

      {/* INTRO */}
      <p className={styles['my-research-focuses-3']}>
        <span className={styles['text-wrapper-122']}>
          My research focuses on designing assistive robots and supportive
          agents.&nbsp;&nbsp;I commonly{" "}
        </span>
        <span className={styles['text-wrapper-124']}>cooperatively design</span>
        <span className={styles['text-wrapper-122']}> (“co-design) with</span>
        <span className={styles['text-wrapper-125']}> people with disabilities</span>
        <span className={styles['text-wrapper-122']}>
          {" "}
          (PwDs) who are non-professional designers to ensure more
        </span>
        <span className={styles['text-wrapper-125']}> equitable experiences</span>
        <span className={styles['text-wrapper-122']}> with</span>
        <span className={styles['text-wrapper-123']}>&nbsp;&nbsp;accessible</span>
        <span className={styles['text-wrapper-122']}>
          {" "}
          robotic/agentic interfaces. I use{" "}
        </span>
        <span className={styles['text-wrapper-124']}>participatory design,</span>
        <span className={styles['text-wrapper-122']}>&nbsp;</span>
        <span className={styles['text-wrapper-124']}>user-centered design (UCD), </span>
        <span className={styles['text-wrapper-122']}>and </span>
        <span className={styles['text-wrapper-124']}>experimental methods </span>
        <span className={styles['text-wrapper-122']}>
          in my work. <br />
          <br />
          My work has been{" "}
        </span>
        <span className={styles['text-wrapper-126']}>published</span>
        <span className={styles['text-wrapper-122']}>
          {" "}
          at several top tier conferences in ACM &amp;&nbsp;&nbsp;IEEE, such as
          SIGACCESS, UIST, HRI, RO-MAN, and journals, such as
          THRI.&nbsp;&nbsp;See some of these research projects below.
        </span>
      </p>

      {/* ================= RESEARCH 1: DELIVERY ROBOTS ================= */}
      <div className={styles['project-delivery']}>
        
        <p className={styles['project-title']}>
          Co-designing Delivery Robots with Local PwDs
        </p>

        <div className={styles['split-content']}>
          {/* LEFT */}
          <div className={styles['left-column']}>
            <img
              className={styles['project-image']}
              alt="Four subfigures showing co-design workshops"
              src="/img/rectangle-28-8.png"
            />
            <p className={styles['media-caption']}>
              Collage featuring Co-Design Workshops &amp; Designs Generated.
            </p>
            <div className={styles['project-date']}>Spring - Fall 2025</div>
          </div>

          {/* RIGHT */}
          <div className={styles['right-column']}>
            <div className={styles['description-header']}>
              Description 
              <span className={styles['bracket']}> [</span>
              <span className={styles['link-text']}>under review</span>
              <span className={styles['bracket']}>]</span>
            </div>

            <p className={styles['project-text']}>
              We used various participatory design approaches to co-design
              delivery robots for use by local PwDs. Our work provides design
              recommendations for robotics practitioners, including the importance
              of diverse robot form factors &amp; functionalities to enable
              delivery robots to operate in different environments &amp; perform a
              variety of delivery-related tasks.
            </p>
          </div>
        </div>
      </div>

      {/* ================= RESEARCH 2: IS4HRA ================= */}
      <div className={styles['project-ishra']}>
        
        <p className={styles['project-title']}>
          Human-Robot Synchrony in Joint Painting
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
              Interpersonal synchrony (IS) is the temporal coordination of behaviors
              over space &amp; time. IS is underexplored in visual art-making
              activities, especially in HRI. We investigated the impact of perceived
              IS in human-robot painting on human perceptions. Our work suggests the
              importance of some dimensions of IS on measures related to robot
              acceptance.
            </p>
          </div>
        </div>
      </div>

      {/* ================= RESEARCH 3: GUIDE ROBOTS ================= */}
      <div className={styles['project-guide']}>
        <p className={styles['project-title']}>
          Co-designing Guide Robots with People who are Blind &amp; Low Vision (pBLVs)
        </p>

        <div className={styles['split-content']}>
          <div className={styles['left-column']}>
            <img
              className={styles['project-image']}
              alt="Participant walking with guide robot prototype"
              src="/img/rectangle-28-11.png"
            />
            <p className={styles['media-caption']}>
              Participant engaging with our guide robot prototype.
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
              We used scenario-based design &amp; dialogue simulations to
              co-design with 16 pBLVs guide robots to support navigation in public
              settings. Our work provides design recommendations for roboticists
              &amp; interface designers, including robotic behaviors and features
              related to guide robot usability, shared-robot control, and factors
              to improve BLV users perceptions of safety when using guide robots
              in public.
            </p>
          </div>
        </div>
      </div>

      {/* ================= RESEARCH 4: VOICE AGENTS ================= */}
      <div className={styles['project-voice']}>
        <p className={styles['project-title']}>
          Voice Agent Guided Art-Making for Emotion Regulation
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
              Visual art-making can help support emotion regulation for many people;
              however, few works seldom explore opportunities for art-making to
              reduce occupational stress. We designed a preliminary voice agent with
              definite voice characteristics to guide a human through an therapeutic
              art-making activity.
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ width: '100%' }}>
         <Footer style={{ position: 'relative', top: 'auto' }} />
      </div>

    </div>
  );
};