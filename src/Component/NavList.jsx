import React, { useState } from 'react';
import NavListSyle from '../mystyle/NavList..css';
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

function NavList() {
  const [images] = useState([
    { name: 'رجالي', image: one },
    { name: 'نسائي', image: two },
    { name: 'بناتي', image: three },
    { name: 'ولادي', image: four },
    { name: 'منازل', image: five },
    { name: 'كهربائيات', image: six },
    { name: 'طعام', image: seven },
    { name: 'حيونات', image: eight },
    { name: 'سيارات', image: nine },
    { name: 'طبي', image: ten },
    { name: 'التعليم', image: eleven },
    { name: 'الرياضه', image: twelve },
    { name: 'الجمال', image: thirteen },
    { name: 'الصحه', image: fourteen },
    { name: 'الوسامه', image: fifteen },
    { name: 'الاطفال', image: sixteen },
    { name: 'البنات', image: three },
    { name: 'اولاد', image: four },
    { name: 'اكترونيات', image: five },
    { name: 'اكسسوارات', image: six },
  ]);

  const scrollContent = (direction) => {
    const scrollable = document.getElementById('scrollable');
    const scrollAmount = 200; // المسافة التي يتم التمرير بها
    if (direction === 'left') {
      scrollable.scrollLeft -= scrollAmount;
    } else {
      scrollable.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="Navlist">
      <button className="scroll-btn left" onClick={() => scrollContent('left')}>
        &lt;
      </button>
      <ul className="scrollable" id="scrollable">
        {images.map((e, index) => (
          <li key={index} className="list-item">
            <span>{e.name}</span>
          </li>
        ))}
      </ul>
      <button
        className="scroll-btn right"
        onClick={() => scrollContent('right')}
      >
        &gt;
      </button>
    </div>
  );
}

export default NavList;
