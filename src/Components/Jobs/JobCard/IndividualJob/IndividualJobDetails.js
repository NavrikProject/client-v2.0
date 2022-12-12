import axios from "axios";
import "../../job.css";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  IndividualJobDesc,
  IndividualJobDescriptionDiv,
  IndividualJobDescTitle,
  IndividualJobDisplayFlex,
  IndividualJobDiv,
  IndividualJobDivLeft,
  IndividualJobDivRight,
  IndividualJobList,
  IndividualJobSection,
  IndividualJobUl,
  IndividualJobWrapper,
  ApplyNowButton,
  JobCardDescription,
  JobCardDisplayFlexDiv,
  JobCardSection,
  JobTitle,
  ViewJobButton,
  AppliedText,
} from "./IndividualJobElements";
import TrendingJobs from "./TrendingJobs";
import LoginModel from "../../../Forms/AccountForms/LoginModel.js";
import { useDispatch, useSelector } from "react-redux";
import { ModelFixedHeight } from "../../../utils/Model";
import ApplyJobForm from "../ApplyJobForm";

const IndividualJobDetails = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [individualJobDetail, setIndividualJobDetail] = useState([]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showApplyJobForm, setApplyJobForm] = useState(false);
  const [indJobDetails, setIndJobDetails] = useState("");
  const [appliedStatus, setAppliedStatus] = useState(false);

  const location = useLocation();
  let path = location.pathname.split("/")[3];
  useEffect(() => {
    const getAllJobPosts = async () => {
      const res = await axios.get(
        `https://deploy-practiwiz.azurewebsites.net/api/jobs/get/individual-job-post/${path}`
      );
      if (res.data.success) {
        setIndividualJobDetail(res.data.success);
      }
      if (res.data.error) {
        setIndividualJobDetail([]);
      }
    };
    getAllJobPosts();
  }, [path]);
  useEffect(() => {
    const getJobAppliedStatus = async () => {
      const res = await axios.post(
        `https://deploy-practiwiz.azurewebsites.net/api/jobs/apply/post/applied-status/${path}`,
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
      {" "}
      {showLoginModal && (
        <ModelFixedHeight closeModelHandler={showLoginModelHandler}>
          <LoginModel />
        </ModelFixedHeight>
      )}
      {showApplyJobForm && (
        <ApplyJobForm
          showApplyJobModalHandler={showApplyJobModalHandler}
          indJobDetails={indJobDetails}
        />
      )}
      <div class="content_panel transition4">
        <section class="no-back section resources-bg specialities middle">
          <div class="details-pages body-part-list-1 center">
            <div class="col-sm-8 padding-right">
              <div class="features_items">
                {/* <!--features_items--> */}
                <h2>Job Details</h2>
                {individualJobDetail?.length > 0 ? (
                  individualJobDetail?.map((job) => (
                    <div key={job.job_post_dtls_id}>
                      <div class="apply-now">
                        <h3>
                          Opening For Online Tutor-Work From Home(Part Time)
                        </h3>
                        <h4>
                          Trivium Education Services (P) Limited 4.0 (81
                          Reviews)
                        </h4>
                        <aside>
                          <img src="images/job-comp-logo1.jpg" alt="" />
                        </aside>
                        <ul>
                          <li>0 - 5 years</li>
                          <li>Not Disclosed</li>
                          <li>
                            Kolkata, Hyderabad/Secunderabad, Pune, Ahmedabad
                          </li>
                        </ul>
                        <div class="register-login">
                          {user && appliedStatus === true && (
                            <AppliedText>
                              <i className="fa-solid fa-circle-info"></i>
                              You have all ready applied.
                            </AppliedText>
                          )}
                          {user && appliedStatus === false && (
                            <div
                              class="login"
                              onClick={() => {
                                showApplyJobModalHandler(job);
                              }}
                            >
                              <a>Apply Now</a>
                            </div>
                          )}
                          {!user && appliedStatus === false && (
                            <>
                              <div class="register">
                                <a href="/register">Register to apply</a>
                              </div>
                              <div
                                class="login"
                                onClick={showLoginModelHandler}
                              >
                                <a>Login to apply</a>
                              </div>
                            </>
                          )}
                        </div>
                        <div class="clear"></div>
                        <div class="bottom">
                          <div>
                            Posted:
                            <span>
                              {timeSince(new Date(job.job_post_cr_dt))}
                            </span>
                          </div>
                          <div>
                            Job Applicants: <span>2735</span>
                          </div>
                          <div class="all-job">
                            <a href="">Send Me Jobs Like This</a>
                          </div>
                        </div>
                      </div>

                      <div class="job-description">
                        <h3>Job description</h3>

                        <article>
                          <h4>Job description:-</h4>
                          <ul>
                            <li>
                              Subject Matter Experts need to provide solutions ,
                              following the defined guideline upto.
                            </li>
                            <li>
                              Good Time management skills and ability to work
                              with Deadlines.
                            </li>
                            <li>
                              Earning potential will be as good as your speed of
                              providing high quality solutions.
                            </li>
                            <li>Work From Home ( Full time)</li>
                          </ul>
                          <div class="shift">
                            <strong>Shift Window :- </strong>12:00 AM - 12:00 PM
                            <br />
                            <strong>Working Hours :-</strong> 6 Hours or 8 Hours
                            <br />
                            <strong>Working Days :-</strong> 7 Days ( 2
                            Rotational Week Off )
                          </div>

                          <h4>Essential Competencies:-</h4>
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
                          </ul>
                          <h4>Education Qualification</h4>
                          <div class="shift">Post Graduate/Doctorate</div>

                          <h4>Subjects Opening For:-</h4>
                          <ul>
                            <li>Accounting</li>
                            <li>Finance</li>
                            <li>Computer Science</li>
                            <li>Economics</li>
                            <li>Statistics & Probability</li>
                            <li>Management</li>
                          </ul>

                          <h4>Key Skills</h4>
                          <div class="key">
                            <a href="">Economics</a>
                            <a href="">Subject Matter Expertise</a>
                            <a href="">Accounting</a>
                            <a href="">Finance</a>
                            <a href="">Management</a>
                            <a href="">Statistics</a>
                          </div>
                        </article>
                      </div>

                      <div class="about-company">
                        <h2>About Company</h2>
                        <p>
                          The firm was established in 2011 by Chetan Dogra, CPA,
                          with the mission in mind "to free clients from
                          financial concerns and compliance and empower them
                          with timely financial opportunities by structuring a
                          path for their financial success." Our firm’s focus is
                          to ensure our employees are well-respected,
                          well-compensated, and well-equipped to handle all
                          facets of the job. We practice a strong culture of
                          learning and collaboration and provide our employees
                          with every opportunity to excel in leadership
                          positions in the future. We are a performance-based
                          firm that maintains strong work ethics and
                          transparency.
                        </p>
                        <p>
                          <strong>For details,</strong> we would welcome you to
                          visit our website <a href="">www.triviumedu.com</a>
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No job found</p>
                )}
              </div>
            </div>

            <div class="col-sm-4">
              <div class="left-sidebar">
                <h2>Category</h2>
                <div
                  class="category panel-group category-products"
                  id="accordian"
                >
                  {/* <!--category-productsr--> */}
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordian"
                          href="#sportswear"
                        >
                          <span class="badge pull-right"></span>
                          Office Boy/Peon<b>(22)</b>
                        </a>
                      </h4>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordian"
                          href="#mens"
                        >
                          <span class="badge pull-right"></span>
                          Cook/Chef <b>(22)</b>
                        </a>
                      </h4>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordian"
                          href="#womens"
                        >
                          <span class="badge pull-right"></span>
                          Delivery Person <b>(5)</b>
                        </a>
                      </h4>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title">
                        <a href="#">
                          Driver Car/Bike <b>(88)</b>
                        </a>
                      </h4>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title">
                        <a href="#">
                          Domestic Help <b>(01)</b>
                        </a>
                      </h4>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title">
                        <a href="#">Carer</a>
                        <b>(7)</b>
                      </h4>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title">
                        <a href="#">
                          Nurse <b>(05)</b>
                        </a>
                      </h4>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title">
                        <a href="#">
                          Security Guard <b>(40)</b>
                        </a>
                      </h4>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title">
                        <a href="#">
                          Telecaller/BPO <b>(82)</b>
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
                {/* <!--/category-productsr--> */}

                <h2>GOOGLE ADS</h2>
                <div class="">
                  <img src="images/ads2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <IndividualJobWrapper>
        <IndividualJobDisplayFlex>
          <IndividualJobDivRight>
            {individualJobDetail?.length > 0 ? (
              individualJobDetail?.map((job) => (
                <div key={job.job_post_dtls_id}>
                  <IndividualJobDiv>
                    <JobCardSection>
                      <article>
                        <div>
                          <div>
                            <JobTitle>
                              <Link
                                style={{
                                  textDecoration: "none",
                                  color: "#062C30",
                                }}
                                to={`/jobs/individual-job/${job.job_post_unique_id}`}
                              >
                                {" " + job.job_post_role.split("-").join(" ")}
                              </Link>
                            </JobTitle>
                            <div>
                              <p>{" " + job.job_post_company_name}</p>
                            </div>
                            <div>{" " + job.job_post_heading}</div>
                            <JobCardDisplayFlexDiv>
                              <JobCardDescription>
                                <b>Experience : </b>
                                <span>{job.job_post_min_exp} Yrs</span>
                              </JobCardDescription>
                              <JobCardDescription>
                                <b>Qualification :</b>
                                <span>{job.job_post_min_qual}</span>
                              </JobCardDescription>
                            </JobCardDisplayFlexDiv>
                            <JobCardDisplayFlexDiv>
                              <JobCardDescription>
                                <b>Work Type : </b>
                                <span>{" " + job.job_post_work_type}</span>
                              </JobCardDescription>
                              <JobCardDescription>
                                <b>Employment Type :</b>
                                <span>{" " + job.job_post_job_type}</span>
                              </JobCardDescription>
                            </JobCardDisplayFlexDiv>
                          </div>
                        </div>
                        <div>
                          <JobCardDescription>
                            <b> Key Skills:</b>
                            <span>{" " + job.job_post_req_skills}</span>
                          </JobCardDescription>
                        </div>
                        <JobCardDisplayFlexDiv></JobCardDisplayFlexDiv>
                      </article>
                      <JobCardDisplayFlexDiv>
                        <div>
                          <i></i>
                          <span>
                            <i className="fa-regular fa-clock"></i> :
                            {" " +
                              moment(new Date(job.job_post_cr_dt)).format(
                                "Do MMMM YYYY"
                              )}
                          </span>
                        </div>
                        <div>
                          {user && appliedStatus === true && (
                            <AppliedText>
                              <i className="fa-solid fa-circle-info"></i>
                              You have all ready applied.
                            </AppliedText>
                          )}
                          {user && appliedStatus === false && (
                            <ViewJobButton
                              type="btn"
                              onClick={() => {
                                showApplyJobModalHandler(job);
                              }}
                            >
                              Apply Now
                            </ViewJobButton>
                          )}
                          {!user && appliedStatus === false && (
                            <>
                              <ViewJobButton
                                type="btn"
                                onClick={showLoginModelHandler}
                              >
                                Login to Apply
                              </ViewJobButton>
                              <ApplyNowButton>
                                <Link
                                  to={`/register`}
                                  style={{
                                    textDecoration: "none",
                                    color: "#fff",
                                  }}
                                >
                                  Register to apply
                                </Link>
                              </ApplyNowButton>
                            </>
                          )}
                        </div>
                      </JobCardDisplayFlexDiv>
                    </JobCardSection>
                    <IndividualJobDescriptionDiv>
                      <IndividualJobDescTitle>
                        Expected Salary :
                      </IndividualJobDescTitle>
                      <IndividualJobDesc>
                        {job.job_post_expected_salary} PA.
                      </IndividualJobDesc>
                    </IndividualJobDescriptionDiv>
                    <IndividualJobDescriptionDiv>
                      <IndividualJobDescTitle>
                        Responsibilities
                      </IndividualJobDescTitle>
                      <IndividualJobDesc>
                        <IndividualJobUl>
                          <IndividualJobList>
                            Design, develop and configure simple, medium to
                            complex robotic process automation per business
                            process and requirements documentation
                          </IndividualJobList>
                          <IndividualJobList>
                            Schedule and run RPA processes to ensure the
                            stability of the environment
                          </IndividualJobList>
                          <IndividualJobList>
                            Performs daily administration tasks within the
                            automation software production environment,
                            including scheduling, monitoring Bot resources and
                            capacity, and resolving RPA exceptions or issues.
                          </IndividualJobList>
                          <IndividualJobList>
                            Develop a deep understanding of the UiPath Platform
                            and its functionalities
                          </IndividualJobList>
                          <IndividualJobList>
                            Develop automation workflows with UiPath Studio
                          </IndividualJobList>
                          <IndividualJobList>
                            Document solutions and maintain best practices
                          </IndividualJobList>
                          <IndividualJobList>
                            Stay apprised of the latest trends in RPA technology
                          </IndividualJobList>
                          <IndividualJobList>
                            Participate in defect triage meetings and review
                            defects
                          </IndividualJobList>
                          <IndividualJobList>
                            Maintain a broad and deep understanding of our
                            applications
                          </IndividualJobList>
                        </IndividualJobUl>
                      </IndividualJobDesc>
                    </IndividualJobDescriptionDiv>
                    <IndividualJobDescriptionDiv>
                      <IndividualJobDescTitle>
                        Required Skills:
                      </IndividualJobDescTitle>
                      <IndividualJobDesc>
                        <IndividualJobUl>
                          <IndividualJobList>
                            3 + years’ experience in Python language/Information
                            Technology.
                          </IndividualJobList>
                          <IndividualJobList>
                            2 + years of experience with Process Automation
                            concepts and development.
                          </IndividualJobList>
                          <IndividualJobList>
                            Experienced with AGILE methodology; Proficient with
                            JIRA/ZOHO Project management systems.
                          </IndividualJobList>
                        </IndividualJobUl>
                      </IndividualJobDesc>
                    </IndividualJobDescriptionDiv>
                    <IndividualJobDescriptionDiv>
                      <IndividualJobDescTitle>
                        Desired Skills:
                      </IndividualJobDescTitle>
                      <IndividualJobDesc>
                        <IndividualJobUl>
                          <IndividualJobList>
                            Ability to communicate effectively, both verbally
                            and in writing, at all levels, and across different
                            audiences.
                          </IndividualJobList>
                          <IndividualJobList>
                            Strong knowledge of MS Office applications.
                          </IndividualJobList>
                          <IndividualJobList>
                            Strong sense of quality and commitment to interact
                            with internal or external clients effectively and
                            professionally.
                          </IndividualJobList>
                          <IndividualJobList>
                            Excellent communication skills and service
                            orientation.
                          </IndividualJobList>
                          <IndividualJobList>
                            Ability to work under pressure (e.g., meeting
                            deadlines, adopting and implementing changes)
                          </IndividualJobList>
                          <IndividualJobList>
                            Ability to translate Business Development, HR, and
                            Operations Teams’ requirements into automated
                            technical solutions
                          </IndividualJobList>
                          <IndividualJobList>
                            Excellent analytical and problem-solving skills
                          </IndividualJobList>
                          <IndividualJobList>
                            Excellent communication, negotiation, networking,
                            and influencing skills
                          </IndividualJobList>
                          <IndividualJobList>
                            Ability to work across multiple business groups and
                            domains.
                          </IndividualJobList>
                        </IndividualJobUl>
                      </IndividualJobDesc>
                    </IndividualJobDescriptionDiv>
                    <IndividualJobDescriptionDiv>
                      <IndividualJobDescTitle>
                        Firm Culture :
                      </IndividualJobDescTitle>
                      <IndividualJobDesc>
                        The firm was established in 2011 by Chetan Dogra, CPA,
                        with the mission in mind "to free clients from financial
                        concerns and compliance and empower them with timely
                        financial opportunities by structuring a path for their
                        financial success." Our firm’s focus is to ensure our
                        employees are well-respected, well-compensated, and
                        well-equipped to handle all facets of the job. We
                        practice a strong culture of learning and collaboration
                        and provide our employees with every opportunity to
                        excel in leadership positions in the future. We are a
                        performance-based firm that maintains strong work ethics
                        and transparency.
                      </IndividualJobDesc>
                    </IndividualJobDescriptionDiv>
                    <IndividualJobDescriptionDiv>
                      <IndividualJobDescTitle>
                        Working Hours:
                      </IndividualJobDescTitle>
                      <IndividualJobDesc>
                        85% IST between 7am to 4pm with 1 hr break. Rest as per
                        requirement. If the person has to collaborate with US
                        team, then he might have to work till late but not
                        necessarily entire night
                      </IndividualJobDesc>
                    </IndividualJobDescriptionDiv>
                    <IndividualJobDescriptionDiv>
                      <IndividualJobDescTitle>
                        Firm Benefits::
                      </IndividualJobDescTitle>
                      <IndividualJobDesc>
                        <IndividualJobUl>
                          <IndividualJobList>
                            Competitive salary
                          </IndividualJobList>
                          <IndividualJobList>
                            2 weeks' time off
                          </IndividualJobList>
                          <IndividualJobList>
                            Remote work possibilities and a flexible schedule
                          </IndividualJobList>
                          <IndividualJobList>
                            Professional training
                          </IndividualJobList>
                          <IndividualJobList>
                            Year-end performance bonus
                          </IndividualJobList>
                          <IndividualJobList>
                            Provided Fund - Not as of now. Will be available at
                            later stage of growth
                          </IndividualJobList>
                        </IndividualJobUl>
                      </IndividualJobDesc>
                      <IndividualJobDesc>
                        All qualified applicants will receive consideration for
                        employment without regard to race, color, religion, sex,
                        sexual orientation, gender identity, national origin,
                        citizenship, age, disability, protected veteran status,
                        or any other characteristic protected by law.
                      </IndividualJobDesc>
                    </IndividualJobDescriptionDiv>
                    <IndividualJobDescriptionDiv>
                      <IndividualJobDescTitle>Benefits:</IndividualJobDescTitle>
                      <IndividualJobDesc>
                        <IndividualJobUl>
                          <IndividualJobList>Paid sick time</IndividualJobList>
                          <IndividualJobList>Paid time off</IndividualJobList>
                          <IndividualJobList>Work from home</IndividualJobList>
                        </IndividualJobUl>
                      </IndividualJobDesc>
                    </IndividualJobDescriptionDiv>
                    <IndividualJobDescriptionDiv>
                      <IndividualJobDescTitle>
                        Reporting Structure:
                      </IndividualJobDescTitle>
                      <IndividualJobDesc>
                        Flat reporting. Country Head is responsible for India
                        Operations and the managing partner in US.
                      </IndividualJobDesc>
                    </IndividualJobDescriptionDiv>
                    <IndividualJobDescriptionDiv>
                      <IndividualJobDescTitle>
                        Office Address :
                      </IndividualJobDescTitle>
                      <IndividualJobDesc>
                        {" " + job.job_post_street_address}
                      </IndividualJobDesc>
                    </IndividualJobDescriptionDiv>
                    <div>
                      <JobCardDescription>
                        <b>Tags :</b> <span>{" " + job.job_post_tags}</span>
                      </JobCardDescription>
                    </div>
                  </IndividualJobDiv>
                </div>
              ))
            ) : (
              <p>No job found</p>
            )}
          </IndividualJobDivRight>
          <IndividualJobDivLeft>
            <>
              <TrendingJobs />
            </>
          </IndividualJobDivLeft>
        </IndividualJobDisplayFlex>
      </IndividualJobWrapper> */}
    </>
  );
};

export default IndividualJobDetails;
