import React, { useState } from "react";
import axios from "axios";
import {
  Form,
  FormBtn,
  FormDiv,
  FormLabel,
  Field,
  Input,
  TextArea,
  ErrorMessage,
  FormOption,
  FormSelect,
  FieldFlexDiv,
} from "./FormElements";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Select from "react-select";
import "react-phone-input-2/lib/style.css";
import { useForm } from "react-hook-form";
import {
  jobRoles,
  salaryRanges,
  skillOptions,
} from "../Data/JobApplicationData";
const PostJobForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  const [selectedOption, setSelectedOption] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const user = useSelector((state) => state.user.currentUser);
  const [jobDescription, setJobDescription] = useState([]);
  const userEmail = user?.email;
  const JobPostHandler = async (newData) => {
    setError(" ");
    if (selectedOption === null || !selectedOption) {
      return (
        setError("select the skills"),
        toast.error("Choose the skills", { position: "top-center" })
      );
    }
    try {
      const res = await axios.post(
        `https://deploy-practiwiz.azurewebsites.net/api/recruiter/create-job-post/${userEmail}`,
        { newData, selectedOption, jobDescription }
      );
      if (res.data.success) {
        setSuccess(res.data.success);
        toast.success(res.data.success, { position: "top-center" });
        reset();
        selectedOption(" ");
      }
      if (res.data.error) {
        setError(res.data.error);
        toast.error(res.data.error, { position: "top-center" });
      }
    } catch (error) {
      return;
    }
  };
  const bullet = "\u2022";
  const bulletWithSpace = `${bullet} `;
  const handleInput = (event) => {
    const { keyCode, target } = event;
    const { selectionStart, value } = target;

    if (keyCode === 13) {
      target.value = [...value]
        .map((c, i) => (i === selectionStart - 1 ? `\n${bulletWithSpace}` : c))
        .join("");

      target.selectionStart = selectionStart + bulletWithSpace.length;
      target.selectionEnd = selectionStart + bulletWithSpace.length;
    }
    if (value[0] !== bullet) {
      target.value = `${bulletWithSpace}${value}`;
    }
    setJobDescription(value);
  };
  return (
    <FormDiv>
      {error && (
        <p style={{ color: "red", fontSize: "20px", textAlign: "center" }}>
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
      <Form onSubmit={handleSubmit(JobPostHandler)}>
        <Field>
          <FormLabel>Job Heading:</FormLabel>
          <Input
            required
            placeholder="Give heading like Looking for RPA developer"
            type="text"
            name="heading"
            {...register("heading", {
              required: "Give heading like Looking for RPA developer",
              pattern: {
                value: /\S+(?:\s+\S+)*/g,
                message: "Remove the space from the field",
              },
            })}
            onKeyUp={() => {
              trigger("heading");
            }}
          />
          {errors.heading && (
            <ErrorMessage>{errors.heading.message}</ErrorMessage>
          )}
        </Field>
        <FieldFlexDiv>
          <Field>
            <FormLabel>Job Category:</FormLabel>
            <FormSelect
              required
              name="category"
              {...register("category", {
                required: "Choose the job category",
              })}
            >
              <FormOption value="">Choose job category</FormOption>
              <FormOption value="technology">Technology</FormOption>
              <FormOption value="domain">Domain</FormOption>
              <FormOption value="business-skills">Business skills</FormOption>
            </FormSelect>
            {errors.category && (
              <ErrorMessage>{errors.category.message}</ErrorMessage>
            )}
          </Field>
          <Field>
            <FormLabel>Job Role:</FormLabel>
            <Input
              required
              placeholder="Enter the job role"
              type="text"
              name="role"
              {...register("role", {
                required: "Enter the job role like full stack web developer",
                pattern: {
                  value: /\S+(?:\s+\S+)*/g,
                  message: "Remove the space from the field",
                },
              })}
              onKeyUp={() => {
                trigger("role");
              }}
            />
            {errors.role && <ErrorMessage>{errors.role.message}</ErrorMessage>}
          </Field>
        </FieldFlexDiv>
        <FieldFlexDiv>
          <Field>
            <FormLabel>Required skills :</FormLabel>
            <Select
              required
              isMulti={true}
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={skillOptions}
            />
          </Field>
          <Field>
            <FormLabel>Number of positions:</FormLabel>
            <Input
              required
              placeholder="Enter the number of positions"
              type="number"
              name="positions"
              {...register("positions", {
                required: "enter the number of positions",
                pattern: {
                  value: /\S+(?:\s+\S+)*/g,
                  message: "Remove the space from the field",
                },
              })}
            />
            {errors.positions && (
              <ErrorMessage>{errors.positions.message}</ErrorMessage>
            )}
          </Field>
        </FieldFlexDiv>
        <FieldFlexDiv>
          <Field>
            <FormLabel>Qualification:</FormLabel>
            <FormSelect
              required
              name="qualification"
              {...register("qualification", {
                required: "Choose the required qualification for the job",
                pattern: {
                  value: /\S+(?:\s+\S+)*/g,
                  message: "Remove the space from the field",
                },
              })}
            >
              <FormOption value="">Choose job qualification</FormOption>
              <FormOption value="under graduation">Under Graduation</FormOption>
              <FormOption value="graduation">Graduation</FormOption>
              <FormOption value="post graduation">Post Graduation</FormOption>
            </FormSelect>
            {errors.qualification && (
              <ErrorMessage>{errors.qualification.message}</ErrorMessage>
            )}
          </Field>
          <Field>
            <FormLabel>Min Experience:</FormLabel>
            <FormSelect
              required
              name="experience"
              {...register("experience", {
                required: "select the min exper",
              })}
            >
              <FormOption value="">Choose the age</FormOption>
              <FormOption value="0-3">0-3 Years</FormOption>
              <FormOption value="0-5">0-5</FormOption>
              <FormOption value="3-5">3-5</FormOption>
              <FormOption value="5-8">5-8</FormOption>
              <FormOption value="8-10">8-10</FormOption>
            </FormSelect>
            {errors.experience && (
              <ErrorMessage>{errors.experience.message}</ErrorMessage>
            )}
          </Field>
        </FieldFlexDiv>
        <FieldFlexDiv>
          <Field>
            <FormLabel>Expected salary start from:</FormLabel>
            <FormSelect
              required
              name="salaryStarts"
              {...register("salaryStarts", {
                required: "Choose salary starting range",
              })}
            >
              <FormOption value="">Choose salary starts range</FormOption>
              {salaryRanges?.map((salary) => (
                <FormOption value={salary.value}>{salary.label}</FormOption>
              ))}
            </FormSelect>
            {errors.salaryStarts && (
              <ErrorMessage>{errors.salaryStarts.message}</ErrorMessage>
            )}
          </Field>
          <Field>
            <FormLabel>Range :</FormLabel>
            <FormSelect
              required
              name="salaryTo"
              {...register("salaryTo", {
                required: "Choose the salary range",
              })}
            >
              <FormOption value="">Choose salary to range</FormOption>
              {salaryRanges?.map((salary) => (
                <FormOption value={salary.value}>{salary.label}</FormOption>
              ))}
            </FormSelect>
            {errors.salaryTo && (
              <ErrorMessage>{errors.salaryTo.message}</ErrorMessage>
            )}
          </Field>
        </FieldFlexDiv>
        <FieldFlexDiv>
          <Field>
            <FormLabel>Preferred work type</FormLabel>
            <FormSelect
              required
              name="workType"
              {...register("workType", {
                required: "Choose preferred work type",
              })}
            >
              <FormOption value="">Choose the</FormOption>
              <FormOption value="permanent wfh">
                Permanent Work from Home
              </FormOption>
              <FormOption value="hybrid">Hybrid</FormOption>
              <FormOption value="wfh/hybrid/office">
                WFH/Hybrid/Office
              </FormOption>
              <FormOption value="hybrid/wfh">Hybrid/WFH</FormOption>
            </FormSelect>
            {errors.workType && (
              <ErrorMessage>{errors.workType.message}</ErrorMessage>
            )}
          </Field>
          <Field>
            <FormLabel>Employment Type</FormLabel>
            <FormSelect
              required
              name="jobType"
              {...register("jobType", {
                required: "Choose the employment type",
              })}
            >
              <FormOption value="">Choose job type</FormOption>
              <FormOption value="full time">Full Time</FormOption>
              <FormOption value="part time">Part Time</FormOption>
              <FormOption value="out sourcing">Out Sourcing</FormOption>
              <FormOption value="temporary">Temporary</FormOption>
            </FormSelect>
            {errors.jobType && (
              <ErrorMessage>{errors.jobType.message}</ErrorMessage>
            )}
          </Field>
        </FieldFlexDiv>
        <Field>
          <FormLabel>Job Description</FormLabel>
          <TextArea
            required
            onKeyUp={(event) => handleInput(event)}
            placeholder="Write in bullet points, When you press enter it will line starts with the bullet point"
            rows="10"
          ></TextArea>
        </Field>
        <Field>
          <FormLabel>Tags:</FormLabel>
          <TextArea
            required
            placeholder="Enter the tags related to this field"
            {...register("tags", {
              required: "Enter the tags for this job",
              pattern: {
                value: /\S+(?:\s+\S+)*/g,
                message: "Remove the space from the field",
              },
            })}
            onKeyUp={() => {
              trigger("tags");
            }}
          ></TextArea>
          {errors.tags && <ErrorMessage>{errors.tags.message}</ErrorMessage>}
        </Field>
        <FormBtn>Post A Job</FormBtn>
      </Form>
    </FormDiv>
  );
};

export default PostJobForm;
