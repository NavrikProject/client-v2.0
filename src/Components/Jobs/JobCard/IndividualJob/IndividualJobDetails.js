import axios from "axios";
import "../../job.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppliedText } from "./IndividualJobElements";
import LoginModel from "../../../Forms/AccountForms/LoginModel.js";
import { useSelector } from "react-redux";
import { ModelFixedHeight } from "../../../utils/Model";
import ApplyJobForm from "../ApplyJobForm";
import IndJobSkelton from "../../../SkeltonLoaders/IndJobSkelton";
const IndividualJobDetails = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [individualJobDetail, setIndividualJobDetail] = useState([]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showApplyJobForm, setApplyJobForm] = useState(false);
  const [indJobDetails, setIndJobDetails] = useState("");
  const [appliedStatus, setAppliedStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  let path = location.pathname.split("/")[3];
  useEffect(() => {
    const getAllJobPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://practiwiz-backend.azurewebsites.net/api/jobs/get/individual-job-post/${path}`
      );
      if (res.data.success) {
        setIndividualJobDetail(res.data.success);
        setLoading(false);
      }
      if (res.data.error) {
        setIndividualJobDetail([]);
        setLoading(false);
      }
    };
    getAllJobPosts();
  }, [path]);
  useEffect(() => {
    const getJobAppliedStatus = async () => {
      const res = await axios.post(
        `https://practiwiz-backend.azurewebsites.net/api/jobs/apply/post/applied-status/${path}`,
        {
          email: user?.email,
        }
      );
      if (res.data.success) {
        setAppliedStatus(true);
      }
      if (res.data.error) {
        setAppliedStatus(false);
      }
    };
    getJobAppliedStatus();
  }, [path, user?.email]);
  const showLoginModelHandler = () => {
    setShowLoginModal(!showLoginModal);
  };
  const showApplyJobModalHandler = (job) => {
    setShowLoginModal(false);
    setApplyJobForm(!showApplyJobForm);
    setIndJobDetails(job);
  };
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
  return (
    <>
      {showLoginModal && (
        <ModelFixedHeight closeModelHandler={showLoginModelHandler}>
          <LoginModel showLoginModelHandler={showLoginModelHandler} />
        </ModelFixedHeight>
      )}
      {showApplyJobForm && (
        <ApplyJobForm
          showApplyJobModalHandler={showApplyJobModalHandler}
          indJobDetails={indJobDetails}
        />
      )}
      <div className="content_panel transition4">
        <section className="no-back section resources-bg specialities middle">
          <div className="details-pages body-part-list-1 center">
            {loading ? (
              <IndJobSkelton />
            ) : (
              <>
                <div className="col-sm-8 padding-right">
                  <div className="features_items">
                    {/* <!--features_items--> */}
                    <h2>Job Details</h2>
                    {individualJobDetail?.length > 0 ? (
                      individualJobDetail?.map((job) => (
                        <div key={job.job_post_dtls_id}>
                          <div className="apply-now">
                            <h3>
                              Opening For{" "}
                              {" " + job.job_post_role.split("-").join(" ")}(
                              {job.job_post_work_type})
                            </h3>
                            <h4>{" " + job.hiring_company_name}</h4>
                            <aside>
                              <img src={job.hiring_company_image} alt="" />
                            </aside>
                            <ul>
                              <li>{job.job_post_min_exp} years</li>
                              <li>{job.job_post_expected_salary} PA.</li>
                              <li>{job.hiring_company_address}</li>
                            </ul>
                            <div className="register-login">
                              {user && appliedStatus === true && (
                                <AppliedText>
                                  <i className="fa-solid fa-circle-info"></i>
                                  You have all ready applied.
                                </AppliedText>
                              )}
                              {user && appliedStatus === false && (
                                <div
                                  className="login"
                                  onClick={() => {
                                    showApplyJobModalHandler(job);
                                  }}
                                >
                                  <a>Apply Now</a>
                                </div>
                              )}
                              {!user && appliedStatus === false && (
                                <>
                                  <div className="register">
                                    <a href="/register">Register to apply</a>
                                  </div>
                                  <div
                                    className="login"
                                    onClick={showLoginModelHandler}
                                  >
                                    <a>Login to apply</a>
                                  </div>
                                </>
                              )}
                            </div>
                            <div className="clear"></div>
                            <div className="bottom">
                              <div>
                                Posted:
                                <span>
                                  {/* {new Date(job.job_post_cr_dt).toDateString()} */}
                                  {timeSince(new Date(job.job_post_cr_dt))}
                                </span>
                              </div>
                              <div>
                                Job Applicants: <span>0</span>
                              </div>
                              <div className="all-job">
                                {/* <a href="">Send Me Jobs Like This</a> */}
                              </div>
                            </div>
                          </div>

                          <div className="job-description">
                            <h3>Job description</h3>

                            <article>
                              <h4>Job description:-</h4>
                              <ul>
                                {job.job_post_description
                                  .split("•")
                                  ?.map((desc) => (
                                    <li>{desc}</li>
                                  ))}
                                <li>
                                  Work From Home ({job.job_post_work_type})
                                </li>
                              </ul>
                              <div className="shift">
                                <strong>Shift Window :- </strong>NA
                                <br />
                                <strong>Working Hours :-</strong> 6 Hours or 8
                                Hours
                                <br />
                                <strong>Working Days :-</strong> NA
                              </div>

                              {/* <h4>Essential Competencies:-</h4>
                          <ul>
                            <li>Excellent subject knowledge.</li>
                            <li>
                              Excellent English communication skills
                              (Reading/writing).
                            </li>
                            <li>
                              Experience of teaching/tutoring/ Content Developer
                              can be considered.
                            </li>
                            <li>
                              Hands on experience in surfing the Internet, using
                              search tools like Google etc.
                            </li>
                          </ul> */}
                              <h4>Education Qualification</h4>
                              <div className="shift">
                                {job.job_post_min_qual}
                              </div>
                              {/* <h4>Subjects Opening For:-</h4>
                          <ul>
                            <li>Accounting</li>
                            <li>Finance</li>
                            <li>Computer Science</li>
                            <li>Economics</li>
                            <li>Statistics & Probability</li>
                            <li>Management</li>
                          </ul> */}

                              <h4>Key Skills</h4>
                              <div className="key">
                                {job.job_post_req_skills
                                  .split(",")
                                  .map((skill) => (
                                    <a>{skill}</a>
                                  ))}
                              </div>
                            </article>
                          </div>

                          <div className="about-company">
                            <h2>About Company</h2>
                            <p>{job.hiring_company_about}</p>
                            <p>
                              <strong>For details,</strong> we would welcome you
                              to visit our website{" "}
                              <a
                                target="_blank"
                                rel="noreferrer noopener"
                                href={`${job.hiring_company_website}`}
                              >
                                {job.hiring_company_website}
                              </a>
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No job found</p>
                    )}
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="left-sidebar">
                    <h2>Category</h2>
                    <div
                      className="category panel-group category-products"
                      id="accordian"
                    >
                      {/* <!--category-productsr--> */}
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordian"
                              href="#sportswear"
                            >
                              <span className="badge pull-right"></span>
                              Office Boy/Peon<b>(22)</b>
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordian"
                              href="#mens"
                            >
                              <span className="badge pull-right"></span>
                              Cook/Chef <b>(22)</b>
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordian"
                              href="#womens"
                            >
                              <span className="badge pull-right"></span>
                              Delivery Person <b>(5)</b>
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a href="#">
                              Driver Car/Bike <b>(88)</b>
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a href="#">
                              Domestic Help <b>(01)</b>
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a href="#">Carer</a>
                            <b>(7)</b>
                          </h4>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a href="#">
                              Nurse <b>(05)</b>
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a href="#">
                              Security Guard <b>(40)</b>
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a href="#">
                              Telecaller/BPO <b>(82)</b>
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                    {/* <!--/category-productsr--> */}

                    <h2>GOOGLE ADS</h2>
                    <div className="">
                      <img src="images/ads2.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default IndividualJobDetails;
