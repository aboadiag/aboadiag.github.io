// Projects.jsx
import React from "react";
import { NavBar } from "../../components/NavBar";
import styles from "./Projects.module.css";
import { Footer } from "../../components/Footer";

export const Projects = () => {
  return (
    <div className={styles.projects}>
      
      {/* HEADER */}
      <header className={styles['navbar-container']}>
        <NavBar />
      </header>

      {/* INTRO */}
      <div className={styles['text-wrapper-97']}>select projects.</div>

      <p className={styles['during-my-phd-i-have']}>
        During my PhD, I have had the opportunity to design, fabricate, &amp;
        implement various ideas within the space of HRI &amp; physical
        computing. Some of these projects resulted in publication, others are
        archived here.
        <br />
        <br />
        See some of these&nbsp;&nbsp;projects below.
      </p>

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

            <p className={styles['persuasive-blurb']}>
              Visual art-making can support mental wellbeing.
              Task engagement predicts the effectiveness of visual art-making. I implemented a context bandit policy, which contextualizes user "involvement" (a proxy for engagement; low, medium, high),
              to adapt a social robotic coach's personality (i.e., charismatic/direct vs uncharismatic/indirect) 
              with the goal of increasing user engagement. While there are benefits 
              of personalized robotic coach feedback during visual art-making activities, 
              our work suggests the importance of identifying user-specific context 
              (e.g., attention, stress, affect) to enrich feedback personalization policies.
            </p>
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

            <p className={styles['blurb-4']}>
              Inspired by my previous work in accessible haptics,
              I iterated on a haptic mouse&nbsp;&nbsp;to facilitate
              on-demand and iterative adaptation of visual aids used in K-12
              learning to non-visual, particularly haptic modalities. This haptic
              device is an impedance-type kinesthetic device based on an RUU delta
              mechanism. 
              <br /><br />
              I also conducted semi-structured interviews with TVIs to uncover
              design recommendations for interactive devices to support non-visual
              adaptation.
            </p>
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
               <div className={styles['versatile-image-stack']}>
                  <div>
                    <img className={styles['vers-haptics-img']} src="/img/vers-haptics-img1-2.png" alt="Prototype 1" />
                    <p className={styles['media-caption']}>Left: Early prototype with vertical motor arrangement.</p>
                  </div>
                  <div>
                    <img className={styles['vers-haptics-img']} src="/img/vers-haptics-img2-2.png" alt="Prototype 2" />
                    <p className={styles['media-caption']}>Right: Final Prototype with horizontal motor arrangement.</p>
                  </div>
               </div>
               
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

                <p className={styles['text-wrapper-115']}>
                  We presented Parametric Haptics, customizable and versatile haptic
                  patches that are lightweight, reconfigurable, and can be integrated as
                  wearables or into objects. We linearly actuated the motors by
                  varying the direction of the rotation, the Pulse-Width-Modulation
                  (PWM), and the duration and frequency of the pulses, allowing us to
                  approximate control over the displacement of the tactors and velocity
                  of actuation to achieve a diverse set of tactile sensations.  Control
                  strategies can be adapted to elicit desired tactile feedback and
                  incorporate refined control approaches with appropriate hardware consideration.
                </p>
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

              <p className={styles['text-wrapper-109']}>
                The preliminary development of a mechanically-actuated, kinesthetic
                haptic mouse for tactile graphic rendering to assist with remote
                learning for blind and low vision (BLV) students. It provides
                kinesthetic feedback to render surfaces and the mechanism is a 3 DOF
                (height, pitch, yaw) modified Stewart platform. We explore the
                system’s design, integration, and preliminary implementation. For
                future work, we proposed the integration of a voice coil actuator
                (VCA) for haptic texture rendering and a sensor for absolute position
                tracking.
              </p>
           </div>
        </div>
      </div>

      {/* FOOTER - FIXED: Inline style override forces it to relative/auto */}
      <div style={{ width: '100%' }}>
         <Footer style={{ position: 'relative', top: 'auto' }} />
      </div>

    </div>
  );
};