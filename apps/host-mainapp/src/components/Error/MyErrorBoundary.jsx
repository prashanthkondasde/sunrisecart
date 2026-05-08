import { ErrorBoundary } from "react-error-boundary";

function Fallback({ error, resetErrorBoundary }) {
  return (
    <div>
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Retry</button>
    </div>
  );
}

export default function MyErrorBoundary({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={Fallback}
      onReset={() => {
        // reset state / retry logic
      }}
    >
      {children}
    </ErrorBoundary>
  );
}