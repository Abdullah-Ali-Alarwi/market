import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ThemedComponent from './Context/ThemedComponent';

const Router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ThemedComponent>
        <App />
      </ThemedComponent>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
);

reportWebVitals();
