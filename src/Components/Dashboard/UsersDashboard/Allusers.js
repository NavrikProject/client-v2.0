import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../utils/LoadingSpinner";
import { Table, Tbody, Td, Th, Tr } from "./DashboardElements";

const Allusers = () => {
  const user = useSelector((state) => state.user.currentUser);
  const token = user?.accessToken;
  const [allUsers, setAllUsers] = useState([]);
  const [approve, setApprove] = useState(true);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getAllTheUsers = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://deploy-practiwiz.azurewebsites.net/api/users/get`,
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      if (res.data.users) {
        setLoading(false);
        setAllUsers(res.data.users);
      } else {
        setLoading(false);
      }
    };
    getAllTheUsers();
  }, [token]);

  const userAdminApproveHandler = async (user) => {
    setLoading(true);
    const res = await axios.put(
      `https://deploy-practiwiz.azurewebsites.net/api/users/update/approve/${user.user_dtls_id}`,
      { id: user.user_dtls_id },
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
  const userAdminDisApproveHandler = async (user) => {
    setLoading(true);
    const res = await axios.put(
      `https://deploy-practiwiz.azurewebsites.net/api/users/update/disapprove/${user.user_dtls_id}`,
      { id: user.user_dtls_id },
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
        <h1>Approve the trainers</h1>
        {loading && <LoadingSpinner />}
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
            <Th>User Type</Th>
            <Th>User Status</Th>
            <Th>Admin</Th>
            <Th>Make Admin or Not</Th>
            <Th> Admin Status</Th>
          </Tr>
          {allUsers.length ? (
            allUsers?.map((user) => (
              <Tbody>
                <Tr key={user.user_dtls_id}>
                  <Td>{user.user_dtls_id}</Td>
                  <Td>{user.user_email}</Td>
                  <Td>{user.user_firstname}</Td>
                  <Td>{user.user_lastname}</Td>
                  <Td>{user.user_type}</Td>
                  <Td>{user.user_status}</Td>
                  <Td>{user.user_is_superadmin}</Td>
                  <Td>
                    {user.user_is_superadmin === 1 ? (
                      <button
                        className="disapprove"
                        onClick={() => userAdminDisApproveHandler(user)}
                      >
                        {approve ? " Disapprove" : "Approve"}
                      </button>
                    ) : (
                      <button
                        onClick={() => userAdminApproveHandler(user)}
                        className="approve"
                      >
                        {approve ? " Approve" : "Disapprove"}
                      </button>
                    )}
                  </Td>
                  <Td>
                    {user.user_is_superadmin === 1 ? (
                      <button className="approved">Admin</button>
                    ) : (
                      <button className="disapproved">Not Admin</button>
                    )}
                  </Td>
                </Tr>
              </Tbody>
            ))
          ) : (
            <h1>No users found</h1>
          )}
        </Table>
      </div>
    </div>
  );
};

export default Allusers;
