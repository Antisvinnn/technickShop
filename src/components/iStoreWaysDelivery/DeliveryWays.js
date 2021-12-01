import style from "./style.module.scss";

const DeliveryWays = () => {
  return (
    <>
      <div className={style.deliveryBlock}>
        <div className={style.serviceBlock}>
          <img
            src="https://cdn3.iconfinder.com/data/icons/user-interface-730/32/Credit_Card-256.png"
            alt="not found"
          ></img>
          <a href="$">Рассрочка в кредит</a>
          <h3>
            С нашими кредитными предложениями продукция Apple действительно
            впишется в любой бюджет.
          </h3>
        </div>
        <div className={style.serviceBlock}>
          <img
            src="https://cdn2.iconfinder.com/data/icons/farming-garden-1/32/farming-20-256.png"
            alt="not found"
          ></img>
          <a href="$">Доставка по Беларуси</a>
          <h3>
            Мы доставляем продукты Apple более чем в 130 городов Беларуси.
            Доставка по Минску - бесплатная.
          </h3>
        </div>
        <div className={style.serviceBlock}>
          <img
            src="https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-292_tools_settings-256.png"
            alt="not found"
          ></img>
          <a href="$">Сервис i-Store</a>
          <h3>
            Мы поможем вам разобраться с вашим Mac, iPhone или iPad, какие бы
            вопросы у вас ни возникли.
          </h3>
        </div>
        <div className={style.serviceBlock}>
          <img
            src="https://cdn2.iconfinder.com/data/icons/cinema-22/128/tv_tv_screencinema_cinematography_display_screen_television-256.png"
            alt="not found"
          ></img>
          <a href="$">Видеоконсультации</a>
          <h3>
            Ваш виртуальный эксперт Apple. Закажите видеоконсультацию прямо из
            магазина.
          </h3>
        </div>
      </div>
      <div className={style.userInfo}>
        <div className={style.infoMessage}>
          <h1>Будьте в курсе всегда!</h1>
          <h2>
            Подпишитесь на рассылку и узнавайте первым о новых акциях и
            спецпредложениях магазина!
          </h2>
        </div>
        <div>
          <>
            <input
              className={style.userName}
              type="text"
              name="username"
              placeholder="Ваше имя"
            />
            <input
              className={style.email}
              type="email"
              name="email"
              placeholder="Ваш email"
            />
            <a href="$" className={style.subscribe}>
              Подписаться
            </a>
          </>
          <div className={style.politics}>
            <input type="radio" name="politics" value="confirm" />Я согласен на
            обработку персональных данных в соответствии с
            <a href="$"> политикой</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryWays;
