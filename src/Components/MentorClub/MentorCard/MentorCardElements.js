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
  @media screen and (max-width: 868px) {
    padding: 20px 10px;
  }
`;
export const MentorDiv = styled.div`
  width: 25%;
  margin: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px !important;
  margin-bottom: 40px;
  background-color: #fff;
  @media screen and (max-width: 868px) {
    width: 50%;
    margin: 0 auto 40px auto;
  }
  @media screen and (max-width: 668px) {
    width: 90%;
    margin: 0 auto 40px auto;
  }
`;
export const MentorDetailsDiv = styled.div``;
export const MentorDetailsImgDiv = styled.div``;
export const MentorName = styled.h3`
  text-transform: capitalize;
  text-align: center;
  padding-top: 10px;
  font-size: 24px;
  color: #111;
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
  @media screen and (max-width: 868px) {
    width: 200px;
    height: 200px;
  }
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
  margin-top: 10px !important;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 5px;
`;
export const MentorSlotTimeDiv = styled.div`
  padding: 0 10px 10px 10px;
  font-size: 17px;
  overflow: hidden;
  color: #627792;
  span {
    color: #111 !important;
    text-transform: capitalize;
  }
`;
export const MentorDescP = styled.p`
  padding: 0 10px 10px 10px;
  font-size: 19px;
  text-align: center;
  span {
    color: grey;
    font-size: 16px;
  }
`;
export const BookNowButtonDiv = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px auto;
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
  @media screen and (max-width: 868px) {
    margin-bottom: 16px;
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
  margin-bottom: 5px;
  flex-wrap: nowrap;
  display: flex;
  margin-left: 30px;
  span {
    text-transform: capitalize;
    margin-left: 10px;
    padding: 3px 7px;
    color: #111;
    border-radius: 5px;
    cursor: pointer;
    font-size: 13px;
  }
  i {
    padding: 5px;
  }
`;

export const FiltersInMentorCardColor = styled.span`
  margin-bottom: 5px;
  text-transform: capitalize;
  margin-left: 10px;
  padding: 5px 10px;
  color: #111;
  border-radius: 5px;
  cursor: pointer;
  background: #cbbef6;
  font-size: 13px;

  /* &:nth-child(4) {
    background: #bef6e7;
  } */
`;
