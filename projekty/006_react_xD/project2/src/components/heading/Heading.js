import React from "react";
import "./heading.css";

class Heading extends React.Component {
  constructor() {
    super();
    this.state = { link1: "Link1" };
  }
  render() {
    return (
      <div>
        <nav>
          <h2>{this.props.headerTitle}</h2>
          <ul className="navigation">
            <li>{this.state.link1}Dupa</li>
            <li>Blog</li>
            <li>Artykuły</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Heading;
