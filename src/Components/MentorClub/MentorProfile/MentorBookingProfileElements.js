import styled from "styled-components";
export const ImgBox = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const ApprovedDiv = styled.div`
  width: 90%;
  margin: 0 auto 20px auto;
  padding: 10px 20px;
  background-color: #5cb85c;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  i {
    font-size: 45px;
    margin-right: 20px;
  }
  p {
    font-size: 16px;
  }
`;
export const NotFoundDiv = styled.div`
  width: 100%;
  margin: 0 auto 20px auto;
  padding: 20px 20px;
  background-color: #ffdddd !important;
  color: #111;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  i {
    font-size: 45px;
    margin-right: 20px;
  }
  p {
    font-size: 18px;
  }
`;

export const FillDiv = styled.div`
  margin-top: 20px;
  width: 100%;
  background-color: #f2f2f2;
  height: 25px;
`;
export const FillDivProgress = styled.div`
  background-color: #54b435;
  height: 25px;
  width: 20%;
  text-align: center;
  line-height: 25px;
  color: #fff;
  font-weight: 500;
`;
export const MentorRegButton = styled.button`
  padding: 10px 20px;
  outline: none;
  font-size: 17px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  color: #fff;
  border-bottom-width: 2px;
  transition: all 0.4s ease;
  font-size: 20px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  margin: 0 auto;
  background: -webkit-linear-gradient(left, #3e5ce4, #4282fa);
  margin-top: 20px !important;
  @media only screen and (max-width: 868px) {
    font-size: 16px;
  }
`;
export const ImgForm = styled.form``;

export const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid gray;
  @media only screen and (max-width: 868px) {
    width: 130px;
    height: 130px;
  }
`;
export const TraineeTitle = styled.h1`
  font-size: 32px;
  font-weight: 500;
  margin-right: 20px;
  text-transform: capitalize;
  @media only screen and (max-width: 868px) {
    font-size: 24px;
  }
`;
export const TraineeRole = styled.p`
  font-size: 19px;
  font-weight: 400;
  display: inline;
  margin-right: 20px;
  text-transform: capitalize;
  margin-bottom: 20px !important;
  @media only screen and (max-width: 868px) {
    font-size: 15px;
  }
`;
export const SocialButton = styled.a`
  margin-top: 20px !important;
  padding: 10px 20px;
  border: none;
  outline: none;
  box-shadow: rgb(0 0 0 / 10%) 0px 5px 24px;
  cursor: pointer;
  border-radius: 5px;
  margin: 15px 15px 0 0;
  font-size: 16px;
  transition: all 0.5s ease-in-out;
  text-decoration: none;
  &:hover {
    border: 1px solid #111;
  }
  @media only screen and (max-width: 868px) {
    font-size: 13px;
  }
`;
export const DetailsFlex = styled.div`
  margin-left: 60px;
  text-transform: capitalize;
  @media only screen and (max-width: 968px) {
    margin-left: 0px;
  }
`;
export const DetailsFlex1 = styled.div`
  display: flex;
  padding: 7px 10px;
`;
export const DetailsTitles = styled.h4`
  font-weight: 600;
  margin-right: 5px;
  @media only screen and (max-width: 868px) {
    font-size: 16px;
  }
`;
export const DetailsFromDb = styled.p`
  font-weight: 400;
  margin-left: 5px;
  span {
    color: gold;
  }
  @media only screen and (max-width: 868px) {
    font-size: 14px;
  }
`;
export const Section = styled.section`
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 780px) {
    height: auto;
  }
`;
export const Div = styled.div`
  display: flex;
  width: 100% !important;
  @media screen and (max-width: 780px) {
    display: block;
  }
`;
export const RightDiv = styled.div`
  flex: 3;
  position: sticky;
  top: 120px;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(245, 245, 245, 1) 32%,
    rgba(224, 251, 252, 1) 100%
  );
  @media screen and (max-width: 780px) {
    position: static;
    height: auto;
  }
`;
export const LeftDiv = styled.div`
  flex: 9.5;
  overflow: scroll;
  height: 100vh;
  @media screen and (max-width: 780px) {
    height: auto;
  }
`;
export const SidebarListUl = styled.ul`
  list-style: none;
  padding: 10px;
`;
export const SidebarListItem = styled.li`
  width: 100%;
  cursor: pointer;
  border-bottom: 1px solid lightgrey;
  :nth-child(8) {
    border-bottom: none;
  }
`;
export const Wrapper = styled.div`
  padding: 30px;
  @media screen and (max-width: 780px) {
    padding: 10px;
  }

  h1 {
    @media only screen and (max-width: 868px) {
      font-size: 24px;
    }
  }
`;
export const Wrapper1 = styled.div`
  padding: 0 30px;
  @media screen and (max-width: 780px) {
    padding: 10px;
  }

  h1 {
    @media only screen and (max-width: 868px) {
      font-size: 24px;
    }
  }
`;
export const DetailsWrapper = styled.div`
  margin: 10px;
  //box-shadow: rgb(142 151 158 / 15%) 0px 4px 19px;
  padding: 20px;
  @media screen and (max-width: 780px) {
    padding: 0px;
  }
`;
export const QuickMenuTitle = styled.h3`
  font-size: 21px;
  color: black;
  opacity: 0.9;
  font-weight: 400;
  margin: 3px 0;
  span {
    margin-right: 10px;
  }
  @media screen and (max-width: 780px) {
    font-size: 19px;
  }
`;
