import style from "./style.module.css";

const IStoreParthner = () => {
  return (
    <div className={style.iParthner}>
      <img
        src="https://appleinsider.ru/wp-content/uploads/2011/07/store2.jpg"
        alt="not found"
      />
      <div>
        <div className={style.headParthner}>
          i-Store (айСтор) – официальный партнёр компании Apple в Беларуси со
          статусом Apple Premium Reseller.
        </div>
        <h2>
          Статус Apple Premium Reseller даётся только профессионалам в своём
          деле.
        </h2>
        <h3>
          В наших магазинах можно не только купить iPhone, компьютер Mac или
          планшет iPad, а также другую технику Apple inc и аксессуары для неё.
          i-Store – это прежде всего место, пропитанное атмосферой Apple, в
          котором вам помогут с выбором техники, научат ей пользоваться, дадут
          советы по эксплуатации ваших гаджетов и предложат качественные
          аксессуары.
        </h3>
        <div>
          <a href="$">
            Показать полностью
            <div className={style.circleBottomLine}>
              <div className={style.arrowBottomLine}></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default IStoreParthner;
