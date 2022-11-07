import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { traineeCourseStatusDetails } from "../Data/FeedbackQuestion";
import Model from "../Modal/Model";
import { ModifyButton } from "./AdminPanelElements";
import ModifyTraineeProgress from "./ModifyTraineeProgress";
import styled from "styled-components";
const Input = styled.input`
  width: 50%;
  padding: 10px 20px;
  outline: none;
  font-size: 17px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  border-bottom-width: 2px;
  transition: all 0.4s ease;
  margin-bottom: 20px;
  &:focus {
    border-color: #fc83bb;
  }
`;
const ViewAllTraineeProgress = () => {
  const [allTraineeProgress, setAllTraineeProgress] = useState([]);
  const [showProgressEditModel, setShowProgressEditModel] = useState(false);
  const [traineeDetails, setTraineeDetails] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const getAllTraineeProgress = async () => {
      const res = await axios.get(
        `https://deploy-practiwiz.azurewebsites.net/api/trainee/courses/get-all-trainee-courses`,
        {
          headers: { authorization: "Bearer " + user?.accessToken },
        }
      );
      if (res.data.success) {
        setAllTraineeProgress(res.data.success);
      } else {
        setAllTraineeProgress([]);
      }
    };
    getAllTraineeProgress();
  }, [user?.accessToken]);
  const modifyTraineeProgressHandler = (trainee) => {
    setShowProgressEditModel(!showProgressEditModel);
    setTraineeDetails(trainee);
  };

  return (
    <div>
      {showProgressEditModel && (
        <Model>
          <ModifyTraineeProgress
            traineeDetails={traineeDetails}
            modifyTraineeProgressHandler={modifyTraineeProgressHandler}
          />
        </Model>
      )}
      <form action="">
        <Input
          placeholder="Search by Course Name or Instructor Name or Email....."
          type="text"
          onChange={(event) => setSearchItem(event.target.value)}
        />
      </form>
      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Trainee email</th>
            <th>Course Name</th>
            <th>Trainer Name</th>
            <th>Progress %</th>
            <th>Chapter Completed</th>
            <th>Progress Status</th>
            <th>Course status</th>
            <th>Video Upload</th>
            <th>Course Started date</th>
            <th>Modify Progress</th>
          </tr>
          {/* {  allTraineeProgress ?.filter( (traineeFilter) =>
         return searchItem.toLowerCase() === " " ? traineeFilter: traineeFilter.trainee_course_email.toLowerCase().includes(searchItem.toLowerCase)) .map((trainee) =>{" "}
          <p>{trainee.trainee_course_email}</p>); }; */}
          {allTraineeProgress
            ?.filter((traineeFilter) =>
              searchItem === " "
                ? traineeFilter
                : traineeFilter.trainee_course_email
                    .toLowerCase()
                    .includes(searchItem.toLowerCase()) ||
                  traineeFilter.trainee_course_name
                    .toLowerCase()
                    .includes(searchItem.toLowerCase()) ||
                  traineeFilter.trainee_course_instructor_name
                    .toLowerCase()
                    .includes(searchItem.toLowerCase())
            )
            .map((trainee) => (
              <tr key={trainee.trainee_course_dtls_id}>
                <td>{trainee.trainee_course_dtls_id}</td>
                <td>{trainee.trainee_course_email}</td>
                <td>{trainee.trainee_course_name}</td>
                <td>{trainee.trainee_course_instructor_name}</td>
                <td>{trainee.trainee_course_progress_percentage}%</td>
                <td>{trainee.trainee_course_chapter_completed}</td>
                <td>{trainee.trainee_course_progress_status}</td>
                <td>
                  {traineeCourseStatusDetails.map(
                    (status) =>
                      status.statusId === trainee.trainee_course_status && (
                        <p>{status.status}</p>
                      )
                  )}
                </td>
                <td>{trainee.trainee_course_video_upload_status}</td>
                <td>
                  {new Date(trainee.trainee_course_start_date).toDateString()}
                </td>
                <td>
                  {trainee.trainee_course_progress_percentage === 100 &&
                  trainee.trainee_course_progress_status === "completed" &&
                  trainee.trainee_course_video_upload_status === "uploaded" &&
                  trainee.trainee_course_video_upload_email === "yes" &&
                  trainee.trainee_course_mentor_session_email === "yes" &&
                  trainee.trainee_course_reward_points_status === "yes" ? (
                    <ModifyButton disabled={true}>
                      Can not be modified
                    </ModifyButton>
                  ) : (
                    <ModifyButton
                      onClick={() => modifyTraineeProgressHandler(trainee)}
                    >
                      Modify Progress
                    </ModifyButton>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAllTraineeProgress;