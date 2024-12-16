/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';
import style from '../mystyle/RoudlistStyle.css';
import one from '../list-Image/1.webp';
import two from '../list-Image/2.webp';
import three from '../list-Image/3.webp';
import four from '../list-Image/4.webp';
import five from '../list-Image/5.webp';
import six from '../list-Image/6.webp';
import seven from '../list-Image/7.webp';
import eight from '../list-Image/8.webp';
import nine from '../list-Image/9.webp';
import ten from '../list-Image/10.webp';
import eleven from '../list-Image/11.webp';
import twelve from '../list-Image/12.webp';
import thirteen from '../list-Image/13.webp';
import fourteen from '../list-Image/14.webp';
import fifteen from '../list-Image/15.webp';
import sixteen from '../list-Image/16.webp';

// إنشاء سياق الثيم
const ContextApi = createContext();
export { ContextApi };

function ThemedComponent({ children }) {
  // حالة الثيم
  const [them, setThem] = useState('light');
  const [itemState, setItemStat] = useState('');

  // حالة المنتجات
  const [Products, setProducts] = useState([
    {
      id: 1,
      name: 'رجالي',
      image: one,
      description:
        'the product is made with good quality make sure to have it its good product ',
      price: 1000,
      Currency: 'YER',
    },
    {
      id: 2,
      name: 'نسائي',
      image: two,
      description:
        'the product is made with good quality make sure to have it its good product ',
      price: 23000,
      Currency: 'YER',
    },
    {
      id: 3,
      name: 'بناتي',
      image: three,
      description:
        'the product is made with good quality make sure to have it its good product ',
      price: 5000,
      Currency: 'YER',
    },
    {
      id: 4,
      name: 'ولادي',
      image: four,
      description:
        'the product is made with good quality make sure to have it its good product ',
      price: 4000,
      Currency: 'YER',
    },
    {
      id: 5,
      name: 'منازل',
      image: five,
      description:
        'the product is made with good quality make sure to have it its good product ',
      price: 30,
      Currency: 'SAR',
    },
    {
      id: 6,
      name: 'كهربائيات',
      image: six,
      description:
        'the product is made with good quality make sure to have it its good product ',
      price: 100,
      Currency: 'SAR',
    },
    {
      id: 7,
      name: 'طعام',
      image: seven,
      description:
        'the product is made with good quality make sure to have it its good product ',
      price: 50,
      Currency: 'SAR',
    },
    {
      id: 8,
      name: 'حيونات',
      image: eight,
      description:
        'the product is made with good quality make sure to have it its good product ',
      price: 40,
      Currency: 'SAR',
    },
    {
      id: 9,
      name: 'سيارات',
      image: nine,
      description:
        'the product is made with good quality make sure to have it its good product ',
      price: 30,
      Currency: 'USD',
    },
    {
      id: 10,
      name: 'طبي',
      image: ten,
      description:
        'the product is made with good quality make sure to have it its good product ',
      price: 5,
      Currency: 'USD',
    },
    {
      id: 11,
      name: 'التعليم',
      image: eleven,
      description:
        'the product is made with good quality make sure to have it its good product ',
      price: 40,
      Currency: 'USD',
    },
    {
      id: 12,
      name: 'الرياضه',
      image: twelve,
      description:
        'the product is made with good quality make sure to have it its good product ',
      price: 30,
      Currency: 'USD',
    },
    {
      id: 13,
      name: 'الجمال',
      image: thirteen,
      description:
        'the product is made with good quality make sure to have it its good product ',
      price: 22,
      Currency: 'USD',
    },
    {
      id: 14,
      name: 'الصحه',
      image: fourteen,
      description:
        'the product is made with good quality make sure to have it its good product ',
      price: 10,
      Currency: 'USD',
    },
    {
      id: 15,
      name: 'الوسامه',
      image: fifteen,
      description:
        'the product is made with good quality make sure to have it its good product ',
      price: 6,
      Currency: 'USD',
    },
    {
      id: 16,
      name: 'الاطفال',
      image: sixteen,
      description:
        'the product is made with good quality make sure to have it its good product ',
      price: 20,
      Currency: 'USD',
    },
    {
      id: 17,
      name: 'البنات',
      image: three,
      description:
        'the product is made with good quality make sure to have it its good product ',
      price: 5,
      Currency: 'USD',
    },
    {
      id: 18,
      name: 'اولاد',
      image: four,
      description:
        'the product is made with good quality make sure to have it its good product ',
      price: 45600,
      Currency: 'YER',
    },
    {
      id: 19,
      name: 'اكترونيات',
      image: five,
      description:
        'the product is made with good quality make sure to have it its good product ',
      price: 20,
      Currency: 'USD',
    },
    {
      id: 20,
      name: 'اكسسوارات',
      image: six,
      description:
        'the product is made with good quality make sure to have it its good product ',
      price: 30004,
      Currency: 'YER',
    },
  ]);

  // basket
  const [basket, SetBasket] = useState([
    {
      id: 3,
      name: 'بناتي',
      image: three,
      description:
        'the product is made with good quality make sure to have it its good product ',
      price: 5000,
      Currency: 'YER',
    },
  ]);

  // دالة لتغيير الثيم
  function toggole() {
    setThem((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    console.log(them);
  }

  function calculateTotalPrice() {
    return basket.reduce((total, product) => total + product.price, 0);
  }
  function removeFromBasket(id) {
    SetBasket((prevBasket) => prevBasket.filter((item) => item.id !== id));
  }

  function addToBasket(product) {
    // التحقق من وجود المنتج مسبقًا
    if (basket.find((item) => item.id === product.id)) {
      setItemStat('العنصر مضاف من قبل ');
      return;
    }

    // إضافة المنتج إلى السلة
    SetBasket((prevBasket) => [...prevBasket, product]);
    setItemStat(`تم اضافة العنصر الى السلة ${product}`);
  }

  return (
    <ContextApi.Provider
      value={{
        them,
        toggole,
        Products,
        setProducts,
        itemState,
        basket,
        SetBasket,
        calculateTotalPrice,
        removeFromBasket, // إضافة الدالة هنا
        addToBasket, // إضافة الدالة هنا
      }}
    >
      {children}
    </ContextApi.Provider>
  );
}

export default ThemedComponent;
