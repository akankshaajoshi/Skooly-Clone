function FallbackComponent({ error, resetErrorBoundary }) {
  return (
    <div
      role="alert"
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'rgb(100, 0, 0)',
      }}
    >
      <h3 style={{ fontWeight: 'bold' }}>Something went wrong:</h3>
      <pre>{error.message}</pre>
      <button type="button" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );
}

export default FallbackComponent;
