import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./button.css";

import button from "../img/button.png";

const Button = ({ clickHandler }) => {
  return (
    <>
    <div className="container">
      <div className="vertical-center">
      <button className="btn mt-4" onClick={clickHandler}>
        <img
          src={button}
          alt="button"
          className="img-fluid"
          style={{"textAlign": "center"}}
        />
      </button>
      </div>
    </div>
    </>
  );
};

export default Button;
