import { Link } from "react-router-dom";
import style from "./style.module.scss";
import map from "../../assets/images/credits/map.png";
import house from "../../assets/images/credits/pngegg.png";

const Credits = () => {
  return (
    <>
      <div class={style.container}>
        <div className={style.nav}>
          <img className={style.house} src={house} alt="not found" />
          <div class={style.arrowBottomLine}></div>
          <Link to="/information">информация</Link>
          <div class={style.arrowBottomLine}></div>
          <p>кредит</p>
        </div>
        <div class={style.mainWord}>
          <h1>Кредит</h1>
        </div>
      </div>
      <div class={style.banner}>
        <img
          src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:394:227:0/q:100/plain/s3://pages/7/104/mbp13print.png@jpeg"
          alt="not found"
        />
        <p>Легко впишется в ваш бюджет</p>
      </div>
      <div class={style.banks}>
        <a href="$">Кредит «Быстрые покупки онлайн» от Статусбанка</a>
        <a href="$">Кредит от Альфа-банка</a>
        <a href="$">Кредит: Банк БелВЭБ 36 месяцев</a>
        <a href="$">Рассрочка: Банк Бел ВЭБ 12 месяцев</a>
        <a href="$">Рассрочка: "Халва" 0-0-3</a>
        <a href="$">Рассрочка: "Карта покупок" 0-0-3</a>
        <a href="$">Рассрочка: "Черепаха" 0-0-8</a>
        <a href="$">Рассрочка: "КартаFUN" 0-0-3</a>
      </div>
      <div className={style.wrapperDescriptionOfCredits}>
        <div className={style.MainDescriptionOfCredits}>
          <p>«Быстрые покупки онлайн» </p>
          <p>
            До 31 декабря 2021 года действует специальное предложение на покупку
            IPhone 13: процентная ставка 19,02% годовых на срок кредитования 6 и
            12 месяцев.
          </p>
          <p>
            Кредит на остальные продукты можно оформить от 6 месяцев и от 25%
            годовых. Вы самостоятельно выбираете срок, в зависимости от ваших
            желаний и возможностей.
          </p>
          <div className={style.description}>
            <section className={style.firstBlockOfDescription}>
              <img
                src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:394:227:0/q:100/plain/s3://pages/7/104/table-icon-5.png@jpeg"
                alt="not found"
              />
              <h6 className={style.firstDescription}>Процентная ставка</h6>
              <h6 className={style.secondDescription}>
                25% 25,5% 26% 26,5% 27% 27,5% на (6, 12, 18, 24, 30, 36
                месяцев). А при покупке iPhone 13 до 31.12.21 - 19,02% годовых
                на срок кредитования 6 и 12 месяцев.
              </h6>
            </section>
            <section className={style.secondBlockOfDescription}>
              <img
                src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:394:227:0/q:100/plain/s3://pages/7/104/table-icon-4.png@jpeg"
                alt="not found"
              />
              <h6 className={style.firsDescription}>Сумма кредита</h6>
              <h6 className={style.secondDescription}>
                от 50 до 5000 белорусских рублей
              </h6>
            </section>
            <section className={style.firstBlockOfDescription}>
              <img
                src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:394:227:0/q:100/plain/s3://pages/7/104/table-icon-2.png@jpeg"
                alt="not found"
              />
              <h6 className={style.firsDescription}>Срок кредитования</h6>
              <h6 className={style.secondDescription}>
                До 36 месяцев включительно
              </h6>
            </section>
            <section className={style.secondBlockOfDescription}>
              <img
                src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:394:227:0/q:100/plain/s3://pages/7/104/table-icon-1.png@jpeg"
                alt="not found"
              />
              <h6 className={style.firsDescription}>Первоначальный платёж</h6>
              <h6 className={style.secondDescription}>
                нет / по желанию / частично банковской картой или наличными
              </h6>
            </section>
            <section className={style.firstBlockOfDescription}>
              <img
                src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:394:227:0/q:100/plain/s3://pages/7/104/table-icon-6.png@jpeg"
                alt="not found"
              />
              <h6 className={style.firsDescription}>Возраст заявителя</h6>
              <h6 className={style.secondDescription}>от 18 до 67 лет</h6>
            </section>
            <section className={style.secondBlockOfDescription}>
              <img
                src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:394:227:0/q:100/plain/s3://pages/7/104/table-icon-8.png@jpeg"
                alt="not found"
              />
              <h6 className={style.firsDescription}>Стоимость устройства</h6>
              <h6 className={style.secondDescription}>
                при использовании кредита стоимость устройства увеличивается на
                сумму процентов по кредиту в соответствии со ставкой.
              </h6>
            </section>
            <section className={style.firstBlockOfDescription}>
              <img
                src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:394:227:0/q:100/plain/s3://pages/7/104/table-icon-3.png@jpeg"
                alt="not found"
              />
              <h6 className={style.firsDescription}>Необходимые документы</h6>
              <h6 className={style.secondDescription}>
                Паспорт. Справка о доходах не требуется
              </h6>
            </section>
            <section className={style.secondBlockOfDescription}>
              <img
                src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:394:227:0/q:100/plain/s3://pages/7/104/table-icon-7.png@jpeg"
                alt="not found"
              />
              <h6 className={style.firstDescription}>Способы погашения</h6>
              <h6 className={style.secondDescription}>
                <ul>
                  <li>Наличными денежными средствами в кассе Банка</li>
                  <li>В Интернет-Банке ОАО «СтатусБанк»</li>
                  <li>В Мобильном приложении ОАО «СтатусБанк»</li>
                  <li>
                    C помощью системы АИС ЕРИП «Расчет» (ЕРИП) путем
                    использования:
                    <ul className={style.markList}>
                      <li>
                        касс РУП «Белпочта» – с уплатой комиссии за прием
                        платежей в ЕРИП;
                      </li>
                      <li>
                        платежно-справочного терминала (ПСТ) РУП «Белпочта» –
                        бесплатно;
                      </li>
                      <li>
                        интернет-банка и мобильного приложения любого другого
                        банка, клиентом которого вы являетесь – бесплатно;
                      </li>
                      <li>
                        инфокиосков и банкоматов любого банка – бесплатно;
                      </li>
                    </ul>
                  </li>
                  <li>
                    Через другие Банки безналичным переводом – с уплатой
                    комиссии за перевод, установленной банком- отправителем
                    (срок поступления денежных средств в Банк может составлять
                    до 5 (пяти) рабочих дней).
                  </li>
                  <li>
                    Обращаем внимание! Погасить кредит Банка в Интернет-банке, в
                    Мобильном приложении или через ЕРИП можно за исключением
                    времени проведения регламентных работ с 22 часов 15 минут до
                    00 часов 00 минут.
                  </li>
                </ul>
              </h6>
            </section>
          </div>
        </div>
        <div className={style.map}>
          <p>Где можно приобрести товар в кредит от Статусбанк:</p>
          <img src={map} alt="not found" />
          <div className={style.adressOfShops}>
            <p>Магазин i-Store Ленина, 5</p>
            <p>Магазин i-Store Притыцкого, 156 (ТРЦ Green City)</p>
            <p>Магазин i-Store Петра Мстиславца 11 (ТРЦ Dana Mall)</p>
            <p>Магазин i-Store Победителей, 9 (ТРЦ Galleria Minsk)</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Credits;
