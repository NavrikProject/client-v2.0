import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BookNowButton,
  BookNowButtonDiv,
  FiltersInMentorCard,
  MentorBoxDiv,
  MentorCategoryDiv,
  MentorDesc,
  MentorDescP,
  MentorDetailsDiv,
  MentorExpertDiv,
  MentorName,
  MentorSlotTimeDiv,
  MentorCourseBox,
  MentorDiv,
  MentorDownDiv,
  MentorImg,
  MentorImgDiv,
  MentorNotFoundDiv,
  MentorUpDiv,
  FiltersInMentorCardColor,
} from "./MentorCardElements";
import { Link } from "react-router-dom";
import MentorBookingCardModel from "./MentorBookingCardModel";
import MentorCardSkelton from "./MentorCardSkelton";
import styled from "styled-components";
const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const Card = styled.div`
  /* max-width: 300px; */
  margin: auto;
  text-align: center;
  font-family: arial;
`;

const ContentDiv = styled.div`
  margin: 0px 0 0 0;
`;
const Button = styled.button`
  margin: 0 auto;
  padding: 12px 20px;
  text-align: center;
  font-size: 17px;
  border: none;
  outline: none;
  width: 100%;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  background-color: #1363df;
  color: #fff;
  border-radius: 5px;
  &:hover {
    opacity: 0.7;
    transition: all 0.5s ease-in-out;
  }
`;
const MentorCourseCard = ({
  skillCategoryFilter,
  searchItem,
  skillFilter,
  mentorAreaFilter,
  mentorAvailabilityFilter,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [mentorDetails, setMentorDetails] = useState([]);
  const [error, setError] = useState("");
  const [sendMentor, setSendMentor] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    try {
      setLoading(true);
      const getAllMentorDetails = async () => {
        if (
          skillCategoryFilter &&
          !skillFilter &&
          !mentorAreaFilter &&
          !mentorAvailabilityFilter
        ) {
          const res = await axios.get(
            `https://deploy-practiwiz.azurewebsites.net/api/mentor/get/mentors/filter?category=${skillCategoryFilter}`
          );

          if (res.data.mentors) {
            setMentorDetails(res.data.mentors);
            setLoading(false);
          }
          if (res.data.error) {
            return (
              setLoading(false),
              setMentorDetails([]),
              setError("No details found Please try with different name")
            );
          }
        }
        if (
          skillCategoryFilter &&
          skillFilter &&
          !mentorAreaFilter &&
          !mentorAvailabilityFilter
        ) {
          const res = await axios.get(
            `https://deploy-practiwiz.azurewebsites.net/api/mentor/get/mentors/filter?category=${skillCategoryFilter}&skill=${skillFilter}`
          );
          setLoading(false);

          if (res.data.mentors) {
            setMentorDetails(res.data.mentors);
          }
          if (res.data.error) {
            setMentorDetails([]);
            setError("No details found Please try with different name");
          }
        }
        if (
          skillCategoryFilter &&
          skillFilter &&
          mentorAreaFilter &&
          !mentorAvailabilityFilter
        ) {
          const res = await axios.get(
            `https://deploy-practiwiz.azurewebsites.net/api/mentor/get/mentors/filter?category=${skillCategoryFilter}&skill=${skillFilter}&area=${mentorAreaFilter}`
          );
          setLoading(false);

          if (res.data.mentors) {
            setMentorDetails(res.data.mentors);
          }
          if (res.data.error) {
            setMentorDetails([]);
            setError("No details found Please try with different name");
          }
        }
        if (
          skillCategoryFilter &&
          skillFilter &&
          mentorAreaFilter &&
          mentorAvailabilityFilter
        ) {
          const res = await axios.get(
            `https://deploy-practiwiz.azurewebsites.net/api/mentor/get/mentors/filter?category=${skillCategoryFilter}&skill=${skillFilter}&area=${mentorAreaFilter}&availability=${mentorAvailabilityFilter}`
          );
          setLoading(false);
          if (res.data.mentors) {
            setMentorDetails(res.data.mentors);
          }
          if (res.data.error) {
            setMentorDetails([]);
            setError("No details found Please try with different name");
          }
        }
        if (
          !skillCategoryFilter &&
          !skillFilter &&
          !mentorAreaFilter &&
          !mentorAvailabilityFilter
        ) {
          const res = await axios.get(
            `https://deploy-practiwiz.azurewebsites.net/api/mentor/get/all`
          );
          setLoading(false);
          if (res.data.mentors) {
            setMentorDetails(res.data.mentors);
          }
          if (res.data.error) {
            setMentorDetails([]);
            setError("No details found Please try with different name");
          }
        }
        setLoading(false);
      };
      getAllMentorDetails();
    } catch (error) {
      return setLoading(false), setMentorDetails([]);
    }
  }, [
    skillCategoryFilter,
    skillFilter,
    mentorAreaFilter,
    mentorAvailabilityFilter,
  ]);

  const ShowBookingModalHandler = (mentor) => {
    setSendMentor(mentor);
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && (
        <MentorBookingCardModel
          ShowBookingModalHandler={ShowBookingModalHandler}
          sendMentor={sendMentor}
        />
      )}
      {loading && (
        <>
          <MentorCardSkelton /> <MentorCardSkelton /> <MentorCardSkelton />
          <MentorCardSkelton /> <MentorCardSkelton /> <MentorCardSkelton />
        </>
      )}
      {!loading &&
        mentorDetails?.length > 0 &&
        mentorDetails
          ?.filter((mentorFilter) =>
            searchItem === " "
              ? mentorFilter
              : mentorFilter.mentor_firstname
                  .toLowerCase()
                  .includes(searchItem.toLowerCase()) ||
                mentorFilter.mentor_lastname
                  .toLowerCase()
                  .includes(searchItem.toLowerCase()) ||
                mentorFilter.mentor_mentorship_area
                  .toLowerCase()
                  .includes(searchItem.toLowerCase()) ||
                mentorFilter.mentor_skills
                  .toLowerCase()
                  .includes(searchItem.toLowerCase()) ||
                mentorFilter.mentor_speciality
                  .toLowerCase()
                  .includes(searchItem.toLowerCase()) ||
                mentorFilter.mentor_availability
                  .toLowerCase()
                  .includes(searchItem.toLowerCase())
          )
          .map((mentor) => (
            <MentorDiv key={mentor.mentor_dtls_id}>
              <Card>
                <Image src={mentor.mentor_image} alt="John" />
                <MentorName>
                  {mentor.mentor_firstname + " " + mentor.mentor_lastname}
                </MentorName>
                <MentorDescP>
                  <span>{mentor.mentor_current_role} </span>
                  {/* at <span> {mentor.mentor_firm}</span> */}
                </MentorDescP>
                <ContentDiv>
                  <MentorSlotTimeDiv>
                    <ul>
                      <li>
                        <FiltersInMentorCard>
                          Experience :
                          {<span>{mentor.mentor_experience} Years</span>}
                        </FiltersInMentorCard>
                      </li>
                      <li>
                        <p style={{ marginLeft: "30px", textAlign: "left" }}>
                          Expertise in :
                        </p>
                        <MentorCategoryDiv>
                          <FiltersInMentorCardColor>
                            {mentor.mentor_speciality}
                          </FiltersInMentorCardColor>
                          <FiltersInMentorCardColor>
                            {mentor.mentor_mentorship_area}
                          </FiltersInMentorCardColor>
                          <FiltersInMentorCardColor>
                            {mentor.mentor_skills}
                          </FiltersInMentorCardColor>
                          {mentor.mentor_otherSkills === "undefined" ||
                          mentor.mentor_otherSkills === "" ? null : (
                            <FiltersInMentorCardColor>
                              {mentor.mentor_otherSkills}
                            </FiltersInMentorCardColor>
                          )}
                        </MentorCategoryDiv>
                      </li>
                    </ul>
                    <p style={{ marginTop: "10px", fontSize: "15px" }}>
                      Available From
                      <span>
                        {" " + mentor.mentor_availability_start_time + " "}
                      </span>
                      to
                      <span>
                        {" " + mentor.mentor_availability_end_time + " "}
                      </span>
                      <br /> on every
                      <span>{" " + mentor.mentor_availability}</span>
                    </p>
                  </MentorSlotTimeDiv>
                </ContentDiv>
                <BookNowButtonDiv>
                  {!skillCategoryFilter &&
                  !skillFilter &&
                  !mentorAreaFilter &&
                  !mentorAvailabilityFilter ? (
                    <BookNowButton>
                      <Link
                        style={{ textDecoration: "none", color: " #fff" }}
                        to={`individual/${
                          mentor.mentor_firstname.toLowerCase() +
                          "-" +
                          mentor.mentor_lastname.toLowerCase()
                        }`}
                      >
                        Book a session
                      </Link>
                    </BookNowButton>
                  ) : (
                    <BookNowButton
                      onClick={() => ShowBookingModalHandler(mentor)}
                    >
                      Book a session
                    </BookNowButton>
                  )}
                </BookNowButtonDiv>
              </Card>
            </MentorDiv>
          ))}
      {!loading && mentorDetails?.length === 0 && (
        <MentorNotFoundDiv>
          Noo mentor found! Try with different names
        </MentorNotFoundDiv>
      )}
    </>
  );
};

export default MentorCourseCard;
