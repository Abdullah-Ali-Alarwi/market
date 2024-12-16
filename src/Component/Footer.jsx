import React, { useContext } from 'react';
import { ContextApi } from '../Context/ThemedComponent';
import footersyle from '../mystyle/footerSyle.css';
import Search from '../SVG icons/magnifying-glass-solid.svg';
import tweeter from '../SVG icons/twitter-brands-solid.svg';
import facebook from '../SVG icons/facebook-brands-solid.svg';
import instgram from '../SVG icons/instagram-brands-solid.svg';
function Footer() {
  const Data = useContext(ContextApi);
  return (
    <div className={`containerFooter ${Data.them}`}>
      <div className={`footer`}>
        <div className="left">
          <div className="col">
            <h6>معلومات الشركة</h6>
            <p>
              حول شي ان اتصال بنا كن أعضاءنا لوق أزياء مسؤولية اجتماعية وظائف
            </p>
          </div>
          <div className="col">
            <h6>مركز & المساعدة</h6>
            <p>
              كيفية الطلب معلومات الشحن المنتجات المسترجعة استرداد المبلغ مرجع
              المقاس الأسئلة المتكررة شي إن VIP كيفية تتبع طلب
            </p>
          </div>
          <div className="col">
            <h6> خدمة الزبائن</h6>
            <p>
              طريقة الدفع الدفع عند الإستلام بطاقة هدية برنامج كسب النقاط SHEIN
            </p>
          </div>
        </div>
        <div className="right">
          <div className="follow">
            <h5>تابعنا على</h5>
            <div>
              <img src={tweeter} alt="" />
              <img src={facebook} alt="" />
              <img src={instgram} alt="" />
            </div>
          </div>
          <div className="subionf">
            <h5> شتركي مع شي إن لتصلك أخبار الموضة</h5>
            <div className="ipnudiv">
              <input type="text" />
              <div>اشتراك</div>
            </div>
          </div>
          <div className="subionf">
            <div className="ipnudiv">
              <input type="text" />
              <div>اشتراك</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
