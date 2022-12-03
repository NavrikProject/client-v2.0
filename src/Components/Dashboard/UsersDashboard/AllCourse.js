import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../utils/LoadingSpinner";
import { Table, Tbody, Td, Th, Tr } from "./DashboardElements";

const AllCourse = () => {
  const user = useSelector((state) => state.user.currentUser);
  const token = user?.accessToken;
  const [allCourses, setAllCourse] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getAllTheCourse = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://deploy-practiwiz.azurewebsites.net/api/courses/new/dashboard/courses`,
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      if (res.data) {
        setAllCourse(res.data);
        setLoading(false);
      }
    };
    getAllTheCourse();
  }, [token]);

  const courseDeleteHandler = async (course) => {
    const res = await axios.delete(
      `https://deploy-practiwiz.azurewebsites.net/api/courses/new/delete/${course.course_id}`,
      {
        headers: { authorization: "Bearer " + token },
      }
    );
    if (res.data.success) {
      alert("Course deleted successfully");
    }
    if (res.data.error) {
      alert("There was an error while deleting the course");
    }
  };
  const courseEditHandler = async (course) => {
    // const res = await axios.put(`/courses/new/edit/${course.course_id}`, {
    //   headers: { authorization: "Bearer " + token },
    // });
    // console.log(res);
  };
  return (
    <div className="rightbarSect">
      <div className="tableDiv">
        <h1>All course</h1>
        {loading && <LoadingSpinner />}
        <div className="itmes">
          <div className="flex1">
            <div className="redBox"></div>
            <p className="tag"> Course Will be deleted</p>
          </div>
          <div className="flex1">
            <div className="yellowBox"></div>
            <p className="tag"> Course Edit</p>
          </div>
        </div>
        <Table>
          <Tr>
            <Th>Id</Th>
            <Th>Course Name</Th>
            <Th>Course Title</Th>
            <Th>Course Starts & End Date</Th>
            <Th>Course Category</Th>
            <Th>Course Created By</Th>
            <Th>Course Trainer Name</Th>
            <Th>Course Price</Th>
            <Th>Edit</Th>
            <Th>Delete</Th>
          </Tr>
          <Tbody>
            {allCourses.length > 0
              ? allCourses?.map((course) => (
                  <Tr key={course.course_id}>
                    <Td>{course.course_id}</Td>
                    <Td>{course.course_name}</Td>
                    <Td>{course.course_title}</Td>
                    <Td>
                      {new Date(course.course_start_dt).toLocaleDateString()}-
                      {new Date(course.course_end_dt).toLocaleDateString()}
                    </Td>
                    <Td>{course.course_category}</Td>
                    <Td>{course.course_created_by}</Td>
                    <Td>{course.course_trainer_name}</Td>
                    <Td>Rs:{course.course_price}</Td>
                    <Td>
                      <button
                        className="disapprove"
                        onClick={() => courseEditHandler(course)}
                      >
                        Edit
                      </button>
                    </Td>
                    <Td>
                      <button
                        className="disapproved1"
                        onClick={() => courseDeleteHandler(course)}
                      >
                        Delete
                      </button>
                    </Td>
                  </Tr>
                ))
              : "NOO courses found"}
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default AllCourse;
