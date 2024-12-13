import React, { useState } from 'react';
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

function RouldImageList() {
  const [images, setImages] = useState([
    {
      name: 'رجالي',
      image: one,
    },
    {
      name: 'نسائي',
      image: two,
    },
    {
      name: 'بناتي',
      image: three,
    },
    {
      name: 'ولادي',
      image: four,
    },
    {
      name: 'منازل',
      image: five,
    },
    {
      name: 'كهربائيات',
      image: six,
    },
    {
      name: 'طعام',
      image: seven,
    },
    {
      name: 'حيونات',
      image: eight,
    },
    {
      name: 'سيارات',
      image: nine,
    },
    {
      name: 'طبي',
      image: ten,
    },
    {
      name: 'التعليم',
      image: eleven,
    },
    {
      name: 'الرياضه',
      image: twelve,
    },
    {
      name: 'الجمال',
      image: thirteen,
    },
    {
      name: 'الصحه',
      image: fourteen,
    },
    {
      name: 'الوسامه',
      image: fifteen,
    },
    {
      name: 'الاطفال',
      image: sixteen,
    },
    {
      name: 'البنات',
      image: three,
    },
    {
      name: 'اولاد',
      image: four,
    },
    {
      name: 'اكترونيات',
      image: five,
    },
    {
      name: 'اكسسوارات',
      image: six,
    },
  ]);

  return (
    <div className="Roud-list">
      {images.map((item, index) => (
        <div key={index} className="box">
          <h5>{item.name}</h5>
          <img
            src={item.image} // عرض الصور مباشرةً
            alt={item.name}
          />
        </div>
      ))}
    </div>
  );
}

export default RouldImageList;
