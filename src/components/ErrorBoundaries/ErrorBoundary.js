import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors from child components and update state
    this.setState({ hasError: true, error, errorInfo });
    // You can log the error to an error tracking service here
    // console.log('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI if an error occurred
      return (
        <div>
          <h1>Something went wrong...</h1>
          <p>{this.state.error && this.state.error.toString()}</p>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
          <button
          className="mt-5"
            onClick={() => {
              window.location.reload(true);
            }}
          >
            Try again
          </button>
        </div>
      );
    }

    // Render children normally if no error
    return this.props.children;
  }
}

export default ErrorBoundary;
