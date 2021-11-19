import "./style.css";

const NavBlock = () => {
  return (
    <>
      <div className="navBlock">
        <div className="bodyBlock">
          <div className="itemNavBlock">
            <a href="$">
              <img
                src="https://img.stereo.ru/news/2020/9/376e84ca3ad11f9fcdd0b55f6718c7c7.jpg"
                alt="not found"
              ></img>
            </a>
            <h1>Bose Sleepbuds – уникальные наушники не для музыки</h1>
            <h2>
              Bose Sleepbuds - чтобы лучше слышать свой сон. Технологичные,на
              самих наушниках для сна и кейсе отсутствуют органы управления.
            </h2>
            <h3>13.10.2021</h3>
          </div>
          <div className="itemNavBlock">
            <a href="$">
              <img
                src="https://i.rtings.com/assets/products/lgfIvCFh/bose-soundbar-500/1-front-large.jpg"
                alt="not found"
              ></img>
            </a>
            <h1>
              Bose Soundbar 500. Бас, который вы не сразу заметите, но
              обязательно почувствуете.
            </h1>
            <h2>BOSE HOME SPEAKER 500 - мощь стереосистемы в моноблоке</h2>
            <h3>13.10.2021</h3>
          </div>
          <div className="itemNavBlock">
            <a href="$">
              <img
                src="https://img.ej.by/files/362/573/status_otkrytie.jpg"
                alt="not found"
              ></img>
            </a>
            <h1>
              Обновитесь выгодно со Статусбанком! Сниженные % ставки на кредит в
              честь выхода новой серии iPhone 13
            </h1>
            <h2>
              Пришло время обновить Ваш телефон! Специально к выходу новой серии
              iPhone 13 ОАО «СтатусБанк» снижает ставку на кредит.
            </h2>
            <h3>13.10.2021</h3>
          </div>
          <div className="itemNavBlock">
            <a href="$">
              <img
                src="https://img1.infobank.by/images/imagesindb/iphone291021.jpg.aspx"
                alt="not found"
              ></img>
            </a>
            <h1>Новые iPhone 13 и iPhone 13 Pro уже доступны к предзаказу!</h1>
            <h2>Новые iPhone 13 и iPhone 13 Pro уже доступны к предзаказу!</h2>
            <h3>13.10.2021</h3>
          </div>
        </div>
      </div>
      <div className="bottomLineInfo">
        <a href="$">
          Все новости магазина
          <div className="circleBottomLine">
            <div className="arrowBottomLine"></div>
          </div>
        </a>
      </div>
    </>
  );
};

export default NavBlock;
