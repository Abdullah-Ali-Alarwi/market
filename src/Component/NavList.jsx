import React, { useContext } from 'react';
import { ContextApi } from '../Context/ThemedComponent';
import NavListSyle from '../mystyle/NavList..css';

function NavList() {
  const Data = useContext(ContextApi);
  const products = Data.Products;
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
        {products.map((e, index) => (
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
