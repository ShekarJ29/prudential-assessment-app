import React from "react";
import "./Header.css";
import PrudentialLogo from "../../assets/p6.png";

export default function Header(props) {
  return (
    <div className="header">
      <span className="companyLogo"><img src={PrudentialLogo} width="100px" alt="prudential" /></span>
      <span className="companyHeader">{props.company}</span> <span className="titleHeader">{props.title}</span>
    </div>
  );
}
