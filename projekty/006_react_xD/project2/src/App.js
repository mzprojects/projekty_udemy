import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Articles from "./components/Articles/Articles";
import Dupa from "./components/Dupa/Dupa";
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
const aprops = {
  attraction: {
    address1: "350 5th Ave",
    address2: "",
    average_rating: 4,
    city: "New York",
    country: "US",
    display_address: ["350 5th Ave", "New York, NY 10118"],
    id: 9,
    latitude_coordinate: "40.748442285082",
    location: {
      created_at: "2018–03–07T03:56:20.717Z",
      id: 1,
      latitude_coordinate: 40.712775,
      longitude_coordinate: -74.005973,
    },
  },
  auth: {
    loggedIn: true,
    loggingIn: false,
    token: 2104890123,
  },
  links: {
    elements1: ["Regulamin", "FAQ", "O nas", "Kontakt"],
    elements2: ["cono", "cono2", "cono3"],
  },
};

const companyData = {
  email: "contact@email.com",
  city: "Bielawa",
  street: "Wacławska",
};

const App = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/articles" element={<Articles />}></Route>
      <Route path="/dupa" element={<Dupa />}></Route>
    </Routes>
    <Footer {...aprops} />
  </Router>
);

export default App;
