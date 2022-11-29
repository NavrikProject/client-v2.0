import React, { useState } from "react";
import UsersTable from "./AllTrainersTable";
import AllCourse from "./AllCourse";
import Allusers from "./Allusers";
import AllMentors from "./AllMentors";
import AllContributers from "./AllContributers";
import {
  DetailsWrapper,
  Div,
  LeftDiv,
  QuickMenuTitle,
  RightDiv,
  Section,
  SidebarListItem,
  SidebarListUl,
  Wrapper,
} from "./DashboardElements";
const UsersDashboard = () => {
  const [showCourses, setShowCourse] = useState(false);
  const [showAllTrainers, setShowAllTrainers] = useState(true);
  const [showAllUsers, setShowAllUsers] = useState(false);
  const [showMentors, setShowAllMentors] = useState(false);
  const [showContributers, setShowContributers] = useState(false);
  const ShowCourseHandler = (event) => {
    setShowCourse(!showCourses);
    setShowAllTrainers(false);
    setShowAllUsers(false);
    setShowAllMentors(false);
    setShowContributers(false);
  };
  const ShowTrainersHandler = (event) => {
    setShowAllTrainers(!showAllTrainers);
    setShowCourse(false);
    setShowAllUsers(false);
    setShowAllMentors(false);
    setShowContributers(false);
  };
  const ShowAllUsersHandler = (event) => {
    setShowAllTrainers(false);
    setShowCourse(false);
    setShowAllUsers(!showAllUsers);
    setShowAllMentors(false);
    setShowContributers(false);
  };
  const ShowAllMentorsHandler = (event) => {
    setShowAllTrainers(false);
    setShowCourse(false);
    setShowAllUsers(false);
    setShowAllMentors(!showMentors);
    setShowContributers(false);
  };
  const ShowAllContributersHandler = (event) => {
    setShowAllTrainers(false);
    setShowCourse(false);
    setShowAllUsers(false);
    setShowAllMentors(false);
    setShowContributers(!showContributers);
  };
  return (
    <>
      <Section>
        <Div>
          <RightDiv>
            <Wrapper>
              <h1>Quick Menu</h1>
              <SidebarListUl>
                <SidebarListItem onClick={ShowTrainersHandler}>
                  <QuickMenuTitle>All Trainers</QuickMenuTitle>
                </SidebarListItem>
                <SidebarListItem onClick={ShowCourseHandler}>
                  <QuickMenuTitle>All Courses</QuickMenuTitle>
                </SidebarListItem>
                <SidebarListItem onClick={ShowAllUsersHandler}>
                  <QuickMenuTitle>All Users</QuickMenuTitle>
                </SidebarListItem>
                <SidebarListItem onClick={ShowAllMentorsHandler}>
                  <QuickMenuTitle>All Mentors </QuickMenuTitle>
                </SidebarListItem>
                <SidebarListItem
                  className="sidebarListItem"
                  onClick={ShowAllContributersHandler}
                >
                  <QuickMenuTitle> All Contributers </QuickMenuTitle>
                </SidebarListItem>
              </SidebarListUl>
            </Wrapper>
          </RightDiv>
          <LeftDiv>
            <Wrapper>
              <DetailsWrapper>
                {showCourses && <AllCourse />}
                {showAllTrainers && <UsersTable />}
                {showAllUsers && <Allusers />}
                {showMentors && <AllMentors />}
                {showContributers && <AllContributers />}
              </DetailsWrapper>
            </Wrapper>
          </LeftDiv>
        </Div>
      </Section>
    </>
  );
};

export default UsersDashboard;
