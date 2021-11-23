import style from "./style.module.css";

const Header = () => {
  return (
    <>
      <div className={style.topHead}>
        <a href="$">Не открадывайте мечты на потом: Black Friday в i-Store.</a>
        <a href="$">Выгода до 1570 BYN</a>
        <a href="$">Подробнее</a>
      </div>
      <div className={style.headContacts}>
        <a href="$">Оплата и доставка</a>
        <a href="$">Адреса магазинов</a>
        <a href="$">Кредит</a>
        <a href="$">Юр. лицам </a>
        <div className={style.workTime}>
          <img
            src="https://cdn0.iconfinder.com/data/icons/eon-basketball-i-1/32/time_clock_deadline_watch-256.png"
            alt="not found"
          ></img>
          <span>
            9:00 - 21:00 (пн-пт);
            <br /> 10:00 - 19:00 (сб-вс)
          </span>
        </div>
        <a href="$">
          <img
            src="https://cdn4.iconfinder.com/data/icons/communication-163/32/phone-256.png"
            alt="not found"
          ></img>
          +375 (44) 5-590-364
        </a>
        <a href="$" className={style.persArea}>
          <img
            src="https://cdn2.iconfinder.com/data/icons/lightly-icons/30/user-240.png"
            alt="not found"
          ></img>
          Личный кабинет
        </a>
      </div>
      <div className={style.storeLinks}>
        <img
          className={style.mainImgOfLinks}
          src="https://cdn1.iconfinder.com/data/icons/banking-36/128/Mobile_phone_apple_android_windows-256.png"
          alt="not found"
        ></img>
        <img
          className={style.searchImg}
          src="https://cdn2.iconfinder.com/data/icons/lightly-icons/30/search-240.png"
          alt="not found"
        ></img>
        <a href="$">Mac</a>
        <a href="$">iPad</a>
        <a href="$">iPhone</a>
        <a href="$">Watch</a>
        <a href="$">TV</a>
        <a href="$">AirPods</a>
        <a href="$">Аудио</a>
        <a href="$">Аксессуары</a>
        <a href="$">BnO</a>
        <a href="$">Услуги</a>
        <a href="$">Акции</a>
        <a href="$">Блог</a>
        <div className={style.rightLinks}>
          <a href="$">
            <img
              src="https://cdn3.iconfinder.com/data/icons/finance-banking-1/64/07_law_scales-256.png"
              alt="not found"
            ></img>
          </a>
          <a href="$">
            <img
              src="https://cdn0.iconfinder.com/data/icons/business-office-1-7/55/35-256.png"
              alt="not found"
            ></img>
          </a>
          <a href="$">
            <img
              src="https://cdn1.iconfinder.com/data/icons/aami-web-internet/64/aami2-48-256.png"
              alt="not found"
            ></img>
          </a>
        </div>
      </div>
      <a href="$">
        <img
          className={style.news}
          src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:1400:600:0/bg:000000/q:100/plain/s3://complex-images/7/2714/2100-ru3.png@jpeg"
          alt="not found"
        ></img>
      </a>
    </>
  );
};

export default Header;
