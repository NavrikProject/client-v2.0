import styled from "styled-components";
export const MentorSuccessSection = styled.section`
  height: 80vh;
  display: flex;
  font-size: 14px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
export const MentorSuccessDiv = styled.div`
  width: 80%;
  margin: 0 auto;
`;
export const MentorSuccessDivFlex = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;
export const AdditionalButton = styled.button`
  margin: 0 auto;
  padding: 12px 20px;
  text-align: center;
  font-size: 17px;
  border: none;
  outline: none;
  cursor: pointer;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  background-color: #136;
  color: #fff;
  border-radius: 5px;

  &:hover {
    opacity: 0.9;
  }
  :disabled {
    cursor: not-allowed;
  }
`;
