import React, { useState } from "react";
import GoToTop from "../../GoToTop.js";
import {
  DetailsWrapper,
  Div,
  LeftDiv,
  QuickMenuTitle,
  RightDiv,
  Section,
  SidebarListItem,
  SidebarListUl,
  Wrapper,
} from "./JobSeekerProfileElements.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ModelFixedHeight, ScrollModel } from "../../utils/Model.js";
import Form2 from "../../Forms/ProfileForm/Form2.js";
import Form3 from "../../Forms/ProfileForm/Form3.js";
import Form4 from "../../Forms/ProfileForm/Form4.js";
const JobSeekerProfile = () => {
  const user = useSelector((state) => state.user?.currentUser);
  const [accountForm, setAccountForm] = useState(false);
  const [changePasswordForm, setChangePasswordForm] = useState(false);
  const [deleteAccountForm, setDeleteAccountForm] = useState(false);

  const showAccountForm = () => {
    setAccountForm(!accountForm);
    setDeleteAccountForm(false);
    setChangePasswordForm(false);
  };
  const showPasswordForm = () => {
    setChangePasswordForm(!changePasswordForm);
    setAccountForm(false);
    setDeleteAccountForm(false);
  };
  const showDeleteAccount = () => {
    setAccountForm(false);
    setDeleteAccountForm(!deleteAccountForm);
    setChangePasswordForm(false);
  };

  return (
    <Section>
      <Div>
        <RightDiv>
          <Wrapper>
            <h1>Quick Menu</h1>
            <SidebarListUl>
              <SidebarListItem>
                <QuickMenuTitle>
                  <Link
                    style={{ textDecoration: "none", color: "#111" }}
                    to={`/${user?.type}/profile/my-jobs`}
                  >
                    <span>
                      <i className="fa-regular fa-file"></i>
                    </span>
                    Applied Jobs
                  </Link>
                </QuickMenuTitle>
              </SidebarListItem>
              <SidebarListItem>
                <QuickMenuTitle>
                  <Link
                    style={{ textDecoration: "none", color: "#111" }}
                    to={`/${user?.type}/profile/my-sessions`}
                  >
                    <span>
                      <i className="fa-regular fa-file"></i>
                    </span>
                    My sessions
                  </Link>
                </QuickMenuTitle>
              </SidebarListItem>
              <SidebarListItem onClick={showAccountForm}>
                <QuickMenuTitle>
                  <span>
                    <i className="fa-regular fa-user"></i>
                  </span>
                  Account
                </QuickMenuTitle>
              </SidebarListItem>
              <SidebarListItem onClick={showPasswordForm}>
                <QuickMenuTitle>
                  <span>
                    <i className="fa-solid fa-key"></i>
                  </span>
                  Password
                </QuickMenuTitle>
              </SidebarListItem>
              <SidebarListItem onClick={showDeleteAccount}>
                <QuickMenuTitle>
                  <span>
                    <i className="fa-solid fa-trash"></i>
                  </span>
                  Delete the account
                </QuickMenuTitle>
              </SidebarListItem>
            </SidebarListUl>
          </Wrapper>
        </RightDiv>

        {accountForm && (
          <ModelFixedHeight closeModelHandler={showAccountForm}>
            <Form2 />
          </ModelFixedHeight>
        )}
        {changePasswordForm && (
          <ScrollModel closeScrollModelHandler={showPasswordForm}>
            <Form3 />
          </ScrollModel>
        )}
        {deleteAccountForm && (
          <ModelFixedHeight closeModelHandler={showDeleteAccount}>
            <Form4 />
          </ModelFixedHeight>
        )}
        <LeftDiv>
          <Wrapper>
            <DetailsWrapper></DetailsWrapper>
          </Wrapper>
        </LeftDiv>
      </Div>
      <GoToTop />
    </Section>
  );
};

export default JobSeekerProfile;
