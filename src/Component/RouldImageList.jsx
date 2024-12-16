import React, { useContext } from 'react';
import { ContextApi } from '../Context/ThemedComponent';

function RouldImageList() {
  const Data = useContext(ContextApi);
  const products = Data.Products;
  return (
    <div className="Roud-list">
      {products.map((item, index) => (
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
