import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextApi } from '../Context/ThemedComponent';
// eslint-disable-next-line no-unused-vars
import NavStyle from '../mystyle/NaveStyle.css';
import Searchicon from '../SVG icons/magnifying-glass-solid.svg';
import cart from '../SVG icons/cart-arrow-down-solid.svg';
import glbal from '../SVG icons/globe-solid.svg';
import heart from '../SVG icons/heart-solid.svg';
import headPhone from '../SVG icons/headphones-simple-solid.svg';
import user from '../SVG icons/user-solid.svg';
import moon from '../SVG icons/moon-solid.svg';
import sun from '../SVG icons/sun-solid.svg';

function Nav() {
  const { them, toggole } = useContext(ContextApi);
  const { basket } = useContext(ContextApi); // الوصول إلى منتجات من السياق
  return (
    <div>
      <nav className={them}>
        <div className="logDiv">
          <h1 style={{ color: them === 'light' ? 'black' : 'white' }}>
            ShowBadak
          </h1>
        </div>
        <div className="SearchNav">
          <input type="text" placeholder="بحث " />
          <div className="logoSearch">
            <img src={Searchicon} alt="Search icon" />
          </div>
        </div>

        <div className="iconsNav">
          <img src={user} alt="User icon" />
          <div className="heartIcon">
            <span>10</span>
            <img src={heart} alt="Cart icon" />
          </div>

          <Link to={`./basket`}>
            {' '}
            <div className="Cart-icon">
              <span>{basket.length}</span>
              <img src={cart} alt="Cart icon" />
            </div>
          </Link>

          <img src={headPhone} alt="Cart icon" />
          <div className="glbal-icon">
            <img src={glbal} alt="User icon" />

            <img src={them === 'dark' ? moon : sun} alt="" onClick={toggole} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
