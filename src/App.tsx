import React, { useState } from "react";
import "./App.scss";
import { Bubble, Inputs, ProgressBar, Step } from "./components";

function App() {
  const [step, setStep] = useState(1);

  const changeStep = () => {
    setStep(step === 4 ? 1 : step + 1);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <Bubble />
        <ProgressBar step={step} />
        <Step step={step} />
        <Inputs />
        <button className="gradient-btn" aria-label="Next" onClick={changeStep}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
