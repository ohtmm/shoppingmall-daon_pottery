import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products/Products';
import AuthProvider from './lib/context/authProvider';
import { GlobalStyle } from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { LightTheme } from './styles/theme';
import UserCart from './pages/UserCart/UserCart';
import NewProducts from './pages/Products/NewProducts/NewProducts';
import ProductDetail from './pages/Products/ProductDetail/ProductDetail';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/products/:category', element: <Products /> },
      { path: '/products/new', element: <NewProducts /> },
      { path: '/products/:category/:id', element: <ProductDetail /> },
      { path: '/carts', element: <UserCart /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider theme={LightTheme}>
          <GlobalStyle />
          <RouterProvider router={router} />
        </ThemeProvider>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </React.StrictMode>
);
