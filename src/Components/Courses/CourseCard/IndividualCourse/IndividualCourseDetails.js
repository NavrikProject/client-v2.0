import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../../course.css";
import Carousel from "react-elastic-carousel";
import mentor1 from "../../../../images/courseImages/mentors1.jpg";
import mentor2 from "../../../../images/courseImages/mentors2.jpg";
import mentor3 from "../../../../images/courseImages/mentors3.jpg";
import mentor4 from "../../../../images/courseImages/mentors4.jpg";
import innerBannerBig from "../../../../images/courseImages/inner-banner-big.jpg";
import innerBanner from "../../../../images/courseImages/inner-banner.jpg";
import innerBannerMobile from "../../../../images/courseImages/inner-banner-mobile.jpg";
import courseVideo1 from "../../../../images/courseImages/course-video1.jpg";
import courseVideo2 from "../../../../images/courseImages/course-video2.jpg";
import courseVideo3 from "../../../../images/courseImages/course-video3.jpg";
import courseImage from "../../../../images/courseImages/course-img1.jpg";
import { courseFaqData } from "../../../Data/CourseData";
const IndividualCourseDetails = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[3];
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
    console.log(index, "clicked");
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
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
                <h1>Jumpstart To Rpa Live Bot Development</h1>
              </span>
              <span>
                <h3>
                  This course will give a brief introduction to the
                  <br />
                  Robotic process Automation and also give the live <br />
                  projects on the rpa with hands-on experience
                </h3>
              </span>
              <ul>
                <li>
                  <span>Rating :</span>
                  <div className="star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </li>
                <li>
                  <span>No of People Registered :</span> 5
                </li>
                <li>
                  <span>Last update on :</span> 01/12/2022
                </li>
                <li>
                  <span>Course Created By :</span> Tarun Gautham
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
              <strong>
                Do you want to become a programmer? Do you want to learn how to
                create games, automate your browser, visualize data, and much
                more?
              </strong>
            </p>
            <p>
              If you’re looking to learn Python for the very first time or need
              a quick brush-up, this is the course for you!
            </p>
            <p>
              Python has rapidly become one of the most popular programming
              languages around the world. Compared to other languages such as
              Java or C++, Python consistently outranks and outperforms these
              languages in demand from businesses and job availability. The
              average Python developer makes over $100,000 - this number is only
              going to grow in the coming years.
            </p>
            <p>
              The best part? Python is one of the easiest coding languages to
              learn right now. It doesn’t matter if you have no programming
              experience or are unfamiliar with the syntax of Python. By the
              time you finish this course, you'll be an absolute pro at
              programming!
            </p>
            <p>
              This course will cover all the basics and several advanced
              concepts of Python. We’ll go over:
            </p>
            <ul>
              <li>The fundamentals of Python programming</li>
              <li>Writing and Reading to Files</li>
              <li>Automation of Word and Excel Files</li>
              <li>Web scraping with BeautifulSoup4</li>
              <li>Browser automation with Selenium</li>
              <li>Data Analysis and Visualization with MatPlotLib</li>
              <li>Regex parsing and Task Management</li>
              <li>GUI and Gaming with Tkinter</li>
              <li>And much more!</li>
            </ul>

            <article className="pages-tital">
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
            </article>
            <div className="clear"></div>
          </div>

          <div className="right-box85">
            <aside>
              <img src={courseImage} alt="" />
              <h1>₹3,399</h1>
              <a href="/">Buy now</a>
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
      <section className="ruty testimonials homeSec3">
        <figure className="addAnimate" data-className="fadeIn">
          <div className="center addAnimate" data-className="fadeInBottom">
            <h4>Syllabus</h4>
            <h2>
              Best-in-className content by leading faculty and industry leaders
              <br />
              in the form of videos, cases and projects.
            </h2>
            <a href="/">Download Syllabus</a>
          </div>
        </figure>
      </section>
      <section className="qwer yyu homeSec6">
        <div
          className="center addAnimate features-project-right2"
          data-className="fadeInBottom"
        >
          <h2>Our Faculties</h2>
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
          </ul>

          <div className="jumpstart">
            <h2>Jumpstart to rpa live bot development</h2>
            <article>
              <p>
                <strong>Who is this course for?</strong>
              </p>
              <ul>
                <li>
                  Graduates and Post-Graduates interested in RPA BOT development
                  skills
                </li>
                <li>
                  Working Software Professionals interested in RPA BOT
                  development skills
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
                  sessions with Instructors for doubt-clearing and coding help
                </li>
                <li>
                  Mentor Session – With Industry experts on career guidance,
                  experiences etc.
                </li>
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
                issued
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
      </section>
    </>
  );
};

export default IndividualCourseDetails;
