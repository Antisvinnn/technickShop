import style from "./style.module.scss";
import map from "../../assets/images/credits/map.png";
import people from "../../assets/images/credits/people.png";
import comp from "../../assets/images/credits/comp.png";
import compwithoutinet from "../../assets/images/credits/compwithoutinet.png";

import { useState } from "react";
import { Button } from "antd";

const BankSwitcher = () => {
  const [state, setState] = useState(1);
  const renderBankList = () => {
    if (state === 1) {
      return (
        <>
          <div className={style.MainDescriptionOfCredits}>
            <p>«Быстрые покупки онлайн» </p>
            <p>
              До 31 декабря 2021 года действует специальное предложение на
              покупку IPhone 13: процентная ставка 19,02% годовых на срок
              кредитования 6 и 12 месяцев.
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
                  при использовании кредита стоимость устройства увеличивается
                  на сумму процентов по кредиту в соответствии со ставкой.
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
                      Обращаем внимание! Погасить кредит Банка в Интернет-банке,
                      в Мобильном приложении или через ЕРИП можно за исключением
                      времени проведения регламентных работ с 22 часов 15 минут
                      до 00 часов 00 минут.
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
        </>
      );
    } else if (state === 2) {
      return (
        <>
          <div className={style.MainDescriptionOfCredits}>
            <p>
              Кредит от Альфа-банка
              <br /> Выгодный кредит от Альфа-банка
            </p>

            <div className={style.description}>
              <section className={style.firstBlockOfDescription}>
                <img
                  src="https://cdn0.it4profit.com/pages/7/104/table-icon-5.png"
                  alt="not found"
                />
                <h6 className={style.firstDescription}>Процентная ставка</h6>
                <h6 className={style.secondDescription}>27,9% годовых</h6>
              </section>
              <section className={style.secondBlockOfDescription}>
                <img
                  src="https://cdn0.it4profit.com/pages/7/104/table-icon-4.png"
                  alt="not found"
                />
                <h6 className={style.firstDescription}>Сумма кредита</h6>
                <h6 className={style.secondDescription}>
                  от 50 до 10 000 руб. (ИП и лиц, работающих у ИП – до 5 000
                  руб. включительно)
                </h6>
              </section>
              <section className={style.firstBlockOfDescription}>
                <img
                  src="https://cdn0.it4profit.com/pages/7/104/table-icon-2.png"
                  alt="not found"
                />
                <h6 className={style.firstDescription}>Срок кредитования</h6>
                <h6 className={style.secondDescription}>
                  срок кредитования от 3 до 48 месяцев
                </h6>
              </section>
              <section className={style.secondBlockOfDescription}>
                <img
                  src="https://cdn0.it4profit.com/pages/7/104/table-icon-1.png"
                  alt="not found"
                />
                <h6 className={style.firstDescription}>
                  Первоначальный платёж
                </h6>
                <h6 className={style.secondDescription}>
                  без обязательного первоначального взноса
                </h6>
              </section>
              <section className={style.firstBlockOfDescription}>
                <img
                  src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:394:227:0/q:100/plain/s3://pages/7/104/table-icon-6.png@webp"
                  alt="not found"
                />
                <h6 className={style.firstDescription}>Возраст заявителя</h6>
                <h6 className={style.secondDescription}>
                  от 21 до 64 лет на момент погашения кредита
                </h6>
              </section>
              <section className={style.secondBlockOfDescription}>
                <img
                  src="https://cdn0.it4profit.com/pages/7/104/table-icon-8.png"
                  alt="not found"
                />
                <h6 className={style.firstDescription}>Стоимость устройства</h6>
                <h6 className={style.secondDescription}>
                  при использовании кредита стоимость устройства увеличивается
                  на сумму процентов по кредиту в соответствии со ставкой.
                </h6>
              </section>
              <section className={style.firstBlockOfDescription}>
                <img
                  src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:394:227:0/q:100/plain/s3://pages/7/104/table-icon-3.png@webp"
                  alt="not found"
                />
                <h6 className={style.firstDescription}>
                  Необходимые документы
                </h6>
                <h6 className={style.secondDescription}>
                  Паспорт гражданина РБ, либо вид на жительство в РБ
                  иностранного гражданина.
                </h6>
              </section>

              <section className={style.secondBlockOfDescription}>
                <img
                  src="https://cdn0.it4profit.com/pages/7/104/table-icon-7.png"
                  alt="not found"
                />
                <h6 className={style.firstDescription}>Способы погашения</h6>
                <h6 className={style.secondDescription}>
                  <li>В мобильном банке «INSYNC.BY»</li>
                  <li>
                    Инфокиоски, банкоматы, интернет-банк Банков, отделения РУП
                    «Белпочта», подключенных к системе ЕРИП
                  </li>
                  <li>С помощью сервиса онлайн переводов на сайте Банка</li>
                  <li>В отделениях ЗАО «Альфа Банк».</li>
                </h6>
              </section>
            </div>
          </div>
          <div className={style.map}>
            <p>Где можно приобрести товар в кредит от Альфа-банка: </p>
            <img src={map} alt="not found" />
            <div className={style.adressOfShops}>
              <p>Магазин i-Store Ленина, 5</p>
              <p>Магазин i-Store Притыцкого, 156 (ТРЦ Green City)</p>
              <p>Магазин i-Store Петра Мстиславца 11 (ТРЦ Dana Mall)</p>
              <p>Магазин i-Store Победителей, 9 (ТРЦ Galleria Minsk)</p>
            </div>
          </div>
        </>
      );
    } else if (state === 3) {
      return (
        <>
          <h1>Онлайн кредитование «Новае стагоддзе»</h1>
          <div className={style.newCentury}>
            <div>
              <img
                className={style.styleCreditCard}
                src="https://cdn0.it4profit.com/files/7/credit_card_3_1.svg"
                alt="not found"
              />
            </div>
            <div>
              <p>ПРОЦЕНТНАЯ СТАВКА</p>
              <span>
                <h1>20,29%</h1> годовых (на 6, 18, 24 месяцев),
                <br />
              </span>
              <span>
                <h1>29,9%</h1>годовых (на 36 месяцев)
              </span>
              <p>CУММА КРЕДИТА</p>
              <span>
                от <h1>50</h1> до <h1>7000</h1> белорусский рублей
              </span>
              <p>СРОК КРЕДИТОВАНИЯ</p>
              <h3>До 36 месяцев включительно</h3>
              <Button type="primary">ИНСТРУКЦИЯ</Button>
            </div>
          </div>
          <div className={style.wrapperForTopics}>
            <div className={style.topic}>
              <img src={people} alt="not found" />
              <p>Без поручителей</p>
            </div>
            <div className={style.topic}>
              <img src={comp} alt="not found" />
              <p>Без посещения отделения банка</p>
            </div>
            <div className={style.topic}>
              <img src={compwithoutinet} alt="not found" />
              <p>Без предоставления документов</p>
            </div>
          </div>
          <section className={style.firstBlockOfDescription}>
            <h6 className={style.firstDescription}>Особые условия</h6>
            <h6 className={style.secondDescription}>
              Безналичное перечисление денежных средств в соответствии с
              указаниями Кредитополучателя путем проведения безналичных расчетов
              в оплату приобретаемых у организации-партнера товаров, работ,
              услуг.
            </h6>
          </section>
          <section className={style.secondBlockOfDescription}>
            <h6 className={style.firstDescription}>Предоставление кредита</h6>
            <h6 className={style.secondDescription}>
              Предоставление и подписание документов на получение кредита и
              заключение кредитного договора по данной программе кредитования
              осуществляется посредством системы дистанционного банковского
              обслуживания ВЕБ-портал 24 часа 7 дней в неделю.
            </h6>
          </section>
          <section className={style.firstBlockOfDescription}>
            <h6 className={style.firstDescription}>
              Способ подтверждения дохода
            </h6>
            <h6 className={style.secondDescription}>
              Подтверждение доходов осуществляется путем отражения заявителем в
              заявлении-анкете сведений о среднемесячном доходе за последние три
              месяца. Предоставление справки о доходах и иных документов,
              подтверждающих доходы, не требуется.
            </h6>
          </section>
          <section className={style.secondBlockOfDescription}>
            <h6 className={style.firstDescription}>
              Кто может быть заявителем
            </h6>
            <div className={style.secondDescription}>
              <p>
                Физические лица – граждане Республики Беларусь, иностранные
                граждане и лица без гражданства, отвечающие следующим условиям в
                совокупности:
              </p>
              <p>
                1) Возраст: не менее 21 года для женщин, 24 лет для мужчин на
                дату представления заявителем документов и не более 65 лет – для
                женщин и 65 лет – для мужчин на дату окончания срока возврата
                (погашения) кредита;
              </p>
              <p>2) регистрация на территории Республики Беларусь; </p>
              <p>
                3) наличие вида на жительство на территории Республики Беларусь
                (для иностранных граждан и лиц без гражданства);
              </p>
              <p>
                4) постоянный источник дохода на территории Республики Беларусь;
              </p>
              <p>
                5) непрерывный стаж работы на текущем месте работы не менее 3
                (трех) месяцев на дату представления заявителем документов;{" "}
              </p>
              <p>
                6) физическое лицо (заявитель) – не является: индивидуальным
                предпринимателем, ремесленником либо самозанятым.
              </p>
            </div>
          </section>
          <section className={style.firstBlockOfDescription}>
            <h6 className={style.firstDescription}>Дополнительные условия</h6>
            <div className={style.secondDescription}>
              <p>
                Физические лица – граждане Республики Беларусь, иностранные
                граждане и лица без гражданства, отвечающие следующим условиям в
                совокупности:
              </p>
              <p>
                1. По настоящей программе кредитования может быть предоставлено
                несколько кредитов одному физическому лицу при условии, что
                сумма остатка задолженности по кредитам в рамках настоящей
                программы кредитования не превысит максимальную сумму кредита,
                установленную по настоящей программе кредитования.
              </p>
              <p>
                2. Дата ежемесячного возврата (погашения) основного долга и
                процентов за пользование кредитом устанавливается в соответствии
                с указаниями кредитополучателя с 10 по 25 число месяца.
              </p>
              <p>
                3. Кредитный продукт доступен для оформления любому физическому
                лицу, зарегистрированному в МСИ. Регистрацию можно пройти в
                процессе оформления онлайн-кредита.
              </p>
              <p>
                4. Срок действия решения банка о предоставлении кредита
                составляет 3 минуты с момента принятия решения.
              </p>
              <p>
                5. Предоставление и подписание документов на получение кредита и
                заключение кредитного договора по настоящей программе
                кредитования осуществляется посредством системы дистанционного
                банковского обслуживания ВЕБ-портал.
              </p>
              <p> 6. Сумма кредита от 50 до 7000 белорусских рублей.</p>
              <p>
                7. Заявка рассматривается банком в соответствии с переданным
                Партнером в Банк заказом посредством ВЕБ-портала для получения
                кредита на приобретение товаров у Партнера.
              </p>
            </div>
          </section>
          <section className={style.secondBlockOfDescription}>
            <h6 className={style.firstDescription}>Погашение кредита</h6>
            <div className={style.secondDescription}>
              <p>
                1. Путем внесения наличных денег в пункт обмена валют или кассу
                любого подразделения Банка БелВЭБ, вне зависимости от места
                получения кредита.
              </p>
              <p>
                2. Платежной карточкой любого банка Республики Беларусь через
                сеть устройств (банкоматы, инфокиоски), обозначенных логотипом
                СБС.
              </p>
              <p> 3. В сети интернет посредством услуги «Интернет-Банк».</p>
              <p>4. В системе ЕРИП.</p>
              <p>
                Досрочный возврат (погашение) кредита допускается без
                ограничений и штрафов.
              </p>
            </div>
          </section>
        </>
      );
    } else if (state === 4) {
      return (
        <>
          <div className={style.MainDescriptionOfCredits}>
            <p>
              Рассрочка на 12 месяцев на любую покупку в сети магазинов i-Store
              от банка БелВЭБ.
            </p>
            <p>
              Приобретайте технику Apple в сети магазинов i-Store в рассрочку на
              12 месяцев без процентов банку! Стоимость просто делится равными
              частями на весь период рассрочки (12 месяцев).
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
                <h6 className={style.secondDescription}>до 12 месяцев;</h6>
              </section>
              <section className={style.firstBlockOfDescription}>
                <img
                  src="https://cdn0.it4profit.com/pages/7/104/table-icon-4.png"
                  alt="not found"
                />
                <h6 className={style.firstDescription}>Размер рассрочки</h6>
                <h6 className={style.secondDescription}>
                  От 50 до 7000 белорусских рублей
                </h6>
              </section>
              <section className={style.secondBlockOfDescription}>
                <img
                  src="https://cdn0.it4profit.com/pages/7/104/table-icon-5.png"
                  alt="not found"
                />
                <h6 className={style.firstDescription}>Стоимость устройства</h6>
                <h6 className={style.secondDescription}>
                  при использовании рассрочки стоимость устройства увеличивается
                  на 22%
                </h6>
              </section>
              <section className={style.firstBlockOfDescription}>
                <img
                  src="https://cdn0.it4profit.com/pages/7/104/table-icon-7.png"
                  alt="not found"
                />
                <h6 className={style.firstDescription}>Способы погашения</h6>
                <h6 className={style.secondDescription}>
                  <li>
                    путем внесения наличных денег в пункт обмена валют или кассу
                    любого подразделения Банка БелВЭБ;
                  </li>
                  <li>в сети интернет посредством услуги «Интернет-Банк»;</li>
                  <li>в системе ЕРИП.</li>
                </h6>
              </section>
              <section className={style.secondBlockOfDescription}>
                <img
                  src="https://cdn0.it4profit.com/pages/7/104/table-icon-8.png"
                  alt="not found"
                />
                <h6 className={style.firstDescription}>Порядок уплаты</h6>
                <h6 className={style.secondDescription}>
                  Возврат потраченной суммы равными долями с 10 по 25 число
                  каждого месяца. Возможность досрочного погашения без
                  ограничений и штрафных санкций.
                </h6>
              </section>
            </div>
          </div>
          <div className={style.map}>
            <p>
              Где можно приобрести товар по рассрочке от БелВЭБ на 12 месяцев
            </p>
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
          </div>

          <div className={style.methodsOfInstallment}>
            <li>
              Выберите любой товар в i-Store. Оформите заказ, выбрав способом
              оплаты рассрочку на 12 месяцев от Банка БелВЭБ.
            </li>
          </div>

          <div className={style.contactsBlock}>
            <div className={style.phone}>
              <img
                src="https://cdn0.it4profit.com/pages/7/104/info-phone-item.png"
                alt="not found"
              ></img>
              <h3>Телефон для справки</h3>
              <a href="$">+375 17 215-61-15</a>
            </div>
            <div className={style.bankLink}>
              <img
                src="https://cdn0.it4profit.com/pages/7/104/info-web-item.png"
                alt="not found"
              ></img>
              <h3>Сайт</h3>
              <a href="$">БелВЭБ</a>
            </div>
          </div>
        </>
      );
    } else if (state === 5) {
      return (
        <>
          <div className={style.MainDescriptionOfCredits}>
            <p>Рассрочка по картам «Халва»</p>
            <h5>Банк-партнер МТБанк</h5>
            <p>
              0% первоначальный взнос, 3 месяца на любой товар,
              <br /> не участвующий в акции.
              <br /> Без справок с работы и поручителей.
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
    } else if (state === 6) {
      return (
        <>
          <div className={style.MainDescriptionOfCredits}>
            <p>Рассрочка по «Карте покупок»</p>
            <h5>Банк-партнер Белгазпромбанк</h5>
            <p>
              0% первоначальный взнос,
              <br /> 3 месяца на любой товар, не участвующий в акции.
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
                  предоставляемый банком - 10 000 BYN
                </h6>
              </section>
              <section className={style.secondBlockOfDescription}>
                <img
                  src="https://cdn0.it4profit.com/pages/7/104/table-icon-5.png"
                  alt="not found"
                />
                <h6 className={style.firstDescription}>Процентная ставка</h6>
                <h6 className={style.secondDescription}>0,000001% годовых</h6>
              </section>
              <section className={style.firstBlockOfDescription}>
                <img
                  src="https://cdn0.it4profit.com/pages/7/104/table-icon-7.png"
                  alt="not found"
                />
                <h6 className={style.firstDescription}>Способы погашения</h6>
                <h6 className={style.secondDescription}>
                  <li>
                    онлайн через сервис интернет-банка или мобильное приложение;
                  </li>
                  <li>
                    интернет-переводом с платежной карточки любых банков,
                    зарегистрированных на территории Республики Беларусь;
                  </li>
                  <li>
                    путем внесения наличных в кассах РУП «Белпочта», инфокиосках
                    и кассах ОАО «Белгазпромбанк».
                  </li>
                </h6>
              </section>
              <section className={style.secondBlockOfDescription}>
                <img
                  src="https://cdn0.it4profit.com/pages/7/104/table-icon-8.png"
                  alt="not found"
                />
                <h6 className={style.firstDescription}>Порядок уплаты</h6>
                <h6 className={style.secondDescription}>
                  Возврат потраченной суммы на карту равными долями до 20 числа
                  каждого месяца. Возможность досрочного погашения без штрафных
                  санкций
                </h6>
              </section>
            </div>
          </div>
          <div className={style.map}>
            <p>Где можно приобрести товар по «Карте покупок»</p>
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
            <h3>Если у вас еще нет «Карты покупок» от Белгазпромбанка:</h3>
            <li>
              Можно оформить Карту покупок в любом отделении Белгазпромбанка,
              отправить заявку на сайте, оформить в режиме онлайн в
              Интернет-Банке и мобильном приложении «BGPB mobile».
            </li>
            <li>
              Выберите любой товар в i-Store, не участвующий в акции. Оплатите
              товар картой в любом магазине i-Store либо на нашем сайте в
              пределах лимита. Вы можете осуществить платеж частично
              собственными средствами и частично картой.
            </li>
            <h3>Если у вас есть «Карта покупок» от Белгазпромбанка:</h3>
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
              <a href="$">Белгазпромбанк</a>
            </div>
          </div>
        </>
      );
    } else if (state === 7) {
      return (
        <>
          <div className={style.MainDescriptionOfCredits}>
            <p>Рассрочка по карте «Черепаха»</p>
            <h5>Банк-партнер ВТБ</h5>
            <p>
              0% первоначальный взнос,
              <br /> 8 месяцев на любой товар, не участвующий в акции.
              <br /> Без справок с работы и поручителей.
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
                <h6 className={style.secondDescription}>8 месяцев;</h6>
              </section>
              <section className={style.firstBlockOfDescription}>
                <img
                  src="https://cdn0.it4profit.com/pages/7/104/table-icon-4.png"
                  alt="not found"
                />
                <h6 className={style.firstDescription}>Размер рассрочки</h6>
                <h6 className={style.secondDescription}>
                  в пределах лимита на карте; максимальный лимит,
                  предоставляемый банком - 5 000 BYN
                </h6>
              </section>
              <section className={style.secondBlockOfDescription}>
                <img
                  src="https://cdn0.it4profit.com/pages/7/104/table-icon-5.png"
                  alt="not found"
                />
                <h6 className={style.firstDescription}>Процентная ставка</h6>
                <h6 className={style.secondDescription}>0,0001% годовых</h6>
              </section>
              <section className={style.firstBlockOfDescription}>
                <img
                  src="https://cdn0.it4profit.com/pages/7/104/table-icon-7.png"
                  alt="not found"
                />
                <h6 className={style.firstDescription}>Способы погашения</h6>
                <h6 className={style.secondDescription}>
                  <li>
                    С 1 по 25 число месяца:
                    <br /> - в офисах Банка без использования карточки.
                  </li>
                  <li>
                    С 1 по 22 число месяца:
                    <br /> - в офисах Банка с использованием карточки;
                    <br /> - в отделениях РУП «Белпочта»;
                    <br /> - в пунктах банковского обслуживания 24
                    банков-участников системы «Расчет» - ЕРИП; <br />- через
                    платежные Интернет-сервисы (например, www.e-pay.by); <br />-
                    посредством услуги "Интернет-банк" Банка ВТБ;
                    <br /> - в банкоматах и инфокиосках Банка ВТБ;
                    <br /> - переводом с карточки на карточку (P2P), в том числе
                    с карточки иного банка.
                  </li>
                </h6>
              </section>
              <section className={style.secondBlockOfDescription}>
                <img
                  src="https://cdn0.it4profit.com/pages/7/104/table-icon-8.png"
                  alt="not found"
                />
                <h6 className={style.firstDescription}>Порядок уплаты</h6>
                <h6 className={style.secondDescription}>
                  Возврат потраченной суммы на карту равными долями до 25 числа
                  каждого месяца в офисах Банка, до 22 числа каждого месяца -
                  иными способами оплаты. Возможность досрочного погашения без
                  штрафных санкций.
                </h6>
              </section>
            </div>
          </div>
          <div className={style.map}>
            <p>Где можно приобрести товар по карте «Черепаха»</p>
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
            <h3>Если у вас есть карта «Черепаха» от Банка ВТБ:</h3>
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
              <a href="$">+375 17 309-15-15</a>
            </div>
            <div className={style.bankLink}>
              <img
                src="https://cdn0.it4profit.com/pages/7/104/info-web-item.png"
                alt="not found"
              ></img>
              <h3>Сайт</h3>
              <a href="$">Банк ВТБ</a>
            </div>
          </div>
        </>
      );
    } else if (state === 8) {
      return (
        <>
          <div className={style.MainDescriptionOfCredits}>
            <p>Рассрочка по «КартаFUN»</p>
            <h5>Банк-партнер БПС-Сбербанк</h5>
            <p>
              0% первоначальный взнос,
              <br /> 3 месяца на любой товар, не участвующий в акции. <br />
              Без справок с работы и поручителей.
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
                  предоставляемый банком - 10 000 BYN
                </h6>
              </section>
              <section className={style.secondBlockOfDescription}>
                <img
                  src="https://cdn0.it4profit.com/pages/7/104/table-icon-5.png"
                  alt="not found"
                />
                <h6 className={style.firstDescription}>Процентная ставка</h6>
                <h6 className={style.secondDescription}>0,000001% годовых</h6>
              </section>
              <section className={style.firstBlockOfDescription}>
                <img
                  src="https://cdn0.it4profit.com/pages/7/104/table-icon-7.png"
                  alt="not found"
                />
                <h6 className={style.firstDescription}>Способы погашения</h6>
                <h6 className={style.secondDescription}>
                  <li>
                    Онлайн через сервис интернет-банка или мобильное приложение;
                  </li>
                  <li>
                    интернет-переводом с платежной карточки любых банков,
                    зарегистрированных на территории Республики Беларусь;
                  </li>
                  <li>
                    путем внесения наличных в кассах РУП «Белпочта», инфокиосках
                    и кассах ОАО БПС-Сбербанк.
                  </li>
                </h6>
              </section>
              <section className={style.secondBlockOfDescription}>
                <img
                  src="https://cdn0.it4profit.com/pages/7/104/table-icon-8.png"
                  alt="not found"
                />
                <h6 className={style.firstDescription}>Порядок уплаты</h6>
                <h6 className={style.secondDescription}>
                  Возврат потраченной суммы на карту равными долями до
                  последнего дня каждого месяца. Возможность досрочного
                  погашения без штрафных санкций
                </h6>
              </section>
            </div>
          </div>
          <div className={style.map}>
            <p>Где можно приобрести товар по «КартаFUN»</p>
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
            <h3>Если у вас есть «КартаFUN» от БПС-Сбербанк:</h3>
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
              <a href="$">148</a>
            </div>
            <div className={style.bankLink}>
              <img
                src="https://cdn0.it4profit.com/pages/7/104/info-web-item.png"
                alt="not found"
              ></img>
              <h3>Сайт</h3>
              <a href="$">БПС-Сбербанк</a>
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
      <div
        className={
          state === 3
            ? style.wrapperNewCentury
            : style.wrapperDescriptionOfCredits
        }
      >
        {renderBankList()}
      </div>
    </>
  );
};

export default BankSwitcher;
