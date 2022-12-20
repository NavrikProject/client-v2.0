import React from "react";
import { Link } from "react-router-dom";
import "./job.css";
import onLineSupport from "../../images/jobImages/online-support.png";
import global from "../../images/jobImages/global.png";
import clock from "../../images/jobImages/clock.png";
import analysis from "../../images/jobImages/analysis.png";
import piggyBank from "../../images/jobImages/piggy-bank.png";
import sales from "../../images/jobImages/sales.png";
import reading from "../../images/jobImages/reading.png";
import startup from "../../images/jobImages/startup.png";
import suitcase from "../../images/jobImages/suitcase.png";
import discount from "../../images/jobImages/discount.png";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import JobCardSkelton from "../SkeltonLoaders/JobCardSkelton";
import { experienceInYears } from "../Data/JobApplicationData";
const JobHome = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchItem, setSearchItem] = useState({
    skills: "",
    experience: "",
    location: "",
  });
  useEffect(() => {
    const getAllJobPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        !searchItem.skills &&
          !searchItem.location &&
          !searchItem.experience &&
          "https://deploy-practiwiz.azurewebsites.net/api/jobs/get/all-jobs-posts"
      );
      if (res.data.success) {
        setAllJobs(res.data.success);
        setLoading(false);
      }
      if (res.data.error) {
        setAllJobs([]);
        setLoading(false);
      }
    };
    getAllJobPosts();
  }, [searchItem.skills, searchItem.location, searchItem.experience]);
  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];
  function timeSince(date) {
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    const interval = intervals.find((i) => i.seconds < seconds);
    const count = Math.floor(seconds / interval.seconds);
    return `${count} ${interval.label}${count !== 1 ? "s" : ""} ago`;
  }
  const jobSearchHandler = async () => {
    if (!searchItem.skills && !searchItem.experience && !searchItem.location) {
      return;
    }
    const res = await axios.get(
      `https://deploy-practiwiz.azurewebsites.net/api/jobs/get/search?skills=${searchItem?.skills}&experience=${searchItem?.experience}&location=${searchItem?.location}`
    );
    if (res.data.success) {
      setAllJobs(res.data.success);
      setLoading(false);
    }
    if (res.data.error) {
      setAllJobs([]);
      setLoading(false);
    }
  };
  return (
    <>
      <section class="">
        <div class="qsb-header-container">
          <h1 class="qsb-title">Find your dream job now</h1>
          <div class="qsb-byLine">So many jobs for you to explore</div>
        </div>
        <div
          class="center addAnimate features-project-right2"
          data-class="fadeInBottom"
        >
          <section class="listing no-back section resources-bg specialities middle">
            <div class="body-part-list center">
              <div class="job-search">
                <ul>
                  <li>
                    <input
                      onChange={(event) =>
                        setSearchItem({
                          ...searchItem,
                          skills: event.target.value,
                        })
                      }
                      type="text"
                      name="fname"
                      placeholder="Enter skills"
                    />
                  </li>
                  <li>
                    <select
                      onChange={(event) =>
                        setSearchItem({
                          ...searchItem,
                          experience: event.target.value,
                        })
                      }
                    >
                      <option value="">Select experience</option>
                      {experienceInYears?.map((year) => (
                        <option value={year.value}>{year.label} Years</option>
                      ))}
                    </select>
                  </li>
                  <li>
                    <input
                      onChange={(event) =>
                        setSearchItem({
                          ...searchItem,
                          location: event.target.value,
                        })
                      }
                      type="text"
                      placeholder="Enter location"
                    />
                  </li>
                  <li>
                    <input
                      onClick={jobSearchHandler}
                      type="submit"
                      value="Search"
                    />
                  </li>
                </ul>
                <div class="clear"></div>
              </div>
              <div class="sec2">
                <ul>
                  <li>
                    <aside>
                      <i>
                        <img src={onLineSupport} alt="" />
                      </i>
                      <p>Remote</p>
                    </aside>
                  </li>
                  <li>
                    <aside>
                      <i>
                        <img src={global} alt="" />
                      </i>
                      <p>MNC</p>
                    </aside>
                  </li>
                  <li>
                    <aside>
                      <i>
                        <img src={analysis} alt="" />
                      </i>
                      <p>Temp WFH</p>
                    </aside>
                  </li>
                  <li>
                    <aside>
                      <i>
                        <img src={piggyBank} alt="" />
                      </i>
                      <p>Banking</p>
                    </aside>
                  </li>
                  <li>
                    <aside>
                      <i>
                        <img src={startup} alt="" />
                      </i>
                      <p>Startup</p>
                    </aside>
                  </li>
                  <li>
                    <aside>
                      <i>
                        <img src={sales} alt="" />
                      </i>
                      <p>Analytics</p>
                    </aside>
                  </li>
                  <li>
                    <aside>
                      <i>
                        <img src={discount} alt="" />
                      </i>
                      <p>Fresher</p>
                    </aside>
                  </li>
                  <li>
                    <aside>
                      <i>
                        <img src={clock} alt="" />
                      </i>
                      <p>Sales</p>
                    </aside>
                  </li>
                  <li>
                    <aside>
                      <i>
                        <img src={suitcase} alt="" />
                      </i>
                      <p>Marketing</p>
                    </aside>
                  </li>
                  <li>
                    <aside>
                      <i>
                        <img src={reading} alt="" />
                      </i>
                      <p>Software</p>
                    </aside>
                  </li>
                </ul>
                <div class="clear"></div>
              </div>

              <div className="padding-right">
                <div className="features_items">
                  {/* <!--<h2 className="title text-center"></h2>--> */}
                  <div className="top-tital">
                    <h2>
                      <strong>Recently posted </strong>
                    </h2>
                  </div>
                  <div className="clr"></div>
                  <div className="col-sm-12">
                    <div className="product-image-wrapper">
                      {loading ? (
                        <>
                          <JobCardSkelton /> <JobCardSkelton />
                          <JobCardSkelton /> <JobCardSkelton />
                          <JobCardSkelton />
                        </>
                      ) : allJobs?.length > 0 ? (
                        allJobs
                          ?.slice(0, searchItem ? allJobs.length : 5)
                          .map((job) => (
                            <div key={job.job_post_dtls_id}>
                              <article
                                className="latest wow fadeInDown"
                                data-wow-duration="0.4s"
                              >
                                <div className="job-list-left">
                                  <img src={job.hiring_company_image} alt="" />
                                </div>
                                <div className="job-list-center">
                                  <p>
                                    <strong>
                                      {" " + job.hiring_company_name} -{" "}
                                    </strong>
                                    {"Looking for a "}
                                    {" " +
                                      job.job_post_role
                                        .split("-")
                                        .join(" ")}{" "}
                                    at
                                    {" " + job.hiring_company_city},{" "}
                                    {" " + job.hiring_company_state}. Salary{" "}
                                    {" " + job.job_post_expected_salary + " "}{" "}
                                    Per Annum
                                  </p>
                                  <p>
                                    <b>Key Skills</b> :
                                    {" " + job.job_post_req_skills + " "}
                                    <b>Experience</b> :{" "}
                                    {" " + job.job_post_min_exp} Years
                                  </p>
                                  <ul>
                                    <li>
                                      Location -{" "}
                                      {" " +
                                        job.hiring_company_city +
                                        "," +
                                        job.hiring_company_state}
                                    </li>
                                    <li>
                                      {timeSince(new Date(job.job_post_cr_dt))}
                                      {/* {new Date(
                                        job.job_post_cr_dt
                                      ).toDateString()} */}
                                    </li>
                                    <li>{job.job_post_min_qual} required</li>
                                    <li>{" " + job.job_post_job_type}</li>
                                  </ul>
                                </div>
                                <div className="job-list-right">
                                  <a
                                    href={`/jobs/individual-job/${job.job_post_unique_id}`}
                                  >
                                    Apply Now
                                  </a>
                                </div>
                              </article>
                            </div>
                          ))
                      ) : (
                        <p>No job found</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="job-card">
                <h2>Cloud Automation Engineer</h2>
                <ul>
                  <li>
                    <strong>Experience:</strong> 0-3 Yrs
                  </li>
                  <li>
                    <strong>Work Type:</strong> Office
                  </li>
                  <li>
                    <strong>Key Skills:</strong> Rgettreer
                  </li>
                  <li>
                    <strong>Office Address:</strong> Dubai
                  </li>
                  <li>
                    <strong>Salary: </strong>2,00,000 - 7,00,000
                  </li>
                  <li>
                    <strong>Qualification:</strong> Graduation
                  </li>
                  <li>
                    <strong>Employment Type:</strong> Full Time
                  </li>
                </ul>
                <div class="clear"></div>
                <p>
                  <strong>Note:</strong> Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book.
                </p>
                <span>
                  <strong>Posted On:</strong> 17th November 2022
                </span>

                <div class="clear"></div>
                <article>
                  <a href="job-listing.html">View Job</a>
                  <a href="login.html">Login to Apply</a>
                </article>
                <div class="clear"></div>
              </div> */}
            </div>
          </section>
          <div className="allJobsButton">
            <Link style={{ color: "white" }} to="/all-jobs">
              View All Jobs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobHome;
