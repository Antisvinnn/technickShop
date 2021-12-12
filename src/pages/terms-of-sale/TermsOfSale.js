import style from "./style.module.scss";
import { useLocation } from "react-router";
import RefBreadCrumb from "../../components/refBreadCrumb/RefBreadCrumb";

const TermsOfSale = () => {
  let location = useLocation();

  return (
    <>
      <RefBreadCrumb path={location.pathname} className={style.breadCrumb} />

      <div className={style.mainWord}>
        <h1>Оплата и доставка</h1>
      </div>
      <p className={style.orderOfProduct}>Заказ товара</p>
      <div className={style.wrapperOrderProduct}>
        <div>
          <div className={style.coralImage}>
            <img
              src="https://cdn0.it4profit.com/files/7/ntos-icon-1.png"
              alt="not found"
            />
          </div>
          <p>
            1. Для оформления заказа Вам необходимо добавить товар в виртуальную
            корзину. Вы можете продолжать просмотр страниц сайта - добавленный
            товар будет сохранятся в корзине.
          </p>
          <p>
            2. При оформлении покупки необходимо зайти в корзину и заполнить все
            необходимые данные.
          </p>
          <p>
            3. Далее Вас попросят сообщить некоторую контактную информацию,
            которая поможет нам правильно доставить Ваш заказ, проверить
            наименование и количество единиц товара. В конце страницы Вы увидите
            кнопку, нажатие на которую подтверждает заказ.
          </p>
          <p>4. На Ваш e-mail придёт письмо с номером заказа.</p>
          <p>
            5. После того, как Ваш заказ будет оформлен, наш менеджер свяжется с
            Вами в течение 30 минут и сообщит Вам ориентировочное время
            доставки.
          </p>
          <p>Вы также можете заказать товар, позвонив по номерам телефона:</p>
          <p className={style.showNumber}>+375 Показать номер</p>
        </div>

        <div>
          <div>
            <img
              src="https://cdn0.it4profit.com/files/7/group-19-2.svg"
              alt="not found"
            />
          </div>
          <p>Оформление предзаказа</p>
          <p>
            1. Кнопка для оформления предаказа располагается на месте кнопки
            добавления товара в виртуальную корзину, и появляется в том случае,
            когда товара Apple нет в наличии.
          </p>
          <p>
            2. Для оформления предзаказа Вам необходимо добавить товар в
            виртуальную корзину, зайти в корзину и заполнить все необходимые
            данные. В конце страницы Вы увидите кнопку, нажатие на которую
            подтверждает заказ.
          </p>
          <p>3. Заявка приходит менеджеру и фиксируется в системе.</p>
          <p>
            4. После того, как товар появляется в наличии, менеджер связывается
            с Вами, используя контактные данные, оставленные при оформлении
            предзаказа .
          </p>
          <p>
            Обращаем Ваше внимание, что цена предзаказанного товара является
            предварительной и может быть изменена к моменту появления товара в
            наличии.
          </p>
        </div>

        <div>
          <div className={style.tGreenImage}>
            <img
              src="https://cdn0.it4profit.com/files/7/ntos-icon-3.png"
              alt="not found"
            />
          </div>
          <p>Оформление предзаказа</p>
          <p>
            В данный момент наш онлайн-магазин работает по графику: с 9:00 до
            21:00 в будние, с 10:00 до 19:00 в выходные и праздничные дни.
          </p>
          <p>
            Обработка вашего заказа в выходной день может занять некоторое
            время, вплоть до ближайшего рабочего дня. В случае необходимости
            приобрести товар срочно в выходной день, обратитесь, пожалуйста, в
            наши физические магазины:
          </p>
          <a href="$">i-Store Green City на Притыцкого, 156</a>
          <br></br>
          <a href="$">i-Store Dana Mall на Петра Мстиславца, 11</a>
          <br></br>
          <a href="$">i-Store на Ленина 5</a>
          <br></br>
          <a href="$">i-Store Galleria Minsk на Победителей, 9</a>
        </div>
      </div>

      <p className={style.orderOfProduct}>Оплата</p>
      <div className={style.wrapperPayment}>
        <div>
          <div className={style.blueImage}>
            <img
              src="https://cdn0.it4profit.com/files/7/ntos-icon-4.png"
              alt="not found"
            />
          </div>
          <p>
            Наличными деньгами при получении товара курьером, либо в пункте
            самовывоза.
          </p>
          <p className={style.otherText}>
            Расчёт производится только в белорусских рублях. Обратите внимание,
            что оплата наличными деньгами доступна только для наших клиентов в
            Минске. Заказ в другие города Беларуси осуществляется только по
            предоплате посредством банковского перевода либо оплаты через
            карточку.
          </p>
        </div>

        <div>
          <div className={style.tBlueImage}>
            <img
              src="https://cdn0.it4profit.com/files/7/ntos-icon-5.png"
              alt="not found"
            />
          </div>
          <p>Безналичным расчетом</p>
          <p className={style.otherText}>
            Любой товар нашего интернет-магазина можно приобрести по
            безналичному расчету.
          </p>
          <p className={style.otherText}>
            1. Добавьте товар в виртуальную корзину и следуйте инструкциям для
            продолжения (цены на сайте уже включают НДС).
          </p>
          <p className={style.otherText}>
            2. После того, как Ваш заказ будет оформлен, наш менеджер свяжется с
            Вами и отправит договор поставки на электронную почту.
          </p>
          <p className={style.otherText}>
            3. Получив договор, оплатите его в течение 1 рабочего дня (по
            истечению данного срока, стоимость и наличие товара не
            гарантируется).
          </p>
          <p className={style.otherText}>
            4. После зачисления денег с Вами свяжется наш специалист для
            уточнения времени доставки.
          </p>
          <p className={style.otherText}>
            5. В назначенное время и место курьер привезет товар вместе с
            оригиналами документов на подпись.
          </p>
          <p className={style.otherText}>
            Все интересующие Вас вопросы можно задать по почте b2b@i-store.by
            или по номерам телефона:
          </p>
          <a href="$">+375 (17) 387-03-82</a>
          <br></br>
          <a href="$">+375 (29) 355-50-93</a>
          <p className={style.otherText}>
            Обращаем ваше внимание, что минимальная сумма для оформления
            товарно-транспортных накладных – 250 белорусских рублей.
          </p>
        </div>

        <div>
          <div className={style.coralImage}>
            <img
              src="https://cdn0.it4profit.com/files/7/ntos-icon-8.png"
              alt="not found"
            />
          </div>
          <p>
            Банковскими пластиковыми карточками при получении курьером либо в
            пункте самовывоза через терминалы оплаты.
          </p>
          <p className={style.otherText}>
            Заранее сообщите оператору, что Вы планируете расплатиться картой и
            необходим терминал для оплаты, после чего вам будут озвучены сроки
            получения заказа. Как правило, доставка товара осуществляется на
            следующий день, при условии наличия товара.
          </p>
        </div>
      </div>

      <div className={style.wrapperOrderProduct}>
        <div>
          <div className={style.brownImage}>
            <img
              src="https://cdn0.it4profit.com/files/7/ntos-icon-9.png"
              alt="not found"
            />
          </div>
          <p>
            Онлайн картами Visa, MasterCard<br></br>
            (через <a href="$"> ЗАО «Альфа-Банк»</a>)
          </p>
          <p className={style.otherText}>
            Оплата производится через интернет в режиме реального времени
            непосредственно после оформления заказа. Для совершения финансовой
            операции подходят карточки международных систем VISA (всех видов),
            MasterCard (в том числе Maestro), эмитированные любым банком мира, в
            том числе эмитированные АСБ «Беларусбанк».
          </p>
          <a href="$">Подробнее</a>
        </div>

        <div>
          <div className={style.brownImage}>
            <img
              src="https://cdn0.it4profit.com/files/7/ntos-icon-9.png"
              alt="not found"
            />
          </div>
          <p>Оплата по QR-коду (сервис Оплати)</p>
          <p className={style.otherText}>
            Для совершения платежа в корзине сайта необходимо выбрать способ
            оплаты "Оплата по QR-коду (сервис Оплати)". Далее - отсканировать
            QR-код или пройти по ссылке. На последнем шаге клиент будет
            переадресован в приложение О!Плати для совершения платежа.
          </p>
          <p className={style.otherText}>
            Для совершения платежа при доставке, необходимо предъявить курьеру
            QR-код кошелька, который вы используете для оплаты в приложении
            "Оплати". Курьер считает предоставленный код, после чего сумма
            заказа будет списана с кошелька. Для проверки правильности оплаты,
            нажмите "Посмотреть чек" или выписку.
          </p>
        </div>

        <div>
          <div className={style.brownImage}>
            <img
              src="https://cdn0.it4profit.com/files/7/ntos-icon-9.png"
              alt="not found"
            />
          </div>
          <p>Рассрочка или кредит</p>
          <p className={style.otherText}>
            <a href="$">Подробнее</a> о получении товара в рассрочку либо
            кредит.
          </p>
          <p className={style.otherText}>
            Обращаем внимание, что при совершении оплаты с привлечением
            кредитных средств банка или с использованием карт рассрочки скидки
            (специальные предложения, бонусы и т.д.) могут не предоставляться.
          </p>
        </div>
      </div>
      <p className={style.orderOfProduct}>Доставка</p>
      <div className={style.wrapperOrderProduct}>
        <div>
          <div className={style.firstImageFourthLine}>
            <img
              src="https://cdn0.it4profit.com/files/7/ntos-icon-10.png"
              alt="not found"
            />
          </div>
          <p>Самовывоз бесплатно из магазина i-Store</p>
          <a href="$">г. Минск, ул. Притыцкого, 156</a>
          <br></br>
          <a href="$">г. Минск, ул. Петра Мстиславца, 11</a>
          <br></br>
          <a href="$">г. Минск, ул. Ленина 5</a>
          <br></br>
          <a href="$">г. Минск, пр-т Победителей, 9</a>
          <p className={style.otherText}>
            Предварительно необходимо уточнить у менеджера интернет-магазина
            наличие товара в салонах или оформить заказ на сайте.
          </p>
        </div>

        <div>
          <div className={style.tBlueImage}>
            <img
              src="https://cdn0.it4profit.com/files/7/ntos-icon-11.png"
              alt="not found"
            />
          </div>
          <p>Доставка курьером i-Store по г. Минску</p>
          <p className={style.otherText}>
            Доставка осуществляется в день заказа, при условии наличия товара.
            Товары, которые были заказаны на сайте после 19:00 (пн-пт), будут
            доставлены на следующий день. Доставка по Минску осуществляется
            бесплатно при сумме заказа свыше 200,00 руб. При заказе до 200,00
            руб, стоимость доставки по Минску - 10,00 руб.
          </p>
        </div>

        <div>
          <div className={style.blueImage}>
            <img
              src="https://cdn0.it4profit.com/files/7/ntos-icon-12.png"
              alt="not found"
            />
          </div>
          <p>Доставка по Беларуси в более чем 131 город</p>
          <p className={style.otherText}>
            Отправка товара осуществляется на следующий день после оплаты, при
            условии наличия товара. Стоимость доставки по РБ рассчитывается
            автоматически в момент оформления заказа и зависит от удаленности
            того или иного города. В среднем это 10,00 руб.
          </p>
        </div>
      </div>
      <p className={style.orderOfProduct}>Получение товара</p>
      <div className={style.wrapperOrderProduct}>
        <div>
          <div className={style.brownImage}>
            <img
              src="https://cdn0.it4profit.com/files/7/ntos-icon-13.png"
              alt="not found"
            />
          </div>
          <p>
            Осмотрите полученный товар и убедитесь в отсутствии внешних
            дефектов, затем поставьте свою подпись, подтверждающую отсутствие
            претензий к комплектации и внешнему виду товара;
          </p>
        </div>

        <div>
          <div className={style.coralImage}>
            <img
              src="https://cdn0.it4profit.com/files/7/ntos-icon-14.png"
              alt="not found"
            />
          </div>
          <p>После проверки товара рассчитайтесь с курьером;</p>
        </div>

        <div>
          <div className={style.tGreenImage}>
            <img
              src="https://cdn0.it4profit.com/files/7/ntos-icon-15.png"
              alt="not found"
            />
          </div>
          <p>
            После проведения оплаты курьер вручает Вам чек и гарантийный талон,
            которые подтверждают факт покупки в нашем интернет-магазине.
          </p>
        </div>
      </div>
      <div className={style.documents}>
        <p>Образцы документов</p>
        <div className={style.wrapperPhotoOfDocuments}>
          <div className={style.photoOfDocuments}>
            <img
              src="https://cdn0.it4profit.com/files/7/check-1-1-terms-of-sale.jpg"
              alt="not found"
            />
            <p>Чек</p>
          </div>
          <div className={style.photoOfDocuments}>
            <img
              src="https://cdn0.it4profit.com/files/7/user_doc-3.jpg"
              alt="not found"
            />
            <p>Гарантийный талон</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfSale;
