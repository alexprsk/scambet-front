import './index.css';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrelivePage from './routes/PrelivePage.jsx';
import Layout from './routes/Layout.jsx';
import ErrorPage from './routes/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement:<ErrorPage/>,
    children: [

      {
        index: true,
        element: <PrelivePage />
      },
      {
        path: 'upcoming-events',
        element: <PrelivePage />
      },
      {
        path: 'prelive/soccer',
        element: <PrelivePage />
      },
      {
        path: 'prelive/basketball',
        element: <PrelivePage />
      },
      {
        path: 'prelive/baseball',
        element: <PrelivePage />
      }           
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
