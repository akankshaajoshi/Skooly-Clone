import { QueryClient, QueryClientProvider } from 'react-query';
import '@/styles/App.css';
import AppRouter from '@/routes/AppRouter';
import { ErrorBoundary } from 'react-error-boundary';
import FallbackComponent from '@/utils/ErrorBoundary/FallbackComponent';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
}

export default App;
