import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Articles from "./components/Articles/Articles";
import Dupa from "./components/Dupa/Dupa";
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";

const elements1 = ["Regulamin", "FAQ", "O nas", "Kontakt"];
const elements2 = ["cono", "cono2", "cono3"];

const companyData = {
  email: "contact@email.com",
  city: "Bielawa",
  street: "Wacławska",
};

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/dupa" element={<Dupa />}></Route>
      </Routes>
      <Footer elements1={elements1} elements2={elements2} />
    </Router>
  );
}

export default App;
