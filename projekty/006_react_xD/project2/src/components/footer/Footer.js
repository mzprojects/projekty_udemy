import React from "react";
import "./footer.css";
import "../copyright/Copyright";
import Copyright from "../copyright/Copyright";
import { render } from "react-dom";

const elements1 = ["Regulamin", "FAQ", "O nas", "Kontakt"];
const elements2 = ["cono", "cono2", "cono3"];

const items = [];

function Footer(props) {
  for (const [index, value] of elements1.entries()) {
    items.push(<li>{value}</li>);
    console.log({ items });
  }
  return (
    <div>
      <footer>
        <ul>
          {elements1.map((value, index) => {
            return <li>{value}</li>;
          })}
          {elements2.map((value, index) => {
            return <li>{value}</li>;
          })}
        </ul>

        <Copyright year="2021" />
      </footer>
    </div>
  );
}

export default Footer;
