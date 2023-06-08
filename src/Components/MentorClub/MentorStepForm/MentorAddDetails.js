import React from "react";
import {
  ErrorMessage,
  Field,
  FormOption,
  FormSelect,
  Input,
  TextArea,
} from "./MentorRegisterStepELements";
import PhoneInput2 from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { countriesWithCodes } from "../../Data/FaqData";
import { useState } from "react";
import { PhoneNumberUtil } from "google-libphonenumber";
const phoneUtil = PhoneNumberUtil.getInstance();

const MentorAddDetails = ({
  formData,
  setFormData,
  setImage,
  errorData,
  setErrorData,
  setPhoneNumber,
}) => {
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const verifyMobileNumber = (event) => {
    if (!countryCode) {
      return (
        setPhoneNumberError("Select the country first"),
        setFormData({ ...formData, validPhoneNumber: false })
      );
    }
    const number = countryCode + event.target.value;
    if (number.length < 6 || number.length > 13) {
      return (
        setPhoneNumberError("Must be a valid phone number"),
        setFormData({ ...formData, validPhoneNumber: false })
      );
    }
    const parsePhoneNumber = phoneUtil.parseAndKeepRawInput(number);
    // Check if the number is valid
    if (phoneUtil.isValidNumber(parsePhoneNumber) === true) {
      return (
        setPhoneNumberError(" "),
        setFormData({ ...formData, validPhoneNumber: true }),
        setPhoneNumber(number)
      );
    } else {
      // Not a valid number
      return (
        setPhoneNumberError("Must be a valid phone number"),
        setFormData({ ...formData, validPhoneNumber: false })
      );
    }
  };
  return (
    <>
      <Field>
        <TextArea
          onFocus={() => setErrorData({ ...errorData, bio: "" })}
          value={formData.bio}
          onChange={(event) =>
            setFormData({ ...formData, bio: event.target.value })
          }
          placeholder="Describe about yourself in brief words"
          required
        ></TextArea>
        <ErrorMessage>{errorData.bio}</ErrorMessage>
      </Field>
      <Field>
        <FormSelect
          onFocus={() => setErrorData({ ...errorData, countryCode: "" })}
          required
          name=""
          id=""
          onChange={(event) => {
            return (
              setCountryCode(event.target.value),
              setFormData({ ...formData, countryCode: event.target.value })
            );
          }}
        >
          <>
            <FormOption value="">Choose the country code</FormOption>
            {countriesWithCodes.map((country, index) => (
              <FormOption value={country.mobileCode}>
                {country.name + " "}({country.code + " " + country.mobileCode})
              </FormOption>
            ))}
          </>
        </FormSelect>
        <ErrorMessage>{errorData?.countryCode}</ErrorMessage>
      </Field>
      <Field>
        <Input
          required
          type="number"
          placeholder="Enter your mobile number"
          onChange={verifyMobileNumber}
        />
        {phoneNumberError && <ErrorMessage>{phoneNumberError}</ErrorMessage>}
      </Field>
      <Field>
        <Input
          onFocus={() => setErrorData({ ...errorData, website: "" })}
          required
          value={formData.website}
          type="text"
          placeholder="Your website address"
          onChange={(event) =>
            setFormData({ ...formData, website: event.target.value })
          }
        />
        <ErrorMessage>{errorData.website}</ErrorMessage>
      </Field>
      <Field>
        <Input
          onFocus={() => setErrorData({ ...errorData, linkedInProfile: "" })}
          required
          value={formData.linkedInProfile}
          type="text"
          placeholder="Your linkedin address"
          onChange={(event) =>
            setFormData({ ...formData, linkedInProfile: event.target.value })
          }
        />
        <ErrorMessage>{errorData.linkedInProfile}</ErrorMessage>
      </Field>
      <Field>
        Choose the Profile Picture
        <Input
          onFocus={() => setErrorData({ ...errorData, linkedInProfile: "" })}
          required
          type="file"
          name="image"
          placeholder="Choose the profile picture"
          onChange={(event) => setImage(event.target.files[0])}
        />
        <ErrorMessage>{errorData.image}</ErrorMessage>
      </Field>
    </>
  );
};

export default MentorAddDetails;
