import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import userImg1 from "../../../images/user1.jpg";

const CourseCard = ({ loadMoreCourses, courseSearchItem }) => {
  const [allCourses, setAllCourses] = useState([]);
  useEffect(() => {
    const getAllJobPosts = async () => {
      const res = await axios.get(
        "https://deploy-practiwiz.azurewebsites.net/api/courses/all-courses"
      );
      if (res.data) {
        setAllCourses(res.data);
      }
    };
    getAllJobPosts();
  }, []);
  return (
    <>
      {allCourses
        .filter((courseFilter) =>
          courseSearchItem === " "
            ? courseFilter
            : courseFilter.course_name
                .toLowerCase()
                .includes(courseSearchItem.toLowerCase()) ||
              courseFilter.course_trainer_name
                .toLowerCase()
                .includes(courseSearchItem.toLowerCase())
        )
        .map((course) => (
          <>
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
                      <b>{" " + course.course_participants}</b>
                    </span>
                    <aside>₹ {course.course_price}</aside>
                  </div>
                  <div className="clr"></div>
                </article>
              </a>
            </li>
          </>
        ))}
    </>
  );
};

export default CourseCard;
