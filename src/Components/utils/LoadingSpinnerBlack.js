import React from "react";
import "./LoadingSpinner.css";
const LoadingSpinnerBlack = () => {
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

export default LoadingSpinnerBlack;
