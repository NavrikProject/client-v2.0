import React from "react";
import "./SkeltonLoading.css";

const JobCardSkelton = () => {
  return (
    <div>
      <div>
        <article className="latest wow fadeInDown " data-wow-duration="0.4s">
          <div className="job-list-left skeleton">
            <img className="skelton-image" src="" alt="" />
          </div>
          <div className="job-list-center">
            <p>
              <div className="skeleton">
                <div className="skelton-text"></div>
              </div>
              <div className="skeleton width">
                <div className="skelton-text"></div>
              </div>
            </p>
            <div className="skeleton">
              <div className="skelton-text"></div>
            </div>
            <ul>
              <div className="skeleton">
                <div className="skelton-text"></div>
              </div>
              <div className="skeleton width">
                <div className="skelton-text"></div>
              </div>
            </ul>
          </div>
          <div className="job-list-right">
            <div className="skeleton">
              <div className="skelton-text"></div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default JobCardSkelton;
