/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextApi } from '../Context/ThemedComponent';
import Cartsyle from '../mystyle/CartSyle.css';

function Cart() {
  const { Products, addToBasket, them, basket, itemState } =
    useContext(ContextApi);

  return (
    <div className={`cartConteiner  `}>
      <span> عدد العناصر المضافة {basket.length}</span>
      {Products.map((e, index) => (
        <div key={index} className="Cart">
          <img src={e.image} alt={e.name} />
          <div className="CartBody">
            <h6>{e.name}</h6>
            <p>
              السعر <span>{e.price}</span>
              <span>{` ${e.Currency}`}</span>
            </p>
            <div className="buttonDiv">
              <button onClick={() => addToBasket(e)}>إضافة للسلة</button>

              <Link to={`/${e.id}`}>تفاصيل</Link>
            </div>
          </div>
        </div>
      ))}
      <h1> {itemState}</h1>
    </div>
  );
}

export default Cart;
