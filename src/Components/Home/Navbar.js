import React, { useState } from "react";
import LoginIcon from "../../images/login-icon.png";
import userIcon from "../../images/user-icon.png";
import logo from "../../images/practiwiz-logo.png";
import hoverImage from "../../images/mamu-img1.jpg";
import hoverImage1 from "../../images/business analyst.jpg";
import aboutMenuImg from "../../images/6671.jpg";
import contactMenuImg from "../../images/contact-menu.jpg";

import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/userRedux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showContactMenu, setShowContactMenu] = useState(false);
  const [aboutMenu, setAboutMenu] = useState(false);
  const [addBackGroundBackdrop, setAddBackGroundBackdrop] = useState("none");
  const [showMenuBarItems, setShowMenuBarItems] = useState(false);
  const [showItTrainingMenu, setShowItTrainingMenu] = useState(false);
  const [showBtTrainingMenu, setShowBtTrainingMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogoutHandler = async () => {
    dispatch(logOut());
    navigate("/login");
  };
  return (
    <>
      <header className="fixed">
        <div
          className="top-bar"
          onMouseEnter={() => {
            return (
              setShowItTrainingMenu(false),
              setShowBtTrainingMenu(false),
              setShowContactMenu(false),
              setAboutMenu(false),
              setShowProfileMenu(false),
              setAddBackGroundBackdrop("none")
            );
          }}
        >
          <div className="center">
            <div className="top-left">
              <a>+91 9830259960</a>
              <a>|</a>
              <a href="mailto:wecare@practiwiz.com">wecare@practiwiz.com</a>
            </div>
            <div className="top-right">
              {/* <a
                target="_blank"
                rel="noreferrer"
                href="https://www.navriksoftware.com/"
              >
                Navrik software solutions
              </a>
              <a>|</a> */}
              {/* <a href="link">Store</a>
              <a>|</a>
              <a href="link">Chill Zone</a>
              <a>|</a> */}
              {!user ? (
                <>
                  {" "}
                  <a href="/mentor/apply-for-mentor">Join as Mentor</a>
                  <a>|</a>
                  <a href="/login">
                    <img src={LoginIcon} alt="link" /> Login
                  </a>
                  <a>|</a>
                  <a href="/register">
                    <img src={userIcon} alt="link" /> Register
                  </a>
                </>
              ) : (
                <a onClick={onLogoutHandler}>
                  <img src={LoginIcon} alt="link" /> Logout
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="center">
          <div className="headSec2">
            <a
              href="/"
              className="logo"
              onMouseEnter={() => {
                return (
                  setShowItTrainingMenu(false),
                  setShowBtTrainingMenu(false),
                  setShowContactMenu(false),
                  setAboutMenu(false),
                  setShowProfileMenu(false),
                  setAddBackGroundBackdrop("none")
                );
              }}
            >
              <img src={logo} title="Practiwiz" alt="Practiwiz" />
            </a>
            <span
              className={
                showMenuBarItems ? "mobNavTriger mtClose" : "mobNavTriger"
              }
              onClick={() => {
                return (
                  setShowMenuBarItems(!showMenuBarItems),
                  setAddBackGroundBackdrop("none")
                );
              }}
            ></span>
            <aside className="headSec2_right">
              <nav
                className={showMenuBarItems ? "navHolder active" : "navHolder"}
              >
                <ul className="nav">
                  <li className="hasMegamenu dropdown_mob">
                    <a
                      onClick={() => {
                        return (
                          setShowItTrainingMenu(!showItTrainingMenu),
                          setShowBtTrainingMenu(false),
                          setShowContactMenu(false),
                          setAboutMenu(false),
                          setShowProfileMenu(false),
                          setAddBackGroundBackdrop("block")
                        );
                      }}
                      onMouseEnter={() => {
                        return (
                          setShowItTrainingMenu(true),
                          setShowBtTrainingMenu(false),
                          setShowContactMenu(false),
                          setAboutMenu(false),
                          setShowProfileMenu(false),
                          setAddBackGroundBackdrop("block")
                        );
                      }}
                    >
                      IT Training
                    </a>
                    <div
                      onMouseLeave={() => {
                        return (
                          setShowItTrainingMenu(false),
                          setShowBtTrainingMenu(false),
                          setShowContactMenu(false),
                          setAboutMenu(false),
                          setShowProfileMenu(false),
                          setAddBackGroundBackdrop("none")
                        );
                      }}
                      className={
                        showItTrainingMenu === true
                          ? "submenuHolder megamenu active"
                          : "submenuHolder megamenu"
                      }
                      style={{ display: showItTrainingMenu ? "block" : "none" }}
                    >
                      {showItTrainingMenu === true && (
                        <>
                          <aside>
                            <ul>
                              {/* <li>
                                <a href="/course/jumpstart-to-rpa-live-bot-development">
                                  RPA Basics
                                </a>
                              </li> */}
                              <li>
                                <a href="/course/jumpstart-to-rpa-live-bot-development">
                                  Jumpstart to RPA live bot development
                                </a>
                              </li>
                              {/* <li>
                                <a href="/course/jumpstart-to-ai-ml-in-rpa">
                                  Jumpstart to AI and ML in RPA
                                </a>
                              </li>
                              <li>
                                <a href="link">Introduction to Python</a>
                              </li> */}
                            </ul>
                          </aside>
                          <aside>
                            <ul>
                              {/* <li>
                                <a href="/course/jumpstart-to-rpa-live-bot-development">
                                  RPA Foundation course
                                </a>
                              </li>
                              <li>
                                <a href="/course/jumpstart-to-rpa-live-bot-development">
                                  Advance Topics in RPA
                                </a>
                              </li> */}
                              <li>
                                <a href="/courses">All Courses </a>
                              </li>
                            </ul>
                          </aside>
                          <figure>
                            <img src={hoverImage} alt=";" />
                          </figure>
                        </>
                      )}
                    </div>
                  </li>
                  <li className="hasMegamenu dropdown_mob">
                    <a
                      onClick={() => {
                        return (
                          setShowItTrainingMenu(false),
                          setShowBtTrainingMenu(!showBtTrainingMenu),
                          setShowContactMenu(false),
                          setAboutMenu(false),
                          setShowProfileMenu(false),
                          setAddBackGroundBackdrop("block")
                        );
                      }}
                      onMouseEnter={() => {
                        return (
                          setShowItTrainingMenu(false),
                          setShowBtTrainingMenu(true),
                          setShowContactMenu(false),
                          setAboutMenu(false),
                          setShowProfileMenu(false),
                          setAddBackGroundBackdrop("block")
                        );
                      }}
                    >
                      Business Training
                    </a>
                    <div
                      onMouseLeave={() => {
                        return (
                          setShowItTrainingMenu(false),
                          setShowBtTrainingMenu(false),
                          setShowContactMenu(false),
                          setAboutMenu(false),
                          setAddBackGroundBackdrop("none")
                        );
                      }}
                      className={
                        showBtTrainingMenu === true
                          ? "submenuHolder megamenu active"
                          : "submenuHolder megamenu"
                      }
                      style={{ display: showBtTrainingMenu ? "block" : "none" }}
                    >
                      {showBtTrainingMenu === true && (
                        <>
                          <aside>
                            <ul>
                              {/* <li>
                                <a href="/course/business-analysis-foundation-training">
                                  Business Analysis Foundation Training
                                </a>
                              </li> */}
                              <li>
                                <a href="/course/jumpstart-to-it-business-analyst">
                                  Jumpstart to IT Business Analyst
                                </a>
                              </li>
                              {/* <li>
                                <a href="link">
                                  Cloud Essentials Learning Plan
                                </a>
                              </li>
                              <li>
                                <a href="link">Developer Learning Plan</a>
                              </li> */}
                            </ul>
                          </aside>
                          <aside>
                            <ul>
                              {/* <li>
                                <a href="asdga">Networking Learning Plan</a>
                              </li>
                              <li>
                                <a href="asdga">Data Analytics Learning Plan</a>
                              </li> */}
                              <li>
                                <a href="/courses">All Courses </a>
                              </li>
                            </ul>
                          </aside>
                          <figure>
                            <img src={hoverImage1} alt=";" />
                          </figure>
                        </>
                      )}
                    </div>
                  </li>
                  <li
                    onMouseEnter={() => {
                      return (
                        setShowItTrainingMenu(false),
                        setShowBtTrainingMenu(false),
                        setShowContactMenu(false),
                        setAboutMenu(false),
                        setShowProfileMenu(false),
                        setAddBackGroundBackdrop("none")
                      );
                    }}
                    className="hasMegamenu"
                  >
                    <a href="/methodology">Methodology</a>
                  </li>
                  <li
                    onMouseEnter={() => {
                      return (
                        setShowItTrainingMenu(false),
                        setShowBtTrainingMenu(false),
                        setShowContactMenu(false),
                        setAboutMenu(false),
                        setShowProfileMenu(false),
                        setAddBackGroundBackdrop("none")
                      );
                    }}
                    className="hasMegamenu"
                  >
                    <a href="/mentors-club">Mentor Club</a>
                  </li>
                  <li
                    onMouseEnter={() => {
                      return (
                        setShowItTrainingMenu(false),
                        setShowBtTrainingMenu(false),
                        setShowContactMenu(false),
                        setAboutMenu(false),
                        setShowProfileMenu(false),
                        setAddBackGroundBackdrop("none")
                      );
                    }}
                    className="hasMegamenu"
                  >
                    <a href="/jobs">Jobs</a>
                  </li>
                  <li className="hasMegamenu dropdown_mob">
                    <a
                      onClick={() => {
                        return (
                          setShowItTrainingMenu(false),
                          setShowBtTrainingMenu(false),
                          setShowContactMenu(false),
                          setAboutMenu(!aboutMenu),
                          setShowProfileMenu(false),
                          setAddBackGroundBackdrop("block")
                        );
                      }}
                      onMouseEnter={() => {
                        return (
                          setShowItTrainingMenu(false),
                          setShowBtTrainingMenu(false),
                          setShowContactMenu(false),
                          setAboutMenu(true),
                          setShowProfileMenu(false),
                          setAddBackGroundBackdrop("block")
                        );
                      }}
                    >
                      About Us
                    </a>
                    <div
                      onMouseLeave={() => {
                        return (
                          setShowItTrainingMenu(false),
                          setShowBtTrainingMenu(false),
                          setShowContactMenu(false),
                          setAboutMenu(false),
                          setShowProfileMenu(false),
                          setAddBackGroundBackdrop("none")
                        );
                      }}
                      className={
                        aboutMenu === true
                          ? "submenuHolder megamenu active"
                          : "submenuHolder megamenu"
                      }
                      style={{ display: aboutMenu ? "block" : "none" }}
                    >
                      {aboutMenu === true && (
                        <>
                          <aside>
                            <ul>
                              <li>
                                <a href="/about-us">Overview</a>
                              </li>
                              {/* <li>
                                <a href="asdga">Vision Mission Values</a>
                              </li>
                              <li>
                                <a href="asdga">Milestones</a>
                              </li> */}
                            </ul>
                          </aside>
                          <aside>
                            <ul>
                              {/* <li>
                                <a href="link">Leadership</a>
                              </li>
                              <li>
                                <a href="asdga">CMS Message</a>
                              </li>
                              <li>
                                <a href="link">Social Initiatives</a>
                              </li> */}
                            </ul>
                          </aside>
                          <figure>
                            <img src={aboutMenuImg} alt=";" />
                          </figure>
                        </>
                      )}
                    </div>
                  </li>
                  <li className="hasMegamenu dropdown_mob">
                    <a
                      onMouseEnter={() => {
                        return (
                          setShowItTrainingMenu(false),
                          setShowBtTrainingMenu(false),
                          setShowContactMenu(true),
                          setAboutMenu(false),
                          setShowProfileMenu(false),
                          setAddBackGroundBackdrop("block")
                        );
                      }}
                      onClick={() => {
                        return (
                          setShowItTrainingMenu(false),
                          setShowBtTrainingMenu(false),
                          setShowContactMenu(!showContactMenu),
                          setAboutMenu(false),
                          setShowProfileMenu(false),
                          setAddBackGroundBackdrop("block")
                        );
                      }}
                    >
                      Contact Us
                    </a>
                    <div
                      onMouseLeave={() => {
                        return (
                          setShowItTrainingMenu(false),
                          setShowBtTrainingMenu(false),
                          setShowContactMenu(false),
                          setAboutMenu(false),
                          setShowProfileMenu(false),
                          setAddBackGroundBackdrop("none")
                        );
                      }}
                      className={
                        showContactMenu === true
                          ? "submenuHolder megamenu active"
                          : "submenuHolder megamenu"
                      }
                      style={{ display: showContactMenu ? "block" : "none" }}
                    >
                      {showContactMenu === true && (
                        <>
                          <aside>
                            <ul>
                              <li>
                                <a href="/address-location">
                                  Address/ Location
                                </a>
                              </li>
                            </ul>
                          </aside>
                          <aside>
                            <ul>
                              <li>
                                <a href="/query">Query</a>
                              </li>
                            </ul>
                          </aside>
                          <figure>
                            <img src={contactMenuImg} alt=";" />
                          </figure>
                        </>
                      )}
                    </div>
                  </li>
                  {user && (
                    <li className="hasMegamenu dropdown_mob">
                      <a
                        onMouseEnter={() => {
                          return (
                            setShowItTrainingMenu(false),
                            setShowBtTrainingMenu(false),
                            setShowContactMenu(false),
                            setAboutMenu(false),
                            setShowProfileMenu(true),
                            setAddBackGroundBackdrop("block")
                          );
                        }}
                        onClick={() => {
                          return (
                            setShowItTrainingMenu(false),
                            setShowBtTrainingMenu(false),
                            setShowContactMenu(false),
                            setAboutMenu(false),
                            setShowProfileMenu(!showProfileMenu),
                            setAddBackGroundBackdrop("block")
                          );
                        }}
                      >
                        <i className="fa-solid fa-user"></i>
                      </a>
                      <div
                        onMouseLeave={() => {
                          return (
                            setShowItTrainingMenu(false),
                            setShowBtTrainingMenu(false),
                            setShowContactMenu(false),
                            setAboutMenu(false),
                            setShowProfileMenu(false),
                            setAddBackGroundBackdrop("none")
                          );
                        }}
                        className={
                          showProfileMenu === true
                            ? "submenuHolder megamenu active"
                            : "submenuHolder megamenu"
                        }
                        style={{
                          display: showProfileMenu ? "block" : "none",
                          width: showProfileMenu ? "30%" : null,
                        }}
                      >
                        {showProfileMenu === true && (
                          <>
                            <aside
                              style={{ width: showProfileMenu ? "100%" : 0 }}
                            >
                              <ul>
                                <li>
                                  <a href={`/${user?.type}/profile`}>Profile</a>
                                </li>

                                {user?.role === 1 && (
                                  <>
                                    <li>
                                      <a href={`/user/admin/jobs`}>
                                        Jobs Admin
                                      </a>
                                    </li>
                                    <li>
                                      <a href={`/user/admin/users`}>
                                        Users Admin
                                      </a>
                                    </li>{" "}
                                    <li>
                                      <a href={`/user/admin/courses`}>
                                        Course Admin
                                      </a>
                                    </li>
                                  </>
                                )}
                                <li>
                                  <a onClick={onLogoutHandler}>Logout</a>
                                </li>
                              </ul>
                            </aside>
                          </>
                        )}
                      </div>
                    </li>
                  )}
                  {showMenuBarItems && !user && (
                    <>
                      <li
                        onMouseEnter={() => {
                          return (
                            setShowItTrainingMenu(false),
                            setShowBtTrainingMenu(false),
                            setShowContactMenu(false),
                            setAboutMenu(false),
                            setShowProfileMenu(false),
                            setAddBackGroundBackdrop("none")
                          );
                        }}
                        className="hasMegamenu"
                      >
                        <a href="/Login">Login</a>
                      </li>
                      <li
                        onMouseEnter={() => {
                          return (
                            setShowItTrainingMenu(false),
                            setShowBtTrainingMenu(false),
                            setShowContactMenu(false),
                            setAboutMenu(false),
                            setShowProfileMenu(false),
                            setAddBackGroundBackdrop("none")
                          );
                        }}
                        className="hasMegamenu"
                      >
                        <a href="/register">Register</a>
                      </li>
                    </>
                  )}
                </ul>
              </nav>
            </aside>
          </div>
        </div>
      </header>
      <div
        onMouseEnter={() => {
          return (
            setShowItTrainingMenu(false),
            setShowBtTrainingMenu(false),
            setShowContactMenu(false),
            setAboutMenu(false),
            setShowProfileMenu(false),
            setAddBackGroundBackdrop("none")
          );
        }}
        className="submenu_bg"
        style={{ display: addBackGroundBackdrop }}
      ></div>
    </>
  );
};

export default Navbar;
