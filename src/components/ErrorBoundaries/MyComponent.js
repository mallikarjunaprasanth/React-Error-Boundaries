import React from "react";

const MyComponent = ({ data }) => {
  if (data === "Rock") {
    throw new Error("An error occurred in MyComponent");
  }
  return <div>{data}</div>;
};

export default MyComponent;
