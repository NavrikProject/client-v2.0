import React, { useEffect, useState } from "react";
import {
  ClearFilter,
  JoinAsMentorButton,
  MentorContainer,
  MentorDivFlex,
  MentorJoinDesc,
  MentorJoinDiv,
  MentorJoinDivFlex,
  MentorJoinLeftDiv,
  MentorJoinRightDiv,
  MentorLeftImgDiv,
  MentorOptions,
  MentorRightContentDiv,
  MentorSearchDiv,
  MentorSearchRightDiv,
  MentorSect,
  MentorSection,
  MentorSelect,
  MentorTitle,
  MentorTitleDesc,
  MentorWrapper,
  SearchBoxInput,
  SearchForm,
} from "./MentorClubElements";
import MentorCard from "./MentorCard/MentorCard";
import { Link } from "react-router-dom";
import {
  mentorAvailabilityTimings,
  mentorshipAreas,
  mentorSkills,
} from "../Data/MentorData.js";
import GoToTop from "../GoToTop";
import axios from "axios";
const MentorClub = () => {
  const [searchItem, setSearchItem] = useState("");
  const [skillFilter, setSkillFilter] = useState("");
  const [mentorAreaFilter, setMentorAreaFilter] = useState("");
  const [mentorAvailabilityFilter, setMentorAvailabilityFilter] = useState("");
  const [skillCategoryFilter, setSkillCategoryFilter] = useState("");
  const [skills, setSkills] = useState([]);

  // const clearFilterHandler = () => {
  //   window.location.reload();
  // };
  useEffect(() => {
    const getSkillsData = async () => {
      const res = await axios.get(
        `https://practiwiz-backend.azurewebsites.net/api/get/skills/master?name=${skillCategoryFilter}`
      );
      setSkills(res.data);
    };
    getSkillsData();
  }, [skillCategoryFilter]);

  return (
    <>
      <MentorSect>
        <MentorSection>
          <MentorTitle>Our Featured Mentors</MentorTitle>
          <MentorTitleDesc>
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis. */}
          </MentorTitleDesc>
          <MentorContainer>
            <MentorWrapper>
              {skillFilter || skillCategoryFilter ? (
                <span>
                  <ClearFilter>
                    Showing filters for
                    {skillCategoryFilter && (
                      <span onClick={() => setSkillCategoryFilter("")}>
                        {skillCategoryFilter}
                        <i className="fa-solid fa-xmark"></i>
                      </span>
                    )}
                    {skillFilter && (
                      <span onClick={() => setSkillFilter("")}>
                        {skillFilter} <i className="fa-solid fa-xmark"></i>
                      </span>
                    )}
                    {mentorAreaFilter && (
                      <span onClick={() => setMentorAreaFilter("")}>
                        {mentorAreaFilter} <i className="fa-solid fa-xmark"></i>
                      </span>
                    )}
                    {mentorAvailabilityFilter && (
                      <span onClick={() => setMentorAvailabilityFilter("")}>
                        {mentorAvailabilityFilter}
                        <i className="fa-solid fa-xmark"></i>
                      </span>
                    )}
                  </ClearFilter>
                </span>
              ) : (
                ""
              )}
              {/* {skillFilter && (
                <ClearFilter>
                  Showing filters for
                  <span onClick={clearFilterHandler}>
                    {skillFilter} <i className="fa-solid fa-xmark"></i>
                  </span>
                </ClearFilter>
              )}
              {skillCategoryFilter && (
                <span onClick={clearFilterHandler}>
                  {skillCategoryFilter} <i className="fa-solid fa-xmark"></i>
                </span>
              )} */}
            </MentorWrapper>
            <MentorSearchDiv>
              <MentorSearchRightDiv>
                <MentorSelect
                  onChange={(event) =>
                    setSkillCategoryFilter(event.target.value)
                  }
                >
                  <MentorOptions value="">
                    Choose the Mentor by Category
                  </MentorOptions>
                  {mentorSkills.map((skill) => (
                    <MentorOptions key={skill.id} value={skill.skills}>
                      {skill.skills}
                    </MentorOptions>
                  ))}
                </MentorSelect>
              </MentorSearchRightDiv>
              <MentorSearchRightDiv>
                <MentorSelect
                  onChange={(event) => setSkillFilter(event.target.value)}
                  name="skills"
                  value={skillFilter}
                >
                  <MentorOptions value="">Choose below option</MentorOptions>
                  {skills.length > 0 ? (
                    skills?.map((skill) => (
                      <MentorOptions
                        key={skill.skill_master_id}
                        value={skill.skill_master_skill_name}
                      >
                        {skill.skill_master_skill_name}
                      </MentorOptions>
                    ))
                  ) : (
                    <MentorOptions value="">
                      Please select the category
                    </MentorOptions>
                  )}
                </MentorSelect>
              </MentorSearchRightDiv>
              <MentorSearchRightDiv>
                <MentorSelect
                  onChange={(event) => setMentorAreaFilter(event.target.value)}
                >
                  <MentorOptions value="">
                    Choose Mentor by Mentorship Area
                  </MentorOptions>
                  {mentorshipAreas.map((mentorArea) => (
                    <MentorOptions key={mentorArea.id} value={mentorArea.area}>
                      {mentorArea.area}
                    </MentorOptions>
                  ))}
                </MentorSelect>
              </MentorSearchRightDiv>
              <MentorSearchRightDiv>
                <MentorSelect
                  onChange={(event) =>
                    setMentorAvailabilityFilter(event.target.value)
                  }
                >
                  <MentorOptions value="">
                    Choose the Mentor by Availability
                  </MentorOptions>
                  {mentorAvailabilityTimings.map((mentorArea) => (
                    <MentorOptions
                      key={mentorArea.id}
                      value={mentorArea.timings}
                    >
                      {mentorArea.timings}
                    </MentorOptions>
                  ))}
                </MentorSelect>
              </MentorSearchRightDiv>
              <MentorSearchRightDiv>
                <SearchForm>
                  <SearchBoxInput
                    placeholder="Search any mentor"
                    onChange={(event) => setSearchItem(event.target.value)}
                  ></SearchBoxInput>
                </SearchForm>
              </MentorSearchRightDiv>
            </MentorSearchDiv>
            <MentorWrapper>
              <MentorDivFlex>
                <MentorCard
                  searchItem={searchItem}
                  skillCategoryFilter={skillCategoryFilter}
                  skillFilter={skillFilter}
                  mentorAreaFilter={mentorAreaFilter}
                  mentorAvailabilityFilter={mentorAvailabilityFilter}
                />
              </MentorDivFlex>
            </MentorWrapper>
          </MentorContainer>
        </MentorSection>
      </MentorSect>
      <MentorContainer>
        <MentorWrapper>
          <MentorJoinDiv>
            <MentorJoinDivFlex>
              <MentorJoinRightDiv>
                <MentorRightContentDiv>
                  <MentorJoinDesc>
                    Are you an industry expert or Are you good at Mentoring the
                    people to achieve there goals.Then join now as mentor in the
                    practiwiz.com and win exciting prizes
                  </MentorJoinDesc>
                  <br />
                  <JoinAsMentorButton>
                    <Link
                      style={{ textDecoration: "none", color: " #fff" }}
                      to="/mentor/apply-for-mentor"
                    >
                      Join as a Mentor
                    </Link>
                  </JoinAsMentorButton>
                </MentorRightContentDiv>
              </MentorJoinRightDiv>
              <MentorJoinLeftDiv>
                <MentorLeftImgDiv>
                  <img
                    src="https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="mentor"
                  />
                </MentorLeftImgDiv>
              </MentorJoinLeftDiv>
            </MentorJoinDivFlex>
          </MentorJoinDiv>
        </MentorWrapper>
        <GoToTop />
      </MentorContainer>
    </>
  );
};

export default MentorClub;
