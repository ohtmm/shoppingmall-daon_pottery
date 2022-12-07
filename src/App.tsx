import React, { useState } from 'react';
import { Outlet, redirect, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import { TProduct } from './pages/Products/NewProducts/NewProducts';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
