/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextApi } from '../Context/ThemedComponent';
import cartsyle from '../mystyle/CartSyle.css';
import Style from '../mystyle/Basket.css';

function Basket() {
  const Data = useContext(ContextApi);
  const products = Data.Products;
  const { basket } = useContext(ContextApi); // الوصول إلى منتجات من السياق
  const { Products, calculateTotalPrice } = useContext(ContextApi);
  const { removeFromBasket } = useContext(ContextApi);

  console.log(Data);

  return (
    <div className={`${Data.them} Basket`}>
      <div className="info">
        <h1>سلة المشتريات</h1>
        <h3>
          عدد المنتجات : <span>{basket.length}</span>
        </h3>
        <h3>إجمالي السعر: {calculateTotalPrice()} YER</h3>
      </div>
      <div className="items">
        {basket.map((e, index) => (
          <div key={index} className="">
            <div className="Cart">
              <img src={e.image} alt="" />
              <div className="CartBody">
                <h6>{e.name}</h6>
                <p>
                  السعر <span>{e.price}</span>
                  <span>{` ${e.Currency}`}</span>
                </p>
                <div className="buttonDiv">
                  <button onClick={() => removeFromBasket(e.id)}>إزالة</button>
                  <Link to={`/${e.id}`}>تفاصيل</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Basket;
