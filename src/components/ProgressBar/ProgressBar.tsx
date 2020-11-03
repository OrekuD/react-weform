import React from "react";
import "./ProgressBar.scss";

const ProgressBar = ({ step }: { step: number }) => {
  return (
    <div className="progress-bar-container">
      <div
        className="progress"
        style={{ width: step === 4 ? "100%" : `${(step / 4) * 80}%` }}
      ></div>
      {Array(4)
        .fill("")
        .map((i, index) => (
          <div
            className={`circle ${index + 1 <= step ? "active" : ""}`}
            style={{
              left: `${((index + 1) / 4) * 80}%`,
            }}
            key={index}
          >
            <p>{index + 1}</p>
          </div>
        ))}
    </div>
  );
};

export default ProgressBar;
