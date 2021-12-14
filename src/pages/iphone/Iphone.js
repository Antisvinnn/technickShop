import style from "./style.module.scss";
import IphoneConfig from "./iphone.config";
import { useLocation } from "react-router";
import RefBreadCrumb from "../../components/refBreadCrumb/RefBreadCrumb";

const Iphone = () => {
  let location = useLocation();
  const ourIphone = (arr) => {
    return arr.map((el, index) => {
      return (
        <div key={index} className={el.classNameContainer}>
          <p className={el.classNameForState}>{el.state}</p>
          <div className={el.classNameForImageWithText}>
            <img src={el.image} alt="not found" />
            <p>{el.title}</p>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <div class={style.container}>
        <RefBreadCrumb path={location.pathname} className={style.breadCrumb} />

        <div className={style.banner}>
          <img
            src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/plain/s3://catalog-categories/7/13/iphone_12_hero_5-up_print__gben_12.png@webp"
            alt="not found"
          />
          <div className={style.bannerText}>
            <p className={style.headerText}>IPhone</p>
            <p className={style.mainText}>Созданы для удобства</p>
          </div>
        </div>
      </div>
      <div className={style.listOfIphone}>{ourIphone(IphoneConfig)}</div>
      <footer>
        <img
          src="https://www.logolynx.com/images/logolynx/76/7655ad50e4860a1b3503a3756d919f6c.jpeg"
          alt="not found"
        />
        <div className={style.description}>
          <p className={style.blackText}>
            i-Store (айСтор) – официальный партнёр компании Apple в Беларуси со
            статусом Apple Premium Reseller, где Вы можете купить iPhone
          </p>
          <p className={style.blackText}>
            Выберите свой iPhone в магазине i-Store
          </p>
          <p className={style.silverText}>
            Не знаете, какую модель iPhone выбрать? Наши онлайн-консультанты с
            радостью помогут вам найти телефон своей мечты. Если вы решите
            совершить покупку в Минске,
          </p>
          <div className={style.show}>
            <a href="$">Показать полностью</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Iphone;
