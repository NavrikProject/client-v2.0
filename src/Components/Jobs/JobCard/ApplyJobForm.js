import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  academicYears,
  experienceYears,
  skillOptions,
} from "../../Data/JobApplicationData";
import Select from "react-select";
import {
  hideLoadingHandler,
  showLoadingHandler,
} from "../../../redux/loadingReducer";
import { PhoneNumberUtil } from "google-libphonenumber";
import { countriesWithCodes } from "../../Data/FaqData";
const phoneUtil = PhoneNumberUtil.getInstance();
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10000000;
  background-color: rgba(0, 0, 0, 0.75);
`;
const Modal = styled.div`
  position: fixed;
  top: 130px;
  left: 23vw;
  width: 60%;
  height: 70vh;
  overflow: scroll;
  background-color: white;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 130000000000;
  margin: 0 auto !important;
  animation: slide-down 300ms ease-out forwards;
  @media (max-width: 768px) {
    width: 90%;
    left: 30px;
    top: 120px;
  }
  /* width */
  &::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  & ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
  }
  /* Handle on hover */
  & ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
const CloseButton = styled(AiOutlineClose)`
  font-size: 25px;
  color: #111;
  cursor: pointer;
`;
const CloseButtonDiv = styled.div`
  height: 30px;
  width: 30px;
  position: absolute;
  top: 14px;
  right: 16px;
  cursor: pointer;
`;
const FormDiv = styled.div`
  width: 80%;
  margin: 30px auto;
`;
const Form = styled.form``;
const FormLabel = styled.label`
  font-size: 17px;
`;
const FormSelect = styled.select`
  width: 100%;
  outline: none;
  font-size: 17px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  border-bottom-width: 2px;
  transition: all 0.4s ease;
  padding: 10px 10px;
  &:focus {
    border-color: #111;
  }
`;
const FormOption = styled.option``;
const Field = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;
const Input = styled.input`
  outline: none;
  font-size: 17px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  border-bottom-width: 2px;
  transition: all 0.4s ease;
  width: 100%;
  padding: 10px 20px;
  &:focus {
    border-color: #111;
  }
`;
const ErrorMessage = styled.p`
  color: red;
  margin: 0 0 10px 10px;
`;
const AppliedText = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormBtn = styled.button`
  padding: 12px 20px;
  text-align: center;
  font-size: 17px;
  border: none;
  outline: none;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  background-color: #1363df;
  color: #fff;
  border-radius: 5px;
  &:hover {
    opacity: 0.9;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
const JobName = styled.p`
  font-size: 25px;
  padding-bottom: 8px;
  span {
    font-weight: 600;
    color: #077f7f;
    font-size: 19px;
    text-transform: capitalize;
  }
`;
const InputRadio = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  &:focus {
    border-color: #fc83bb;
  }
`;
const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const ApplyJobForm = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [resume, setResume] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [haveExperience, setHaveExperience] = useState("");
  const [showExperienceForm, setShowExperienceForm] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [experienceFoundDetails, setExperienceFoundDetails] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [appliedStatus, setAppliedStatus] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [showErrors, setShowErrors] = useState({
    selectedSkillsError: "",
    showHaveExperienceError: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const getJobAppliedStatus = async () => {
      const res = await axios.get(
        `https://practiwiz-backend.azurewebsites.net/api/jobs/apply/post/form-status/${user?.email}`
      );
      if (res.data.foundExp) {
        setExperienceFoundDetails(true);
      }
      if (res.data.notFoundExp) {
        setExperienceFoundDetails(false);
      }
      if (res.data.notFound) {
        setExperienceFoundDetails("no");
      }
    };
    getJobAppliedStatus();
  }, [user?.email]);
  useEffect(() => {
    const getJobAppliedStatus = async () => {
      const res = await axios.post(
        `https://practiwiz-backend.azurewebsites.net/api/jobs/apply/post/applied-status/${props.indJobDetails.job_post_unique_id}`,
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
  }, [props.indJobDetails.job_post_unique_id, user?.email]);
  const applyJobHandler = async (newData) => {
    if (!selectedOption) {
      return (
        setError("Please select the skills"),
        setShowErrors({ selectedSkillsError: "Please select the skills" })
      );
    }
    if (!haveExperience) {
      return (
        setError("Please select the one of the buttons"),
        setShowErrors({
          showHaveExperienceError: "Please select one of the button",
        })
      );
    }
    if (!validPhoneNumber) {
      return setPhoneNumberError("Mobile number must be valid");
    }

    const data = new FormData();
    data.append("image", resume);
    data.append("fullname", newData.fullname);
    data.append("currency", newData.currency);
    data.append("location", newData.location);
    data.append("city", newData.city);
    data.append("state", newData.state);
    data.append("country", newData.country);
    data.append("collegeName", newData.collegeName);
    data.append("universityName", newData.universityName);
    data.append("startingYear", newData.startingYear);
    data.append("endingYear", newData.endingYear);
    data.append("completedYear", newData.completedYear);
    data.append("percentage", newData.percentage);
    data.append("currentCompanyName", newData.currentCompanyName);
    data.append("currentDesignation", newData.currentDesignation);
    data.append("currentCompanySalary", newData.currentCompanySalary);
    data.append("expectedSalary", newData.expectedSalary);
    data.append("companyLocation", newData.companyLocation);
    data.append("companyCity", newData.companyCity);
    data.append("companyState", newData.companyState);
    data.append("companyCountry", newData.companyCountry);
    data.append("experience", newData.experience);
    data.append("jobPostDtlsId", props.indJobDetails.job_post_dtls_id);
    data.append(
      "hiringCompanyDtlsId",
      props.indJobDetails.hiring_company_dtls_id[0]
    );
    data.append("userDtlsId", user?.id);
    data.append("jobSeekerEmail", user?.email);
    data.append("phoneNumber", phoneNumber);
    data.append("haveExperience", haveExperience);
    data.append(
      "jobRole",
      props.indJobDetails.job_post_role.split("-").join(" ")
    );
    data.append("selectedOption", JSON.stringify(selectedOption));
    try {
      // dispatch(showLoadingHandler());
      const res = await axios.post(
        `https://practiwiz-backend.azurewebsites.net/api/jobs/apply/post/${props.indJobDetails.job_post_unique_id}`,
        data
      );
      if (res.data.success) {
        setSuccess(res.data.success);
        toast.success(res.data.success, {
          position: "top-center",
        });
        dispatch(hideLoadingHandler());
        reset();
      }
      if (res.data.error) {
        setError(res.data.error);
        toast.error(res.data.error, {
          position: "top-center",
        });
        dispatch(hideLoadingHandler());
      }
    } catch (error) {}
  };
  const applyJobWithExperienceHandler = async (data) => {
    if (!haveExperience) {
      return setError("Please select the one of the buttons");
    }
    try {
      const res = await axios.post(
        `https://practiwiz-backend.azurewebsites.net/api/jobs/apply/post/experience/${props.indJobDetails.job_post_unique_id}`,
        {
          data: data,
          jobPostDtlsId: props.indJobDetails.job_post_dtls_id,
          hiringCompanyDtlsId: props.indJobDetails.hiring_company_dtls_id[0],
          userDtlsId: user?.id,
          jobSeekerEmail: user?.email,
          haveExperience: haveExperience,
          selectedOption: selectedOption,
          jobRole: props.indJobDetails.job_post_role.split("-").join(" "),
        }
      );
      if (res.data.success) {
        setSuccess(res.data.success);
        toast.success(res.data.success, {
          position: "top-center",
        });
        dispatch(hideLoadingHandler());
        reset();
      }
      if (res.data.error) {
        setError(res.data.error);
        toast.error(res.data.error, {
          position: "top-center",
        });
        dispatch(hideLoadingHandler());
      }
    } catch (error) {}
  };
  const applyJobWithUpdateHandler = async (newData) => {
    if (!showUpdate) {
      return setError("Please select the one of the buttons");
    }
    if (showUpdate === "yes") {
      if (!validPhoneNumber) {
        return setPhoneNumberError("Mobile number must be valid");
      }
      if (!selectedOption) {
        return (
          setError("Please select the skills"),
          setShowErrors({ selectedSkillsError: "Please select the skills" })
        );
      }
      if (!haveExperience) {
        return (
          setError("Please select the one of the buttons"),
          setShowErrors({
            showHaveExperienceError: "Please select one of the button",
          })
        );
      }
    }
    const data = new FormData();
    data.append("image", resume);
    data.append("fullname", newData.fullname);
    data.append("currency", newData.currency);
    data.append("location", newData.location);
    data.append("city", newData.city);
    data.append("state", newData.state);
    data.append("country", newData.country);
    data.append("collegeName", newData.collegeName);
    data.append("universityName", newData.universityName);
    data.append("startingYear", newData.startingYear);
    data.append("endingYear", newData.endingYear);
    data.append("completedYear", newData.completedYear);
    data.append("percentage", newData.percentage);
    data.append("currentCompanyName", newData.currentCompanyName);
    data.append("currentDesignation", newData.currentDesignation);
    data.append("currentCompanySalary", newData.currentCompanySalary);
    data.append("expectedSalary", newData.expectedSalary);
    data.append("companyLocation", newData.companyLocation);
    data.append("companyCity", newData.companyCity);
    data.append("companyState", newData.companyState);
    data.append("companyCountry", newData.companyCountry);
    data.append("experience", newData.experience);
    data.append("jobPostDtlsId", props.indJobDetails.job_post_dtls_id);
    data.append(
      "hiringCompanyDtlsId",
      props.indJobDetails.hiring_company_dtls_id[0]
    );
    data.append("userDtlsId", user?.id);
    data.append("jobSeekerEmail", user?.email);
    data.append("phoneNumber", phoneNumber);
    data.append("haveExperience", haveExperience);
    data.append(
      "jobRole",
      props.indJobDetails.job_post_role.split("-").join(" ")
    );
    data.append("selectedOption", JSON.stringify(selectedOption));
    try {
      const res = await axios.post(
        `https://practiwiz-backend.azurewebsites.net/api/jobs/apply/post/update/${props.indJobDetails.job_post_unique_id}`,
        data
      );
      if (res.data.success) {
        setSuccess(res.data.success);
        toast.success(res.data.success, {
          position: "top-center",
        });
        dispatch(hideLoadingHandler());
        reset();
      }
      if (res.data.error) {
        setError(res.data.error);
        toast.error(res.data.error, {
          position: "top-center",
        });
        dispatch(hideLoadingHandler());
      }
    } catch (error) {}
  };
  const typeHandler = (event) => {
    setError(" ");
    setShowErrors({
      showHaveExperienceError: " ",
    });
    if (event.target.value === "yes") {
      setHaveExperience(event.target.value);
      setShowExperienceForm(true);
    } else {
      setHaveExperience(event.target.value);
      setShowExperienceForm(false);
    }
  };
  const showUpdateFormHandler = (event) => {
    setError(" ");
    if (event.target.value === "yes") {
      setShowUpdate(event.target.value);
    } else {
      setShowUpdate(event.target.value);
    }
  };
  const verifyMobileNumber = (event) => {
    if (!countryCode) {
      return (
        setPhoneNumberError("Select the country first"),
        setValidPhoneNumber(false)
      );
    }
    const number = countryCode + event.target.value;
    if (number.length < 6 || number.length > 13) {
      return (
        setPhoneNumberError("Must be a valid phone number"),
        setValidPhoneNumber(false)
      );
    }
    const parsePhoneNumber = phoneUtil.parseAndKeepRawInput(number);
    // Check if the number is valid
    if (phoneUtil.isValidNumber(parsePhoneNumber) === true) {
      return (
        setPhoneNumberError(" "),
        setPhoneNumber(number),
        setValidPhoneNumber(true)
      );
    } else {
      // Not a valid number
      return (
        setPhoneNumberError("Must be a valid phone number"),
        setValidPhoneNumber(false)
      );
    }
  };
  return (
    <Backdrop>
      <Modal>
        <CloseButtonDiv onClick={props.showApplyJobModalHandler}>
          <CloseButton />
        </CloseButtonDiv>
        <FormDiv>
          {error && (
            <p style={{ color: "red", textAlign: "center" }}>{error}</p>
          )}
          {success && (
            <p style={{ color: "green", textAlign: "center" }}>{success}</p>
          )}
          {loading && <p>Loading... please wait...</p>}
          {appliedStatus === true ? (
            <AppliedText>You have already applied for this job!</AppliedText>
          ) : (
            <>
              <JobName>
                You are applying for
                <span>
                  {" " +
                    props.indJobDetails.job_post_role.split("-").join(" ") +
                    " "}
                </span>
                <hr />
              </JobName>
              {/* show default form */}
              {experienceFoundDetails === "no" && (
                <>
                  <Form onSubmit={handleSubmit(applyJobHandler)} encType="">
                    <Field>
                      <FormLabel>Upload your resume or cv :</FormLabel>
                      <Input
                        accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        required
                        type="file"
                        name="image"
                        placeholder="Choose the profile picture"
                        onChange={(event) => setResume(event.target.files[0])}
                      />
                      * Only Pdf or Doc or Docx format accepted.
                    </Field>
                    <Field>
                      <Input
                        required
                        {...register("fullname", {
                          required: "Please enter your full Name",
                          pattern: {
                            value: /\S+(?:\s+\S+)*/g,
                            message: "Remove the space from the field",
                          },
                        })}
                        type="text"
                        placeholder="Enter your full Name"
                        onKeyUp={() => {
                          trigger("firstName");
                        }}
                      />
                      {errors.fullname && (
                        <ErrorMessage>{errors.fullname.message}</ErrorMessage>
                      )}
                    </Field>
                    <Field>
                      <FormLabel>Enter your mobile number :</FormLabel>
                      <FormSelect
                        required
                        name=""
                        id=""
                        onChange={(event) => {
                          return (
                            setCountryCode(event.target.value),
                            setPhoneNumberError("")
                          );
                        }}
                      >
                        <>
                          <FormOption value="">
                            Choose the country code
                          </FormOption>
                          {countriesWithCodes.map((country, index) => (
                            <FormOption value={country.mobileCode}>
                              {country.name + " "}(
                              {country.code + " " + country.mobileCode})
                            </FormOption>
                          ))}
                        </>
                      </FormSelect>
                    </Field>
                    <Field>
                      <Input
                        pattern="/^\S*$/,"
                        required
                        type="number"
                        onChange={verifyMobileNumber}
                      />
                      {phoneNumberError && (
                        <ErrorMessage>{phoneNumberError}</ErrorMessage>
                      )}
                    </Field>
                    <Field>
                      <FormLabel>Choose the currency:</FormLabel>
                      <FormSelect
                        required
                        name="currency"
                        {...register("currency", {
                          required: "Choose your currency",
                        })}
                      >
                        <FormOption value="">Choose a below option</FormOption>
                        <FormOption value="INR">INR</FormOption>
                        <FormOption value="USD">USD</FormOption>
                        <FormOption value="Pounds">Pounds</FormOption>
                        <FormOption value="CD">Canadian Dollars</FormOption>
                      </FormSelect>
                      {errors.currency && (
                        <ErrorMessage>{errors.currency.message}</ErrorMessage>
                      )}
                    </Field>
                    <Field>
                      <Input
                        required
                        {...register("location", {
                          required: "Enter your location",
                          pattern: {
                            value: /\S+(?:\s+\S+)*/g,
                            message: "Remove the space from the field",
                          },
                        })}
                        onKeyUp={() => trigger("location")}
                        type="text"
                        placeholder="Enter your location"
                      />
                      {errors.location && (
                        <ErrorMessage>{errors.location.message}</ErrorMessage>
                      )}
                    </Field>
                    <Field>
                      <Input
                        {...register("city", {
                          required: "Enter your city",
                          pattern: {
                            value: /\S+(?:\s+\S+)*/g,
                            message: "Remove the space from the field",
                          },
                        })}
                        onKeyUp={() => trigger("city")}
                        required
                        type="text"
                        placeholder="Enter your city"
                      />
                      {errors.city && (
                        <ErrorMessage>{errors.city.message}</ErrorMessage>
                      )}
                    </Field>
                    <Field>
                      <Input
                        required
                        {...register("state", {
                          required: "Enter your state name",
                          pattern: {
                            value: /\S+(?:\s+\S+)*/g,
                            message: "Remove the space from the field",
                          },
                        })}
                        onKeyUp={() => trigger("state")}
                        type="text"
                        placeholder="Enter your state name"
                      />
                      {errors.state && (
                        <ErrorMessage>{errors.state.message}</ErrorMessage>
                      )}
                    </Field>
                    <Field>
                      <Input
                        required
                        {...register("country", {
                          required: "Enter your country name",
                          pattern: {
                            value: /\S+(?:\s+\S+)*/g,
                            message: "Remove the space from the field",
                          },
                        })}
                        onKeyUp={() => trigger("country")}
                        type="text"
                        placeholder="Enter your country name"
                      />
                      {errors.country && (
                        <ErrorMessage>{errors.country.message}</ErrorMessage>
                      )}
                    </Field>
                    <h3>
                      Educational Details <hr />
                    </h3>
                    <Field>
                      <Input
                        required
                        {...register("collegeName", {
                          required: "Enter your college name",
                          pattern: {
                            value: /\S+(?:\s+\S+)*/g,
                            message: "Remove the space from the field",
                          },
                        })}
                        onKeyUp={() => trigger("collegeName")}
                        type="text"
                        placeholder="Enter your college name"
                      />
                      {errors.collegeName && (
                        <ErrorMessage>
                          {errors.collegeName.message}
                        </ErrorMessage>
                      )}
                    </Field>
                    <Field>
                      <Input
                        {...register("universityName", {
                          required: "Enter your university name",
                          pattern: {
                            value: /\S+(?:\s+\S+)*/g,
                            message: "Remove the space from the field",
                          },
                        })}
                        onKeyUp={() => trigger("universityName")}
                        required
                        type="text"
                        placeholder="Enter your university name"
                      />
                      {errors.universityName && (
                        <ErrorMessage>
                          {errors.universityName.message}
                        </ErrorMessage>
                      )}
                    </Field>
                    <Field>
                      <FormSelect
                        required
                        name="startingYear"
                        {...register("startingYear", {
                          required:
                            "Choose the highest education starting year",
                        })}
                      >
                        <FormOption value="">
                          Choose the highest education starting year
                        </FormOption>
                        {academicYears.map((year) => (
                          <FormOption value={year.value}>
                            {year.value}
                          </FormOption>
                        ))}
                      </FormSelect>
                      {errors.startingYear && (
                        <ErrorMessage>
                          {errors.startingYear.message}
                        </ErrorMessage>
                      )}
                    </Field>
                    <Field>
                      <FormSelect
                        required
                        name="endingYear"
                        {...register("endingYear", {
                          required:
                            "Choose the highest education starting year",
                        })}
                      >
                        <FormOption value="">
                          Choose the highest education ending year
                        </FormOption>
                        {academicYears.map((year) => (
                          <FormOption value={year.value}>
                            {year.value}
                          </FormOption>
                        ))}
                      </FormSelect>
                      {errors.endingYear && (
                        <ErrorMessage>{errors.endingYear.message}</ErrorMessage>
                      )}
                    </Field>
                    <Field>
                      <FormLabel>
                        Highest Education completion year :{" "}
                      </FormLabel>
                      <Input
                        required
                        {...register("completedYear", {
                          required:
                            "Enter your highest education passed out year",
                        })}
                        type="date"
                        placeholder="Enter your highest education passed out year"
                      />
                      {errors.completedYear && (
                        <ErrorMessage>
                          {errors.completedYear.message}
                        </ErrorMessage>
                      )}
                    </Field>
                    <Field>
                      <Input
                        required
                        {...register("percentage", {
                          required: "Enter your highest education percentage",
                        })}
                        type="number"
                        placeholder="Enter your highest education percentage"
                      />
                      {errors.percentage && (
                        <ErrorMessage>{errors.percentage.message}</ErrorMessage>
                      )}
                    </Field>
                    <Field>
                      <FormLabel>Select your skills</FormLabel>
                      <Select
                        required
                        isMulti={true}
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={skillOptions}
                      />
                      {showErrors?.selectedSkillsError && (
                        <ErrorMessage>
                          {showErrors.selectedSkillsError}
                        </ErrorMessage>
                      )}
                    </Field>
                    <Field>
                      <RadioWrapper>
                        Do you have work experience ?
                        <RadioWrapper>
                          <InputRadio
                            required
                            type="radio"
                            id="yes"
                            value="yes"
                            checked={haveExperience === "yes"}
                            onChange={typeHandler}
                          />
                          <FormLabel htmlFor="yes">Yes</FormLabel>
                        </RadioWrapper>
                        <RadioWrapper>
                          <InputRadio
                            required
                            type="radio"
                            id="no"
                            value="no"
                            checked={haveExperience === "no"}
                            onChange={typeHandler}
                          />
                          <FormLabel htmlFor="no">No</FormLabel>
                        </RadioWrapper>
                      </RadioWrapper>
                      {showErrors?.showHaveExperienceError && (
                        <ErrorMessage>
                          {showErrors.showHaveExperienceError}
                        </ErrorMessage>
                      )}
                    </Field>
                    {showExperienceForm && (
                      <>
                        <h3>
                          Experience Details
                          <hr />
                        </h3>
                        <Field>
                          <Input
                            {...register("currentCompanyName", {
                              required: "Enter your current company name",
                              pattern: {
                                value: /\S+(?:\s+\S+)*/g,
                                message: "Remove the space from the field",
                              },
                            })}
                            onKeyUp={() => trigger("currentCompanyName")}
                            required
                            type="text"
                            placeholder="Enter your current company name"
                          />
                          {errors.currentCompanyName && (
                            <ErrorMessage>
                              {errors.currentCompanyName.message}
                            </ErrorMessage>
                          )}
                        </Field>
                        <Field>
                          <Input
                            {...register("currentDesignation", {
                              required: "Enter your current designation",
                              pattern: {
                                value: /\S+(?:\s+\S+)*/g,
                                message: "Remove the space from the field",
                              },
                            })}
                            onKeyUp={() => trigger("currentDesignation")}
                            required
                            type="text"
                            placeholder="Enter your current designation"
                          />
                          {errors.currentDesignation && (
                            <ErrorMessage>
                              {errors.currentDesignation.message}
                            </ErrorMessage>
                          )}
                        </Field>
                        <Field>
                          <FormSelect
                            required
                            name="experience"
                            {...register("experience", {
                              required: "Choose the experience years",
                            })}
                          >
                            <FormOption value="">
                              Select the number of years experience
                            </FormOption>
                            {experienceYears.map((expYear) => (
                              <FormOption
                                key={expYear.id}
                                value={expYear.value}
                              >
                                {expYear.value} years
                              </FormOption>
                            ))}
                          </FormSelect>
                          {errors.experience && (
                            <ErrorMessage>
                              {errors.experience.message}
                            </ErrorMessage>
                          )}
                        </Field>
                        <Field>
                          <Input
                            required
                            {...register("currentCompanySalary", {
                              required: "Enter your current annual salary",
                            })}
                            type="number"
                            placeholder="Enter your current annual salary"
                          />
                          {errors.currentCompanySalary && (
                            <ErrorMessage>
                              {errors.currentCompanySalary.message}
                            </ErrorMessage>
                          )}
                        </Field>
                        <Field>
                          <Input
                            required
                            {...register("expectedSalary", {
                              required: "Enter your expected salary",
                            })}
                            type="number"
                            placeholder="Enter your expected salary"
                          />
                          {errors.expectedSalary && (
                            <ErrorMessage>
                              {errors.expectedSalary.message}
                            </ErrorMessage>
                          )}
                        </Field>
                        <Field>
                          <Input
                            {...register("companyLocation", {
                              required: "Enter your Company location",
                              pattern: {
                                value: /\S+(?:\s+\S+)*/g,
                                message: "Remove the space from the field",
                              },
                            })}
                            onKeyUp={() => trigger("companyLocation")}
                            required
                            type="text"
                            placeholder="Enter your company location"
                          />
                          {errors.companyLocation && (
                            <ErrorMessage>
                              {errors.companyLocation.message}
                            </ErrorMessage>
                          )}
                        </Field>
                        <Field>
                          <Input
                            {...register("companyCity", {
                              required: "Enter your company city",
                              pattern: {
                                value: /\S+(?:\s+\S+)*/g,
                                message: "Remove the space from the field",
                              },
                            })}
                            onKeyUp={() => trigger("companyCity")}
                            required
                            type="text"
                            placeholder="Enter your company city"
                          />
                          {errors.companyCity && (
                            <ErrorMessage>
                              {errors.companyCity.message}
                            </ErrorMessage>
                          )}
                        </Field>
                        <Field>
                          <Input
                            {...register("companyState", {
                              required: "Enter your company state name",
                              pattern: {
                                value: /\S+(?:\s+\S+)*/g,
                                message: "Remove the space from the field",
                              },
                            })}
                            onKeyUp={() => trigger("companyState")}
                            required
                            type="text"
                            placeholder="Enter your company state name"
                          />
                          {errors.companyState && (
                            <ErrorMessage>
                              {errors.companyState.message}
                            </ErrorMessage>
                          )}
                        </Field>
                        <Field>
                          <Input
                            {...register("companyCountry", {
                              required: "Enter your company country name",
                              pattern: {
                                value: /\S+(?:\s+\S+)*/g,
                                message: "Remove the space from the field",
                              },
                            })}
                            onKeyUp={() => trigger("companyCountry")}
                            required
                            type="text"
                            placeholder="Enter your company country name"
                          />
                          {errors.companyCountry && (
                            <ErrorMessage>
                              {errors.companyCountry.message}
                            </ErrorMessage>
                          )}
                        </Field>
                      </>
                    )}{" "}
                    <FormBtn type="submit">Apply Now</FormBtn>
                  </Form>
                </>
              )}
              {/* show only experience form form */}
              {experienceFoundDetails === false && (
                <>
                  <Form onSubmit={handleSubmit(applyJobWithExperienceHandler)}>
                    <Field>
                      <RadioWrapper>
                        Do you have work experience ?
                        <RadioWrapper>
                          <InputRadio
                            onFocus={() => setError(" ")}
                            required
                            type="radio"
                            id="yes"
                            value="yes"
                            checked={haveExperience === "yes"}
                            onChange={typeHandler}
                          />
                          <FormLabel htmlFor="yes">Yes</FormLabel>
                        </RadioWrapper>
                        <RadioWrapper>
                          <InputRadio
                            onFocus={() => setError(" ")}
                            required
                            type="radio"
                            id="no"
                            value="no"
                            checked={haveExperience === "no"}
                            onChange={typeHandler}
                          />
                          <FormLabel htmlFor="no">No</FormLabel>
                        </RadioWrapper>
                      </RadioWrapper>
                      {showErrors?.showHaveExperienceError && (
                        <ErrorMessage>
                          {showErrors.showHaveExperienceError}
                        </ErrorMessage>
                      )}
                    </Field>
                    {showExperienceForm && (
                      <>
                        <h3>
                          Experience Details
                          <hr />
                        </h3>
                        <Field>
                          <Input
                            {...register("currentCompanyName", {
                              required: "Enter your current company name",
                              pattern: {
                                value: /\S+(?:\s+\S+)*/g,
                                message: "Remove the space from the field",
                              },
                            })}
                            onKeyUp={() => trigger("currentCompanyName")}
                            required
                            type="text"
                            placeholder="Enter your current company name"
                          />
                          {errors.currentCompanyName && (
                            <ErrorMessage>
                              {errors.currentCompanyName.message}
                            </ErrorMessage>
                          )}
                        </Field>
                        <Field>
                          <Input
                            {...register("currentDesignation", {
                              required: "Enter your current designation",
                              pattern: {
                                value: /\S+(?:\s+\S+)*/g,
                                message: "Remove the space from the field",
                              },
                            })}
                            onKeyUp={() => trigger("currentDesignation")}
                            required
                            type="text"
                            placeholder="Enter your current designation"
                          />
                          {errors.currentDesignation && (
                            <ErrorMessage>
                              {errors.currentDesignation.message}
                            </ErrorMessage>
                          )}
                        </Field>
                        <Field>
                          <FormSelect
                            required
                            name="experience"
                            {...register("experience", {
                              required: "Choose the experience years",
                            })}
                          >
                            <FormOption value="">
                              Select the number of years experience
                            </FormOption>
                            {experienceYears.map((expYear) => (
                              <FormOption
                                key={expYear.id}
                                value={expYear.value}
                              >
                                {expYear.value} years
                              </FormOption>
                            ))}
                          </FormSelect>
                          {errors.experience && (
                            <ErrorMessage>
                              {errors.experience.message}
                            </ErrorMessage>
                          )}
                        </Field>
                        <Field>
                          <Input
                            {...register("currentCompanySalary", {
                              required: "Enter your current annual salary",
                              pattern: {
                                value: /\S+(?:\s+\S+)*/g,
                                message: "Remove the space from the field",
                              },
                            })}
                            onKeyUp={() => trigger("currentCompanySalary")}
                            required
                            type="number"
                            placeholder="Enter your current annual salary"
                          />
                          {errors.currentCompanySalary && (
                            <ErrorMessage>
                              {errors.currentCompanySalary.message}
                            </ErrorMessage>
                          )}
                        </Field>
                        <Field>
                          <Input
                            required
                            {...register("expectedSalary", {
                              required: "Enter your expected salary",
                            })}
                            type="number"
                            placeholder="Enter your expected salary"
                          />
                          {errors.expectedSalary && (
                            <ErrorMessage>
                              {errors.expectedSalary.message}
                            </ErrorMessage>
                          )}
                        </Field>
                        <Field>
                          <Input
                            {...register("companyLocation", {
                              required: "Enter your Company location",
                              pattern: {
                                value: /\S+(?:\s+\S+)*/g,
                                message: "Remove the space from the field",
                              },
                            })}
                            onKeyUp={() => trigger("companyLocation")}
                            required
                            type="text"
                            placeholder="Enter your company location"
                          />
                          {errors.companyLocation && (
                            <ErrorMessage>
                              {errors.companyLocation.message}
                            </ErrorMessage>
                          )}
                        </Field>
                        <Field>
                          <Input
                            {...register("companyCity", {
                              required: "Enter your company city",
                              pattern: {
                                value: /\S+(?:\s+\S+)*/g,
                                message: "Remove the space from the field",
                              },
                            })}
                            onKeyUp={() => trigger("companyCity")}
                            required
                            type="text"
                            placeholder="Enter your company city"
                          />
                          {errors.companyCity && (
                            <ErrorMessage>
                              {errors.companyCity.message}
                            </ErrorMessage>
                          )}
                        </Field>
                        <Field>
                          <Input
                            {...register("companyState", {
                              required: "Enter your company state name",
                              pattern: {
                                value: /\S+(?:\s+\S+)*/g,
                                message: "Remove the space from the field",
                              },
                            })}
                            onKeyUp={() => trigger("companyState")}
                            required
                            type="text"
                            placeholder="Enter your company state name"
                          />
                          {errors.companyState && (
                            <ErrorMessage>
                              {errors.companyState.message}
                            </ErrorMessage>
                          )}
                        </Field>
                        <Field>
                          <Input
                            {...register("companyCountry", {
                              required: "Enter your company country name",
                              pattern: {
                                value: /\S+(?:\s+\S+)*/g,
                                message: "Remove the space from the field",
                              },
                            })}
                            onKeyUp={() => trigger("companyCountry")}
                            required
                            type="text"
                            placeholder="Enter your company country name"
                          />
                          {errors.companyCountry && (
                            <ErrorMessage>
                              {errors.companyCountry.message}
                            </ErrorMessage>
                          )}
                        </Field>
                      </>
                    )}
                    <FormBtn type="submit">Apply Now</FormBtn>
                  </Form>
                </>
              )}
              {/* show only the form when user wants to update */}
              {experienceFoundDetails === true && (
                <Form onSubmit={handleSubmit(applyJobWithUpdateHandler)}>
                  <Field>
                    <RadioWrapper>
                      Do you want update your details ?
                      <RadioWrapper>
                        <InputRadio
                          required
                          type="radio"
                          id="yes"
                          value="yes"
                          checked={showUpdate === "yes"}
                          onChange={showUpdateFormHandler}
                        />
                        <FormLabel htmlFor="yes">Yes</FormLabel>
                      </RadioWrapper>
                      <RadioWrapper>
                        <InputRadio
                          required
                          type="radio"
                          id="no"
                          value="no"
                          checked={showUpdate === "no"}
                          onChange={showUpdateFormHandler}
                        />
                        <FormLabel htmlFor="no">No</FormLabel>
                      </RadioWrapper>
                    </RadioWrapper>
                    {showUpdate === "yes" && (
                      <>
                        <Field>
                          <FormLabel>Upload your resume or cv :</FormLabel>
                          <Input
                            accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            required
                            type="file"
                            name="image"
                            placeholder="Choose the profile picture"
                            onChange={(event) =>
                              setResume(event.target.files[0])
                            }
                          />
                          * Only Pdf or Doc or Docx format accepted.
                        </Field>
                        <Field>
                          <Input
                            required
                            {...register("fullname", {
                              required: "Please enter your full Name",
                              pattern: {
                                value: /\S+(?:\s+\S+)*/g,
                                message: "Remove the space from the field",
                              },
                            })}
                            onKeyUp={() => {
                              trigger("fullname");
                            }}
                            type="text"
                            placeholder="Enter your full Name"
                          />
                          {errors.fullname && (
                            <ErrorMessage>
                              {errors.fullname.message}
                            </ErrorMessage>
                          )}
                        </Field>
                        <Field>
                          <FormLabel>Enter your mobile number :</FormLabel>
                          <FormSelect
                            required
                            name=""
                            id=""
                            onChange={(event) => {
                              return (
                                setCountryCode(event.target.value),
                                setPhoneNumberError("")
                              );
                            }}
                          >
                            <>
                              <FormOption value="">
                                Choose the country code
                              </FormOption>
                              {countriesWithCodes.map((country, index) => (
                                <FormOption value={country.mobileCode}>
                                  {country.name + " "}(
                                  {country.code + " " + country.mobileCode})
                                </FormOption>
                              ))}
                            </>
                          </FormSelect>
                        </Field>
                        <Field>
                          <Input
                            pattern="/^\S*$/,"
                            required
                            type="number"
                            onChange={verifyMobileNumber}
                          />
                          {phoneNumberError && (
                            <ErrorMessage>{phoneNumberError}</ErrorMessage>
                          )}
                        </Field>
                        <Field>
                          <FormLabel>Choose the currency:</FormLabel>
                          <FormSelect
                            required
                            name="currency"
                            {...register("currency", {
                              required: "Choose your currency",
                            })}
                          >
                            <FormOption value="">
                              Choose a below option
                            </FormOption>
                            <FormOption value="INR">INR</FormOption>
                            <FormOption value="USD">USD</FormOption>
                            <FormOption value="Pounds">Pounds</FormOption>
                            <FormOption value="CD">Canadian Dollars</FormOption>
                          </FormSelect>
                          {errors.currency && (
                            <ErrorMessage>
                              {errors.currency.message}
                            </ErrorMessage>
                          )}
                        </Field>
                        <Field>
                          <Input
                            {...register("location", {
                              required: "Enter your location",
                              pattern: {
                                value: /\S+(?:\s+\S+)*/g,
                                message: "Remove the space from the field",
                              },
                            })}
                            onKeyUp={() => {
                              trigger("location");
                            }}
                            required
                            type="text"
                            placeholder="Enter your location"
                          />
                          {errors.location && (
                            <ErrorMessage>
                              {errors.location.message}
                            </ErrorMessage>
                          )}
                        </Field>
                        <Field>
                          <Input
                            {...register("city", {
                              required: "Enter your city",
                              pattern: {
                                value: /\S+(?:\s+\S+)*/g,
                                message: "Remove the space from the field",
                              },
                            })}
                            required
                            onKeyUp={() => {
                              trigger("city");
                            }}
                            type="text"
                            placeholder="Enter your city"
                          />
                          {errors.city && (
                            <ErrorMessage>{errors.city.message}</ErrorMessage>
                          )}
                        </Field>
                        <Field>
                          <Input
                            {...register("state", {
                              required: "Enter your state name",
                              pattern: {
                                value: /\S+(?:\s+\S+)*/g,
                                message: "Remove the space from the field",
                              },
                            })}
                            required
                            onKeyUp={() => {
                              trigger("state");
                            }}
                            type="text"
                            placeholder="Enter your state name"
                          />
                          {errors.state && (
                            <ErrorMessage>{errors.state.message}</ErrorMessage>
                          )}
                        </Field>
                        <Field>
                          <Input
                            {...register("country", {
                              required: "Enter your country name",
                              pattern: {
                                value: /\S+(?:\s+\S+)*/g,
                                message: "Remove the space from the field",
                              },
                            })}
                            required
                            onKeyUp={() => {
                              trigger("country");
                            }}
                            type="text"
                            placeholder="Enter your country name"
                          />
                          {errors.country && (
                            <ErrorMessage>
                              {errors.country.message}
                            </ErrorMessage>
                          )}
                        </Field>
                        <h3>
                          Educational Details <hr />
                        </h3>
                        <Field>
                          <Input
                            {...register("collegeName", {
                              required: "Enter your college name",
                              pattern: {
                                value: /\S+(?:\s+\S+)*/g,
                                message: "Remove the space from the field",
                              },
                            })}
                            onKeyUp={() => {
                              trigger("collegeName");
                            }}
                            required
                            type="text"
                            placeholder="Enter your college name"
                          />
                          {errors.collegeName && (
                            <ErrorMessage>
                              {errors.collegeName.message}
                            </ErrorMessage>
                          )}
                        </Field>
                        <Field>
                          <Input
                            {...register("universityName", {
                              required: "Enter your university name",
                              pattern: {
                                value: /\S+(?:\s+\S+)*/g,
                                message: "Remove the space from the field",
                              },
                            })}
                            onKeyUp={() => {
                              trigger("universityName");
                            }}
                            required
                            type="text"
                            placeholder="Enter your university name"
                          />
                          {errors.universityName && (
                            <ErrorMessage>
                              {errors.universityName.message}
                            </ErrorMessage>
                          )}
                        </Field>
                        <Field>
                          <FormSelect
                            required
                            name="startingYear"
                            {...register("startingYear", {
                              required:
                                "Choose the highest education starting year",
                            })}
                          >
                            <FormOption value="">
                              Choose the highest education starting year
                            </FormOption>
                            {academicYears.map((year) => (
                              <FormOption value={year.value}>
                                {year.value}
                              </FormOption>
                            ))}
                          </FormSelect>
                          {errors.startingYear && (
                            <ErrorMessage>
                              {errors.startingYear.message}
                            </ErrorMessage>
                          )}
                        </Field>
                        <Field>
                          <FormSelect
                            required
                            name="endingYear"
                            {...register("endingYear", {
                              required:
                                "Choose the highest education starting year",
                            })}
                          >
                            <FormOption value="">
                              Choose the highest education ending year
                            </FormOption>
                            {academicYears.map((year) => (
                              <FormOption value={year.value}>
                                {year.value}
                              </FormOption>
                            ))}
                          </FormSelect>
                          {errors.endingYear && (
                            <ErrorMessage>
                              {errors.endingYear.message}
                            </ErrorMessage>
                          )}
                        </Field>
                        <Field>
                          <FormLabel>
                            Highest Education completion year :{" "}
                          </FormLabel>
                          <Input
                            required
                            {...register("completedYear", {
                              required:
                                "Enter your highest education passed out year",
                            })}
                            type="date"
                            placeholder="Enter your highest education passed out year"
                          />
                          {errors.completedYear && (
                            <ErrorMessage>
                              {errors.completedYear.message}
                            </ErrorMessage>
                          )}
                        </Field>
                        <Field>
                          <Input
                            required
                            {...register("percentage", {
                              required:
                                "Enter your highest education percentage",
                            })}
                            type="number"
                            placeholder="Enter your highest education percentage"
                          />
                          {errors.percentage && (
                            <ErrorMessage>
                              {errors.percentage.message}
                            </ErrorMessage>
                          )}
                        </Field>
                        <Field>
                          <FormLabel>Select your skills</FormLabel>
                          <Select
                            required
                            isMulti={true}
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={skillOptions}
                          />
                          {showErrors?.selectedSkillsError && (
                            <ErrorMessage>
                              {showErrors.selectedSkillsError}
                            </ErrorMessage>
                          )}
                        </Field>
                        <Field>
                          <RadioWrapper>
                            Do you have work experience ?
                            <RadioWrapper>
                              <InputRadio
                                required
                                type="radio"
                                id="yes"
                                value="yes"
                                checked={haveExperience === "yes"}
                                onChange={typeHandler}
                              />
                              <FormLabel htmlFor="yes">Yes</FormLabel>
                            </RadioWrapper>
                            <RadioWrapper>
                              <InputRadio
                                required
                                type="radio"
                                id="no"
                                value="no"
                                checked={haveExperience === "no"}
                                onChange={typeHandler}
                              />
                              <FormLabel htmlFor="no">No</FormLabel>
                            </RadioWrapper>
                          </RadioWrapper>
                          {showErrors?.showHaveExperienceError && (
                            <ErrorMessage>
                              {showErrors.showHaveExperienceError}
                            </ErrorMessage>
                          )}
                        </Field>
                        {showExperienceForm && (
                          <>
                            <h3>
                              Experience Details
                              <hr />
                            </h3>
                            <Field>
                              <Input
                                {...register("currentCompanyName", {
                                  required: "Enter your current company name",
                                  pattern: {
                                    value: /\S+(?:\s+\S+)*/g,
                                    message: "Remove the space from the field",
                                  },
                                })}
                                onKeyUp={() => {
                                  trigger("currentCompanyName");
                                }}
                                required
                                type="text"
                                placeholder="Enter your current company name"
                              />
                              {errors.currentCompanyName && (
                                <ErrorMessage>
                                  {errors.currentCompanyName.message}
                                </ErrorMessage>
                              )}
                            </Field>
                            <Field>
                              <Input
                                {...register("currentDesignation", {
                                  required: "Enter your current designation",
                                  pattern: {
                                    value: /\S+(?:\s+\S+)*/g,
                                    message: "Remove the space from the field",
                                  },
                                })}
                                onKeyUp={() => {
                                  trigger("currentDesignation");
                                }}
                                required
                                type="text"
                                placeholder="Enter your current designation"
                              />
                              {errors.currentDesignation && (
                                <ErrorMessage>
                                  {errors.currentDesignation.message}
                                </ErrorMessage>
                              )}
                            </Field>
                            <Field>
                              <FormSelect
                                required
                                name="experience"
                                {...register("experience", {
                                  required: "Choose the experience years",
                                })}
                              >
                                <FormOption value="">
                                  Select the number of years experience
                                </FormOption>
                                {experienceYears.map((expYear) => (
                                  <FormOption
                                    key={expYear.id}
                                    value={expYear.value}
                                  >
                                    {expYear.value} years
                                  </FormOption>
                                ))}
                              </FormSelect>
                              {errors.experience && (
                                <ErrorMessage>
                                  {errors.experience.message}
                                </ErrorMessage>
                              )}
                            </Field>
                            <Field>
                              <Input
                                required
                                {...register("currentCompanySalary", {
                                  required: "Enter your current annual salary",
                                })}
                                type="number"
                                placeholder="Enter your current annual salary"
                              />
                              {errors.currentCompanySalary && (
                                <ErrorMessage>
                                  {errors.currentCompanySalary.message}
                                </ErrorMessage>
                              )}
                            </Field>
                            <Field>
                              <Input
                                required
                                {...register("expectedSalary", {
                                  required: "Enter your expected salary",
                                })}
                                type="number"
                                placeholder="Enter your expected salary"
                              />
                              {errors.expectedSalary && (
                                <ErrorMessage>
                                  {errors.expectedSalary.message}
                                </ErrorMessage>
                              )}
                            </Field>
                            <Field>
                              <Input
                                {...register("companyLocation", {
                                  required: "Enter your Company location",
                                  pattern: {
                                    value: /\S+(?:\s+\S+)*/g,
                                    message: "Remove the space from the field",
                                  },
                                })}
                                onKeyUp={() => {
                                  trigger("companyLocation");
                                }}
                                required
                                type="text"
                                placeholder="Enter your company location"
                              />
                              {errors.companyLocation && (
                                <ErrorMessage>
                                  {errors.companyLocation.message}
                                </ErrorMessage>
                              )}
                            </Field>
                            <Field>
                              <Input
                                {...register("companyCity", {
                                  required: "Enter your company city",
                                  pattern: {
                                    value: /\S+(?:\s+\S+)*/g,
                                    message: "Remove the space from the field",
                                  },
                                })}
                                onKeyUp={() => {
                                  trigger("companyCity");
                                }}
                                required
                                type="text"
                                placeholder="Enter your company city"
                              />
                              {errors.companyCity && (
                                <ErrorMessage>
                                  {errors.companyCity.message}
                                </ErrorMessage>
                              )}
                            </Field>
                            <Field>
                              <Input
                                {...register("companyState", {
                                  required: "Enter your company state name",
                                  pattern: {
                                    value: /\S+(?:\s+\S+)*/g,
                                    message: "Remove the space from the field",
                                  },
                                })}
                                onKeyUp={() => {
                                  trigger("companyState");
                                }}
                                required
                                type="text"
                                placeholder="Enter your company state name"
                              />
                              {errors.companyState && (
                                <ErrorMessage>
                                  {errors.companyState.message}
                                </ErrorMessage>
                              )}
                            </Field>
                            <Field>
                              <Input
                                {...register("companyCountry", {
                                  required: "Enter your company country name",
                                  pattern: {
                                    value: /\S+(?:\s+\S+)*/g,
                                    message: "Remove the space from the field",
                                  },
                                })}
                                onKeyUp={() => {
                                  trigger("companyCountry");
                                }}
                                required
                                type="text"
                                placeholder="Enter your company country name"
                              />
                              {errors.companyCountry && (
                                <ErrorMessage>
                                  {errors.companyCountry.message}
                                </ErrorMessage>
                              )}
                            </Field>
                          </>
                        )}
                      </>
                    )}
                  </Field>
                  <FormBtn type="submit">Apply Now</FormBtn>
                </Form>
              )}
            </>
          )}
        </FormDiv>
      </Modal>
    </Backdrop>
  );
};

export default ApplyJobForm;
