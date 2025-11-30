// Projects.jsx
import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import styles from "./Projects.module.css";
import { Footer } from "../../components/Footer";

export const Projects = () => {
  return (
    <div className={styles.projects}>
      
      <header>
        <NavBar />
      </header>

      {/* FIX 1: Title ABOVE Intro Text */}
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


      {/* ---------------- PROJECT 1: PERSUASIVE ---------------- */}
      <div className={styles['project-persuasive-2']}>
        
        {/* FIX 2: Title centered above video */}
        <p className={styles['persuasive-title']}>
          Persuasive Social Robots to Encourage Art-making
        </p>

        {/* Flex Container for Left/Right Alignment */}
        <div className={styles['split-content']}>
          
          {/* FIX 3: Left Side - Video + Caption */}
          <div className={styles['left-column']}>
            <video controls className={styles['rectangle-9']}>
              <source src="/vids/persuasive_misty.mp4" type="video/mp4" />
            </video>
            <p className={styles['collage-featuring-co-2']}>
              Two Pilot Participants. Left: Baseline. Right: Context Bandit.
            </p>
          </div>

          {/* FIX 4: Right Side - Description */}
          <div className={styles['right-column']}>
            <p className={styles['persuasive-blurb']}>
              Visual art-making can support mental wellbeing.
              Task engagement predicts the effectiveness of visual art-making. I implemented a context bandit policy, which contextualizes user "involvement"
              to adapt a social robotic coach's personality (i.e., charismatic/direct vs uncharismatic/indirect) 
              with the goal of increasing user engagement.
            </p>

            <p className={styles['div-3']}>
              <span className={styles['text-wrapper-102']}>Description </span>
              <span className={styles['text-wrapper-103']}>[</span>
              <a
                href="https://github.com/aboadiag/persuasive-misty" 
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className={styles['text-wrapper-104']}>github project</span>
              </a>
              <span className={styles['text-wrapper-103']}>]</span>
            </p>

            <div className={styles['spring-fall']}>Fall 2024</div>
          </div>

        </div>
      </div>


      {/* ---------------- PROJECT 2: ROBOT MEDIATED ---------------- */}
      <div className={styles['project-robot-2']}>
        
        {/* FIX 5: Title centered above */}
        <p className={styles['robot-mediated']}>
          Robot Mediated Haptic Mouse for Co-creation of Non-Visual Aids
          between&nbsp;&nbsp;TVIs &amp; BLV Students
        </p>

        <div className={styles['split-content']}>
          
          {/* FIX 6: Video Left */}
          <div className={styles['left-column']}>
             <video controls className={styles['robot-med-haptics-2']}>
              <source src="/vids/haptic-mouse-vid.mp4" type="video/mp4" />
            </video>
             <p className={styles['challenges-of-2']}>
               Left: FDM 3D printed 3DoF RUU Delta; Middle: SLA printed with Capstan Drive; Right: Impedance-type mechanism.
            </p>
          </div>

          {/* FIX 6: Description Right */}
          <div className={styles['right-column']}>
            <p className={styles['blurb-4']}>
              Inspired by my previous work in accessible haptics,
              I iterated on a haptic mouse&nbsp;&nbsp;to facilitate
              on-demand and iterative adaptation of visual aids used in K-12
              learning to non-visual, particularly haptic modalities.
              <br /><br />
              I also conducted semi-structured interviews with TVIs to uncover
              design recommendations for interactive devices to support non-visual
              adaptation.
            </p>

            <p className={styles['div-3']}>
              <span className={styles['text-wrapper-102']}>Description </span>
              <span className={styles['text-wrapper-103']}>[</span>
              <a
                href="https://dl.acm.org/doi/pdf/10.1145/3597638.3614512?casa_token=mncCzpzuYq0AAAAA:1xCrYya7HXN2buCKNvvxFeC1doa1JKVqaVHGaipU4to0iLcyQcNDsUeeXC0THFJZ5DtSOubzx5DJ"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className={styles['text-wrapper-104']}>ASSETS ‘23</span>
              </a>
              <span className={styles['text-wrapper-103']}>]</span>
            </p>
            <div className={styles['spring-fall']}>2021-2023</div>
          </div>
        </div>
      </div>

      {/* FIX 7: Favicon REMOVED (Code deleted here) */}


      {/* ---------------- PROJECT 3: ACCESSIBLE HAPTICS (Re-added) ---------------- */}
      <div className={styles['project-haptics-2']}>
         
         {/* Title Centered */}
         <p className={styles['accessible-haptics']}>
            <span className={styles['text-wrapper-110']}>
              Accessible Haptics through Graphics Rendering{" "}
            </span>
            <span className={styles['text-wrapper-103']}>
              [Collab with A. Brantley, A.F. Siu,&nbsp;&nbsp;&amp; S. Follmer]
            </span>
          </p>

          <div className={styles['split-content']}>
            {/* Video Left */}
             <div className={styles['left-column']}>
               <video controls className={styles['rectangle-12']}>
                <source src="/vids/haptic-graphics.mp4 " type="video/mp4" />
               </video>
               <p className={styles['challenges-of-2']}>
                Left: haptic mouse platform. Right: Rendering surface curvature.
              </p>
             </div>

             {/* Text Right */}
             <div className={styles['right-column']}>
                <p className={styles['text-wrapper-109']}>
                  The preliminary development of a mechanically-actuated, kinesthetic
                  haptic mouse for tactile graphic rendering to assist with remote
                  learning for blind and low vision (BLV) students.
                </p>
                <p className={styles['div-3']}>
                  <span className={styles['text-wrapper-102']}>Description </span>
                  <span className={styles['text-wrapper-103']}>[</span>
                  <a
                    href="static/pdfs/me-suri-2020-accessible.pdf"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className={styles['text-wrapper-104']}>project poster</span>
                  </a>
                  <span className={styles['text-wrapper-103']}>]</span>
                </p>
                <div className={styles['spring-fall']}>2020-2021</div>
             </div>
          </div>
      </div>


      {/* ---------------- PROJECT 4: VERSATILE HAPTICS ---------------- */}
      <div className={styles['project-versatile-2']}>
        
        {/* Title Centered */}
        <p className={styles['versatile-haptics']}>
          <span className={styles['text-wrapper-116']}>Versatile Haptics </span>
          <span className={styles['text-wrapper-103']}>
            [Collaboration with Violet Han et al.]
          </span>
        </p>

        {/* FIX 9: Zig Zag Layout */}
        
        {/* ROW 1: Image Left, Text Right */}
        <div className={styles['zig-zag-row']}>
            <div className={styles['left-column']}>
                <img
                  className={styles['vers-haptics-img']}
                  alt="Early prototype"
                  src="/img/vers-haptics-img1-2.png"
                />
                <p className={styles['text-wrapper-114']}>
                  Left: Early prototype with vertical motor arrangement.
                </p>
            </div>
            
            <div className={styles['right-column']}>
               <p className={styles['text-wrapper-115']}>
                  We presented Parametric Haptics, customizable and versatile haptic
                  patches that are lightweight, reconfigurable, and can be integrated as
                  wearables or into objects. We linearly actuated the motors by
                  varying the direction of the rotation, PWM, duration and frequency.
                </p>
                <div className={styles['spring-fall']}>Fall 2023</div>
            </div>
        </div>

        {/* ROW 2: Text Left, Image Right */}
        <div className={styles['zig-zag-row']}>
            <div className={styles['left-column']}>
                 <p className={styles['text-wrapper-115']}>
                   Right: Final Prototype with horizontal motor arrangement.
                </p>
                 <p className={styles['div-3']}>
                    <span className={styles['text-wrapper-102']}>Description </span>
                    <span className={styles['text-wrapper-103']}>[</span>
                    <a
                      href="https://dl.acm.org/doi/pdf/10.1145/3586183.3606766"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className={styles['text-wrapper-104']}>UIST ‘23</span>
                    </a>
                    <span className={styles['text-wrapper-103']}>]</span>
                  </p>
            </div>
            
            <div className={styles['right-column']}>
                 <img
                  className={styles['vers-haptics-img']}
                  alt="Final prototype"
                  src="/img/vers-haptics-img2-2.png"
                />
            </div>
        </div>

      </div>

      {/* FOOTER */}
      <Footer style={{ position: 'absolute', top: '3850px', width: '100%' }} />

    </div>
  );
};