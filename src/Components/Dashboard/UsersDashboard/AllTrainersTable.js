import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../utils/LoadingSpinner";
import { Table, Td, Th, Tr } from "./DashboardElements";

const UsersTable = () => {
  const user = useSelector((state) => state.user.currentUser);
  const token = user?.accessToken;
  const [allTrainers, setAllTrainers] = useState([]);
  const [approve, setApprove] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCourseByTitles = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://deploy-practiwiz.azurewebsites.net/api/trainer/getAllTrainers`,
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      if (res.data) {
        setAllTrainers(res.data);
        setLoading(false);
      }
    };
    getCourseByTitles();
  }, [token]);

  const trainerApproveHandler = async (trainer) => {
    setLoading(true);
    const res = await axios.put(
      `https://deploy-practiwiz.azurewebsites.net/api/trainer/update/approve`,
      { id: trainer.trainer_details_id },
      {
        headers: { authorization: "Bearer " + token },
      }
    );
    if (res.data.approved) {
      alert("This will make trainer will be approved");
      setApprove(!approve);
      window.location.reload();
      setLoading(false);
    }
  };
  const trainerDisApproveHandler = async (trainer) => {
    setLoading(true);
    const res = await axios.put(
      `https://deploy-practiwiz.azurewebsites.net/api/trainer/update/disapprove`,
      { id: trainer.trainer_details_id },
      {
        headers: { authorization: "Bearer " + token },
      }
    );
    if (res.data.disapproved) {
      setLoading(false);
      alert("This will make trainer has been disapproved");
      setApprove(!approve);
      window.location.reload();
    }
  };
  return (
    <>
      <>
        <h1>Approve the trainers</h1>
        {loading && <LoadingSpinner />}

        <Table>
          <Tr>
            <Th>Id</Th>
            <Th>Email</Th>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Mobile Number</Th>
            <Th>Experience</Th>
            <Th>Pref Time</Th>
            <Th>Eng Type</Th>
            <Th>No of Hours Daily</Th>
            <Th>Course Id</Th>
            <Th>Course Category</Th>
            <Th>Approve or Disapprove</Th>
            <Th>Status</Th>
          </Tr>
          {allTrainers.length > 0
            ? allTrainers?.map((trainer) => (
                <Tr key={trainer.trainer_details_id}>
                  <Td>{trainer.trainer_details_id}</Td>
                  <Td>{trainer.trainer_email}</Td>
                  <Td>{trainer.trainer_firstname}</Td>
                  <Td>{trainer.trainer_lastname}</Td>
                  <Td>{trainer.trainer_mobile}</Td>
                  <Td>{trainer.trainer_exp_yrs}</Td>
                  <Td>{trainer.trainer_pref_time}</Td>
                  <Td>{trainer.trainer_engment_typ}</Td>
                  <Td>{trainer.trainer_no_of_hrs_daily} Hours</Td>
                  <Td>{trainer.trainer_course_id}</Td>
                  <Td>{trainer.trainer_course_cat_id}</Td>
                  <Td>
                    {trainer.trainer_approve === "yes" ? (
                      <button
                        className="disapprove"
                        onClick={() => trainerDisApproveHandler(trainer)}
                      >
                        {approve ? " Disapprove" : "Approve"}
                      </button>
                    ) : (
                      <button
                        onClick={() => trainerApproveHandler(trainer)}
                        className="approve"
                      >
                        {approve ? " Approve" : "Disapprove"}
                      </button>
                    )}
                  </Td>
                  <Td>
                    {trainer.trainer_approve === "yes" ? (
                      <button className="approved">Approved</button>
                    ) : (
                      <button className="disapproved">Disapproved</button>
                    )}
                  </Td>
                </Tr>
              ))
            : "NOO trainer found"}
        </Table>
      </>
    </>
  );
};

export default UsersTable;
