import React from "react";
import regImage from "../../images/reg.png";
const RegisterBannerSection = () => {
  return (
    <section className="rrty testimonials homeSec3">
      <figure className="addAnimate" data-class="fadeIn" data-aos="fade-in">
        <div
          className="center addAnimate"
          data-class="fadeInBottom"
          data-aos="fade-up"
        >
          <div className="register_left">
            <img src={regImage} alt="" />
          </div>
          <div className="register_right">
            <h3>Register Now</h3>
            <p>to study in Next Academic Year 2023.</p>
            <div className="more">Register Now</div>
          </div>
        </div>
      </figure>
    </section>
  );
};

export default RegisterBannerSection;
