import React from "react";
import "./Model.css";
export const ModelFixedHeight = ({ children, closeModelHandler }) => {
  return (
    <div className="modelBackdrop">
      <div className="modelFixedHeight">
        <div>
          <i onClick={closeModelHandler} className="fa-solid fa-xmark"></i>
        </div>
        <div className="childrenDiv">{children}</div>
      </div>
    </div>
  );
};
export const ScrollModel = ({ children, closeScrollModelHandler }) => {
  return (
    <div className="modelBackdrop">
      <div className="model">
        <div>
          <i
            onClick={closeScrollModelHandler}
            className="fa-solid fa-xmark"
          ></i>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
