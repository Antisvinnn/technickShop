import style from "./style.module.css";

const Devices = () => {
  return (
    <div className={style.wrapperContainerFirstLine}>
      <div className={style.containerFirstLine}>
        <div className={style.wrapperForDevices}>
          <img src="https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:210:210:0/bg:f6f6f6/plain/s3://files/7/i-store-block-8-by-image-1.jpg@jpeg" />
          <div className={style.deviceContent}>
            <p>AirPods.</p>
            <p>Никаких проводов.Никаких сложностей</p>
            <a href="$">Купить</a>
          </div>
        </div>

        <div className={style.wrapperForDevices}>
          <img src="https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:210:210:0/bg:f6f6f6/plain/s3://files/7/main-catalog-banner-iphone-case.png@jpeg" />

          <div className={style.deviceContent}>
            <p>Чехлы на IPhone 13 и Iphone 13 Pro</p>
            <p>Только идеальные пары</p>
            <a href="$">Заказать</a>
          </div>
        </div>
        <div className={style.wrapperForDevices}>
          <img src="https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:210:210:0/bg:f6f6f6/plain/s3://files/7/i-store-block-8-by-image-2.png@jpeg" />

          <div className={style.deviceContent}>
            <p>Карта клиента.</p>
            <p>Совершайте покупки и получайте бонусы на счет</p>
            <a href="$">Подробнее</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Devices;
