import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Dashboard.css";
import { Table, Td, Th, Tr } from "./DashboardElements";

const UsersTable = () => {
  const user = useSelector((state) => state.user.currentUser);
  const token = user?.accessToken;
  const [allTrainers, setAllTrainers] = useState([]);
  const [approve, setApprove] = useState(true);

  useEffect(() => {
    const getCourseByTitles = async () => {
      const res = await axios.get(
        `https://deploy-practiwiz.azurewebsites.net/api/trainer/getAllTrainers`,
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      setAllTrainers(res.data);
    };
    getCourseByTitles();
  }, [token]);

  const trainerApproveHandler = async (trainer) => {
    const res = await axios.put(
      `https://deploy-practiwiz.azurewebsites.net/api/trainer/update/approve/${trainer.trainer_id}`,
      {
        headers: { authorization: "Bearer " + token },
      }
    );
    if (res.data.approved) {
      alert(res.data.approved);
      window.location.reload();
      setApprove(!approve);
    }
  };
  const trainerDisApproveHandler = async (trainer) => {
    const res = await axios.put(
      `https://deploy-practiwiz.azurewebsites.net/api/trainer/update/disapprove/${trainer.trainer_id}`,
      {
        headers: { authorization: "Bearer " + token },
      }
    );
    if (res.data.disapproved) {
      alert(res.data.disapproved);
      setApprove(!approve);
      window.location.reload();
    }
  };
  return (
    <div>
      <div className="tableDiv">
        <h1>Approve the trainers</h1>
        <div className="itmes">
          <div className="flex1">
            <div className="greenBox"></div>
            <p className="tag"> Application is Approved</p>
          </div>
          <div className="flex1">
            <div className="redBox"></div>
            <p className="tag"> Application is Declined</p>
          </div>
          <div className="flex1">
            <div className="blueBox"></div>
            <p className="tag"> Application need to be approved</p>
          </div>
          <div className="flex1">
            <div className="yellowBox"></div>
            <p className="tag"> Application will be disapproved</p>
          </div>
        </div>
        <Table>
          <Tr>
            <Th>Id</Th>
            <Th>Email</Th>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Mobile Number</Th>
            <Th>Experience</Th>
            <Th>Course Id</Th>
            <Th>Course Category</Th>
            <Th>Approve or Disapprove</Th>
            <Th>Status</Th>
          </Tr>
          {allTrainers?.map((trainer) => (
            <Tr key={trainer.trainer_id}>
              <Td>{trainer.trainer_id}</Td>
              <Td>{trainer.trainer_email}</Td>
              <Td>{trainer.trainer_firstname}</Td>
              <Td>{trainer.trainer_lastname}</Td>
              <Td>{trainer.trainer_mobile}</Td>
              <Td>{trainer.trainer_exp_yrs}</Td>
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
          ))}
        </Table>
      </div>
    </div>
  );
};

export default UsersTable;
