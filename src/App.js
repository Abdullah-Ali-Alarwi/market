import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { ContextApi } from './Context/ThemedComponent';
import Nav from './Component/Nav';
import NavList from './Component/NavList';
import Footer from './Component/Footer';

export default function App() {
  const Data = useContext(ContextApi); // استخدام السياق
  const { them } = useContext(ContextApi);
  console.log(Data); // عرض بيانات السياق
  return (
    <div className={them}>
      <Nav />
      <NavList />

      <Outlet />
      <Footer />
    </div>
  );
}
