import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import LoginModel from "../../Forms/AccountForms/LoginModel";
import { ModelFixedHeight } from "../../utils/Model";
import ApplyJobForm from "./ApplyJobForm";
import JobCardSkelton from "../../SkeltonLoaders/JobCardSkelton";
const JobCard = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showApplyJobForm, setApplyJobForm] = useState(false);
  const [indJobDetails, setIndJobDetails] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getAllJobPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://practiwiz-backend.azurewebsites.net/api/jobs/get/all-jobs-posts"
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
  }, []);
  const showApplyJobModalHandler = (job) => {
    setShowLoginModal(false);
    setApplyJobForm(!showApplyJobForm);
    setIndJobDetails(job);
  };
  const showLoginModelHandler = () => {
    setShowLoginModal(!showLoginModal);
    setApplyJobForm(false);
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
          <LoginModel />
        </ModelFixedHeight>
      )}
      {showApplyJobForm && (
        <ApplyJobForm
          showApplyJobModalHandler={showApplyJobModalHandler}
          indJobDetails={indJobDetails}
        />
      )}
      {loading ? (
        <>
          <JobCardSkelton /> <JobCardSkelton />
          <JobCardSkelton /> <JobCardSkelton />
          <JobCardSkelton />
          <JobCardSkelton /> <JobCardSkelton />
          <JobCardSkelton />
        </>
      ) : allJobs?.length > 0 ? (
        allJobs?.slice(0, 5).map((job) => (
          <div key={job.job_post_dtls_id}>
            <article className="latest wow fadeInDown" data-wow-duration="0.4s">
              <div className="job-list-left">
                <img src={job.hiring_company_image} alt="" />
              </div>
              <div className="job-list-center">
                <p>
                  <strong>{" " + job.hiring_company_name} - </strong>
                  {"Looking for a "}
                  {" " + job.job_post_role.split("-").join(" ")} at
                  {" " + job.hiring_company_city},{" "}
                  {" " + job.hiring_company_state}. Salary{" "}
                  {" " + job.job_post_expected_salary + " "} Per Annum
                </p>
                <p>
                  <b>Key Skills</b> :{" " + job.job_post_req_skills + " "}
                  <b>Experience</b> : {" " + job.job_post_min_exp} Years
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
                    {/* {new Date(job.job_post_cr_dt).toDateString()} */}
                  </li>
                  <li>{job.job_post_min_qual} required</li>
                  <li>{" " + job.job_post_job_type}</li>
                </ul>
              </div>
              <div className="job-list-right">
                <a href={`/jobs/individual-job/${job.job_post_unique_id}`}>
                  Apply Now
                </a>
              </div>
            </article>
          </div>
        ))
      ) : (
        <p>No job found</p>
      )}
    </>
  );
};

export default JobCard;
