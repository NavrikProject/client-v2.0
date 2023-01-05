import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Form,
  FormBtn,
  FormDiv,
  FormLabel,
  SingleProfileSection,
  SingleProfileWrapper,
  Field,
  Input,
  TextArea,
  ErrorMessage,
  WarnText,
  ImgBox,
  UserTitle,
  SocialButton,
  Img,
  DetailsFlex,
  DetailsFlex1,
  DetailsTitles,
  DetailsFromDb,
  FormOption,
  FormSelect,
} from "./FormElements";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { useForm } from "react-hook-form";
import { PhoneNumberUtil } from "google-libphonenumber";
import { countriesWithCodes } from "../Data/FaqData";
const phoneUtil = PhoneNumberUtil.getInstance();
const AddFirmDetailsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [hiringCompanyDetails, setHiringCompanyDetails] = useState([]);
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const user = useSelector((state) => state.user.currentUser);
  const userEmail = user?.email;
  const addFirmDetailsSubmitHandler = async (newData) => {
    setError(" ");
    setSuccess(" ");
    if (!validPhoneNumber) {
      return setPhoneNumberError("Mobile number must be valid");
    }
    let data = new FormData();
    data.append("image", image);
    data.append("mobile", phoneNumber);
    data.append("email", newData.email);
    data.append("city", newData.city);
    data.append("contactPerson", newData.contactPerson);
    data.append("pincode", newData.pincode);
    data.append("state", newData.state);
    data.append("website", newData.website);
    data.append("country", newData.country);
    data.append("firmName", newData.firmName);
    data.append("address", newData.address);
    data.append("companyDescription", newData.companyDescription);
    data.append("userEmail", userEmail);
    try {
      const res = await axios.post(
        `https://deploy-practiwiz.azurewebsites.net/api/recruiter/add-company-details`,
        data
      );
      if (res.data.success) {
        setSuccess(res.data.success);
        toast.success(res.data.success, { position: "top-center" });
        reset();
      }
      if (res.data.error) {
        setError(res.data.error);
        toast.error(res.data.error, { position: "top-center" });
      }
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    const getAllFirmDetails = async () => {
      const res = await axios.get(
        `https://deploy-practiwiz.azurewebsites.net/api/recruiter/get-company-details/${userEmail}`
      );
      if (res.data.found) {
        setHiringCompanyDetails(res.data.found);
      }
      if (res.data.error) {
        setHiringCompanyDetails([]);
      }
    };
    getAllFirmDetails();
  }, [userEmail]);
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
    <SingleProfileSection>
      <SingleProfileWrapper>
        {hiringCompanyDetails?.length > 0 ? (
          hiringCompanyDetails?.map((company) => (
            <div key={company.trainee_id}>
              <>
                <div>
                  <UserTitle>{user.firstname + " " + user.lastname}</UserTitle>
                  <p>
                    <b>Role : </b> {user.type} <br />
                  </p>
                  <br />
                  <ImgBox>
                    <SocialButton>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href={company.hiring_company_website}
                      >
                        website
                      </a>
                    </SocialButton>
                    <Img src={company.hiring_company_image} />
                    Firm logo
                  </ImgBox>
                </div>
              </>
              <DetailsFlex>
                <DetailsFlex1>
                  <DetailsTitles>Your Email : </DetailsTitles>
                  <DetailsFromDb>{company.hiring_user_email}</DetailsFromDb>
                </DetailsFlex1>
                <DetailsFlex1>
                  <DetailsTitles>Office Email : </DetailsTitles>
                  <DetailsFromDb>{company.hiring_company_email}</DetailsFromDb>
                </DetailsFlex1>
                <DetailsFlex1>
                  <DetailsTitles>Your Mobile : </DetailsTitles>
                  <DetailsFromDb>{company.hiring_company_mobile}</DetailsFromDb>
                </DetailsFlex1>
                <DetailsFlex1>
                  <DetailsTitles>Address : </DetailsTitles>
                  <DetailsFromDb>
                    {company.hiring_company_address}
                  </DetailsFromDb>
                </DetailsFlex1>
                <DetailsFlex1 className="mediaMobile">
                  <DetailsTitles>About the company : </DetailsTitles>
                  <DetailsFromDb>{company.hiring_company_about}</DetailsFromDb>
                </DetailsFlex1>
              </DetailsFlex>
            </div>
          ))
        ) : (
          <FormDiv>
            {error && (
              <p
                style={{ color: "red", fontSize: "20px", textAlign: "center" }}
              >
                {error}
              </p>
            )}
            {success && (
              <p
                style={{
                  color: "green",
                  fontSize: "20px",
                  textAlign: "center",
                }}
              >
                {success}
              </p>
            )}
            <WarnText>Please fill before applying for the job post</WarnText>
            <Form onSubmit={handleSubmit(addFirmDetailsSubmitHandler)}>
              <Field>
                <FormLabel>Email:</FormLabel>
                <Input
                  required
                  placeholder="Enter the firm email address"
                  type="email"
                  name="date"
                  {...register("email", {
                    required: "enter the firm email address",
                  })}
                />
              </Field>
              {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
              <Field>
                <FormLabel>Firm Name:</FormLabel>
                <Input
                  required
                  placeholder="Enter the firm name"
                  type="text"
                  name="firmName"
                  {...register("firmName", {
                    required: "enter the firm name",
                  })}
                />
              </Field>
              {errors.firmName && (
                <ErrorMessage>{errors.firmName.message}</ErrorMessage>
              )}
              <Field>
                <FormLabel>Address:</FormLabel>
                <TextArea
                  required
                  {...register("address", {
                    required: "Please add the address",
                  })}
                ></TextArea>
                {errors.address && (
                  <ErrorMessage>{errors.address.message}</ErrorMessage>
                )}
              </Field>
              <Field>
                <FormLabel>City Name:</FormLabel>
                <Input
                  required
                  placeholder="Enter the city name"
                  type="text"
                  name="city"
                  {...register("city", {
                    required: "enter the city name",
                  })}
                />
              </Field>
              {errors.city && (
                <ErrorMessage>{errors.city.message}</ErrorMessage>
              )}
              <Field>
                <FormLabel>State Name:</FormLabel>
                <Input
                  required
                  placeholder="Enter the state name"
                  type="text"
                  name="state"
                  {...register("state", {
                    required: "enter the state name",
                  })}
                />
              </Field>
              {errors.state && (
                <ErrorMessage>{errors.state.message}</ErrorMessage>
              )}
              <Field>
                <FormLabel>Country Name:</FormLabel>
                <Input
                  required
                  placeholder="Enter the country name"
                  type="text"
                  name="country"
                  {...register("country", {
                    required: "enter the country name",
                  })}
                />
              </Field>
              {errors.country && (
                <ErrorMessage>{errors.country.message}</ErrorMessage>
              )}
              <Field>
                <FormLabel>Pincode:</FormLabel>
                <Input
                  required
                  placeholder="Enter the pin code"
                  type="number"
                  name="pincode"
                  {...register("pincode", {
                    required: "enter the pincode ",
                  })}
                />
              </Field>
              {errors.pincode && (
                <ErrorMessage>{errors.pincode.message}</ErrorMessage>
              )}
              <Field>
                <FormLabel>Contact Person:</FormLabel>
                <Input
                  required
                  placeholder="Enter the contact person"
                  type="text"
                  name="contactPerson"
                  {...register("contactPerson", {
                    required: "enter the contact person",
                  })}
                />
              </Field>
              {errors.contactPerson && (
                <ErrorMessage>{errors.contactPerson.message}</ErrorMessage>
              )}
              <Field>
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
                    <FormOption value="">Choose the country code</FormOption>
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
                <FormLabel>Enter your mobile number:</FormLabel>
                <Input
                  required
                  type="number"
                  placeholder="Enter your mobile number"
                  onChange={verifyMobileNumber}
                />
                {phoneNumberError && (
                  <ErrorMessage>{phoneNumberError}</ErrorMessage>
                )}
              </Field>
              <Field>
                <FormLabel>Website:</FormLabel>
                <Input
                  required
                  placeholder="Enter the firm website"
                  type="text"
                  name="website"
                  {...register("website", {
                    required: "enter the contact person",
                  })}
                />
              </Field>
              {errors.website && (
                <ErrorMessage>{errors.website.message}</ErrorMessage>
              )}
              <Field>
                <FormLabel>About company:</FormLabel>
                <TextArea
                  required
                  {...register("companyDescription", {
                    required: "Please write the company",
                    minLength: {
                      value: 200,
                      message: "Must be 200 characters at least",
                    },
                    maxLength: {
                      value: 500,
                      message: "Must be less than 500 characters",
                    },
                  })}
                ></TextArea>
                {errors.companyDescription && (
                  <ErrorMessage>
                    {errors.companyDescription.message}
                  </ErrorMessage>
                )}
              </Field>
              <Field>
                <FormLabel>Firm Logo:</FormLabel>
                <Input
                  required
                  accept="image/png, image/jpg, image/jpeg"
                  type="file"
                  name="image"
                  placeholder="Choose the profile picture"
                  onChange={(event) => setImage(event.target.files[0])}
                />
              </Field>
              <FormBtn type="submit">Add Details</FormBtn>
            </Form>
          </FormDiv>
        )}
      </SingleProfileWrapper>
    </SingleProfileSection>
  );
};

export default AddFirmDetailsForm;
