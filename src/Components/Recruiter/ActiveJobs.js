import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ConfirmationJobPostModel from "./ConfirmationJobPostModel";
import { useSelector } from "react-redux";
const Table = styled.table`
  border: none;
  width: 100%;
  text-align: center;
`;
const Tbody = styled.tbody``;
const Tr = styled.tr`
  border-bottom: 1px solid #ccc;
`;
const Th = styled.th`
  border: none;
  border-bottom: 2px solid #ccc;
  width: 50px;
`;
const Td = styled.td`
  border: none;
`;
const Input = styled.input`
  outline: none;
  font-size: 17px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  border-bottom-width: 2px;
  transition: all 0.4s ease;
  width: 50%;
  padding: 10px 20px;
  margin-bottom: 20px;
  &:focus {
    border-color: #fc83bb;
  }
  @media screen and (max-width: 780px) {
    width: 100%;
  }
`;
const JobsTitle = styled.h1`
  color: #111;
  opacity: 0.7;
  padding-bottom: 10px;
`;
const NotFoundDiv = styled.div`
  box-shadow: rgb(142 151 158 / 15%) 0px 4px 19px;
  text-align: center;
  width: 70%;
  margin: 0 auto;
  h1 {
    font-weight: normal;
    padding: 20px;
  }
`;
const ViewText = styled.p`
  display: none;
  color: red;
  margin-bottom: 10px;
  @media screen and (max-width: 780px) {
    display: block;
  }
`;
const ActiveJobs = () => {
  const [allActiveJobs, setAllActiveJobs] = useState([]);
  const [jobDetails, setJobDetails] = useState("");
  const [showModel, setShowModel] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const getAllActiveJobPosts = async () => {
      const res = await axios.post(
        "https://practiwiz-backend.azurewebsites.net/api/recruiter/get/open-positions",
        { email: user?.email }
      );
      if (res.data.success) {
        setAllActiveJobs(res.data.success);
      }
      if (res.data.error) {
        setAllActiveJobs([]);
      }
    };
    getAllActiveJobPosts();
  }, [user?.email]);
  const showModalHandler = (job) => {
    setShowModel(!showModel);
    setJobDetails(job);
  };
  return (
    <>
      {showModel && (
        <ConfirmationJobPostModel
          jobDetails={jobDetails}
          showModalHandler={showModalHandler}
        />
      )}
      <JobsTitle>
        Your posted active jobs <hr />
      </JobsTitle>
      {allActiveJobs?.length > 0 ? (
        <>
          <ViewText>
            Set view to the desktop site for better visualization.
          </ViewText>
          <Input
            placeholder="Search by the Skills,Qualification,Role, Opening status...."
            type="text"
            onChange={(event) => {
              setSearchItem(event.target.value);
            }}
          />
          <Table>
            <Tbody>
              <Tr>
                <Th>Id</Th>
                <Th>Job Title</Th>
                <Th>Req Skills</Th>
                <Th>Qual and Exp</Th>
                <Th>Salary</Th>
                <Th>Job created on</Th>
                <Th>Admin approve</Th>
                <Th>Hiring status</Th>
                <Th>Responses</Th>
                <Th>Actions</Th>
              </Tr>
              {allActiveJobs
                ?.filter((jobFilter) =>
                  searchItem === " "
                    ? jobFilter
                    : jobFilter.job_post_heading
                        .toLowerCase()
                        .includes(searchItem.toLowerCase()) ||
                      jobFilter.job_post_req_skills
                        .toLowerCase()
                        .includes(searchItem.toLowerCase()) ||
                      jobFilter.job_post_min_qual
                        .toLowerCase()
                        .includes(searchItem.toLowerCase()) ||
                      jobFilter.job_post_category
                        .toLowerCase()
                        .includes(searchItem.toLowerCase()) ||
                      jobFilter.job_post_role
                        .toLowerCase()
                        .includes(searchItem.toLowerCase()) ||
                      jobFilter.job_post_open_position_status
                        .toLowerCase()
                        .includes(searchItem.toLowerCase())
                )
                .map((job) => (
                  <Tr key={job.job_post_dtls_id}>
                    <Td>{job.job_post_dtls_id}</Td>
                    <Td>{job.job_post_heading}</Td>
                    <Td>{job.job_post_req_skills}</Td>
                    <Td>
                      {job.job_post_min_qual} {job.job_post_min_exp}
                    </Td>
                    <Td>{job.job_post_expected_salary}</Td>
                    <Td>{new Date(job.job_post_cr_dt).toDateString()}</Td>
                    <Td>{job.job_post_approve_status}</Td>
                    <Td>{job.job_post_hiring_status}</Td>
                    <Td>
                      <button>
                        <Link
                          to={`/recruiter/profile/jobs/view-responses/${job.job_post_unique_id}`}
                        >
                          View responses
                        </Link>
                      </button>
                    </Td>
                    <Td>
                      <button onClick={() => showModalHandler(job)}>
                        <i className="fa-solid fa-pen-to-square"></i>Edit
                      </button>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </>
      ) : (
        <NotFoundDiv>
          <h1>No active job found</h1>
        </NotFoundDiv>
      )}
    </>
  );
};

export default ActiveJobs;
