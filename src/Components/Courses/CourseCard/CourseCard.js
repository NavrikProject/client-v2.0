import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import userImg1 from "../../../images/user1.jpg";
import { courseData } from "../../Data/CourseData";

const CourseCard = ({ loadMoreCourses, courseSearchItem }) => {
  const [allCourses, setAllCourses] = useState([]);
  useEffect(() => {
    const getAllJobPosts = async () => {
      const res = await axios.get(
        "https://deploy-practiwiz.azurewebsites.net/api/courses/all-courses"
      );
      if (res.data.success) {
        setAllCourses(res.data.success);
      }
      if (res.data.error) {
        setAllCourses([]);
      }
    };
    getAllJobPosts();
  }, []);
  return (
    <>
      {courseData
        .filter((courseFilter) =>
          loadMoreCourses === true
            ? courseData.length <= 20
            : courseFilter.courseId <= 8
        )
        .filter((courseFilter) =>
          courseSearchItem === " "
            ? courseFilter
            : courseFilter.courseName
                .toLowerCase()
                .includes(courseSearchItem.toLowerCase()) ||
              courseFilter.courseInstructorName
                .toLowerCase()
                .includes(courseSearchItem.toLowerCase())
        )
        .map((course) => (
          <>
            <li class="social_item zoom" key={course.courseId}>
              <a
                href={`/courses/individual-course/${course.courseName
                  .split(" ")
                  .join("-")
                  .toLowerCase()}`}
              >
                <figure class="">
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
                  {/* <div class="like_courses">525 Like</div> */}
                  <div class="name_courses">{course.courseInstructorName}</div>
                  <br />
                  <div class="top-line">
                    <span>
                      <img src={userImg1} alt="" /> <b>{course.courseUsers}</b>
                    </span>
                    <aside>₹ {course.coursePrice}</aside>
                  </div>
                  <div class="clr"></div>
                </article>
              </a>
            </li>
          </>
        ))}
    </>
  );
};

export default CourseCard;
