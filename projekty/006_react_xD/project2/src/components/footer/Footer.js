import React from "react";
import "./footer.css";
import "../copyright/Copyright";
import Copyright from "../copyright/Copyright";
import { Link, Routes } from "react-router-dom";

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <ul>
          {this.props.elements1.map((value) => (
            <li>{value}</li>
          ))}
          {this.props.elements2.map((value) => (
            <li>{value}</li>
          ))}
        </ul>
        <Link to="/dupa">LINK DO DUPY</Link>

        <Copyright year="2021" />
      </footer>
    );
  }
}
