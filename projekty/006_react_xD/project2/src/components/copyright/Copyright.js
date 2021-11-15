import React from "react";
import "./copyright.css";

class Copyright extends React.Component {
  render() {
    return (
      <div>
        <span>
          Copyright &copy;
          {this.props.year} example.com All Rights Reserved{" "}
        </span>
      </div>
    );
  }
}

export default Copyright;
