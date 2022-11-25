import React from "react";
import courseImg1 from "../../images/courses-img1.jpg";
import courseImg2 from "../../images/courses-img2.jpg";
import courseImg3 from "../../images/courses-img3.jpg";
import courseImg4 from "../../images/courses-img4.jpg";
import Carousel from "react-elastic-carousel";
import userImage1 from "../../images/user1.jpg";
const CourseSection = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  return (
    <section className="homeSec6">
      <div
        className="center addAnimate features-project-right2"
        data-aos="fade-up"
        data-class="fadeInBottom"
      >
        <h4>Courses</h4>
        <h2>Browse Our Online Courses</h2>
        <ul className="social_slide">
          <Carousel breakPoints={breakPoints}>
            <li className="social_item">
              <a href="">
                <figure>
                  <img src={courseImg1} alt="" />
                </figure>
                <article>
                  <h3>Jumpstart to IT Business Analyst</h3>
                  {/* <div className="like_courses">525 Like</div> */}
                  <div className="name_courses">Tarun Gautam</div>
                  <br />
                  <div className="top-line">
                    <span>
                      <img src={userImage1} alt="" /> <b>64</b>
                    </span>
                    <aside>₹ 1050</aside>
                  </div>
                  <div className="clr"></div>
                </article>
              </a>
            </li>
            <li className="social_item">
              <a href="">
                <figure>
                  <img src={courseImg2} alt="" />
                </figure>
                <article>
                  <h3>Business Analysis Foundation Training</h3>
                  {/* <div className="like_courses">525 Like</div> */}
                  <div className="name_courses">Tarun Gautam</div>
                  <br />
                  <div className="top-line">
                    <span>
                      <img src={userImage1} alt="" /> <b>64</b>
                    </span>
                    <aside>₹ 1050</aside>
                  </div>
                  <div className="clr"></div>
                </article>
              </a>
            </li>
            <li className="social_item">
              <a href="">
                <figure>
                  <img src={courseImg3} alt="" />
                </figure>
                <article>
                  <h3>JUMPSTART to RPA LIVE BOT DEVELOPMENT</h3>
                  {/* <div className="like_courses">525 Like</div> */}
                  <div className="name_courses">Tarun Gautam</div>
                  <br />
                  <div className="top-line">
                    <span>
                      <img src={userImage1} alt="" /> <b>64</b>
                    </span>
                    <aside>₹ 1050</aside>
                  </div>
                  <div className="clr"></div>
                </article>
              </a>
            </li>
            <li className="social_item">
              <a href="">
                <figure>
                  <img src={courseImg1} alt="" />
                </figure>
                <article>
                  <h3>Machine Learning with RPA</h3>
                  {/* <div className="like_courses">525 Like</div> */}
                  <div className="name_courses">Tarun Gautam</div>
                  <br />
                  <div className="top-line">
                    <span>
                      <img src={userImage1} alt="" /> <b>64</b>
                    </span>
                    <aside>₹ 1050</aside>
                  </div>
                  <div className="clr"></div>
                </article>
              </a>
            </li>
            <li className="social_item">
              <a href="">
                <figure>
                  <img src={courseImg4} alt="" />
                </figure>
                <article>
                  <h3>Introduction Web design with HTML</h3>
                  {/* <div className="like_courses">525 Like</div> */}
                  <div className="name_courses">Duha Samra</div>
                  <br />
                  <div className="top-line">
                    <span>
                      <img src={userImage1} alt="" /> <b>64</b>
                    </span>
                    <aside>₹ 1050</aside>
                  </div>
                  <div className="clr"></div>
                </article>
              </a>
            </li>
          </Carousel>
        </ul>
        <div className="more">View All Courses</div>
      </div>
    </section>
  );
};

export default CourseSection;
