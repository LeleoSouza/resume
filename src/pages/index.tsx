import React from "react";
import styles from "./styles";
import Experience from "./experience";
import Intro from "./intro/index";
import AboutMe from "./aboutMe";
import Contact from "./contact";
function Pages() {
  return (
    <div className="pages">
      <div className="intro" style={styles.intro}>
        <Intro />
      </div>
      <div className="aboutme" style={styles.experience}>
        <AboutMe />
      </div>
      <div className="experience" style={styles.experience}>
        <Experience />
      </div>
      <div className="experience" style={styles.experience}>
        <Contact />
      </div>
    </div>
  );
}

export default Pages;
