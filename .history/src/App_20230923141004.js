import { ErrorBoundary, useErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppRouter from '@/routes/AppRouter';
import FallbackComponent from '@/utils/ErrorBoundary/FallbackComponent';

function App() {
  const queryClient = new QueryClient();
  const { showBoundary } = useErrorBoundary();
  return (
    <ErrorBoundary
      FallbackComponent={FallbackComponent}
      onReset={() => {
        // reset the state of your app here
      }}
      onError={(error, info) => {
        console.log('Caught an error: ', error, info);
      }}
    >
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
