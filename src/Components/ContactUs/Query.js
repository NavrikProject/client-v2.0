import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import styled from "styled-components";
import PhoneInput2 from "react-phone-input-2";

const ContributeSection = styled.section`
  width: 100%;
  height: auto;
`;
const ContributeWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 40px;
`;
const ContributeMainTitle = styled.h1`
  color: #1c3879;
  font-size: 37px;
  font-weight: 600;
`;

const ContactDiv = styled.div`
  padding: 30px 0;
`;
const ContactDivFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const ContactDivLeft = styled.div`
  width: 100%;
`;

const ContactDivRight = styled.div`
  width: 100%;
  margin-left: 20px;
  img {
    width: 100%;
    height: 420px;
    object-fit: cover;
  }
`;
const ErrorMessage = styled.p`
  color: red;
  margin: 0 0 10px 10px;
  font-size: 14px !important;
  font-weight: normal !important;
`;
const ContactInput = styled.input`
  width: 100%;
  padding: 10px;
  outline: none;
  font-size: 17px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  border-bottom-width: 2px;
  transition: all 0.4s ease;
  margin-bottom: 20px;
  &:focus {
    border-color: #fc83bb;
  }
`;
const FormSelect = styled.select`
  width: 100%;
  font-size: 16px;
  border-radius: 5px;
  padding: 10px;
  &:focus {
    border-color: #fc83bb;
  }
`;
const FormOption = styled.option``;

const TextArea = styled.textarea`
  margin-top: 15px;
  width: 100%;
  padding-bottom: 10px;
  border: 1px solid #111 !important;
  ::placeholder {
    font-size: 16px;
  }
`;
const SubmitButton = styled.button`
  margin: 0 auto;
  width: 100%;
  padding: 12px 20px;
  text-align: center;
  font-size: 17px;
  border: none;
  outline: none;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: lightgreen;
    transition: all 0.5s ease-in-out;
  }
`;
const Query = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const contactUsHandler = async (data) => {
    try {
      const result = await axios.post(
        "https://deploy-practiwiz.azurewebsites.net/api/feedback/contact-us",
        {
          fullname: data.fullname,
          email: data.email,
          query: data.query,
          text: data.text,
          value: phoneNumber,
        }
      );
      if (result.data.success) {
        return (
          toast.success(result.data.success, {
            position: "top-center",
          }),
          setSuccess(result.data.success),
          reset()
        );
      }
      if (result.data.error) {
        return (
          toast.error(result.data.error, {
            position: "top-center",
          }),
          setError(result.data.error),
          reset()
        );
      }
    } catch (error) {}
  };
  return (
    <ContributeSection>
      <ContributeWrapper id="form">
        <ContributeMainTitle>
          Contact Us <hr />
          <ContactDiv>
            {error && <p style={{ color: "red", fontSize: "20px" }}>{error}</p>}
            {success && (
              <p style={{ color: "green", fontSize: "20px" }}>{success}</p>
            )}
            <ContactDivFlex>
              <ContactDivLeft>
                <ContactInput
                  type="text"
                  placeholder="Enter your fullname"
                  {...register("fullname", {
                    required: "Fullname must be Required for registration",
                  })}
                />
                {errors.fullname && (
                  <ErrorMessage>{errors.fullname.message}</ErrorMessage>
                )}
                <ContactInput
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email must be Required for registration",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("email");
                  }}
                />
                {errors.email && (
                  <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}
                <PhoneInput2
                  className="form-check-input"
                  country="in"
                  inputStyle={{
                    width: "100%",
                    padding: "5px 10px",
                    marginTop: "10px",
                    borderBottom: "1px solid #111",
                  }}
                  onChange={(phone) => setPhoneNumber(phone)}
                />
                <FormSelect
                  {...register("query", {
                    required: "Choose the query",
                  })}
                >
                  <FormOption value="">Choose your option</FormOption>
                  <FormOption value="write blog post">
                    Write blog post
                  </FormOption>
                  <FormOption value="partner with us">
                    Partner with us
                  </FormOption>
                  <FormOption value="feedback">Feedback</FormOption>
                  <FormOption value="found a bug">Found a bug</FormOption>
                  <FormOption value="contact us">Contact us</FormOption>
                </FormSelect>
                {errors.query && (
                  <ErrorMessage>{errors.query.message}</ErrorMessage>
                )}
                <TextArea
                  {...register("text", {
                    required: "Describe in words",
                  })}
                  cols="20"
                  rows="10"
                  placeholder="Describe....."
                ></TextArea>
                {errors.text && (
                  <ErrorMessage>{errors.text.message}</ErrorMessage>
                )}
                <SubmitButton
                  type="submit"
                  onClick={handleSubmit(contactUsHandler)}
                >
                  Submit
                </SubmitButton>
              </ContactDivLeft>

              <ContactDivRight>
                <img
                  src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </ContactDivRight>
            </ContactDivFlex>
          </ContactDiv>
        </ContributeMainTitle>
      </ContributeWrapper>
    </ContributeSection>
  );
};

export default Query;
