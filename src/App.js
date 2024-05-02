import React from "react";
import MyComponent from "./components/ErrorBoundaries/MyComponent";
// import { ErrorBoundary as ErrorBnd } from "react-error-boundary";
// import ErrorBoundaryFun from "./components/ErrorBoundaries/ErrorBoundaryFun";
import ErrorBoundary from "./components/ErrorBoundaries/ErrorBoundary";

const App = () => {
  return (
    <center>
    {/* FallbackComponent for component , fallback={<div>Something went wrong</div>} , fallbackRender={fallbackRender} */}
      {/* <ErrorBnd FallbackComponent={ErrorBoundaryFun}>
        <MyComponent data={"Prasanth"}/>
        <MyComponent data={"Prasanna"}/>
        <MyComponent data={"Pavan"}/>
        <MyComponent data={"Rock"}/>
      </ErrorBnd> */}
      <ErrorBoundary>
        <MyComponent data={"Prasanth"}/>
        <MyComponent data={"Prasanna"}/>
        <MyComponent data={"Pavan"}/>
        <MyComponent data={"Ganesh"}/>
        <MyComponent data={"Rock"}/>
      </ErrorBoundary> 
    </center>
  );
};

export default App;
