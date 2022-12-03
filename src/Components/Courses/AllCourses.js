import React, { useState } from "react";
import "./course.css";
import innerBannerWeb from "../../images/inner-banner.jpg";
import innerBannerMob from "../../images/inner-banner-mobile.jpg";
import searchIcon from "../../images/search.jpg";
import benefitImg from "../../images/benefits1.jpg";
import loadMoreImg from "../../images/load.jpg";
import CourseCard from "./CourseCard/CourseCard";
import GoToTop from "../../Components/GoToTop";
const AllCourses = () => {
  const [loadMoreCourses, setLoadMoreCourses] = useState(false);
  const [courseSearchItem, setCourseSearchItem] = useState("");
  return (
    <>
      <section class="inner-banner">
        <ul class="inner">
          <li class="bannerSlide">
            <figure class="only-des">
              <img src={innerBannerWeb} alt="" />
            </figure>
            <figure class="only-mobile">
              <img src={innerBannerMob} alt="" />
            </figure>
            <div class="bannerInfo">
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
      <section class="homeSec6">
        <div
          class="center addAnimate features-project-right2"
          data-class="fadeInBottom"
        >
          <article class="pages-tital">
            <h4>Our Courses</h4>
            <h2>Recommended Courses</h2>
          </article>
          <div class="search">
            <div class="search-box">
              <input
                type="text"
                class="search-input"
                placeholder="Search.."
                onChange={(event) => setCourseSearchItem(event.target.value)}
              />
              <button class="search-button">
                <i>
                  <img src={searchIcon} alt="" />
                </i>
              </button>
            </div>
          </div>
          <div class="clear"></div>
          <ul class="social_slide">
            <CourseCard
              courseSearchItem={courseSearchItem}
              loadMoreCourses={loadMoreCourses}
            />
          </ul>
          <div class="clear"></div>
          <div
            class="load-more"
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
      <section class="testimonials homeSec3">
        <figure class="addAnimate" data-class="fadeIn">
          <div class="center addAnimate" data-class="fadeInBottom">
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
      <section class="yyu homeSec6">
        <div
          class="center addAnimate features-project-right2"
          data-class="fadeInBottom"
        >
          <h2>Practiwiz Benefits</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <div class="clear"></div>

          <div class="benefits">
            <ul>
              <li class="active">Offline job Fairs & Networking Events</li>
              <li>Career Services</li>
              <li>Industry-leading Curriculum</li>
              <li>24X7 Learning Support</li>
            </ul>

            <div class="offline">
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
