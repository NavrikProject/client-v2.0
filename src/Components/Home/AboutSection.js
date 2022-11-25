import React from "react";
import aboutImage from "../../images/about-img.jpg";
const AboutSection = () => {
  return (
    <section className="uuyi testimonials homeSec3">
      <div>
        <figure className="addAnimate" data-class="fadeIn">
          <div className="center addAnimate" data-class="fadeInBottom">
            <div className="about-left" data-aos="fade-right">
              <h4>About Us</h4>
              <h2>
                Welcome To The Online
                <br />
                Learning Center
              </h2>
              <p>
                <strong>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo
                </strong>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <p>
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
              </p>
              <div className="more">Read More</div>
            </div>
            <div className="about-right" data-aos="fade-left">
              <img src={aboutImage} alt="" />
              <p>
                Founder & CEO<span>Allen wake</span>
              </p>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default AboutSection;
