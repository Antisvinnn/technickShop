import style from "./style.module.scss";
import house from "../../assets/images/credits/pngegg.png";

const Iphone = () => {
  return (
    <>
      <div class={style.container}>
        <div className={style.nav}>
          <img className={style.house} src={house} alt="not found" />
          <div class={style.arrowBottomLine}></div>
          <p>iPhone</p>
        </div>
        <div className={style.banner}>
          <img
            src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/plain/s3://catalog-categories/7/13/iphone_12_hero_5-up_print__gben_12.png@webp"
            alt="not found"
          />
          <div className={style.bannerText}>
            <p className={style.headerText}>IPhone</p>
            <p className={style.mainText}>Созданы для удобства</p>
          </div>
        </div>
      </div>
      <div className={style.listOfIphone}>
        <div>
          <p>New</p>
        </div>
        <div>
          <p>New</p>
        </div>
        <div>
          <p>New</p>
        </div>
        <div>
          <p>New</p>
        </div>
      </div>
    </>
  );
};

export default Iphone;
