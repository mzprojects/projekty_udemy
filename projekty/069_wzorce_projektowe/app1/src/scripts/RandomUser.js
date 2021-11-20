import React from "react";
import styled from "styled-components";

const Container = styled.div`
  h2 {
    font-size: 1.5rem;
    text-align: center;
    margin: 20px 0 20px 0;
  }
  .user-profile {
    display: flex;
  }
  .row {
    flex: 50%;
    &.picture {
      text-align: right;
      padding-right: 15px;
    }
    &.data {
      margin-top: 20px;
      div {
        margin-top: 10px;
        &.full-name {
          font-weight: bold;
        }
        &.username {
          font-size: 0.8rem;
          color: silver;
        }
        &.email {
          font-weight: bold;
          margin-top: 30px;
        }
      }
    }
  }
`;
const RandomUser = ({ data }) => {
  const { picture, fullname, username, email } = data;
  return (
    <Container>
      <h2>Random User</h2>
      <div className="user-profile">
        <div className="row picture">
          <div className="profile-pic">
            <img src={picture} alt="" />
          </div>
        </div>
        <div className="row data">
          <div className="full-name">{fullname}</div>
          <div className="username">{username}</div>
          <div className="email">{email}</div>
        </div>
      </div>
    </Container>
  );
};

export default RandomUser;
