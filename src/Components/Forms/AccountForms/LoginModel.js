import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  loginFailure,
  loginSuccess,
  loginStart,
} from "../../../redux/userRedux";
import {
  showLoadingHandler,
  hideLoadingHandler,
} from "../../../redux/loadingReducer";
import "./login-style.css";

const LoginModel = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const [type, setType] = useState("trainee");
  const [error, setError] = useState("");
  const [showIcon, setShowIcon] = useState(false);
  const dispatch = useDispatch();
  const [activeState, setActiveState] = useState({
    trainee: true, //
    recruiter: false,
    jobSeeker: false,
    mentor: false,
    trainer: false,
  });
  // login function handler
  const loginFormSubmitHandler = async (data) => {
    setError("");
    dispatch(showLoadingHandler());
    try {
      dispatch(loginStart());
      const res = await axios.post(
        "https://deploy-practiwiz.azurewebsites.net/api/auth/login",
        {
          data: data,
          type: type,
        }
      );
      dispatch(hideLoadingHandler());
      if (res.data.success) {
        dispatch(loginSuccess(res.data.success));
        props.showLoginModelHandler();
      }

      if (res.data.notFound) {
        dispatch(loginFailure(res.data.notFound));
        setError(res.data.notFound);
        // navigate(`/login`);      ;
      }
      if (res.data.wrong) {
        dispatch(loginFailure(res.data.wrong));
        setError(res.data.wrong);
        // navigate(`/login`);
      }
    } catch (error) {
      return;
    }
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit(loginFormSubmitHandler)}>
        <div className="signIn transition3 ">
          <h3>Sign in</h3>
          {error ? <p className="res-errorlog">{error}</p> : null}
          <ul className="login-tab">
            <li
              className={
                activeState.trainee ? "listCenter active" : "listCenter"
              }
              onClick={() => {
                setActiveState({ trainee: true });
                setType("trainee");
              }}
            >
              <a>Trainee</a>
            </li>
            <li
              className={
                activeState.trainer ? "listCenter active" : "listCenter"
              }
              onClick={() => {
                setActiveState({ trainer: true });
                setType("trainer");
              }}
            >
              <a>Trainer</a>
            </li>
            <li
              className={
                activeState.mentor ? "listCenter active" : "listCenter"
              }
              onClick={() => {
                setActiveState({ mentor: true });
                setType("mentor");
              }}
            >
              <a>Mentor</a>
            </li>
            <li
              className={
                activeState.jobSeeker ? "listCenter active" : "listCenter"
              }
              onClick={() => {
                setActiveState({ jobSeeker: true });
                setType("job-seeker");
              }}
            >
              <a>Job-Seeker</a>
            </li>
            <li
              className={
                activeState.recruiter ? "listCenter active" : "listCenter"
              }
              onClick={() => {
                setActiveState({ recruiter: true });
                setType("recruiter");
              }}
            >
              <a>Recruiter</a>
            </li>
          </ul>
          <ul className="signinForm">
            <li className="styled-input unIcon">
              <input
                type="text"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Enter an email to login",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              <label>Email *</label>
              {errors.email && (
                <span className="errorMsg">{errors.email.message}</span>
              )}
            </li>
            <li className="styled-input passIcon">
              <input
                type={showIcon ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password", {
                  required: "Enter a Password to login",
                })}
                onKeyUp={() => {
                  trigger("password");
                }}
              />
              <i
                onClick={() => setShowIcon(!showIcon)}
                className={
                  showIcon
                    ? "fa-solid fa-eye passwordIcon"
                    : "fa-solid fa-eye-slash passwordIcon"
                }
              ></i>
              <label>Password *</label>
              {errors.password && (
                <span className="errorMsg">{errors.password.message}</span>
              )}
            </li>
            <li className="styled-input passIcon">
              <input
                className="modelSignButton"
                type="submit"
                value="Sign In"
              />
            </li>
            <span className="forgot_pass">
              <Link to="/forgot-password">Forgot Password</Link>
            </span>
          </ul>
          {/* <span>Don't have an account</span> */}
        </div>
      </form>
    </>
  );
};

export default LoginModel;
