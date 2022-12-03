import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../images/practiwiz-logo.png";
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
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const [type, setType] = useState("trainee");
  const [error, setError] = useState("");
  const [showIcon, setShowIcon] = useState(false);
  const navigate = useNavigate();
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
        navigate(`/`);
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
      <section className="top_panel transition2">
        <div className="logo wow fadeInDown">
          <a href="/">
            <img src={logo} alt="Practiwiz" title="Practiwiz" />
          </a>
        </div>
        <nav id="navHolder">
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
            <aside className="loginIntro">
              <h2 className="wow fadeInUp">
                Welcome To The Online<span>Learning Center</span>
              </h2>
            </aside>

            {/* <!--	<div className="loginIntro">
						<ul className="login-tab">
							<li><a href="">Trainee</a></li>
							<li><a href="">Trainer</a></li>
							<li><a href="">Mentor</a></li>
						</ul>
					</div>--> */}
            <form action="" onSubmit={handleSubmit(loginFormSubmitHandler)}>
              <aside className="loginBox wow fadeInRight">
                <div className="signIn transition3 ">
                  <h3>Sign in</h3>
                  {error ? <p className="res-errorlog">{error}</p> : null}
                  <ul className="login-tab">
                    <li
                      className={activeState.trainee === true && "active"}
                      onClick={() => {
                        setActiveState({ trainee: true });
                        setType("trainee");
                      }}
                    >
                      <a>Trainee</a>
                    </li>
                    <li
                      className={activeState.trainer === true && "active"}
                      onClick={() => {
                        setActiveState({ trainer: true });
                        setType("trainer");
                      }}
                    >
                      <a>Trainer</a>
                    </li>
                    <li
                      className={activeState.mentor === true && "active"}
                      onClick={() => {
                        setActiveState({ mentor: true });
                        setType("mentor");
                      }}
                    >
                      <a>Mentor</a>
                    </li>
                    <li
                      className={
                        activeState.jobSeeker === true ? "active" : " "
                      }
                      onClick={() => {
                        setActiveState({ jobSeeker: true });
                        setType("job-seeker");
                      }}
                    >
                      <a>Job-Seeker</a>
                    </li>
                    <li
                      className={activeState.recruiter === true && "active"}
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
                        <span className="errorMsg">
                          {errors.password.message}
                        </span>
                      )}
                    </li>
                  </ul>
                  <label className="submitBtn">
                    <span>Sign in</span>
                    <input type="submit" className="submit_btn" />
                  </label>

                  <span className="forgot_pass">
                    <Link to="/forgot-password">Forgot Password</Link>
                  </span>
                  {/* <span>Don't have an account</span> */}
                </div>
              </aside>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default LoginForm;
