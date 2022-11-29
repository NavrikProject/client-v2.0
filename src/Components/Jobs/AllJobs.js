import React from "react";
import JobCard from "./JobCard/JobCard";
import styled from "styled-components";
const JobSection = styled.section`
  width: 100%;
  height: auto;
`;
const JobDivWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const AllJobs = () => {
  return (
    <JobSection>
      <JobDivWrapper>
        <JobCard />
      </JobDivWrapper>
    </JobSection>
  );
};

export default AllJobs;
