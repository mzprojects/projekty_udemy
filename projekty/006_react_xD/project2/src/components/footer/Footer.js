import React from "react";
import "./footer.css";
import "../copyright/Copyright";
import Copyright from "../copyright/Copyright";

const elements1 = ["Regulamin", "FAQ", "O nas", "Kontakt"];

const items = [];

function Footer(props) {
  for (const [index, value] of elements1.entries()) {
    items.push(<li>{value}</li>);
  }
  console.log({ items });
  return (
    <div>
      <footer>
        <ul>{items}</ul>

        <Copyright year="2021" />
      </footer>
    </div>
  );
}

export default Footer;
