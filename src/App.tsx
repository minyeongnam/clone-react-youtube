import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YoutubeApiProvider } from './context/youtubeApiContext';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <Header />
      <div className="container">
        <QueryClientProvider client={queryClient}>
          <YoutubeApiProvider>
            <Outlet />
          </YoutubeApiProvider>
        </QueryClientProvider>
      </div>
      <footer>
        <footer>footer</footer>
      </footer>
    </>
  );
}
