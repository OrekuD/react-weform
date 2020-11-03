import React from "react";
import "./Step.scss";

const Step = ({ step }: { step: number }) => {
  return (
    <div className="step">
      <p>Step - {step}</p>
    </div>
  );
};

export default Step;
