import React from "react";
import { Link } from "react-router-dom";
// Adjust paths as needed for your structure
import { Group } from "../../components/Group";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";

// Import the CSS Module
import styles from "./Home.module.css";


export const Home = () => {
  return (
    // 1. Main Container
    <div className={styles.home}>
      <div className={styles.mainContainer}>

        {/* 2. Header */}
        <header className={styles.header}>
          <div className={styles.branding}>
            <img
              className={styles.logoImage}
              alt="Sketch of Abena's face"
              src="/img/bena-favicon-figma-1-2.png"
            />
            <h1 className={styles.siteTitle}>Abena Boadi-Agyemang</h1>
          </div>
          
          <div className={styles.navbarWrapper}>
             <NavBar />
          </div>
        </header>

        {/* 3. Main Content */}
        <main>
          
          {/* Hero Section */}
          <section className={styles.heroSection}>
             {/* Image First (Visual order handled by CSS flex-wrap-reverse on mobile) */}
             <img
                className={styles.heroImage}
                alt="Portrait of Abena"
                src="/img/bena-background-2.svg"
              />
              
              <div className={styles.heroContent}>
                <h2 className={styles.heroHeadline}>
                   Hi, my name is <span className={styles.blueHighlight}>Abena</span> (she/her).
                </h2>
                
                <div className={styles.heroSubtext}>
                  <p>
                    Researcher, Designer, Engineer, &amp; final year PhD Candidate in Robotics!
                  </p>
                  <p>
                    I am a PhD Candidate at the Robotics Institute at Carnegie Mellon University, advised by{" "}
                    <a href="https://www.ri.cmu.edu/ri-faculty/aaron-steinfeld/" target="_blank" rel="noreferrer" className={styles.textLink}>Aaron Steinfeld</a>
                     {" "}and part of the <a href="https://tbd.ri.cmu.edu/" target="_blank" rel="noreferrer" className={styles.textLink}>TBD Lab</a>.
                  </p>
                  <p>
                     My research interests are at the intersection of <strong>human-robot interaction</strong>, <strong>design research</strong>, and <strong>accessibility</strong>.
                  </p>
                </div>
              </div>
          </section>

          {/* About / CV Section */}
          <section className={`${styles.section} ${styles.aboutSection}`}>
             <h2 className={styles.sectionTitle}>a(bit).</h2>
             <div className={styles.sectionContent}>
                <p style={{textAlign: 'center', fontSize: '1.2rem'}}>
                   This is only a <strong>bit</strong> about me. For a <strong>byte</strong>, see my CV below.
                </p>
                
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
                   <a href="/static/pdfs/ab-final-cv-nov2025.pdf" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
                      <Group text="Download CV" />
                   </a>
                </div>
             </div>
          </section>

          {/* Education Section */}
          <section className={styles.section}>
             <h2 className={styles.sectionTitle}>education.</h2>
             
             <div className={styles.sectionContent}>
                
                {/* PhD Entry */}
                <div className={styles.educationItem}>
                   <h3 className={styles.degreeTitle}>PhD in Robotics</h3>
                   <p className={styles.degreeDetails}>
                      <strong>Advisors:</strong> Aaron Steinfeld (Chair), Jean Oh, Patrick Carrington, Cynthia L. Bennett<br/>
                      <strong>Thesis:</strong> “Designing Supportive Agents with the Lived Experience of People with Disabilities”
                   </p>
                   <p className={styles.degreeDate}>2021 - Present | Carnegie Mellon University</p>
                </div>

                {/* MS Entry */}
                <div className={styles.educationItem}>
                   <h3 className={styles.degreeTitle}>M.S. in Robotics</h3>
                   <p className={styles.degreeDetails}>
                      <strong>Thesis:</strong> “Simulated Encounters of the Third Kind”
                      [<a href="#" className={styles.textLink}>View PDF</a>]
                   </p>
                   <p className={styles.degreeDate}>2021 - 2025 | Carnegie Mellon University</p>
                </div>

                {/* BS Entry */}
                <div className={styles.educationItem}>
                   <h3 className={styles.degreeTitle}>B.S. in Mechanical Engineering</h3>
                   <p className={styles.degreeDetails}>Concentration in Dynamic Systems &amp; Controls</p>
                   <p className={styles.degreeDate}>2017 - 2021 | Stanford University</p>
                </div>

             </div>
          </section>

        </main>

        {/* 4. Footer */}
        <div className={styles.footerWrapper}>
           <Footer />
        </div>
        
      </div>
    </div>
  );
};