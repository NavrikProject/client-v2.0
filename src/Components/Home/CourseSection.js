import React from "react";
import courseImg1 from "../../images/courses-img1.jpg";
import courseImg2 from "../../images/courses-img2.jpg";
import courseImg3 from "../../images/courses-img3.jpg";
import courseImg4 from "../../images/courses-img4.jpg";
import Carousel from "react-elastic-carousel";
import userImg1 from "../../images/user1.jpg";
import { Link } from "react-router-dom";
import { courseData } from "../Data/CourseData";
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
            {courseData
              .filter((courseFilter) => courseFilter.courseId <= 8)
              .map((course) => (
                <div key={course.courseId}>
                  <li className="social_item">
                    <a
                      href={`/courses/individual-course/${course.courseName
                        .split(" ")
                        .join("-")
                        .toLowerCase()}`}
                    >
                      <figure className="">
                        <img src={course.courseImg} alt="" />
                      </figure>
                      <article>
                        <h3>{course.courseName}</h3>
                        <div className="like_courses">
                          {course.courseRating === 5 && (
                            <>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                            </>
                          )}
                          {course.courseRating === 4 && (
                            <>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star "></span>
                            </>
                          )}
                          {course.courseRating === 3 && (
                            <>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star "></span>
                              <span className="fa fa-star "></span>
                            </>
                          )}
                          {course.courseRating === 2 && (
                            <>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star "></span>
                              <span className="fa fa-star "></span>
                              <span className="fa fa-star "></span>
                            </>
                          )}
                          {course.courseRating === 1 && (
                            <>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star "></span>
                              <span className="fa fa-star "></span>
                              <span className="fa fa-star "></span>
                              <span className="fa fa-star "></span>
                            </>
                          )}
                        </div>
                        {/* <div className="like_courses">525 Like</div> */}
                        <div className="name_courses">
                          {course.courseInstructorName}
                        </div>
                        <br />
                        <div className="top-line">
                          <span>
                            <img src={userImg1} alt="" />{" "}
                            <b>{course.courseUsers}</b>
                          </span>
                          <aside>₹ {course.coursePrice}</aside>
                        </div>
                        <div className="clr"></div>
                      </article>
                    </a>
                  </li>
                </div>
              ))}
          </Carousel>
        </ul>
        <div className="more">
          <Link style={{ color: "white" }} to="/courses">
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
