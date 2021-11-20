import style from "./style.module.css";

const Contacts = () => {
  return (
    <div className={style.contactsBody}>
      <img
        src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:370/plain/s3://files/7/foot-info-image-by-1.png@webp"
        alt="not found"
      ></img>

      <div className={style.headAdress}>
        <h1>Остались вопросы?</h1>
        <h2>
          Задайте их нашим консультантам по телефонам, указанным ниже или через
          форму обратной связи.
        </h2>
        <h2> Мы знаем об Apple всё!</h2>
        <div className={style.storeAdress}>
          <h2 className={style.storePhone}>
            Интернет-магазин: <br />
            <a href="$">+375 (44) 5-590-366</a>
          </h2>
          <h3>
            Ленина, 5 |<span>+375 (44) 5-576-637 Пн – Вс: 09:00 – 21:00</span>
          </h3>
          <h3>
            Dana Mall |
            <span>
              +375 (44) 5-597-445 ул. Петра Мстиславца, 11; Пн – Вс: 10:00 –
              22:00
            </span>
          </h3>
          <h3>
            Green City |
            <span>
              +375 (44) 5-597-954 ул. Притыцкого, 156; Пн – Вс: 10:00 – 22:00
            </span>
          </h3>
          <h3>
            Galleria Minsk |
            <span>
              +375 (44) 5-587-633 пр-т Победителей, 9; Пн – Вс: 10:00 – 22:00
            </span>
          </h3>
        </div>
        <a href="$" className={style.feedback}>
          Обратная связь
        </a>
        <span className={style.ourMail}>
          или напишите нам на <a href="$">premium@i-store.by</a>
        </span>
      </div>
    </div>
  );
};

export default Contacts;
