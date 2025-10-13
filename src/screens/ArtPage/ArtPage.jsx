import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { DivWrapper } from "../../components/DivWrapper";
import { Footer } from "../../components/Footer";
import { Group } from "../../components/Group";
import { NavBar } from "../../components/NavBar";
import { NavBarWrapper } from "../../components/NavBarWrapper";
import { ResearchAbout } from "../../components/ResearchAbout";
import "./style.css";

export const ArtPage = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="art-page"
      style={{
        display:
          (screenWidth >= 1440 && screenWidth < 1440) || screenWidth >= 1440
            ? "flex"
            : undefined,
        flexDirection:
          (screenWidth >= 1440 && screenWidth < 1440) || screenWidth >= 1440
            ? "column"
            : undefined,
        minHeight:
          screenWidth < 1440
            ? "2757px"
            : screenWidth >= 1440 && screenWidth < 1440
              ? "3663px"
              : (screenWidth >= 1440 && screenWidth < 1440) ||
                  screenWidth >= 1440
                ? "3845px"
                : undefined,
        overflow: screenWidth >= 1440 ? "hidden" : undefined,
        overflowX: screenWidth < 1440 ? "hidden" : undefined,
        position: screenWidth < 1440 ? "relative" : undefined,
      }}
    >
      {screenWidth < 1440 && (
        <>
          <Footer
            className="footer-instance"
            href="https://github.com/aboadiag"
          />
          <div className="CV">
            <div className="cv">
              <p className="this-is-only-a-bit">
                <span className="text-wrapper-24">This is only a </span>

                <span className="text-wrapper-25">bit</span>

                <span className="text-wrapper-24"> about me. For a </span>

                <span className="text-wrapper-25">byte</span>

                <span className="text-wrapper-24">, see my CV below.</span>
              </p>

              <Group
                className="group-5"
                divClassName="instance-node"
                property1="default"
                rectangleClassName="group-instance"
                rectangleClassNameOverride="group-5-instance"
                text="CV"
              />
            </div>
          </div>

          <div className="education">
            <div className="education-2">
              <div className="ellipse" />

              <div className="ellipse-2" />

              <div className="ellipse-3" />

              <div className="a-bit-about-me">
                <p className="phd-in-robotics">
                  <span className="text-wrapper-26">
                    PhD in Robotics. <br />
                  </span>

                  <span className="text-wrapper-27">
                    Aaron Steinfeld (Chair), Jean Oh, Patrick Carrington,
                    Cynthia L. Bennett
                    <br />
                    “Designing Supportive Agents with the Lived Experience of
                    People with Disabilities” [Proposed Thesis]
                  </span>
                </p>

                <p className="p">2021 - present, Carnegie Mellon University</p>

                <p className="m-s-in-robotics">
                  <span className="text-wrapper-26">
                    M.S. in Robotics.
                    <br />
                  </span>

                  <span className="text-wrapper-27">
                    Aaron Steinfeld (Chair), Henny Admoni, Nikolas Martelaro,
                    Michelle Zhao
                    <br />
                    “Simulated Encounters of the Third Kind: A Scenario-Based
                    Approach to Designing Robotic Mobility Aids” [
                  </span>

                  <a
                    href="https://www.ri.cmu.edu/app/uploads/2025/03/WritingQual_MSRThesis_aboadiag_final.pdf"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="text-wrapper-28">Master’s Thesis</span>
                  </a>

                  <span className="text-wrapper-27">]</span>
                </p>

                <p className="text-wrapper-29">
                  2021 - 2025, Carnegie Mellon University
                </p>

                <p className="b-s-in-mechanical">
                  <span className="text-wrapper-26">
                    B.S. in Mechanical Engineering
                  </span>

                  <span className="text-wrapper-27">
                    . Concentration in Dynamic Systems &amp; Controls
                  </span>
                </p>

                <p className="text-wrapper-30">
                  2021 - present, Stanford University
                </p>

                <div className="text-wrapper-31">education.</div>
              </div>
            </div>
          </div>

          <div className="about">
            <div className="text-wrapper-32">a(bit).</div>

            <p className="i-am-in-the-fifth">
              I am in the fifth year PhD Candidate at the Robotics Institute at
              Carnegie Mellon University. Here, I am advised by Aaron
              Steinfeld and a part of the TBD Lab.
              <br />
              <br />
              My research interests are at the intersection of human-robot
              interaction, design research, and accessibility. I am interested
              in applying human-centered design approaches to design intelligent
              agents that can support people with disabilities &amp; their
              respective communities.
            </p>
          </div>

          <div className="intro">
            <p className="hi-my-name-is-abena">
              <span className="text-wrapper-33">Hi, my name is </span>

              <span className="text-wrapper-34">Abena</span>

              <span className="text-wrapper-33"> (she/her), a</span>
            </p>

            <p className="researcher-designer">
              <span className="text-wrapper-35">
                <br />
              </span>

              <span className="text-wrapper-36">
                Researcher,
                <br />
              </span>

              <span className="text-wrapper-37">
                Designer,
                <br />
              </span>

              <span className="text-wrapper-38">Engineer</span>

              <span className="text-wrapper-39">,</span>
            </p>

            <p className="final-year-phd">
              &amp; final year PhD Candidate in Robotics!
            </p>
          </div>

          <div className="intro-images">
            <div className="intro-images-2">
              <img
                className="bena-mask"
                alt="Bena mask"
                src="/img/bena-mask-1.svg"
              />

              <img
                className="bena-mug-removebg"
                alt="Bena mug removebg"
                src="/img/bena-mug-removebg-preview-1-1.svg"
              />

              <img className="vector" alt="Vector" src="/img/vector-1-3.svg" />
            </div>
          </div>
        </>
      )}

      {(screenWidth >= 1440 || screenWidth < 1440) && (
        <NavBar
          className={`${screenWidth >= 1440 && "navbar"} ${screenWidth < 1440 && "class"}`}
          to="/artpage"
          to1="/artpage"
        />
      )}

      {screenWidth >= 1440 && screenWidth < 1440 && (
        <>
          <NavBarWrapper className="navbar" to="/artpage" />
          <ResearchAbout
            className="research-about-instance"
            text=" at several top tier conferences in ACM &amp;&nbsp;&nbsp;IEEE, such as SIGACCESS, UIST, HRI, RO-MAN, and journals, such as THRI.&nbsp;&nbsp;See some of these research projects below."
          />
          <div className="project">
            <div className="text-wrapper-40">Spring - Fall 2025</div>

            <div className="projectvisuals">
              <img
                className="rectangle-3"
                alt="Rectangle"
                src="/img/rectangle-28-8.png"
              />

              <p className="collage-featuring-co">
                Collage featuring Co-Design Workshops &amp; Designs Generated.
              </p>
            </div>

            <div className="project-about">
              <p className="we-used-various">
                <span className="text-wrapper-41">
                  <br />
                </span>

                <span className="text-wrapper-42">
                  We used various participatory design approaches to co-design
                  delivery robots for use by local PwDs. Our work provides
                  design recommendations for robotics practitioners, including
                  the importance of diverse robot form factors &amp;
                  functionalities to enable delivery robots to operate in
                  different environments &amp; perform a variety of
                  delivery-related tasks.
                </span>
              </p>

              <p className="description-under">
                <span className="text-wrapper-43">Description </span>

                <span className="text-wrapper-42">[under review]</span>
              </p>
            </div>

            <div className="project-title">
              <p className="text-wrapper-44">
                Co-designing Delivery Robots with Local PwDs
              </p>
            </div>
          </div>

          <div className="project-2">
            <p className="text-wrapper-45">Fall 2024 - Spring 2025</p>

            <div className="projectvisuals-2">
              <div className="VD-i" />

              <p className="video-featuring">
                Video featuring Control &amp; Experimental Conditions.
              </p>
            </div>

            <div className="project-about-2">
              <p className="blurb">
                <br />
                Interpersonal synchrony (IS) is the temporal coordination of
                behaviors over space &amp; time. IS is underexplored in visual
                art-making activities, especially in HRI. We investigated the
                impact of perceived IS in human-robot painting on human
                perceptions. Our work suggests the importance of some dimensions
                of IS on measures related to robot acceptance.
              </p>

              <p className="description-paper">
                <span className="text-wrapper-43">Description </span>

                <span className="text-wrapper-42">[</span>

                <a
                  href="https://drive.google.com/file/d/1TmX2Ph5OcCT0B_EPkaPw0LT8tYmmLDS4/view?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-wrapper-46">RO-MAN ‘25</span>
                </a>

                <span className="text-wrapper-42">]</span>
              </p>
            </div>

            <div className="project-title-2">
              <p className="text-wrapper-44">
                Human-Robot Synchrony in Joint Painting
              </p>
            </div>
          </div>

          <div className="project-3">
            <div className="text-wrapper-47">Fall 2023</div>

            <div className="projectvisuals-3">
              <div className="anonvid">
                <img
                  className="ellipse-4"
                  alt="Ellipse"
                  src="/img/ellipse-4-1.svg"
                />
              </div>

              <p className="text-wrapper-48">
                Pilot participant engaged in voice-agent guided art-making.
              </p>
            </div>

            <div className="project-about-3">
              <p className="visual-art-making">
                <br />
                Visual art-making can help support emotion regulation for many
                people; however, few works seldom explore opportunities for
                art-making to reduce occupational stress. We designed a
                preliminary voice agent with definite voice characteristics to
                guide a human through an therapeutic art-making activity.
              </p>

              <p className="description-HRI">
                <span className="text-wrapper-43">Description </span>

                <span className="text-wrapper-42">[</span>

                <a
                  href="https://dl.acm.org/doi/pdf/10.1145/3610978.3640600"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-wrapper-46">HRI Companion ‘24</span>
                </a>

                <span className="text-wrapper-42">]</span>
              </p>
            </div>

            <div className="project-title-3">
              <p className="text-wrapper-49">
                Voice Agent Guided Art-Making for Emotion Regulation
              </p>
            </div>
          </div>

          <div className="project-2">
            <p className="text-wrapper-50">Summer 2023 - Fall 2023</p>

            <div className="projectvisuals-4">
              <img
                className="rectangle-4"
                alt="Rectangle"
                src="/img/rectangle-28-11.png"
              />

              <p className="text-wrapper-51">
                Participant engaging with our guide robot prototype.
              </p>
            </div>

            <div className="project-about-4">
              <p className="we-used-scenario">
                <span className="text-wrapper-41">
                  <br />
                </span>

                <span className="text-wrapper-42">
                  We used scenario-based design &amp; dialogue simulations to
                  co-design with 16 pBLVs guide robots to support navigation in
                  public settings. Our work provides design recommendations for
                  roboticists &amp; interface designers, including robotic
                  behaviors and features related to guide robot usability,
                  shared-robot control, and factors to improve BLV users
                  perceptions of safety when using guide robots in public.
                </span>
              </p>

              <p className="description-ACM-THRI">
                <span className="text-wrapper-43">Description </span>

                <span className="text-wrapper-42">[</span>

                <a
                  href="https://dl.acm.org/doi/pdf/10.1145/3750054"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-wrapper-46">ACM THRI ‘25</span>
                </a>

                <span className="text-wrapper-42">]</span>
              </p>
            </div>

            <div className="co-designing-guide-wrapper">
              <p className="co-designing-guide">
                Co-designing Guide Robots with People who are Blind &amp; Low
                Vision (pBLVs)
              </p>
            </div>
          </div>

          <DivWrapper className="navbar" to="/artpage" />
        </>
      )}

      {((screenWidth >= 1440 && screenWidth < 1440) || screenWidth >= 1440) && (
        <div className="art-about">
          <div className="select-art">
            {screenWidth >= 1440 && <>select art.</>}

            {screenWidth >= 1440 && screenWidth < 1440 && <>select projects.</>}
          </div>

          <div className="my-research-focuses-2">
            {screenWidth >= 1440 && (
              <p className="text-wrapper-150">
                I have always enjoyed creating visual art in my free time. This
                is some of my work. Click images to view larger.
              </p>
            )}

            {screenWidth >= 1440 && screenWidth < 1440 && (
              <p className="text-wrapper-150">
                During my PhD, I have had the opportunity to design, fabricate,
                &amp; implement various ideas within the space of HRI &amp;
                physical computing. Some of these projects resulted in
                publication, others are archived here.
                <br />
                <br />
                See some of these&nbsp;&nbsp;projects below.
              </p>
            )}
          </div>
        </div>
      )}

      {screenWidth >= 1440 && screenWidth < 1440 && (
        <>
          <div className="project-persuasive">
            <div className="text-wrapper-40">Fall 2024</div>

            <div className="projectvisuals-5">
              <img
                className="rectangle-5"
                alt="Rectangle"
                src="/img/rectangle-28-3.svg"
              />

              <p className="text-wrapper-52">
                Two Pilot Participants. Left: Baseline. Right: Context Bandit.
              </p>
            </div>

            <div className="about-2">
              <p className="blurb-2">
                Visual art-making can provide therapeutic relief thereby
                supporting mental wellbeing. Still, task engagement is a crucial
                predictor of the effectiveness of art-making on mental
                wellbeing. <br />
                Thus, I implemented a context bandit policy that uses user
                involvement (i.e., low, medium, high) as a proxy for task
                engagement to adapt a social robot&#39;s personality (i.e.,
                charismatic and direct versus uncharismatic and indirect) to
                increase user engagement during a visual art-making activity.
              </p>

              <p className="description-under-2">
                <span className="text-wrapper-43">Description </span>

                <span className="text-wrapper-42">[</span>

                <a
                  href="https://github.com/aboadiag/persuasive-misty"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-wrapper-46">github project</span>
                </a>

                <span className="text-wrapper-42">]</span>
              </p>
            </div>

            <p className="project-title-4">
              Persuasive Social Robots to Encourage Art-making
            </p>
          </div>

          <div className="project-robot">
            <div className="rectangle-6" />

            <div className="text-wrapper-53">2021-2023</div>

            <div className="projectvisuals-6">
              <img
                className="robot-med-haptics"
                alt="Robot med haptics"
                src="/img/robot-med-haptics-img-2.svg"
              />

              <p className="challenges-of">
                <span className="text-wrapper-26">
                  Challenges of Fabricating miniature haptic devices &amp; the
                  range of sizes &amp; material flexibility/rigidity. L
                </span>

                <span className="text-wrapper-54">
                  eft: FDM 3D printed 3DoF RUU Delta Rendering a Simple Spring;
                  Middle: SLA printed 3 Dof RUU Delta with Capstan Drive
                  Mechanism; Right: Capstan-drive, impedence-type mechanism
                </span>
              </p>
            </div>

            <div className="about-3">
              <p className="blurb-3">
                <br />
                Inspired by my previous work in accessible haptics,
                I&nbsp;&nbsp;iterated on a haptic mouse&nbsp;&nbsp;to facilitate
                the on-demand &amp; iterative adaptation of visual aids used in
                K-12 learning to non-visual, particularly haptic modalities.
                This haptic device is an impedance-type kinesthetic device based
                on an RUU delta mechanism. <br />
                <br />I also conducted semi-structured interviews with TVIs to
                uncover design recommendations for interactive devices to
                support non-visual adaptation.
              </p>

              <p className="description-paper-2">
                <span className="text-wrapper-43">Description </span>

                <span className="text-wrapper-42">[</span>

                <a
                  href="https://dl.acm.org/doi/pdf/10.1145/3597638.3614512?casa_token=mncCzpzuYq0AAAAA:1xCrYya7HXN2buCKNvvxFeC1doa1JKVqaVHGaipU4to0iLcyQcNDsUeeXC0THFJZ5DtSOubzx5DJ"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-wrapper-46">ASSETS ‘23</span>
                </a>

                <span className="text-wrapper-42">]</span>
              </p>
            </div>

            <p className="project-title-5">
              Robot Mediated Haptic Mouse for Co-creation of Non-Visual Aids
              between&nbsp;&nbsp;TVIs &amp; BLV Students
            </p>
          </div>

          <div className="project-versatile">
            <div className="rectangle-7" />

            <div className="text-wrapper-55">Spring 2023</div>

            <div className="projectvisuals-7">
              <p className="right-final">
                {" "}
                Right: Final Prototype with horizontal motor arrangement.
              </p>

              <img
                className="vers-haptics"
                alt="Vers haptics"
                src="/img/vers-haptics-img2-2.png"
              />

              <p className="text-wrapper-56">
                Left: Early prototype with vertical motor arrangement.
              </p>

              <img
                className="vers-haptics-img"
                alt="Vers haptics"
                src="/img/vers-haptics-img1-2.png"
              />
            </div>

            <div className="about-4">
              <p className="text-wrapper-57">
                We presented Parametric Haptics, customizable and versatile
                haptic patches that are lightweight, reconfigurable, and can be
                integrated as wearables or into objects. For our demonstration,
                we implement a simple open-loop control strategy. We linearly
                actuate the motors by varying the direction of the rotation, the
                Pulse-Width-Modulation (PWM), and the duration and frequency of
                the pulses, allowing us to approximate control over the
                displacement of the tactors and velocity of actuation to achieve
                a diverse set of tactile sensations.  Control strategies can be
                adapted to elicit desired tactile feedback and incorporate
                refined control with appropriate hardware consideration
              </p>

              <p className="description-UIST">
                <span className="text-wrapper-43">Description </span>

                <span className="text-wrapper-42">[</span>

                <a
                  href="https://dl.acm.org/doi/pdf/10.1145/3586183.3606766"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-wrapper-46">UIST ‘23</span>
                </a>

                <span className="text-wrapper-42">]</span>
              </p>
            </div>

            <p className="project-title-6">
              <span className="text-wrapper-58">Versatile Haptics </span>

              <span className="text-wrapper-42">
                [Collaboration with Violet Han et al.]
              </span>
            </p>
          </div>

          <div className="project-haptics">
            <div className="rectangle-8" />

            <div className="text-wrapper-59">2020-2021</div>

            <div className="projectvisuals-8">
              <p className="text-wrapper-60">
                Left: haptic mouse platform. Right: Rendering surface curvature
                through kinesthetic feedback (left) and visually on GUI (right).
                Note: While 2 fingers are placed on the tilt platform, 1 finger
                is best for curvature perception.
              </p>

              <div className="haptic-graphics" />
            </div>

            <div className="about-5">
              <p className="text-wrapper-61">
                The preliminary development of a mechanically-actuated,
                kinesthetic haptic mouse for tactile graphic rendering to assist
                with remote learning for blind and low vision (BLV) students. It
                provides kinesthetic feedback to render surfaces and the
                mechanism is a 3 DOF (height, pitch, yaw) modified Stewart
                platform. We explore the system’s design, integration, and
                preliminary implementation. For future work, we proposed the
                integration of a voice coil actuator (VCA) for haptic texture
                rendering and a sensor for absolute position tracking.
              </p>

              <div className="text-wrapper-62">Description</div>
            </div>

            <p className="project-title-7">
              <span className="text-wrapper-63">
                Accessible Haptics through Graphics Rendering{" "}
              </span>

              <span className="text-wrapper-42">
                [Collaboration w. Alan Brantley, A.F. Siu,&nbsp;&nbsp;&amp; Sean
                Follmer]
              </span>
            </p>
          </div>

          <footer className="footer-2">
            <div className="text-wrapper-64">aboadiag@andrew.cmu.edu</div>

            <div className="text-wrapper-65">Contact</div>

            <div className="text-wrapper-66">read my work</div>

            <div className="vector-wrapper">
              <img className="vector-2" alt="Vector" src="/img/vector-9.svg" />
            </div>

            <a
              className="https-github-com-2"
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

            <div className="text-wrapper-67">visit my repos</div>
          </footer>
        </>
      )}

      {screenWidth >= 1440 && (
        <Footer
          className="footer-3"
          githubIcon="/img/github-icon-1-3.svg"
          href="https://github.com/aboadiag"
        />
      )}
    </div>
  );
};
