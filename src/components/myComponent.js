import React from "react";
import defaultClasses from "./myComponent.scss";

const MyComponent = () => (
  <div className={defaultClasses.root}>
    <button className={defaultClasses.button}>My Component</button>
  </div>
);

export default MyComponent;

