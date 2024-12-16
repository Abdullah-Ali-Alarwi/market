import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextApi } from './Context/ThemedComponent';
import CartinfoStyle from './mystyle/CartinfoStyle.css';

const CartInof = () => {
  const Data = useContext(ContextApi); // جلب السياق
  const products = Data.Products; // الوصول إلى قائمة المنتجات من السياق
  const { id } = useParams(); // جلب المعرف من المسار

  // البحث عن المنتج باستخدام find
  const item = products.find((e) => e.id === parseInt(id, 10)); // التأكد من أن id رقمي

  return (
    <div>
      {item ? (
        <div className="CartInfor">
          <div className="detale">
            <h1>تفاصيل المنتج</h1>
            <p>اسم المنتج: {item.name}</p>
            <p>
              الرسع: {item.price} {item.Currency}
            </p>
            <p>الوصف: {item.description}</p>
          </div>
          <div>
            {' '}
            <img src={item.image} alt={item.name} />
          </div>
        </div>
      ) : (
        <h1>المنتج غير موجود</h1>
      )}
    </div>
  );
};

export default CartInof;
