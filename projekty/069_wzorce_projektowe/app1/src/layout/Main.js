import React from "react";
import RouteList from "../routes/RouteList";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";
import Tabs from "./Tabs";

const Wrapper = styled.div`
  min-height: 4vh;
`;
const Main = () => (
  <div>
    <Header />
    <Wrapper>
      <Tabs />
      <RouteList />
    </Wrapper>
    <Footer />
  </div>
);

export default Main;
