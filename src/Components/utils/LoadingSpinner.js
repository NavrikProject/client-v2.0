import React from "react";
import "./LineWaveLoader.css";
const LoadingSpinner = () => {
  return (
    <div className="loadingBackdrop">
      <div>
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
