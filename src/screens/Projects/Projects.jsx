import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <div className="projects">
      <p className="during-my-phd-i-have">
        During my PhD, I have had the opportunity to design, fabricate, &amp;
        implement various ideas within the space of HRI &amp; physical
        computing. Some of these projects resulted in publication, others are
        archived here.
        <br />
        <br />
        See some of these&nbsp;&nbsp;projects below.
      </p>

      <div className="text-wrapper-97">select projects.</div>

      {/* <div className="navbar-3">
        <div className="text-wrapper-98">Home</div>

        <Link className="text-wrapper-99" to="/artpage">
          Research
        </Link>

        <div className="text-wrapper-100">Projects</div>

        <div className="text-wrapper-101">Art</div>
      </div> */}

        <header>
          {/* The NavBar component includes the site logo and title internally. */}
          <NavBar className={styles.navbar} />
        </header>


      <div className="project-persuasive-2">
        <div className="we-used-various-2">{""}</div>

        {/* <img
          className="rectangle-9"
          alt="Rectangle"
          src="/img/rectangle-28-8.png"
        /> */}

        <video controls width="800" className="rectangle-9">
        <source src="/vids/persuasive_misty.mp4" type="video/mp4" />
        Split screen video. Left is the baseline bandit and participant. Right is the context bandit and participant.
        The audio demonstrates the "charismatic/direct" robot personality.
      </video>

        <p className="persuasive-title">
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

        <p className="div-3">
          <span className="text-wrapper-102">Description </span>
          <span className="text-wrapper-103">[</span>
          <a
         href="https://github.com/aboadiag/persuasive-misty" 
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="text-wrapper-104">github project</span>
          </a>

          <span className="text-wrapper-103">]
          </span>
        </p>

        <div className="spring-fall">Fall 2024</div>

        <p className="collage-featuring-co-2">
          Two Pilot Participants. Left: Baseline. Right: Context Bandit.
        </p>
      </div>

      <div className="project-robot-2">
        <div className="rectangle-10" />

        <p className="blurb-4">
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

        <p className="robot-mediated">
          Robot Mediated Haptic Mouse for Co-creation of Non-Visual Aids
          between&nbsp;&nbsp;TVIs &amp; BLV Students
        </p>

        <p className="div-3">
          <span className="text-wrapper-102">Description </span>

          <span className="text-wrapper-103">[</span>

          <a
            href="https://dl.acm.org/doi/pdf/10.1145/3597638.3614512?casa_token=mncCzpzuYq0AAAAA:1xCrYya7HXN2buCKNvvxFeC1doa1JKVqaVHGaipU4to0iLcyQcNDsUeeXC0THFJZ5DtSOubzx5DJ"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="text-wrapper-104">ASSETS ‘23</span>
          </a>

          <span className="text-wrapper-103">]</span>
        </p>
{/* 
        <img
          className="robot-med-haptics-2"
          alt="Robot med haptics"
          src="/img/robot-med-haptics-img-2.svg"
        /> */}

    <video controls width="800" className="robot-med-haptics-2">
        <source src="/vids/haptic-mouse-vid.mp4" type="video/mp4" />
        Videos demonstrating 2 versions of the haptic mouse. The left is a flexible delta. a human presses the delta's end-effector
        and it bounces back; the middle figure is a static image showing the minature delta; right figure is the miniature delta's
        capstan-driven mechanism, which is back driveable.
      </video>
        

        <div className="text-wrapper-105">2021-2023</div>

        <p className="challenges-of-2">
          <span className="text-wrapper-106">
            Challenges of Fabricating miniature haptic devices &amp; the range
            of sizes &amp; material flexibility/rigidity. {""} 
          </span>

          <span className="text-wrapper-107">
            Left: FDM 3D printed 3DoF RUU Delta Rendering a Simple Spring;
            Middle: SLA printed 3 Dof RUU Delta with Capstan Drive Mechanism;
            Right: Capstan-drive, impedence-type mechanism.
          </span>
        </p>
      </div>

      <div className="name-component-2">
        <img
          className="bena-favicon-figma-4"
          alt="Bena favicon figma"
          src="/img/bena-favicon-figma-1-2.png"
        />

        <div className="text-wrapper-108">Abena Boadi-Agyemang</div>
      </div>

      {/* ---- PROJECT HAPTIC GRAPHICS ---- */}
      <div className="project-haptics-2">
        <div className="rectangle-11" />

        <p className="text-wrapper-109">
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

        {/* <img
          className="rectangle-12"
          alt="Rectangle"
          src="/img/rectangle-28-9.svg"
        /> */}
        <video controls width="800" className="rectangle-12">
        <source src="/vids/haptic-graphics.mp4 " type="video/mp4" />
          Three figure video. The first subfigure is a static image with a hand on the end-effector of the haptic mouse. There
          is an enlarged subfigure of the same mechanism to the right. The left video is split into two. The first is a person with two
          fingers on the robot's end-effector as it renders a curved surface. The right screen shows the GUI of the curved surface.
          </video>

        <p className="accessible-haptics">
          <span className="text-wrapper-110">
            Accessible Haptics through Graphics Rendering{" "}
          </span>

          <span className="text-wrapper-103">
            [Collab with A. Brantley, A.F. Siu,&nbsp;&nbsp;&amp; S. Follmer]
          </span>
        </p>

        {/* <div className="text-wrapper-111">Description</div> */}

        <div className="text-wrapper-112">2020-2021</div>

        <p className="text-wrapper-113">
          Left: haptic mouse platform. Right: Rendering surface curvature
          through kinesthetic feedback (left) and visually on GUI (right). Note:
          While 2 fingers are placed on the tilt platform, 1 finger is best for
          curvature perception.
        </p>
         {/* NEW: project poster link (opens PDF in a new tab) */}
        <p className="div-3">
          <span className="text-wrapper-102">Description </span>
          <span className="text-wrapper-103">[</span>
          <a
            href="static\pdfs\me-suri-2020-accessible.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="text-wrapper-104">project poster</span>
          </a>
          <span className="text-wrapper-103">]</span>
        </p>
      </div>

      {/* ---- PROJECT HAPTIC GRAPHICS ---- */}

      {/* ---- PROJECT VERSATILE HAPTICS ---- */}


      <div className="project-versatile-2">
        <div className="rectangle-13" />

        <p className="text-wrapper-114">
          Left: Early prototype with vertical motor arrangement.
        </p>

        <p className="text-wrapper-115">
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
          className="vers-haptics-2"
          alt="Photograph of early wearable prototype on person's arm. Horizontal motor arrangement"
          src="/img/vers-haptics-img1-2.png"
        />

        <p className="versatile-haptics">
          <span className="text-wrapper-116">Versatile Haptics </span>

          <span className="text-wrapper-103">
            [Collaboration with Violet Han et al.]
          </span>
        </p>


        <p className="description-UIST-2">
          <span className="text-wrapper-102">Description </span>

          <span className="text-wrapper-103">[</span>

          <a
            href="https://dl.acm.org/doi/pdf/10.1145/3586183.3606766"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="text-wrapper-104">UIST ‘23</span>
          </a>

          <span className="text-wrapper-103">]</span>
        </p>

        <div className="text-wrapper-117">Fall 2023</div>

        <img
          className="vers-haptics-3"
          alt="Photograph of final wearable prototype on person's arm. vertical motor arrangement"
          src="/img/vers-haptics-img2-2.png"
        />
      </div>

      <p className="right-final-2">
        {" "}
        Right: Final Prototype with horizontal motor arrangement.
      </p>

      {/* ---- PROJECT VERSATILE HAPTICS ---- */}

      <div className="group-wrapper">
        <div className="group-7">
          <div className="text-wrapper-118">
              <a href="mailto:aboadiag@andrew.cmu.edu"  style={{ textDecoration: "none", color: "inherit" }}>
              aboadiag@andrew.cmu.edu
              </a>
          </div>

          <div className="text-wrapper-119">Contact</div>

          <div className="link-google-scholar-2">
            <div className="google-scholar-logo-2">
              <img className="vector-9" alt="google scholar logo element" src="/img/vector-32.svg" />

              <img
                className="vector-10"
                alt="google scholar logo element"
                src="/img/vector-39.svg"
              />

              <img
                className="vector-11"
                alt="google scholar logo element"
                src="/img/vector-34.svg"
              />

              <img
                className="vector-12"
                alt="google scholar logo element"
                src="/img/vector-35.svg"
              />
            </div>

            <a
              className="https-scholar-google-2"
              href="https://scholar.google.com/citations?hl=en&amp;user=OYnusysAAAAJ"
              rel="noopener noreferrer"
              target="_blank"
            >
              XXXXXXXXXXXXX
              <br />
              XXXXXXXXXXXXX
              <br />
              XXXXXXXXXXXXX
              <br />
              XXXXXXXXXXXXX
              <br />
              XXXXXXXXXXXXX
              <br />
              XXXXXXXXXXXXX
              <br />
              XXXXXXXXXXXXX
            </a>
          </div>

          <div className="text-wrapper-120">read my work</div>

          <div className="github-icon-2">
            <img className="github logo" alt="Vector" src="/img/vector-36.svg" />
          </div>

          <a
            className="https-github-com-4"
            href="https://github.com/aboadiag"
            rel="noopener noreferrer"
            target="_blank"
          >
            XXXXXXXX
            <br />
            XXXXXXXX
            <br />
            XXXXXXXX
            <br />
            XXXXXXXX
          </a>

          <div className="text-wrapper-121">visit my repos</div>
        </div>
      </div>
    </div>
  );
};
