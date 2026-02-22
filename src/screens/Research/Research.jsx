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
      <h1 className={styles['text-wrapper-127']}>select research.</h1>

      {/* INTRO */}
      <p className={styles['my-research-focuses-3']}>
        <span className={styles['text-wrapper-122']}>
          My research focuses on designing physically embodied and agentic AI that operate in service roles, namely assistive and social robots.&nbsp;&nbsp; I use{" "}
        </span>
        <span className={styles['text-wrapper-124']}>participatory design </span>
        <span className={styles['text-wrapper-122']}>approaches in my design research practice. I lead co-design workshops with </span>
        <span className={styles['text-wrapper-124']}>people with disabilities</span>
        <span className={styles['text-wrapper-122']}>
          {" "}
          (PwDs) who are non-roboticists to ensure these processes yield robots and AI systems that are
        </span>
        <span className={styles['text-wrapper-124']}> inclusive, intuitive, safe</span>
        <span className={styles['text-wrapper-122']}>, and </span>
        <span className={styles['text-wrapper-124']}>equitable</span>
        <span className={styles['text-wrapper-122']}> for all who collaborate interact with</span>
        <span className={styles['text-wrapper-123']}>&nbsp;&nbsp;these</span>
        <span className={styles['text-wrapper-122']}>
          {" "}
          technologies. Furthermore, I leverage mixed-methods UX approaches, including{" "}
        </span>
        <span className={styles['text-wrapper-124']}>user-centered design (UCD) practices,</span>
        <span className={styles['text-wrapper-122']}>&nbsp; and </span>
        <span className={styles['text-wrapper-124']}>behavioral science </span>
        <span className={styles['text-wrapper-122']}>and </span>
        <span className={styles['text-wrapper-124']}>experimental methods.</span>
        <span className={styles['text-wrapper-122']}>
          {/* in my work. */}
          <br />
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
          Co-designing Autonomous Mobility with Local Disabled Adults
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
               <a
                href="/pdfs/HRI_2026__camera-ready_v3_accessible_final.pdf"
                rel="noopener noreferrer"
                target="_blank"
                className={styles['link-text']}
              >
                HRI '26 Preprint
              </a>
              <span className={styles['bracket']}>]</span>
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
            methodology to conduct pilot evaluations in which we evaluate the voice agent-guided interactions
            to that of a self-guided interaction. We share preliminary insights regarding the design 
            of our voice agent, including the importance of embodiment and personalization. 
            We also share insights about the feasibility of our proposed user study, 
            which is aimed at evaluating the effectiveness of our voice agent at promoting emotion regulation 
            in employees through therapeutic art-making.
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