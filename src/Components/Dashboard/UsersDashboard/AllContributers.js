import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../utils/LoadingSpinner";
import { Table, Tbody, Td, Th, Tr } from "./DashboardElements";

const AllContributers = () => {
  const user = useSelector((state) => state.user.currentUser);
  const token = user?.accessToken;
  const [allContributers, setAllContributers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [approve, setApprove] = useState(true);

  useEffect(() => {
    const getAllTheCourse = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://deploy-practiwiz.azurewebsites.net/api/contributers/get-all`,
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      if (res.data) {
        setAllContributers(res.data);
        setLoading(false);
      } else {
        setLoading(false);
        setAllContributers();
      }
      setLoading(false);
    };
    getAllTheCourse();
  }, [token]);

  const contributerApproveHandler = async (contributer) => {
    setLoading(true);
    const res = await axios.put(
      `https://deploy-practiwiz.azurewebsites.net/api/contributers/approve/${contributer.contributer_details_id}`,
      { id: contributer.contributer_details_id },
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
  const contributerDisApproveHandler = async (contributer) => {
    setLoading(true);
    const res = await axios.put(
      `https://deploy-practiwiz.azurewebsites.net/api/contributers/disapprove/${contributer.contributer_details_id}`,
      { id: contributer.contributer_dtls_id },
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
        <h1>Approve the Contributer</h1>
        {loading && <LoadingSpinner />}
        <Table>
          <Tbody>
            <Tr>
              <Th>Id</Th>
              <Th>Email</Th>
              <Th>Full Name</Th>
              <Th>Mobile</Th>
              <Th>Qualification</Th>
              <Th>Experience</Th>
              <Th>Course Name</Th>
              <Th>Course Category</Th>
              <Th>Approve or Not</Th>
              <Th>Contributer Status</Th>
            </Tr>
          </Tbody>
          {allContributers?.length > 0
            ? allContributers?.map((contributer) => (
                <Tbody>
                  <Tr key={contributer.contributer_details_id}>
                    <Td>{contributer.contributer_details_id}</Td>
                    <Td>{contributer.contributer_email}</Td>
                    <Td>{contributer.contributer_fullname}</Td>
                    <Td>{contributer.contributer_mobile}</Td>
                    <Td>{contributer.contributer_qualifications}</Td>
                    <Td>{contributer.contributer_exp_yrs}</Td>
                    <Td>{contributer.contributer_course_name}</Td>
                    <Td>{contributer.contributer_course_category}</Td>
                    <Td>
                      {contributer.contributer_approve_status === "yes" ? (
                        <button
                          className="disapprove"
                          onClick={() =>
                            contributerDisApproveHandler(contributer)
                          }
                        >
                          {approve ? " Disapprove" : "Approve"}
                        </button>
                      ) : (
                        <button
                          onClick={() => contributerApproveHandler(contributer)}
                          className="approve"
                        >
                          {approve ? " Approve" : "Disapprove"}
                        </button>
                      )}
                    </Td>
                    <Td>
                      {contributer.contributer_approve_status === "yes" ? (
                        <button className="approved">Approved</button>
                      ) : (
                        <button className="disapproved">Not Approved</button>
                      )}
                    </Td>
                  </Tr>
                </Tbody>
              ))
            : "No contributer found"}
        </Table>
      </div>
    </div>
  );
};

export default AllContributers;
