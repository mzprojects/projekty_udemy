import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import Heading from "./components/heading/Heading";
import reportWebVitals from "./reportWebVitals";

const elements1 = ["Regulamin", "FAQ", "O nas", "Kontakt"];
const elements2 = ["cono", "cono2", "cono3"];

const companyData = {
  email: "contact@email.com",
  city: "Bielawa",
  street: "Wacławska",
};

ReactDOM.render(
  <React.StrictMode>
    <Heading headerTitle="ELO MORDO" />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
