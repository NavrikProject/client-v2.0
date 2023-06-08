import React, { useState } from "react";
import {
  MentorRegisterDiv,
  MentorRegisterSection,
  MentorRegisterDiv1,
  MentorRegisterFlex,
  MentorRegisterLeftDiv,
  MentorRegisterRightDiv,
  FormDiv,
  FormDivFlex,
  Form,
  FormHeading,
  ButtonDiv,
  PrevButton,
  JoinButton,
  NextButton,
  ShowFillingDiv,
  ShowFillDiv,
} from "./MentorRegisterStepELements";
import MentorSlotDetails from "./MentorSlotDetails";
import MentorExpDetails from "./MentorExpDetails";
import MentorAddDetails from "./MentorAddDetails";
import signupImg from "../../../images/oldImages/default-removebg-preview.png";
import axios from "axios";
import { useSelector } from "react-redux";
import GoToTop from "../../GoToTop";
import { toast } from "react-toastify";
import Loading from "../../utils/LoadingSpinner";
const MentorRegisterStepForm = () => {
  const user = useSelector((state) => state.user.currentUser);
  const firstName = user?.firstname;
  const lastName = user?.lastname;
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [buttonEnable, setButtonEnable] = useState(false);
  const [formData, setFormData] = useState({
    bio: "",
    experience: "",
    skills: "",
    otherSkills: "",
    specialty: "",
    firm: "",
    currentRole: "",
    previousRole: "",
    mentorshipArea: "",
    mentorAvailability: "",
    startTime: "",
    website: "",
    linkedInProfile: "",
    countryCode: "",
    validPhoneNumber: false,
  });
  const [image, setImage] = useState();
  const [endTime, setEndTime] = useState("");

  const [errorData, setErrorData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    bio: "",
    experience: "",
    skills: "",
    specialty: "",
    firm: "",
    currentRole: "",
    previousRole: "",
    mentorshipArea: "",
    mentorAvailability: "",
    startTime: "",
    endTime: "",
    website: "",
    linkedInProfile: "",
    image: "",
    countryCode: " ",
  });

  const [phoneNumber, setPhoneNumber] = useState("");
  const FormTitles = [
    "Experience Details",
    "Availability Details",
    "Additional Information",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <MentorExpDetails
          errorData={errorData}
          formData={formData}
          setFormData={setFormData}
          setErrorData={setErrorData}
        />
      );
    } else if (page === 1) {
      return (
        <MentorSlotDetails
          errorData={errorData}
          formData={formData}
          setFormData={setFormData}
          setErrorData={setErrorData}
          endTime={endTime}
          setEndTime={setEndTime}
        />
      );
    } else {
      return (
        <MentorAddDetails
          setImage={setImage}
          errorData={errorData}
          formData={formData}
          setFormData={setFormData}
          setErrorData={setErrorData}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
        />
      );
    }
  };
  const mentorAdditionalHandler = async (event) => {
    event.preventDefault();
    if (
      !formData.website &&
      !formData.linkedInProfile &&
      !image &&
      !endTime &&
      !formData.bio
    ) {
      return toast.error("Please fill all the required details", {
        position: "top-center",
      });
    }
    if (bioLength(formData.bio) === true) {
      return setErrorData({
        ...errorData,
        bio: "please enter your at lease 50 characters long",
      });
    }
    if (!formData.countryCode) {
      return setErrorData({
        ...errorData,
        countryCode: "Please select the country code",
      });
    }
    if (!formData.validPhoneNumber) {
      return toast.error("Mobile number must be valid", {
        position: "top-center",
      });
    }
    if (!formData.website) {
      return setErrorData({
        ...errorData,
        website: "please enter your website",
      });
    }
    if (!formData.linkedInProfile) {
      return setErrorData({
        ...errorData,
        linkedInProfile: "please paste your linked in profile",
      });
    }

    if (!image) {
      return toast.error("Please select the picture", {
        position: "top-center",
      });
    }
    let data = new FormData();
    data.append("image", image);
    data.append("email", user?.email);
    data.append("bio", formData.bio);
    data.append("experience", formData.experience);
    data.append("skills", formData.skills);
    data.append("otherSkills", formData.otherSkills);
    data.append("firm", formData.firm);
    data.append("currentRole", formData.currentRole);
    data.append("previousRole", formData.previousRole);
    data.append("mentorAvailability", formData.mentorAvailability);
    data.append("startTime", formData.startTime);
    data.append("endTime", endTime);
    data.append("specialty", formData.specialty);
    data.append("mentorshipArea", formData.mentorshipArea);
    data.append("website", formData.website);
    data.append("linkedInProfile", formData.linkedInProfile);
    data.append("phoneNumber", phoneNumber);
    data.append("firstname", firstName);
    data.append("lastname", lastName);
    try {
      setLoading(true);
      const res = await axios.post(
        `https://practiwiz-backend.azurewebsites.net/api/mentor/register/fill/additional-details`,
        data
      );
      if (res.data.success) {
        toast.success(
          "Successfully submitted the mentor application, We will get back back to once we review your application......",
          { position: "top-center" }
        );
        setLoading(false);
        setErrorData({
          email: " ",
          password: " ",
          confirmPassword: " ",
          firstName: " ",
          lastName: " ",
          bio: " ",
          experience: " ",
          skills: " ",
          specialty: " ",
          firm: " ",
          currentRole: " ",
          previousRole: " ",
          mentorshipArea: " ",
          mentorAvailability: " ",
          startTime: " ",
          endTime: " ",
          website: " ",
          linkedInProfile: " ",
          image: " ",
        });
      }
      if (res.data.error) {
        toast.error(res.data.error, { position: "top-center" });
        setLoading(false);
      }
    } catch (error) {
      return;
    }
  };

  function bioLength(bio) {
    if (bio.length < 50) {
      return true;
    } else {
      return false;
    }
  }
  const setPageCount = (event) => {
    event.preventDefault();
    if (page === 0) {
      if (
        !formData.experience &&
        !formData.skills &&
        !formData.currentRole &&
        !formData.previousRole &&
        !formData.firm &&
        !formData.specialty
      ) {
        return toast.error("Please fill all the required details", {
          position: "top-center",
        });
      }
      if (!formData.experience || formData.experience === "") {
        return setErrorData({
          ...errorData,
          experience: "please select your skills",
        });
      }
      if (!formData.specialty || formData.specialty === "") {
        return setErrorData({
          ...errorData,
          specialty: "please select your specialty",
        });
      }
      if (!formData.skills || formData.skills === "") {
        return setErrorData({
          ...errorData,
          skills: "please select your skills",
        });
      }

      if (!formData.firm) {
        return setErrorData({
          ...errorData,
          firm: "please enter your firm name",
        });
      }
      if (!formData.currentRole) {
        return setErrorData({
          ...errorData,
          currentRole: "please enter your current role",
        });
      }
      if (!formData.previousRole) {
        return setErrorData({
          ...errorData,
          previousRole: "please enter your previous role",
        });
      } else {
        setPage((currPage) => currPage + 1);
      }
    } else if (page === 1) {
      if (!formData.mentorshipArea && !formData.mentorAvailability) {
        return toast.error("Please fill all the required details", {
          position: "top-center",
        });
      }
      if (!formData.mentorshipArea || formData.mentorshipArea === "") {
        return setErrorData({
          ...errorData,
          mentorshipArea: "please select your mentorship area",
        });
      }
      if (!formData.mentorAvailability || formData.mentorAvailability === "") {
        return setErrorData({
          ...errorData,
          mentorAvailability: "please select your availability",
        });
      }
      if (!formData.startTime) {
        return setErrorData({
          ...errorData,
          startTime: "please select the slot time",
        });
      } else {
        if (
          formData.startTime.toString().split(":")[1] === "00" ||
          formData.startTime.toString().split(":")[1] === "15" ||
          formData.startTime.toString().split(":")[1] === "30" ||
          formData.startTime.toString().split(":")[1] === "45"
        ) {
          setPage((currPage) => currPage + 1);
        } else {
          return setErrorData({
            ...errorData,
            startTime: "please select the proper timing,",
          });
        }
      }
    } else {
      setButtonEnable(true);
    }
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <MentorRegisterSection>
          <MentorRegisterDiv>
            <MentorRegisterDiv1>
              <MentorRegisterFlex>
                <MentorRegisterLeftDiv>
                  <FormDiv>
                    <FormDivFlex>
                      <Form action="">
                        <ShowFillingDiv>
                          <ShowFillDiv
                            style={{
                              width:
                                page === 0 ? "0%" : page === 1 ? "33%" : "66%",
                            }}
                          />
                        </ShowFillingDiv>
                        <div>
                          <FormHeading>{FormTitles[page]}</FormHeading>
                        </div>

                        {PageDisplay()}
                        <ButtonDiv>
                          {page === 0 ? (
                            ""
                          ) : (
                            <PrevButton
                              type="button"
                              disabled={page === 0}
                              onClick={() => {
                                setPage((currPage) => currPage - 1);
                              }}
                            >
                              Prev
                            </PrevButton>
                          )}

                          {page === FormTitles.length - 1 ? (
                            <JoinButton
                              type="submit"
                              onClick={mentorAdditionalHandler}
                            >
                              Join As a Mentor
                            </JoinButton>
                          ) : (
                            <NextButton type="button" onClick={setPageCount}>
                              Next
                            </NextButton>
                          )}
                        </ButtonDiv>
                      </Form>
                    </FormDivFlex>
                  </FormDiv>
                </MentorRegisterLeftDiv>
                <MentorRegisterRightDiv>
                  <img src={signupImg} alt="" />
                </MentorRegisterRightDiv>
              </MentorRegisterFlex>
            </MentorRegisterDiv1>
          </MentorRegisterDiv>
          <GoToTop />
        </MentorRegisterSection>
      )}
    </div>
  );
};

export default MentorRegisterStepForm;
