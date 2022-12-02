import React, { useContext, useEffect } from 'react';
import { Outlet, redirect, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
