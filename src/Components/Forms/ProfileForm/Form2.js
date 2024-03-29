import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  CloseButton,
  ErrorMessage,
  Form,
  FormBtn,
  FormDiv,
  FormInput,
  PwdField,
} from "./FormProfileElements";
import { toast } from "react-toastify";

import axios from "axios";
import Loading from "../../utils/LoadingSpinner";
import { useForm } from "react-hook-form";
const Form2 = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user.currentUser);
  const token = user?.accessToken;

  const changePersonalDetails = async (data) => {
    try {
      setLoading(true);
      const result = await axios.put(
        `https://practiwiz-backend.azurewebsites.net/api/${user?.type}/profile/account/${user?.id}`,
        { firstName: data.firstName, lastName: data.lastName },
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      if (result.data.success) {
        setSuccess(result.data.success);
        toast.success("Successfully update your personal details", {
          position: "top-center",
        });
        setLoading(false);
        reset();
      }
      if (result.data.error) {
        setError(result.data.error);
        toast.error("There was a problem updating your personal details", {
          position: "top-center",
        });
        setLoading(false);
        reset();
      }
    } catch (error) {
      return;
    }
  };

  return (
    <>
      <FormDiv>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        {loading && <Loading />}
        <Form onSubmit={handleSubmit(changePersonalDetails)}>
          <PwdField>
            <FormInput
              type="text"
              placeholder="Enter your First Name"
              {...register("firstName", {
                required: "firstname is Required",
                minLength: {
                  value: 1,
                  message: "Must be  character at least",
                },
                pattern: {
                  value: /^\S*$/,
                  message: "Remove the space from the fields",
                },
              })}
              onKeyUp={() => {
                trigger("firstName");
              }}
            />
          </PwdField>
          {errors.firstName && (
            <ErrorMessage>{errors.firstName.message}</ErrorMessage>
          )}
          <PwdField>
            <FormInput
              type="text"
              placeholder="Enter your Last Name"
              {...register("lastName", {
                required: "last name is Required",
                minLength: {
                  value: 1,
                  message: "Must be 1 character at least",
                },
                pattern: {
                  value: /^\S*$/,
                  message: "Remove the space from the fields",
                },
              })}
              onKeyUp={() => {
                trigger("lastName");
              }}
            />
          </PwdField>
          {errors.lastName && (
            <ErrorMessage>{errors.lastName.message}</ErrorMessage>
          )}
          <FormBtn>Update</FormBtn>
        </Form>
      </FormDiv>
    </>
  );
};

export default Form2;
