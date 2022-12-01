import React from "react";
import { useLocation } from "react-router-dom";

const IndividualCourseDetails = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[3];
  console.log(path);
  return <div>IndividualCourseDetails {path} </div>;
};

export default IndividualCourseDetails;
