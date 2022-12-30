import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GoToTop from "../../GoToTop";
import ViewAppliedJobStatus from "./ViewAppliedJobStatus";
const Section = styled.section`
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 780px) {
    height: auto;
  }
`;
const Div = styled.div`
  display: flex;
  @media screen and (max-width: 780px) {
    display: block;
  }
`;
const RightDiv = styled.div`
  flex: 2.5;
  position: sticky;
  top: 120px;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(245, 245, 245, 1) 32%,
    rgba(224, 251, 252, 1) 100%
  );
  @media screen and (max-width: 780px) {
    position: static;
    height: auto;
  }
`;
const LeftDiv = styled.div`
  flex: 9.5;
  overflow: scroll;
  height: 100vh;
  @media screen and (max-width: 780px) {
    height: auto;
  }
`;
const SidebarListUl = styled.ul`
  list-style: none;
  padding: 10px;
`;
const SidebarListItem = styled.li`
  width: 100%;
  cursor: pointer;
  border-bottom: 1px solid lightgrey;
  :nth-child(3) {
    border-bottom: none;
  }
  &:hover {
    background-color: lightgrey;
  }
`;
const Wrapper = styled.div`
  padding: 30px;
  @media screen and (max-width: 780px) {
    padding: 15px;
  }
`;
const QuickMenuTitle = styled.h3`
  font-size: 21px;
  color: black;
  opacity: 0.9;
  font-weight: 400;
  span {
    margin-right: 10px;
  }
`;

const AppliedJobs = () => {
  const [showAllAppliedJobs, setShowAllAppliedJobs] = useState(true);
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Section>
      <Div>
        <RightDiv>
          <Wrapper>
            <h1>Quick Menu</h1>
            <SidebarListUl>
              <SidebarListItem>
                <QuickMenuTitle>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "black",
                      opacity: 0.9,
                    }}
                    to={`/${user?.type}/profile`}
                  >
                    <span>
                      <i className="fa-solid fa-user"></i>
                    </span>
                    View Profile
                  </Link>
                </QuickMenuTitle>
              </SidebarListItem>
              <SidebarListItem
                active
                onClick={() => {
                  return setShowAllAppliedJobs(!showAllAppliedJobs);
                }}
              >
                <QuickMenuTitle>My Applied jobs</QuickMenuTitle>
              </SidebarListItem>
            </SidebarListUl>
          </Wrapper>
        </RightDiv>
        <LeftDiv>
          <Wrapper>{showAllAppliedJobs && <ViewAppliedJobStatus />}</Wrapper>
        </LeftDiv>
      </Div>
      <GoToTop />
    </Section>
  );
};

export default AppliedJobs;
