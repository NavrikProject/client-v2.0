import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../utils/LoadingSpinner";
import { Table, Tbody, Td, Th, Tr } from "./DashboardElements";

const AllMentors = () => {
  const user = useSelector((state) => state.user.currentUser);
  const token = user?.accessToken;
  const [allMentors, setAllMentors] = useState([]);
  const [approve, setApprove] = useState(true);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getAllTheMentors = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://deploy-practiwiz.azurewebsites.net/api/mentor/get`,
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      if (res.data.mentors) {
        setLoading(false);
        setAllMentors(res.data.mentors);
      } else {
        setLoading(false);
      }
    };
    getAllTheMentors();
  }, [token]);

  const mentorApproveHandler = async (mentor) => {
    setLoading(true);
    const res = await axios.put(
      `https://deploy-practiwiz.azurewebsites.net/api/mentor/approve/${mentor.mentor_dtls_id}`,
      { id: mentor.mentor_dtls_id },
      {
        headers: { authorization: "Bearer " + token },
      }
    );
    if (res.data.success) {
      alert(res.data.success);
      window.location.reload();
      setApprove(!approve);
      setLoading(false);
    }
  };
  const mentorDisApproveHandler = async (mentor) => {
    setLoading(true);
    const res = await axios.put(
      `https://deploy-practiwiz.azurewebsites.net/api/mentor/disapprove/${mentor.mentor_dtls_id}`,
      { id: mentor.mentor_dtls_id },
      {
        headers: { authorization: "Bearer " + token },
      }
    );
    if (res.data.success) {
      alert(res.data.success);
      setApprove(!approve);
      window.location.reload();
      setLoading(false);
    }
  };

  return (
    <div className="rightbarSect">
      <div className="tableDiv">
        <h1>Approve the Mentors</h1>
        {loading && <LoadingSpinner />}
        <Table>
          <Tbody>
            <Tr>
              <Th>Id</Th>
              <Th>Email</Th>
              <Th>Full Name</Th>
              <Th>Availability</Th>
              <Th>Experience</Th>
              <Th>Skills</Th>
              <Th>Speciality</Th>
              <Th>Session Conducted</Th>
              <Th>Approve or Not</Th>
              <Th>Mentor Status</Th>
            </Tr>
          </Tbody>
          {allMentors?.length > 0
            ? allMentors?.map((mentor) => (
                <Tbody>
                  <Tr key={mentor.mentor_dtls_id}>
                    <Td>{mentor.mentor_dtls_id}</Td>
                    <Td>{mentor.mentor_email}</Td>
                    <Td>
                      {mentor.mentor_firstname}
                      {mentor.mentor_lastname}
                    </Td>
                    <Td>{mentor.mentor_availability}</Td>
                    <Td>{mentor.mentor_experience}</Td>
                    <Td>{mentor.mentor_skills}</Td>
                    <Td>{mentor.mentor_speciality}</Td>
                    <Td>{mentor.mentor_sessions_conducted}</Td>
                    <Td>
                      {mentor.mentor_approved === "Yes" ? (
                        <button
                          className="disapprove"
                          onClick={() => mentorDisApproveHandler(mentor)}
                        >
                          {approve ? " Disapprove" : "Approve"}
                        </button>
                      ) : (
                        <button
                          onClick={() => mentorApproveHandler(mentor)}
                          className="approve"
                        >
                          {approve ? " Approve" : "Disapprove"}
                        </button>
                      )}
                    </Td>
                    <Td>
                      {mentor.mentor_approved === "Yes" ? (
                        <button className="approved">Approved</button>
                      ) : (
                        <button className="disapproved">Not Approved</button>
                      )}
                    </Td>
                  </Tr>
                </Tbody>
              ))
            : "Noo mentor found"}
        </Table>
      </div>
    </div>
  );
};

export default AllMentors;
