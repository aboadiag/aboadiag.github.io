import React from "react";
import { Link } from "react-router-dom";
import { Group } from "../../components/Group";
import "./style.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="div-2">
        <img
          className="bena-background"
          alt="Bena background"
          src="/img/bena-background-2.svg"
        />

        <div className="name-component">
          <img
            className="bena-favicon-figma-3"
            alt="Bena favicon figma"
            src="/img/bena-favicon-figma-1-2.png"
          />

          <div className="text-wrapper-68">Abena Boadi-Agyemang</div>
        </div>

        <p className="hi-my-name-is-abena-2">
          <span className="text-wrapper-69">Hi, my name is </span>

          <span className="text-wrapper-70">Abena</span>

          <span className="text-wrapper-69"> (she/her), a</span>
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

        <p className="researcher-designer-2">
          <span className="text-wrapper-77">
            <br />
          </span>

          <span className="text-wrapper-78">
            Researcher,
            <br />
          </span>

          <span className="text-wrapper-79">
            Designer,
            <br />
          </span>

          <span className="text-wrapper-80">Engineer</span>

          <span className="text-wrapper-81">,</span>
        </p>

        <div className="text-wrapper-82">a(bit).</div>

        <div className="navbar-2">
          <div className="text-wrapper-83">Home</div>

          <Link className="text-wrapper-84" to="/artpage">
            Research
          </Link>

          <Link className="text-wrapper-85" to="/artpage">
            Projects
          </Link>

          <div className="text-wrapper-86">Art</div>
        </div>

        <div className="a-bit-about-me-2">
          <p className="this-is-only-a-bit-2">
            <span className="text-wrapper-71">This is only a </span>

            <span className="text-wrapper-72">bit</span>

            <span className="text-wrapper-71"> about me. For a </span>

            <span className="text-wrapper-72">byte</span>

            <span className="text-wrapper-71">, see my CV below.</span>
          </p>

          <Group
            className="design-component-instance-node"
            divClassName="group-4"
            property1="default"
            rectangleClassName="group-2"
            rectangleClassNameOverride="group-3"
            text="CV"
          />
        </div>

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

            <div className="text-wrapper-92">education.</div>
          </div>
        </div>

        <div className="mask-group">
          <img
            className="bena-mug-removebg-2"
            alt="Bena mug removebg"
            src="/img/bena-mug-removebg-preview-1-2.png"
          />

          <img
            className="bena-mask-2"
            alt="Bena mask"
            src="/img/bena-mask-2.png"
          />
        </div>

        <img className="vector-3" alt="Vector" src="/img/vector-1-3.svg" />

        <div className="contact-bar-scholar">
          <div className="group-6">
            <div className="text-wrapper-93">aboadiag@andrew.cmu.edu</div>

            <div className="text-wrapper-94">Contact</div>

            <div className="link-google-scholar">
              <div className="google-scholar-logo">
                <img
                  className="vector-4"
                  alt="Vector"
                  src="/img/vector-32.svg"
                />

                <img
                  className="vector-5"
                  alt="Vector"
                  src="/img/vector-33.svg"
                />

                <img
                  className="vector-6"
                  alt="Vector"
                  src="/img/vector-34.svg"
                />

                <img
                  className="vector-7"
                  alt="Vector"
                  src="/img/vector-35.svg"
                />
              </div>

              <a
                className="https-scholar-google"
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

            <div className="text-wrapper-95">read my work</div>

            <div className="img-wrapper">
              <img className="vector-8" alt="Vector" src="/img/vector-36.svg" />
            </div>

            <a
              className="https-github-com-3"
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

            <div className="text-wrapper-96">visit my repos</div>
          </div>
        </div>
      </div>
    </div>
  );
};
