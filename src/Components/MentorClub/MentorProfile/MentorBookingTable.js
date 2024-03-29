import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  hideLoadingHandler,
  showLoadingHandler,
} from "../../../redux/loadingReducer";
import "./MentorBooking.css";
const TraineeBookingTable = () => {
  const user = useSelector((state) => state.user.currentUser);
  const token = user?.accessToken;
  const [allMentors, setAllMentors] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const getAllTheMentors = async () => {
      dispatch(showLoadingHandler());
      const res = await axios.post(
        `https://practiwiz-backend.azurewebsites.net/api/mentor/bookings/get/all-bookings`,
        {
          headers: { authorization: "Bearer " + token },
          mentorEmail: user?.email,
        }
      );
      if (res.data) {
        dispatch(hideLoadingHandler());
        setAllMentors(res.data);
      } else {
        dispatch(hideLoadingHandler());
      }
    };
    getAllTheMentors();
  }, [token, user]);
  const cancelMentorAppointMent = async (mentor) => {};
  const confirmTheAppointMent = async (mentor) => {
    dispatch(showLoadingHandler());
    const res = await axios.put(
      `https://practiwiz-backend.azurewebsites.net/api/mentor/bookings/update/confirm/appointment/${mentor.id}`,
      {
        headers: { authorization: "Bearer " + token },
      }
    );
    if (res.data.success) {
      toast.success(res.data.success, {
        position: "top-center",
      });
      dispatch(hideLoadingHandler());
    }
    if (res.data.error) {
      toast.error(res.data.error, {
        position: "top-center",
      });
      dispatch(hideLoadingHandler());
    }
  };
  return (
    <div className="rightbarSect">
      <div className="tableDiv">
        <h1>Modify booking dates</h1>
        {/* {showModel && (
          <TraineeModifyBooking
            mentor={mentor}
            modifyMentorAppointMent={modifyMentorAppointMent}
          />
        )} */}
        <table>
          <tbody>
            <tr>
              <th>Id</th>
              <th>My Email</th>
              <th>Trainee Email</th>
              <th>Booked On</th>
              <th>Booking Date</th>
              <th>Session Time</th>
              <th>Confirm the Session</th>
              <th>Start Meeting</th>
              <th>Cancel</th>
            </tr>
          </tbody>
          {allMentors?.length > 0 ? (
            allMentors?.map((mentor) => (
              <tbody>
                <tr key={mentor.id}>
                  <td>{mentor.id}</td>
                  <td>{mentor.mentorEmail}</td>
                  <td>{mentor.userEmail}</td>
                  <td>{new Date(mentor.bookedOn).toLocaleDateString()}</td>
                  <td>{new Date(mentor.bookingDate).toLocaleDateString()}</td>
                  <td>{mentor.time}</td>
                  <td>
                    {mentor.confirmed === "Yes" ? (
                      <button className="approved">
                        Confirmed the session
                      </button>
                    ) : (
                      <button
                        onClick={() => confirmTheAppointMent(mentor)}
                        className="approve"
                      >
                        Confirm the session
                      </button>
                    )}
                  </td>
                  <td>
                    {mentor.amountStatus === "Refunded" ? (
                      <button className="disapprove">
                        Can not join after the refund
                      </button>
                    ) : (
                      <button className="startButton">
                        <a href={mentor.startUrl}>Start Meeting</a>
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => cancelMentorAppointMent(mentor)}
                      className="disapproved"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              </tbody>
            ))
          ) : (
            <h1>No appointments found</h1>
          )}
        </table>
      </div>
    </div>
  );
};

export default TraineeBookingTable;
