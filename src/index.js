import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ThemedComponent from './Context/ThemedComponent';
import CartInof from '../src/CartInof';
import Cart from './Component/Cart';
import Basket from './Component/Basket';

import RouldImageList from './Component/RouldImageList';

const Router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ThemedComponent>
        <App />
      </ThemedComponent>
    ),
    errorElement: <div>خطا في الصفحة </div>,
    children: [
      {
        path: '/',
        element: (
          <ThemedComponent>
            <RouldImageList />
            <Cart />
          </ThemedComponent>
        ),
      },
      {
        path: '/:id',
        element: <CartInof />,
      },
      {
        path: '/basket',
        element: <Basket />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
);

reportWebVitals();
