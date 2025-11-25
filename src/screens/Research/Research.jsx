import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import styles from "./Research.module.css";

export const Research = () => {
  return (
    <div className="research">
      <p className="my-research-focuses-3">
        <span className="text-wrapper-122">
          My research focuses on designing assistive robots and supportive
          agents.&nbsp;&nbsp;I commonly{" "}
        </span>

        <span className="text-wrapper-123">&nbsp;</span>

        <span className="text-wrapper-124">cooperatively design</span>

        <span className="text-wrapper-122"> (“co-design) with</span>

        <span className="text-wrapper-125"> people with disabilities</span>

        <span className="text-wrapper-122">
          {" "}
          (PwDs) who are non-professional designers to ensure more
        </span>

        <span className="text-wrapper-125"> equitable experiences</span>

        <span className="text-wrapper-122"> with</span>

        <span className="text-wrapper-123">&nbsp;&nbsp;accessible</span>

        <span className="text-wrapper-122">
          {" "}
          robotic/agentic interfaces. I use{" "}
        </span>

        <span className="text-wrapper-124">participatory design,</span>

        <span className="text-wrapper-122">&nbsp;</span>

        <span className="text-wrapper-124">user-centered design (UCD), </span>

        <span className="text-wrapper-122">and </span>

        <span className="text-wrapper-124">experimental methods </span>

        <span className="text-wrapper-122">
          in my work. <br />
          <br />
          My work has been{" "}
        </span>

        <span className="text-wrapper-126">published</span>

        <span className="text-wrapper-122">
          {" "}
          at several top tier conferences in ACM &amp;&nbsp;&nbsp;IEEE, such as
          SIGACCESS, UIST, HRI, RO-MAN, and journals, such as
          THRI.&nbsp;&nbsp;See some of these research projects below.
        </span>
      </p>

      <div className="text-wrapper-127">select research.</div>

      {/* <div className="navbar-4">
        <div className="text-wrapper-128">Home</div>

        <div className="text-wrapper-129">Research</div>

        <Link className="text-wrapper-130" to="/artpage">
          Projects
        </Link>

        <div className="text-wrapper-131">Art</div>
      </div> */}
      <NavBar className="navbar" />


      <div className="project-delivery">
        <p className="we-used-various-3">
          <span className="text-wrapper-132">
            <br />
          </span>

          <span className="text-wrapper-133">
            We used various participatory design approaches to co-design
            delivery robots for use by local PwDs. Our work provides design
            recommendations for robotics practitioners, including the importance
            of diverse robot form factors &amp; functionalities to enable
            delivery robots to operate in different environments &amp; perform a
            variety of delivery-related tasks.
          </span>
        </p>

        <img
          className="rectangle-14"
          alt="four subfigures. all people in image have faces blurred.
          (clockwise). Subfigure 1 shows two participants and facilitor gathered around co-designed mock up.
          Subfigure 2. A lego mock-up of a wheeled robbot with bigger back wheels and smaller front wheels.
          Subfigure 3. participants around a large table. There are legos sprawled across the table in front of them.  
          The facilitator stands to the right of a participant.
          Subfigure 4 is two craft mockups: a humanoid robot made of pipe cleaner next to a lego staircase."
          src="/img/rectangle-28-8.png"
        />

        <p className="text-wrapper-134">
          Co-designing Delivery Robots with Local PwDs
        </p>

        <p className="div-4">
          <span className="text-wrapper-135">Description </span>

          <span className="text-wrapper-133">[under review]</span>
        </p>

        <div className="text-wrapper-136">Spring - Fall 2025</div>

        <p className="collage-featuring-co-3">
          Collage featuring Co-Design Workshops &amp; Designs Generated.
        </p>
      </div>

{/*  -----------PROJECT IS4HRA------------ */}
      <div className="project-ishra">
        <p className="blurb-5">
          <br />
          Interpersonal synchrony (IS) is the temporal coordination of behaviors
          over space &amp; time. IS is underexplored in visual art-making
          activities, especially in HRI. We investigated the impact of perceived
          IS in human-robot painting on human perceptions. Our work suggests the
          importance of some dimensions of IS on measures related to robot
          acceptance.
        </p>

        <p className="text-wrapper-137">
          Human-Robot Synchrony in Joint Painting
        </p>

        <p className="div-4">
          <span className="text-wrapper-135">Description </span>

          <span className="text-wrapper-133">[</span>

          <a
            href="https://drive.google.com/file/d/1TmX2Ph5OcCT0B_EPkaPw0LT8tYmmLDS4/view?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="text-wrapper-138">RO-MAN ‘25</span>
          </a>

          <span className="text-wrapper-133">]</span>
        </p>

        <div className="rectangle-15" />

        <p className="text-wrapper-139">Fall 2024 - Spring 2025</p>

        <p className="video-featuring-2">
          Video featuring Control &amp; Experimental Conditions.
        </p>

          {/* NEW VIDEO ELEMENT */}
        <video controls width="800" className="hri-video">
          <source src="/vids/IS4HRA_Supplemental.mp4" type="video/mp4" />
          Videos are sub-videos. The left video is half screen, the right videos are top and bottom. 
          Synchronous condition (left) versus two asynchronous conditions (right). top: temporally asynchronous order;
          bottom: spatially asynchronous content.  The synchronous condition is spatially and temporally synchronous 
          in which both the human and robot painted the same spiral using red pigment. 
          Both the robot and human completed the spiral in the same order at the same time. In the temporally asynchronous
          condition the human paints the spiral in a different order than the robot, but both completed in red pigment. In the spatially asynchronous condition, the human is painting an image with dissimilar brush strokes than the robot’s. The robot’s image is a spiral with smooth, circular edges and the human’s image is a spiral with squiggly lines. 

        </video>
      </div>
    {/*  -----------PROJECT IS4HRA------------ */}


      <div className="name-component-3">
        <img
          className="bena-favicon-figma-5"
          alt="Bena favicon figma"
          src="/img/bena-favicon-figma-1-2.png"
        />

        <div className="text-wrapper-140">Abena Boadi-Agyemang</div>
      </div>

      <div className="project-guide">
        <p className="we-used-scenario-2">
          <span className="text-wrapper-132">
            <br />
          </span>

          <span className="text-wrapper-133">
            We used scenario-based design &amp; dialogue simulations to
            co-design with 16 pBLVs guide robots to support navigation in public
            settings. Our work provides design recommendations for roboticists
            &amp; interface designers, including robotic behaviors and features
            related to guide robot usability, shared-robot control, and factors
            to improve BLV users perceptions of safety when using guide robots
            in public.
          </span>
        </p>

        <img
          className="rectangle-16"
          alt="Man (with grey hair and light skin) walking with a wheeled guide robot. 
          He is facing left and holding onto the handle of the robot, which is angled at 1 o'clock (directionally)."
          src="/img/rectangle-28-11.png"
        />

        <p className="co-designing-guide-2">
          Co-designing Guide Robots with People who are Blind &amp; Low Vision
          (pBLVs)
        </p>

        <p className="description-ACM-THRI-2">
          <span className="text-wrapper-135">Description </span>

          <span className="text-wrapper-133">[</span>

          <a
            href="https://dl.acm.org/doi/pdf/10.1145/3750054"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="text-wrapper-138">ACM THRI ‘25</span>
          </a>

          <span className="text-wrapper-133">]</span>
        </p>

        <p className="text-wrapper-141">Summer 2023 - Fall 2023</p>

        <p className="text-wrapper-142">
          Participant engaging with our guide robot prototype.
        </p>
      </div>

{/*  -----------PROJECT Voice Agent------------ */}

      <div className="project-voice">
        <p className="visual-art-making-2">
          <br />
          Visual art-making can help support emotion regulation for many people;
          however, few works seldom explore opportunities for art-making to
          reduce occupational stress. We designed a preliminary voice agent with
          definite voice characteristics to guide a human through an therapeutic
          art-making activity.
        </p>

        {/* <img
          className="rectangle-17"
          alt="Rectangle"
          src="/img/rectangle-28-10.gif"
        /> */}
          {/* NEW VIDEO ELEMENT */}
        {/* <video controls width="800" className="rectangle-17">
          <source src="static/vids/voice_agent_4_artmaking.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

    {/* VIDEO CONTAINER */}
  <div className="video-container">
    <video controls className="voice-agents">
      <source src="/vids/voice_agent_4_artmaking.mp4" type="video/mp4" />
      Pilot participant following the prompts of the voice agent. The participant, whose face is blurred out, is waving their arm around.
    </video>

    {/* BLUR SHAPE OVERLAY */}
  <img
      className="video-blur-overlay"
      src="/img/vid-blur.png"
      alt="Blur overlay"
    />
  </div>

        <p className="text-wrapper-143">
          Voice Agent Guided Art-Making for Emotion Regulation
        </p>

        <p className="description-HRI-2">
          <span className="text-wrapper-135">Description </span>

          <span className="text-wrapper-133">[</span>

          <a
            href="https://dl.acm.org/doi/pdf/10.1145/3610978.3640600"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="text-wrapper-138">HRI Companion ‘24</span>
          </a>

          <span className="text-wrapper-133">]</span>
        </p>

        <div className="text-wrapper-144">Fall 2023</div>

        <p className="text-wrapper-145">
          Pilot participant engaged in voice-agent guided art-making.
        </p>
      </div>

    {/*  -----------PROJECT Voice Agent------------ */}


      <div className="contact-bar-scholar-2">
        <div className="group-8">
          <div className="text-wrapper-146">              
            <a href="mailto:aboadiag@andrew.cmu.edu"  style={{ textDecoration: "none", color: "inherit" }}>
              aboadiag@andrew.cmu.edu
              </a></div>

          <div className="text-wrapper-147">Contact</div>

          <div className="link-google-scholar-3">
            <div className="google-scholar-logo-3">
              <img
                className="vector-14"
                alt="Vector"
                src="/img/vector-32.svg"
              />

              <img
                className="vector-15"
                alt="Vector"
                src="/img/vector-44.svg"
              />

              <img
                className="vector-16"
                alt="Vector"
                src="/img/vector-34.svg"
              />

              <img
                className="vector-17"
                alt="Vector"
                src="/img/vector-35.svg"
              />
            </div>

            <a
              className="https-scholar-google-3"
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

          <div className="text-wrapper-148">read my work</div>

          <div className="github-icon-3">
            <img className="vector-18" alt="Vector" src="/img/vector-36.svg" />
          </div>

          <a
            className="https-github-com-5"
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

          <div className="text-wrapper-149">visit my repos</div>
        </div>
      </div>
    </div>
  );
};
