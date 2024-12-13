import React, { useContext } from 'react';
import { TheThem } from './Context/ThemedComponent';
import Nav from './Component/Nav';
import NavList from './Component/NavList';
import RouldImageList from './Component/RouldImageList';
import Cart from './Component/Cart';
import Footer from './Component/Footer';

export default function App() {
  const contextThem = useContext(TheThem);
  console.log(contextThem);
  return (
    <div className={`${contextThem.them}`}>
      <div>
        <Nav />
        <NavList />
        <div className="Container">
          <RouldImageList />
          <Cart />
        </div>
        <Footer />
      </div>
    </div>
  );
}
