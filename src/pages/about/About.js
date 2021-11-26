import style from "./style.module.css";

const About = () => {
  return (
    <>
      <div className={style.headBlock}>
        <span className={style.aboutHead}>О магазине</span>
      </div>

      <div className={style.blockAbout}>
        <h1>
          i-Store (айСтор) – официальный партнёр компании Apple в Беларуси со
          статусом Apple Premium Reseller.
        </h1>
        <h2>
          Статус Apple Premium Reseller даётся только профессионалам в своём
          деле.
        </h2>
        <h3>
          В наших магазинах можно не только купить iPhone, компьютер Mac или
          планшет iPad, а также другую технику Apple и аксессуары для неё.
          i-Store – это прежде всего место, пропитанное атмосферой Apple, в
          котором вам помогут с выбором техники, научат ей пользоваться, дадут
          советы по эксплуатации ваших гаджетов и предложат качественные
          аксессуары.
        </h3>
        <h3>
          В i-Store можно поработать с любым Mac, iPhone или с iPad, посмотреть
          демонстрации недавно появившихся в продаже продуктов Apple или принять
          участие в тренингах, мастер-классах и мероприятиях, посвящённых
          новейшим технологиям. Просто спросите, и мы подберем подходящий курс
          для вас. Мы знаем о продуктах Apple всё. И мы готовы поделиться
          знаниями.
        </h3>
        <h3>
          Наши продавцы — настоящие эксперты в своей области. А качественная,
          удобная, простая в использовании техника Apple доставляет удовольствие
          своим пользователям и практически не требует технической поддержки
        </h3>
        <h2>Наши магазины:</h2>

        <h2>
          Ленина, 5 | <a href="$">+375 (44) 5-576-637</a>
          <br />
          <span>Пн – Вс: 09:00 – 21:00</span>
        </h2>
        <h2>
          Green City
          <span> ул. Притыцкого 156 |</span>
          <a href="$">+375 (44) 5-597-954</a>
          <br />
          <span> Пн – Вс: 09:00 – 21:00</span>
        </h2>
        <h2>
          Dana Mall
          <span> ул. Петра Мстиславца 11 |</span>
          <a href="$">+375 (44) 5-597-445</a>
          <br />
          <span> Пн – Вс: 09:00 – 21:00</span>
        </h2>
        <h2>
          Galleria Minsk
          <span> пр-т Победителей, 9 |</span>
          <a href="$">+375 (44) 5-587-633</a>
          <br />
          <span>Пн – Вс: 10:00 – 22:00</span>
        </h2>
        <h2>В нашем магазине вы всегда купите все, что вам нужно.</h2>
      </div>

      <h1 className={style.headTextInfo}>Форма обратной свзяи</h1>
      <div className={style.userInfo}>
        <input type="text" name="username" placeholder="Ваше имя" />
        <input
          type="phoneNumber"
          name="phoneNumber"
          placeholder="+375294911911"
        />
        <input type="email" name="email" placeholder="Email" />
        <textarea
          className={style.comment}
          type="comment"
          name="comment"
          placeholder="Введите номер карты клиента или комментарий к заказу"
        />
        <div className={style.politics}>
          <input type="radio" name="politics" value="confirm" />Я согласен на
          обработку персональных данных в соответствии с
          <a href="$"> политикой</a>
        </div>
        <a href="$" className={style.send}>
          Отправить
        </a>
        <img
          src="https://www.kv.by/sites/default/files/pictures/userpictures/2019/01/23/2359/foto_10.png"
          alt="not found"
        />
      </div>
    </>
  );
};

export default About;
