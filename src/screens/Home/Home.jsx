// Home.jsx

import React from "react";
import { Link } from "react-router-dom";
import { Group } from "../../components/Group";
import { NavBar } from "../../components/NavBar";
import styles from "./Home.module.css";
import { Footer } from "../../components/Footer";

// ... (Keep your existing handleLoadError function here) ...

export const Home = () => {
  return (
    <div className={styles.home}>
      
      {/* 1. Header flows naturally at the top */}
      <header>
        <NavBar />
      </header>

      {/* 2. Main Content Canvas 
             This contains all your absolute positioned elements.
             We use the new class 'main-content-canvas' (formerly div-2) 
             to give this a fixed height so the footer knows where to start. 
      */}
      <div className={styles['main-content-canvas']}>
        
        <main>
          {/* SECTION 1: Hero / Introduction */}
          <section className={styles['hero-intro']}>
            <img
              className={styles['bena-background']}
              alt="Abena Boadi-Agyemang background"
              src="/img/bena-background-2.svg"
            />
            
            <div className={styles['mask-group']}>
              <img
                className={styles['bena-mug-removebg-2']}
                alt="Portrait of Abena smiling"
                src="/img/bena-mug-removebg-preview-1-1.svg"
              />
              <img
                className={styles['bena-mask-2']}
                alt=""
                src="/img/bena-mask-1.svg"
              />
            </div>

            <img 
              className={styles['vector-3']}
              alt="" 
              src="/img/vector-1-3.svg" 
            />

            <p className={styles['hi-my-name-is-abena-2']}>
              <span className={styles['text-wrapper-69']}>Hi, my name is </span>
              <span className={styles['text-wrapper-70']}>Abena</span>
              <span className={styles['text-wrapper-69']}> (she/her), a</span>
            </p>

            <p className={styles['researcher-designer-2']}>
              <span className={styles['text-wrapper-77']}><br /></span>
              <span className={styles['text-wrapper-78']}>Researcher,<br /></span>
              <span className={styles['text-wrapper-79']}>Designer,<br /></span>
              <span className={styles['text-wrapper-80']}>Engineer,</span>
            </p>

            <p className={styles['final-year-phd-2']}>
              &amp; final year PhD Candidate in Robotics!
            </p>

            <p className={styles['i-am-in-the-fifth-2']}>
              <span className={styles['text-wrapper-71']}>I am in the </span>
              <span className={styles['text-wrapper-72']}>fifth</span>
              <span className={styles['text-wrapper-71']}>&nbsp;</span>
              <span className={styles['text-wrapper-73']}>year</span>
              <span className={styles['text-wrapper-71']}>
                {" "}
                PhD Candidate at the Robotics Institute at Carnegie Mellon
                University. Here, I am advised by{" "}
              </span>
              <a
                href="https://www.ri.cmu.edu/ri-faculty/aaron-steinfeld/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className={styles['text-wrapper-74']}>Aaron Steinfeld</span>
              </a>
              <span className={styles['text-wrapper-71']}> and a part of the </span>
              <a
                href="https://tbd.ri.cmu.edu/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className={styles['text-wrapper-74']}>TBD Lab</span>
              </a>
              <span className={styles['text-wrapper-71']}>
                .<br />
                <br />
                My research interests are at the intersection of{" "}
              </span>
              <span className={styles['text-wrapper-72']}>human-robot interaction</span>
              <span className={styles['text-wrapper-71']}>, </span>
              <span className={styles['text-wrapper-72']}>design research</span>
              <span className={styles['text-wrapper-71']}>, and </span>
              <span className={styles['text-wrapper-72']}>accessibility</span>
              <span className={styles['text-wrapper-71']}>
                . I am interested in applying{" "}
              </span>
              <span className={styles['text-wrapper-75']}>
                human-centered design approaches
              </span>
              <span className={styles['text-wrapper-71']}>
                {" "}
                to design intelligent agents that can support{" "}
              </span>
              <span className={styles['text-wrapper-76']}>people with disabilities </span>
              <span className={styles['text-wrapper-71']}>
                &amp; their respective communities.
              </span>
            </p>
          </section>

          {/* SECTION 2: About Me & CV CTA */}
          <section className={styles['about-me-cv-cta']}>
            <div className={styles['text-wrapper-82']}>a(bit).</div>
            <div className={styles['a-bit-about-me-2']}>
              <p className={styles['this-is-only-a-bit-2']}>
                <span className={styles['text-wrapper-71']}>This is only a </span>
                <span className={styles['text-wrapper-72']}>bit</span>
                <span className={styles['text-wrapper-71']}> about me. For a </span>
                <span className={styles['text-wrapper-72']}>byte</span>
                <span className={styles['text-wrapper-71']}>, see my CV below.</span>
              </p>

              <a
                href="/static/pdfs/ab-final-cv-nov2025-updated.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Group
                  className={styles['design-component-instance-node']}
                  divClassName="group-4"
                  property1="default"
                  rectangleClassName="group-2"
                  rectangleClassNameOverride="group-3"
                  text="CV"
                />
              </a>
            </div>
          </section>

          {/* SECTION 3: Education */}
          <section className={styles['education-section']}>
            <div className={styles['education-bit']}>
              <div className={styles['ellipse-5']} />
              <div className={styles['ellipse-6']} />
              <div className={styles['ellipse-7']} />

              <div className={styles['a-bit-about-me-3']}>
                <p className={styles['phd-in-robotics-2']}>
                  <span className={styles['text-wrapper-87']}>
                    PhD in Robotics. <br />
                  </span>
                  <span className={styles['text-wrapper-88']}>
                    Aaron Steinfeld (Chair), Jean Oh, Patrick Carrington, Cynthia L.
                    Bennett
                    <br />
                    “Designing Supportive Agents with the Lived Experience of People
                    with Disabilities” [Proposed Thesis]
                  </span>
                </p>

                <p className={styles['text-wrapper-89']}>
                  2021 - present, Carnegie Mellon University
                </p>

                <p className={styles['m-s-in-robotics-2']}>
                  <span className={styles['text-wrapper-87']}>
                    M.S. in Robotics.
                    <br />
                  </span>
                  <span className={styles['text-wrapper-88']}>
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
                    <span className={styles['text-wrapper-74']}>Master’s Thesis</span>
                  </a>
                  <span className={styles['text-wrapper-88']}>]</span>
                </p>

                <p className={styles['text-wrapper-90']}>
                  2021 - present, Carnegie Mellon University
                </p>

                <p className={styles['b-s-in-mechanical-2']}>
                  <span className={styles['text-wrapper-87']}>
                    B.S. in Mechanical Engineering
                  </span>
                  <span className={styles['text-wrapper-88']}>
                    . Concentration in Dynamic Systems &amp; Controls
                  </span>
                </p>

                <p className={styles['text-wrapper-91']}>
                  2017 - 2021, Stanford University
                </p>

                <h2 className={styles['text-wrapper-92']}>education.</h2>
              </div>
            </div>
          </section>
        </main>
      </div> 
      {/* End of main-content-canvas */}

      {/* 3. Footer - Now outside the canvas, so it sits at the bottom */}
      <Footer />
      
    </div>
  );
};