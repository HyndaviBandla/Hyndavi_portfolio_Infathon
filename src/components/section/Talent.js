import React from "react";

export const Talent = () => {
  const talentStyles = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "yellow",
    alignItems: "center",
    padding: 20,
  };

  const headingStyles = {
    textDecoration: "underline",
  };

  return (
    <div>
      <section id="talent" style={talentStyles}>
        <h1 className="headings" style={headingStyles}>
          skills
        </h1>
        <p style={{ color: "black" }}>
          Good with frontend languages like HTML, CSS, Bootstrap, React, and
          backend languages like Node.js, MongoDB. Proficient in programming
          languages Python, Java, and SQL. Built projects on Deep Learning. Good
          understanding of Artificial Intelligence, Machine Learning, Deep
          Learning.
        </p>
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/1*HLGtY6O2vUHqIyEbWdmBgA.jpeg"
          width="50%"
          alt="AI/ML"
        />
      </section>
      <section>
        <h1 className="headings" style={headingStyles}>
          Projects
        </h1>
        <p style={{ color: "black" }}>
          <ul>
            <li>Plant ecommerce website icluding plant desease detection</li>
            <li>School website</li>
            <li>Human face emotion recognition</li>
            <li>Movie Review Applicatio</li>
            <li>
              website for Crowd detection in different places in VIT-AP
              University
            </li>
            <li>hand gesture recognition for Indian signs</li>
            <li>
              sentiment analysis for restaurant reviews in telugu language using
              NLP
            </li>
          </ul>
        </p>
      </section>
    </div>
  );
};

export default Talent;
