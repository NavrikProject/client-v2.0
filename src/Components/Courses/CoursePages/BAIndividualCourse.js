import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../course.css";
import Carousel from "react-elastic-carousel";
import mentor1 from "../../../images/courseImages/mentors1.jpg";
import mentor2 from "../../../images/courseImages/mentors2.jpg";
import mentor3 from "../../../images/courseImages/mentors3.jpg";
import mentor4 from "../../../images/courseImages/mentors4.jpg";
import innerBannerBig from "../../../images/courseImages/inner-banner-big.jpg";
import innerBanner from "../../../images/courseImages/inner-banner.jpg";
import innerBannerMobile from "../../../images/courseImages/inner-banner-mobile.jpg";
import courseVideo1 from "../../../images/courseImages/course-video1.jpg";
import courseVideo2 from "../../../images/courseImages/course-video2.jpg";
import courseVideo3 from "../../../images/courseImages/course-video3.jpg";
import { courseFaqData } from "../../Data/CourseData";
import axios from "axios";
import { useSelector } from "react-redux";
import GoToTop from "../../GoToTop";
const IndividualCourses = () => {
  const location = useLocation();
  let path = location.pathname.split("/")[2];
  const [courseDetails, setCourseDetails] = useState([]);
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    document.title = `Practiwiz | ${path
      .toLowerCase()
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")}`;
    try {
      const getIndMentorDetails = async () => {
        const res = await axios.get(
          `https://deploy-practiwiz.azurewebsites.net/api/courses/full-course?name=${path}`
        );
        if (res.data.success) {
          setCourseDetails(res.data.success);
        }
        if (res.data.error) {
          setCourseDetails([]);
        }
      };
      getIndMentorDetails();
    } catch (error) {
      return;
    }
  }, [path]);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  const [selected, setSelected] = useState(null);
  const toggleAccordion = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <>
      {courseDetails?.map((course) => (
        <>
          <section className="inner-banner">
            <ul className="inner">
              <li className="bannerSlide">
                <figure className="only-des-big">
                  <img src={innerBannerBig} alt="" />
                </figure>
                {/* <figure className="only-des">
              <img src={innerBanner} alt="" />
            </figure> */}
                <figure className="only-mobile">
                  <img src={innerBannerMobile} alt="" />
                </figure>
                <div className="bannerInfo">
                  <span>
                    <h1>{course.course_title.split("-").join(" ")}</h1>
                  </span>
                  <span>
                    <h3>{course.course_desc}</h3>
                  </span>
                  <ul>
                    <li>
                      <span>Rating :</span>
                      <div className="star">
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
                    </li>
                    <li>
                      <span>No of People Registered : </span>
                      {" " + course.course_participants}
                    </li>
                    <li>
                      <span>Last update on :</span>
                      {" " + new Date().toDateString()}
                    </li>
                    <li>
                      <span>Course Created By :</span>
                      {" " + course.course_trainer_name}
                    </li>
                    <li>
                      <span>Languages :</span> English
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>
          <section className="homeSec6">
            <div
              className="center addAnimate features-project-right2"
              data-className="fadeInBottom"
            >
              <div className="left-box85">
                <h2>Description</h2>
                <p>
                  <strong>Do you want to become a Business Analyst?</strong>
                </p>
                <p>
                  If you want to become Business Analyst or need a quick
                  brush-up, this is the course for you!
                </p>
                <p>
                  A business analyst is a professional who is responsible for
                  identifying and analyzing the needs of an organization and
                  developing solutions to business problems. These solutions may
                  include process improvements, technology implementations, or
                  strategic changes to the way the organization operates.
                  Business analysts typically work closely with stakeholders in
                  the organization to understand their needs and help define
                  requirements for the solution. They may also be responsible
                  for helping to implement the solution and measure its
                  effectiveness.
                </p>

                <p>
                  This course will cover all the basics and several concepts of
                  Business Analyst. We’ll go over:
                </p>
                <ul>
                  <li>Requirements gathering and analysis</li>
                  <li>Process modeling and improvement</li>
                  <li>Project management</li>
                  <li>Data analysis and visualization</li>
                  <li>Business case development</li>
                  <li>Communication and collaboration</li>
                  <li>Agile and Waterfall methodologies</li>
                  <li>Stakeholder management</li>
                  <li>Solution evaluation and implementation.</li>
                  <li>And much more!</li>
                </ul>

                {/* <article className="pages-tital">
                  <h2>Course Content</h2>
                  <ul>
                    <li>
                      <img src={courseVideo1} alt="" />
                    </li>
                    <li>
                      <img src={courseVideo2} alt="" />
                    </li>
                    <li>
                      <img src={courseVideo3} alt="" />
                    </li>
                  </ul>
                </article> */}
                <div className="clear"></div>
              </div>

              <div className="right-box85">
                <aside>
                  <img src={course.course_image} alt="" />
                  {course.course_price === 0 ? (
                    <>
                      <h1>
                        <span
                          style={{
                            textDecoration: "line-through",
                            marginRight: "5px",
                          }}
                        >
                          ₹ 4999
                        </span>
                        Free <small> (100% off)</small>
                      </h1>
                    </>
                  ) : (
                    <h1>
                      ₹{course.course_price}
                      <small> excluding GST</small>
                    </h1>
                  )}
                  {user ? (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={course.course_graphy_link}
                    >
                      Buy now
                    </a>
                  ) : (
                    <a rel="noreferrer" href={"/login"}>
                      Login
                    </a>
                  )}
                </aside>
                <article>
                  <h5>This course includes:</h5>
                  <ul>
                    <li>14 hours on-demand video</li>
                    <li>1 article</li>
                    <li>3 downloadable resources</li>
                    <li>Full lifetime access</li>
                    <li>Access on mobile and TV</li>
                    <li>Certificate of completion</li>
                  </ul>
                </article>
              </div>

              <div className="clear"></div>
            </div>
          </section>
        </>
      ))}

      <section className="ruty testimonials homeSec3">
        <figure className="addAnimate" data-className="fadeIn">
          <div className="center addAnimate" data-className="fadeInBottom">
            <h4>Syllabus</h4>
            <h2>
              Best-in-className content by leading faculty and industry leaders
              <br />
              in the form of videos, cases and projects.
            </h2>
            <a>Download Syllabus</a>
          </div>
        </figure>
      </section>
      <section className="qwer yyu homeSec6">
        <div
          className="center addAnimate features-project-right2"
          data-className="fadeInBottom"
        >
          {/* <h2>Our Faculties</h2>
          <ul
            className="kk whyGoForSf_slid delay3 addAnimate"
            data-className="fadeInBottom"
          >
            <Carousel breakPoints={breakPoints}>
              <li className="ps_item auto">
                <aside>
                  <img src={mentor1} alt="" />
                </aside>
                <h3>Md Dalwar Hossain</h3>
                <p>Web Developer</p>
                <div className="star">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
              </li>
              <li className="ps_item auto">
                <aside>
                  <img src={mentor2} alt="" />
                </aside>
                <h3>Priyanka Chowdhury</h3>
                <p>Web Analyzer</p>

                <div className="star">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
              </li>
              <li className="ps_item auto">
                <aside>
                  <img src={mentor3} alt="" />
                </aside>
                <h3>Nazma Begum</h3>
                <p>Digital Marketer</p>
                <div className="star">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
              </li>
              <li className="ps_item auto">
                <aside>
                  <img src={mentor4} alt="" />
                </aside>
                <h3>Soneya Akther</h3>
                <p>SEO Expert</p>
                <div className="star">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
              </li>
              <li className="ps_item auto">
                <aside>
                  <img src={mentor2} alt="" />
                </aside>
                <h3>Priyanka Chowdhury</h3>
                <p>Web Analyzer</p>

                <div className="star">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
              </li>
            </Carousel>
          </ul> */}

          <div className="jumpstart">
            <h2>{path.split("-").join(" ").toUpperCase()}</h2>
            <article>
              <p>
                <strong>Who is this course for?</strong>
              </p>
              <ul>
                <li>Professional & MBA Students</li>
                <li>Interested in pursuing a career in IT Business Analysis</li>
                <li>
                  IT Developers with 3 to 5 years of experience interested in
                  transitioning to a BA role
                </li>
              </ul>

              <p>
                <strong>What is the Training Methodology?</strong>
              </p>
              <ul>
                <li>
                  Self-paced learning - Trainees get access to on-line content
                  through Practiwiz
                </li>
                <li>
                  Regular Instructor Sessions - At regular milestones on-line
                  sessions with Instructors for doubt-clearing.
                </li>
                <li>
                  Mentor Session – With Industry experts on career guidance,
                  experiences etc.
                </li>
              </ul>
              <p>
                <strong>Course content Highlights</strong>
              </p>
              <p>Easy to digest content on</p>
              <ul>
                <li>BA Skill set</li>
                <li>BA Case studies</li>
                <li>Assignments</li>
              </ul>
              <p>
                <strong>How is this training different from others ?</strong>
              </p>
              <ul>
                <li>
                  Practiwiz is part of Navrik Software, a software development
                  company that specializes in delivering RPA, AI and ML
                  solutions to companies globally
                </li>
                <li>Content is very easy to understand </li>
                <li>The training is Practical and not just theory</li>
              </ul>

              <p>
                <strong>What will you get after completion ?</strong>
              </p>
              <p>
                On successful completion of the course a certificate will be
                issued and Course completion prize
              </p>

              <p>
                <strong>Does Practiwiz provide Internships?</strong>
              </p>
              <p>
                Yes, to select trainees internships are provided at Navrik and
                other companies with tie-ups. The internships are paid where
                students work on live customer projects
              </p>

              <p>
                <strong>Does Practiwiz provide jobs?</strong>
              </p>
              <p>
                We have tie-ups with corporates across the globe and get our
                candidates job-interviews. Depending on the capability of the
                candidate the selections happen
              </p>

              <p>
                <strong>Does Practiwiz guarantee jobs?</strong>
              </p>
              <p>
                No, it’s not possible for anyone to guarantee jobs. Jobs
                requirements are given by companies based on customer projects.
                Our belief is simple. The only person who can guarantee you a
                job is you. If you have the right skills and right attitude jobs
                will chase you.
              </p>
            </article>
          </div>

          <h2>Here some Faq</h2>
          {courseFaqData?.map((faq, index) => (
            <div key={index}>
              <button
                className={
                  selected === index ? "accordion active" : "accordion"
                }
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
              </button>
              {selected === index ? (
                <div className={selected ? "panel showAccordion" : "panel"}>
                  <p>{faq.answer}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
        {/* <div className="center">
          <div className="courseHighlightFlex">
            <div className="courseHighlightItems">
              <div className="courseHighlightItem">
                <div>
                  <img src={CallCenter} alt="call center" />
                  <p>
                    24/7 Customer support, Available for all the time with great
                    support
                  </p>
                </div>
              </div>
            </div>
            <div className="courseHighlightFlex">
              <div className="courseHighlightItems">
                <div className="courseHighlightItem">
                  <img src={Content} alt=" " />
                  <p>
                    Exclusive course content, co-created by the industrial
                    experts and professors
                  </p>
                </div>
              </div>
            </div>
            <div className="courseHighlightFlex">
              <div className="courseHighlightItems">
                <div className="courseHighlightItem">
                  <img src={Online} alt="" />
                  <p>
                    Live online master classes delivered by industrial faculty
                  </p>
                </div>
              </div>
            </div>
            <div className="courseHighlightFlex">
              <div className="courseHighlightItems">
                <div>
                  <img src={Content2} alt="" />
                  <p>
                    Exclusive course content, co-created by the industrial
                    experts and professors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      <GoToTop />
    </>
  );
};

export default IndividualCourses;
