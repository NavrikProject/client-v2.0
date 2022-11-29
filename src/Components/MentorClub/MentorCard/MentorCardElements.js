import styled from "styled-components";

export const MentorBoxDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const MentorCourseBox = styled.div`
  cursor: pointer;
  width: 100%;
  border-radius: 15px;
`;
export const MentorDownDiv = styled.div`
  width: 100%;
  //background-color: #d1dfe3;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #fff;
  /* // background-color: #eeeeee; */
  /* background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5) 100%,
    rgba(255, 255, 255, 0) 40%
  ); */
`;
export const MentorDiv = styled.div`
  width: 25%;
  margin: 20px;
  margin-bottom: 40px;
`;
export const MentorDetailsDiv = styled.div``;
export const MentorDetailsImgDiv = styled.div``;
export const MentorName = styled.h3`
  text-transform: capitalize;
  text-align: center;
  padding-top: 10px;
  font-size: 24px;
  color: rgb(19, 25, 70);
`;
// export const MentorImg = styled.img`
//   width: 50%;
//   height: 50%;
//   object-fit: cover;
//   margin: 0 auto;
// `;
export const MentorUpDiv = styled.div`
  width: 100%;
  height: 50px;
  /* // background-color: #f2f2f2; */
`;
export const MentorNotFoundDiv = styled.div`
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #fff;
`;
export const MentorImg = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin: -100px auto 0 auto;
  object-fit: cover;
  border: 7px solid light;
`;
export const MentorImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MentorDesc = styled.p`
  padding: 10px;
  font-size: 17px;
  color: #627792;
  overflow: hidden;
`;
export const MentorExpertDiv = styled.div`
  p {
    padding-left: 10px;
    color: #627792;
    font-size: 17px;
  }
`;
export const MentorCategoryDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const MentorSlotTimeDiv = styled.div`
  padding: 0 10px 10px 10px;
  font-size: 17px;
  overflow: hidden;
  color: #627792;
  span {
    color: #111 !important;
  }
`;
export const MentorDescP = styled.p`
  padding: 10px;
  font-size: 19px;
  text-align: center;
  span {
    color: #66bfbf;
  }
`;
export const BookNowButtonDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
`;
export const BookNowButton = styled.button`
  margin: 0 auto;
  padding: 12px 20px;
  text-align: center;
  font-size: 17px;
  border: none;
  outline: none;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  background-color: #1363df;
  color: #fff;
  border-radius: 5px;
  &:hover {
    opacity: 0.7;
    transition: all 0.5s ease-in-out;
  }
`;
export const LineAfter = styled.div`
  &::before {
    content: "";
    width: 180px;
    height: 4px;
    display: block;
    margin: 0 auto;
    background-color: #9926f0;
  }
  &::after {
    content: "";
    width: 50px;
    height: 4px;
    padding-top: 0.1rem;
    margin: 0 auto;
    display: block;
    background-color: #9926f0;
  }
`;
export const FiltersInMentorCard = styled.p`
  margin: 3px;
  span {
    margin-left: 10px;
    padding: 3px 7px;
    background-color: lightgray;
    color: #111;
    border-radius: 5px;
    cursor: pointer;
    font-size: 13px;
  }
  i {
    padding: 5px;
  }
`;
