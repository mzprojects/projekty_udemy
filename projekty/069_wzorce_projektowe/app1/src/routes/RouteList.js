import React from "react";
import { Routes, Route } from "react-router";
import Tab from "../layout/Tab";

const RouteList = () => (
  <Routes>
    <Route path="/tab1" element={<Tab tabId={"1"} />}></Route>
    <Route path="/tab2" element={<Tab tabId={"2"} />}></Route>
    <Route path="/tab3" element={<Tab tabId={"3"} />}></Route>
    <Route path="/tab4" element={<Tab tabId={"4"} />}></Route>
  </Routes>
);

export default RouteList;
