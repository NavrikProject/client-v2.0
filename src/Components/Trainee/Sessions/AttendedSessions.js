import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AttendedAllSessionDetails from "./AttendedAllSessionDetails";
import LoadingSpinner from "../../utils/LoadingSpinner";
import { Link } from "react-router-dom";
const Div = styled.div``;
const AttendedTitle = styled.h1`
  color: #111;
  opacity: 0.7;
  padding-bottom: 10px;
`;
const AttendedDiv = styled.div`
  margin: 5px 0;
  padding: 20px;
  box-shadow: rgb(142 151 158 / 15%) 0px 4px 19px;
  height: auto;
`;
const AttendedUl = styled.ol`
  @media screen and (max-width: 780px) {
    padding: 0;
  }
`;
const AttendedList = styled.li``;
const AttendedDivFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  @media screen and (max-width: 780px) {
    display: block;
    padding: 0;
  }
`;
const AttendedDivRight = styled.div``;
const AttendedDivContent = styled.p`
  font-size: 18px;
  color: #111;
  opacity: 0.9;
  span {
    font-weight: 600;
  }
`;
const AttendedDivLeft = styled.div`
  @media screen and (max-width: 780px) {
    margin-top: 20px;
  }
`;
const AttendedDivButtons = styled.button`
  margin: 0 auto;
  padding: 12px 20px;
  text-align: center;
  font-size: 17px;
  border: none;
  outline: none;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  background-color: #1363df !important;
  color: #fff !important;
  border-radius: 5px;
  &:hover {
    transition: all 0.5s ease-in-out;
  }
  @media screen and (max-width: 780px) {
    font-size: 15px;
  }
`;
const SessionDetailsDiv = styled.div`
  padding: 30px;
  @media screen and (max-width: 780px) {
    padding: 10px 0;
  }
`;
const AttendedSessions = () => {
  const [loading, setLoading] = useState(false);
  const [attendedSessions, setAttendedSessions] = useState([]);
  const [selected, setSelected] = useState(null);

  const user = useSelector((state) => state.user.currentUser);
  const token = user?.accessToken;

  useEffect(() => {
    const getAllAttendedSessions = async () => {
      setLoading(true);
      const res = await axios.post(
        `https://practiwiz-backend.azurewebsites.net/api/trainee/profile/booking/get/bookings/attended`,
        {
          headers: { authorization: "Bearer " + token },
          userEmail: user?.email,
        }
      );
      if (res.data.details) {
        setLoading(false);
        setAttendedSessions(res.data.details);
      } else {
        return setLoading(false);
      }
    };
    getAllAttendedSessions();
  }, [token, user]);

  const toggleShowDetails = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };
  return (
    <Div>
      {loading && <LoadingSpinner />}
      <AttendedTitle>Your Attended Sessions</AttendedTitle>
      <AttendedUl>
        {attendedSessions?.length > 0 ? (
          attendedSessions?.map((attendedSession) => (
            <AttendedDiv key={attendedSession.bookingId}>
              <AttendedList>
                <AttendedDivFlex>
                  <AttendedDivRight>
                    <AttendedDivContent>
                      A session on
                      <span>
                        {" " +
                          new Date(attendedSession.bookingDate).toDateString() +
                          " "}
                      </span>
                      and Time is
                      <span>{" " + attendedSession.time}</span>
                    </AttendedDivContent>
                  </AttendedDivRight>
                  <AttendedDivLeft>
                    <AttendedDivButtons
                      onClick={() =>
                        toggleShowDetails(attendedSession.bookingId)
                      }
                    >
                      Click here to view all session details
                    </AttendedDivButtons>
                  </AttendedDivLeft>
                </AttendedDivFlex>
                {selected === attendedSession.bookingId ? (
                  <SessionDetailsDiv>
                    <AttendedAllSessionDetails mentor={attendedSession} />
                  </SessionDetailsDiv>
                ) : null}
              </AttendedList>
            </AttendedDiv>
          ))
        ) : (
          <AttendedDiv>
            <AttendedDivFlex>
              <AttendedDivRight>
                <AttendedDivContent>
                  <span>
                    You have not attended any sessions, Book right now!
                  </span>
                </AttendedDivContent>
              </AttendedDivRight>
              <AttendedDivLeft>
                <AttendedDivButtons>
                  <Link to={"/mentors-club"} style={{ color: "white" }}>
                    Find Mentors
                  </Link>
                </AttendedDivButtons>
              </AttendedDivLeft>
            </AttendedDivFlex>
          </AttendedDiv>
        )}
      </AttendedUl>
    </Div>
  );
};

export default AttendedSessions;
