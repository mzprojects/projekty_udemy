import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import RandomUser from "../scripts/RandomUser";

const ContentTab = styled.div`
  background: white;
  border: 2px solid silver;
  border-bottom: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  color: black;
  text-decoration: none;
  width: 70%;
  min-height: 70vh;
  margin-left: 5px;
  margin-bottom: 10px;
  padding: 0 5px 0 5px;
`;

const Tab = () => {
  const a = useLocation().pathname;
  const b = a.match("(?<=tab)[0-9]{1,2}");
  const data = {
    picture: "https://randomuser.me/api/portraits/women/74.jpg",
    fullname: "Kristen Jordan",
    username: "@silverswan131",
    email: "kristen.jordan@example.com",
  };
  return (
    <ContentTab>
      <RandomUser data={data} />
    </ContentTab>
  );
};

export default Tab;
