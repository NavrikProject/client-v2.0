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
} from "./MentorCardElements";
import { Link } from "react-router-dom";
import MentorBookingCardModel from "./MentorBookingCardModel";
import MentorCardSkelton from "./MentorCardSkelton";

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
              <MentorUpDiv></MentorUpDiv>
              <MentorDownDiv>
                <MentorImgDiv>
                  <MentorImg src={mentor.mentor_image} alt="trainer picture" />
                </MentorImgDiv>
                <MentorCourseBox>
                  <MentorBoxDiv>
                    <MentorDetailsDiv>
                      <MentorName>
                        {mentor.mentor_firstname + " " + mentor.mentor_lastname}
                      </MentorName>
                      <MentorDescP>
                        <span>{mentor.mentor_current_role} </span>
                        {/* at <span> {mentor.mentor_firm}</span> */}
                      </MentorDescP>
                    </MentorDetailsDiv>
                  </MentorBoxDiv>
                  <MentorDesc>
                    {mentor.mentor_bio.slice(0, 100) + "...."}
                  </MentorDesc>
                  <MentorSlotTimeDiv>
                    <p>
                      Always available From
                      <span>
                        {" " + mentor.mentor_availability_start_time + " "}
                      </span>
                      to
                      <span>
                        {" " + mentor.mentor_availability_end_time + " "}
                      </span>
                      on every
                      <span>{" " + mentor.mentor_availability}</span>
                    </p>
                  </MentorSlotTimeDiv>
                  <div>
                    {skillCategoryFilter ||
                    skillFilter ||
                    mentorAreaFilter ||
                    mentorAvailabilityFilter ? (
                      <MentorExpertDiv>
                        <p>This mentor expertise in :</p>
                        <MentorCategoryDiv>
                          <FiltersInMentorCard>
                            {skillCategoryFilter && (
                              <span>{skillCategoryFilter}</span>
                            )}
                          </FiltersInMentorCard>
                          <FiltersInMentorCard>
                            {skillFilter && <span>{skillFilter}</span>}
                          </FiltersInMentorCard>
                        </MentorCategoryDiv>
                      </MentorExpertDiv>
                    ) : null}
                  </div>
                  <MentorCategoryDiv>
                    {skillCategoryFilter ||
                    skillFilter ||
                    mentorAreaFilter ||
                    mentorAvailabilityFilter ? (
                      <>
                        <FiltersInMentorCard>
                          {mentorAreaFilter && <span>{mentorAreaFilter}</span>}
                        </FiltersInMentorCard>
                        <FiltersInMentorCard>
                          {mentorAvailabilityFilter && (
                            <span>{mentorAvailabilityFilter}</span>
                          )}
                        </FiltersInMentorCard>
                      </>
                    ) : null}
                  </MentorCategoryDiv>
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
                          Know More
                        </Link>
                      </BookNowButton>
                    ) : (
                      <BookNowButton
                        onClick={() => ShowBookingModalHandler(mentor)}
                      >
                        Book Now
                      </BookNowButton>
                    )}
                  </BookNowButtonDiv>
                </MentorCourseBox>
              </MentorDownDiv>
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
