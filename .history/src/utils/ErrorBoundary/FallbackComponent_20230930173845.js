function FallbackComponent({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <h3>Something went wrong:</h3>
      <pre>{error.message}</pre>
      <button type="button" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );
}

export default FallbackComponent;
