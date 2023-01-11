import React from "react";
import "./SkeltonLoadingStyles.css";
const MentorCardSkelton = () => {
  return (
    <>
      <div className="mentorDiv">
        <div className="mentorDownDiv">
          <img className="mentorImage skeleton" src="" alt="" />
          <h3
            className="mentorName skeleton"
            style={{ width: "80%", margin: "5px auto" }}
          >
            <div className="skelton-text"></div>
          </h3>
          <div
            className="mentorDescP skeleton"
            style={{ width: "80%", margin: "0 auto 5px auto" }}
          >
            <div className="skelton-text"></div>
          </div>
          <div className="contentDiv">
            <div className="mentorSlotDiv">
              <ul>
                <li>
                  <p className="filterInMentorCard">
                    <div
                      className="mentorDescP skeleton"
                      style={{ width: "40%" }}
                    >
                      <div className="skelton-text"></div>
                    </div>
                    :
                    <div
                      className="mentorDescP skeleton"
                      style={{ width: "40%" }}
                    >
                      <div className="skelton-text"></div>
                    </div>
                  </p>
                </li>
                <li>
                  <p style={{ marginLeft: "30px", textAlign: "left" }}>
                    <div
                      className="mentorDescP skeleton"
                      style={{ width: "40%" }}
                    >
                      <div className="skelton-text"></div>
                    </div>
                  </p>
                  <div className="mentorCategoryDiv">
                    <div
                      className="mentorDescP skeleton"
                      style={{ width: "40%" }}
                    >
                      <div className="skelton-text"></div>
                    </div>
                    <div
                      className="mentorDescP skeleton"
                      style={{ width: "40%" }}
                    >
                      <div className="skelton-text"></div>
                    </div>
                    <div
                      className="mentorDescP skeleton"
                      style={{ width: "40%" }}
                    >
                      <div className="skelton-text"></div>
                    </div>
                    <div
                      className="mentorDescP skeleton"
                      style={{ width: "40%" }}
                    >
                      <div className="skelton-text"></div>
                    </div>
                  </div>
                </li>
              </ul>
              <div
                className="mentorDescP skeleton"
                style={{ width: "80%", margin: "10px auto" }}
              >
                <div className="skelton-text"></div>
              </div>
              <div
                className="mentorDescP skeleton"
                style={{ width: "69%", margin: "auto" }}
              >
                <div className="skelton-text"></div>
              </div>
            </div>
          </div>
          <div className="bookNowButtonDiv">
            <div
              className="mentorName skeleton"
              style={{ width: "50%", margin: "auto" }}
            >
              <div className="skelton-text"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorCardSkelton;
