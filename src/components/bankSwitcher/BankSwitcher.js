import style from "./style.module.scss";
import map from "../../assets/images/credits/map.png";
import { useState } from "react";

const BankSwitcher = () => {
  const [state, setState] = useState(1);
  const renderBankList = () => {
    // if (state === 1) {
    //   return (
    //     <>
    //       <div className={style.MainDescriptionOfCredits}>
    //         <p>«Быстрые покупки онлайн» </p>
    //         <p>
    //           До 31 декабря 2021 года действует специальное предложение на
    //           покупку IPhone 13: процентная ставка 19,02% годовых на срок
    //           кредитования 6 и 12 месяцев.
    //         </p>
    //         <p>
    //           Кредит на остальные продукты можно оформить от 6 месяцев и от 25%
    //           годовых. Вы самостоятельно выбираете срок, в зависимости от ваших
    //           желаний и возможностей.
    //         </p>
    //         <div className={style.description}>
    //           <section className={style.firstBlockOfDescription}>
    //             <img
    //               src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:394:227:0/q:100/plain/s3://pages/7/104/table-icon-5.png@jpeg"
    //               alt="not found"
    //             />
    //             <h6 className={style.firstDescription}>Процентная ставка</h6>
    //             <h6 className={style.secondDescription}>
    //               25% 25,5% 26% 26,5% 27% 27,5% на (6, 12, 18, 24, 30, 36
    //               месяцев). А при покупке iPhone 13 до 31.12.21 - 19,02% годовых
    //               на срок кредитования 6 и 12 месяцев.
    //             </h6>
    //           </section>
    //           <section className={style.secondBlockOfDescription}>
    //             <img
    //               src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:394:227:0/q:100/plain/s3://pages/7/104/table-icon-4.png@jpeg"
    //               alt="not found"
    //             />
    //             <h6 className={style.firsDescription}>Сумма кредита</h6>
    //             <h6 className={style.secondDescription}>
    //               от 50 до 5000 белорусских рублей
    //             </h6>
    //           </section>
    //           <section className={style.firstBlockOfDescription}>
    //             <img
    //               src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:394:227:0/q:100/plain/s3://pages/7/104/table-icon-2.png@jpeg"
    //               alt="not found"
    //             />
    //             <h6 className={style.firsDescription}>Срок кредитования</h6>
    //             <h6 className={style.secondDescription}>
    //               До 36 месяцев включительно
    //             </h6>
    //           </section>
    //           <section className={style.secondBlockOfDescription}>
    //             <img
    //               src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:394:227:0/q:100/plain/s3://pages/7/104/table-icon-1.png@jpeg"
    //               alt="not found"
    //             />
    //             <h6 className={style.firsDescription}>Первоначальный платёж</h6>
    //             <h6 className={style.secondDescription}>
    //               нет / по желанию / частично банковской картой или наличными
    //             </h6>
    //           </section>
    //           <section className={style.firstBlockOfDescription}>
    //             <img
    //               src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:394:227:0/q:100/plain/s3://pages/7/104/table-icon-6.png@jpeg"
    //               alt="not found"
    //             />
    //             <h6 className={style.firsDescription}>Возраст заявителя</h6>
    //             <h6 className={style.secondDescription}>от 18 до 67 лет</h6>
    //           </section>
    //           <section className={style.secondBlockOfDescription}>
    //             <img
    //               src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:394:227:0/q:100/plain/s3://pages/7/104/table-icon-8.png@jpeg"
    //               alt="not found"
    //             />
    //             <h6 className={style.firsDescription}>Стоимость устройства</h6>
    //             <h6 className={style.secondDescription}>
    //               при использовании кредита стоимость устройства увеличивается
    //               на сумму процентов по кредиту в соответствии со ставкой.
    //             </h6>
    //           </section>
    //           <section className={style.firstBlockOfDescription}>
    //             <img
    //               src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:394:227:0/q:100/plain/s3://pages/7/104/table-icon-3.png@jpeg"
    //               alt="not found"
    //             />
    //             <h6 className={style.firsDescription}>Необходимые документы</h6>
    //             <h6 className={style.secondDescription}>
    //               Паспорт. Справка о доходах не требуется
    //             </h6>
    //           </section>
    //           <section className={style.secondBlockOfDescription}>
    //             <img
    //               src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:394:227:0/q:100/plain/s3://pages/7/104/table-icon-7.png@jpeg"
    //               alt="not found"
    //             />
    //             <h6 className={style.firstDescription}>Способы погашения</h6>
    //             <h6 className={style.secondDescription}>
    //               <ul>
    //                 <li>Наличными денежными средствами в кассе Банка</li>
    //                 <li>В Интернет-Банке ОАО «СтатусБанк»</li>
    //                 <li>В Мобильном приложении ОАО «СтатусБанк»</li>
    //                 <li>
    //                   C помощью системы АИС ЕРИП «Расчет» (ЕРИП) путем
    //                   использования:
    //                   <ul className={style.markList}>
    //                     <li>
    //                       касс РУП «Белпочта» – с уплатой комиссии за прием
    //                       платежей в ЕРИП;
    //                     </li>
    //                     <li>
    //                       платежно-справочного терминала (ПСТ) РУП «Белпочта» –
    //                       бесплатно;
    //                     </li>
    //                     <li>
    //                       интернет-банка и мобильного приложения любого другого
    //                       банка, клиентом которого вы являетесь – бесплатно;
    //                     </li>
    //                     <li>
    //                       инфокиосков и банкоматов любого банка – бесплатно;
    //                     </li>
    //                   </ul>
    //                 </li>
    //                 <li>
    //                   Через другие Банки безналичным переводом – с уплатой
    //                   комиссии за перевод, установленной банком- отправителем
    //                   (срок поступления денежных средств в Банк может составлять
    //                   до 5 (пяти) рабочих дней).
    //                 </li>
    //                 <li>
    //                   Обращаем внимание! Погасить кредит Банка в Интернет-банке,
    //                   в Мобильном приложении или через ЕРИП можно за исключением
    //                   времени проведения регламентных работ с 22 часов 15 минут
    //                   до 00 часов 00 минут.
    //                 </li>
    //               </ul>
    //             </h6>
    //           </section>
    //         </div>
    //       </div>
    //       <div className={style.map}>
    //         <p>Где можно приобрести товар в кредит от Статусбанк:</p>
    //         <img src={map} alt="not found" />
    //         <div className={style.adressOfShops}>
    //           <p>Магазин i-Store Ленина, 5</p>
    //           <p>Магазин i-Store Притыцкого, 156 (ТРЦ Green City)</p>
    //           <p>Магазин i-Store Петра Мстиславца 11 (ТРЦ Dana Mall)</p>
    //           <p>Магазин i-Store Победителей, 9 (ТРЦ Galleria Minsk)</p>
    //         </div>
    //       </div>
    //     </>
    //   );
    // } else if (state === 2) {
    //   return <div>Кредит от Альфа-Банка</div>;
    // } else
    if (state === 5) {
      return (
        <>
          <div className={style.MainDescriptionOfCredits}>
            <p>Рассрочка по картам «Халва»</p>
            <h5>Банк-партнер МТБанк</h5>
            <p>
              0% первоначальный взнос, 3 месяца на любой товар, не участвующий в
              акции. Без справок с работы и поручителей.
            </p>

            <div className={style.description}>
              <section className={style.firstBlockOfDescription}>
                <img
                  src="https://cdn0.it4profit.com/pages/7/104/table-icon-1.png"
                  alt="not found"
                />
                <h6 className={style.firstDescription}>
                  Первоначальный платёж
                </h6>
                <h6 className={style.secondDescription}>
                  нет/по желанию/частично картой и собственными средствами
                </h6>
              </section>
              <section className={style.secondBlockOfDescription}>
                <img
                  src="https://cdn0.it4profit.com/pages/7/104/table-icon-2.png"
                  alt="not found"
                />
                <h6 className={style.firstDescription}>Период рассрочки</h6>
                <h6 className={style.secondDescription}>3 месяца;</h6>
              </section>
              <section className={style.firstBlockOfDescription}>
                <img
                  src="https://cdn0.it4profit.com/pages/7/104/table-icon-4.png"
                  alt="not found"
                />
                <h6 className={style.firstDescription}>Размер рассрочки</h6>
                <h6 className={style.secondDescription}>
                  в пределах лимита на карте; максимальный лимит,
                  предоставляемый банком - 6 000 BYN
                </h6>
              </section>
              <section className={style.secondBlockOfDescription}>
                <img
                  src="https://cdn0.it4profit.com/pages/7/104/table-icon-5.png"
                  alt="not found"
                />
                <h6 className={style.firstDescription}>Процентная ставка</h6>
                <h6 className={style.secondDescription}>0,01% годовых</h6>
              </section>
              <section className={style.firstBlockOfDescription}>
                <img
                  src="https://cdn0.it4profit.com/pages/7/104/table-icon-7.png"
                  alt="not found"
                />
                <h6 className={style.firstDescription}>Способы погашения</h6>
                <h6 className={style.secondDescription}>
                  <li>
                    бесплатное пополнение через сервис perevod.mtbank.by с карты
                    Visa и MasterCard любого банка - до 5 000 BYN в месяц;
                  </li>
                  <li>пополнение через систему ЕРИП;</li>
                  <li>интернет-банки и устройства других банков</li>
                </h6>
              </section>
              <section className={style.secondBlockOfDescription}>
                <img
                  src="https://cdn0.it4profit.com/pages/7/104/table-icon-8.png"
                  alt="not found"
                />
                <h6 className={style.firstDescription}>Порядок уплаты</h6>
                <h6 className={style.secondDescription}>
                  Возврат потраченной суммы на карту равными долями до 15 числа
                  каждого месяца. Возможность досрочного погашения без штрафных
                  санкций
                </h6>
              </section>
            </div>
          </div>
          <div className={style.map}>
            <p>Где можно приобрести товар по карте «Халва» </p>
            <img src={map} alt="not found" />
            <div className={style.adressOfShops}>
              <p>Магазин i-Store Ленина, 5</p>
              <p>Магазин i-Store Притыцкого, 156 (ТРЦ Green City)</p>
              <p>Магазин i-Store Петра Мстиславца 11 (ТРЦ Dana Mall)</p>
              <p>Магазин i-Store Победителей, 9 (ТРЦ Galleria Minsk)</p>
            </div>
          </div>
          <div className={style.methodsOfInstallment}>
            <h2 className={style.installment}>Как оформить рассрочку</h2>
            <h3>Если у вас еще нет карты «Халва» от МТБанка:</h3>
            <li>
              Заполните заявление на сайте МТБанка, по телефону или в отделении
              банка. Обязательное официальное трудоустройство на последнем месте
              работы не менее трех месяцев. Запрос рассматривается индивидуально
              и ответ будет озвучен в течение дня. Заберите свою карту или
              закажите доставку.
            </li>
            <li>
              Выберите любой товар в i-Store, не участвующий в акции. Оплатите
              товар картой в любом магазине i-Store либо на нашем сайте в
              пределах лимита. Вы можете осуществить платеж частично
              собственными средствами и частично картой.
            </li>
            <h3>Если у вас есть карта «Халва» от МТБанка:</h3>
            <li>
              Выберите любой товар в i-Store, не участвующий в акции. Оплатите
              товар картой или частично собственными средствами в любом магазине
              i-Store либо на нашем сайте в пределах лимита.
            </li>
          </div>
          <div className={style.contactsBlock}>
            <div className={style.phone}>
              <img
                src="https://cdn0.it4profit.com/pages/7/104/info-phone-item.png"
                alt="not found"
              ></img>
              <h3>Телефон для справки</h3>
              <a href="$">+375 17 229-99-99</a>
            </div>
            <div className={style.bankLink}>
              <img
                src="https://cdn0.it4profit.com/pages/7/104/info-web-item.png"
                alt="not found"
              ></img>
              <h3>Сайт</h3>
              <a href="$">МТБанк</a>
            </div>
          </div>
        </>
      );
    }
  };
  return (
    <>
      <div className={style.banks}>
        <div
          className={state === 1 ? style.bankActive : style.nonActive}
          onClick={() => {
            setState(1);
          }}
        >
          Кредит «Быстрые покупки онлайн» от Статусбанка
        </div>
        <div
          className={state === 2 ? style.bankActive : style.nonActive}
          onClick={() => {
            setState(2);
          }}
        >
          Кредит от Альфа-банка
        </div>

        <div
          className={state === 3 ? style.bankActive : style.nonActive}
          onClick={() => {
            setState(3);
          }}
        >
          Кредит: Банк БелВЭБ 36 месяцев
        </div>
        <div
          className={state === 4 ? style.bankActive : style.nonActive}
          onClick={() => {
            setState(4);
          }}
        >
          Рассрочка: Банк Бел ВЭБ 12 месяцев
        </div>
        <div
          className={state === 5 ? style.bankActive : style.nonActive}
          onClick={() => {
            setState(5);
          }}
        >
          Рассрочка: "Халва" 0-0-3
        </div>
        <div
          className={state === 6 ? style.bankActive : style.nonActive}
          onClick={() => {
            setState(6);
          }}
        >
          Рассрочка: "Карта покупок" 0-0-3
        </div>
        <div
          className={state === 7 ? style.bankActive : style.nonActive}
          onClick={() => {
            setState(7);
          }}
        >
          Рассрочка: "Черепаха" 0-0-8
        </div>
        <div
          className={state === 8 ? style.bankActive : style.nonActive}
          onClick={() => {
            setState(8);
          }}
        >
          Рассрочка: "КартаFUN" 0-0-3
        </div>
      </div>
      <div className={style.wrapperDescriptionOfCredits}>
        {renderBankList()}
      </div>
    </>
  );
};

export default BankSwitcher;
