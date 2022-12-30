import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import userImg1 from "../../images/user1.jpg";
import { Link } from "react-router-dom";
import { courseData } from "../Data/CourseData";
import axios from "axios";
const CourseSection = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  const [allCourses, setAllCourses] = useState([]);
  useEffect(() => {
    const getAllCourses = async () => {
      const res = await axios.get(
        "https://deploy-practiwiz.azurewebsites.net/api/courses/all-courses"
      );
      if (res.data) {
        setAllCourses(res.data);
      }
    };
    getAllCourses();
  }, []);
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
            {allCourses?.splice(0, 8).map((course) => (
              <div key={course.course_id}>
                <li className="social_item zoom" key={course.course_id}>
                  <a
                    href={`/course/${course.course_name
                      .split(" ")
                      .join("-")
                      .toLowerCase()}`}
                  >
                    <figure className="">
                      <img src={course.course_image} alt="" />
                    </figure>
                    <article>
                      <h3>{course.course_name}</h3>
                      <div className="like_courses">
                        {course.course_rating === 5 && (
                          <>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                          </>
                        )}
                        {course.course_rating === 4 && (
                          <>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star "></span>
                          </>
                        )}
                        {course.course_rating === 3 && (
                          <>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star "></span>
                            <span className="fa fa-star "></span>
                          </>
                        )}
                        {course.course_rating === 2 && (
                          <>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star "></span>
                            <span className="fa fa-star "></span>
                            <span className="fa fa-star "></span>
                          </>
                        )}
                        {course.course_rating === 1 && (
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
                        {course.course_trainer_name}
                      </div>
                      <br />
                      <div className="top-line">
                        <span>
                          <img src={userImg1} alt="" />
                          <b> {" " + course.course_participants}</b>
                        </span>
                        <aside>₹ {course.course_price}</aside>
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
