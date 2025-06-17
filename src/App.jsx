import './index.css';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UpcomingPage from './routes/UpcomingPage.jsx';
import PreLivePage from './routes/PrelivePage.jsx';
import Layout from './routes/Layout.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import { useFetchMarkets } from './hooks/useFetchMarkets.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <UpcomingPage /> },
      { path: 'upcoming-events', element: <UpcomingPage /> },
      // Single route with optional sport param
      { path: 'prelive/:sport?', element: <PreLivePage /> },
    ],
  },
]);
function App() {
  useFetchMarkets();
  return <RouterProvider router={router} />;
}

export default App;
