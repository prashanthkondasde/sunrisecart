import React from 'react'

const ErrorFallback = ({ error, resetErrorBoundary })=> {
  return (
    <div>
      <h2>Error occurred:</h2>
      <p>{error.message}</p>

      <button onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );
}

export default ErrorFallback