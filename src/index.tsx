import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Products from './pages/Products/Products';
import NewProducts from './pages/Products/NewProducts';
import ProductDetail from './pages/Products/ProductDetail';
import Carts from './pages/Carts';
import { auth } from './api/firebase';
import AuthProvider from './lib/context/authProvider';

console.log(auth);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/products/new', element: <NewProducts /> },
      { path: '/products/:id', element: <ProductDetail /> },
      { path: '/carts', element: <Carts /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
