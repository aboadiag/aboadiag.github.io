// Projects.jsx
import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import styles from "./Projects.module.css";
import { Footer } from "../../components/Footer";

export const Projects = () => {
  return (
    <div className={styles.projects}>
      
      {/* 1. Header / Navigation */}
      <header className={styles['header-wrapper']}>
        <NavBar />
      </header>

      {/* 2. Intro Text */}
      <p className={styles['during-my-phd-i-have']}>
        During my PhD, I have had the opportunity to design, fabricate, &amp;
        implement various ideas within the space of HRI &amp; physical
        computing. Some of these projects resulted in publication, others are
        archived here.
        <br />
        <br />
        See some of these&nbsp;&nbsp;projects below.
      </p>

      <div className={styles['text-wrapper-97']}>select projects.</div>

      {/* ---------------- PROJECT 1: Persuasive Social Robots ---------------- */}
      <div className={styles['project-persuasive-2']}>
        
        {/* Left Side: Video */}
        <video controls className={styles['rectangle-9']} aria-label="Video demonstrating persuasive robot personalities">
          <source src="/vids/persuasive_misty.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Right Side: Content */}
        <div className={styles['text-content']}>
          <p className={styles['persuasive-title']}>
            Persuasive Social Robots to Encourage Art-making
          </p>

          <p className={styles['persuasive-blurb']}>
            Visual art-making can support mental wellbeing.
            Task engagement predicts the effectiveness of visual art-making. I implemented a context bandit policy, which contextualizes user "involvement" (a proxy for engagement; low, medium, high),
            to adapt a social robotic coach's personality (i.e., charismatic/direct vs uncharismatic/indirect) 
            with the goal of increasing user engagement. While there are benefits 
            of personalized robotic coach feedback during visual art-making activities, 
            our work suggests the importance of identifying user-specific context 
            (e.g., attention, stress, affect) to enrich feedback personalization policies.
          </p>

          <p className={styles['div-3']}>
            <span className={styles['text-wrapper-102']}>Description </span>
            <span className={styles['text-wrapper-103']}>[</span>
            <a
              href="https://github.com/aboadiag/persuasive-misty" 
              rel="noopener noreferrer"
              target="_blank"
              className={styles['link-text']}
            >
              github project
            </a>
            <span className={styles['text-wrapper-103']}>]</span>
          </p>

          <div className={styles['spring-fall']}>Fall 2024</div>
          <p className={styles['collage-featuring-co-2']}>
            Two Pilot Participants. Left: Baseline. Right: Context Bandit.
          </p>
        </div>
      </div>

      {/* ---------------- PROJECT 2: Robot Mediated Haptics ---------------- */}
      <div className={styles['project-robot-2']}>
        
        {/* Left Side: Content (Text First in layout, but flex-direction might swap on mobile) */}
        <div className={styles['text-content']}>
           <p className={styles['robot-mediated']}>
            Robot Mediated Haptic Mouse for Co-creation of Non-Visual Aids
            between&nbsp;&nbsp;TVIs &amp; BLV Students
          </p>

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

          <p className={styles['div-3']}>
            <span className={styles['text-wrapper-102']}>Description </span>
            <span className={styles['text-wrapper-103']}>[</span>
            <a
              href="https://dl.acm.org/doi/pdf/10.1145/3597638.3614512?casa_token=mncCzpzuYq0AAAAA:1xCrYya7HXN2buCKNvvxFeC1doa1JKVqaVHGaipU4to0iLcyQcNDsUeeXC0THFJZ5DtSOubzx5DJ"
              rel="noopener noreferrer"
              target="_blank"
              className={styles['link-text']}
            >
              ASSETS ‘23
            </a>
            <span className={styles['text-wrapper-103']}>]</span>
          </p>
          
           <div className={styles['text-wrapper-105']}>2021-2023</div>
        </div>

        {/* Right Side: Video */}
        <div className={styles['media-content']}>
          <video controls className={styles['robot-med-haptics-2']} aria-label="Video demonstrating haptic mouse versions">
            <source src="/vids/haptic-mouse-vid.mp4" type="video/mp4" />
          </video>
          <p className={styles['challenges-of-2']}>
             Left: FDM 3D printed 3DoF RUU Delta; Middle: SLA printed with Capstan Drive; Right: Impedance-type mechanism.
          </p>
        </div>
      </div>

      {/* Divider / Logo Break */}
      <div className={styles['name-component-2']}>
        <img
          className={styles['bena-favicon-figma-4']}
          alt="Bena favicon figma"
          src="/img/bena-favicon-figma-1-2.png"
        />
        <div className={styles['text-wrapper-108']}>Abena Boadi-Agyemang</div>
      </div>

      {/* ---------------- PROJECT 3: Haptic Graphics ---------------- */}
      <div className={styles['project-haptics-2']}>
        {/* Left Side: Video */}
        <div className={styles['media-content']}>
             <video controls className={styles['rectangle-12']} aria-label="Video of haptic graphics rendering">
                <source src="/vids/haptic-graphics.mp4 " type="video/mp4" />
             </video>
             <p className={styles['text-wrapper-113']}>
               Left: haptic mouse platform. Right: Rendering surface curvature through kinesthetic feedback.
             </p>
        </div>

        {/* Right Side: Content */}
        <div className={styles['text-content']}>
           <p className={styles['accessible-haptics']}>
            <span className={styles['text-wrapper-110']}>
              Accessible Haptics through Graphics Rendering{" "}
            </span>
            <span className={styles['text-wrapper-103']}>
              [Collab with A. Brantley, A.F. Siu,&nbsp;&nbsp;&amp; S. Follmer]
            </span>
          </p>

          <p className={styles['text-wrapper-109']}>
            The preliminary development of a mechanically-actuated, kinesthetic
            haptic mouse for tactile graphic rendering to assist with remote
            learning for blind and low vision (BLV) students. It provides
            kinesthetic feedback to render surfaces and the mechanism is a 3 DOF
            (height, pitch, yaw) modified Stewart platform.
          </p>

          <div className={styles['text-wrapper-112']}>2020-2021</div>

          <p className={styles['div-3']}>
            <span className={styles['text-wrapper-102']}>Description </span>
            <span className={styles['text-wrapper-103']}>[</span>
            <a
              href="static/pdfs/me-suri-2020-accessible.pdf"
              rel="noopener noreferrer"
              target="_blank"
              className={styles['link-text']}
            >
              project poster
            </a>
            <span className={styles['text-wrapper-103']}>]</span>
          </p>
        </div>
      </div>

      {/* ---------------- PROJECT 4: Versatile Haptics ---------------- */}
      <div className={styles['project-versatile-2']}>
         {/* Left Side: Content */}
         <div className={styles['text-content']}>
            <p className={styles['versatile-haptics']}>
              <span className={styles['text-wrapper-116']}>Versatile Haptics </span>
              <span className={styles['text-wrapper-103']}>
                [Collaboration with Violet Han et al.]
              </span>
            </p>

            <p className={styles['text-wrapper-115']}>
              We presented Parametric Haptics, customizable and versatile haptic
              patches that are lightweight, reconfigurable, and can be integrated as
              wearables or into objects. We linearly actuated the motors by
              varying the direction of the rotation, PWM, duration and frequency.
            </p>

            <p className={styles['description-UIST-2']}>
              <span className={styles['text-wrapper-102']}>Description </span>
              <span className={styles['text-wrapper-103']}>[</span>
              <a
                href="https://dl.acm.org/doi/pdf/10.1145/3586183.3606766"
                rel="noopener noreferrer"
                target="_blank"
                className={styles['link-text']}
              >
                UIST ‘23
              </a>
              <span className={styles['text-wrapper-103']}>]</span>
            </p>
            <div className={styles['text-wrapper-117']}>Fall 2023</div>
         </div>

         {/* Right Side: Images */}
         <div className={styles['media-content']}>
            <img
              className={styles['vers-haptics-2']}
              alt="Prototype with horizontal motor arrangement"
              src="/img/vers-haptics-img1-2.png"
            />
             <p className={styles['text-wrapper-114']}>
               Left: Early prototype with vertical motor arrangement.
             </p>
            
            <img
              className={styles['vers-haptics-3']}
              alt="Final wearable prototype"
              src="/img/vers-haptics-img2-2.png"
              style={{marginTop: '20px'}}
            />
            <p className={styles['right-final-2']}>
               Right: Final Prototype with horizontal motor arrangement.
             </p>
         </div>
      </div>

      {/* 3. Footer Section - Natural Flow */}
      <div className={styles['footer-container']}>
         <div className={styles['text-wrapper-118']}>
              <a href="mailto:aboadiag@andrew.cmu.edu"  style={{ textDecoration: "none", color: "inherit" }}>
              aboadiag@andrew.cmu.edu
              </a>
          </div>
          <Footer />
      </div>

    </div>
  );
};