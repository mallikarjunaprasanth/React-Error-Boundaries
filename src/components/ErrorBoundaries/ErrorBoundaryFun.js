import React from "react";

const ErrorBoundaryFun = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button
        onClick={() => {
          window.location.reload(true);
        }}
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorBoundaryFun;
