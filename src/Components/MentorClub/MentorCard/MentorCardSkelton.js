import React from "react";
import "./SkeltonLoadingStyles.css";
const MentorCardSkelton = () => {
  return (
    <>
      <div className="mentorDiv">
        <div className="mentorUpDiv"></div>
        <div className="mentorDownDiv">
          <div className="mentorImageDiv">
            <img className="mentorImage skeleton" src="" alt="" />
          </div>
          <div className="mentorCourseBox">
            <div className="mentorBoxDiv">
              <div className="mentorDetailsDiv">
                <h3 className="mentorName skeleton">
                  <div className="skelton-text"></div>
                </h3>
                <div className="mentorDescP skeleton">
                  <div className="skelton-text"></div>
                </div>
                <div className="mentorDescP skeleton">
                  <div className="skelton-text"></div>
                </div>
              </div>
            </div>

            <div className="mentorDetailsDiv">
              <div className="mentorDesc skeleton">
                <div className="skelton-text"></div>
              </div>
              <div className="mentorDesc skeleton">
                <div className="skelton-text"></div>
              </div>
              <div className="mentorDesc skeleton">
                <div className="skelton-text"></div>
              </div>
              <div className="mentorDesc skeleton">
                <div className="skelton-text"></div>
              </div>
            </div>
            <div className="mentorDetailsDiv">
              <div className="mentorDesc skeleton">
                <div className="skelton-text"></div>
              </div>
              <div className="mentorDesc skeleton width">
                <div className="skelton-text "></div>
              </div>
            </div>
            <div className="bookNowButtonDiv skeleton ">
              <div className="skelton-text "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorCardSkelton;
