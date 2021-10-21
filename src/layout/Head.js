import React from "react";
import "../layout/head.css"
import logo from "../img/simpsonslogo.png";

const Head = () => {
  return <div className="container" style={{"textAlign": "center"}}><img className="img-fluid" src={logo} alt="Logo" /></div>;
};

export default Head;
