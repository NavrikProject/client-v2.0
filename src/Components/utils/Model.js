import React from "react";
import "./Model.css";
export const ModelFixedHeight = ({ children, closeModelHandler }) => {
  return (
    <div className="modelBackdrop">
      <div className="modelFixedHeight">
        <div className="modelMargin">
          <i
            onClick={closeModelHandler}
            className="fa-solid fa-xmark closeIcon"
          ></i>
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
        <div className="modelMargin">
          <i
            onClick={closeScrollModelHandler}
            className="fa-solid fa-xmark closeIcon"
          ></i>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
