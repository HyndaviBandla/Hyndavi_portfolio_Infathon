import React from "react";
import "./About.css";
const About = () => {
  return (
    <section id="about">
      <div id="pic">
        <img
          src="https://res.cloudinary.com/dugzhycni/image/upload/v1662705749/IMG-20220909-WA0018_pfhdsu.jpg"
          alt=""
        />
      </div>
      <div id="intro">
        <h1 class="headings">About me</h1>
        <h2>Hyndavi Bandla</h2>
        <p>
          I am from Ponnur in Guntur district. I like to visit places and meet
          people. I am very interested in spending time with my friends and
          playing outdoors. I always try to maintain a positive mindset and
          embrace peace. I developed a love for studies from my 9th standard,
          inspired by my friend. My dream is to use my education to make a
          positive impact on society. I am health-conscious and friendly in
          nature. In my free time, I enjoy watching movies and going to the
          theater with friends.
        </p>
      </div>
    </section>
  );
};

export default About;
