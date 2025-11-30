// Projects.jsx
import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import styles from "./Projects.module.css";
import { Footer } from "../../components/Footer";

export const Projects = () => {
  return (
    <div className={styles.projects}>
      
      {/* HEADER */}
      <header>
        <NavBar />
      </header>

      {/* INTRO TEXT */}
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

      {/* -------- PROJECT 1: Persuasive -------- */}
      <div className={styles['project-persuasive-2']}>
        <div className={styles['we-used-various-2']}>{""}</div>

        <video controls width="800" className={styles['rectangle-9']}>
          <source src="/vids/persuasive_misty.mp4" type="video/mp4" />
          Split screen video. Left is the baseline bandit and participant. Right is the context bandit and participant.
        </video>

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
          >
            <span className={styles['text-wrapper-104']}>github project</span>
          </a>
          <span className={styles['text-wrapper-103']}>]</span>
        </p>

        <div className={styles['spring-fall']}>Fall 2024</div>

        <p className={styles['collage-featuring-co-2']}>
          Two Pilot Participants. Left: Baseline. Right: Context Bandit.
        </p>
      </div>

      {/* -------- PROJECT 2: Robot Mediated -------- */}
      <div className={styles['project-robot-2']}>
        <div className={styles['rectangle-10']} />

        <p className={styles['blurb-4']}>
          <br />
          Inspired by my previous work in accessible haptics,
          I iterated on a haptic mouse&nbsp;&nbsp;to facilitate
          on-demand and iterative adaptation of visual aids used in K-12
          learning to non-visual, particularly haptic modalities. This haptic
          device is an impedance-type kinesthetic device based on an RUU delta
          mechanism. <br />
          <br />I also conducted semi-structured interviews with TVIs to uncover
          design recommendations for interactive devices to support non-visual
          adaptation.
        </p>

        <p className={styles['robot-mediated']}>
          Robot Mediated Haptic Mouse for Co-creation of Non-Visual Aids
          between&nbsp;&nbsp;TVIs &amp; BLV Students
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

        <video controls width="800" className={styles['robot-med-haptics-2']}>
          <source src="/vids/haptic-mouse-vid.mp4" type="video/mp4" />
          Videos demonstrating 2 versions of the haptic mouse.
        </video>
        
        <div className={styles['text-wrapper-105']}>2021-2023</div>

        <p className={styles['challenges-of-2']}>
          <span className={styles['text-wrapper-106']}>
            Challenges of Fabricating miniature haptic devices &amp; the range
            of sizes &amp; material flexibility/rigidity. {""} 
          </span>
          <span className={styles['text-wrapper-107']}>
            Left: FDM 3D printed 3DoF RUU Delta Rendering a Simple Spring;
            Middle: SLA printed 3 Dof RUU Delta with Capstan Drive Mechanism;
            Right: Capstan-drive, impedence-type mechanism.
          </span>
        </p>
      </div>

      {/* DIVIDER */}
      <div className={styles['name-component-2']}>
        <img
          className={styles['bena-favicon-figma-4']}
          alt="Bena favicon figma"
          src="/img/bena-favicon-figma-1-2.png"
        />
        <div className={styles['text-wrapper-108']}>Abena Boadi-Agyemang</div>
      </div>

      {/* -------- PROJECT 3: Haptic Graphics -------- */}
      <div className={styles['project-haptics-2']}>
        <div className={styles['rectangle-11']} />

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

        <video controls width="800" className={styles['rectangle-12']}>
          <source src="/vids/haptic-graphics.mp4 " type="video/mp4" />
          Three figure video.
        </video>

        <p className={styles['accessible-haptics']}>
          <span className={styles['text-wrapper-110']}>
            Accessible Haptics through Graphics Rendering{" "}
          </span>
          <span className={styles['text-wrapper-103']}>
            [Collab with A. Brantley, A.F. Siu,&nbsp;&nbsp;&amp; S. Follmer]
          </span>
        </p>

        <div className={styles['text-wrapper-112']}>2020-2021</div>

        <p className={styles['text-wrapper-113']}>
          Left: haptic mouse platform. Right: Rendering surface curvature
          through kinesthetic feedback (left) and visually on GUI (right). Note:
          While 2 fingers are placed on the tilt platform, 1 finger is best for
          curvature perception.
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
      </div>

      {/* -------- PROJECT 4: Versatile Haptics -------- */}
      <div className={styles['project-versatile-2']}>
        <div className={styles['rectangle-13']} />

        <p className={styles['text-wrapper-114']}>
          Left: Early prototype with vertical motor arrangement.
        </p>

        <p className={styles['text-wrapper-115']}>
          We presented Parametric Haptics, customizable and versatile haptic
          patches that are lightweight, reconfigurable, and can be integrated as
          wearables or into objects. For our demonstration, we implemented a
          simple, open-loop control strategy. We linearly actuated the motors by
          varying the direction of the rotation, the Pulse-Width-Modulation
          (PWM), and the duration and frequency of the pulses, allowing us to
          approximate control over the displacement of the tactors and velocity
          of actuation to achieve a diverse set of tactile sensations.  Control
          strategies can be adapted to elicit desired tactile feedback and
          incorporate refined control approaches with appropriate hardware consideration.
        </p>

        <img
          className={styles['vers-haptics-2']}
          alt="Photograph of early wearable prototype"
          src="/img/vers-haptics-img1-2.png"
        />

        <p className={styles['versatile-haptics']}>
          <span className={styles['text-wrapper-116']}>Versatile Haptics </span>
          <span className={styles['text-wrapper-103']}>
            [Collaboration with Violet Han et al.]
          </span>
        </p>

        <p className={styles['description-UIST-2']}>
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

        <div className={styles['text-wrapper-117']}>Fall 2023</div>

        <img
          className={styles['vers-haptics-3']}
          alt="Photograph of final wearable prototype"
          src="/img/vers-haptics-img2-2.png"
        />
      </div>

      <p className={styles['right-final-2']}>
        {" "}
        Right: Final Prototype with horizontal motor arrangement.
      </p>

      {/* FOOTER */}
      {/* Positioned Absolutely to match your layout flow */}
      <Footer style={{ position: 'absolute', top: '3650px', width: '100%' }} />

    </div>
  );
};