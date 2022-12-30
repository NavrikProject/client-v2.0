import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import logo from "../../../images/practiwiz-logo.png";
import {
  hideLoadingHandler,
  showLoadingHandler,
} from "../../../redux/loadingReducer";
import "./login-style.css";
import PhoneInput2 from "react-phone-input-2";
import { useEffect } from "react";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
    reset,
  } = useForm();
  const [error, setError] = useState("");
  const [showIcon, setShowIcon] = useState(false);
  const [success, setSuccess] = useState("");
  const password = watch("password");
  const [showIcons, setShowIcons] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const dispatch = useDispatch();
  const registerSubmitHandler = async (data) => {
    setError("");
    if (phoneNumber === " ") {
      setPhoneNumberError(true);
    }
    try {
      dispatch(showLoadingHandler());
      const res = await axios.post(
        "https://deploy-practiwiz.azurewebsites.net/api/auth/email-register",
        {
          data,
          phoneNumber,
        }
      );
      dispatch(hideLoadingHandler());
      if (res.data.required) {
        setError(res.data.required);
        toast.error(res.data.required, { position: "top-center" });
      }
      if (res.data.exists) {
        setError(res.data.exists);
        toast.error(res.data.exists, { position: "top-center" });
      }
      if (res.data.error) {
        setError(res.data.error);
        toast.error(res.data.error, { position: "top-center" });
      }
      if (res.data.success) {
        setSuccess(res.data.success);
        toast.success(res.data.success, { position: "top-center" });
        reset();
      }
    } catch (error) {
      return dispatch(hideLoadingHandler());
    }
  };

  return (
    <>
      <section className="top_panel transition2">
        <div className="logo wow fadeInDown">
          <a href="/">
            <img src={logo} alt="Practiwiz" title="Practiwiz" />
          </a>
        </div>
        <nav id="navHolder" className="navTop">
          <ul id="nav">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Sign Up</a>
            </li>
          </ul>
        </nav>
      </section>
      <div className="content_panel">
        <section className="bg loginSec1">
          <div className="loginSec1_cont">
            <aside className="top-part loginIntro">
              <h2 className="wow fadeInUp">
                Welcome To The Online<span>Learning Center</span>
              </h2>
            </aside>
            <form action="" onSubmit={handleSubmit(registerSubmitHandler)}>
              <aside className="nnr loginBox wow fadeInRight">
                <div className="signIn transition3">
                  <h3>Sign Up</h3>
                  {error ? <p className="res-errorlog">{error}</p> : null}
                  {success ? <p className="res-sucesslog">{success}</p> : null}
                  <ul className="signinForm2">
                    <li className="styled-input unIcon">
                      <input
                        required
                        type="email"
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
                      <label>Enter your email *</label>
                      {errors.email && (
                        <span className="errorMsg">{errors.email.message}</span>
                      )}
                    </li>
                    <li className="styled-input unIcon">
                      <input
                        required
                        type="text"
                        {...register("firstName", {
                          required: "firstname is Required",
                          minLength: {
                            value: 4,
                            message: "Must be 4 characters at least",
                          },
                        })}
                        onKeyUp={() => {
                          trigger("firstName");
                        }}
                      />
                      <label>Enter your First Name *</label>
                      {errors.firstName && (
                        <span className="errorMsg">
                          {errors.firstName.message}
                        </span>
                      )}
                    </li>
                    <li className="styled-input unIcon">
                      <input
                        required
                        type="text"
                        //onChange={(e) => setLastName(e.target.value)}
                        {...register("lastName", {
                          required: "last name is Required",
                          minLength: {
                            value: 4,
                            message: "Must be 4 characters at least",
                          },
                        })}
                        onKeyUp={() => {
                          trigger("lastName");
                        }}
                      />
                      <label>Enter your Last name *</label>
                      {errors.lastName && (
                        <span className="errorMsg">
                          {errors.lastName.message}
                        </span>
                      )}
                    </li>
                    <li className="styled-input unIcon">
                      <input
                        required
                        type={showIcon ? "text" : "password"}
                        {...register("password", {
                          required: "Password is Required",
                          pattern: {
                            value:
                              /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
                            message:
                              "A minimum 8 characters password contains a combination of uppercase and lowercase letter and number are required special characters like @ $ ! % * ? &",
                          },
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
                      <label>Enter your Password *</label>
                      {errors.password && (
                        <span className="errorMsg">
                          {errors.password.message}
                        </span>
                      )}
                    </li>
                    <li className="styled-input unIcon">
                      <input
                        required
                        type={showIcons ? "text" : "password"}
                        //onChange={(e) => setConfirmPassword(e.target.value)}
                        {...register("confirmPassword", {
                          required: "Enter confirm password",
                          validate: (value) =>
                            value === password || "Password must be matched",
                        })}
                        onKeyUp={() => {
                          trigger("confirmPassword");
                        }}
                      />
                      <i
                        onClick={() => setShowIcons(!showIcons)}
                        className={
                          showIcons
                            ? "fa-solid fa-eye passwordIcon"
                            : "fa-solid fa-eye-slash passwordIcon"
                        }
                      ></i>
                      <label>Confirm your Password *</label>
                      {errors.confirmPassword && (
                        <span className="errorMsg">
                          {errors.confirmPassword.message}
                        </span>
                      )}
                    </li>
                    <li className="styled-input unIcon">
                      <PhoneInput2
                        inputProps={{
                          required: true,
                        }}
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={(phone) => setPhoneNumber(phone)}
                        country="in"
                      />
                      <span
                        className="errorMsg"
                        style={{ display: phoneNumberError ? "block" : "none" }}
                      >
                        Incorrect Phone
                      </span>
                    </li>
                    <li className="checkbox styled-input passIcon">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="member"
                          value="member"
                          {...register("type", {
                            required: "User type  is Required",
                          })}
                        />
                        Member
                        <label
                          className="form-check-label"
                          htmlFor="radio1"
                        ></label>
                      </div>
                      {/* <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="trainer"
                          value="trainer"
                          {...register("type", {
                            required: "User type  is Required",
                          })}
                        />
                        Trainer
                        <label
                          className="form-check-label"
                          htmlFor="radio2"
                        ></label>
                      </div> */}
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="job-seeker"
                          value="job-seeker"
                          {...register("type", {
                            required: "User type  is Required",
                          })}
                        />
                        Job-Seeker
                        <label className="form-check-label"></label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="recruiter"
                          value="recruiter"
                          {...register("type", {
                            required: "User type  is Required",
                          })}
                        />
                        Recruiter
                        <label className="form-check-label"></label>
                      </div>
                      <div className="clr"></div>
                      {errors.type && (
                        <span className="errorMsg checkboxBorder">
                          {errors.type.message}
                        </span>
                      )}
                    </li>
                    <li>
                      <div className="checkbox-new form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          {...register("checkBox", {
                            required: "Must be checked before submission",
                          })}
                        />
                        <label className="text-terms form-check-label">
                          I have read all
                          <a href="/terms-conditions"> terms & conditions.</a>
                        </label>
                      </div>
                      {errors.checkBox && (
                        <span className="errorMsg checkboxBorder">
                          {errors.checkBox.message}
                        </span>
                      )}
                    </li>
                  </ul>
                  <label className="new2 submitBtn">
                    <span>Register Now</span>
                    <input type="submit" className="submit_btn" />
                  </label>
                </div>
              </aside>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default RegisterForm;
