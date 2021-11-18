import React from "react";
import { Outlet } from "react-router";

const Tab = ({ tabId = "nono" }) => (
  <div className={"content-tab-" + tabId}></div>
);

export default Tab;
