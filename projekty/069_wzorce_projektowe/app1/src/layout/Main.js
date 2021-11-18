import React from "react";
import RouteList from "../routes/RouteList";
import Footer from "./Footer";
import Header from "./Header";

import Tabs from "./Tabs";

const Main = () => (
  <div className="wrapper">
    <Header />
    <Tabs />
    <RouteList />
    <Footer />
  </div>
);

export default Main;
