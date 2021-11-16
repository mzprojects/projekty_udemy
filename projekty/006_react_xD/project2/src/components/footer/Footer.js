import React from "react";
import "./footer.css";
import "../copyright/Copyright";
import Copyright from "../copyright/Copyright";
import { Link, Routes } from "react-router-dom";

export default class Footer extends React.Component {
  render() {
    const {
      attraction: { address1 },
      auth,
      links: { elements1, elements2 },
    } = this.props;
    return (
      <footer>
        <ul>
          {elements1.map((value) => (
            <li>{value}</li>
          ))}
          {elements2.map((value) => (
            <li>{value}</li>
          ))}
        </ul>
        <Link to="/dupa">LINK DO DUPY</Link>

        <Copyright year="2021" />
      </footer>
    );
  }
}

// const aprops = {
//   attraction: {
//     address1: "350 5th Ave",
//     address2: "",
//     average_rating: 4,
//     city: "New York",
//     country: "US",
//     display_address: ["350 5th Ave", "New York, NY 10118"],
//     id: 9,
//     latitude_coordinate: "40.748442285082",
//     location: {
//       created_at: "2018–03–07T03:56:20.717Z",
//       id: 1,
//       latitude_coordinate: 40.712775,
//       longitude_coordinate: -74.005973,
//     },
//   },
//   auth: {
//     loggedIn: true,
//     loggingIn: false,
//     token: 2104890123
//   },
//     links: {
//     elements1:["Regulamin", "FAQ", "O nas", "Kontakt"],
//     elements2:  ["cono", "cono2", "cono3"]
//     }

// };
