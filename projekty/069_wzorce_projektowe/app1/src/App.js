import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./layout/GlobalStyle";
import Main from "./layout/Main";

const App = () => (
  <Router>
    <GlobalStyle />
    <Main />
  </Router>
);

export default App;
