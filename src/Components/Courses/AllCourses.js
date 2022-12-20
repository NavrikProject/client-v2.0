import React, { useState } from "react";
import "./course.css";
import innerBannerWeb from "../../images/inner-banner.jpg";
import innerBannerMob from "../../images/inner-banner-mobile.jpg";
import searchIcon from "../../images/search.jpg";
import benefitImg from "../../images/benefits1.jpg";
import loadMoreImg from "../../images//load.jpg";
import CourseCard from "./CourseCard/CourseCard";
import GoToTop from "../../Components/GoToTop";
const AllCourses = () => {
  const [loadMoreCourses, setLoadMoreCourses] = useState(false);
  const [courseSearchItem, setCourseSearchItem] = useState("");
  return (
    <>
      <section className="inner-banner">
        <ul className="inner">
          <li className="bannerSlide">
            <figure className="only-des">
              <img src={innerBannerWeb} alt="" />
            </figure>
            <figure className="only-mobile">
              <img src={innerBannerMob} alt="" />
            </figure>
            <div className="bannerInfo">
              <span>
                <h1>Our Courses</h1>
              </span>
              <span>
                <h3>
                  Learn From the Corporate, Step Into
                  <br />
                  Corporate World!
                </h3>
              </span>
            </div>
          </li>
        </ul>
      </section>
      <section className="homeSec6">
        <div
          className="center addAnimate features-project-right2"
          data-className="fadeInBottom"
        >
          <article className="pages-tital">
            <h4>Our Courses</h4>
            <h2>Recommended Courses</h2>
          </article>
          <div className="search">
            <div className="search-box">
              <input
                type="text"
                className="search-input"
                placeholder="Search.."
                onChange={(event) => setCourseSearchItem(event.target.value)}
              />
              <button className="search-button">
                <i>
                  <img src={searchIcon} alt="" />
                </i>
              </button>
            </div>
          </div>
          <div className="clear"></div>
          <ul className="social_slide">
            <CourseCard
              courseSearchItem={courseSearchItem}
              loadMoreCourses={loadMoreCourses}
            />
          </ul>
          <div className="clear"></div>
          <div
            className="load-more"
            onClick={() => setLoadMoreCourses(!loadMoreCourses)}
          >
            {loadMoreCourses ? (
              <>
                <span>
                  <img src={loadMoreImg} alt="" />
                </span>
                <a>Show less...</a>
              </>
            ) : (
              <>
                <span>
                  <img src={loadMoreImg} alt="" />
                </span>
                <a>load more...</a>
              </>
            )}
          </div>
        </div>
      </section>
      <section className="testimonials homeSec3">
        <figure className="addAnimate" data-className="fadeIn">
          <div className="center addAnimate" data-className="fadeInBottom">
            <h4>Our track Record</h4>
            <h2>Because words aren't enough, we let numbers do the talking.</h2>
            <ul>
              <li>
                <h1>20.0000</h1>
                <h5>Over Registered Learners</h5>
              </li>
              <li>
                <h1>INR 73 LPA</h1>
                <h5>Highest Salary Offered</h5>
              </li>
              <li>
                <h1>50%</h1>
                <h5>Average Salary Hike</h5>
              </li>
            </ul>
          </div>
        </figure>
      </section>
      <section className="yyu homeSec6">
        <div
          className="center addAnimate features-project-right2"
          data-className="fadeInBottom"
        >
          <h2>Practiwiz Benefits</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <div className="clear"></div>

          <div className="benefits">
            <ul>
              <li className="active">Offline job Fairs & Networking Events</li>
              <li>Career Services</li>
              <li>Industry-leading Curriculum</li>
              <li>24X7 Learning Support</li>
            </ul>

            <div className="offline">
              <aside>
                <img src={benefitImg} alt="" />
              </aside>
              <article>
                <h2>Offline job Fairs & Networking Events</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <GoToTop />
    </>
  );
};

export default AllCourses;
