import React from "react";
import aboutImage from "../../images/about-img.jpg";
const AboutSection = () => {
  return (
    <section className="founder uuyi testimonials homeSec3">
      <figure className="addAnimate" data-class="fadeIn">
        <div className="center addAnimate" data-class="fadeInBottom">
          <div className="about-left">
            <h4>Tarun Gautam</h4>
            <h2>Our Visionary Founder</h2>
            <p>
              <strong>
                Practiwiz is the brainchild of Tarun Gautam, a graduate from
                Indian Institute of Management (IIM), Lucknow.
              </strong>
            </p>
            <p>
              After a successful career of 20 years that gave him a rich
              experience of working with leading global brands and travelling to
              over 22 countries, Tarun decided to found Practiwiz as a part of
              Navrik Software Solution.
            </p>
            <p>
              Navrik was born with the philosophy that is derived from two words
              of it’s name- Navomesh that means innovation in Sanskrit and
              Maverick that refers to passionate free thinkers.
            </p>
            <p>
              Along the Navrik journey, we realized that we could cover the gap
              of practical training by imparting our practical project training
              to students and professionals.
              <br />
              Tarun also believed that the practical training should be in a fun
              & stress-free way so that the concepts are easily digested.
              <br />
              Since Navrik’s areas of expertise are RPA, AI and ML the idea has
              been to develop in-house content that can benefit students and
              professionals.
            </p>
            <p>
              He left his Corporate Career behind to build up his own successful
              start-up Navrik Software Solutions which is the backbone of
              Practiwiz – and unique e-learning platform for the career oriented
              with a twist of fun with learning.
            </p>

            <div className="more">
              <a
                href="https://www.linkedin.com/in/gautamtarun/"
                target="_blank"
              >
                linkedin Profile
              </a>
            </div>
          </div>

          <div className="about-right">
            <img src={aboutImage} alt="" />
            <p>
              Founder & CEO<span>Tarun Gautam</span>
            </p>
          </div>
        </div>
      </figure>
    </section>
  );
};

export default AboutSection;
