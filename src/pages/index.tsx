import React from "react";
import Experience from "../components/experience";
import Intro from "../components/intro/index";
// import Navbar from "../components/navbar/index";
function Pages() {
  return (
    <div className="pages">
      <div className="intro" style={styles.intro}>
        <Intro />
      </div>
      <div className="experience" style={styles.experience}>
        <Experience />
      </div>
    </div>
  );
}

const styles = {
  intro: {
    backgroundColor: "black",
    height: "100vh",
    color: "white",
  },
  experience: {
    backgroundColor: "gray",
    height: "100vh",
    color: "pink",
  },
};
export default Pages;
