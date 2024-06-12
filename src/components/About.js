import React from "react";
import philipImage from "../../public/images/philip_obuya.jpg";
import helenImage from "../../public/images/helen_obuya.jpg";
import ericImage from "../../public/images/eric_nimba.jpg";

function About() {
  return (
    <div className="container">
      <h2>About Us</h2>
      <p>Pheliz Investment is a family-owned business that has been in operation for over 10 years. We pride ourselves on providing quality products and online services to our customers.</p>

      <h3>Our Team</h3>
      <div className="team">
        <div className="team-member">
          <img src={philipImage} alt="Philip Obuya" />
          <h4>Philip Obuya</h4>
          <p>Director</p>
        </div>
        <div className="team-member">
          <img src={helenImage} alt="Helen Obuya" />
          <h4>Helen Obuya</h4>
          <p>Manager</p>
        </div>
        <div className="team-member">
          <img src={ericImage} alt="Eric Nimba" />
          <h4>Eric Nimba</h4>
          <p>Developer</p>
        </div>
      </div>
    </div>
  );
}

export default About;