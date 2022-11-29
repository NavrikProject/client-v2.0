import React from "react";
import { useDispatch } from "react-redux";
import { hideModelHandler } from "../../redux/modelReducer";
import { hideScrollModelHandler } from "../../redux/scrollModelReducer";
import "./Model.css";
export const ModelFixedHeight = ({ children }) => {
  const dispatch = useDispatch();
  const closeModelHandler = () => {
    dispatch(hideModelHandler());
  };
  return (
    <div className="modelBackdrop">
      <div className="modelFixedHeight">
        <div>
          <i onClick={closeModelHandler} className="fa-solid fa-xmark"></i>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
export const ScrollModel = ({ children }) => {
  const dispatch = useDispatch();
  const closeModelHandler = () => {
    dispatch(hideScrollModelHandler());
  };
  return (
    <div className="modelBackdrop">
      <div className="model">
        <div>
          <i onClick={closeModelHandler} className="fa-solid fa-xmark"></i>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
