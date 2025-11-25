import React from "react";
import { Link } from "react-router-dom";
import { Group } from "../../components/Group";
import { NavBar } from "../../components/NavBar";
import styles from "./Home.module.css";
import { Footer } from "../../components/Footer";

// Force rebuild trigger


export const Home = () => {
  return (
    <div className="home">
      <div className="div-2">

        {/* SEMANTIC IMPROVEMENT: Wrap the NavBar in a <header> */}
        <header>
        {/* Consider moving name-component here if it acts as a site title/logo */}
        <div className="name-component">
          <img
            className="bena-favicon-figma-3"
            alt="Favicon sketch of Abena's face on blue background"
            src="/img/bena-favicon-figma-1-2.png"
          />
          <h1 className="site-title">Abena Boadi-Agyemang</h1>
        </div>
        
        {/* --------------NAV BAR------------- */}
        <NavBar className="navbar" />
      </header>

      {/* SEMANTIC IMPROVEMENT: Wrap the main content in <main> */}
      <main>
        {/* SECTION 1: Hero / Introduction */}
        <section className="hero-intro">
        <img
          className="bena-background"
          alt="A three-quarter view ofAbena Boadi-Agyemang with a brown circle in the background and a hand drawn curve around her. Abena is a 
                dark skin, Black woman with Black afro hair. She is smiling at the viewer"
          src="/img/bena-background-2.svg"
        />
        <div className="mask-group">
          <img
            className="bena-mug-removebg-2"
            alt="Portrait of Abena smiling"
            src="/img/bena-mug-removebg-preview-1-1.svg"
          />

          <img
            className="bena-mask-2"
            alt="" /* purely decorative */
            src="/img/bena-mask-1.svg"
          />
        </div>

        <img 
          className="vector-3" 
          alt=""  /* decorative divider */ 
          src="/img/vector-1-3.svg" 
        />

      {/* Introductory Text Blocks (Hi, my name is..., Researcher, Engineer...) */}
        <p className="hi-my-name-is-abena-2">
          <span className="text-wrapper-69">Hi, my name is </span>

          <span className="text-wrapper-70">Abena</span>

          <span className="text-wrapper-69"> (she/her), a</span>
        </p>

        <p className="researcher-designer-2">
          <span className="text-wrapper-77"><br /></span>
          <span className="text-wrapper-78">Researcher,<br /></span>
          <span className="text-wrapper-79">Designer,<br /></span>
          <span className="text-wrapper-80">Engineer,</span>
          {/* <span className="text-wrapper-81">,</span> */}
        </p>

        <p className="final-year-phd-2">
          &amp; final year PhD Candidate in Robotics!
        </p>

        
        <p className="i-am-in-the-fifth-2">
          <span className="text-wrapper-71">I am in the </span>

          <span className="text-wrapper-72">fifth</span>

          <span className="text-wrapper-71">&nbsp;</span>

          <span className="text-wrapper-73">year</span>

          <span className="text-wrapper-71">
            {" "}
            PhD Candidate at the Robotics Institute at Carnegie Mellon
            University. Here, I am advised by{" "}
          </span>

          <a
            href="https://www.ri.cmu.edu/ri-faculty/aaron-steinfeld/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="text-wrapper-74">Aaron Steinfeld</span>
          </a>

          <span className="text-wrapper-71"> and a part of the </span>

          <a
            href="https://tbd.ri.cmu.edu/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="text-wrapper-74">TBD Lab</span>
          </a>

          <span className="text-wrapper-71">
            .<br />
            <br />
            My research interests are at the intersection of{" "}
          </span>

          <span className="text-wrapper-72">human-robot interaction</span>

          <span className="text-wrapper-71">, </span>

          <span className="text-wrapper-72">design research</span>

          <span className="text-wrapper-71">, and </span>

          <span className="text-wrapper-72">accessibility</span>

          <span className="text-wrapper-71">
            . I am interested in applying{" "}
          </span>

          <span className="text-wrapper-75">
            human-centered design approaches
          </span>

          <span className="text-wrapper-71">
            {" "}
            to design intelligent agents that can support{" "}
          </span>

          <span className="text-wrapper-76">people with disabilities </span>

          <span className="text-wrapper-71">
            &amp; their respective communities.
          </span>
        </p>
        </section>


    {/* SECTION 2: About Me & CV CTA */}
    <section className="about-me-cv-cta">
    <div className="text-wrapper-82">a(bit).</div>
        <div className="a-bit-about-me-2">
          <p className="this-is-only-a-bit-2">
            <span className="text-wrapper-71">This is only a </span>

            <span className="text-wrapper-72">bit</span>

            <span className="text-wrapper-71"> about me. For a </span>

            <span className="text-wrapper-72">byte</span>

            <span className="text-wrapper-71">, see my CV below.</span>
          </p>

        <a
          href="/static/pdfs/abenab-cv-2page_v4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Group
            className="design-component-instance-node"
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
      <section className="education-section">
        <div className="education-bit">
          <div className="ellipse-5" />

          <div className="ellipse-6" />

          <div className="ellipse-7" />

          <div className="a-bit-about-me-3">
            <p className="phd-in-robotics-2">
              <span className="text-wrapper-87">
                PhD in Robotics. <br />
              </span>

              <span className="text-wrapper-88">
                Aaron Steinfeld (Chair), Jean Oh, Patrick Carrington, Cynthia L.
                Bennett
                <br />
                “Designing Supportive Agents with the Lived Experience of People
                with Disabilities” [Proposed Thesis]
              </span>
            </p>

            <p className="text-wrapper-89">
              2021 - present, Carnegie Mellon University
            </p>

            <p className="m-s-in-robotics-2">
              <span className="text-wrapper-87">
                M.S. in Robotics.
                <br />
              </span>

              <span className="text-wrapper-88">
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
                <span className="text-wrapper-74">Master’s Thesis</span>
              </a>

              <span className="text-wrapper-88">]</span>
            </p>

            <p className="text-wrapper-90">
              2021 - 2025, Carnegie Mellon University
            </p>

            <p className="b-s-in-mechanical-2">
              <span className="text-wrapper-87">
                B.S. in Mechanical Engineering
              </span>

              <span className="text-wrapper-88">
                . Concentration in Dynamic Systems &amp; Controls
              </span>
            </p>

            <p className="text-wrapper-91">
              2021 - present, Stanford University
            </p>

            <h2 className="text-wrapper-92">education.</h2>
          </div>
        </div>
        </section>
     </main>

     {/* Keep the Footer component outside of <main> but inside the top-level div */}
      <Footer className="footer" />
      </div>
    </div>
  );
};
