import React from "react";
import "./Inputs.scss";

const Inputs = () => {
  return (
    <div className="inputs-container">
      <form>
        <div className="form-input">
          <div className="label" />
          <input type="text" />
        </div>
        <div className="form-input">
          <div className="label" />
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default Inputs;
