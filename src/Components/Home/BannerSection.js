import React from "react";
import bannerImage from "../../images/banner1.jpg";
import bannerMobImage from "../../images/banner1-mob.jpg";
const BannerSection = () => {
  return (
    <>
      <section className="homeSec1">
        <ul className="homeBanner">
          <li className="bannerSlide">
            <figure>
              <div className="only-mobile">
                <img src={bannerMobImage} alt="" />
              </div>
              <div className="only-web">
                <img src={bannerImage} alt="" />
              </div>
            </figure>
            <div className="bannerInfo" data-aos="fade-up">
              <span>
                <h1
                  className="animated btDex delay1"
                  data-animation="fadeInUp"
                  data-animation2="fadeOutUp"
                >
                  Learning
                  <br />
                  Should Be Fun
                </h1>
              </span>
              <span>
                <h3>
                  Learn From the Corporate, Step Into
                  <br />
                  Corporate World!
                </h3>
              </span>

              <strong>
                <a href="/why-practiwiz">
                  <samp>Why Practiwiz ?</samp>
                </a>
              </strong>
            </div>
          </li>
        </ul>
      </section>
      {/* commented the number of learners badge */}
      {/* <div className="icon-div  center highlights features-project-right">
        <div className="joka-fp">
          <aside className="find_battery">
            <article className="inline cboxElement">
              <div className="icon-box">
                <i className="affordable-price-icon transition"></i>
              </div>
              <div className="icon-text">
                <h4>45k+</h4>
                <span>Online Learner</span>
              </div>
            </article>
          </aside>
          <aside className="partner_with_us">
            <article className="inline cboxElement">
              <div className="icon-box">
                <i className="affordable-price-icon1 transition"></i>
              </div>
              <div className="icon-text">
                <h4>45k+</h4>
                <span>Online Learner</span>
              </div>
            </article>
          </aside>
          <aside className="find_battery">
            <article className="inline cboxElement">
              <div className="icon-box">
                <i className="affordable-price-icon2 transition"></i>
              </div>
              <div className="icon-text">
                <h4>45k+</h4>
                <span>Online Learner</span>
              </div>
            </article>
          </aside>
          <aside className="find_battery">
            <article className="inline cboxElement">
              <div className="icon-box">
                <i className="affordable-price-icon3 transition"></i>
              </div>
              <div className="icon-text">
                <h4>45k+</h4>
                <span>Online Learner</span>
              </div>
            </article>
          </aside>
        </div>
      </div> */}
    </>
  );
};

export default BannerSection;
